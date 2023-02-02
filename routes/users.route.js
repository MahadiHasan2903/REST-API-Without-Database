const {createUser, updateUser, deleteUser, getUser } = require("../controllers/users.controller");

const router= require("express").Router();

router.get("/",getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
module.exports= router;
