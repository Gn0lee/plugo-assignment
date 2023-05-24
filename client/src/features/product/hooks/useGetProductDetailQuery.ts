import { useQuery } from 'react-query';

import queryKeys from 'common/data/queryKeys';

import getProductDetailApi from 'features/product/api/getProductDetail.api';
import type { Product } from 'features/product/types/product.type';

interface UseGetProductDetailQueryProps {
	id?: Product['id'];
}

export default function useGetProductDetailQuery({ id }: UseGetProductDetailQueryProps) {
	return useQuery({
		queryKey: [queryKeys.productDetail, id ?? ''],
		queryFn: () => getProductDetailApi({ id }),
		refetchOnMount: true,
		refetchOnWindowFocus: true,
		staleTime: 1000 * 60 * 10,
		enabled: !!id,
	});
}
