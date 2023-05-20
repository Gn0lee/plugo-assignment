import { Router } from 'express';

import { addProduct, getProductById, getProductList } from 'controller/productController';

const router = Router();

router.post('/', addProduct);

router.get('/list', getProductList);

router.get('/:id', getProductById);

export default router;
