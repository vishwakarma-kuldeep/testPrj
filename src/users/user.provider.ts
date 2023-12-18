import { Mongoose } from "mongoose";
import {UserSchema} from "./schemas/users.schema/user.schema"

export const userProviders = [
    {
        provide : 'USER_MODEL',
        useFactory : (mongoose : Mongoose) => mongoose.model('User',UserSchema),
        inject : ['DATABASE_CONNECTION']
    }
]