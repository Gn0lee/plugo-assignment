/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import useGetCartListQuery from 'features/cart/hooks/useGetCartListQuery';
import CartItem from 'features/cart/components/CartItem';
import CartOrder from 'features/cart/components/CartOrder';
import usePutSelectedAllQuery from 'features/cart/hooks/usePutSelectedAllQuery';
import React from 'react';

export default function ShoppingCart() {
	const { data: getCartListApiResponse } = useGetCartListQuery();

	const { mutate } = usePutSelectedAllQuery();

	if (getCartListApiResponse === undefined) {
		return null;
	}

	const handleCheckboxClick: React.ChangeEventHandler<HTMLInputElement> = event => {
		mutate({ selected: event.target.checked });
	};

	const { cart, totalPrice } = getCartListApiResponse;

	return (
		<div css={container}>
			<label htmlFor="select-all" css={checkboxLabelSt}>
				전체 선택
				<input
					type="checkbox"
					id="select-all"
					checked={cart.length > 0 && cart.every(el => el.selected)}
					onChange={handleCheckboxClick}
				/>
			</label>
			<div css={listContainer}>
				{cart.length > 0 ? (
					cart.map((el, index) => <CartItem key={el.id} {...el} length={cart.length} index={index} />)
				) : (
					<h2>장바구니가 비었습니다.</h2>
				)}
			</div>
			<CartOrder totalPrice={totalPrice} />
		</div>
	);
}

const container = css`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

const listContainer = css`
	width: 700px;

	display: flex;
	flex-direction: column;
	gap: 0;

	background: #fafafa;

	border-radius: 4px;

	border: 1px solid #b1b1b1;

	overflow: hidden;
`;

const checkboxLabelSt = css`
	display: flex;
	align-items: center;
	gap: 8px;
`;
