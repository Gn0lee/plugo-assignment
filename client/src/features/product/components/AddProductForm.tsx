/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import React, { useEffect, useReducer } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import Button from 'common/components/Button';
import Textinput from 'common/components/Textinput';
import Textarea from 'common/components/Textarea';
import { useAppDispatch } from 'common/redux/store';

import {
	initialFormData,
	UPDATE_IMG_URL,
	VALIDATE_IMG_URL,
	VALIDATE_PRICE,
	UPDATE_PRICE,
	UPDATE_DESCRIPTION,
	UPDATE_NAME,
	VALIDATE_DESCRIPTION,
	VALIDATE_NAME,
	addProductFormReducer,
} from 'features/product/context/addProductForm.reducer';
import ProductPreview from 'features/product/components/ProductPreview';
import { setProductPreviewData } from 'features/product/context/productPreviewSlice';
import usePostProductQuery from 'features/product/hooks/usePostProductQuery';

export default function AddProductForm() {
	const dispatch = useAppDispatch();

	const { mutate, isLoading, isSuccess } = usePostProductQuery();

	const [addProductFormData, setAddProductFormData] = useReducer(addProductFormReducer, initialFormData);

	const {
		name,
		isNameChanged,
		isNameValid,
		nameHelpText,
		nameValidation,
		description,
		isDescriptionChanged,
		isDescriptionValid,
		descriptionHelpText,
		descriptionValidation,
		price,
		isPriceChanged,
		isPriceValid,
		priceHelpText,
		priceValidation,
		imageUrl,
		imageUrlHelpText,
		imageUrlValidation,
		isImageUrlChanged,
		isImageUrlValid,
	} = addProductFormData;

	const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = event => {
		setAddProductFormData({ type: UPDATE_NAME, payload: event.target.value });
	};

	const handleNameBlur = () => {
		setAddProductFormData({ type: VALIDATE_NAME });
	};

	const handleDescriptionChange: React.ChangeEventHandler<HTMLTextAreaElement> = event => {
		setAddProductFormData({ type: UPDATE_DESCRIPTION, payload: event.target.value });
	};

	const handleDescriptionBlur = () => {
		setAddProductFormData({ type: VALIDATE_DESCRIPTION });
	};

	const handlePriceChange: React.ChangeEventHandler<HTMLInputElement> = event => {
		setAddProductFormData({ type: UPDATE_PRICE, payload: event.target.value });
	};

	const handlePriceBlur = () => {
		setAddProductFormData({ type: VALIDATE_PRICE });
	};

	const handleImageUrlChange: React.ChangeEventHandler<HTMLInputElement> = event => {
		setAddProductFormData({ type: UPDATE_IMG_URL, payload: event.target.value });
	};

	const handleImageUrlBlur = () => {
		setAddProductFormData({ type: VALIDATE_IMG_URL });
	};

	const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = event => {
		event.preventDefault();
		mutate({ name, description, price, imageUrl });
	};

	const handlePreviewButtonClick = () => {
		dispatch(setProductPreviewData({ name, imageUrl, price, description }));
	};

	useEffect(() => {
		if (isSuccess) {
			toast('상품이 추가되었습니다', { type: 'success' });
			setAddProductFormData({});
			dispatch(setProductPreviewData({ name: '', imageUrl: '', price: 0, description: '' }));
		}
	}, [isSuccess, dispatch]);

	return (
		<div css={container}>
			<form css={formSt} onSubmit={handleFormSubmit}>
				<Textinput
					id="name"
					value={name}
					onChange={handleNameChange}
					onBlur={handleNameBlur}
					validation={isNameChanged ? nameValidation : 'none'}
					helpText={isNameChanged && !isNameValid && nameHelpText}
					label="이름"
				/>
				<Textarea
					id="description"
					value={description}
					onChange={handleDescriptionChange}
					onBlur={handleDescriptionBlur}
					validation={isDescriptionChanged ? descriptionValidation : 'none'}
					helpText={isDescriptionChanged && !isDescriptionValid && descriptionHelpText}
					label="설명"
				/>
				<Textinput
					id="price"
					type="number"
					value={price || ''}
					onChange={handlePriceChange}
					onBlur={handlePriceBlur}
					validation={isPriceChanged ? priceValidation : 'none'}
					helpText={isPriceChanged && !isPriceValid && priceHelpText}
					label="가격"
				/>
				<Textinput
					id="imageUrl"
					value={imageUrl}
					onChange={handleImageUrlChange}
					onBlur={handleImageUrlBlur}
					validation={isImageUrlChanged ? imageUrlValidation : 'none'}
					helpText={isImageUrlChanged && !isImageUrlValid && imageUrlHelpText}
					label="이미지 url"
				/>
				<div css={buttonBoxSt}>
					<Button
						type="button"
						buttonEmotionCss={css`
							width: 100%;
							background-color: #fafafa;
							border: 1px solid #122e99;
							color: #122e99;

							&:hover {
								background-color: #d5d5d5;
								border: 1px solid #0d1f66;
								color: #0d1f66;
							}
						`}
						disabled={!isNameValid || !isPriceValid || !isDescriptionValid || !isImageUrlValid}
						onClick={handlePreviewButtonClick}
					>
						미리보기
					</Button>
					<Button
						buttonEmotionCss={css`
							width: 100%;
						`}
						disabled={!isNameValid || !isPriceValid || !isDescriptionValid || !isImageUrlValid || isLoading}
					>
						추가
					</Button>
				</div>
			</form>
			<ProductPreview />
		</div>
	);
}

const container = css`
	display: flex;
	align-items: flex-start;
	gap: 64px;
`;

const formSt = css`
	display: flex;
	flex-direction: column;
	gap: 16px;

	width: 240px;
`;

const buttonBoxSt = css`
	display: flex;
	align-items: center;
	gap: 8px;

	width: 100%;
`;
