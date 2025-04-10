
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

export {
    StandNameNotProvided,
    IncorrectStandSize,
    StandCategoryNotProvided,
    StandCategoryNotFound
}