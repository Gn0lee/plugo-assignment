import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import queryKeys from 'common/data/queryKeys';

import postCartApi, { PostCartApiProps } from 'features/cart/api/postCart.api';

interface UsePostCartQueryProps {
	showToast?: boolean;
}

export default function usePostCartQuery({ showToast = false }: UsePostCartQueryProps) {
	const queryClient = useQueryClient();

	return useMutation<{ success: boolean }, unknown, PostCartApiProps>({
		mutationFn: variables => postCartApi({ ...variables }),
		onSuccess: () => {
			if (showToast) {
				toast('장바구니가 추가되었습니다.', { type: 'success' });
			}

			queryClient.invalidateQueries([queryKeys.cartList]);
		},
		onError: () => {
			toast('장바구니 추가에 실패했습니다.', { type: 'error' });
		},
	});
}
