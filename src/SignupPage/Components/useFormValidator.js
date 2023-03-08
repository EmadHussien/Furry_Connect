import { useState } from "react";
import useValidationMethods from "./useValidationMethods"

export default function useFormValidator() {

    const {

        validateInput,
        isValidEmail,isValidPassword,isValidFirstName,isValidLastName,
        isValidPhoneNumber,isValidCountry,isValidCity,isValidDistrict
    
    } = useValidationMethods(); 

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        country: '',
        city: '',
        district: '',
    });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };


  return{
    handleInputChange , formData ,
    isValidEmail,isValidPassword,isValidFirstName,isValidLastName,
    isValidPhoneNumber,isValidCountry,isValidCity,isValidDistrict
  }
  
}

