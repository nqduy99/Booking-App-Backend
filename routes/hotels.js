import express from "express";
import { createHotel, getHotel, getHotels, updateHotel, deleteHotel } from './../controllers/hotel.js';
import { verifyAdmin } from './../utils/verifyToken.js';

const router = express.Router()

//GET
router.get("/:id", getHotel)

//GET ALL
router.get("/" ,getHotels)

//CREATE
router.post("/", verifyAdmin ,createHotel)

//UPDATE
router.put("/:id", verifyAdmin ,updateHotel)

//DELETE
router.delete("/:id", verifyAdmin ,deleteHotel)

export default router