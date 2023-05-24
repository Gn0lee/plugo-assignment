/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import ProductInfo from 'features/product/components/ProductInfo';

export default function ProductDetail() {
	const navigate = useNavigate();

	const handleBackIconClick = () => {
		navigate(-1);
	};

	return (
		<div css={containerSt}>
			<AiOutlineLeft style={{ cursor: 'pointer' }} onClick={handleBackIconClick} size={24} />
			<ProductInfo />
		</div>
	);
}

const containerSt = css`
	display: flex;
	flex-direction: column;
	gap: 16px;

	padding: 32px 24px 48px 24px;
`;
