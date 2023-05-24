import { useMutation, useQueryClient } from 'react-query';

import queryKeys from 'common/data/queryKeys';

import deleteCartApi, { DeleteCartApiProps } from 'features/cart/api/deleteCart.api';

export default function useDeleteCartQuery() {
	const queryClient = useQueryClient();

	return useMutation<{ success: boolean }, unknown, DeleteCartApiProps>({
		mutationFn: variables => deleteCartApi({ ...variables }),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.cartList]);
		},
	});
}
