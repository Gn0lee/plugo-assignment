/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css, SerializedStyles } from '@emotion/react';
import React from 'react';

export interface ButtonProps {
	children?: React.ReactNode;
	type?: 'submit' | 'reset' | 'button';
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	buttonEmotionCss?: SerializedStyles | SerializedStyles[];
}

export default function Button({ children, onClick, type, buttonEmotionCss, disabled }: ButtonProps) {
	return (
		<button type={type} onClick={onClick} disabled={disabled} css={[buttonSt, buttonEmotionCss]}>
			{children}
		</button>
	);
}

const buttonSt = css`
	border: none;
	border-radius: 8px;

	font-weight: 500;
	font-size: 16px;

	height: 42px;

	cursor: pointer;

	color: #fafafa;
	background: #122e99;

	:disabled {
		cursor: not-allowed;
		color: #d5d5d5;
		background: #b1b1b1;
		border: none;

		:hover {
			color: #d5d5d5;
			background: #b1b1b1;
			border: none;
		}
	}

	:hover {
		background: #0d1f66;
	}

	padding: 12px 16px;
`;
