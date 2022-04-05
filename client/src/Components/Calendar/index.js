import React, {useState} from "react";
import {Container, Row, Col, Dropdown} from 'react-bootstrap';


function CalendarPage() {
    //constants to get current month on page load
    const montharray= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const today = new Date();
    let currentMonth = montharray[today.getMonth()];

    //component reload for dropdown button
    const [month, setMonth] = useState(currentMonth)
    const year = '2022'
    // variables for first day of the current calendar month
    const firstOfMonth = new Date(`${month} 1, ${year}`);
    const day = firstOfMonth.getDay();
    const lastOfMonth = new Date(2022, firstOfMonth.getMonth(), 0)
    let prevDay =lastOfMonth.getDate();

    //returns last day of current month
    function getLastDAyOfMonth () {
        return new Date(2022, (firstOfMonth.getMonth() + 1), 0).getDate();
    }

    //gets the array of dates for the first row in the calendar based on the month selected and the year
    function getFirstcolArray() {
        let firstColArray = [1];
        for(let i=0; i<day; i++) {
            firstColArray.unshift(prevDay-i)
        }
        for(let i=1; i <= (6-day); i++){
            firstColArray.push(1+i)
        }
        return firstColArray;
    }


    //function to create array for the row 2 through 5

    function getRowDAtes() {
        let sunday = 7- day;
        //constant to add to start of next month
        let k = 1;
        let rowsArays = []
        for (let i = 0; i <5; i++) {
            const lastDay = getLastDAyOfMonth();
            let rowArray = []
            for (let j=1; j<=7; j++) {
                if(sunday + j > lastDay) {
                    rowArray.push(k)
                    k += 1;

                } else{
                    rowArray.push(sunday + j);
                }
            }
            rowsArays.push(rowArray);
            sunday += 7;
        }
        //instead set rowsArrays in useState function react
        return rowsArays;
    };

  return (
    <Container fluid className="mx-auto">
        <h2>My WorkOut Calendar</h2>
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {month}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={()=>setMonth('January')}>January</Dropdown.Item>
                <Dropdown.Item onClick={()=>setMonth('February')}>February</Dropdown.Item>
                <Dropdown.Item onClick={()=>setMonth('March')}>March</Dropdown.Item>
                <Dropdown.Item onClick={()=>setMonth('April')}>April</Dropdown.Item>
                <Dropdown.Item onClick={()=>setMonth('May')}>May</Dropdown.Item>
                <Dropdown.Item onClick={()=>setMonth('June')}>June</Dropdown.Item>
                <Dropdown.Item onClick={()=>setMonth('July')}>July</Dropdown.Item>
                <Dropdown.Item onClick={()=>setMonth('August')}>August</Dropdown.Item>
                <Dropdown.Item onClick={()=>setMonth('September')}>September</Dropdown.Item>
                <Dropdown.Item onClick={()=>setMonth('October')}>October</Dropdown.Item>
                <Dropdown.Item onClick={()=>setMonth('November')}>November</Dropdown.Item>
                <Dropdown.Item onClick={()=>setMonth('December')}>December</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        <Row className="mt-5 text-center" style={{borderStyle: 'solid'}}>
            <Col style={{borderRight: 'solid'}} sm={1}>Sunday</Col>
            <Col style={{borderRight: 'solid'}} sm={2}>Monday</Col>
            <Col style={{borderRight: 'solid'}} sm={2}>Tuesday</Col>
            <Col style={{borderRight: 'solid'}} sm={2}>Wednesday</Col>
            <Col style={{borderRight: 'solid'}} sm={2}>Thursday</Col>
            <Col style={{borderRight: 'solid'}} sm={2}>Friday</Col>
            <Col style={{borderRight: 'solid'}} sm={1}>Saturday</Col>
        </Row>

    </Container>
  )
}


export default CalendarPage;
