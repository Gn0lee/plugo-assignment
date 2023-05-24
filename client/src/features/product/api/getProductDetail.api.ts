import axiosInstance from 'common/api/instance';

import type { Product } from 'features/product/types/product.type';

export interface GetProductDetailApiProps {
	id?: Product['id'];
}

export default async function getProductDetailApi({ id }: GetProductDetailApiProps) {
	const { data } = await axiosInstance.get<Product>(`/product/${id}`);

	return data;
}
