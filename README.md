<p align="center">
  <a href="https://careibu.com/" target="_blank">
    <picture>
      <img alt="Tailwind CSS" src="./public/careibu-logo.svg">
    </picture>
  </a>
</p>

<p align="center">
  Careibu Take Home Assignment
</p>

---

## Environment Setup

This works app is run best from a [devcontainer](https://code.visualstudio.com/docs/devcontainers/containers).

If you don't use devcontainers, you can run:

```bash
npm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

## Running Tests

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.

To run tests, you can see the results in terminal:

```bash
npm run test
```

or interact with them through Playwright's UI:

```bash
npm run test:ui
```

Tests are maintained in the `/tests` directory.

## Dependencies

-   React (UI Componentization and Interactivity)
-   Firebase (Auth)
-   Tailwind CSS (design system framework)
-   Next.js (React Server-side Rendering, Routing, Data Fetching, Middleware)
-   jose (JSON Web Tokens (JWT) support)

## Requirements

> **The assignment:**
>
> -   Create a registration page using React.js (the Careibu codebase is largely built with React) that is connected to a demo environment in Firebase. You can set up the Firebase environment as a dev environment to keep things simple.
> -   Create a login page where users can log in with a username and password created using the registration page from step 1.
>
> **Rules:**
>
> -   It’s fine to use AI for documentation/help, but don’t copy code 1:1. The goal of this assignment is to showcase your skills, not ChatGPT’s.
> -   Please document your code with comments to clearly explain what you’re doing and why.
> -   If you can, make it look nice! It’s perfectly fine to use a CSS framework like Tailwind to achieve this.
