import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import Router from 'routes/Router';

import store from 'common/redux/store';
import GlobalStyle from 'common/styles/GlobalStyle';

const queryClient = new QueryClient();

export default function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<Router />
				</Provider>
			</QueryClientProvider>
			<GlobalStyle />
		</>
	);
}
