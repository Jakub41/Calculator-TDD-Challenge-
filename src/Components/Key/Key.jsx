import React from "react";
import PropTypes from "prop-types";
import { KeyDiv, KeyButton } from "./styles";

const Key = ({ keyAction, keyType, keyValue }) => (
	<>
		<KeyDiv>
			<KeyButton>{keyValue}</KeyButton>
		</KeyDiv>
	</>
);

Key.propTypes = {
	keyAction: PropTypes.func.isRequired,
	keyType: PropTypes.string.isRequired,
	keyValue: PropTypes.string.isRequired,
};

export default Key;
