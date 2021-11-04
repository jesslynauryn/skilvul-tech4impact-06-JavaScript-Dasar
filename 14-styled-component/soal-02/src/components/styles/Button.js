import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  padding: 0.5em 10em;
  font-family: sans-serif;
  font-size: 1.25em;
  border-color: ${(props) => (props.outline ? "lightblue" : "white")};
  border-width: 1px;
  border-style: solid;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  border-radius: 4px;
  margin-top: 3em;
  background-color: lightblue;
  color: white;
  &:hover {
    border-color: ${(props) =>
      props.outline ? "lightblue" : "cornflowerblue"};
    border-width: 1px;
    border-style: solid;
    background-color: ${(props) =>
      props.outline ? "lightblue" : "cornflowerblue"};
    color: white;
  }
`;

export default StyledButton;
