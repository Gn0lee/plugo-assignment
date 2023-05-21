/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function EmptyOutlet() {
	return (
		<React.Fragment>
			<Outlet />
		</React.Fragment>
	);
}
