import axiosInstance from 'common/api/instance';

import type { CartData } from 'features/cart/types/cart.type';

export interface PutSelectedAllApiProps extends Pick<CartData, 'selected'> {}

export default async function putSelectedAllApi({ selected }: PutSelectedAllApiProps) {
	const { data } = await axiosInstance.put<{ success: boolean }>('/cart/selected-all', { selected });

	return data;
}
