import User from "./model";

class UserRepository {
    constructor(){}

    async create( user: IUser ){

        const new_user = await User.create(user );

        return new_user

    }

    async get_one( filter: Partial<IUser> ){

        const user = User.findOne( filter );

        return user;

    }

    async get_all(){

        const users = User.find();

        return users;

    }

    async delete( id: string ){

      await User.findByIdAndDelete(id)

    }

    async update_by_filter( filter: Partial<IUser>, update: Partial<IUser> ){

        const updated_user = await User.updateOne( filter, update, { new: true });

        return updated_user;

    }

}

const user_repository = new UserRepository();

export default user_repository;