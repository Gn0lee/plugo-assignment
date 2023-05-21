import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import session from 'express-session';

import productRoutes from 'routes/productRoutes';

dotenv.config();

const app = express();
const port = 4000;

const { DB_PASSWORD, DB_USER_NAME } = process.env;

app.use(
	session({
		secret: 'secret-key-plugo!@!',
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	})
);
app.use(cors());
app.use(express.json());

app.use('/product', productRoutes);

mongoose
	.connect(`mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@plugo.n38j8uj.mongodb.net/?retryWrites=true&w=majority`, {})
	.then(() => console.log('Successfully connected to mongodb'))
	.catch(e => console.error(e));

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
