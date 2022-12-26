// APEXCHART
var options = {
  series: [
    {
      name: "Ayer",
      data: [31, 31, 31, 31, 31, 31, 100, 31, 31, 100],
      color: "#ff0099",
    },
    {
      name: "Hoy",
      data: [11, 32, 45, 32, 34, 52, 41, 31, 31, 100],
      color: "#1ebcf5",
    },
    
  ],
 
  chart: {
    height: 330,
    type: "area",
  },

};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
