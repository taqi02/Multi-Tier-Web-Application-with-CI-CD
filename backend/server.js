const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();

app.use(cors());
app.use(express.json());

const TASKS_COLLECTION = 'tasks';

// Get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const snapshot = await db.collection(TASKS_COLLECTION).get();
    const tasks = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new task
app.post('/tasks', async (req, res) => {
  try {
    const { text } = req.body;
    const docRef = await db.collection(TASKS_COLLECTION).add({ text });
    res.status(201).json({ id: docRef.id, text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a task by id
app.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection(TASKS_COLLECTION).doc(id).delete();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
