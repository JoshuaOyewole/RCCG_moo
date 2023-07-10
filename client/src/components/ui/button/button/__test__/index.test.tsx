
import ReactDOM from "react-dom";
import Button from "../button"
import {render, cleanup,screen } from "@testing-library/react";
import '@testing-library/jest-dom'

afterEach(cleanup)
it("renders button without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Button
    children={"Test"}
    handleClick={() => {}}
  ></Button>,div
  );  
});

it("renders button correctly", () => {
    render( <Button
      children={"Test"}
      handleClick={() => {}}
  />)
  expect( screen.getByTestId('button-component')).toHaveTextContent("Test")
     
  });