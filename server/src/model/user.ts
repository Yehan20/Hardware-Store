import {model,Schema,Document,Model} from 'mongoose'
import validator from 'validator';
import bcrypt  from 'bcrypt';

interface userInterface extends Document {
    name:string;
    password:string;
    isAdmin:boolean;
   
    
}  

interface userModelInterface extends Model<userInterface>{
    Register(name: string, password: string):Promise<any>;
    Login(name: string, password: string):Promise<any>;
    GetUser(name: string):Promise<any>;
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
     
    const sameUser = await this.findOne({name})
    if(sameUser){   
        throw Error("That name is used")
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
         throw Error('No user Exists for this acocunt')
    }

    // check if password is match
    if(!(await bcrypt.compare(password,userExists.password))){
        throw  Error("Password is Wrong");
    }

    return userExists

})

userSchema.static("GetUser",async function(name:string){
    
 

    // check if user exists
    const userExists = await this.findOne({name});

    return userExists

})



export default model<userInterface,userModelInterface>('User',userSchema)