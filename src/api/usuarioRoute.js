const userController = require("../controllers/usuarioControllers")

const express = require("express")
const router = express.Router()

router.post("/user", userController.createUser)
router.get("/users", userController.findAllUsers)
router.get("/user/:id", userController.findUser)
router.put("/user/:id", userController.updateUser)
router.delete("/user/:id", userController.deleteUser)

module.exports = router