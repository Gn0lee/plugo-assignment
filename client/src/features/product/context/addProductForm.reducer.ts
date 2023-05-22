import type { validationType } from 'common/types/validationType';

import type { Product } from 'features/product/types/product.type';
import { rNumber } from 'features/product/utils/regex';

export interface AddProductForm extends Omit<Product, 'id'> {
	nameValidation: validationType;
	isNameValid: boolean;
	isNameChanged: boolean;
	nameHelpText: string;
	descriptionValidation: validationType;
	isDescriptionValid: boolean;
	isDescriptionChanged: boolean;
	descriptionHelpText: string;
	priceValidation: validationType;
	isPriceValid: boolean;
	isPriceChanged: boolean;
	priceHelpText: string;
	imageUrlValidation: validationType;
	isImageUrlValid: boolean;
	isImageUrlChanged: boolean;
	imageUrlHelpText: string;
}

export interface AddProductFormAction {
	type?: string;
	payload?: string;
}

export const initialFormData: AddProductForm = {
	name: '',
	isNameChanged: false,
	isNameValid: false,
	nameHelpText: '필수 입력값입니다.',
	nameValidation: 'fail',
	description: '',
	isDescriptionChanged: false,
	isDescriptionValid: false,
	descriptionHelpText: '필수 입력값입니다.',
	descriptionValidation: 'fail',
	price: 0,
	isPriceChanged: false,
	isPriceValid: false,
	priceHelpText: '0보다 큰 값을 입력해 주세요.',
	priceValidation: 'fail',
	imageUrl: '',
	imageUrlHelpText: '필수 입력값입니다.',
	imageUrlValidation: 'fail',
	isImageUrlChanged: false,
	isImageUrlValid: false,
};

export const UPDATE_NAME = 'UPDATE_NAME';
export const VALIDATE_NAME = 'VALIDATE_NAME';

export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
export const VALIDATE_DESCRIPTION = 'VALIDATE_DESCRIPTION';

export const UPDATE_PRICE = 'UPDATE_PRICE';
export const VALIDATE_PRICE = 'VALIDATE_PRICE';

export const UPDATE_IMG_URL = 'UPDATE_IMG_URL';
export const VALIDATE_IMG_URL = 'VALIDATE_IMG_URL';

export const addProductFormReducer = (state: AddProductForm, action: AddProductFormAction): AddProductForm => {
	switch (action.type) {
		case UPDATE_NAME: {
			const isPayloadValid = (action.payload ?? '').trim().length > 0;
			return {
				...state,
				isNameChanged: true,
				isNameValid: isPayloadValid,
				name: action.payload || '',
				nameValidation: isPayloadValid ? 'none' : 'fail',
			};
		}

		case VALIDATE_NAME: {
			const isNameStateValid = state.name.trim().length > 0;
			return {
				...state,
				isNameValid: state.isNameChanged ? isNameStateValid : false,
				nameValidation: state.isNameChanged && isNameStateValid ? 'none' : 'fail',
			};
		}

		case UPDATE_DESCRIPTION: {
			const isPayloadValid = (action.payload ?? '').trim().length > 0;
			return {
				...state,
				isDescriptionChanged: true,
				isDescriptionValid: isPayloadValid,
				description: action.payload || '',
				descriptionValidation: isPayloadValid ? 'none' : 'fail',
			};
		}

		case VALIDATE_DESCRIPTION: {
			const isDescriptionStateValid = state.description.trim().length > 0;
			return {
				...state,
				isDescriptionValid: state.isDescriptionChanged ? isDescriptionStateValid : false,
				descriptionValidation: state.isDescriptionChanged && isDescriptionStateValid ? 'none' : 'fail',
			};
		}

		case UPDATE_PRICE: {
			const isPayloadFormValid = rNumber.test(action.payload ?? '');

			const isPayloadValueValid = Number(action.payload ?? '') > 0;

			let helpText = '';

			if (!isPayloadValueValid) {
				helpText = '0보다 큰 값을 입력해주세요.';
			}

			if (!isPayloadFormValid) {
				helpText = '실수 형식을 입력해주세요.';
			}

			return {
				...state,
				isPriceChanged: true,
				isPriceValid: isPayloadFormValid && isPayloadValueValid,
				price: Number(action.payload ?? ''),
				priceValidation: isPayloadFormValid && isPayloadValueValid ? 'none' : 'fail',
				priceHelpText: helpText,
			};
		}

		case VALIDATE_PRICE: {
			const isPriceFormValid = rNumber.test(state.price.toString());

			const isPriceValueValid = state.price > 0;

			let helpText = '';

			if (!isPriceValueValid) {
				helpText = '0보다 큰 값을 입력해주세요.';
			}

			if (!isPriceFormValid) {
				helpText = '실수 형식을 입력해주세요.';
			}

			return {
				...state,
				isPriceValid: state.isPriceChanged ? isPriceValueValid && isPriceFormValid : false,
				priceValidation: state.isPriceChanged && isPriceValueValid && isPriceFormValid ? 'none' : 'fail',
				priceHelpText: helpText,
			};
		}

		case UPDATE_IMG_URL: {
			const isPayloadFormValid =
				(action.payload ?? '').includes('https://') || (action.payload ?? '').includes('http://');

			const isPayloadValueValid = (action.payload ?? '').trim().length > 0;

			let helpText = '';

			if (!isPayloadValueValid) {
				helpText = '필수 입력값입니다.';
			}

			if (!isPayloadFormValid) {
				helpText = 'url 형식으로 입력해주세요.';
			}

			return {
				...state,
				isImageUrlChanged: true,
				isImageUrlValid: isPayloadFormValid && isPayloadValueValid,
				imageUrl: action.payload ?? '',
				imageUrlValidation: isPayloadFormValid && isPayloadValueValid ? 'none' : 'fail',
				imageUrlHelpText: helpText,
			};
		}

		case VALIDATE_IMG_URL: {
			const isImgUrlFormValid = state.imageUrl.includes('http://') || state.imageUrl.includes('https://');

			const isImgUrlValueValid = state.imageUrl.length > 0;

			let helpText = '';

			if (!isImgUrlValueValid) {
				helpText = '필수 입력값입니다.';
			}

			if (!isImgUrlFormValid) {
				helpText = 'url 형식으로 입력해주세요.';
			}

			return {
				...state,
				isImageUrlValid: state.isImageUrlChanged ? isImgUrlValueValid && isImgUrlFormValid : false,
				imageUrlValidation: state.isImageUrlChanged && isImgUrlValueValid && isImgUrlFormValid ? 'none' : 'fail',
				imageUrlHelpText: helpText,
			};
		}

		default:
			return initialFormData;
	}
};
