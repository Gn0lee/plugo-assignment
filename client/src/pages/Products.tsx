/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import ProductList from 'features/product/components/ProductList';

export default function Products() {
	return (
		<div css={containerSt}>
			<ProductList />
		</div>
	);
}

const containerSt = css`
	padding: 32px 24px 48px 24px;
`;
