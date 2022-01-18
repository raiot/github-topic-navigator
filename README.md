# Github Related Topic Search

This is an application that search for related topics for a given string.
(the default loads with the string "react").

## Installation

Use the node manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## Usage

```javascript
npm run dev
```

## Testing
```javascript
npn run test
```

## Dev notes
Used [vite](https://vitejs.dev/) for code scaffolding because I like the speed and simplicity of the starter files.

Since the the project was already using Github's GraphQL API, I choose to use [apollo](https://www.apollographql.com/docs/react/) for state management and followed the recommended folder structure.

For unit testing, @testing-library/react with jest was choosen because is really complete and other libraries are no longer needed to complement.

## Future improvement

This codebase need some refactors regarding rendering, t could benefit from `useMemo` and also a good implementation of `apollo cache`.

Useful features: search history, recent search, most searched topics, sorted results.

Add more unit tests to include if the button is clicked the API is called, same for the topic.

## License
[MIT](https://choosealicense.com/licenses/mit/)i
