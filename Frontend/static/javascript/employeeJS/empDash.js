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

  //profile js
  document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});

  //attendance and leave js
  document.addEventListener('DOMContentLoaded', function() {
    loadAttendanceRecords();
    loadLeaveRequests();

    document.getElementById('attendanceForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const employeeId = document.getElementById('attendanceEmployeeId').value;
        const name = document.getElementById('attendanceName').value;
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
        const reason = document.getElementById('leaveReason').value;

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
    const tableBody = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows

    attendanceRecords.forEach(record => {
        const existingRows = Array.from(tableBody.rows).map(row => row.cells[0].textContent);
        // Only add the record if it doesn't already exist
        if (!existingRows.includes(record.employeeId)) {
            addAttendanceRecord(record.employeeId, record.name, record.date, record.time);
        }
    });
}

function loadLeaveRequests() {
    const leaveRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
    const tableBody = document.getElementById('leaveTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows

    leaveRequests.forEach(request => {
        const existingRows = Array.from(tableBody.rows).map(row => row.cells[0].textContent);
        // Only add the request if it doesn't already exist
        if (!existingRows.includes(request.employeeId)) {
            addLeaveRequest(request.employeeId, request.name, request.date, request.reason);
        }
    });
}

//shifts
document.addEventListener('DOMContentLoaded', function() {
  const currentShifts = [
      { type: 'Morning Shift', date: '2024-08-01', time: '08:00 AM - 04:00 PM' },
      { type: 'Evening Shift', date: '2024-08-02', time: '04:00 PM - 12:00 AM' },
  ];

  const historicalShifts = [
      { type: 'Morning Shift', date: '2024-08-01', time: '08:00 AM - 04:00 PM' },
      { type: 'Evening Shift', date: '2024-08-02', time: '04:00 PM - 12:00 AM' },
      { type: 'Morning Shift', date: '2024-07-15', time: '08:00 AM - 04:00 PM' },
      { type: 'Evening Shift', date: '2024-07-16', time: '04:00 PM - 12:00 AM' },
      { type: 'Morning Shift', date: '2024-06-30', time: '08:00 AM - 04:00 PM' },
      { type: 'Evening Shift', date: '2024-06-29', time: '04:00 PM - 12:00 AM' },
      { type: 'Morning Shift', date: '2024-05-20', time: '08:00 AM - 04:00 PM' },
      { type: 'Evening Shift', date: '2024-05-21', time: '04:00 PM - 12:00 AM' },
  ];

  const shiftTableBody = document.getElementById('shiftTable').getElementsByTagName('tbody')[0];
  const historyTableBody = document.getElementById('historyTable').getElementsByTagName('tbody')[0];

  // Populate current shifts
  currentShifts.forEach(shift => {
      const newRow = shiftTableBody.insertRow();
      newRow.insertCell(0).textContent = shift.type;
      newRow.insertCell(1).textContent = shift.date;
      newRow.insertCell(2).textContent = shift.time;
  });

  // Populate year and month selects
  populateYearAndMonth();

  document.getElementById('showAllShiftsButton').addEventListener('click', function() {
      const year = parseInt(document.getElementById('yearSelect').value);
      const month = parseInt(document.getElementById('monthSelect').value);
      showShiftsForMonth(year, month);
  });

  function populateYearAndMonth() {
      const yearSelect = document.getElementById('yearSelect');
      const monthSelect = document.getElementById('monthSelect');

      // Populate years
      for (let year = 2020; year <= new Date().getFullYear(); year++) {
          const option = document.createElement('option');
          option.value = year;
          option.textContent = year;
          yearSelect.appendChild(option);
      }

      // Populate months
      for (let month = 1; month <= 12; month++) {
          const option = document.createElement('option');
          option.value = month;
          option.textContent = month;
          monthSelect.appendChild(option);
      }
  }

  function showShiftsForMonth(year, month) {
      // Clear previous history
      historyTableBody.innerHTML = '';

      // Filter and display historical shifts based on selected year and month
      historicalShifts.forEach(shift => {
          const shiftDate = new Date(shift.date);
          // Months are zero-indexed in JavaScript, so we add 1 to match the select value
          if (shiftDate.getFullYear() === year && shiftDate.getMonth() + 1 === month) {
              const newRow = historyTableBody.insertRow();
              newRow.insertCell(0).textContent = shift.type;
              newRow.insertCell(1).textContent = shift.date;
              newRow.insertCell(2).textContent = shift.time;
          }
      });

      // Check if no shifts were found
      if (historyTableBody.rows.length === 0) {
          const newRow = historyTableBody.insertRow();
          const cell = newRow.insertCell(0);
          cell.colSpan = 3;
          cell.textContent = 'No shifts found for this month.';
          cell.style.textAlign = 'center';
      }
  }
});

//work deadline js
document.addEventListener('DOMContentLoaded', function() {
  const deadlineForm = document.getElementById('workDeadlineForm');
  const taskNameInput = document.getElementById('workTaskName');
  const deadlineDateInput = document.getElementById('workDeadlineDate');
  const deadlineTableBody = document.getElementById('workDeadlineTableBody');

  // Load existing deadlines from local storage
  loadDeadlines();

  deadlineForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const taskName = taskNameInput.value;
      const deadlineDate = deadlineDateInput.value;

      // Add deadline to local storage
      saveDeadline(taskName, deadlineDate);

      // Render deadline to the table
      renderDeadline(taskName, deadlineDate);

      // Reset form
      deadlineForm.reset();
  });

  function renderDeadline(taskName, deadlineDate) {
      const newRow = deadlineTableBody.insertRow();
      newRow.insertCell(0).textContent = taskName;
      newRow.insertCell(1).textContent = deadlineDate;

      const statusCell = newRow.insertCell(2);
      const status = checkDeadlineStatus(deadlineDate);
      statusCell.textContent = status;
  }

  function checkDeadlineStatus(deadlineDate) {
      const today = new Date();
      const deadline = new Date(deadlineDate);
      return deadline < today ? 'Overdue' : 'On Track';
  }

  function saveDeadline(taskName, deadlineDate) {
      const deadlines = JSON.parse(localStorage.getItem('deadlines')) || [];
      deadlines.push({ taskName, deadlineDate });
      localStorage.setItem('deadlines', JSON.stringify(deadlines));
  }

  function loadDeadlines() {
      const deadlines = JSON.parse(localStorage.getItem('deadlines')) || [];

      // Clear the table body to prevent duplicate entries
      deadlineTableBody.innerHTML = '';

      deadlines.forEach(deadline => {
          renderDeadline(deadline.taskName, deadline.deadlineDate);
      });
  }
});

