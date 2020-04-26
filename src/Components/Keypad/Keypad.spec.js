import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Keypad from "./Keypad";
import { KeypadDiv, NumbersDiv, OperatorsDiv } from "./styles";

describe("Keypad", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<Keypad
			// callOperator={jest.fn()}
			// numbers={[]}
			// operators={[]}
			// setOperator={jest.fn()}
			// updateDisplay={jest.fn()}
			/>
		);
	});

	it("should render correctly", () => expect(wrapper).toMatchSnapshot());

	it("should render Keypad block", () => {
		const tree = renderer
			.create(
				<KeypadDiv>
					<NumbersDiv></NumbersDiv>
					<OperatorsDiv></OperatorsDiv>
				</KeypadDiv>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("should render a <KeypadDiv />", () => {
		expect(wrapper.find(KeypadDiv)).toHaveLength(1);
	});

	it("should render a <NumbersDiv />", () => {
		expect(wrapper.find(NumbersDiv)).toHaveLength(1);
	});

	it("should render a <OperatorsDiv />", () => {
		expect(wrapper.find(OperatorsDiv)).toHaveLength(1);
	});
});
