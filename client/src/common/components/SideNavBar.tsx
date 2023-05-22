/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

export default function SideNavBar() {
	return (
		<nav css={containerSt}>
			<div>smb</div>
		</nav>
	);
}

const containerSt = css`
	flex: none;

	width: 248px;
	height: 100%;

	background-color: rgb(250, 250, 250);

	border-right: 1px solid rgb(213, 213, 213);
	box-shadow: rgba(0, 0, 0, 0.04) 4px 0 12px;
`;
