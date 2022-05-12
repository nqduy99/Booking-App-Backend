import express from "express";

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Duy loves Tzuyu")
})

export default router