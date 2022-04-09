import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons';
import DetailModal from '../DetailModal';

const CalendarActivity = ({ activity, setActivities }) => {
    const [showDetailModal , setShowDetailModal] = useState(false);
    const handleDeleteClick = (event) => {
        //delete activity call here
        //update activities state
    }

    const handleDetailClick = (event) => {
        //open up detail modal here
        setShowDetailModal(true);
    }

    return (
        <div className="border border-dark rounded m-2 text-center">
            <DetailModal showDetailModal = {showDetailModal} setShowDetailModal = {setShowDetailModal} activity = {activity}/>
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