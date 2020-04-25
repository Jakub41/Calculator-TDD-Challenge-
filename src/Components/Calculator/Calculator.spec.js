import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";
import { CalculatorDiv } from "./styles";
import renderer from "react-test-renderer";
import Display from "../Display";

describe("Calculator Component", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<Calculator />)));

	it("Calculator Snapshot renderer", () => {
		const component = renderer.create(<Calculator />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("CalculatorDiv Snapshot renderer", () => {
		const styledComponent = renderer.create(<CalculatorDiv />);
		let tree = styledComponent.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Should render Calculator", () => {
		expect(wrapper.find(CalculatorDiv)).toHaveLength(1);
	});

	const displayValue = "test";
	it("should render the Display Component", () => {
		expect(
			wrapper.containsMatchingElement(<Display displayValue={displayValue} />)
		).toEqual(true);
	});
});
