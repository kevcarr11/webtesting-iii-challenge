import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup)

test("Display render", () => {
  rtl.render(<Display />)

})

test('Displays if gate is open/closed and if it is locked/unlocked', () => {
  const wrapper = rtl.render(<Display />)

  const unlockedGate = wrapper.getByText(/unlocked/i)
  const openGate = wrapper.getByText(/open/i)

  expect(unlockedGate).toBeDefined()
  expect(openGate).toBeDefined()
})

test('displays closed if the closed prop is true and open if otherwise', () => {
  let toggled = true

  const toggler = () => {
    toggled = !toggled
  }

  const wrapper = rtl.render(<Display closed={toggled} />)

  const closed = wrapper.getByText(/closed/i)
  expect(closed).toBeDefined()

  toggler()

  const open = wrapper.findByText(/open/i)
  expect(open).toBeDefined()
})

test('displays locked if the locked prop is true and open if otherwise', () => {
  let toggled = true

  const toggler = () => {
    toggled = !toggled
  }

  const wrapper = rtl.render(<Display locked={toggled} />)
  
  const locked = wrapper.getByText(/locked/i)
  expect(locked).toBeDefined()

  toggler()

  const unlocked = wrapper.findByText(/unlocked/i)  
  expect(unlocked).toBeDefined();

})

test('when locked or closed use the red-led class', () => {
  const wrapper = rtl.render(<Display locked={true} closed={true}/>)

const locked = wrapper.queryAllByText('.red-led')
expect(locked).toBeDefined()


const closed = wrapper.queryAllByText('.red-led')
expect(closed).toBeDefined();
})

test('when unlocked or open use the green-led class', () => {
  const wrapper = rtl.render(<Display locked={false} closed={false}/>)

const unlocked = wrapper.queryAllByText('.green-led')
expect(unlocked).toBeDefined()


const open = wrapper.queryAllByText('.green-led')
expect(open).toBeDefined();
})


