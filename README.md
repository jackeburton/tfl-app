# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


From the code snippet you've provided, it looks like the lineStatuses property of each line object in the lineInfo array is an array of objects, which is causing the error when you try to pass it as a child to the Tube component.

To fix this, you'll need to modify the Tube component to handle an array of objects as the tubeStatus prop. One approach is to map over the tubeStatus array and create a new component instance for each object in the array. Here's an example of how you could modify the Tube component to handle an array of objects:

javascript
Copy code
const Tube = ({ tubeName, tubeStatus }) => {
  return (
    <div>
      <h3>{tubeName}</h3>
      <ul>
        {tubeStatus.map(status => (
          <li key={status.id}>
            {status.statusSeverityDescription}
          </li>
        ))}
      </ul>
    </div>
  );
};
In this example, we're using the map method to iterate over the tubeStatus array and create a new li element for each object in the array. We're also providing a key prop to help React keep track of which items have changed when the component is re-rendered.

Then, in the TubeLines component, you can pass the lineStatuses array directly to the tubeStatus prop of the Tube component:

javascript
Copy code
const TubeLines = ({ lineInfo }) => {
  if (lineInfo.length !== 0) {
    return (
      <div>
        {lineInfo.map(line => (
          <Tube
            key={line.id}
            tubeName={line.name}
            tubeStatus={line.lineStatuses}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        loading...
      </div>
    );
  }
};
By passing the lineStatuses array directly to the tubeStatus prop of the Tube component, we're now providing an array of objects as the prop, which can be handled by the modified Tube component.