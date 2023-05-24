import { Routes, Route, Navigate } from 'react-router-dom';

import EmptyOutlet from 'common/layout/EmptyOutlet';
import Layout from 'common/layout/Layout';

import AddProduct from 'pages/AddProduct';
import Products from 'pages/Products';
import ProductDetail from 'pages/ProductDetail';

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="products" />} />
			<Route path="" element={<Layout />}>
				<Route path="products" element={<EmptyOutlet />}>
					<Route path="" element={<Products />} />
					<Route path=":id" element={<ProductDetail />} />
				</Route>
				<Route path="cart" element={<h1>cart</h1>} />
				<Route path="admin" element={<AddProduct />} />
				<Route path="*" element={<h1>404</h1>} />
			</Route>
		</Routes>
	);
}
