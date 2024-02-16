# Project Four README

## Getting Started

In this project, we use the model-view-controller (MVC) design pattern. Follow these steps to start working on the project:

1. **Open Example in Browser**: Navigate to the URL [http://localhost:3000/getting-started.html](http://localhost:3000/getting-started.html) to view the example ReactJS application. This page demonstrates ReactJS features and serves as a starting point for your project.

2. **File System Layout**: Familiarize yourself with the file system layout and module pattern provided in the example. Follow the same organization for your project. Components should be located in the `components` directory, with each component having its own subdirectory containing the JSX file and associated CSS stylesheet.

3. **Review Files**: Take a closer look at the following files invoked in the `getting-started.html` view:
   - `getting-started.html`: Provides a `<div>` for ReactJS to render the app into and includes a script tag for the app's JavaScript bundle.
   - `gettingStarted.jsx`: JSX program that renders the ReactJS component named `Example`.
   - `components/example/Example.jsx`: ReactJS component named `Example`.
   - `Example.css`: CSS stylesheet associated with the `Example` component.

4. **Follow Naming Convention**: Use the provided pattern and file naming convention for creating other components in your project. Co-locate each component's JSX file and CSS stylesheet within its own subdirectory under the `components` directory.

5. **Model Data Loading**: Model data is loaded directly into the browser's DOM from the local file system. Access this data under the property name `models` in a ReactJS component, using `window.models`.

## Development Commands

To facilitate development and build processes, the following npm commands are available:

- `npm run build`: Runs Webpack using the configuration file `webpack.config.js` to package all of the project’s JSX files into a single JavaScript bundle in the directory `compiled`.
- `npm run build:w`: Similar to `npm run build`, but with the addition of the `--watch` flag, which monitors React components and regenerates the bundle if any of them change.
- `npm run lint`: Runs ESLint on all the project’s JavaScript files to ensure code quality. The code should run ESLint without warnings or errors.

## Running the Web Server

To fetch the web app via HTTP, use the included Node.js web server. Start the server with the following command:

