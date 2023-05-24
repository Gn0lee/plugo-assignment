/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css, SerializedStyles } from '@emotion/react';
import React from 'react';

import type { validationType } from 'common/types/validationType';

export interface TextareaProps {
	id?: string;
	label?: React.ReactNode;
	name?: string;
	placeholder?: string;
	value?: string | number;
	helpText?: React.ReactNode;
	disabled?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
	validation?: validationType;
	containerEmotionCss?: SerializedStyles | SerializedStyles[];
	labelEmotionCss?: SerializedStyles | SerializedStyles[];
	inputEmotionCss?: SerializedStyles | SerializedStyles[];
	helpTextEmotionCss?: SerializedStyles | SerializedStyles[];
}

export default function Textarea({
	id,
	label,
	name,
	placeholder,
	value,
	helpText,
	disabled,
	onChange,
	onBlur,
	validation = 'none',
	containerEmotionCss = css``,
	labelEmotionCss = css``,
	inputEmotionCss = css``,
	helpTextEmotionCss = css``,
}: TextareaProps) {
	return (
		<div css={[containerSt, containerEmotionCss]}>
			{label ? <div css={[labelSt({ disabled }), labelEmotionCss]}>{label}</div> : null}
			<textarea
				css={[inputSt, inputValidationSt[validation], inputEmotionCss]}
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{helpText ? <div css={[helpTextValidationSt[validation], helpTextSt, helpTextEmotionCss]}>{helpText}</div> : null}
		</div>
	);
}

const containerSt = css`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	box-sizing: border-box;

	gap: 8px;
`;

const labelSt = ({ disabled }: Pick<TextareaProps, 'disabled'>) => css`
	color: ${disabled ? '#B1B1B1' : '#666666'};

	font-size: 14px;
	font-weight: 400;
`;

const inputSt = css`
	border: 1px solid #b1b1b1;

	padding: 8px 16px;
	width: 100%;
	height: 100px;

	border-radius: 8px;

	line-height: 140%;

	background: #fafafa;

	overflow: hidden;
	text-overflow: ellipsis;
	white-space: normal;

	font-weight: 400;

	::placeholder {
		color: #808080;
	}

	:disabled {
		border: 1px solid #b1b1b1;
		background-color: #d5d5d5;
		color: #d5d5d5;

		::placeholder {
			color: #b1b1b1;
		}
	}
`;

const helpTextSt = ({ disabled }: Pick<TextareaProps, 'disabled'>) => css`
	width: 100%;

	color: ${disabled && '#B1B1B1'};

	font-size: 13px;
	font-weight: 400;
`;

const helpTextValidationSt = {
	none: css`
		color: #808080;
	`,
	fail: css`
		color: #d91f29;
	`,
	pass: css`
		color: #24a147;
	`,
};

const inputValidationSt = {
	none: css`
		:hover {
			border: 1px solid #122e99;
		}

		:focus {
			border: 2px solid #122e99;
			outline: none;
		}
	`,
	fail: css`
		border: 1px solid #d91f29;

		:hover {
			border: 1px solid #d91f29;
		}

		:focus {
			border: 2px solid #d91f29;
			outline: none;
		}
	`,
	pass: css`
		:hover {
			border: 1px solid #122e99;
		}

		:focus {
			border: 2px solid #122e99;
			outline: none;
		}
	`,
};
