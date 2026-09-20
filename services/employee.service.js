import { validation } from "../middlewares/validation/employee.validation.js"
import { insertEmployee, queryByEmailEName } from "../repositories/employee.repository.js"
import { logger } from "../utils/logger.utils.js"
import { queryByNameDepartment } from '../repositories/departament.repository.js';

// create a employee
export async function createEmployee(req, res) {
    try {
        const validate = await validation(req.body)

        if (!validate.success) {
            res.status(400).send(validate.error.message)
            logger.error(validate.error)
        }
        else {
            const { name_departament } = req.body
            const resultDepartamentId = await queryByNameDepartment(name_departament)

            if (resultDepartamentId.length == 0) {
                res.status(400)
                    .send({
                        status: false,
                        message: 'Departamento não encontrado.',
                        request: name_departament
                    })
            } else {


                const resultEmployee = await queryByEmailEName(req.body)

                if (!(resultEmployee.length == 0)) {
                    res.status(409)
                        .send({
                            status: false,
                            message: 'Funcionário já existe.',
                            request: req.body
                        })
                } else {


                    await insertEmployee(req.body, resultDepartamentId[0].id_department)

                    res.status(201).send({
                        status: true,
                        message: 'Funcionário cadastrado com sucesso.',
                        request: req.body
                    })
                    logger.success('Funcionário cadastrado com sucesso.')
                }
            }
        }
    } catch (error) {

        if (error)
            logger.error('Erro: ' + error)
    }
}