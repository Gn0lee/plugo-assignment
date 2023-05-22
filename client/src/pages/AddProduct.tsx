/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

export default function AddProduct() {
	return (
		<div css={containerSt}>
			<h2>상품 추가</h2>
		</div>
	);
}

const containerSt = css`
	display: flex;
	flex-direction: column;

	gap: 24px;

	padding: 32px 24px 48px 24px;
`;
