import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";


afterEach(rtl.cleanup)


test("Controls render", () => {
  rtl.render(<Controls />)
})

test("Gate cannot be open or closed if it is locked", () => {
  const toggleLocked = jest.fn()

  const wrapper = rtl.render(
    <Controls locked={true} closed={true} toggleLocked={toggleLocked} />
    )

  const openButton = wrapper.getByText(/open gate/i)

  rtl.act(() => {
    rtl.fireEvent.click(openButton)
  })

  expect(toggleLocked).not.toHaveBeenCalled() 
  
})

test('provide buttons to toggle the closed and locked states', () => {
  const wrapper = rtl.render(<Controls />)

  const closeButton = wrapper.getByText(/close gate/i)
  const lockButton = wrapper.getByText(/lock gate/i)

  expect(closeButton).toBeDefined()
  expect(lockButton).toBeDefined()
})

test('buttons text changes to reflect the state the door will be in if clicked', () => {
  const toggleClosed = jest.fn()

  const wrapper = rtl.render(<Controls locked={false} closed={false} toggleClosed={toggleClosed} />)

  const closeButton = wrapper.getByText(/close gate/i)

  rtl.act(() => {
    rtl.fireEvent.click(closeButton)
  })

  const openButton = wrapper.findByText(/open gate/i)

  expect(closeButton).toBeDefined()
  expect(openButton).toBeDefined()
})

test('the closed toggle button is disabled if the gate is locked', () => {
  const toggleCloseButton = jest.fn()

  const wrapper = rtl.render(<Controls locked={true} closed={true} toggleClosed={toggleCloseButton} />)

  const openButton = wrapper.getByText(/open gate/i)

  rtl.act(() => {
    rtl.fireEvent.click(openButton)
})
  expect(toggleCloseButton).not.toBeCalled()
})

test('the locked toggle button is disabled if the gate is open', () => {
  const toggleLockButton = jest.fn()

  const wrapper = rtl.render(<Controls locked={true} closed={true} toggleClosed={toggleLockButton} />)

  const lockButton = wrapper.getByText(/lock gate/i)

  rtl.act(() => {
    rtl.fireEvent.click(lockButton)
})
  expect(toggleLockButton).not.toBeCalled()

})


