import chalk from "chalk";

export default class Logger{
   static info(msg:any){
        this.message(msg)
    }

   static message(msg:any){
     console.log(`${chalk.blueBright(`${new Date().toLocaleString()} [INFO] ${msg}`)}`)
   }
   static warning(msg:any){
     console.log(`${chalk.yellowBright(`${new Date().toLocaleString()} [WARNING]${msg}`)}`)
   }

   static error(msg:any){
    console.log(`${chalk.redBright(`${new Date().toLocaleString()} [Error]${msg}`)}`)
   }

}