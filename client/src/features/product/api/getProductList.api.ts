import axiosInstance from 'common/api/instance';

import type { Product } from 'features/product/types/product.type';

export default async function getProductListApi() {
	const { data } = await axiosInstance.get<Product[]>('/product/list');

	return data;
}
