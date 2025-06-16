# 99 Swapper

A modern, animated token swap UI built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Features

-   Beautiful, responsive UI with ShadCN and Tailwind
-   Animated transitions using Framer Motion
-   Token selection with search and mock price data
-   Swap direction toggle with smooth icon animation
-   Confirmation dialog before swapping
-   Loading states for async actions
-   Live price feed simulation
-   Theme toggle: dark and light mode support
-   Logic extendable navigation bar
-   Can improve by integrating web3 library to connect wallet and fetch trade route, gas fee, price impact, etc.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or newer recommended)
-   [Yarn](https://yarnpkg.com/) (or use npm if you prefer)

### Installation

1. **Clone the repository:**
    ```sh
    git clone <your-repo-url>
    cd code-challenge/src/problem2
    ```
2. **Install dependencies:**
    ```sh
    yarn install
    # or
    npm install
    ```

### Running the App

Start the development server:

```sh
yarn dev
# or
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Building for Production

```sh
yarn build
# or
npm run build
```

### Linting

```sh
yarn lint
# or
npm run lint
```

## Deployment (GitHub Pages)

You can view the deployed app here: [https://kalio753.github.io/99-swapper/](https://kalio753.github.io/99-swapper/)

## Project Structure

-   `src/` — Main source code
    -   `components/` — UI and logic components
    -   `assets/` — Images and static assets
    -   `data/` — Mock data (e.g., token prices)
-   `public/` — Static files

## Customization

-   To add more tokens, edit `src/data/mock_price.json`.
-   To change theme or colors, edit `src/index.css` and Tailwind config.

## License

MIT

## Library Used

This project is a React application written in TypeScript and built using Vite for fast development and optimized production builds.

### UI Library Choice

I chose to use the Shadcn UI library because I noticed that 99Tech's website utilizes Tailwind CSS. Shadcn UI is a lightweight component library that offers strong support and seamless integration with Tailwind CSS, making it an excellent fit for building modern, responsive interfaces with minimal overhead.

### Main Libraries Used

-   **Vite**: Fast build tool and development server for modern web projects.
-   **Shadcn UI**: Lightweight React component library with strong Tailwind CSS support.
-   **Framer Motion**: Powerful animation library for React, used for smooth UI transitions.
-   **gh-pages**: Utility for deploying the app to GitHub Pages.
