/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import useGetCartListQuery from 'features/cart/hooks/useGetCartListQuery';

export default function SideNavBar() {
	const navigate = useNavigate();

	const { data: cartList, isSuccess } = useGetCartListQuery();

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
			<div css={menuContainer} aria-hidden onClick={handleCartClick}>
				<div>장바구니</div>
				{isSuccess && cartList.length > 0 ? <div css={badgeSt}>{cartList.length}</div> : null}
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
	font-size: 16px;
	letter-spacing: 0.16px;
	cursor: pointer;

	height: 50px;

	:hover {
		background-color: lightgray;
	}
`;

const menuContainer = css`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 16px 24px;
	color: rgb(48, 48, 48);
	font-weight: 500;
	font-size: 16px;

	letter-spacing: 0.16px;
	cursor: pointer;

	height: 50px;

	:hover {
		background-color: lightgray;
	}
`;

const badgeSt = css`
	color: #fafafa;
	font-size: 12px;

	background-color: #d91f29;

	text-align: center;

	height: 16px;
	width: fit-content;
	min-width: 16px;

	padding: 2px 4px;

	border-radius: 8px;

	line-height: 16px;
`;
