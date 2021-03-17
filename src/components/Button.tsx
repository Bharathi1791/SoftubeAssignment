import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  border: 2px solid #3DADC5;
  background-color: #3DADC5;
  color: #fff;
  width: 140px;
  height: 50px;
  line-height: 46px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 11px;
  margin: 0;
  padding: 0px 20px;
  border-radius: 0px;
  box-shadow: none;
  outline: 0;
  background-clip: border-box;
  font-weight: bold;
`;

interface IButtonProps {
	label: React.ReactNode
	onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

const Button: React.FC<IButtonProps> = ({ label, onClick}) => {
	return (
		<StyledButton onClick={onClick}>{ label }</StyledButton>
	);
}

export default Button;
