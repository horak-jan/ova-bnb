const express = require("express");

const Booking = require("../controllers/booking");
const router = express.Router();

//STORE
router.post("/", Booking.store);

//INDEX
router.get("/", Booking.index);

//SHOW
router.get("/:email", Booking.show);

//DELETE
router.delete("/:id", Booking.destroy);

module.exports = router;
