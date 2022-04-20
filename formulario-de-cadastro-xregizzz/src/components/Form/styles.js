import styled from "styled-components";

export const FormStyled = styled.form`
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 400px;
  width: 300px;
  background-color: #fff;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 10px;
  color: red;

  input {
    padding: 10px 50px 10px 10px;
    border-radius: 3px;
    margin: 10px;
    border: 1px solid #282c34;
  }

  button {
    padding: 7px 15px 7px 15px;
    color: #fff;
    background-color: rgb(92, 181, 254);
    border: none;
    cursor: pointer;
    margin: 20px 0px 0px 0px;
  }

  button:hover {
    filter: opacity(0.9);
  }

  h3 {
    color: #282c34;
    font-size: 20px;
  }
`;
