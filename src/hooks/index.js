import { useState, useEffect } from "react";
import moment from 'moment';
import { firebase } from "../firebase";
import { collatedTasksExist } from '../helpers';


export const useTasks = selectedProject => {
    const[tasks, setTasks] = useState([]);
    
    // on each condition get each particular task
    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==' '123userid');

        unsubscribe = 
            selectedProject && !collatedTasksExist(selectedProject) ?
                (unsubscribe = unsubscribe.where('porjectId', '==', selectedProject))
                : selectedProject === 'TODAY'
                ? (unsubscribe = unsubscribe.where(
                    'date',
                    '==',
                    moment().format('DD/MM/YYYY')
                ))
                : selectedProject === 'INBOX' || selectedProject === 0 
                ? (unsubscribe = unsubscribe.where('date', '==', ''))
                : unsubscribe;
    }, [selectedProject]);
};