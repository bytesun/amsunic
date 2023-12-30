import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';


const localizer = momentLocalizer(moment)

const HikingSchedule = (props:{events:[]}) => {
    const agent = new HttpAgent({ host: "https://ic0.app" });


    useEffect(()=>{
        
    },[]);

    function loadEvents(start: Date, end: Date){
       
    };


    // function navigator(theday: Date, view) {

    //     setTheday(moment(theday));
    //     let s = moment(theday).startOf(view);
    //     let e = moment(theday).endOf(view);
    //     setMstart(s)
    //     setMend(e)
    //     fetchEvents(ftype, s, e);
    
    //   }

    return (
        <Calendar
            localizer={localizer}
            events={props.events}
            startAccessor="start"
            endAccessor="end"
            // onNavigate={navigator}
            style={{ height: 500 }}
        />
    )
}

export default HikingSchedule;