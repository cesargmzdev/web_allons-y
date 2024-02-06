import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
// import net from 'net';

const app = express();
app.use(cors());
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

mongoose.connect('mongodb://localhost:27017/web_allons-y');

const EventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date
});

const Event = mongoose.model('Event', EventSchema, 'Events');

app.get('/events', async (req, res) => {
  Event.find()
    .then(events => {
      if (events) {
        res.json(events);
      } else {
        res.json([]);
      }
    })
    .catch(err => {
      console.error(err);
      res.json([]);
    });
});

app.use(express.static(__dirname));

app.get('/manage_events', (req, res) => {
  res.sendFile(path.join(__dirname, 'manage_events.html'));
});

app.post('/new_event', async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  console.log('Evento creado', event);
  res.json(event);
});

app.delete('/manage_events/:id', async (req, res) => {
  const {id} = req.params;
  await Event.findByIdAndDelete(id);
  res.json({message: 'Evento eliminado', id});
  console.log('Evento eliminado', id);
});

app.put('/manage_events/:id', async (req, res) => {
  const {id} = req.params;
  await Event.findByIdAndUpdate(id, req.body);
  res.json(res.body);
  console.log('Evento actualizado', id);
});

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});

// const event = new Event({
//   title: 'Voluntariado',
//   start: new Date('2024-02-05'),
//   end: new Date('2024-02-05'),
// });

// event.save();



// const findAvailablePort = (desiredPort) => {
//     return new Promise((resolve, reject) => {
//         const server = net.createServer();
//         server.on('error', reject);
//         server.listen(desiredPort, () => {
//             const {port} = server.address();
//             server.close(() => {
//                 resolve(port);
//             });
//         });
//         server.on('error', (error) => {
//             if (error.code !== 'EADDRINUSE') {
//                 findAvailablePort(0).then(port => resolve(port));
//             } else {
//                 resolve(findAvailablePort(desiredPort + 1));
//             }
//         });
//     });
// };


// const portPromise = findAvailablePort(3000).then(port => {
//     app.listen(port, () => {
//         console.log(`Server is running on port http://localhost:${port}`);
//     });
//     return port;
// });

// export default portPromise;