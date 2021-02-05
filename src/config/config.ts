import { Injectable } from '@nestjs/common';
import  dotenv  from 'dotenv';
import * as fs from "fs";

@Injectable()
export class Enviroment {

    static get(){
        const envConfig = dotenv.parse(fs.readFileSync('./env'))
        for (const k in envConfig) {
            process.env[k] = envConfig[k]
        }
        console.log(process.env)
    }

    
}
