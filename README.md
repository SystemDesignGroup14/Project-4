### Project Four README

#### Setup
1. **Repository Creation**: Create a private repository from the Project Four template as per the instructions provided in the general project requirements document.
2. **Collaborators Addition**: Add collaborators to the repository following the instructions outlined in the general project requirements document. Consider creating a GitHub organization for easier team setup.
3. **Node.js Installation**: Ensure Node.js and npm package manager are installed on your system by following the installation instructions in the general project requirements document.
4. **Node Module Installation**: Run `npm install` in your project directory to fetch the required node modules. This command will download approximately 600 node modules, occupying around 100 megabytes of space in the `node_modules` subdirectory.

#### Available Commands
- `npm run build`: Runs Webpack to package all JSX files into a single JavaScript bundle in the `compiled` directory.
- `npm run build:w`: Similar to `npm run build` but invokes Webpack with `--watch` to monitor changes in React components and regenerate the bundle accordingly. Useful for development.
- `npm run lint`: Executes ESLint on all JavaScript files in the project to ensure code quality and adherence to standards. Start every JavaScript file with `"use strict";` and resolve any ESLint errors or warnings.

#### Running the Web Server
- Start the Node.js web server with `node webServer.js` from the CLI of your project. It serves files via the HTTP protocol.
- Access your web app via `http://localhost:3000` in your browser. Verify that the server is running by ensuring that it serves `index.html`.

#### Development Environment Configuration
- Configure your development environment to run Webpack in watch mode (`npm run build:w`) and the Node.js web server (`node webServer.js`).
- On Unix-like systems (e.g., MacOS), you can run both commands in a single window using `node webServer.js & npm run build:w`.
- On Windows, start the web server in the background with `start /B node webServer.js` and Webpack in the foreground with `npm run build:w`.

#### Stopping the Background Web Server
- Use the command `taskkill /IM node.exe /F` to stop the background web server on Windows.

#### Additional Information
- The project includes `index.html`, which contains visual tests for your code.
- Ensure adherence to all provided guidelines and instructions for successful completion and evaluation of the project.
