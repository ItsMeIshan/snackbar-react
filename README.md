# snackbar-react
![Screenshot 2023-07-17 at 6 21 32 PM](https://github.com/ItsMeIshan/snackbar-react/assets/65131563/adc5835e-337a-4034-8107-12d0103102cc)

## How I worked on this project

Tried building a reusable Snackbar component which can be used to show different status states and used best practices with `React`.

- Took inspiration from Snackbar component of MUI component library. Tried building a simpler Snackbar component out of it.
- Built a Snackbar component for representing the status and along the icon of the type of Snackbar.  
- Implemented the `SnackbarStack` component which contains all the Snackbars.
- Created a Snackbar Preview playground to test the functionality of the Snackbar
- Added **Escape** shortcut to clear all Snackbars at once which will be beneficial to keyboard-only users.
- Also took accessibility concerns into consideration, added **aria labels, roles** beneficial for screen readers to identify which variant of Snackbar being used.

## Component Usage
- 4 types of Snackbars are supported *notice, error, warning & success*
- wrap your components with the `SnackbarProvider` to get access to `snackbarList` list of all the Snackbars, `addSnackbar` function to trigger a Snackbar on screen which takes `variant` and `message` as arguments, `removeSnackbar` function to remove a Snackbar.
```js
function App() {
  return (
    <>
      <SnackbarProvider>
        <SnackbarPreview />
      </SnackbarProvider>
    </>
  );
}
```
- to use have Snackbars on our screen view we need `SnackbarStack` component and any utility like button or any action to trigger a Snackbar.
```js
<SnackbarStack />
```
- use `Escape` shortcut for clearing all the Snackbar.

## If I had more time I would change this
- additional props for customizing the position of Snackbar which is by default bottom right, animation tweaks, etc.
- Add unit tests.

## Available Scripts
- After Installing all the node modules with the command in the project home directory: `npm ci`
In the project directory you can run: `npm start`
