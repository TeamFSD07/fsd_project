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
    background: 'transparent',
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
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Laptop', 'Keyboard', 'Monitor', 'Mouse', 'Cable'],
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Count',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
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
      name: 'Purchase Orders',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Sales Orders',
      data: [11, 32, 45, 32, 34, 52, 41],
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
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
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
      colors: '#f5f7ff',
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
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
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

  //employee add
  var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    userName = document.getElementById("name"),
    age = document.getElementById("age"),
    city = document.getElementById("city"),
    email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    post = document.getElementById("post"),
    sDate = document.getElementById("sDate"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    newUserBtn = document.getElementById("newUserBtn"),
    userFormModal = document.getElementById("userForm"),
    readDataModal = document.getElementById("readData"),
    closeModalButtons = document.querySelectorAll(".close");

let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : [];

let isEdit = false, editId;
showInfo();

newUserBtn.addEventListener('click', () => {
    submitBtn.innerText = 'Submit';
    isEdit = false;
    imgInput.src = "../static/images/Profile Icon.webp";
    form.reset();
    userFormModal.style.display = "block";
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        userFormModal.style.display = "none";
        readDataModal.style.display = "none";
    });
});

file.onchange = function() {
    if (file.files[0].size < 1000000) { // 1MB = 1000000
        var fileReader = new FileReader();
        fileReader.onload = function(e) {
            imgInput.src = e.target.result;
        }
        fileReader.readAsDataURL(file.files[0]);
    } else {
        alert("This file is too large!");
    }
}

function showInfo() {
    document.querySelectorAll('.employeeDetails').forEach(info => info.remove());
    getData.forEach((element, index) => {
        let createElement = `<tr class="employeeDetails">
            <td>${index + 1}</td>
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.employeeName}</td>
            <td>${element.employeeAge}</td>
            <td>${element.employeeCity}</td>
            <td>${element.employeeEmail}</td>
            <td>${element.employeePhone}</td>
            <td>${element.employeePost}</td>
            <td>${element.startDate}</td>
            <td>
                <button class="btn" onclick="readInfo('${element.picture}', '${element.employeeName}', '${element.employeeAge}', '${element.employeeCity}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}', '${element.startDate}')"><i class="icon-eye"></i></button>
                <button class="btn" onclick="editInfo(${index}, '${element.picture}', '${element.employeeName}', '${element.employeeAge}', '${element.employeeCity}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}', '${element.startDate}')"><i class="icon-edit"></i></button>
                <button class="btn" onclick="deleteInfo(${index})"><i class="icon-trash"></i></button>
            </td>
        </tr>`;
        userInfo.innerHTML += createElement;
    });
}
showInfo();

function readInfo(pic, name, age, city, email, phone, post, sDate) {
    document.querySelector('.showImg').src = pic;
    document.querySelector('#showName').value = name;
    document.querySelector("#showAge").value = age;
    document.querySelector("#showCity").value = city;
    document.querySelector("#showEmail").value = email;
    document.querySelector("#showPhone").value = phone;
    document.querySelector("#showPost").value = post;
    document.querySelector("#showsDate").value = sDate;
    readDataModal.style.display = "block";
}

function editInfo(index, pic, name, Age, City, Email, Phone, Post, Sdate) {
    isEdit = true;
    editId = index;
    imgInput.src = pic;
    userName.value = name;
    age.value = Age;
    city.value = City;
    email.value = Email;
    phone.value = Phone;
    post.value = Post;
    sDate.value = Sdate;
    submitBtn.innerText = "Update";
}

function deleteInfo(index) {
    if (confirm("Are you sure want to delete?")) {
        getData.splice(index, 1);
        localStorage.setItem("userProfile", JSON.stringify(getData));
        showInfo();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const information = {
        picture: imgInput.src === undefined ? "./image/Profile Icon.webp" : imgInput.src,
        employeeName: userName.value,
        employeeAge: age.value,
        employeeCity: city.value,
        employeeEmail: email.value,
        employeePhone: phone.value,
        employeePost: post.value,
        startDate: sDate.value
    };

    if (!isEdit) {
        getData.push(information);
    } else {
        isEdit = false;
        getData[editId] = information;
    }

    localStorage.setItem('userProfile', JSON.stringify(getData));
    showInfo();
    form.reset();
    imgInput.src = "../static/images/Profile Icon.webp";
    userFormModal.style.display = "none";
});




