const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./src/app');
dotenv.config();

const port = process.env.PORT || 3000;

const main = async () => {
await mongoose.connect(process.env.MONGO_URL);
console.log('DB connect successfully');
};

main().catch((err) => 
console.log(err)
);

app.listen(port, () =>{
    console.log(`Server running from port ${port}`);
});