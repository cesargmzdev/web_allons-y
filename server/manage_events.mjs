document.getElementById('event-form').addEventListener('submit', (event) => {
  // const message = document.getElementById('message');
  event.preventDefault();
  const title = document.getElementById('title').value;
  const start = document.getElementById('start').value;
  const end = document.getElementById('end').value
  fetch('/manage_events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, start, end }),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => {
    console.error('Error:', error);
  });
});

window.onload = () => {
  const events = document.getElementById('events');
  fetch('/events')
    .then(response => response.json())
    .then(data => {
  if (Array.isArray(data) && data.length) {
    data.forEach(event => {
      events.innerHTML += `<div style="margin-bottom: 3rem">
                          <div style='padding-bottom: 1rem'>${event.title} - ${event.start} - ${event.end}</div>
                          <button onclick="deleteEvent('${event._id}')">Eliminar evento</button>
                          <button onclick="updateEvent('${event._id}')">Modificar evento</button>
                        </div>`;
    });
    } else {
      events.innerHTML += '<p>No hay eventos</p>';
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};