import React from "react";
import CalendarActivity from "../CalendarActivity";
const Day = (props) => {
    const {day, setActivities, allActivities, days} = props;
    const activities = props?.activities || [];
 return (
    <div className="d-flex flex-column col-12 border border-dark">
        <p className = "border border-dark rounded mt-1" style = {{fontSize: "0.75em"}}>{day}</p>
        <div className="d-flex flex-xs-row flex-md-column" >
            {activities.map((activity, i)  => {
                return <CalendarActivity activity = {activity} days = {days} activities = {allActivities} setActivities={setActivities} key={`${day}${activity.name}${i}`}/>
            })}
        </div>
        
    </div>
 );
}

export default Day;