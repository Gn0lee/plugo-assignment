import axiosInstance from 'common/api/instance';

import type { GetCartApiResponse } from 'features/cart/types/cart.type';

export default async function getCartListApi() {
	const { data } = await axiosInstance.get<GetCartApiResponse>('/cart/list');

	return data;
}
