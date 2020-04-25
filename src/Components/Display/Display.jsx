import React from "react";
import PropTypes from "prop-types";
import { DisplayDiv } from "./styles";

const Display = ({ displayValue }) => (
	<>
		<DisplayDiv>{displayValue}</DisplayDiv>
	</>
);

Display.propTypes = { displayValue: PropTypes.string.isRequired };

export default Display;
