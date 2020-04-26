import React from "react";
import PropTypes from "prop-types";
import { KeypadDiv } from "./styles";

const Keypad = ({
	callOperator,
	numbers,
	operators,
	setOperator,
	updateDisplay,
}) => <KeypadDiv />;

// Keypad.propTypes = {
// 	callOperator: PropTypes.func.isRequired,
// 	numbers: PropTypes.array.isRequired,
// 	operators: PropTypes.array.isRequired,
// 	setOperator: PropTypes.func.isRequired,
// 	updateDisplay: PropTypes.func.isRequired,
// };

export default Keypad;
