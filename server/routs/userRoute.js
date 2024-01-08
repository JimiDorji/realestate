import express from 'express';
import { bookVisit, cancleBooking, createUser, getAllBookings, getAllFav, toFav } from '../controllers/userCont.js';
import jwtCheck from '../config/auth0Config.js';

const router = express.Router()

router.post("/register", jwtCheck, createUser)
router.post("/bookVisit/:id", jwtCheck, bookVisit)
router.post("/allBookings", jwtCheck, getAllBookings)
router.post("/removeBooking/:id", jwtCheck, cancleBooking)
router.post("/toFav/:rid", jwtCheck, toFav)
router.post("/allFav", jwtCheck, getAllFav)


export  {router as userRoute}