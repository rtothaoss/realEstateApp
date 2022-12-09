# Real Estate App

This real estate app allows users to search cities for homes. Users can create an account and save homes. Users searches are automatically saved to their account for future reference. Maybe in the future those saved searches will allow for email notifications of homes for sale in those areas. The app was built using an Nx monorepo setup. Nest was used for the backend along with Prisma for database integration. Angular was used for the frontend. Google maps and Real Estate scraper were used to get information and display it. 

Check out the app [here](https://real-estate-appv1.herokuapp.com/) <br />
<sub>Currently running into backend problems with prisma so you won't be able to login.<sub>

## Development server
Run `npm run nest` to start up backend API then run `npm run start:dev` to start up the frontend.

## Database
Run `npm run prepare` to execute Prisma migration. Afterwards you may run `npm run db:dev` to begin using the database.

Run `npx prisma studio` to open the visual editor for your database.

## Testing
Run `npm run test` to execute unit tests via [Jest](https://jestjs.io/)

## Documenation:
[Nx](https://nx.dev/getting-started/intro)<br />
[Nest](https://docs.nestjs.com/)<br />
[Prisma](https://www.prisma.io/docs/)<br />
[Angular](https://angular.io/docs)<br />
[Google Maps](https://developers.google.com/maps/documentation)<br />
[US Real Estate API](https://rapidapi.com/datascraper/api/us-real-estate/)<br />

### What you will need to run this app

[Google API Key](https://developers.google.com/maps/documentation/embed/get-api-key) <br />
[Real Estate API Key](https://rapidapi.com/datascraper/api/us-real-estate/pricing) <br/>
<sub>These will go into your environments in Angular</sub>

DATABASE_URL that works with prisma <br />
JWT_SECRET phrase <br />
<sub>These will go into your .env</sub>

## Future Updates
* Getting rid of the relying solely on google autocomplete to figure out where the user wants to search. <br />
<sub>At the moment you have to click on the dropdown to search places and cannot simply enter in your own place to search. This was done to avoid typos and other errors screwing up the search.<sub>
* Adding a filter to search results
* Extending the search to more than just 16 results
* Adding a search bar in the header on mobile view