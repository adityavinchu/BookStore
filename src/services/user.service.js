import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const login = async (body) => {
  const data = await User.findOne({ email: body.email });
  console.log("email", data)
  if (data == null) {
    throw new Error("User NOT exist");
  } else {
    const result = await bcrypt.compare(body.password, data.password);
    if (result) {
      let token = jwt.sign({ "id": data._id, "email": data.email }, process.env.SECRET_KEY);
      return token;
    }
    else {
      throw new Error("incorrect Password");
    }
  }
};

//create new user
export const newUser = async (body) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashPassword = await bcrypt.hash(body.password, salt);
  body.password = hashPassword;


  const previous_check = await User.findOne({email : body.email})
  if(previous_check != null){
      throw new Error("User Already registered");
  }
  else
  {
    const data = await User.create(body);  
    return data;   
  }
};
