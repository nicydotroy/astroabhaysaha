# React + Vite

## Enquiry forms

The Contact page and home page booking form send enquiries through Web3Forms.
The home page has its Web3Forms public access key built in, so it works without
a Vercel environment variable. The Contact page requires
`VITE_WEB3FORMS_ACCESS_KEY` in `.env.local` (see `.env.example`) and in each
Vercel deployment environment. Web3Forms access keys are intended for use in
client-side forms and are visible in the browser; do not use this approach for
private API secrets.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
