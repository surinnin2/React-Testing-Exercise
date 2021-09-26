import { render } from "@testing-library/react";
import React from "react";
import Card from "./Card"

//smoke test
test("renders without crashing", function() {
    render(<Card />)
})

//snapshot test
test("matches snapshot", function() {
    const {asFragment} = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
})