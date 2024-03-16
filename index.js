import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import usersRouter from './routes/users.js';
import MessagesRouter from './routes/messages.js';
import AdminRouter from './routes/admin.js'




const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTES
app.use('/users', usersRouter);
app.use('/messages', MessagesRouter);
app.use('/admin', AdminRouter);

main().catch(err => console.log(err));

const PORT = process.env.PORT || 3000;

async function main() {
    await mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Server is running on port: ${PORT}`);
            });
        })
        .catch((err) => console.log(`${err} couldn't connect to the database`));
}
