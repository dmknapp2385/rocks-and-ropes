import React from "react";
import CalendarActivity from "../CalendarActivity";
const Day = (props) => {
    const {day, activities} = props;
 return (
    <div className="d-flex flex-column col-md-1 col-sm-12 border border-dark">
        <p>{day}</p>
        <div className="d-flex flex-xs-row flex-md-column" >
            {activities.map((activity, i)  => {
                return <CalendarActivity activity = {activity} key={`${day}${activity.name}${i}`}/>
            })}
        </div>
        
    </div>
 );
}

export default Day;