export class EmptyIdDomainError extends Error{
    constructor(){
        super('The model cant instantiate with null id value.')
        this.name = "EmptyIdDomainError";

    }
}