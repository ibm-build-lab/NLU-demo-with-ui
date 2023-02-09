import './App.scss';
import { useState } from "react";
import { Form } from '@carbon/react';
import { Button } from '@carbon/react';
import { TextArea } from '@carbon/react';
//import base64 from 'react-native-base64';
const { REACT_APP_apikey } = process.env;
const { REACT_APP_nlu_url } = process.env;


let axios = require('axios');

function App() {
  const [data, setData] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    var config = {
      method: 'get',
      url: REACT_APP_nlu_url + '/v1/models?version=2022-04-07',
      auth: {
        username: 'apikey',
        password: REACT_APP_apikey
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response)
        var modelId = response.data.models[0].model_id
        ingestDescription(modelId)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function ingestDescription(modelId) {
    let body = ''
    var dataLowerCase = data.toLowerCase();
    console.log(dataLowerCase);
    let payload = {
      "text": dataLowerCase,
      "features": {
        "entities": {
          "model": modelId
        },
        "keywords": {
          "emotion": true,
          "sentiment": true
        },
        "emotion": {
          "sentiment": true
        },
        "categories": {
          "sentiment": true
        },
        "relations": {
          "model": modelId
        },
        "sentiment": {}
      }
    };

    let config = {
      method: 'post',
      url: REACT_APP_nlu_url + '/v1/analyze?version=2021-08-01',
      headers: {
        'Content-Type': 'application/json',
      },
      auth: {
        username: 'apikey',
        password: REACT_APP_apikey
      },
      data: payload
    };

    axios(config)
      .then(function (response) {
        body = response.data;
        console.log(body);
        document.getElementById("results").textContent = JSON.stringify(body.sentiment.document, null, 4);
      })
      .catch(function (error) {
        console.log(error);
        document.getElementById("results").textContent = "Please enter valid text to analyze";
      });
  }

  return (
    <div className="App">
      <h1 className="title">Natural Language Understanding<br></br> Text Analyzation Engine</h1>
      <div className="Form-box">
        <Form className="search-form" onSubmit={handleSubmit}>
          <label>Enter Text to be Analyzed:
          </label>
          <TextArea
            type="text"
            labelText=""
            className="inputBox"
            rows={10}
            placeholder="Enter Text to be Analyzed:"
            value={data}
            onChange={(e) => setData(e.target.value)}>
          </TextArea>
          <Button className="search-btn" type="submit">Submit</Button>
        </Form>
      </div>
      {/* <div className="results-heading" id="results-heading">Results</div> */}
      <label>Sentiment
      </label>
      <pre><div className="results" id="results"></div></pre>
    </div >
  );

}

export default App;
