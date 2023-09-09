import { Request, Response } from "express";
import user_service from ".";
import respond from "../../utils/respond";

class UserController {
    constructor(){}
    
    async sign_in( req: Request, res: Response ){

        const { email, password } = req.body;

        const response = await user_service.sign_in( email, password );

        respond( res, {
            status: response.status ? "success" : "error",
            message: response.message,
            data: response.data,
            statusCode: response.code
        })
    }

    async sign_up( req: Request, res: Response ){

        const user = req.body;

        const response = await user_service.sign_up( user );

        respond( res, {
            status: response.status ? "success" : "error",
            message: response.message,
            data: response.data,
            statusCode: response.code
        })
    }
}

const user_controller = new UserController();

export default user_controller;