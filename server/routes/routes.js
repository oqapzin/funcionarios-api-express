const express = require("express")
const router = express.Router()
const controllerPessoa = require("../controllers/pessoa")

router.get("/", function (req, res) {
    res.json({})
})

router.get("/funcionarios", (req, res) => controllerPessoa.getAll(req, res))
router.get("/funcionario/:id", (req, res) => controllerPessoa.getById(req, res))
router.post("/funcionario", (req, res) => controllerPessoa.create(req, res))
router.put("/funcionario/:id", (req, res) => controllerPessoa.updateSalary(req, res))

module.exports = router