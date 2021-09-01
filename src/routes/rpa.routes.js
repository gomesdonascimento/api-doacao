import {Router} from 'express';

import {createNewDoacao, getDoacao, getDoacaoById } from '../controllers/rpa.controller';

const router = Router();

router.get('/doacao', getDoacao);

router.post('/doacao', createNewDoacao);

router.get('/doacao/:id',getDoacaoById);

export default router;