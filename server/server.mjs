import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import net from 'net';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/web_allons-y');

const EventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date
});

const Event = mongoose.model('Event', EventSchema, 'Events');

app.get('/events', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// app.post('/events', async (req, res) => {
//   const event = new Event(req.body);
//   await event.save();
//   res.json(event);
// });

// const event = new Event({
//   title: 'Voluntariado',
//   start: new Date('2024-02-05'),
//   end: new Date('2024-02-05'),
// });

// event.save();

const findAvailablePort = (desiredPort) => {
    return new Promise((resolve, reject) => {
        const server = net.createServer();
        server.on('error', reject);
        server.listen(desiredPort, () => {
            const {port} = server.address();
            server.close(() => {
                resolve(port);
            });
        });
        server.on('error', (error) => {
            if (error.code !== 'EADDRINUSE') {
                findAvailablePort(0).then(port => resolve(port));
            } else {
                resolve(findAvailablePort(desiredPort + 1));
            }
        });
    });
};


const portPromise = findAvailablePort(3000).then(port => {
    app.listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}`);
    });
    return port;
});

export default portPromise;