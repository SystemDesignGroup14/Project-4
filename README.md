### Project README

#### Description
This project is a ReactJS web application that demonstrates various features and concepts including model-view-controller (MVC) design pattern, dynamic view switching, and single page application (SPA) routing using React Router. It includes components for displaying personalized headers, updating user information, filtering states by substring, and switching between different views.

#### Setup
1. Clone the project repository to your local machine.
2. Ensure you have Node.js and npm installed on your system.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the required dependencies.
5. Start the webpack build process and web server by running `npm run build:w` and `node webServer.js` in separate terminal windows.
6. Open the provided HTML files (`getting-started.html`, `p2.html`, `p4.html`, `p5.html`) in your browser to view the application.


#### Problem 1: Understand and Update the Example View
- Updated the model data for the Example component with my name.
- Replaced the contents of the motto-update div with JSX statements to display my name and a short motto.
- Extended the display to allow users to update the displayed motto.

#### Problem 2: Create a New Component - States View
- Created a new component view to display states containing a given substring.
- Implemented an input field for substring filtering.
- Displayed an HTML list of matching states, updating automatically with each character typed.
- Displayed the substring used for filtering.
- Included CSS styling for the state list.

#### Problem 3: Personalizing the Layout
- Created a Header component to display a personalized header at the top of each view.
- Added the header to all ReactJS web apps.
- Used creativity to design a unique header.

#### Problem 4: Add Dynamic Switching of the Views
- Created a p4.html and corresponding JSX file (p4.jsx) to include both view components.
- Implemented the ability to switch between the display of the two components.
- Modified webpack configuration to build a new bundle (p4.bundle.js).

#### Problem 5: Single Page Applications (SPA)
- Copied the solution from p4.html into p5.html and p4.jsx into p5.jsx.
- Implemented view switching using React Router.
- Styled toolbar-like controls for switching between views.

