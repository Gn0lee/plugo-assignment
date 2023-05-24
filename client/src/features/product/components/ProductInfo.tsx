/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import Button from 'common/components/Button';

import ImageNotFound from 'features/product/assets/img_not_found.png';
import useGetProductDetailQuery from 'features/product/hooks/useGetProductDetailQuery';
import useGetCartNumberQuery from 'features/cart/hooks/useGetCartNumberQuery';
import usePostCartQuery from 'features/cart/hooks/usePostCartQuery';

export default function ProductInfo() {
	const { id } = useParams();

	const { data: productDetail } = useGetProductDetailQuery({ id });

	const { data: initialCartNumber } = useGetCartNumberQuery({ id });

	const { mutate } = usePostCartQuery({ showToast: true });

	const [cartNumber, setCartNumber] = useState<number>(initialCartNumber?.number ?? 0);

	if (productDetail === undefined || initialCartNumber === undefined) {
		return null;
	}

	const handleClickPlus = () => {
		setCartNumber(prevState => prevState + 1);
	};

	const handleClickMinus = () => {
		setCartNumber(prevState => (prevState > 0 ? prevState - 1 : 0));
	};

	const handleError: React.ReactEventHandler<HTMLImageElement> = e => {
		e.currentTarget.src = ImageNotFound;
	};

	const { description, id: productId, name, price, imageUrl } = productDetail;

	const handleAddCart = () => {
		mutate({ id: productId, quantity: cartNumber, selected: true });
	};

	return (
		<div css={containerSt}>
			<img css={imageSt} src={imageUrl} alt={name} onError={handleError} />
			<div css={infoContainer}>
				<div css={infoBox}>
					<div css={namePriceBox}>
						<div css={nameSt}>{name}</div>
					</div>
					<div css={descriptionBox}>
						<div css={descriptionLabelSt}>상품 설명</div>
						<div css={descriptionSt}>{description}</div>
					</div>
				</div>
				<div css={cartBox}>
					<div css={priceSt}>{price} 원</div>
					<div css={cartNumberBox}>
						<div css={cartNumberSt}>수량 :&nbsp;{cartNumber}</div>
						<div css={iconBox}>
							<AiOutlinePlus size={14} aria-disabled onClick={handleClickPlus} style={{ cursor: 'pointer' }} />
							<AiOutlineMinus size={14} onClick={handleClickMinus} style={{ cursor: 'pointer' }} />
						</div>
					</div>
					<Button
						buttonEmotionCss={css`
							justify-self: flex-end;
						`}
						onClick={handleAddCart}
						disabled={cartNumber < 1}
					>
						장바구니 추가
					</Button>
				</div>
			</div>
		</div>
	);
}

const containerSt = css`
	display: flex;
	align-items: flex-start;
	gap: 24px;

	height: 100%;
`;

const imageSt = css`
	width: 400px;
	height: 600px;

	object-fit: cover;
`;

const infoContainer = css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 400px;
	height: 600px;
`;

const infoBox = css`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const namePriceBox = css`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const descriptionBox = css`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const descriptionLabelSt = css`
	color: #4c4c4c;
	font-size: 18px;
	font-weight: 500;
`;

const nameSt = css`
	width: 100%;

	color: #4c4c4c;
	font-size: 24px;
	font-weight: 500;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const priceSt = css`
	width: 100%;

	color: #666666;
	font-size: 18px;
	font-weight: 500;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	text-align: end;
`;

const descriptionSt = css`
	width: 100%;

	color: #4c4c4c;
	font-size: 14px;
	font-weight: 400;

	line-height: 140%;

	white-space: pre;
`;

const cartNumberBox = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const cartNumberSt = css`
	color: #666666;
	font-size: 14px;
	font-weight: 400;
`;

const iconBox = css`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const cartBox = css`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
