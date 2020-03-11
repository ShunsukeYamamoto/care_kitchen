window.onload = function() {

  // エネルギー
  var energyData = {
              labels:  ["エネルギー","不足分"], 
              datasets: [{
                          data: [0,900],
                          borderWidth: 1,
                          backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                          hoverBackgroundColor: ["#df5f4a","#fff"],
                          borderColor: "#2a324e"
                        }]
              }
  var ctx = document.getElementById("recipeEnergyChart").getContext("2d");

  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: energyData,
    options: {
      cutoutPercentage: 60,
      legend:{
        display: false
      }
    }
  });

  // タンパク質
  var proteinData = {
    labels:  ["タンパク質","不足分"], 
    datasets: [{
                data: [0,22],
                borderWidth: 1,
                backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                hoverBackgroundColor: ["#df5f4a","#fff"],
                borderColor: "#2a324e"
              }]
    }
  var ctx = document.getElementById("recipeProteinChart").getContext("2d");

  var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: proteinData,
  options: {
  cutoutPercentage: 60,
  legend:{
  display: false
  }
  }
  });

  // 脂質
  var fatData = {
    labels:  ["脂質","不足分"], 
    datasets: [{
                data: [0,23],
                borderWidth: 1,
                backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                hoverBackgroundColor: ["#df5f4a","#fff"],
                borderColor: "#2a324e"
              }]
    }
  var ctx = document.getElementById("recipeFatChart").getContext("2d");

  var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: fatData,
  options: {
    cutoutPercentage: 60,
    legend:{
    display: false
    }
  }
  });

  // 炭水化物
  var carbonData = {
    labels:  ["炭水化物","不足分"], 
    datasets: [{
                data: [0,135],
                borderWidth: 1,
                backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                hoverBackgroundColor: ["#df5f4a","#fff"],
                borderColor: "#2a324e"
              }]
    }
  var ctx = document.getElementById("recipeCarbonChart").getContext("2d");

  var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: carbonData,
  options: {
    cutoutPercentage: 60,
    legend:{
    display: false
    }
  }
  });

  // ビタミンA
  var vitaminAData = {
    labels:  ["ビタミンA","不足分"], 
    datasets: [{
                data: [0,300],
                borderWidth: 1,
                backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                hoverBackgroundColor: ["#df5f4a","#fff"],
                borderColor: "#2a324e"
              }]
    }
  var ctx = document.getElementById("recipeVitaminAChart").getContext("2d");

  var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: vitaminAData,
  options: {
    cutoutPercentage: 60,
    legend:{
    display: false
    }
  }
  });

  // ビタミンB1
  var vitaminB1Data = {
    labels:  ["ビタミンB1","不足分"], 
    datasets: [{
                data: [0.0,0.4],
                borderWidth: 1,
                backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                hoverBackgroundColor: ["#df5f4a","#fff"],
                borderColor: "#2a324e"
              }]
    }
  var ctx = document.getElementById("recipeVitaminB1Chart").getContext("2d");

  var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: vitaminB1Data,
  options: {
    cutoutPercentage: 60,
    legend:{
    display: false
    }
  }
  });

  // ビタミンC
  var vitaminCData = {
    labels:  ["ビタミンC","不足分"], 
    datasets: [{
                data: [0,33],
                borderWidth: 1,
                backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                hoverBackgroundColor: ["#df5f4a","#fff"],
                borderColor: "#2a324e"
              }]
    }
  var ctx = document.getElementById("recipeVitaminCChart").getContext("2d");

  var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: vitaminCData,
  options: {
    cutoutPercentage: 60,
    legend:{
    display: false
    }
  }
  });

  // カルシウム
  var calciumData = {
    labels:  ["カルシウム","不足分"], 
    datasets: [{
                data: [0,250],
                borderWidth: 1,
                backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                hoverBackgroundColor: ["#df5f4a","#fff"],
                borderColor: "#2a324e"
              }]
    }
  var ctx = document.getElementById("recipeCalciumChart").getContext("2d");

  var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: calciumData,
  options: {
    cutoutPercentage: 60,
    legend:{
    display: false
    }
  }
  });

  // 食物繊維
  var dietaryFiberData = {
    labels:  ["食物繊維","不足分"], 
    datasets: [{
                data: [0,8],
                borderWidth: 1,
                backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                hoverBackgroundColor: ["#df5f4a","#fff"],
                borderColor: "#2a324e"
              }]
    }
  var ctx = document.getElementById("recipeDietaryFiberChart").getContext("2d");

  var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: dietaryFiberData,
  options: {
    cutoutPercentage: 60,
    legend:{
    display: false
    }
  }
  });

  // 塩分
  var saltData = {
    labels:  ["塩分","不足分"], 
    datasets: [{
                data: [0.0,2.5],
                borderWidth: 1,
                backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                hoverBackgroundColor: ["#df5f4a","#fff"],
                borderColor: "#2a324e"
              }]
    }
  var ctx = document.getElementById("recipeSaltChart").getContext("2d");

  var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: saltData,
  options: {
    cutoutPercentage: 60,
    legend:{
    display: false
    }
  }
  });

};
