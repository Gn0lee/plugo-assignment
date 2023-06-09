import { useQuery } from 'react-query';

import queryKeys from 'common/data/queryKeys';

import getProductListApi from 'features/product/api/getProductList.api';

export default function useGetProductListQuery() {
	return useQuery({
		queryKey: [queryKeys.productList],
		queryFn: getProductListApi,
		refetchOnMount: true,
		refetchOnWindowFocus: true,
		staleTime: 1000 * 60 * 10,
	});
}
