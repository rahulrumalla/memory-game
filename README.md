# Otters Memory Game

Sandbox: https://codesandbox.io/s/unruffled-river-5p2ygi

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Success Criteria

## Data Structures & Complexity

- The code should use appropriate set and amount of data structures and algorithms.
- The Big-O complexity should be taken into consideration.

## Architecture

- The code should demonstrate appropriate separation of concerns.
- A well put layered architecture and responsibilities are important.
- The project layout reflects this layering/separation of concerns and it is intuitive to navigate.
- Abstractions should be easy to understand and appropriately designed.

## Trade-offs

- The code should use correct type of trade-offs.
- “Over-engineering” should be avoided. Things that can be simple, should be simple.
- Additional functionality and requirements shouldn’t be introduced.

## Single Source of Truth

- Single source of truth principle should be followed. Changing a certain piece should be (mostly) sufficient to have the required change. For example; if we want to change interaction with cells from single tap to double tap, we should be able to do that for every cell by changing certain piece of the code.

## Error Handling

- The code should introduce well designed error handling.
- Both code level errors and user level errors should be handled.
- Errors should leave the application in unstable or unrecoverable state.

## Readability

- The code should be readable.
- Good naming for components should be in place.
- Dead code or unnecessary comments shouldn’t be left.
