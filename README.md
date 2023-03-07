# Natural Language Understand Text Analyzation Engine

In this code pattern, we will create a web app that takes in text and analyzes it for sentiment using the IBM Natural Language Understanding APIs. The user will enter text into a text area and press the "Submit" button.  The text is analyzed based on the **latest loaded model** into an IBM Watson®  Natural Understanding Service.

The main benefit of using the Natural Language Understanding (NLU) service is its powerful analytics engine that provides cognitive enrichments and insights into data. NLU uses deep learning to extract meaning and metadata from unstructured text data. It uses text analytics to extract categories, classification, entities, keywords, sentiment, emotion, relations, and syntax.

NOTE: The React frontend was created from the [Create React App](https://github.com/facebook/create-react-app) project.

When you have completed this code pattern, you will understand how to:

* interact with an instance of the IBM Watson® Natural Language Understanding libraries
* make API calls into a preprovisioned NLU Service to retrieve the latest model and analyze text against it
* use a React frontend to drive the calls into NLU

![architecture](./public/NLU.png)

1. User adds text to the application (running locally or in the IBM Cloud).
1. The application requests the latest model from IBM Watson Natural Language Understanding service.
1. The application requests user inputted text to be analyzed using latest model
1. Watson Natural Language Understanding service processes the text and extracts features such as keywords, concepts, categories
1. Results are output to application

## Prerequisites
### Public Cloud
1. Sign up for an [IBM Cloud account](https://cloud.ibm.com/registration).
1. Download the [IBM Cloud CLI](https://cloud.ibm.com/docs/cli/index.html#overview)
1. Create an instance of the Natural Language Understanding service and get your credentials:
    * Go to the Natural [Language Understanding](https://cloud.ibm.com/catalog/services/natural-language-understanding) page in the IBM Cloud Catalog.
    * Log in to your IBM Cloud account.
    * Click **Create**.
    * Click Show to view the service credentials.
    * Copy the `apikey` value.
    * Copy the `url` value.

# Steps
1. [Create Watson services with IBM Cloud](#1-create-watson-services-with-ibm-cloud)
1. [Create credentials](#2-create-credentials)
1. [Set up the model](#3-set-up-the-model)
1. [Run the application](#4-run-the-application)

## 1. Create Watson services with IBM Cloud

Create the following services:

* [**IBM Watson Studio**](https://cloud.ibm.com/catalog/services/watson-studio)
* [**Watson Natural Language Understanding**](https://cloud.ibm.com/catalog/services/natural-language-understanding)

## 2. Create credentials

The credentials for IBM Cloud services, can be found in the ``Services`` menu in IBM Cloud, by selecting the ``Service Credentials`` option for each service.

## 3. Set up the model

Use Watson Studio to create a model to load into the Natural Language Understanding Service.

You can follow [this](https://developer.ibm.com/tutorials/build-a-recommendation-engine-with-watson-natural-language-understanding/) tutorial to see how to do this.

Once you get to the "Deploy model to Watson Natural Language Understanding heading" you can use this application to analyze text instead of the curl commands. 

## 4. Run the application

### Run locally
1. Clone this directory:

   ```bash
   git clone https://github.com/ibm-build-lab/NLU-demo-with-ui
   cd nlu-demo-with-ui
   ```
2. Set environment variables. Create a `.env` file in this top level directory and add the following to it:

   ```bash
   REACT_APP_apikey=<nlu-service-api-key>
   REACT_APP_nlu_url=<nlu-service-url>
   PORT=3000
   ```
3. Compile and start the application:

   ```bash
   npm install
   npm start
   ```

### Deploy to IBM Cloud

1. Provision an **OpenShift** cluster in your IBM Cloud account
1. Open the OpenShift console by selecting the blue `OpenShift web console` button at the top of the cluster detail page 
1. Create a new project called `nlu-demo`
2. From the OpenShift console, go into the `Developer` view. Select the `nlu-demo` project. Select `+Add`.  Choose `Git Repository`.

3. Be sure to use `Dockerfile` as the method of Import strategy. NOTE: on Openshift Version 8, this choice is made from the `Git Repository` card. On later versions, it is a selection from within the `Import from Git` page.

2. On the `Import from Git` page, enter this repo under `Git Repo URL`.

4. You can keep all the other defaults or change the name 
   
5. Select `Create`
   
6. Go to `Topology` and open the newly created app icon.  You can watch the progress.
   
7. Eventually, the build should complete, the pods should start.
8. Under `Builds`, you should see a `Build Config`. Open it and navigate to the `Environment` tab. Add the `REACT_APP_apikey` and `REACT_APP_nlu_url` environment variables. Start a new build
9. Once the build is complete, open the deployed application and select the host link to see the application

NOTE: if you change the code in the `git` repo, you will need to restart a new `build`

## Usage

Simply insert text into the text box, click "Submit" and you will see the sentiment of the text

## Modifying what results you want to see

To change what is displayed from the analyzation, simply edit the `src/App.js` file.  Locate the line (approx line 82):
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

## References

[Simple Guide to Deploying a ReactJS Frontend to OpenShift](https://dev.to/ibmdeveloper/simple-guide-to-deploying-a-reactjs-frontend-to-red-hat-openshift-3hp6)

[Natural Language Understanding API documentation](https://cloud.ibm.com/apidocs/natural-language-understanding)

[Server side code in Node to integrate with NLU APIs](https://cloud.ibm.com/apidocs/natural-language-understanding?code=node)

[NLU Code Pattern with full client/server React app](https://github.com/IBM/natural-language-understanding-code-pattern)

<!-- keep this -->
## License

This code pattern is licensed under the Apache License, Version 2. Separate third-party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1](https://developercertificate.org/) and the [Apache License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt).

[Apache License FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)

