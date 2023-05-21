/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import { Outlet } from 'react-router-dom';

import Header from 'common/components/Header';
import SideNavBar from 'common/components/SideNavBar';

export default function Layout() {
	return (
		<main css={containerSt}>
			<Header />
			<div css={lowerBoxSt}>
				<SideNavBar />
				<div css={outletBoxSt}>
					<Outlet />
				</div>
			</div>
		</main>
	);
}

const containerSt = css`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: 100%;

	background: #fafafa;
`;

const lowerBoxSt = css`
	display: flex;

	width: 100%;
	height: 100%;
	gap: 0;
`;

const outletBoxSt = css`
	width: 100%;
	height: 100%;

	overflow: auto;
`;
