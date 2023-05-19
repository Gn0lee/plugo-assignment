import mongoose, { Schema, Model } from 'mongoose';

interface Product {
	name: string;
	description: string;
	price: number;
	imageUrl: string;
}

interface ProductModel extends Model<Product> {}

const ProductSchema: Schema = new Schema<Product>({
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	imageUrl: { type: String, required: true },
});

export default mongoose.model<Product, ProductModel>('Product', ProductSchema);
