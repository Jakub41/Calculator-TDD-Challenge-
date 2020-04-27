import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";
import { CalculatorDiv } from "./styles";
import renderer from "react-test-renderer";
import Display from "../Display";
import Keypad from "../Keypad";

describe("Calculator Component", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<Calculator />)));

	it("should render correctly", () => expect(wrapper).toMatchSnapshot());

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

	const displayValue = "0";
	it("should render the Display Component", () => {
		expect(
			wrapper.containsMatchingElement(<Display displayValue={displayValue} />)
		).toEqual(true);
	});

	const callOperator = () => {
		console.log("call operation");
	};

	it("should render the Display and Keypad Components", () => {
		console.log(wrapper.debug());
		expect(
			wrapper.containsAllMatchingElements([
				<Display displayValue={displayValue} />,
				<Keypad
					callOperator={callOperator}
					// numbers={wrapper.instance().state.numbers}
					// operators={wrapper.instance().state.operators}
					// setOperator={wrapper.instance().setOperator}
					// updateDisplay={wrapper.instance().updateDisplay}
				/>,
			])
		).toEqual(true);
	});
});
