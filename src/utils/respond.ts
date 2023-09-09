// This ensures that your api response has a consistent structure;

import { Response } from "express";

export default function respond( res: Response, config: IConfig ){
    const { message, data, status, statusCode, token } = config
    return res.status( statusCode ).json({
        status,
        message: message ?? "Operation successsfull",
        data,
        token
    })
}

interface IConfig {
    statusCode: number,
    data: any,
    message: string,
    status: "success" | "error"
    token?: string
}