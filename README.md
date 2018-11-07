## Translator Components

### Step 1

Hook up the `onChange` function on the `<select>` element to mutate a piece of state
on the component. It should have a default state of selecting English.

### Step 2

You must write the function `createTranslate` without
changing any other code in the file. (Moving things is fine, don't change method invocations
or signatures).

The function can be found in `src/App.js`.

The [Ramda](http://ramdajs.com/) library is provided and may make writing the 
component easier. [This](https://github.com/ramda/ramda/wiki/What-Function-Should-I-Use%3F)
reference for Ramda may also prove useful. All functions are accessible like so: `R.map`.

When the function is correctly implemented `yarn start` should run the app and
you should see two rows of divs with text content. Selecting a language from the
dropdown menu at the top should change the text content to that language.

### Step 3

Add type comments for all declarations. Please use something approximating
[FlowType](https://flow.org/) syntax or Haskell/Elm/etc. if that's more comfortable. 
The purpose of this exercise is just to demonstrate the ability to spell out parameter and return types. 
Don't worry about using the Flow React built-ins, abbreviating to `ReactComponent` is perfectly fine.

Ex:

```
// int, int -> bool
(x, y) => { x > y };

// int, int -> (int -> string)
(x, y) => {
  (z) => { z + "!" }
}
```

### Note

Please feel free to reach out via email and ask questions if anything isn't clear.
Our intention is not for you to be unsure with directions or struggle with interpretation.

