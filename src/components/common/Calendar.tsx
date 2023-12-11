import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import React from 'react';

const Calendar: React.FC = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      // ここにイベントデータやその他のオプションを追加
    />
  );
};

export default Calendar;
