import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons';
import DetailModal from '../DetailModal';
import { useMutation } from '@apollo/client';
import { REMOVE_ACTIVITY } from '../../utils/mutations'
import { Button, } from 'react-bootstrap';

const CalendarActivity = ({ activity, setActivities, activities, days, detailModalProps}) => {
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
            temp = temp.filter((elem) => elem._id !== activity._id);
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
        <div className="activity border border-dark rounded m-2 text-center background-tan" >
            <DetailModal showDetailModal={showDetailModal} detailModalProps={detailModalProps} setShowDetailModal={setShowDetailModal} activity={activity} />
            <div>
                <p className="font-weight-bold p-1">{activity.name}</p>
            </div>
            <div>
                <p>{activity.length}</p>
            </div>
            <div className="m-2">
                <Button variant="secondary" className="detail m-2"><FontAwesomeIcon icon={faPlus} onClick={handleDetailClick} /></Button>
                <Button variant = "secondary" className="delete m-2"><FontAwesomeIcon icon={faTrashCan} onClick={handleDeleteClick} /></Button>
            </div>
        </div>
    );
}

export default CalendarActivity;