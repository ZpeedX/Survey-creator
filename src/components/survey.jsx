import React, { Component } from "react";
import Question from "./question";
import { Container, Form } from "semantic-ui-react";

class Survey extends Component {
  state = {
    questions: [
      { id: 1, label: "Vad heter du?", answerType: "input" },
      { id: 2, label: "Var bor du?", answerType: "input" },
      { id: 3, label: "Betygsätta vår tjänst", answerType: "rating" }
    ]
  };
  render() {
    return (
      <div>
        <Container text>
          <Form>
            {this.state.questions.map(question => (
              <Question onQuestion={question} />
            ))}
          </Form>
        </Container>
      </div>
    );
  }
}

export default Survey;
