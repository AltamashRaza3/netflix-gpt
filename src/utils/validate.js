export const checkValidate = (email,password,fullName) =>{
  const isEmailValid = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);


  if(!isEmailValid) return "Email is not valid";
  if(!isPasswordValid) return "Password is not valid";
  

  return null;
}