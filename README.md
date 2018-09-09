# Installation instructions

Project has been built using pretty standard SPA architecture. To run project on your local machine:
- Please clone or download zip of this repository
- Make sure you have `NodeJS` & `NPM` installed: https://nodejs.org/en/download/ or even better install `Yarn`: https://yarnpkg.com/en/
- Navigate to the root folder of the project and run `yarn install` in terminal to fetch all needed dependencies from `NPM`
- Run `yarn start` command in terminal to boot up development server an see the app on localhost
- Run `yarn test` to run tests

## Remarks

1. Not everything is tested as I suppose 100% percent of test coverage isn't the purpose her
2. There are examples of how to test `Rematch` models and components in the project
3. Rematch was used instead of "standard" Redux as it is less verbose, easier to scale and reason about.
4. Project is using another API `https://restcountries.eu` to fetch the data about the currencies in countries all over the world.
5. For some currencies there's simply no data in `http://api.nbp.pl`. It that's the case red alert (remember the game? xD) is displayed for the user. This can be tested while clicking `Add to favourites` on currency with `Currency code` `(none) <Faroese króna>`.
6. Project doesn't scale well into the RWD, if that's the requirement please inform me about it and provide additional time to implement this feature.
7. Project doesn't use `React-Router` or any other routing solution as it's just too simple.
8. Project can be viewed live at http://currency-tracker.surge.sh