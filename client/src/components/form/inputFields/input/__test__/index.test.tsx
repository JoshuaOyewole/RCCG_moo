import React from "react";
import ReactDOM from "react-dom";
import Input from "../Input";
import {render, cleanup,screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)
it("renders input without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Input
    placeholder={"Test"}
    required 
    inputType={"text"}
  ></Input>,div
  );  
});

it("renders input correctly", () => {
    render( <Input
      placeholder={"Test"}
      required 
      inputType={"text"}
  />)
  expect( screen.getByTestId('input-component')).toHaveClass("input_container")
     
  });