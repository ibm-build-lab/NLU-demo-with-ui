# Natural Language Understand Text Analyzation Engine

This demo was created from the [Create React App](https://github.com/facebook/create-react-app) project.

## Set up

### 1. Use IBM Watson Studio to create a model to load into the IBM Natural Language Understanding Service.

You can follow this tutorial to see how to do this:

https://developer.ibm.com/tutorials/build-a-recommendation-engine-with-watson-natural-language-understanding/

Once you get to the "Deploy model to Watson Natural Language Understanding heading" you can use this application to analyze text instead of the curl commands. 

### 2. Set environment variables

Within the NLU service, create "Service Credentials".  Save the values for API Key and URL. Set them as environment variables:

```bash
export REACT_APP_apikey=<nlu service apikey>
export REACT_APP_nlu_url=<nlu url>
```

### 3. Clone the directory, compile and start the application

```bash
git clone nlu-demo-with-ui
cd nlu-demo-with-ui
npm install
npm start
```

## Installing this demo on an OpenShift cluster

We have included the files to create an image and load it onto an existing OpenShift cluster.

```bash
cd docker_dir
docker build -f Dockerfile
```

## Usage

Simply insert text into the text box, click "Submit" and you will see the sentiment of the text

## Modifying what results you want to see

To change what is displayed from the analyzation, simple edit the src/App.js file.  Locate the line (approx line 82):
```
document.getElementById("results").textContent = JSON.stringify(body.sentiment.document, null, 4);
```
Change `body.sentiment.document` to `body` to see the entire response.
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
