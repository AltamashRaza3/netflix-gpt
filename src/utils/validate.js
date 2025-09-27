export const checkValidate = (email,password) =>{
  const isEmailValid = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  const isFullNameValid = /^[A-Za-z]{3,}(?: [A-Za-z]{2,})+$/.test(name);

  if(!isEmailValid) return "Email is not valid";
  if(!isPasswordValid) return "Password is not valid";
  if(!isFullNameValid) return "Enter valid full name"

  return null;
}