import React from "react";
import PropTypes from "prop-types";
import { KeypadDiv, NumbersDiv, OperatorsDiv } from "./styles";
import Key from "../Key";

const Keypad = ({
	callOperator,
	numbers,
	operators,
	setOperator,
	updateDisplay,
}) => (
	<KeypadDiv>
		<NumbersDiv></NumbersDiv>
		<OperatorsDiv></OperatorsDiv>
		<Key keyAction={callOperator} keyType="" keyValue="" />
	</KeypadDiv>
);

Keypad.propTypes = {
	callOperator: PropTypes.func.isRequired,
	// numbers: PropTypes.array.isRequired,
	// operators: PropTypes.array.isRequired,
	// setOperator: PropTypes.func.isRequired,
	// updateDisplay: PropTypes.func.isRequired,
};

export default Keypad;
