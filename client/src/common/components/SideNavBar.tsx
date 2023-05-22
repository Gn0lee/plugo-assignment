/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

export default function SideNavBar() {
	const navigate = useNavigate();

	const handleAdminClick = () => {
		navigate('/admin');
	};

	const handleProductsClick = () => {
		navigate('/products');
	};

	const handleCartClick = () => {
		navigate('/cart');
	};

	return (
		<nav css={containerSt}>
			<div css={contentSt} aria-hidden onClick={handleAdminClick}>
				상품 추가
			</div>
			<div css={contentSt} aria-hidden onClick={handleProductsClick}>
				상품 목록
			</div>
			<div css={contentSt} aria-hidden onClick={handleCartClick}>
				장바구니
			</div>
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

const contentSt = css`
	padding: 16px 24px;
	color: rgb(48, 48, 48);
	font-weight: 500;
	font-size: 14px;
	line-height: 140%;
	letter-spacing: 0.16px;
	cursor: pointer;

	:hover {
		background-color: lightgray;
	}
`;
