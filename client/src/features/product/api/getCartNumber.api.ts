import axiosInstance from 'common/api/instance';

import type { Product } from 'features/product/types/product.type';

export interface GetCartNumberApiProps {
	id?: Product['id'];
}

export default async function getCartNumberApi({ id }: GetCartNumberApiProps) {
	const { data } = await axiosInstance.get<{ number: number }>(`/product/cart-number/${id}`);

	return data;
}
