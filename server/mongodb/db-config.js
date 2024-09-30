import chalk from "chalk";
import mongoose from "mongoose";

const ConnectDatabase = async () => {
 try{
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(chalk.green.underline("Connect To Database"));
 } catch (error){
   console.log(chalk.red("Error Database", error));
 }
}

export default ConnectDatabase;