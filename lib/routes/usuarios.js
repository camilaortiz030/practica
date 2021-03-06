import express from 'express';
import { index, show, create, update, ListByRol } from '../controllers/usuario_controller';
import { withErrorHandling, verificarAutenticacion } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(create));
router.put('/:id', withErrorHandling(update));
router.put('/ListByRol/:idRol', ListByRol, verificarAutenticacion);
export default router;