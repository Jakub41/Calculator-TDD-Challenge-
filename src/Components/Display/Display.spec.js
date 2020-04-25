import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Display from "./Display";
import { DisplayDiv } from "./styles";

describe("Display", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<Display displayValue={''}/>)));

	it("should render a <DisplayDiv />", () => {
		expect(wrapper.find(DisplayDiv)).toHaveLength;
	});
});
