import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";
import { CalculatorDiv } from "./styles";
import renderer from "react-test-renderer";

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
});
