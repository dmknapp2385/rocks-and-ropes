import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons';
import DetailModal from '../DetailModal';
import { useMutation } from '@apollo/client';
import { REMOVE_ACTIVITY } from '../../utils/mutations'
const CalendarActivity = ({ activity, setActivities, activities, days}) => {
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [removeActivity, { error }] = useMutation(REMOVE_ACTIVITY);

    const handleDeleteClick = async(event) => {
        //delete activity call here
        try {
            const { data } = await removeActivity({ variables: { activityId: activity._id } });

            if (error) {
                throw new Error('something went wrong!');
            }
            //update activities state
            let temp = [...activities];
            temp[days.findIndex(activity.day)] = temp[days.findIndex(activity.day)].filter((elem) => elem._id !== activity._id);
            setActivities(temp);
        }
        catch (e) {
            console.error(e);
        }
    }

    const handleDetailClick = (event) => {
        //open up detail modal here
        setShowDetailModal(true);
    }

    return (
        <div className="border border-dark rounded m-2 text-center">
            <DetailModal showDetailModal={showDetailModal} setShowDetailModal={setShowDetailModal} activity={activity} />
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