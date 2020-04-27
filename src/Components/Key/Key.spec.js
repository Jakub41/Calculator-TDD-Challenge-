import React from "react";
import { shallow } from "enzyme";
import Key from "./Key";
import { KeyDiv } from "./styles";

describe("Key", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Key keyAction={jest.fn()} keyType={""} keyValue={""} />);
	});

	it('should render correctly', () => expect(wrapper).toMatchSnapshot());

	it("should render a <KeyDiv />", () => {
		expect(wrapper.find(KeyDiv)).toHaveLength(1);
	});

	it("should render the value of keyValue", () => {
		wrapper.setProps({ keyValue: "test" });
		expect(wrapper.text()).toEqual("test");
	});
});
