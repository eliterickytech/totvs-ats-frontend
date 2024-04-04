export class UserModel {
    name: string;
    email: string;
    password: string;
    phone: string;
    linkedin: string;
    experiencies: string[];
    educations: string[];
    habilities: string[];

    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.phone = '';
        this.linkedin = '';
        this.experiencies = [];
        this.educations = [];
        this.habilities = [];
    }
}
