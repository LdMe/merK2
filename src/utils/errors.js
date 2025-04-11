
class StandNameNotProvided extends Error{
    constructor(){
        super("Stand name not provided");
        this.statusCode = 400;
    }
}

class IncorrectStandSize extends Error {
    constructor(){
        super("Stand size must be 'small', 'medium' or 'large'");
        this.statusCode = 400;
    }
}
class StandCategoryNotProvided extends Error{
    constructor(){
        super("stand_category_id not provided");
        this.statusCode = 400;
    }
}
class StandCategoryNotFound extends Error {
    constructor(){
        super("The stand category provided does not exist");
        this.statusCode = 400;
    }
}

class UserNameNotProvided extends Error {
    constructor(){
        super("User name not provided");
        this.statusCode = 400;
    }
}

class UserEmailNotProvided extends Error {
    constructor(){
        super("User email not provided");
        this.statusCode = 400;
    }
}
class UserPasswordNotProvided extends Error {
    constructor(){
        super("User password not provided");
        this.statusCode = 400;
    }
}
class UserRoleIncorrect extends Error {
    constructor(){
        super("User role is not correct, it must be 'client' or 'seller'");
        this.statusCode = 400;
    }
}
class UserEmailAlreadyExists extends Error{
    constructor(){
        super("User email already exists");
        this.statusCode = 400;
    }
}
class UserInvalidCredentials extends Error {
    constructor(){
        super("Invalid credentials");
        this.statusCode = 401;
    }
}
export {
    StandNameNotProvided,
    IncorrectStandSize,
    StandCategoryNotProvided,
    StandCategoryNotFound,
    UserNameNotProvided,
    UserEmailNotProvided,
    UserPasswordNotProvided,
    UserRoleIncorrect,
    UserEmailAlreadyExists,
    UserInvalidCredentials
}