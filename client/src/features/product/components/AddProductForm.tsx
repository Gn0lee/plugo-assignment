/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import React, { useReducer } from 'react';

import Button from 'common/components/Button';
import Textinput from 'common/components/Textinput';

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

export default function AddProductForm() {
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

	const handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = event => {
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
	};

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
				<Textinput
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
					>
						미리보기
					</Button>
					<Button
						buttonEmotionCss={css`
							width: 100%;
						`}
						disabled={!isNameValid || !isPriceValid || !isDescriptionValid || !isImageUrlValid}
					>
						추가
					</Button>
				</div>
			</form>
		</div>
	);
}

const container = css`
	display: flex;
	align-items: flex-start;
	gap: 16px;
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
