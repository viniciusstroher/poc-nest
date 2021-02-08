export class AuthServiceUserNotFoundError extends Error{
    constructor(){
        super('The User not found.')
        this.name = "AuthServiceUserNotFoundError";
    }
}
