import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  height: 100vh;
  padding: 100px;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  justify-content: ${(props) => props.align || "center"};
`;

export default FlexContainer;
