/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import Button from 'common/components/Button';

import type { GetCartApiResponse } from 'features/cart/types/cart.type';

interface CartOrderProps extends Pick<GetCartApiResponse, 'totalPrice'> {}

export default function CartOrder({ totalPrice }: CartOrderProps) {
	return (
		<div css={container}>
			<div css={titleSt}>주문하기</div>
			<div css={lowerBox}>
				<div css={textBox}>
					<div css={labelSt}>총 가격</div>
					<div css={priceSt}>{totalPrice} 원</div>
				</div>
				<Button disabled={!(totalPrice > 0)}>주문하기</Button>
			</div>
		</div>
	);
}

const container = css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 700px;
	height: 200px;

	padding: 16px;

	background: #fff;

	border-radius: 4px;

	border: 1px solid #b1b1b1;
`;

const titleSt = css`
	color: #4c4c4c;
	font-size: 20px;
	font-weight: 700;
`;

const priceSt = css`
	width: 100%;

	color: #666666;
	font-size: 16px;
	font-weight: 600;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	text-align: end;
`;

const labelSt = css`
	width: 100%;

	color: #4c4c4c;
	font-size: 16px;
	font-weight: 400;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const textBox = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const lowerBox = css`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
