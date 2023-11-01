
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todoForm');
    const ul = document.getElementById('todoList');
    const errorMsg = document.getElementById('errorMsg');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const input = document.getElementById('todoInput').value.trim();
  
      if (input === '') {
        errorMsg.textContent = 'Please enter a to-do item.';
        return;
      }
  
      errorMsg.textContent = ''; 
      addTodo(input);
      form.reset();
    });
  
    ul.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        toggleTodo(event.target);
      } else if (event.target.tagName === 'BUTTON') {
        deleteTodo(event.target.parentElement);
      }
    });
  });
  
  /**
   * Add a new To-Do item.
   * @param {string} todoText - The text of the To-Do item.
   */
  function addTodo(todoText) {
    const ul = document.getElementById('todoList');
    const li = document.createElement('li');
    li.textContent = todoText;
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button'; 
    deleteButton.textContent = 'Delete';
    li.appendChild(deleteButton);
    ul.appendChild(li);
  }
  
  /**
   * Toggle the completion status of a To-Do item.
   * @param {HTMLElement} li - The list item element.
   */
  function toggleTodo(li) {
    if (li.classList.contains('completed')) {
      li.classList.remove('completed');
    } else {
      li.classList.add('completed');
    }
  }
  
  /**
   * Delete a To-Do item.
   * @param {HTMLElement} li - The list item element.
   */
  function deleteTodo(li) {
    li.remove();
  }
  