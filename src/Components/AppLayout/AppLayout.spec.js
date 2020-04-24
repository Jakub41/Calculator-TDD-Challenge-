import { shallow } from "enzyme";
import React from "react";
import AppLayout from "./AppLayout";
import { ContentLayout } from "./styles";
import renderer from "react-test-renderer";

// tests if we render the layout correctly with the styled component
describe("AppLayout Component", () => {
	it("AppLayout Snapshot renderer", () => {
		const component = renderer.create(<AppLayout />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("ContentLayout Snapshot renderer", () => {
		const styledComponent =  renderer.create(<ContentLayout />);
		let tree = styledComponent.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Renders component with styled component ContentLayout", () => {
		const wrapper = shallow(<AppLayout />);
		expect(wrapper.find(ContentLayout)).toHaveLength(1);
	});
});
