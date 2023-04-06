# Keen UI Vite usage example

This is an example Vite project to test the usage of Keen UI:

- using the default export and named exports
- using lib exports
- using the Keen UI `.vue` source files directly

## Usage

- From the Keen UI root directory:
  - Run `yarn` to install dependencies
  - Run `yarn build:all && yarn build:all:prod` to build the library
  - Run `yarn link`
- From this `usage-example-vite` directory:
  - Run `yarn` to install dependencies
  - Run `yarn link keen-ui` to link the local Keen UI build to the example project
  - Run `yarn dev` to start Vite and visit the URL shown to view the example
