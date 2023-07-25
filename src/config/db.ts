import mongoose from "mongoose";

// const DB_URL = "mongodb://0.0.0.0:27017/forEben";
// const DB_URL = "mongodb://127.0.0.1/Eben";

const MONGOOSE_DB = "mongodb+srv://eben1909:victoria-19@cluster0.u3wri8y.mongodb.net/?retryWrites=true&w=majority";

// const MONGOOSE_DB = "mongodb://127.0.0.1:27017/istgth"




const dbConfig = async (): Promise<void> => {
    try {
      const conn = await mongoose.connect(MONGOOSE_DB);
      console.log(`connected to database on port ${conn.connection.host}`);
    } catch (error) {
      console.log(`failed to connect to database` , error);
    }
  };
  
  export default dbConfig;
