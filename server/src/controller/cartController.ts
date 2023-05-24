import { Request, Response } from 'express';

import Product from 'models/Product';

export const addToCart = (req: Request, res: Response) => {
	const { id, quantity, selected } = req.body;

	if (req.session.cart === undefined) {
		req.session.cart = [[id, { quantity, selected: selected ?? true }]];
	} else {
		const cartMap = new Map(req.session.cart);

		cartMap.set(id, { quantity: quantity ?? 1, selected: selected ?? true });

		req.session.cart = Array.from(cartMap.entries());
	}

	req.session.save();

	res.json({ success: true });
};

export const deleteCart = (req: Request, res: Response) => {
	const { id } = req.params;

	const cartMap = new Map(req.session.cart);

	cartMap.delete(id);

	req.session.cart = Array.from(cartMap.entries());

	req.session.save();

	res.json({ success: true });
};

export const putSelectedAll = (req: Request, res: Response) => {
	const { selected } = req.body;

	const cartMap = new Map(req.session.cart);

	const productIdList = [...cartMap.keys()];

	productIdList.forEach(product => {
		cartMap.set(product, {
			quantity: cartMap.get(product)?.quantity ?? 0,
			selected,
		});
	});

	req.session.cart = Array.from(cartMap.entries());

	req.session.save();

	res.json({ success: true });
};

export const getCartList = async (req: Request, res: Response) => {
	if (req.session.cart) {
		try {
			const cartMap = new Map<string, { quantity: number; selected: boolean }>(req.session.cart);

			const productIdList = [...cartMap.keys()];
			const productList = await Promise.all(productIdList.map(id => Product.findById(id)));

			const cartList = productList
				.map(product => {
					if (product && req.session.cart) {
						return {
							id: product._id,
							name: product.name,
							imageUrl: product.imageUrl,
							price: product.price,
							quantity: cartMap.get(product._id.toString())?.quantity ?? 0,
							selected: cartMap.get(product._id.toString())?.selected ?? true,
						};
					}

					return null;
				})
				.filter(el => el !== null);

			res.json({
				cart: cartList,
				totalPrice: cartList.reduce(
					(previousValue, currentValue) =>
						previousValue + (currentValue?.selected ? (currentValue?.price ?? 0) * (currentValue?.quantity ?? 0) : 0),
					0
				),
			});
		} catch (e) {
			res.status(500).json({ error: 'internal server error' });
		}
	} else {
		res.json({ cart: [], totalPrice: 0 });
	}
};

export const getCartNumberById = (req: Request, res: Response) => {
	if (req.session.cart) {
		const { id } = req.params;

		const cartMap = new Map(req.session.cart);

		const cartQuantity = cartMap.get(id)?.quantity ?? 0;

		if (cartQuantity) {
			res.json({ number: cartQuantity });
		} else {
			res.json({ number: 0 });
		}
	} else {
		res.json({ number: 0 });
	}
};
