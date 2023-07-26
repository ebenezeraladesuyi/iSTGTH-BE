import mongoose from "mongoose";
import env from "dotenv";
env.config()

// const DB_URL = "mongodb://0.0.0.0:27017/forEben";
// const DB_URL = "mongodb://127.0.0.1/Eben"

const MONGOOSE_DB = "mongodb+srv://eben19:ebenezer19@cluster0.u3wri8y.mongodb.net/?retryWrites=true&w=majority"


const dbConfig = async (): Promise<void> => {
    try {
      const conn = await mongoose.connect(MONGOOSE_DB);
      console.log(`connected to database on port ${conn.connection.host}`);
    } catch (error) {
      console.log(`failed to connect to database` , error);
    }
  };
  
  export default dbConfig;

// const dbConfig = () => {
//     try {
//       mongoose
//         .connect(MONGOOSE_DB)
//         .then(() => {
//           console.log('connected to database on port');
//         })
//     } catch (error) {
//       console.log(`failed to connect to database` , error);
//     }
//   };

//   export default dbConfig;
