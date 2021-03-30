import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";


class UserController {

    

    public getAll = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> => {
        try {

            const userRepository = getRepository(User);

            const users = await userRepository.find();

            return res.json(users);


        } catch (error) {
            next(error);
        }
    };


    public add = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> => {
        try {

            const userRepository = getRepository(User);

            const { firstName, lastName, age } = req.body;

            const userCreate = userRepository.create({
                firstName,
                lastName,
                age,
            });

            const results = await userRepository.save(userCreate);

            return res.send(results);
        } catch (error) {
            next(error);
        }
    };

}

export default new UserController();