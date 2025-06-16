# 99 Swapper

A modern, animated token swap UI built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Features

-   Beautiful, responsive UI with ShadCN and Tailwind
-   Animated transitions using Framer Motion
-   Token selection with search and mock price data
-   Swap direction toggle with smooth icon animation
-   Confirmation dialog before swapping
-   Loading states for async actions

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
