import { Router } from 'express';

import { addToCart, getCartList, getCartNumberById, deleteCart, putSelectedAll } from 'controller/cartController';

const cartRouter = Router();

cartRouter.post('/', addToCart);

cartRouter.get('/list', getCartList);

cartRouter.get('/number/:id', getCartNumberById);

cartRouter.put('/selected-all', putSelectedAll);

cartRouter.delete('/:id', deleteCart);

export default cartRouter;
