/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import React from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai';

import type { CartData } from 'features/cart/types/cart.type';
import usePostCartQuery from 'features/cart/hooks/usePostCartQuery';
import ImageNotFound from 'features/product/assets/img_not_found.png';
import useDeleteCartQuery from 'features/cart/hooks/useDeleteCartQuery';

interface CartItemProps extends CartData {
	index: number;
	length: number;
}

export default function CartItem({ id, imageUrl, price, name, quantity, index, length, selected }: CartItemProps) {
	const { mutate: postCart } = usePostCartQuery({ showToast: false });

	const { mutate: deleteCart } = useDeleteCartQuery();

	const handleError: React.ReactEventHandler<HTMLImageElement> = e => {
		e.currentTarget.src = ImageNotFound;
	};

	const handleCheckboxClick: React.ChangeEventHandler<HTMLInputElement> = event => {
		postCart({ selected: event.target.checked, quantity, id });
	};

	const handlePlusClick = () => {
		postCart({ id, selected, quantity: quantity + 1 });
	};

	const handleMinusClick = () => {
		if (quantity > 1) {
			postCart({ id, selected, quantity: quantity - 1 });
		}
	};

	const handleDeleteClick = () => {
		deleteCart({ id });
	};

	return (
		<div css={container({ index, length })}>
			<div css={upperBox}>
				<input type="checkbox" checked={selected} onChange={handleCheckboxClick} />
				<div css={productBox}>
					<img src={imageUrl} alt={name} onError={handleError} css={imageSt} />
					<div css={textBox}>
						<div css={nameSt}>{name}</div>
						<div css={priceSt}>{price} 원</div>
					</div>
				</div>
			</div>
			<div css={lowerBox}>
				<AiOutlineDelete size={24} style={{ cursor: 'pointer' }} onClick={handleDeleteClick} />
				<div css={cartNumberBox}>
					<AiOutlineMinus
						onClick={handleMinusClick}
						style={{ cursor: quantity > 1 ? 'pointer' : 'not-allowed' }}
						color={quantity < 2 ? '#b1b1b1' : 'black'}
					/>
					<div css={cartNumberSt}>{quantity}</div>
					<AiOutlinePlus onClick={handlePlusClick} style={{ cursor: 'pointer' }} />
				</div>
			</div>
		</div>
	);
}

const container = ({ index, length }: Pick<CartItemProps, 'index' | 'length'>) => css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 100%;
	height: 150px;

	padding: 16px;

	background: #fff;
	border-bottom: ${length - 1 !== index && '1px solid #b1b1b1'};
`;

const upperBox = css`
	display: flex;
	align-items: flex-start;
	gap: 16px;
`;

const productBox = css`
	display: flex;
	align-items: flex-start;
	gap: 8px;
`;

const textBox = css`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

const cartNumberSt = css`
	color: #666666;
	font-size: 14px;
	font-weight: 400;
`;

const nameSt = css`
	width: 100%;

	color: #4c4c4c;
	font-size: 16px;
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

const lowerBox = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const cartNumberBox = css`
	display: flex;
	align-items: center;
	gap: 16px;
`;

const imageSt = css`
	width: 48px;
	height: 48px;
	object-fit: cover;
`;
