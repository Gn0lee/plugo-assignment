import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'features/product/types/product.type';

interface ProductPreviewSlice extends Omit<Product, 'id'> {}

const initialProductPreviewData: ProductPreviewSlice = {
	name: '',
	price: 0,
	description: '',
	imageUrl: '',
};

const productPreviewSlice = createSlice({
	name: 'productPreview',
	initialState: initialProductPreviewData,
	reducers: {
		setProductPreviewData: (state, action: PayloadAction<ProductPreviewSlice>) => {
			return { ...state, ...action.payload };
		},
	},
});

export const { setProductPreviewData } = productPreviewSlice.actions;

export default productPreviewSlice.reducer;
