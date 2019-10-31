import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup)

test("Display render", () => {
  rtl.render(<Display />)

})

test('Gate defaults to unlocked and open', () => {
  const wrapper = rtl.render(<Display />)

  const unlockedGate = wrapper.getByText(/unlocked/i)
  const openGate = wrapper.getByText(/open/i)

  expect(unlockedGate).toBeDefined()
  expect(openGate).toBeDefined()
})

