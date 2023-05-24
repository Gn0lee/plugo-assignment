import axiosInstance from 'common/api/instance';

import type { Cart } from 'features/cart/types/cart.type';

export interface PostCartApiProps extends Pick<Cart, 'id' | 'quantity'> {}

export default async function postCartApi({ quantity, id }: PostCartApiProps) {
	const { data } = await axiosInstance.post<{ success: boolean }>('/cart', { id, quantity });

	return data;
}
