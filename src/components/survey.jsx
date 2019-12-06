import React, { Component } from "react";
import Question from "./question";
import { Container, Form } from "semantic-ui-react";
import { useSelector } from "react-redux";

function Survey() {
  const questions = useSelector(state => state.questions);

  return (
    <div>
      <Container text>
        <Form>
          {questions.map(question => (
            <Question key={question.id} onQuestion={question} />
          ))}
          <button class="ui button" type="submit">
            Submit
          </button>
        </Form>
      </Container>
    </div>
  );
}

export default Survey;
