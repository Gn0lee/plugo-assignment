import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import queryKeys from 'common/data/queryKeys';

import postCartApi, { PostCartApiProps } from 'features/cart/api/postCart.api';

export default function usePostCartQuery() {
	const queryClient = useQueryClient();

	return useMutation<{ success: boolean }, unknown, PostCartApiProps>({
		mutationFn: variables => postCartApi({ ...variables }),
		onSuccess: () => {
			toast('장바구니가 추가되었습니다.', { type: 'success' });
			queryClient.invalidateQueries([queryKeys.cartList]);
		},
		onError: () => {
			toast('장바구니 추가에 실패했습니다.', { type: 'error' });
		},
	});
}
