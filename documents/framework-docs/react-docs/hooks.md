# Hooks

Hooks were introduced in React 16.8 and they let us use React's features-like managing your component's state and or performing an after effect when certain changes occur in state(s) without writing a class.

## Basic Hooks

### useState

useState hook is used to manage the state of a component in functional components. Calling useState returns an array with tho elements: the current state value and a function to update the state.

### useEffect

useEffect is a special hook that lets you run side effects in React. It is similar to componentDidMount and componentDidUpdate, but it only runs when the component (or some of its props) changes and during the initial mount.

## Writing Custom Hooks

Building your own hooks lets you extract component logic into reusable functions.

## Common Hooks

React also has a lot of hooks that allow you to write more efficient React code.

- useCallback
- useRef
- useMemo
- useReducer
- useContext
- ....
