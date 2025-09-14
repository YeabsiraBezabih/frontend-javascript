// Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create array of students
const studentsList: Student[] = [student1, student2];

// Render table function
function renderTable(students: Student[]): void {
  // Create table element
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  // Add header row
  const headerRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';

  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  tbody.appendChild(headerRow);

  // Add student rows
  students.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Add table to document body
  document.body.appendChild(table);
}

// Add some basic styling
const style = document.createElement('style');
style.textContent = `
  table {
    border-collapse: collapse;
    width: 50%;
    margin: 20px auto;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
`;
document.head.appendChild(style);

// Render the table when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderTable(studentsList);
});
