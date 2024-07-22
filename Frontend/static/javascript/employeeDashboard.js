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








