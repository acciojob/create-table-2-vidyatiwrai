

function createTable() {
  const rowCount = prompt('Input number of rows');
  const columnCount = prompt('Input number of columns');

  const table = document.getElementById('myTable');

  // Clear existing table content
  table.innerHTML = '';

  // Create rows and cells
  for (let i = 0; i < rowCount; i++) {
    const row = table.insertRow();
    for (let j = 0; j < columnCount; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}

  

