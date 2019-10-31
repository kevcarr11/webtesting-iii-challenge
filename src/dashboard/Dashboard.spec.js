import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup)

test("<Dashboard /> snapshot", () => {
  const wrapper = rtl.render(<Dashboard />)

  expect(wrapper.asFragment()).toMatchSnapshot()
})

test('Shows the controls and display', () => {
  const wrapper = rtl.render(<Dashboard />)

  const controls = wrapper.getByText(/close gate/i)
  const display = wrapper.getByText(/open/i)

  expect(controls).toBeDefined()
  expect(display).toBeDefined()
})