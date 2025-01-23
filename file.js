const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('input', () => {
const value = taskInput.value.trim();
if (value.length > 50) {
alert('Task length should not exceed 50 characters.');
taskInput.value = value.substring(0, 50);
}
});
// Filtering Example
const filterInput = document.createElement('input');
filterInput.placeholder = 'Search tasks...';
filterInput.className = 'form-control mb-3';
document.querySelector('.container').prepend(filterInput);
filterInput.addEventListener('input', () => {
const filterValue = filterInput.value.toLowerCase();
document.querySelectorAll('#taskList li').forEach(task => {
if (task.textContent.toLowerCase().includes(filterValue)) {
task.style.display =onst filterValue = filterInput.value.toLowerCase();
document.querySelectorAll('#taskL.style.display =onst filterValue = filterInput.value.toLowerCase();
document.querySelectorAll('#taskList li').forEach(task => {
if (task.textContent.toLowerCase().includes(filterValue)) {
task.style.display =
'';
} else {
task.style.display = 'none';
}
});
}); 