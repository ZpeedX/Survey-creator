import React from "react";
import axios from "axios";
import { Form, Container, Button, Input} from 'semantic-ui-react';
 
function createSurvey() {
    
    axios.get("http://localhost:8080/hello?foo=bar", {simple: true, json: true})
      .then(res => {
          console.log(`Got response ${res} from server`);
      });
    
    axios.post("http://localhost:8080/read", {name: "test.json"}, {simple: true, json: true})
    .then(res => {
        console.log(`Got response ${res} from server`);
    });
}

function SurveyCreate() {
  const style = {
    width: '20%',
    'margin-left': '10px'
  }
  
  const style2 = {
  }
    return (
      <div style={style}>
      <Form> 
        <Form.Field>
      
          <label>Your Question. </label>
        <Input placeholder="Answer to question"></Input>
        <Button style={style2}>Add to survey</Button>

      </Form.Field>
      </Form>

      <button className="ui button" type="submit" onClick={createSurvey}>
              Submit
            </button>
      </div>

    );
  }
  
  export default SurveyCreate;