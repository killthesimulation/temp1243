import React from 'react'
import { useState } from 'react'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import './style.css'

export default function CalendarModal() {
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
      });
      return (
        <Calendar
          value={selectedDayRange}
          onChange={setSelectedDayRange}
          minimumDate={utils().getToday()}
          shouldHighlightWeekends
        />
      );
}
