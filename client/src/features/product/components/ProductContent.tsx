/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

import type { Product } from 'features/product/types/product.type';
import ImageNotFound from 'features/product/assets/img_not_found.png';

interface ProductContentProps extends Product {
	isPreview?: boolean;
}

export default function ProductContent({ name, price, imageUrl, isPreview = false, id }: ProductContentProps) {
	const navigate = useNavigate();

	const handleError: React.ReactEventHandler<HTMLImageElement> = e => {
		e.currentTarget.src = ImageNotFound;
	};

	const handleContentClick = () => {
		if (!isPreview) {
			navigate(id);
		}
	};

	return (
		<div css={containerSt} aria-hidden onClick={handleContentClick}>
			<img css={imageSt} onError={handleError} src={imageUrl} alt="img" />
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

	cursor: pointer;
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
