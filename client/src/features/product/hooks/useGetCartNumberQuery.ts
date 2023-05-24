import { useQuery } from 'react-query';

import queryKeys from 'common/data/queryKeys';

import type { Product } from 'features/product/types/product.type';
import getCartNumberApi from 'features/product/api/getCartNumber.api';

interface UseGetProductDetailQueryProps {
	id?: Product['id'];
}

export default function useGetCartNumberQuery({ id }: UseGetProductDetailQueryProps) {
	return useQuery({
		queryKey: [queryKeys.productDetail, id ?? ''],
		queryFn: () => getCartNumberApi({ id }),
		refetchOnMount: true,
		refetchOnWindowFocus: true,
		enabled: !!id,
	});
}
