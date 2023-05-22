/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import Button from 'common/components/Button';
import Textinput from 'common/components/Textinput';

export default function AddProductForm() {
	return (
		<div css={container}>
			<form>
				<Textinput id="name" />
				<Textinput id="description" />
				<Textinput id="price" type="number" />
				<Textinput id="imageUrl" />
				<div>
					<Button type="button">미리보기</Button>
					<Button>추가</Button>
				</div>
			</form>
		</div>
	);
}

const container = css`
	display: flex;
	align-items: flex-start;
	gap: 16px;
`;
