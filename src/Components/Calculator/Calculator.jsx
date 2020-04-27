import React, { useState } from "react";
import { CalculatorDiv } from "./styles";
import Display from "../Display";
import Keypad from "../Keypad";

const Calculator = () => {
	const [displayValue, setDisplayValue] = useState("0");
	const [numbers, setNumbers] = useState([]);
	const [operators, setOperators] = useState([]);
	const [selectedOperator, setSelectedOperator] = useState("");
	const [storedValue, setStoredValue] = useState("");

	const callOperator = () => {
		console.log("call operation");
	};

	return (
		<>
			<CalculatorDiv>
				<Display displayValue={displayValue} />
				<Keypad
					callOperator={callOperator}
					// 	numbers={numbers}
					// 	operators={operators}
					// 	setOperator={setOperator}
					// 	updateDisplay={updateDisplay}
				/>
			</CalculatorDiv>
		</>
	);
};

export default Calculator;
