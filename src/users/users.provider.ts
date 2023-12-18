import { Mongoose } from "mongoose";
import {UsersSchema} from "./schemas/users.schema/users.schema"

export const userProviders = [
    {
        provide : 'USER_MODEL',
        useFactory : (mongoose : Mongoose) => mongoose.model('User',UsersSchema),
        inject : ['DATABASE_CONNECTION']
    }
]