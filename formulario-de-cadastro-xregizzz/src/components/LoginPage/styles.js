import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 80vw;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  font-size: 2vw;

  color: black;
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

  div {
    margin-top: 50px;
    height: 50vh;
    width: 40vw;
  }
`;
