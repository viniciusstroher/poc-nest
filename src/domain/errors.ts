export class EmptyIdDomainError extends Error{
    constructor(){
        super('The model cant instantiate with null id value.')
        this.name = "EmptyIdDomainError";
    }
}

export class UserModelValidateError extends Error{
    paramsPassedToConstructor:any
    validationErrorsClassValidator:any
    constructor(paramsPassedToConstructor?:any, validationErrorsClassValidator?:any){
        super('The model cant instantiate with passed params.')
        this.name = "UserModelValidateError";
        this.paramsPassedToConstructor = paramsPassedToConstructor;
        this.validationErrorsClassValidator = validationErrorsClassValidator;
    }
}

export class UserModelAlreadyExistsError extends Error{
    constructor(){
        super('This user already exists try other name and email')
        this.name = "UserModelAlreadyExistsError";
    }
}

