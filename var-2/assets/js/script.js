var elem = document.querySelector("#card-overview-0");
for (var i = 1; i < 5; i++) {
  // Create a copy of it
  var clone = elem.cloneNode(true);
  // Update the ID and add a class
  clone.id = "card-overview-" + i;
  clone.getElementsByTagName("canvas")[0].id = "myChart" + i;
  // Inject it into the DOM
  elem.after(clone);
}
var elem_2 = document.querySelector("#card-arrival-0");
for (var i = 1; i < 5; i++) {
  // Create a copy of it
  var clone_2 = elem_2.cloneNode(true);
  // Update the ID and add a class
  clone_2.id = "card-arrival-" + i;
  clone_2.getElementsByTagName("canvas")[0].id = "Arrival-myChart" + i;
  // Inject it into the DOM
  elem_2.after(clone_2);
}
$(".dropdown-menu.task button").on("click", function () {
  $(".dropdown-toggle.task").html($(this).html());
});
$(".dropdown-menu.week button").on("click", function () {
  $(".dropdown-toggle.week").html($(this).html());
});
$(".dropdown-menu.engagement button").on("click", function () {
  $(".dropdown-toggle.engagement").html($(this).html());
});
$(".dropdown-menu.categories button").on("click", function () {
  $(".dropdown-toggle.categories").html($(this).html());
});
$(".dropdown-menu.service button").on("click", function () {
  $(".dropdown-toggle.service").html($(this).html());
});
$(".dropdown-menu.sort button").on("click", function () {
  $(".dropdown-toggle.sort").html($(this).html());
});

Chart.pluginService.register({
  beforeDraw: function (chart) {
    var width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx;
    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";
    var text = chart.config.options.elements.center.text,
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;
    ctx.fillText(text, textX, textY);
    ctx.save();
  },
});

var configg = {
  type: "doughnut",
  data: {
    labels: ["Progress", ""],
    datasets: [
      {
        label: "# of Votes",
        data: [64, 36],
        backgroundColor: ["#F77706", "#FFF"],
        borderColor: ["#F77706", "#FFF"],
        borderWidth: 1,
      },
    ],
  },

  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: false,
          },
          gridLines: { display: false },
        },
      ],
    },
    legend: { display: false },
    elements: {
      display: false,
      center: {
        text: "64%", //set as you wish
      },
    },
  },
  onResize: function (myChart, size) {
    var showTicks = size.height < 140 ? false : true;

    myChart.options = {
      elements: {
        display: showTicks,
        center: {
          text: "64%", //set as you wish
          color: "#FFF",
        },
      },
    };
  },
};

var configg_2 = {
  type: "doughnut",
  data: {
    labels: ["Progress", ""],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 0],

        backgroundColor: ["#FFF"],
        borderColor: ["#BAC0FF"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: false,
          },
          gridLines: { display: false },
        },
      ],
    },
    legend: { display: false },
    elements: {
      center: {
        text: "0%", //set as you wish
      },
    },
  },
};
for (var i = 0; i < 5; i++) {
  var ctx = document.getElementById("myChart" + i);
  new Chart(ctx, configg);
  var ctx_2 = document.getElementById("Arrival-myChart" + i);
  new Chart(ctx_2, configg_2);
}
// $(document).ready(function () {
$(".card-overview").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5500,
  arrows: false,
  centerPadding: "25px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".card-arrival").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5500,
  arrows: false,
  centerPadding: "25px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// });

const lineChart = c3.generate({
  bindto: "#line-chart",
  data: {
    columns: [
      ["Post Engagements", 50000, 65000, 61000, 68500, 72000, 75000, 79000],
    ],
  },
  color: {
    pattern: ["#fff"],
  },
  point: {
    r: 3.5, // default is 2.5
  },
  legend: {
    show: false,
    position: "unset",
    inset: {
      anchor: "top-left",
      x: 20,
      y: 10,
      step: 1,
    },
  },
  padding: {
    left: 45,
    right: 0,
    bottom: 0,
  },
  axis: {
    x: {
      type: "category",
      categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    },
    y: {
      max: 80000,
      min: 40000,
      // Range includes padding, set 0 if no padding needed
      padding: { top: 0, bottom: 0, left: 0, right: 0 },
      tick: {
        format: function (x) {
          return x.toLocaleString();
        },
        values: [40000, 50000, 60000, 70000, 80000],
        count: 5,
        //  },
      },
    },
  },
});
function toggle(id) {
  chart.toggle(id);
}

d3.select(".d-legend")
  .insert("div", ".chart")
  .attr("class", "legend")
  .selectAll("span")
  .data(["Post Engagements"])
  .enter()
  .append("span")
  .attr("data-id", function (id) {
    return id;
  })
  .html(function (id) {
    return id;
  })
  .each(function (id) {
    d3.select(this).style("background-color", chart.color(id));
  });
