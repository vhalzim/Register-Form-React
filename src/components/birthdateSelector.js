import {useState, useEffect} from "react";


function BirthdateSelector(p) {


  const [yearsList, setYearsList] = useState([])
  const [monthsActive, setMonthsActive] = useState(false)
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const [daysActive, setDaysActive] = useState(false)
  const [daysList, setDaysList] = useState([])
  const [selectedYear, setSelectedYear] = useState (0)


  useEffect(
    function yearlistSetter(){
      let year = new Date().getFullYear()
      let years = []
      for (let i=0; i<101; i++){
        var yearOnList =  (year - i)
        years.push(yearOnList)
      } 
     setYearsList(years)
    }, []  
  )

  



  function dayslistSetter(Day){
    let lastday = Day
    let daysList = []
      for (let i=0; i<(lastday); i++){
      var dayOnList =  (lastday - i)
      daysList.push(dayOnList)
    } 
    setDaysList(daysList)
  }

  function handleYearChange (e){
    const {value} = e.target
    setMonthsActive(true)
    setSelectedYear(value)
    p.yearHandler(value)
  }


  function handleMonthChange (e){
    const {value} = e.target;
    const monthIndex = months.findIndex((month)=>{
      return (value === month)
    })
    if (monthIndex%2 === 0 || monthIndex === 0){
      dayslistSetter(31)
    } else if ( monthIndex%2 !== 0 && monthIndex !== 1){
      dayslistSetter(30)
    } else if (monthIndex===1) {
      if (selectedYear%4===0 && selectedYear%100 !=0 ||selectedYear%400===0){
        dayslistSetter(29)
      } else  {dayslistSetter(28)}
    }
    setDaysActive(true)

    p.monthHandler(monthIndex+1)
  }

  function handleDaysChange(e){
    const {value} = e.target;

    p.dayHandler(value)

  }
 

//is working but is only displaying the first values of each list




  return (
    <div>
      <div className="flex flex-col lg:flex-row">

        <select required onChange={handleYearChange} className="bg-blueviolet p-1 rounded-md text-black mx-1 shadow-md shadow-black   hover:shadow-none active:shadow-none hover:bg-hover-blueviolet" >
          <option value="year" disabled selected hidden >year</option>
          {yearsList.map((year,id)=>{return(<option key={id} value={year}>{year}</option>)})}
        </select>
        {monthsActive ? 
          <select required onChange={handleMonthChange} className="bg-blueviolet p-1 rounded-md text-black mx-1 lg:mx-0 shadow-md shadow-black hover:shadow-none active:shadow-none hover:bg-hover-blueviolet">
           <option value="" disabled selected hidden >month</option>
           {months.map((month,id)=>{return(<option key={id} value={month}>{month}</option>)})}
          </select>
          :
          <select disabled className="bg-inactive-blueviolet p-1 mx-1 lg:mx-0 rounded-md text-black">
           <option>month</option>
          </select>
        }

        {daysActive ?
        <select required onChange={handleDaysChange} className="bg-blueviolet p-1 rounded-md text-black mx-1 shadow-md shadow-black   hover:shadow-none active:shadow-none hover:bg-hover-blueviolet ">
          <option value="" disabled selected hidden>day</option>
          {daysList.map((day,id)=>{return(<option key={id} value={day} >{day}</option>)})}
        </select>
        :
        <select disabled className="bg-inactive-blueviolet p-1 mx-1 rounded-md text-black">
          <option >day</option>
        </select>
        }
      </div>
    </div>
  );
}

export default BirthdateSelector;
