import { databasePool } from "../database/connection.js"
import { logger } from "../utils/logger.utils.js"


export async function queryByNameDepartment(name_departament) {
    let connection
    try {
        connection = await databasePool.getConnection()
        connection.beginTransaction()

        logger.database("Conexão efectuada.")

        const [result] = await connection.execute(
            `
        SELECT
            id_department
        FROM
            department
        WHERE
            name_department= ? ` ,
        [
            name_departament
        ]
        )

        connection.commit()
        return result
        console.log(result)
        connection.release()
    } catch (error) {
        console.error('Algo deu errado: ' + error)
        return []
    } finally {
        connection.release()
    }
}