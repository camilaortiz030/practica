import express from 'express';

import carreras from './carreras';

const router = express.Router();


router.use('/carreras', carreras);



export default router;

