document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.getElementById('searchButton');
  const searchButtonIcon = document.getElementById('searchButtonIcon');
  const searchForm = document.getElementById('searchForm');
  const sidebar = document.querySelector('.sidebar');

  searchButton.addEventListener('click', function(e) {
      if (window.innerWidth < 576) {
          e.preventDefault();
          searchForm.classList.toggle('show');
          if (searchForm.classList.contains('show')) {
              searchButtonIcon.classList.replace('bx-search', 'bx-x');
          } else {
              searchButtonIcon.classList.replace('bx-x', 'bx-search');
          }
      }
  });

  if (window.innerWidth < 768) {
      if(sidebar) {
          sidebar.classList.add('hide');
      }
  } else if (window.innerWidth > 576) {
      searchButtonIcon.classList.replace('bx-x', 'bx-search');
      searchForm.classList.remove('show');
  }

  window.addEventListener('resize', function() {
      if (this.innerWidth > 576) {
          searchButtonIcon.classList.replace('bx-x', 'bx-search');
          searchForm.classList.remove('show');
      }
  });
});

// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
      name: 'Products',
    },
  ],
  chart: {
    type: 'bar',
    background: 'lightblue',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#lightblue',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: 'black',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 3,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Hardware', 'Managing', 'Software', 'Complete', 'Testing'],
    title: {
      style: {
        color: '#000',
      },
    },
    axisBorder: {
      show: true,
      color: '#000000',
    },
    axisTicks: {
      show: true,
      color: '#000000',
    },
    labels: {
      style: {
        colors: '#000000',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Count',
      style: {
        color: '#000000',
      },
    },
    axisBorder: {
      color: '#000000',
      show: true,
    },
    axisTicks: {
      color: '#000000',
      show: true,
    },
    labels: {
      style: {
        colors: '#000000',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Present',
      data: [0,5,10,15,20,25,30],
    },
    {
      name: 'Leave',
      data: [0,5,10,15,20,25,30],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','aug','sep','oct','nov','dec'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.7,
      opacityTo: 0.2,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#000',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#000',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Present',
        style: {
          color: '#00000',
        },
      },
      labels: {
        style: {
          colors: ['#00000'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Leave',
        style: {
          color: '#00000',
        },
      },
      labels: {
        style: {
          colors: ['#00000'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'light',
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();


function toggleDropdown(id) {
  var dropdown = document.getElementById(id);
  var icon = dropdown.previousElementSibling.querySelector('.dropdown-icon');

  if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
      icon.classList.remove('rotate');
  } else {
      dropdown.style.display = 'block';
      icon.classList.add('rotate');
  }
}

//search bar js
function performSearch() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const sections = document.querySelectorAll('.content-section');
  let found = false;

  sections.forEach(section => {
      if (section.style.display === 'block') {
          const content = section.textContent.toLowerCase();
          const index = content.indexOf(query);

          if (index !== -1) {
              moveToText(section, query);
              found = true;
          }
      }
  });

  if (!found) {
      alert('No results found');
  }
}

function moveToText(element, query) {
  const textNodes = getTextNodes(element);
  let charIndex = 0;
  let foundNode = null;
  let foundIndex = -1;

  for (let node of textNodes) {
      const nodeText = node.textContent.toLowerCase();
      foundIndex = nodeText.indexOf(query);

      if (foundIndex !== -1) {
          foundNode = node;
          break;
      }
      charIndex += nodeText.length;
  }

  if (foundNode) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.setStart(foundNode, foundIndex);
      range.setEnd(foundNode, foundIndex + query.length);
      selection.removeAllRanges();
      selection.addRange(range);
      foundNode.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function getTextNodes(node) {
  const textNodes = [];

  function traverse(node) {
      if (node.nodeType === 3) {
          textNodes.push(node);
      } else {
          node.childNodes.forEach(child => traverse(child));
      }
  }

  traverse(node);
  return textNodes;
}

//spa code
document.addEventListener('DOMContentLoaded', () => {
  showSection('dashboard'); // Show the dashboard section by default
});


function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
      section.style.display = section.id === sectionId ? 'block' : 'none';
  });
}

function performSearch() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const sections = document.querySelectorAll('.content-section');
  let found = false;

  sections.forEach(section => {
      if (section.style.display === 'block') {
          const content = section.textContent.toLowerCase();
          const index = content.indexOf(query);

          if (index !== -1) {
              moveToText(section, query);
              found = true;
          }
      }
  });

  if (!found) {
      alert('No results found');
  }
}

function moveToText(element, query) {
  const textNodes = getTextNodes(element);
  let charIndex = 0;
  let foundNode = null;
  let foundIndex = -1;

  for (let node of textNodes) {
      const nodeText = node.textContent.toLowerCase();
      foundIndex = nodeText.indexOf(query);

      if (foundIndex !== -1) {
          foundNode = node;
          break;
      }
      charIndex += nodeText.length;
  }

  if (foundNode) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.setStart(foundNode, foundIndex);
      range.setEnd(foundNode, foundIndex + query.length);
      selection.removeAllRanges();
      selection.addRange(range);
      foundNode.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function getTextNodes(node) {
  const textNodes = [];

  function traverse(node) {
      if (node.nodeType === 3) {
          textNodes.push(node);
      } else {
          node.childNodes.forEach(child => traverse(child));
      }
  }

  traverse(node);
  return textNodes;
}


//calender js
document.addEventListener('DOMContentLoaded', () => {
  const calendarBody = document.getElementById('calendar-body');
  const monthYear = document.getElementById('month-year');
  const prevMonth = document.getElementById('prev-month');
  const nextMonth = document.getElementById('next-month');
  const eventModal = document.getElementById('event-modal');
  const closeModal = document.querySelector('.close');
  const eventForm = document.getElementById('event-form');
  const eventDateInput = document.getElementById('event-date');
  const eventTitleInput = document.getElementById('event-title');

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Retrieve events from localStorage or initialize an empty array
  let events = JSON.parse(localStorage.getItem('events')) || [];

  function renderCalendar(month, year) {
      calendarBody.innerHTML = '';
      monthYear.textContent = `${months[month]} ${year}`;

      let firstDay = new Date(year, month, 1).getDay();
      let daysInMonth = new Date(year, month + 1, 0).getDate();

      let date = 1;
      for (let i = 0; i < 6; i++) {
          let row = document.createElement('tr');

          for (let j = 0; j < 7; j++) {
              let cell = document.createElement('td');
              if (i === 0 && j < firstDay) {
                  cell.appendChild(document.createTextNode(''));
              } else if (date > daysInMonth) {
                  break;
              } else {
                  let cellDate = `${year}-${month + 1}-${date}`;
                  cell.appendChild(document.createTextNode(date));
                  cell.setAttribute('data-date', cellDate);
                  cell.addEventListener('click', (e) => {
                      eventModal.style.display = 'block';
                      eventDateInput.value = e.target.getAttribute('data-date');
                  });

                  // Render events for this date
                  let eventsForDate = events.filter(event => event.date === cellDate);
                  eventsForDate.forEach(event => {
                      let eventElement = document.createElement('div');
                      eventElement.textContent = event.title;
                      eventElement.classList.add('event');
                      eventElement.setAttribute('title', event.title);
                      cell.appendChild(eventElement);
                  });

                  date++;
              }
              row.appendChild(cell);
          }
          calendarBody.appendChild(row);
      }
  }

  prevMonth.addEventListener('click', () => {
      currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
      currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
      renderCalendar(currentMonth, currentYear);
  });

  nextMonth.addEventListener('click', () => {
      currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
      currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
      renderCalendar(currentMonth, currentYear);
  });

  closeModal.addEventListener('click', () => {
      eventModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
      if (e.target === eventModal) {
          eventModal.style.display = 'none';
      }
  });

  eventForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const date = eventDateInput.value;
      const title = eventTitleInput.value;

      events.push({ date, title });

      // Save events to localStorage
      localStorage.setItem('events', JSON.stringify(events));

      const eventElement = document.createElement('div');
      eventElement.textContent = title;
      eventElement.classList.add('event');
      eventElement.setAttribute('title', title);

      const eventCell = document.querySelector(`[data-date='${date}']`);
      if (eventCell) {
          eventCell.appendChild(eventElement);
      }

      eventModal.style.display = 'none';
      eventForm.reset();
  });

  renderCalendar(currentMonth, currentYear);
});

//attendance js
document.addEventListener('DOMContentLoaded', function() {
  loadAttendanceRecords();
  loadLeaveRequests();

  document.getElementById('attendanceForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const employeeId = document.getElementById('employeeId').value;
      const name = document.getElementById('name').value;
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString();
      const time = currentDate.toLocaleTimeString();

      addAttendanceRecord(employeeId, name, date, time);

      document.getElementById('attendanceForm').reset();
  });

  document.getElementById('leaveForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const leaveEmployeeId = document.getElementById('leaveEmployeeId').value;
      const leaveName = document.getElementById('leaveName').value;
      const leaveDate = document.getElementById('leaveDate').value;
      const reason = document.getElementById('reason').value;

      addLeaveRequest(leaveEmployeeId, leaveName, leaveDate, reason);

      document.getElementById('leaveForm').reset();
  });
});

function addAttendanceRecord(employeeId, name, date, time) {
  const table = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.textContent = employeeId;
  cell2.textContent = name;
  cell3.textContent = date;
  cell4.textContent = time;

  saveAttendanceRecord(employeeId, name, date, time);
}

function addLeaveRequest(employeeId, name, date, reason) {
  const table = document.getElementById('leaveTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.textContent = employeeId;
  cell2.textContent = name;
  cell3.textContent = date;
  cell4.textContent = reason;

  saveLeaveRequest(employeeId, name, date, reason);
}

function saveAttendanceRecord(employeeId, name, date, time) {
  const attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
  attendanceRecords.push({ employeeId, name, date, time });
  localStorage.setItem('attendanceRecords', JSON.stringify(attendanceRecords));
}

function saveLeaveRequest(employeeId, name, date, reason) {
  const leaveRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
  leaveRequests.push({ employeeId, name, date, reason });
  localStorage.setItem('leaveRequests', JSON.stringify(leaveRequests));
}

function loadAttendanceRecords() {
  const attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
  attendanceRecords.forEach(record => {
      addAttendanceRecord(record.employeeId, record.name, record.date, record.time);
  });
}

function loadLeaveRequests() {
  const leaveRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
  leaveRequests.forEach(request => {
      addLeaveRequest(request.employeeId, request.name, request.date, request.reason);
  });
}









