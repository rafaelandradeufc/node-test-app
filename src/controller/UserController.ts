import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";


class UserController {

    private userRepository = getRepository(User);

    public getAll = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> => {
        try {

            const users = await this.userRepository.find();

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
            const { firstName, lastName, age } = req.body;

            const userCreate = this.userRepository.create({
                firstName,
                lastName,
                age,
            });

            const results = await this.userRepository.save(userCreate);

            return res.send(results);
        } catch (error) {
            next(error);
        }
    };

}

export default new UserController();