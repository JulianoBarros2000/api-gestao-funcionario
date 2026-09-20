import { Router } from "express";
import { createEmployee } from "../services/employee.service.js";



const employeeRouter = Router()

//Creating the insert employee
employeeRouter.post('/employee/create', createEmployee)


export default employeeRouter
