# Die Zukunft

 A static website for the Swiss political movement "Die Zukunft", generated with [Zola](https://www.getzola.org).

 ## Prerequisites

 - [Zola](https://www.getzola.org) **0.22.1 exactly** (pinned in `mise.toml` and in the Cloudflare Pages `ZOLA_VERSION` env var)
 - `mise` task runner (recommended — it installs and selects the pinned Zola)

 > **Do not build with Zola 0.23+.** 0.23 moved to Tera v2 and removed shortcodes and
 > template macros, which the avenir theme relies on (`{% import %}` macros, the `faq` /
 > `callout` / `newsletter_form` shortcodes). A plain `zola` from Homebrew is 0.23.x and fails
 > with `Unknown tag` on `{% import %}`. Use `mise run build` / `mise exec -- zola …`, or
 > activate mise in your shell so `zola` resolves to 0.22.1. Upgrading is a separate theme
 > migration (macros → components, shortcodes → components).

 ## Development

 You can start a development server with live reloading:

 ```sh
 mise dev
 ```

 or directly (with the pinned version):

 ```sh
 mise exec -- zola serve
 ```

 ## Building for Production

 ```sh
 mise build
 ```

 or directly (with the pinned version):

 ```sh
 mise exec -- zola build
 ```

 The generated site will be in the `public/` directory.

 ## Verification and Cleaning

 ```sh
 mise check    # Check for errors without building
 mise clean    # Remove the `public/` directory
 ```

 ## Tasks Configuration (`mise.toml`)

 The `mise.toml` file defines the following tasks:

 ```toml
 [tasks.dev]
 description = "Start Zola development server"
 run = "zola serve"

 [tasks.build]
 description = "Build the site for production"
 run = "zola build"

 [tasks.check]
 description = "Check the site for errors without building"
 run = "zola check"

 [tasks.clean]
 description = "Remove the public/ output directory"
 run = "rm -rf public/"
 ```

 ## Configuration

 See `config.toml` for site settings, SEO (`generate_sitemap`, `robots.txt`), and multilingual support (DE/FR/IT).
