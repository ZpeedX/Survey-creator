import React, { Component } from "react";
import { Form, Input, Rating } from "semantic-ui-react";

class Question extends Component {
  state = {};

  answerType = type => {
    var compType = "";
    switch (type) {
      case "input":
        compType = <Input placeholder="Svar...."></Input>;
        break;
      case "rating":
        compType = <Rating icon="star" defaultRating={0} maxRating={10} />;
        break;
      default:
          
        break;
    }
    return compType;
  };

  render() {
    return (
      <React.Fragment>
        <Form.Field>
          <label>{this.props.onQuestion.label}</label>
          {this.answerType(this.props.onQuestion.answerType)}
        </Form.Field>
      </React.Fragment>
    );
  }
}

export default Question;
