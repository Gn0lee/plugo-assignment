import { Router } from 'express';

import { addProduct, getProductById, getProductList } from 'controller/productController';

const productRouter = Router();

productRouter.post('/', addProduct);

productRouter.get('/list', getProductList);

productRouter.get('/:id', getProductById);

export default productRouter;
