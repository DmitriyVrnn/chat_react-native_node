import * as mongoose from 'mongoose';
import 'dotenv/config';


class Database {
    public mongoSetup(): void {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => console.log('DB Connected!'))
            .catch(err => {
                console.log(`DB Connection Error: ${err.message}`);
            });
    }
}

export const db = new Database();