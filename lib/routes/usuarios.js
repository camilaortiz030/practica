import express from 'express';
import { create, index, ListByRol, show, update } from '../controllers/usuario_controller';

import { verificarAutenticacion, withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(create));
router.put('/:id', withErrorHandling(update));
router.get('/ListByRol/:idRol', ListByRol, verificarAutenticacion);
export default router;