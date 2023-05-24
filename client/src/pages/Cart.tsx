/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import ShoppingCart from 'features/cart/components/ShoppingCart';

export default function Cart() {
	return (
		<div css={containerSt}>
			<h2>장바구니</h2>
			<ShoppingCart />
		</div>
	);
}

const containerSt = css`
	display: flex;
	flex-direction: column;

	gap: 24px;

	padding: 32px 24px 48px 24px;
`;
