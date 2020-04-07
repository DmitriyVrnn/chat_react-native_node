import * as mongoose from 'mongoose';
import {dbUrl} from "./config";

class Database {
    public async mongoSetup(): Promise<void> {
        try {
           await mongoose.connect(dbUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            await console.log('DB Connected!');
        }
        catch (err) {
            console.log(`DB Connection Error: ${err.message}`)
        }
    }
}

export const db = new Database();