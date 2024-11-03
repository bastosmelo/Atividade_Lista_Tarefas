// Seleciona os elementos do DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Função para criar uma nova tarefa
function addTask() {
    const taskText = taskInput.value.trim(); // Remove espaços em branco

    if (taskText === '') {
        alert('Por favor, insira uma tarefa válida!');
        return;
    }

    // Cria um novo elemento <li> para a tarefa
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Cria o botão de remover
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem); // Remove o <li> do DOM
    });

    // Adiciona o botão ao item da tarefa
    taskItem.appendChild(removeBtn);

    // Adiciona o item da tarefa à lista de tarefas
    taskList.appendChild(taskItem);

    // Limpa o campo de entrada
    taskInput.value = '';
}

// Adiciona um evento de clique ao botão "Adicionar Tarefa"
addTaskBtn.addEventListener('click', addTask);

// Permite adicionar tarefas ao pressionar "Enter"
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
