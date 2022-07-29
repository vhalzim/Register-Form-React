///1//2-//3
//diy ceral protein
//htfi2minutes

import BirthdateSelector from "./birthdateSelector";
import { appendErrors, useForm } from "react-hook-form";
import { useEffect, useState } from "react";


function Form(p){
    const [user, setUser]= useState({})
    const [selectedYear, setSelectedYear] = useState (0)
    const [selectedMonth, setSelectedMonth] = useState (0)
    const [selectedDay, setSelectedDay] = useState (0)
    const [bdayError, setBdayError] = useState(false)

  const { register, handleSubmit, getValues, formState:{errors} } = useForm();
  const onSubmit = (data) => {
    const dateYear = selectedYear.toString();
    const dateMonth = selectedMonth.toString();
    const dateDay = selectedDay.toString();
    const newDate = `${dateDay}/${dateMonth}/${dateYear}`
    setUser(data)
    setUser((prevValue)=>({...prevValue, personal:{...prevValue.personal, birthdate:newDate}}))
};



//here the error is just beeing loged in console: add error to interface.
useEffect(()=>{
  if (Object.entries(user).length === 0) {
    setBdayError(false)
    console.log("usuario vacio")
  } else if(Object.entries(user).length != 0){
    user.personal.birthdate === "0/0/0" ?  setBdayError(true): submitingUser(user);
  }

}, [user])

function submitingUser(u){
  setBdayError(false)
  p.submitUser(u)

}

function handleYearChange(year){
  setSelectedYear(year)
}

function handleMonthChange(month){
  setSelectedMonth(month)
}

function handleDayChange(year){
  setSelectedDay(year)
}

//

return (

  <form id="my-form" onSubmit={handleSubmit(onSubmit)} className="px-1 lg:p-8 rounded-lg h-fit md:w-4/5 lg:w-10/12 bg-[rgba(255,255,255,0.1)] backdrop-blur-xl">
    <div className="grid grid-cols-2 gap-1 gap-y-3 sm:gap-y-4 lg:grid-cols-4 lg:gap-8 my-8 pt-4 pb-2 lg:px-2 rounded-lg">
      <label>
        <input className={errors?.personal?.firstName && "error-input"} type="text" placeholder="..." {...register("personal.firstName", {required: {value:true, message:"this field is required"}})}/>
        <span className="input-span">First name</span>
        <br/>
        {errors?.personal?.firstName && <em><span className="error-span">{errors.personal.firstName.message}</span></em>}
      </label>
      
      <label>
        <input className={errors?.personal?.lastName && "error-input"} type="text" placeholder="..." {...register("personal.lastName", {required: {value:true, message:"this field is required"}})}/>
        <span className="input-span">Last name</span>
        <br/>
        {errors?.personal?.lastName && <em><span className="error-span">{errors.personal.lastName.message}</span></em>}
      </label>
      
      <label>
        <input className={errors?.personal?.dni && "error-input"} type="text" placeholder="00.000.00" {...register("personal.dni", {required: {value:true, message:"this field is required"}, pattern: {value:/^[0-9]{7,8}$/i,message: "Please enter a valid DNI"}})}/>
        <span className="input-span">DNI</span>
        <br/>
        {errors?.personal?.dni && <em><span className="error-span">{errors.personal.dni.message}</span></em>}
      </label>

      <label>
        <BirthdateSelector yearHandler={handleYearChange} monthHandler={handleMonthChange} dayHandler={handleDayChange}/>
        {bdayError && <em><span className="error-span text-center">Please select a valid birth date</span></em>}
      </label>
      
    </div>

    <div className="grid grid-cols-2 gap-1 gap-y-3 sm:gap-y-4 lg:gap-32 lg:mx-32 pt-4 pb-2 lg:px-2 rounded-lg">
      <label>
        <input className={errors?.contact?.phone && "error-input"} name="phone" id="phone" type="tel" placeholder="(000)000-0000" {...register("contact.phone", {required: {value:true, message:"this field is required"}, pattern: {value:/^[0-9]{6,14}$/i,message: "Please enter a phone number"}})}/>
        <span className="input-span">Phone</span>
        <br/>
        {errors?.contact?.phone && <em><span className="error-span">{errors.contact.phone.message}</span></em>}
      </label>

      <label>
        <input className={errors?.contact?.email && "error-input"} name="mail" id="mail" type="email" placeholder="example@exmail.com" {...register("contact.email", {required: {value:true, message:"this field is required"}, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message: "Please enter an email adress"}})}/>
        <span className="input-span">E-mail</span>
        <br/>
        {errors?.contact?.email && <em><span className="error-span">{errors.contact.email.message}</span></em>}
      </label>
    </div>

    <div className="grid grid-cols-2 gap-1 gap-y-3 sm:gap-y-4 lg:grid-cols-4 lg:gap-8 my-8 pt-4 pb-2 lg:px-2 rounded-lg">
      <label>
        <input className={errors?.adress?.province && "error-input"} type="text" placeholder="..." {...register("adress.province", {required: {value:true, message:"this field is required"}})}/>
        <span className="input-span">Province</span>
        <br/>
        {errors?.adress?.province && <em><span className="error-span">{errors.adress.province.message}</span></em>}
      </label>

      <label>
        <input className={errors?.adress?.city && "error-input"} type="text" placeholder="..." {...register("adress.city", {required: {value:true, message:"this field is required"}})}/>
        <span className="input-span">City</span>
        <br/>
        {errors?.adress?.city && <em><span className="error-span">{errors.adress.city.message}</span></em>}
      </label>

      <label>
        <input className={errors?.adress?.street && "error-input"} type="text" placeholder="..." {...register("adress.street", {required: {value:true, message:"this field is required"}})}/>
        <span className="input-span">Street</span>
        <br/>
        {errors?.adress?.street && <em><span className="error-span">{errors.adress.street.message}</span></em>}
      </label>

      <label>
        <input className={errors?.adress?.streetNumber && "error-input"} type="text" placeholder="000" {...register("adress.streetNumber", {required: {value:true, message:"this field is required"}, pattern: {value:/^[0-9]{1,5}$/i,message: "Please enter a valid street number"}})}/>
        <span className="input-span">Street number</span>
        <br/>
        {errors?.adress?.streetNumber && <em><span className="error-span">{errors.adress.streetNumber.message}</span></em>}
      </label>

      <label>
        <input type="text" placeholder="00" {...register("adress.floor",{required: false})}/>  
        <span className="input-span">Floor</span>
      </label>

      <label>
        <input  type="text" placeholder="00" {...register("adress.departamentNumber",{required: false})}/> 
        <span className="input-span">Departament Number</span>
      </label>




 

       
    </div>
    

    
    <button type="submit" className="bg-gradient-to-r from-blueviolet to-hover-blueviolet px-1 rounded-md text-black shadow-md shadow-black  hover:shadow-none active:shadow-none">submit</button>
  </form>

  

)
 
}

export default Form;