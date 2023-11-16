# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Exercise 32

Create a Container component that renders its children within a div tag.
Have the div tag use a white background and a red border.
Add a title prop that will contain the title value to be displayed before the children.
Make the container collapsible, so that when the title is clicked the children are either hidden of shown again.
Use the useState hook to keep track of the collapsed state.
