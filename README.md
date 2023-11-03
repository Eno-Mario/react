# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Exercise 8

Modify the Welcome component so that the Age component is rendered 5 times. For every time use conditional rendering with one of the following conditions:

- The Age component is rendered only if the age prop is greater than 18.
- The Age component is rendered only if the age prop is present.
- The Age component is rendered only if the age prop is greater than 18 and less than 65.
- The Age component is rendered only if the age prop is greater than 18 and the name prop is equal to "John".
