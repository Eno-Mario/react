# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Exercise 11

Create a Counter function component and create a new state variable called counter initialized to 0. The Counter component should render the counter value within an h2 tag, and the counter value should be incremented every time the user clicks on a button.

Tip: use the useState hook. Make it so that the initial value of the counter and the increment amount are passed as props to the component.

When calling "setter" function to increment the counter, should the parameter be a function or an immediate value? Why?
