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

## Problem 1: Understand and Update the Example View

### Overview
In this problem, you need to update the Example view to display your name and a short motto. Additionally, you should allow users to update the displayed motto.

### Steps to Complete
1. **Understand the Example View**: Review the `getting-started.html` view and the `Example` component to understand how the Example view is structured and how data is displayed.

2. **Update Model Data**: Locate the model data for the Example component and replace the placeholder value "Unknown name" with your name.

3. **Update Display Region**: Replace the contents of the `<div>` region with the class `motto-update` in the `Example` component. Display your name and a short motto. Ensure to include styling for this display in `Example.css`.

4. **Allow Motto Update**: Extend the display to allow users to update the displayed motto. Retrieve the default value from the model data.

### Additional Instructions
- Ensure that your changes are well-documented with comments for clarity.
- Test your changes thoroughly to verify that the updated Example view functions as expected.
- Make sure to follow the MVC pattern and maintain the file organization and naming conventions specified in the project requirements.

## Development Commands
Use the following npm commands for development and building processes:

- `npm run build`: Package all JSX files into a single JavaScript bundle.
- `npm run build:w`: Run Webpack in watch mode to monitor and regenerate the bundle on changes.
- `npm run lint`: Run ESLint to ensure code quality and adherence to standards.

## Running the Web Server
Start the Node.js web server to fetch the web app via HTTP:


