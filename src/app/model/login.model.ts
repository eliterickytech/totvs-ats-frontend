export class LoginModel {
    Email: string | undefined;
    Password: string | undefined;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}