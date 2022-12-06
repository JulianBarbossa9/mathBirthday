import { useState } from "react";
import styled from '@emotion/styled'
import moment from 'moment'
import { addDays } from 'date-fns';

const Input = styled.input`
  background-color: #242424;
  padding: 10px;
  color: #ffff; 
  margin-top: 20px;
  border: none;
  outline: none;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  font-family: "Roboto Mono",monospace;
  ::-webkit-calendar-picker-indicator{
    background-color: #242424;
    padding: 5px;
    border-radius: 3px; 
  }
`

const Title = styled.h1`
  font-weight: 900;
  font-size: 50px;
`

const Container= styled.div`
  width: 90%;
	max-width: 1000px;
	margin: 50px auto;
	text-align: center;
	background: #fff;
	box-shadow: 0px 0px 20px 0px rgba(209, 209, 209, 0.5);
	padding: 40px;
	border-radius: 10px;
	display: flex;
	gap: 20px;
` 

const Group = styled.div`
  display: flex;
	flex-direction: column;
	width: 100%;
`

const Label = styled.label`
  width: 100%;
	font-size: 24px;
	color:#242424;
  font-weight: 500px;
  margin-top: 20px;
`



function App() {

  
  const [ dateSelect, stateDate] = useState({
    date:new Date(),
    number: 0,
  }); 

  
  console.log(dateSelect) // Sat Dec 03 2022 (esto es un objeto)

  const handleChange = e => {
    stateDate({
      ...dateSelect,
      [e.target.name]: e.target.value
    })
  }


  //Extract Data
  const { date, number } = dateSelect;

  console.log(date)

  var c = moment(date).add(10,'day').format('LL')
  var d = moment("29402-01-05").add(100000005,'day').format('LL')
  
  console.log("Futuro Cumple: " + c)
  console.log("Futuro Cumple d: " + d)

  
  // let dayBirth = date.getDate()
  let dayBirth = new Date(date).getDate() 
  console.log("dia extraido: " + dayBirth)
  let days_birth = []
  function calcNextDays(number){
    for (let i = 1; i <= number; i++){
      let days = 1 + dayBirth+ Math.pow(10, i);
      days_birth.push(days)
      
    }
    return days_birth
  }

  // let pp = calcNextDays(number)
  // console.log(pp)
  
  let arrDays = []
  function calculate(){
    let posible_days = calcNextDays(number)
    // console.log("days " + posible_days)
    // for (let i = 0; i <= posible_days.length; i++){
    //   let finalDay =  moment(date).add(posible_days[i],'day').format('LL')
    //   console.log(posible_days[i])
    //   arrDays.push(finalDay)
    // }
    // }
    // 
    // const resultadov2 = dateSelect.setDate() 
    // const resultado = dateSelect.getDate() + '/' + (dateSelect.getMonth() + 1) + '/' + dateSelect.getFullYear(); 
  //   let dayModi = posible_days.forEach((num, index) => {
  //     console.log('Indice - ' + index + ' Valor: ' + num)
  //   // return arrDays   
  //   let result = arrDays.push(dayModi)
  //   return result
  // })
    for (let value of posible_days){
      console.log(value)
      let finalDay =  moment(date).add(value,'day').format('LL')
      arrDays.push(finalDay)
    }
    return arrDays
}

  let funCont = calculate()
  console.log(funCont)
  
 
  return (
    <>
      <Title>Select Your Birthday</Title>
      <Container>
        <Group>
          <Label>Date</Label>
            <Input
              type="date"
              name="date"
              onChange={handleChange}
              value={date}
            />
          <Label>Birthday Number</Label>
            <Input
              type="number"
              name="number"
              onChange={handleChange}
              value={number}
            />
        </Group>
      </Container>
    </>
  );
}

export default App;
