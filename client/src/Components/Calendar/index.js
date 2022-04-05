import React, {useState, useEffect} from "react";
import {Container, Row, Col, Dropdown} from 'react-bootstrap';


function CalendarPage() {
    //constants to get current month on page load
    const montharray= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const today = new Date();
    let currentMonth = montharray[today.getMonth()];

    //component reload for dropdown button
    const [month, setMonth] = useState(currentMonth);

    //hook for getting the array of row dates
    const [RowDateArrays, SetRowDateArrays] = useState([]);

    // variables for first day of the current calendar month
    const year = ((new Date).getFullYear());
    const firstOfMonth = new Date(`${month} 1, ${year}`);
    const day = firstOfMonth.getDay();
    const lastOfMonth = new Date(2022, firstOfMonth.getMonth(), 0)
    let prevDay =lastOfMonth.getDate();
    
    // hook to get dates on [month]
    useEffect(() => {
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

        //function to create arrays for the rows 1 through 6

        let sunday = 7- day;
        //constant to add to start of next month
        let k = 1;
        let rowsArays = [getFirstcolArray()];
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
        SetRowDateArrays(rowsArays);
        

    }, [month])
    
    // need to get window size to condiationally render smaller views for <700px

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
            <Col style={{borderRight: 'solid'}} xs={1}>Sunday</Col>
            <Col style={{borderRight: 'solid'}} xs={1}>Monday</Col>
            <Col style={{borderRight: 'solid'}} xs={1}>Tuesday</Col>
            <Col style={{borderRight: 'solid'}} xs={1}>Wednesday</Col>
            <Col style={{borderRight: 'solid'}} xs={1}>Thursday</Col>
            <Col style={{borderRight: 'solid'}} xs={1}>Friday</Col>
            <Col style={{borderRight: 'solid'}} xs={1}>Saturday</Col>
        </Row>
        {RowDateArrays.map((rowArray)=>(
            <Row style={{border: 'solid', height: '100px'}}>
                {rowArray.map((date)=>(
                    <Col xs={1} className="text-justify" style={{borderRight:'solid'}}>
                        <ul style={{listStyleType:'none'}}>
                            <li className="text-right">{date}</li>
                        </ul>
                    </Col>
                ))}
            </Row>
        ))}
    </Container>
  )
}


export default CalendarPage;
