
# Pet-HUB-Application - Single Page Application
Created with React

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


You will  see any lint errors in the console.

## Functionality
* Implemented authentication and authorization.
* Ability to  view the pet card of other users.
* Ability to edit and delete personal pet card.
* Ability to like other users' posts and add them to Favourites. 
* Full responsibility of the pages.
* You can search in our main catalog by name.
* You can like and disklike pet cards.
* Interactive UX.


## Technologies
* React
* HTML, CSS, JavaScript
* Еxpress JS, Mongo DB

## Application Pages
* **Home** - Home page for users who aren’t registered.
* **Regsiter** - registration with email, username and password and etc.
* **All dog Catalog** - view all  pets in the database.
* **Add new pet** - create a pet and save it in the database.
* **Edit your pet** - edit a pet and save it in the database.
* **Details** -Shows details about a curent pet. Unauthorised users can add it to Favourites. Authorized users can edit or delete the certain pet card. 
* **Profile** - view information about the user and  (only for authorized users).
* **My Favorites** - Shows the registered user's Favourite pets. 

## Access control:

* Only authorized users can view all pet-card in database.
* Only authorized users can create a pet-card or like another one.
* Only authenticated users can access their favourite pet-card.
* Only authorized users (creators) can edit or delete a  pet-card.
* unregistered and authorized users have access to the homepage.
* Only unregistered users have access to the login and register pages.
