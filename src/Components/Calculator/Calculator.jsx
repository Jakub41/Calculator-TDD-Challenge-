import React, { useState } from "react";
import { CalculatorDiv } from "./styles";
import Display from "../Display";

const Calculator = () => {
	const [displayValue, setDisplayValue] = useState("");

	return (
		<>
			<CalculatorDiv>
				<Display displayValue={displayValue} />
			</CalculatorDiv>
		</>
	);
};

export default Calculator;
