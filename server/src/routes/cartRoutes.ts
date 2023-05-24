import { Router } from 'express';

import { addToCart, getCartList, getCartNumberById } from 'controller/cartController';

const cartRouter = Router();

cartRouter.post('/', addToCart);

cartRouter.get('/list', getCartList);

cartRouter.get('/number/:id', getCartNumberById);

export default cartRouter;
