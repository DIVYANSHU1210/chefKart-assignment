import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";

function DateTimeCard() {
  return (
    <div className='date-time-card'>
      <div><FaRegCalendarAlt /> 21 May 2021</div>
      <div><LuAlarmClock /> 10:30 PM - 12:30 PM</div>
    </div>
  )
}

export default DateTimeCard