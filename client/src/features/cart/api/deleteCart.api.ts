import axiosInstance from 'common/api/instance';

import type { CartData } from 'features/cart/types/cart.type';

export interface DeleteCartApiProps extends Pick<CartData, 'id'> {}

export default async function deleteCartApi({ id }: DeleteCartApiProps) {
	const { data } = await axiosInstance.delete<{ success: boolean }>(`/cart/${id}`);

	return data;
}
