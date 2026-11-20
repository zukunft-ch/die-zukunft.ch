#!/usr/bin/env python3
"""Read and manage form submissions (form worker at api.die-zukunft.ch).

Usage (via mise):
  mise run forms                      overview: pending applications, latest contacts, counts
  mise run forms members [--all]      membership applications (default: pending only)
  mise run forms contacts             contact messages, newest first
  mise run forms subscribers          newsletter sign-ups
  mise run forms show <key>           one application in full
  mise run forms admit <key> [date]   record the board's decision (date defaults to today)
  mise run forms reject <key> [date]
  mise run forms left <key> [date]    member has left
  mise run forms delete <key>         erase an application (right to erasure)

The admin token is the secret "cloudflare-forms-admin" (Proton Pass via the `secret`
tool): without $ADMIN_TOKEN the script re-runs itself under
`secret run ADMIN_TOKEN=cloudflare-forms-admin`. Without `secret`, set ADMIN_TOKEN yourself.
Nothing personal is written to disk; output goes to the terminal only.
"""

import json
import os
import shutil
import sys
import urllib.error
import urllib.parse
import urllib.request

API = "https://api.die-zukunft.ch"
FEES = {"regular": "ordentlich", "reduced": "reduziert"}


SECRET_NAME = "cloudflare-forms-admin"


def token():
    if os.environ.get("ADMIN_TOKEN"):
        return os.environ["ADMIN_TOKEN"]
    sys.exit(
        "No admin token. With the `secret` tool: secret has " + SECRET_NAME + " (create it with\n"
        "  secret gen " + SECRET_NAME + " && secret pipe " + SECRET_NAME
        + " -- sh -c 'cd worker-forms && npx wrangler secret put ADMIN_TOKEN')\n"
        "Otherwise set ADMIN_TOKEN to the worker's token."
    )


def call(path, method="GET", body=None):
    req = urllib.request.Request(
        API + path,
        method=method,
        data=json.dumps(body).encode() if body is not None else None,
        headers={"Authorization": f"Bearer {token()}", "Content-Type": "application/json",
                 "User-Agent": "dz-forms-cli"},
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        if e.code == 401:
            sys.exit("401 Unauthorized: the token does not match the worker's ADMIN_TOKEN.")
        sys.exit(f"{e.code}: {e.read().decode(errors='replace')}")


def key_path(key):
    return "/admin/members/" + urllib.parse.quote(key, safe="")


def when(rec):
    return rec.get("ts", "")[:16].replace("T", " ")


def print_member(m, full=False):
    name = f"{m.get('first_name', '')} {m.get('last_name', '')}".strip()
    status = m.get("status", "?")
    decided = f" ({m['decided']})" if m.get("decided") else ""
    print(f"{when(m)}  {status:<8}{decided}  {name} <{m.get('email', '')}>")
    print(f"    key: {m['key']}")
    if full:
        print(f"    Adresse: {m.get('street', '')}, {m.get('zip_city', '')}, {m.get('country', '')}")
        if m.get("phone"):
            print(f"    Telefon: {m['phone']}")
        print(f"    Sprache: {m.get('lang', '')}   Beitrag: {FEES.get(m.get('fee'), m.get('fee'))}"
              f"   Newsletter: {'ja' if m.get('newsletter') else 'nein'}")
        if m.get("help") or m.get("help_other"):
            print(f"    Mitarbeit: {', '.join(m.get('help', []))} {m.get('help_other') or ''}".rstrip())
        d = m.get("declarations", {})
        print("    Erklärungen: " + ", ".join(k for k, v in d.items() if v))
        if m.get("note"):
            print(f"    Notiz: {m['note']}")


def members(show_all=False):
    rows = sorted(call("/admin/members"), key=lambda m: m.get("ts", ""), reverse=True)
    if not show_all:
        rows = [m for m in rows if m.get("status") == "pending"]
    if not rows:
        print("Keine offenen Mitgliedschaftsanträge." if not show_all else "Keine Anträge.")
    for m in rows:
        print_member(m, full=True)
        print()
    return rows


def contacts(limit=None):
    rows = sorted(call("/admin/contacts"), key=lambda c: c.get("ts", ""), reverse=True)
    for c in rows[:limit]:
        tag = f" [{c['site']}/{c.get('topic') or 'general'}]" if c.get("site") == "world" else ""
        print(f"{when(c)}  {c.get('name', '')} <{c.get('email', '')}>{tag}")
        for line in c.get("message", "").splitlines() or [""]:
            print(f"    {line}")
        print()
    return rows


def subscribers():
    rows = sorted(call("/admin/subscribers"), key=lambda s: s.get("ts", ""), reverse=True)
    for s in rows:
        print(f"{when(s)}  {s.get('email', '')}  ({s.get('lang', '')}, {s.get('site', 'ch')})")
    print(f"\n{len(rows)} Anmeldungen")
    return rows


def overview():
    print("== Offene Mitgliedschaftsanträge ==\n")
    pending = members()
    allm = call("/admin/members")
    admitted = sum(1 for m in allm if m.get("status") == "admitted")
    print("== Neueste Kontaktnachrichten (5) ==\n")
    c = contacts(limit=5)
    subs = call("/admin/subscribers")
    print("== Zahlen ==")
    print(f"Mitglieder aufgenommen: {admitted}   offene Anträge: {len(pending)}   "
          f"Kontaktnachrichten: {len(c)}   Newsletter: {len(subs)}")


def main(argv):
    cmd = argv[0] if argv else "overview"
    args = argv[1:]
    if cmd == "overview":
        overview()
    elif cmd == "members":
        members(show_all="--all" in args)
    elif cmd == "contacts":
        contacts()
    elif cmd == "subscribers":
        subscribers()
    elif cmd == "show" and args:
        m = call(key_path(args[0]))
        print_member(m, full=True)
    elif cmd in ("admit", "reject", "left") and args:
        status = {"admit": "admitted", "reject": "rejected", "left": "left"}[cmd]
        body = {"status": status}
        if len(args) > 1:
            body["decided"] = args[1]
        m = call(key_path(args[0]), "PATCH", body)
        print_member(m)
    elif cmd == "delete" and args:
        call(key_path(args[0]), "DELETE")
        print(f"Gelöscht: {args[0]}")
    else:
        print(__doc__)
        sys.exit(1)


if __name__ == "__main__":
    # Fetch the token through `secret` (Proton Pass) when it isn't in the environment.
    if not os.environ.get("ADMIN_TOKEN") and shutil.which("secret") and not os.environ.get("FORMS_NO_SECRET"):
        os.environ["FORMS_NO_SECRET"] = "1"
        os.execvp("secret", ["secret", "run", f"ADMIN_TOKEN={SECRET_NAME}", "--",
                             sys.executable, os.path.abspath(__file__), *sys.argv[1:]])
    main(sys.argv[1:])
