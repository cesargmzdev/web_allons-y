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
  fetch(`/admin/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json());
  alert('Evento eliminado')
    .catch((error) => {
      console.error('Error:', error);
    });
};

const updateEvent = (id, title, start, end) => {
  fetch(`/admin/${id}`, {
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
        const eventDivider = document.createElement('hr');
        eventDivider.style.marginTop = '3rem';
        eventDivider.style.marginLeft = '25%';
        eventDivider.style.marginRight = '25%';
        eventDivider.style.marginBottom = '3rem';
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
        const div_buttons = document.createElement('div');
        div_buttons.style.display = 'flex';
        div_buttons.style.justifyContent = 'center';
        div_buttons.style.gap = '1rem';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar evento';
        deleteButton.onclick = () => deleteEvent(event._id);

        // Create update button
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Actualizar evento';
        updateButton.onclick = () => updateEvent(event._id, eventTitle.value, eventStart.value, eventEnd.value);

        div_buttons.appendChild(deleteButton);
        div_buttons.appendChild(updateButton);

        eventForm.appendChild(div_buttons);

        eventForm.appendChild(eventDivider);

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

const testimonies = document.getElementById('testimonies');
fetch('/testimonies')
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data) && data.length) {
      data.reverse().forEach(testimony => {
        // Create testimony div
        const testimonyForm = document.createElement('form');
        const testimonyDivider = document.createElement('hr');
        testimonyDivider.style.marginTop = '3rem';
        testimonyDivider.style.marginLeft = '25%';
        testimonyDivider.style.marginRight = '25%';
        testimonyForm.style.marginBottom = '3rem';

        // Create testimony info
        const testimonyInfo = document.createElement('div');
        const testimonyText = document.createElement('textarea');
        testimonyText.value = testimony.text;
        testimonyText.readOnly = true;
        testimonyInfo.style.paddingBottom = '1rem';
        testimonyInfo.appendChild(testimonyText);
        testimonyForm.appendChild(testimonyInfo);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar testimonio';
        deleteButton.onclick = () => {
          fetch(`/admin/testimonies/${testimony._id}`, {
            method: 'DELETE',
          })
            .then(response => response.json());
          alert('Testimonio eliminado');
        };

        // Add delete button to testimony div
        testimonyForm.appendChild(deleteButton);

        testimonyForm.appendChild(testimonyDivider);

        // Add testimony div to testimonies
        testimonies.appendChild(testimonyForm);
      });
    } else {
      testimonies.innerHTML += '<p>No hay testimonios</p>';
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

const volunteers = document.getElementById('volunteers');
fetch('/volunteers')
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data) && data.length) {
      data.reverse().forEach(volunteer => {
        // Create volunteer div
        const volunteerForm = document.createElement('form');
        const volunteerDivider = document.createElement('hr');
        volunteerDivider.style.marginTop = '3rem';
        volunteerDivider.style.marginLeft = '25%';
        volunteerDivider.style.marginRight = '25%';
        volunteerForm.style.marginBottom = '3rem';

        // Create volunteer info
        const volunteerInfo = document.createElement('div');
        const volunteerName = document.createElement('input');
        volunteerName.readOnly = true;
        volunteerName.type = 'text';
        volunteerName.value = volunteer.name;
        const volunteerEmail = document.createElement('input');
        volunteerEmail.readOnly = true;
        volunteerEmail.type = 'email';
        volunteerEmail.value = volunteer.email;
        const volunteerPhone = document.createElement('input');
        volunteerPhone.readOnly = true;
        volunteerPhone.type = 'tel';
        volunteerPhone.value = volunteer.phone;
        const volunteerVolunteering = document.createElement('input');
        volunteerVolunteering.readOnly = true;
        volunteerVolunteering.type = 'text';
        volunteerVolunteering.value = volunteer.volunteering;
        const volunteerComment = document.createElement('textarea');
        volunteerComment.readOnly = true;
        volunteerComment.style.height = '5rem';
        volunteerComment.value = volunteer.comment;
        volunteerInfo.style.paddingBottom = '1rem';
        volunteerInfo.appendChild(volunteerName);
        volunteerInfo.appendChild(volunteerEmail);
        volunteerInfo.appendChild(volunteerPhone);
        volunteerInfo.appendChild(volunteerVolunteering);
        volunteerInfo.appendChild(volunteerComment);
        volunteerForm.appendChild(volunteerInfo);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar voluntario';
        deleteButton.onclick = () => {
          fetch(`/admin/volunteers/${volunteer._id}`, {
            method: 'DELETE',
          })
            .then(response => response.json());
          alert('Voluntario eliminado');
        };

        // Add delete button to volunteer div
        volunteerForm.appendChild(deleteButton);

        volunteerForm.appendChild(volunteerDivider);

        // Add volunteer div to volunteers
        volunteers.appendChild(volunteerForm);
      });
    } else {
      volunteers.innerHTML += '<p>No hay voluntarios</p>';
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

document.getElementById('log_out').addEventListener('click', () => {
  fetch('/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      window.location.href = `http://localhost:3000${data.redirect}`;
    });
});
