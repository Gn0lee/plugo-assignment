/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import useGetProductListQuery from 'features/product/hooks/useGetProductListQuery';
import ProductContent from 'features/product/components/ProductContent';

export default function ProductList() {
	const { data } = useGetProductListQuery();

	if (data === undefined) {
		return null;
	}

	return (
		<div css={containerSt}>
			{data.map(product => (
				<ProductContent {...product} key={product.id} />
			))}
		</div>
	);
}

const containerSt = css`
	display: flex;
	flex-wrap: wrap;

	gap: 16px;
	row-gap: 16px;
`;
