import { useState } from "react";
import styled from "@emotion/styled";
import moment from "moment";
import { addDays } from "date-fns";

const Input = styled.input`
  background-color: #242424;
  padding: 10px;
  color: #ffff;
  margin-top: 5px;
  border: none;
  outline: none;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  font-family: "Roboto Mono", monospace;
  ::-webkit-calendar-picker-indicator {
    background-color: #242424;
    padding: 5px;
    border-radius: 3px;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 50px;
  text-decoration: underline;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 50px auto;
  /* text-align: center; */
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(209, 209, 209, 0.5);
  padding: 40px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  width: 100%;
  font-size: 24px;
  color: #242424;
  font-weight: 600;
  margin-top: 20px;
  text-align: left;
`;

const Button = styled.button`
  padding: 15px;
  border-radius: 5px;
  background-color: #5c5959;
  margin-top: 40px;
  font-weight: bold;
  font-size: 15px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #7a7979;
  }
`;

const Phara = styled.p`
  color: #7a7979;
  font-size: 20px;
  margin-top: 10px;
`;

const Birthday = styled.p`
  text-decoration: underline;
  color: #2e2c2c;
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 600;
`;

// --------------- //

function App() {
  const [dateSelect, setDateSelect] = useState({
    date: "",
    number: 1,
  });

  const [result, setResult] = useState([]);

  

  const handleChange = (e) => {
    setDateSelect({
      ...dateSelect,
      [e.target.name]: e.target.value,
    });
  };

  //Extract Data
  const { date, number } = dateSelect;


  function calcNextDays(number) {
    let days_birth = [];
    let dayBirth = new Date(date).getDate() + 1;
    for (let i = 1; i <= number; i++) {
      let days = dayBirth + Math.pow(10, i);
      days_birth.push(days);
    }
    return days_birth;
  }



  function calculate() {
    let arrDates = [];
    let posibleDays = calcNextDays(number);
    for (let value of posibleDays) {
      let finalDate = moment(date).add(value, "day").format("LL");
      arrDates.push(finalDate);
    }
    return arrDates;
  }

  const onSubmit = () => {
    console.log("Calculating...");
    const funCont = calculate();
    setResult(funCont);
  };

  return (
    <>
      {result.length > 0 ? (
        <>
          <Title>Your Next Birthday</Title>
          <Container>
            <Group>
              <Birthday>Your Birthday: {date}</Birthday>
              {result.map((date, index) => (
                <Phara key={index}>{`Birthday # ${index + 1}: ${date}`}</Phara>
              ))}
              <Button type="submit" onClick={() => setResult([])}>RESET</Button>
            </Group>
          </Container>
        </>
      ) : (
        <>
          <Title>Select Your Birthday</Title>
          <Container>
            <form onSubmit={onSubmit}>
              <Group>
                <Label>Date</Label>
                <Input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  value={date}
                  required
                />
                <Label>Birthday Number</Label>
                <Input
                  type="number"
                  name="number"
                  onChange={handleChange}
                  value={number}
                  min="1"
                  max="7"
                />
                <Button type="submit">SEND</Button>
              </Group>
            </form>
          </Container>
        </>
      )}
    </>
  );
}

export default App;
