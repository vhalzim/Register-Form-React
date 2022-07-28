//<form id="my-form" onSubmit={handleSubmit(onSubmit)}>
//    <div>
//      <input  type="text" placeholder="first name" {...register("personal.firstName", {required: {value:true, message:"this field is required"}})}/>
//      {errors.personal.firstName && <p>{errors.personal.firstName.message}</p>}
//      <input  type="text" placeholder="last name" {...register("personal.lastName", {value:true, message:"this field is required"})}/>
//      {errors.personal.lastName && <p>{errors.personal.lastName.message}</p>}
//      <input  type="text" placeholder="DNI" {...register("personal.dni", {value:true, message:"this field is required"})}/>
//      {errors.personal.dni && <p>{errors.personal.dni.message}</p>}
//      <BirthdateSelector yearHandler={handleYearChange} monthHandler={handleMonthChange} dayHandler={handleDayChange}/>
//    </div>
//    <div>
//      <input name="phone" id="phone" type="tel" placeholder="(000)000-0000" {...register("contact.phone", {value:true, message:"this field is required"})}/>
//      {errors.contact.phone && <p>{errors.contact.phone.message}</p>}
//      <input name="mail" id="mail" type="email" placeholder="email" {...register("contact.email", {value:true, message:"this field is required"})}/>
//      {errors.contact.mail && <p>{errors.contact.mail.message}</p>}
//    </div>
//    <div>
//      <input  type="text" placeholder="Province" {...register("adress.province", {value:true, message:"this field is required"})}/>
//      {errors.adress.province && <p>{errors.adress.province.message}</p>}
//      <input  type="text" placeholder="City" {...register("adress.city", {value:true, message:"this field is required"})}/>
//      {errors.adress.city && <p>{errors.adress.city.message}</p>}
//      <input  type="text" placeholder="Street" {...register("adress.street", {value:true, message:"this field is required"})}/>
//      {errors.adress.street && <p>{errors.adress.street.message}</p>}
//      <input  type="text" placeholder="Street Number" {...register("adress.streetNumber", {value:true, message:"this field is required"})}/>
//      {errors.adress.streetNumber && <p>{errors.adress.streetNumber.message}</p>}
//      <input  type="text" placeholder="Floor" {...register("adress.floor",{required: false})}/>  
//      <input  type="text" placeholder="Departament number" {...register("adress.departamentNumber",{required: false})}/>  
//    </div>
//    
//    
//    <button type="submit" >submit</button>
//  </form>


//<div>
//  <form id="my-form" onSubmit={handleSubmit(onSubmit)}>
//    <div>
//      <input  type="text" placeholder="first name" {...register("personal.firstName", {required: {value:true, message:"this field is required"}})}/>
//      <input  type="text" placeholder="last name" {...register("personal.lastName", {required: {value:true, message:"this field is required"}})}/>
//      <input  type="text" placeholder="DNI" {...register("personal.dni", {required: {value:true, message:"this field is required"}})}/>
//      <BirthdateSelector yearHandler={handleYearChange} monthHandler={handleMonthChange} dayHandler={handleDayChange}/>
//    </div>
//    <div>
//      <input name="phone" id="phone" type="tel" placeholder="(000)000-0000" {...register("contact.phone", {required: {value:true, message:"this field is required"}})}/>
//      <input name="mail" id="mail" type="email" placeholder="email" {...register("contact.email", {required: {value:true, message:"this field is required"}})}/>
//    </div>
//    <div>
//      <input  type="text" placeholder="Province" {...register("adress.province", {required: {value:true, message:"this field is required"}})}/>
//      <input  type="text" placeholder="City" {...register("adress.city", {required: {value:true, message:"this field is required"}})}/>
//      <input  type="text" placeholder="Street" {...register("adress.street", {required: {value:true, message:"this field is required"}})}/>
//      <input  type="text" placeholder="Street Number" {...register("adress.streetNumber", {required: {value:true, message:"this field is required"}})}/>
//      <input  type="text" placeholder="Floor" {...register("adress.floor",{required: false})}/>  
//      <input  type="text" placeholder="Departament number" {...register("adress.departamentNumber",{required: false})}/>  
//    </div>
//    
//
//    
//    <button type="submit" >submit</button>
//  </form>
//
//  
//</div>