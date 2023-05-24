import axiosInstance from 'common/api/instance';

import type { CartData } from 'features/cart/types/cart.type';

export interface PostCartApiProps extends Pick<CartData, 'id' | 'quantity' | 'selected'> {}

export default async function postCartApi({ quantity, id, selected }: PostCartApiProps) {
	const { data } = await axiosInstance.post<{ success: boolean }>('/cart', { id, quantity, selected });

	return data;
}
