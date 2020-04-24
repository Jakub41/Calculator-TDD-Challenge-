import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import AppLayout from "./AppLayout";
import { ContentLayout } from "./styles";
import Calculator from "../Calculator/Calculator";

// tests if we render the layout correctly with the styled component
describe("AppLayout Component", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<AppLayout />)));

	it("AppLayout Snapshot renderer", () => {
		const component = renderer.create(<AppLayout />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("ContentLayout Snapshot renderer", () => {
		const styledComponent = renderer.create(<ContentLayout />);
		let tree = styledComponent.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Renders component with styled component ContentLayout", () => {
		expect(wrapper.find(ContentLayout)).toHaveLength(1);
	});

	// test if CalculatorComponent is rendered under AppLayout Component
	it("should render the Calculator Component", () => {
		expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
	});
});
