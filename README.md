# Die Zukunft

 A static website for the Swiss political movement "Die Zukunft", generated with [Zola](https://www.getzola.org).

 ## Prerequisites

 - [Zola](https://www.getzola.org) (v0.22 or later)
 - `mise` task runner (optional, see below)

 ## Development

 You can start a development server with live reloading:

 ```sh
 mise dev
 ```

 or directly:

 ```sh
 zola serve
 ```

 ## Building for Production

 ```sh
 mise build
 ```

 or directly:

 ```sh
 zola build
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
