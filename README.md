# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Exercise 33

Create a LanguageContext and wrap the Clock component within its provider.
Add a select tag to the component in which the Clock component is rendered that allows the user to select the language, and pass it as a value to the Provider.
Consume the LanguageContext within the Clock component by using the useContext hook, and show the "current time" message in the correct language.
