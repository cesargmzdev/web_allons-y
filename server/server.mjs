import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import process from 'process';
import dotenv from 'dotenv';
// import net from 'net';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.disable('x-powered-by');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname));

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const SECRET = process.env.SECRET;

mongoose.connect('mongodb://localhost:27017/web_allons-y');

const EventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date
});

const Event = mongoose.model('Event', EventSchema);

const TestimonySchema = new mongoose.Schema({
  text: String
});

const Testimony = mongoose.model('Testimony', TestimonySchema);

const VolunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  volunteering: String,
  comment: String
});

const Volunteer = mongoose.model('Volunteer', VolunteerSchema);

const authMiddleware = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.redirect('/auth');
  }

  try {
    const user = jwt.verify(token, SECRET);
    req.user = user;
    next();
  } catch (err) {
    return res.redirect('/auth');
  }
};

app.get('/auth', (_req, res) => {
  res.sendFile(path.join(__dirname, 'auth.html'));
});

app.post('/login', async (req, res) => {
  const {username, password} = req.body;

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return res.status(400).json({error: 'Invalid username or password'});
  } else {
    const token = jwt.sign({username}, SECRET);

    res.cookie('jwt', token);
    res.json({redirect: '/admin'});
  }
});

app.get('/check_login', (req, res) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({message: 'No token provided'});
  }

  try {
    const decodedToken = jwt.verify(token, SECRET);
    res.json(decodedToken);
    console.log('Token verificado', decodedToken);
  } catch (err) {
    res.status(401).json({message: 'Invalid token'});
  }
});

app.post('/logout', (_req, res) => {
  res.clearCookie('jwt');
  res.json({message: 'Logged out', redirect: '/auth'});
});

app.get('/admin', authMiddleware, (_req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/events', async (_req, res) => {
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

app.post('/new_event', async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  console.log('Evento creado', event);
  res.json(event);
});

app.delete('/admin/:id', async (req, res) => {
  const {id} = req.params;
  await Event.findByIdAndDelete(id);
  res.json({message: 'Evento eliminado', id});
  console.log('Evento eliminado', id);
});

app.put('/admin/:id', async (req, res) => {
  const {id} = req.params;
  await Event.findByIdAndUpdate(id, req.body);
  res.json(res.body);
  console.log('Evento actualizado', id);
});

app.post('/testimonies', async (req, res) => {
  const testimony = new Testimony(req.body);
  await testimony.save();
  res.json(testimony);
  console.log('Testimonio creado', testimony);
});

app.get('/testimonies', async (_req, res) => {
  Testimony.find()
    .then(testimonies => {
      if (testimonies) {
        res.json(testimonies);
      } else {
        res.json([]);
      }
    })
    .catch(err => {
      console.error(err);
      res.json([]);
    });
});

app.delete('/admin/testimonies/:id', async (req, res) => {
  const {id} = req.params;
  await Testimony.findByIdAndDelete(id);
  res.json({message: 'Testimonio eliminado', id});
  console.log('Testimonio eliminado', id);
});

app.post('/volunteers', async (req, res) => {
  const volunteer = new Volunteer(req.body);
  await volunteer.save();
  res.json(volunteer);
  console.log('Voluntario creado', volunteer);
});

app.get('/volunteers', async (_req, res) => {
  Volunteer.find()
    .then(volunteers => {
      if (volunteers) {
        res.json(volunteers);
      } else {
        res.json([]);
      }
    })
    .catch(err => {
      console.error(err);
      res.json([]);
    });
});

app.delete('/admin/volunteers/:id', async (req, res) => {
  const {id} = req.params;
  await Volunteer.findByIdAndDelete(id);
  res.json({message: 'Voluntario eliminado', id});
  console.log('Voluntario eliminado', id);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000, http://localhost:3000/admin');
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