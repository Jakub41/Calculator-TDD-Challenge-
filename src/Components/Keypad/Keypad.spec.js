import React from "react";
import { shallow } from "enzyme";
import Keypad from "./Keypad";
import { KeypadDiv } from "./styles";

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

	it('should render correctly', () => expect(wrapper).toMatchSnapshot());

	it("should render a <KeypadDiv />", () => {
		expect(wrapper.find(KeypadDiv)).toHaveLength(1);
	});
});
