import * as mongoose from 'mongoose';
import {dbUrl} from "./config";

class Database {
    public mongoSetup(): void {
        mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => console.log('DB Connected!'))
            .catch(err => {
                console.log(`DB Connection Error: ${err.message}`);
            });
    }
}

export const db = new Database();