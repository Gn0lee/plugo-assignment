import express from 'express';
import Product from 'models/Product';

const addProduct = async (req: express.Request, res: express.Response) => {
	const { name, description, price, imageUrl } = req.body;

	try {
		const newProduct = new Product({ name, description, price, imageUrl });
		const product = await newProduct.save();

		res.json(product);
	} catch (error) {
		res.status(500).json({ error: 'internal server error' });
	}
};

export { addProduct };
