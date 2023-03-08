import { useState } from 'react';

export default function useValidationMethods() {


  // States for validation:
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isValidFirstName, setIsValidFirstName] = useState(null);
  const [isValidLastName, setIsValidLastName] = useState(null);
  const [isValidCountry, setIsValidCountry] = useState(null);
  const [isValidCity, setIsValidCity] = useState(null);
  const [isValidDistrict, setIsValidDistrict] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(null);

  const validationFunctions = {
    email: handleEmailChange,
    password: handlePasswordChange,
    firstName: handleFirstNameChange,
    lastName: handleLastNameChange,
    phoneNumber: handlePhoneChange,
    country: handleCountryChange,
    city: handleCityChange,
    district: handleDistrictChange,
  };

  // manage input validation dynamically using key value pair:

  function validateInput(name, value) {
    validationFunctions[name](value);
  }



  // handle input validation for everyy input:
  function handleFirstNameChange(value)
  {   
      if(value.length>0)
      {
        setIsValidFirstName(true);
      }
      else{
        setIsValidFirstName(false);
      }
  }
    
 function handleLastNameChange(value)
 {
    if(value.length>0)
    {
      setIsValidLastName(true);
    }
    else{
      setIsValidLastName(false);
    }
 }

 function handleCountryChange(value)
 {
  if(value.length>0)
      {
        setIsValidCountry(true);
      }
      else{
        setIsValidCountry(false);
      }
 }

 function handleCityChange(value)
 {
  if(value.length>0)
      {
        setIsValidCity(true);
      }
      else{
        setIsValidCity(false);
      }
 }

 function handleDistrictChange(value)
 {
  if(value.length>0)
      {
        setIsValidDistrict(true);
      }
      else{
        setIsValidDistrict(false);
      }
 }

 
 function handlePasswordChange(value)
 {
   const regexPassword = /^(?=.*[!@#$%^&*()\-_=+{}[\]|\\;:'",.<>/?])(?=.*[A-Z]).{8,}$/
   setIsValidPassword(regexPassword.test(value));
 }
 
 function handlePhoneChange(value)
 {
     const regexPhoneNumber = /^(01[0125]\d{8})$/;
     setIsValidPhoneNumber(regexPhoneNumber.test(value));
 }

 function handleEmailChange(value) {
   const regexEmail = /^\S+@\S+\.\S+$/;
   setIsValidEmail(regexEmail.test(value));
 }



  return {
    
    validateInput,
    isValidEmail,isValidPassword,isValidFirstName,isValidLastName,
    isValidPhoneNumber,isValidCountry,isValidCity,isValidDistrict
  
  };
  
 

}

