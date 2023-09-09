import respond from "../../utils/respond";
import user_repository from "./repository";
import jwt from "jsonwebtoken";

class UserService {

    constructor(){}

    async sign_in( email: string, password: string  ){

        const existing_user = await user_repository.get_one( { email });

        if( !existing_user ){
            return {
                status: false,
                code: 404,
                message: "User not found",
                data: null
            }
        }

        if( existing_user.password !== password ){
            return {
                status: false,
                code: 401,
                message: "Incorrect password",
                data: null
            }
        }

        const token = jwt.sign( { id: existing_user._id}, "token_secret" );

        existing_user.password = undefined as any;
        // Trust me you don't want to send the password to the client.

        return {
            status: true,
            code: 200,
            message: "Login successful",
            data: {
                user: existing_user,
                token
            }
        }

    }

    async sign_up( user: IUser ){

        const existing_user = await user_repository.get_one( { email: user.email });

        if( existing_user ){
            return {
                status: false,
                code: 403,
                message: "Email exists!",
                data: null
            }
        }

        const new_user =await  user_repository.create( user );

        return {
            status: true,
            code: 201,
            message: "User created",
            data: {
                user: new_user
            }
        }

    }
}

const user_service = new UserService();

export default user_service;