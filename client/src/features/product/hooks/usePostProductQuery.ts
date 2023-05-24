import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import queryKeys from 'common/data/queryKeys';

import postProductApi, { PostProductApiProps } from 'features/product/api/postProduct.api';
import type { Product } from 'features/product/types/product.type';

export default function usePostProductQuery() {
	const queryClient = useQueryClient();

	return useMutation<Product, unknown, PostProductApiProps>({
		mutationFn: variables => postProductApi({ ...variables }),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.productList]);
		},
		onError: () => {
			toast('상품 추가에 실패했습니다.', { type: 'error' });
		},
	});
}
