import express from 'express';

import { index, show, create, update } from '../controllers/Rol_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/', withErrorHandling(show));
router.get('/', withErrorHandling(create));
router.get('/', withErrorHandling(update));

export default router;