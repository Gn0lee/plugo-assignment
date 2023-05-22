/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import { useSelector } from 'react-redux';

import { RootState } from 'common/redux/store';
import ProductContent from 'features/product/components/ProductContent';

export default function ProductPreview() {
	const { name, description, price, imageUrl } = useSelector((state: RootState) => state.productPreview);

	return <ProductContent name={name} price={price} description={description} id="preview" imageUrl={imageUrl} />;
}
