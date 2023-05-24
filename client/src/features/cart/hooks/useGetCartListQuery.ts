import { useQuery } from 'react-query';

import queryKeys from 'common/data/queryKeys';

import getCartListApi from 'features/cart/api/getCartList.api';

export default function useGetCartListQuery() {
	return useQuery({
		queryKey: [queryKeys.cartList],
		queryFn: getCartListApi,
		refetchOnMount: true,
		refetchOnWindowFocus: true,
		staleTime: 1000 * 60 * 10,
	});
}
