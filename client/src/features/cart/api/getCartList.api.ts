import axiosInstance from 'common/api/instance';

import type { Cart } from 'features/cart/types/cart.type';

export default async function getCartListApi() {
	const { data } = await axiosInstance.get<Cart[]>('/cart/list');

	return data;
}
