import { Request, Response } from 'express';

import Product from 'models/Product';

export const addToCart = (req: Request, res: Response) => {
	const products = req.body;

	if (req.session.cart === undefined) {
		req.session.cart = {};
	}

	products.forEach((product: { id: string; quantity: number }) => {
		if (req.session.cart) {
			req.session.cart[product.id] = product.quantity;
		}
	});

	res.json({ success: true });
};

export const getCartList = async (req: Request, res: Response) => {
	if (req.session.cart) {
		try {
			const productIdList = Object.keys(req.session.cart);
			const productList = await Promise.all(productIdList.map(id => Product.findById(id)));

			res.json(
				productList
					.map(product => {
						if (product && req.session.cart) {
							return {
								id: product._id,
								name: product.name,
								imageUrl: product.imageUrl,
								price: product.price,
								quantity: req.session.cart[product._id.toString()] ?? 0,
							};
						}

						return null;
					})
					.filter(el => el !== null)
			);
		} catch (e) {
			res.status(500).json({ error: 'internal server error' });
		}
		return undefined;
	}

	res.json([]);
};
