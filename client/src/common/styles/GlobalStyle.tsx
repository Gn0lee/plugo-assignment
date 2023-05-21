/** @jsxRuntime classic */
/** @jsx jsx */

import { Global, css, jsx } from '@emotion/react';

export default function GlobalStyle() {
	return (
		<Global
			styles={[
				css`
					* {
						box-sizing: border-box;
						margin: 0;
						padding: 0;
					}

					html,
					body {
						width: 100%;
						height: 100%;
						font-size: 16px;
					}

					#root {
						height: 100%;
					}
				`,
			]}
		/>
	);
}
