import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Display from "./Display";
import { DisplayDiv } from "./styles";

describe("Display", () => {
	let wrapper;
	const displayComponent = <Display displayValue={""} />;

	beforeEach(() => (wrapper = shallow(displayComponent)));

	it("should render correctly", () => expect(wrapper).toMatchSnapshot());

	it("Display Snapshot renderer", () => {
		const component = renderer.create(displayComponent);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("DisplayDiv Snapshot renderer", () => {
		const styledComponent = renderer.create(<DisplayDiv />);
		let tree = styledComponent.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("should render a <DisplayDiv />", () => {
		expect(wrapper.find(DisplayDiv)).toHaveLength(1);
	});

	it("renders the value of displayValue", () => {
		wrapper.setProps({ displayValue: "test" });
		expect(wrapper.text()).toEqual("test");
	});
});
