import { useMutation, useQueryClient } from 'react-query';

import queryKeys from 'common/data/queryKeys';

import putSelectedAllApi, { PutSelectedAllApiProps } from 'features/cart/api/putSelectedAll.api';

export default function usePutSelectedAllQuery() {
	const queryClient = useQueryClient();

	return useMutation<{ success: boolean }, unknown, PutSelectedAllApiProps>({
		mutationFn: variables => putSelectedAllApi({ ...variables }),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.cartList]);
		},
	});
}
