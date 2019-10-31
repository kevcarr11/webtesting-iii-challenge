import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";
import { queryByText } from "react-testing-library";


afterEach(rtl.cleanup)


test("Controls render", () => {
  rtl.render(<Controls />)
})

test("Open and Unlock", async () => {
  const wrapper = rtl.render(<Controls />);

  const lockButton = wrapper.queryByText("Lock Gate");
  expect(lockButton.disabled).toBe(true)

  const closeButton = wrapper.getByText("Close Gate")
  expect(closeButton.disabled).toBe(false)

 
  // rtl.act(() => {
  //   rtl.fireEvent.click(open)
  // })

  // expect(mock).toBeCalled()
})

// describe("<Controls />", () => {
//   it("open and unlock", () => {
//     const mock = jest.fn();
//     const { queryByText } = render(<Controls locked={false} closed={false} toggleClosed={mock} />)
//     const lockButton = queryByText("Lock Gate");
//     expect(lockButton.disabled).toBe(true)
//     const closeButton = queryByText("Close Gate");
//     expect(closeButton.disabled).toBe(false)
//     fireEvent.click(closeButton);
//     expect(mock).toBeCalled()
//   })