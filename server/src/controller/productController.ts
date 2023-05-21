import { Request, Response } from 'express';
import Product from 'models/Product';

const addProduct = async (req: Request, res: Response) => {
	const { name, description, price, imageUrl } = req.body;

	try {
		const newProduct = new Product({ name, description, price, imageUrl });
		const product = await newProduct.save();

		res.json({
			id: product._id.toString(),
			name: product.name,
			imageUrl: product.imageUrl,
			description: product.description,
			price: product.price,
		});
	} catch (error) {
		res.status(500).json({ error: 'internal server error' });
	}
};

const getProductList = async (req: Request, res: Response) => {
	try {
		const products = await Product.find();

		res.json(
			products.map(product => ({
				id: product._id.toString(),
				name: product.name,
				imageUrl: product.imageUrl,
				price: product.price,
			}))
		);
	} catch (error) {
		res.status(500).json({ error: 'internal server error' });
	}
};

const getProductById = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const product = await Product.findById(id);

		if (!product) {
			res.status(404).json({ error: 'Product not found' });
			return undefined;
		}

		res.json({
			id: product._id.toString(),
			name: product.name,
			imageUrl: product.imageUrl,
			description: product.description,
			price: product.price,
		});
	} catch (error) {
		res.status(500).json({ error: 'internal server error' });
	}
};

export { addProduct, getProductList, getProductById };
