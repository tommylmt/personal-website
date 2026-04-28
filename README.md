<br />
<div align="center">
  <a href="https://thomaslamothe.com">
    <img src="https://thomaslamothe.com/img/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Personal Website</h3>
  <p align="center">
    Thomas' Personal website and Blog
    <br />
    <a href="https://github.com/tommylmt/personal-website">Repository</a>
    &middot;
    <a href="https://github.com/tommylmt/personal-website/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/tommylmt/personal-website/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

![Release][Release]
![License][License]
![Build][Build]

## About The Project

This repository hosts the codebase of my personal website and blog. I use it to share the things I do and love. 

I often write blog articles about technical and personal stuff I encountered during my journey as a web developer. If you like music, cinema, or you're interested in web development and scalable application, feel free to have a look at it.


### Built With

* [![Vue][Vue.js]][Vue-url]
* [![Typescript][Typescript]][Typescript-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![Axios][Axios]][Axios-url]

## Installing locally

### Prerequisites

Having these software is mandatory to install and work on the project locally:

* **npm** >= 10.9
* **node.js** >= 22

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:tommylmt/personal-website.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Clone and setup .env
   ```sh
   cp .env.example .env
   ```
4. Configure your `.env`
   ```dotenv
    NODE_ENV=development
    VITE_HOST=localhost
    VITE_PORT=5173

    VITE_BASE_URL=$HOST:$PORT
    VITE_API_BASE_URL=# Contact the repository owner for API Access
   ```

## License

Distributed under the GNU GPL v3. See `LICENSE` for more information.

## Contact

Thomas Lamothe - [@tommy.lmt](https://www.instagram.com/tommy.lmt/) - thomaslamothe@free.fr

[https://github.com/tommylmt](https://github.com/tommylmt)

## Acknowledgments

* Logo/Favicons: [Héloïse Bar](https://heloisebar.fr)

[Release]: https://img.shields.io/github/v/release/tommylmt/personal-website
[License]: https://img.shields.io/github/license/tommylmt/personal-website
[Build]: https://img.shields.io/github/actions/workflow/status/tommylmt/personal-website/build.yml

[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Typescript]: https://img.shields.io/badge/Typescript-35495E?logo=typescript&logoColor=3178C6
[Typescript-url]: https://www.typescriptlang.org/
[Axios]: https://img.shields.io/badge/Axios-35495E?logo=axios&logoColor=5A29E4
[Axios-url]: https://axios-http.com/
[Tailwind]: https://img.shields.io/badge/Tailwind-35495E?logo=tailwindcss&logoColor=06B6D4
[Tailwind-url]: https://tailwindcss.com/
