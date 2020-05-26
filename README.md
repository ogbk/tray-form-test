# form-submission

## Tech stack

- React
- Flow - static typechecking tool
- Sass - css preprocessor
- Eslint - code linter
- Jest & Enzyme - React testing tools

I did not use the following:
- Redux - the state management was fairly simple, no need for Redux
- React Router - the app did not include many or complex routes, just 3 components to show

## App structure

- main component : ```<App/>```
- sub components: ```<User/>```, ```<Privacy/>```, ```<Done/>```
- helper file: ```validate.js```

## Coding techniques / styles

- input validation 
  -  done with javascript and not with html5 regex validation. This was to personalize the display, tracking and handling of input errors.

  - Name, Password and Email : I trimmed off any whitespace before and after the input value.
  Should that not be the desired result, I would simply remove `trim()` from the corresponding validation functions.

- extensive use of the javascript functions: ```Object.keys(OBJECT)```, ```Object.values(OBJECT)```, ```Object.entries(OBJECT)```. They are guaranteed to extract and return the requested array from an object in insertion order, as long as the keys of the object are not numeric values.
I stored the list of pages in the order they were traversed in OBJECT and iterated through the returned array.

- UI: 
  - tab of validated pages have green color
  - tab of current page has blue border line 



## App enhancement
- CHANGE CONFIGURATION OF A PAGE:

  Restyle the corresponding component as needed (`<User/>`, `<Privacy/>` or `<Done/>`).
The only prop they receive is the function `submitPage()`, which takes as argument the form value of the page, or an empty value if component in `<Done/>`.

- ADD NEW PAGES:

  - Create the new component `<New/>` (copying either `<User/>` or `<Privacy/>`).

    Do the following inside `<App/>`
    - Declare the type ofr values `NewType`
    - Add `New` to `PageType` data set
    - Add `New` to this.state.pages (both in type declaration and initial state value)
    - Include `pages.New.data` among the results to show using `console.log`.

- GOING BACK TO A PAGE:

  - In `<App/>`
    - make the `<span/>` elements inside `div.page-tab` clickable -> add an `onClick()` function
    - when you click on `div.page-tab > span`move to the selected corresponding Page
    - can only move back if current page has been validated - enforce page validation before switching
    - can only switch back to a previously validated page, not to next pages, to move forward use the submit button
    - when rendering selected Page, create and send the following values as props: `persistedFormValues`, `isValidated`.

  - In all components (except `<Done/>` - the last component)
    - when rendering component, 
    
      ```
      if (this.props.isValidated) -> this.state form values accept persistedFormValues
      else -> this.state form values are empty
      ```

## Running locally

- `git clone` or download this repository
- `cd tray-form-test` or `cd tray-form-test-master`
- `npm install`
- run in dev mode: `npm run dev`
- run in prod mode: `npm run prod`


## Linting

- ESLint `npm run eslint`
- Sass lint `npm run sass-lint`


## Static typechecking with Flow

- Stop flow server `npm run flow stop`
- Start flow server `npm run flow start`
- Run flow `npm run flow status`

## Testing with jest & enzyme

- test: `npm run test`