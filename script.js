//your JS code here. If required.
// script.js
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    // Validate inputs
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // Create a new row
    const table = document.getElementById('book-list');
    const row = document.createElement('tr');
    
    // Create cells and append them to the row
    const titleCell = document.createElement('td');
    titleCell.textContent = title;
    row.appendChild(titleCell);
    
    const authorCell = document.createElement('td');
    authorCell.textContent = author;
    row.appendChild(authorCell);
    
    const isbnCell = document.createElement('td');
    isbnCell.textContent = isbn;
    row.appendChild(isbnCell);
    
    // Create a clear button and append it to the row
    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Clear';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        table.removeChild(row);
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);
    
    // Add the row to the table
    table.appendChild(row);
    
    // Clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});
