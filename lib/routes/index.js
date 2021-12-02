import express from 'express';


import carreras from './carreras';
import roles from './roles';
import usuarios from './usuarios';
import materias from './materias';
import cursos from './cursos';


const router = express.Router();


router.use('/materias', materias);
router.use('/carreras', carreras);
router.use('/cursos', cursos);
router.use('/roles', roles);
router.use('/usuarios', usuarios);

export default router;

