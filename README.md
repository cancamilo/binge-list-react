This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

## Techincal implementation details

The application is devided into two view: BingList and Favorites. This are the two screens the user
interacts with. Each view has a list which is further devided into a Container and a presentational component.
In the container, the lists are processed accordingly. 

### Styling the application

I use the library styled components since it is more confortable to write style in js and also give more flexibility for implementing different styles based on the application state. 

## React Context API

The application could be implemented using Redux, but to reduce complexity and time I decided to just keep the state in a class that uses the new react context API. This class sits a the top of the application and provide managment of the favorite list to components requiring it via a Higher order componnent. See FavListProvider.js

## Testing

Testing is done with React-test-renderer and Jest

