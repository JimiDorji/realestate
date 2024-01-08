import express from 'express';
import { creatreResidency, getAllResidencies, getResidency } from '../controllers/resdCont.js';
import jwtCheck from '../config/auth0Config.js';

const router = express.Router()

router.post('/create', jwtCheck, creatreResidency)
router.get('/allresd', getAllResidencies)
router.get('/:id', getResidency)


export  {router as residencyRoute}