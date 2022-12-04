import { useState } from "react";
import { DatePicker } from "@material-ui/pickers"
import lightBlue from "@material-ui/core/colors/lightBlue";
// import { grey } from '@mui/material/colors';
import { createTheme  } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles";

function App() {

  const [dateSelect, stateDate] = useState(new Date()); 
  const [ birthdayNumber, stateBirthDayNumbre ] = useState(3)
  const [ dateModify , stateDateModify ] = useState(dateSelect)
  
  console.log(dateSelect) // Sat Dec 03 2022 (esto es un objeto)
  let dayP = dateModify
  console.log("Nuevo state: " + dayP)
 
  
  
  const days_birth = []
  function calcNextDays(number){
    for (let i = 1; i <= number; i++){
      let days = dayP + Math.pow(10, i);
      days_birth.push(days)
      
    }
    return days_birth
  }
  
  let arrDays = []
  function calculate(){
    // let posible_days = calcNextDays(birthdayNumber)
    // for (let i = 0; i <= posible_days.length; i++){
    //   let finalDay = dateSelect.setDate(dateSelect.getDate() + posible_days[i])
    //   arrDays.push(finalDay)
    // }
    dayP.setDate(dayP.getDate() + 10)
    const resultado = dateModify.getDate() + '/' + (dateModify.getMonth() + 1) + '/' + dateModify.getFullYear(); 
    return resultado   
  }
  
  // let pp=calculate()
  // console.log("fecha final: " + pp)

  const materialTheme = createTheme ({
    overrides: {
      // MuiPickersCalendarHeader: {
      //   switchHeader: {
      //     backgroundColor: lightBlue.A200,
      //   }
      // },
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: lightBlue[900],
        },
      },
    }
  });

  

  return (
    <>
      <h1>Select your Birthday</h1>
      <div className="contenedor">
        <div className="grupo">
          <label>Date</label>
            <ThemeProvider theme={materialTheme}>
              <DatePicker 
                // clearLabel
                format="dd/MM/yyyy"
                value={dateSelect}
                onChange={stateDate}
              />
            </ThemeProvider>
        </div>
      </div>

      {/* <div>
        <button>Calculate Math Birthday</button>
      </div> */}

      <div>

      </div>
    </>
  );
}

export default App;
