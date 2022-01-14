# HENI Frontend

## Getting started

To get started run:

### `yarn`

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Notes

src/graphql/generated contains generated types based on the graphql schemes located at https://countries.trevorblades.com
anytime you add a new query or mutation, run `yarn codegen` and the types for that fetches return data and variables will be auto-generated.

## With more time

I would have:
1.) Further styled the application
2.) Created a helper method for the pagination index calculations or abstracted the logic into the pagination component (see App.tsx lines 17,18,19)
3.) Added more thorough tests to the application
