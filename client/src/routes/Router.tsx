import { Routes, Route, Navigate } from 'react-router-dom';

import EmptyOutlet from 'common/layout/EmptyOutlet';
import Layout from 'common/layout/Layout';

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="products" />} />
			<Route path="" element={<Layout />}>
				<Route path="products" element={<EmptyOutlet />}>
					<Route path="" element={<h1>products</h1>} />
					<Route path=":id" element={<h1>product</h1>} />
				</Route>
				<Route path="cart" element={<h1>cart</h1>} />
				<Route path="admin" element={<h1>admin</h1>} />
				<Route path="*" element={<h1>404</h1>} />
			</Route>
		</Routes>
	);
}
