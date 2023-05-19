import { Router } from 'express';

import { addProduct } from 'controller/productController';

const router = Router();

router.post('/', addProduct);

export default router;
