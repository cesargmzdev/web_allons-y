document.getElementById('event-form').addEventListener('submit', () => {
  // const message = document.getElementById('message');
  const title = document.getElementById('title').value;
  const start = document.getElementById('start').value;
  const end = document.getElementById('end').value;

  fetch('/new_event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title, start, end}),
  })
    .then(response => response.json())
    .then(data => console.log(data));
  alert('Evento creado')
    .catch((error) => {
      console.error('Error:', error);
    });
});

const deleteEvent = (id) => {
  fetch(`/manage_events/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => console.log(data));
  alert('Evento eliminado')
    .catch((error) => {
      console.error('Error:', error);
    });
};

const updateEvent = (id, title, start, end) => {
  fetch(`/manage_events/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title, start, end}),
  })
    .then(response => response.json())
    .then(data => console.log(data));
  alert('Evento actualizado')
    .catch((error) => {
      console.error('Error:', error);
    });
};

const events = document.getElementById('events');
fetch('/events')
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data) && data.length) {
      data.reverse().forEach(event => {
        // Create event div
        const eventForm = document.createElement('form');
        eventForm.style.marginBottom = '3rem';

        // Create event info
        const eventInfo = document.createElement('div');
        const eventTitle = document.createElement('input');
        eventTitle.type = 'text';
        eventTitle.value = event.title;
        const eventStart = document.createElement('input');
        eventStart.type = 'datetime-local';
        eventStart.value = new Date(event.start).toLocaleString('sv-SE').slice(0, -3);
        const eventEnd = document.createElement('input');
        eventEnd.type = 'datetime-local';
        eventEnd.value = new Date(event.end).toLocaleString('sv-SE').slice(0, -3);
        eventInfo.style.paddingBottom = '1rem';
        eventInfo.appendChild(eventTitle);
        eventInfo.appendChild(eventStart);
        eventInfo.appendChild(eventEnd);
        eventForm.appendChild(eventInfo);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar evento';
        deleteButton.onclick = () => deleteEvent(event._id);
        eventForm.appendChild(deleteButton);

        // Create update button
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Modificar y actualizar evento';
        updateButton.onclick = () => updateEvent(event._id, eventTitle.value, eventStart.value, eventEnd.value);
        eventForm.appendChild(updateButton);

        // Add event div to events
        events.appendChild(eventForm);
      });
    } else {
      events.innerHTML += '<p>No hay eventos</p>';
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
