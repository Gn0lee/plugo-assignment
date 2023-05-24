import { Router } from 'express';

import { addProduct, getProductById, getProductList } from 'controller/productController';

import { addToCart, getCartList, getCartNumberById } from 'controller/cartController';

const router = Router();

router.post('/', addProduct);

router.get('/list', getProductList);

router.get('/:id', getProductById);

router.post('/cart', addToCart);

router.get('/cart/list', getCartList);

router.get('/cart-number/:id', getCartNumberById);

export default router;
