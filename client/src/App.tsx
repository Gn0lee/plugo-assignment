import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import Router from 'routes/Router';
import store from 'common/redux/store';

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Router />
			</Provider>
		</QueryClientProvider>
	);
}
