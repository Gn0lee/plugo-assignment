import { Router } from 'express';

import { addProduct, getProductList } from 'controller/productController';

const router = Router();

router.post('/', addProduct);

router.get('/list', getProductList);

export default router;
