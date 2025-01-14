# React useEffect Hook: Missing Return Statement Bug

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a return statement for cleanup.  This can lead to memory leaks and unexpected behavior.

## The Bug

The `bug.js` file contains a `MyComponent` that increments a counter using `useState` and logs the count using `useEffect`.  The crucial error is the omission of a return statement within `useEffect`, making cleanup of any subscriptions, timers, or event listeners impossible. This can cause problems, particularly in components with lifecycle events that need to be cleaned up (e.g., subscriptions to external data sources).

## The Solution

The `bugSolution.js` file shows the corrected component. A return function is added to `useEffect` to clear any actions performed within the effect when the component unmounts or the dependencies change.  This ensures that resources are released when they are no longer needed, preventing memory leaks and ensuring the application's stability.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the project directory and run `npm install`.
3. Run `npm start`. Observe the console for the continuously printing message and the unresponsive UI.
4. Examine `bugSolution.js` to understand the correct implementation.