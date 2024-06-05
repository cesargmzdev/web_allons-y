import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'dayjs/locale/es';
// import {port} from '../../server/server.mjs';

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/events`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(
          data.map((event) => ({
            ...event,
            start: new Date(event.start),
            end: new Date(event.end)
          }))
        );
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  dayjs.locale('es');
  const localizer = dayjsLocalizer(dayjs);

  return (
    <div className="h-[80dvh] p-5">
      <Calendar
        events={events}
        localizer={localizer}
        messages={{
          allDay: 'Todo el día',
          previous: 'Anterior',
          next: 'Siguiente',
          today: 'Hoy',
          month: 'Mes',
          week: 'Semana',
          day: 'Día',
          agenda: 'Agenda',
          date: 'Fecha',
          time: 'Hora',
          event: 'Evento',
          noEventsInRange: 'Sin eventos'
        }}
        startAccessor="start"
        endAccessor="end"
        culture="es"
        formats={{
          weekdayFormat: 'dddd',
          dayHeaderFormat: 'dddd, DD MMMM',
          dayRangeHeaderFormat: ({ start, end }, culture, local) =>
            `${local.format(start, 'DD MMMM', culture)} - ${local.format(end, 'DD MMMM', culture)}`,
          dayFormat: (date, culture, localizer) => localizer.format(date, 'DD dddd', culture)
        }}
      />
    </div>
  );
};

MyCalendar.propTypes = {
  events: PropTypes.array.isRequired
};

export default MyCalendar;
