import { Injectable } from '@nestjs/common';

@Injectable()
export class Enviroment {
    static get(key:string){
        const envResult:any = require('dotenv').config()
        return envResult.parsed[key]
    }
}
