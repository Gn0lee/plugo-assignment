/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
	return (
		<header css={containerSt}>
			<div css={titleSt}>Plugo</div>
			<div css={iconBoxSt}>
				<AiOutlineSearch size={24} />
			</div>
		</header>
	);
}

const containerSt = css`
	flex: none;

	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 64px;

	padding: 16px;

	background-color: rgb(250, 250, 250);

	border-bottom: 1px solid rgb(213, 213, 213);
`;

const titleSt = css`
	font-size: 16px;
	font-weight: 500;
	color: #303030;
`;

const iconBoxSt = css`
	display: flex;
	align-items: center;
`;
