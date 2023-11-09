# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Exercise 26

Modify the Counter component so that whenever the value of the counter changes, the value of a ref is updated to contain the direction of the change (i.e. "up" or "down") relative to the initialValue prop.
Print the value of the ref to the console only when it's different from the previous value.
