/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import React from 'react';

import type { Product } from 'features/product/types/product.type';
import ImageNotFound from 'features/product/assets/img_not_found.png';

interface ProductContentProps extends Product {
	dataUpdatedAt?: number;
}

export default function ProductContent({ name, dataUpdatedAt, price, imageUrl }: ProductContentProps) {
	const handleError: React.ReactEventHandler<HTMLImageElement> = e => {
		e.currentTarget.src = ImageNotFound;
	};

	return (
		<div css={containerSt}>
			<img
				css={imageSt}
				onError={handleError}
				src={dataUpdatedAt ? `${imageUrl}?${dataUpdatedAt}` : imageUrl}
				alt="img"
			/>
			<div css={contentBox}>
				<div css={nameSt}>{name}</div>
				<div css={priceSt}>{price}&nbsp;원</div>
			</div>
		</div>
	);
}

const containerSt = css`
	display: flex;
	flex-direction: column;
	gap: 16px;

	width: 200px;
`;

const contentBox = css`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const nameSt = css`
	width: 100%;

	color: #4c4c4c;
	font-size: 18px;
	font-weight: 500;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const priceSt = css`
	width: 100%;

	color: #666666;
	font-size: 14px;
	font-weight: 400;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const imageSt = css`
	width: 100%;
	height: 250px;

	object-fit: cover;
`;
