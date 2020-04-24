import React from "react";
import { ContentLayout } from "./styles";

const AppLayout = ({ children }) => {
	return (
		<>
			<ContentLayout>
				<div>{children}</div>
			</ContentLayout>
		</>
	);
};

export default AppLayout;
