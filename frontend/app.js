const API_BASE = 'http://localhost:5000';

const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-task-btn');

function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = 'task-card';
  li.innerHTML = `
    <span>${task.text}</span>
    <button class="delete-btn" data-id="${task.id}">Delete</button>
  `;
  return li;
}

function renderTasks(tasks) {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = createTaskElement(task);
    taskList.appendChild(li);
  });
}

async function fetchTasks() {
  const res = await fetch(`${API_BASE}/tasks`);
  const data = await res.json();
  renderTasks(data);
}

addBtn.addEventListener('click', async () => {
  const value = taskInput.value.trim();
  if (!value) return;
  await fetch(`${API_BASE}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: value })
  });
  taskInput.value = '';
  fetchTasks();
});

taskList.addEventListener('click', async (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const id = e.target.getAttribute('data-id');
    await fetch(`${API_BASE}/tasks/${id}`, { method: 'DELETE' });
    fetchTasks();
  }
});

window.addEventListener('DOMContentLoaded', fetchTasks);