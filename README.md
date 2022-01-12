# React-map

This project was created during a technical test with ForceManager team.
The desired flow would be:
- The user writes in a search field and press the enter key or click “Search”
- This action should make a query to the Google Maps Place Search API.
- The response to this query will be a group of different places with coordinates for whom will be needed to draw a marker in the map.
- When clicking the marker it will show us the information of the specific place.
- The project contains some test cases implemented using Jest & React test library.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folders structure
    .
    ├── public
    ├── src                    # Source files
    │   ├── App                # Main component <App/> with basic end-to-end tests
    │   ├── components         # Mainly reusable components
    │   ├── services           # Fetching services with utilis functions
    │   ├── shared             # Shared configurations, constants...
    │   └── index              # Entry file of the react application
    │   └── setupTests         # Testing library configurations
    └── .gitignore
    └── package.json
    └── README.md

## Start the Project

To start the project in a local environment after pulling it, it is necessary to:
### Modify `MAP_API_KEY` in `src/shared/config.js` file with a valid API key
Run
### `npm i`
Wait until the packages are installed. Then, run
### `npm start`
You can run also
### `npm test`
For running some test cases

The app is running now in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### CORS problem
In order to be able to test all the features of the application without being bothered by CORS issue, you can use a Chrome extension called Allow CORS, check the link below:
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related?hl=en

Once the plugin is installed you need to enable it and checking "Allow-Control-Allow-Headers" in the options page.

To understand why we have this CORS issue related to Google Map API please refer to the link below:
https://github.com/googlemaps/google-maps-services-js/issues/59#issuecomment-399626833

