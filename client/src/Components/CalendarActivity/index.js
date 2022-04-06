import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons';

const CalendarActivity = ({ activity }) => {


    const handleDeleteClick = (event) => {
        //delete activity call here
    }

    const handleDetailClick = (event) => {
        //open up detail modal here
    }

    return (
        <div className="border border-dark m-2 text-center">
            <div>
                <p className="font-weight-bold">{activity.name}</p>
            </div>
            <div>
                <p>{activity.length} mins</p>
            </div>
            <div className="m-2">
                <button className="detail rounded border border-dark"><FontAwesomeIcon icon={faPlus} onClick={handleDetailClick} /></button>
                <button className="delete rounded border border-dark"><FontAwesomeIcon icon={faTrashCan} onClick={handleDeleteClick} /></button>
            </div>
        </div>
    );
}

export default CalendarActivity;