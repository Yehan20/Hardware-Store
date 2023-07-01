import {model,Schema,Document,Model} from 'mongoose'
import validator from 'validator';
import bcrypt  from 'bcrypt';

interface userInterface {
    name:string;
    password:string;
    isAdmin:boolean;
    Register(name: string, password: string):Promise<any>;
    Login(name: string, password: string):Promise<any>;
    
}  

interface userModelInterface extends Model<userInterface>{

}

const userSchema = new Schema({
   name:{
      type:String,
      required:true,
      unique:true,
   },
   password:{
      type:String,
      requirued:true
   },
   isAdmin:{
      type:Boolean,
      default:false,
   }
},{timestamps:true})


userSchema.static("Register",async function(name:string,password:string){
    if(name==='' || password===''){
         throw Error("Fill the Required Feilds")
    }
    if(!(validator.isStrongPassword(password))){
        throw Error("Password is Not Strong")
    }
    // create hashed password
    const salt  = await bcrypt.genSalt();
    const hashedPwd = await bcrypt.hash(password,salt);

    // create a user
    const user = await this.create({
         name:name,password:hashedPwd
    })

    return user

})

userSchema.static("Login",async function(name:string,password:string){
    
    if(name==='' || password===''){
         throw Error("Fill the Required Feilds")
    }

    // check if user exists
    const userExists = await this.findOne({name});

    if(!userExists){
         throw Error('Now user is Exist for this acocunt')
    }

    // check if password is match
    if(!(await bcrypt.compare(password,userExists.password))){
        throw  Error("Password is Wrong");
    }

    return userExists

})


export default model<userModelInterface,userInterface>('User',userSchema)