# Recipe App

## Description

The Recipe App is a full-stack application designed to manage and explore recipes for both meals and drinks. The front-end is built using React with Hooks and Context API, providing features such as viewing, searching, filtering, favoriting, and tracking the preparation progress of recipes.

The app utilizes two distinct databases for meals and drinks, and the entire application is dockerized. Sequelize is employed for database modeling.

## Front-end Components

### Login Screen

- Route: "/"
- Allows users to log in with valid credentials.
- Upon successful login, the user's email is saved in localStorage.
- Redirects to the main recipes page after successful login.

### Header

- Features profile, search, and page title icons.
- Clicking on the profile icon redirects to the profile page.
- The search bar appears upon clicking the search icon, enabling ingredient, name, or first-letter searches.
- Clicking a recipe card redirects to the details page.

### Footer

- Displays on routes "/meals," "/drinks," and "/profile."
- Contains buttons to switch between meals and drinks.

### Main Recipe Page

- Routes: "/meals" and "/drinks."
- Displays the first 12 recipes for meals or drinks.
- Category buttons allow filtering recipes.
- Clicking on a card redirects to the details page.

### Recipe Details Page

- Routes: "/meals/:recipe-id" and "/drinks/:recipe-id."
- Shows recipe image, title, category, and alcohol status (for drinks).
- Includes a list of ingredients with quantities, instructions, embedded YouTube video, and recommendations.
- Recommendation cards scroll horizontally like a carousel.
- "Start Recipe" or "Continue Recipe" button directs to the in-progress page.
- Share and favorite buttons available.

### Recipe In-Progress Page

- Routes: "/meals/:recipe-id/in-progress" and "/drinks/:recipe-id/in-progress."
- Displays recipe image, title, category, and alcohol status (for drinks).
- Lists ingredients with checkboxes for progress tracking.
- "Finish Recipe" button activates when all ingredients are checked.
- Redirects to the done recipes page upon completion.

### Done Recipes Page

- Route: "/done-recipes."
- Displays completed recipes with details.
- Includes buttons to filter recipes by meal or drink, or reset filters.
- Clicking a recipe redirects to the details page.

### Favorite Recipes Page

- Route: "/favorite-recipes."
- Displays favorited recipes with details.
- Includes buttons to filter recipes by meal or drink, or reset filters.
- Clicking a recipe redirects to the details page.
- "Unfavorite" button removes the recipe from favorites.

### Profile Page

- Route: "/profile."
- Displays the user's email and three buttons: "Done Recipes," "Favorite Recipes," and "Logout."
- Redirects to the respective pages or logs out upon button clicks.

## Front-end Technologies

### Dependencies

- **React:** 18.2.0
- **React Router Dom:** 5.3.4
- **Axios:** 1.4.0
- **Bootstrap:** 5.2.3
- **Tailwind CSS:** 3.3.3

### DevDependencies

- **Cypress:** 10.11.0
- **Stylelint:** 14.16.1
- **Mocha:** 10.2.0

## Backend Technologies

### Dependencies

- **Express:** 4.17.1
- **Sequelize:** 6.32.1
- **jsonwebtoken:** 8.5.1
- **Cors:** 2.8.5

### DevDependencies

- **Mocha:** 9.2.1
- **Nodemon:** 2.0.15
- **Chai:** 4.3.6
- **Sinon:** 13.0.1
- **Nyc:** 15.1.0
- **Eslint:** 7.32.0

## Getting Started

1. Clone the repository.
2. Install dependencies:

npm run install:apps


3. Start the Dockerized application:

npm run compose:up


4. Access the app at [http://localhost:3000](http://localhost:3000).

## Contact Information

For any inquiries, please contact Juvenal Martins dos Santos Netto at [nettojm86@gmail.com](mailto:nettojm86@gmail.com).