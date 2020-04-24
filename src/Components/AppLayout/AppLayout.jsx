import React from "react";
import { ContentLayout } from "./styles";
import Calculator from "../Calculator";

const AppLayout = () => {
	return (
		<>
			<ContentLayout>
				<Calculator />
			</ContentLayout>
		</>
	);
};

export default AppLayout;
