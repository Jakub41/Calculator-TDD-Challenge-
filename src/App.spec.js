
import React from "react";
import renderer from "react-test-renderer";
import AppLayout from "./Components/AppLayout";

describe("App", () => {
	it("AppLayout Snapshot renderer", () => {
		const component = renderer.create(<AppLayout />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
