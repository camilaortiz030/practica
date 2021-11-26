import express from 'express';

import carreras from './carreras';
import rol from './rol';
import usuarios from './usuarios';
import materias from './materias';
const router = express.Router();

router.use('/rol', rol);
router.use('/usuarios', usuarios);
router.use('/carreras', carreras);
router.use('/materias', materias);


export default router;

