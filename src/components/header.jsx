import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Route, Link } from "react-router-dom";

class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <img src="https://react.semantic-ui.com/logo.png" alt="logo" />
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
          to="/"
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="testimonials"
          active={activeItem === "testimonials"}
          onClick={this.handleItemClick}
          to="/survey"
        >
          Survey
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="sign-in"
          active={activeItem === "sign-in"}
          onClick={this.handleItemClick}
          to="/surveyCreator"
        >
          Create Survey
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
