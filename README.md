# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Exercise 46

Create a GithubUserList component that fetching this API url, https://api.github.com/users, show a list of links of github usernames.
By clicking on a username, the ShowGithubUser component will be displayed. Add a Route to the users path that shows the GithubUserList component. In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route.
