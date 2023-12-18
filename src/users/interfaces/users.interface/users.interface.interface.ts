export interface UsersInterface {

    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: boolean;
}

// Now create a schema for the above interface
// Path: src/users/schemas/users.schema/users.schema.ts
