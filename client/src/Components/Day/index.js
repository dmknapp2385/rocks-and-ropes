import React from "react";
import CalendarActivity from "../CalendarActivity";
const Day = (props) => {
    const {day, activities} = props;
    console.log(day);
 return (
    <div>
        <p>{day}</p>
        <div>
            {activities.map((activity, i)  => {
                return <CalendarActivity activity = {activity} key={`${day}${activity.name}${i}`}/>
            })}
        </div>
        
    </div>
 );
}

export default Day;