import express from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import ComplaintController from './app/controllers/ComplaintController';
import FileController from './app/controllers/FileController';

const routes = express.Router();
const upload = multer(multerConfig);

routes.get('/complaints', ComplaintController.index);
routes.post('/complaints', ComplaintController.create);

routes.post('/file', upload.single('file'), FileController.store);

export default routes;
