# Personal Portfolio Static site created with Astro & Tailwind

Check [Astro official documentation](https://docs.astro.build)

## How to run

1. Clone the repository.
2. Make sure you have installed Node.js (v.22.12.0 or higher).
3. Make sure npm dependencies are installed `npm install`.
4. Execute the following comand:

```sh
npm run dev
```                           
Starts local dev server at `localhost:4321`


## Project Structure

```text
/
├── public/...
└── src/
    └── components/...
    ├── config/...
    ├── data/...
    ├── pages/...
    ├── styles/...
    └── utils/...

```
- `public`: images, models, icons, etc.
- `components`: Astro components (Header, Footer, Button, etc).
- `config`: Global site data.
- `data`: Specific data to feed the pages.
- `pages`: Each file represents a web page.
- `styles`: CSS files
- `utils`: TS files with common used functions.

## Useful commands

All commands are run from the root of the project, from a terminal:

| Command                                  | Action                                           |
| :--------------------------------------- | :----------------------------------------------- |
| `npm install`                            | Installs dependencies                            |
| `npm run dev`                            | Starts local dev server at `localhost:4321`      |
| `npm run build`                          | Build your production site to `./dist/`          |
| `npm run preview`                        | Preview your build locally, before deploying     |
| `npm run astro ...`                      | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`                | Get help using the Astro CLI                     |
| `npm create astro@latest <project_name>` | Create a new project                             |
