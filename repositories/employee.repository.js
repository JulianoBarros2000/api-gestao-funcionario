import { databasePool } from "../database/connection.js"
import { logger } from "../utils/logger.utils.js"



export async function queryByEmailEName({ email_funcionary, name_funcionary, phone_funcionary }) {
    let connection
    try {
        connection = await databasePool.getConnection()
        connection.beginTransaction()

        const [result] = await connection.execute(
            `
        SELECT
            email_funcionary,
            name_funcionary,
            phone_funcionary
        FROM
            funcionary
        WHERE
            email_funcionary = ?
        OR
            name_funcionary = ?
        OR 
        phone_funcionary = ?   
        ` ,
            [
                email_funcionary,
                name_funcionary,
                phone_funcionary
            ]
        )

        connection.commit()
        return result
        connection.release()
    } catch (error) {
        console.error('Algo deu errado: ' + error)
        return []
    } finally {
        connection.release()
    }

}

export async function insertEmployee({ name_funcionary, email_funcionary, phone_funcionary, salary_funcionary, date_admition }, id_departament) {
    let connection
    try {
        connection = await databasePool.getConnection()
        connection.beginTransaction()

        const result = connection.execute(
            `
            INSERT INTO
                funcionary(
                    name_funcionary,
                    email_funcionary,
                    phone_funcionary,
                    salary_funcionary,
                    date_admition,
                    departament_id
                )
            VALUES(?,?,?,?,?,?);
        `,
            [name_funcionary, email_funcionary, phone_funcionary, salary_funcionary, date_admition, id_departament]
        )
        connection.commit()
        connection.release()
        return result
    } catch (error) {
        logger.error(error)
        return 0;
    } finally {
        connection.release()
    }
}