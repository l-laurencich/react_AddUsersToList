import styled from "styled-components";

const Button = styled.button`
  font-weight: bold;
  padding: 4px 8px;
  border: 1px solid grey;
  border-radius: 8px;
  background: rgb(109, 109, 109);
  color: white;
  cursor: pointer;

  &:hover {
    background: #4f005f;
  }
`;
export default Button;
