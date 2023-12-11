import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { getReservations } from '../../api/reservationApi';
import { Reservation } from '../../types/reservationTypes';

interface FullCalendarEvent {
  title: string;
  start: Date;
  id: string;
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Array<FullCalendarEvent>>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await getReservations();
        const fetchedEvents = response.data.map((reservation: Reservation) => ({
          title: `Breakfast: ${reservation.breakfast ? 'Yes' : 'No'}, Dinner: ${
            reservation.dinner ? 'Yes' : 'No'
          }`,
          start: reservation.meal_date,
          id: reservation.reservation_id.toString(),
        }));
        setEvents(fetchedEvents);
        console.log(fetchedEvents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      // その他のイベントハンドラをここに追加
    />
  );
};

export default Calendar;
