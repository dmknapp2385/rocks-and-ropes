import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons';

const CalendarActivity = ({activity}) => {

{/* <button className="detail"><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
            <button className="delete"><FontAwesomeIcon icon="fa-solid fa-trash-can-xmark" /></button> */}

 return (
    <div>
        <p>
            <span>{activity.name}</span>
            <span>{activity.length} mins</span>
            <button className="detail"><FontAwesomeIcon icon={faPlus} /></button>
            <button className="delete"><FontAwesomeIcon icon={faTrashCan} /></button>
        </p>
    </div>
 );
}

export default CalendarActivity;