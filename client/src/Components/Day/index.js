import React from "react";
import CalendarActivity from "../CalendarActivity";
const Day = (props) => {
    const {day, setActivities, allActivities, days, detailModalProps} = props;
    const activities = props?.activities || [];
 return (
    <div className="d-flex flex-column col-12 border border-dark background-brown">
        <p className = "border border-dark rounded mt-2 background-red text-tan shadow" style = {{fontSize: "1.5em"}}>{day}</p>
        <div className="d-flex flex-row justify-content-center flex-wrap" >
            {activities.map((activity, i)  => {
                return <CalendarActivity activity = {activity} days = {days} activities = {allActivities} setActivities={setActivities} detailModalProps={detailModalProps} key={`${day}${activity.name}${i}`}/>
            })}
        </div>
        
    </div>
 );
}

export default Day;