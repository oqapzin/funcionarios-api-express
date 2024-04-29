
const pessoa = require("../models/pessoa")
const controllerPessoa = {

    getAll: async (req, res) => {
        try {
            const cargo = req.query.cargo

            if (cargo) {
                res.json(await pessoa.find({ cargo: cargo }))

            } else {
                res.json(await pessoa.find())
            }


        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    getById: async (req,res) => {
        try {
            const idFuncionario = req.params.id

            res.json(await pessoa.findOne({ id: idFuncionario }))

        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    create: async (req, res) => {
        function validarCPF(cpf) {
            const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
            return cpfRegex.test(cpf);
        }

        function validarCNPJ(cnpj) {
            const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
            return cnpjRegex.test(cnpj);
        }

        const cargos = ['Estagiario', 'Tecnico', 'Gerente', 'Diretor', 'Presidente']
        const sexos = ['m', 'f']
        const pessoas = ['PF', 'PJ']
        try {
            const pessoa_dados = req.body

            if (!pessoa_dados.salario || Number(pessoa_dados.salario) < 1412) {
                return res.status(404).json({ error: "[BACKEND STATUS]: O salário não pode ser menor que R$1.412" })
            }

            if (pessoa_dados.tipoPessoa.toLowerCase() == "pf" && !pessoa_dados.cpf) {
                return res.status(404).json({ error: "CPF não informado" })
            }

            if (pessoa_dados.tipoPessoa.toLowerCase() == "pj" && !pessoa_dados.cnpj) {
                return res.status(404).json({ error: "CNPJ não informado" })
            }

            if (pessoa_dados.tipoPessoa.toLowerCase() == "pj" && pessoa_dados.sexo) {
                return res.status(404).json({ error: "O campo sexo só é permitido para Pessoa Física" })
            }

            if (pessoa_dados.tipoPessoa.toLowerCase() == "pj" && pessoa_dados.cargo) {
                return res.status(404).json({ error: "O campo cargo só é permitido para Pessoa Física" })
            }

            if (pessoa_dados.cnpj && pessoa_dados.cpf) {
                return res.status(404).json({ error: "Favor informar somente uma opção, CPF ou CNPJ, de acordo com o Tipo de Pessoa" })
            }

            if (pessoa_dados.cpf && !validarCPF(pessoa_dados.cpf)) {
                return res.status(404).json({ error: "Padrão inválido. Favor seguir no padrão: 000.000.000-00" })
            }

            if (pessoa_dados.cnpj && !validarCNPJ(pessoa_dados.cnpj)) {
                return res.status(404).json({ error: "Padrão inválido. Favor seguir no padrão: 000.000.000-00" })
            }

            if (pessoa_dados.cargo && !cargos.includes(pessoa_dados.cargo)) {
                return res.status(404).json({ error: "Valor do cargo é inválido." })
            }

            if (pessoa_dados.sexo && !sexos.includes(pessoa_dados.sexo)) {
                return res.status(404).json({ error: "Valor do sexo é inválido." })
            }

            if (pessoa_dados.tipoPessoa && !pessoas.includes(pessoa_dados.tipoPessoa.toUpperCase())) {
                return res.status(404).json({ error: "Valor do tipo pessoa é inválido." })
            }

            res.json(await pessoa.create(pessoa_dados))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },

    updateSalary: async (req, res) => {
        try {
            const idFuncionario = req.params.id
            const percentualReajuste = req.body.percentualReajuste

            if (!percentualReajuste) {
                return res.status(404).json({ error: "[BACKEND STATUS]: Porcentagem do reajuste está indefinida." })
            }

            let funcionarioDados = await pessoa.findById(idFuncionario)
            funcionarioDados.salario = funcionarioDados.salario + (funcionarioDados.salario * percentualReajuste / 100)


            return res.json(await funcionarioDados.save())
        } catch (error) {
            return res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
}

module.exports = controllerPessoa