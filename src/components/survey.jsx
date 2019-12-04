import React, { Component } from "react";
import Question from "./question";
import { Container, Form } from "semantic-ui-react";

class Survey extends Component {
  state = {
      
  };
  render() {
    return (
      <div>
        <Container text>
          <Form>
            <Question onAnswerType={"input"} />
            <Question onAnswerType={"rating"} />
            <Question onAnswerType={"input"} />
            <Question onAnswerType={"rating"} />
            <Question onAnswerType={"input"} />
            <Question onAnswerType={"rating"} />
          </Form>
        </Container>
      </div>
    );
  }
}

export default Survey;
