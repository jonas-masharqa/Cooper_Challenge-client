# Question of the week

Question 1: In the current implementation of the Cooper Challenge, where are we doing the calculation or rather where do we check the result of the Cooper test, on the client or on the server?

Answer of question 1:

The calculation happens in our module called CooperCalculator. This module resides on our client's side. That is where the actual calculation happens, after that we save the result by using a function called saveData in the DisplayCooperResult component that is being imported from the PerformanceData module. We take the result coming from the calculator module and put it in a variable called "result" which we pass into the saveData function to be used in the module. Our saveCooperData function, that uses the modules functions tries to use the saveData function with the result passed in, and if successfull, changes the state of entrySaved with the help of the entryHandler, otherwise it will console.log(error). This all happens in our client before being sent of to the back end.

Checking the result of the calculation also happens on the client's side. We call on a function in our DisplayPerformanceData component called getPerformanceData which calls on the function called getData that ACTUALLY fetches the data from the back end. The getData function also resides in our PerformanceData module and we use the data we get from it to be set as the state in our component, if that state is not ''null'' we iterate over what we want from that data and saves it in a variable called dataIndex, which our component then returns and we render it.


Question 2: What are the pros and cons of doing in that way?

Answer of question 2:

We're not sure what the alternative would be, but we see this as a clear example of restful architecture. When we save the data, we make a POST request, and when we retrieve it, we make a GET request. The benefits of setting the application up this way is that we SEND all the data necessary to make these requests happen, the server can simply just save it or hand it out. The server doesn't need to work as much as if it would have to look where to store this data or where to get it from for example, in this case the user. The server knows where to go instantly because of what we've sent it. This way the server can handle more requests at the same time.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
