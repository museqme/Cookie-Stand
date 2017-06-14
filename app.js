'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm',  '5pm', '6pm', '7pm', '8pm'];

// var cookiesSold = [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57, 29];

var pikePlaceMkt = {
  locationName: 'Pike Place Market',
  minCusHour: 23,
  maxCusHour: 65,
  avgCookiesPerCustomer: 6.3,
  totalDailySales: 0,
  randomCustomersPerHours: [],
  totalCookiesPerHour: [],
  calcCustomersPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var avgCusHour = (Math.floor(Math.random() * (this.maxCusHour - this.minCusHour + 1)) + this.minCusHour);
      console.log(this.randomCustomersPerHours[i]);
      this.randomCustomersPerHours.push(avgCusHour);
    }
  },

  randomCookiesPerHour: [],
  calcCookiesThisHour: function () {
    this.calcCustomersPerHour();
      for (var i = 0; i < hours.length; i++) {
        var avgCookiesPerCustomer = (Math.ceil(this.randomCustomersPerHours[i] * this.avgCookiesPerCustomer));
        console.log(this.avgCookiesPerCustomer);
        this.totalCookiesPerHour.push(avgCookiesPerCustomer);
      }
    },

  cookiesEachHour: [],
  render: function () {
    var ulEl = document.getElementById('locationName');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      console.log('Hello');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  },
};
pikePlaceMkt.calcCustomersPerHour();

pikePlaceMkt.calcCookiesThisHour();

pikePlaceMkt.render();


var seaTac = {
  locationName: 'SeaTac Airport',
  minCusHour: 3,
  maxCusHour: 24,
  avgCookiesPerCustomer: 1.2,
  totalDailySales: 0,
  randomCustomersPerHours: [],
  totalCookiesPerHour: [],
  calcCustomersPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var avgCusHour = (Math.floor(Math.random() * (this.maxCusHour - this.minCusHour + 1)) + this.minCusHour);
      console.log(this.randomCustomersPerHours[i]);
      this.randomCustomersPerHours.push(avgCusHour);
    }
  },

  randomCookiesPerHour: [],
  calcCookiesThisHour: function () {
      for (var i = 0; i < hours.length; i++) {
        var avgCookiesPerCustomer = (Math.ceil(this.randomCustomersPerHours[i] * this.avgCookiesPerCustomer));
        console.log(this.avgCookiesPerCustomer);
        this.totalCookiesPerHour.push(avgCookiesPerCustomer);
      }
    },

  cookiesEachHour: [],
  render: function () {
    var ulEl = document.getElementById('locationName2');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      console.log('Hello');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  },
};
seaTac.calcCustomersPerHour();

seaTac.calcCookiesThisHour();

seaTac.render();

var seaCenter = {
  locationName: 'Seattle Center',
  minCusHour: 11,
  maxCusHour: 38,
  avgCookiesPerCustomer: 3.7,
  totalDailySales: 0,
  randomCustomersPerHours: [],
  totalCookiesPerHour: [],
  calcCustomersPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var avgCusHour = (Math.floor(Math.random() * (this.maxCusHour - this.minCusHour + 1)) + this.minCusHour);
      console.log(this.randomCustomersPerHours[i]);
      this.randomCustomersPerHours.push(avgCusHour);
    }
  },

  randomCookiesPerHour: [],
  calcCookiesThisHour: function () {
      for (var i = 0; i < hours.length; i++) {
        var avgCookiesPerCustomer = (Math.ceil(this.randomCustomersPerHours[i] * this.avgCookiesPerCustomer));
        console.log(this.avgCookiesPerCustomer);
        this.totalCookiesPerHour.push(avgCookiesPerCustomer);
      }
    },

  cookiesEachHour: [],
  render: function () {
    var ulEl = document.getElementById('locationName3');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      console.log('Hello');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  },
};
seaCenter.calcCustomersPerHour();

seaCenter.calcCookiesThisHour();

seaCenter.render();


var capHill = {
  locationName: 'Capital Hill',
  minCusHour: 20,
  maxCusHour: 38,
  avgCookiesPerCustomer: 2.3,
  totalDailySales: 0,
  randomCustomersPerHours: [],
  totalCookiesPerHour: [],
  calcCustomersPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var avgCusHour = (Math.floor(Math.random() * (this.maxCusHour - this.minCusHour + 1)) + this.minCusHour);
      console.log(this.randomCustomersPerHours[i]);
      this.randomCustomersPerHours.push(avgCusHour);
    }
  },

  randomCookiesPerHour: [],
  calcCookiesThisHour: function () {
      for (var i = 0; i < hours.length; i++) {
        var avgCookiesPerCustomer = (Math.ceil(this.randomCustomersPerHours[i] * this.avgCookiesPerCustomer));
        console.log(this.avgCookiesPerCustomer);
        this.totalCookiesPerHour.push(avgCookiesPerCustomer);
      }
    },

  cookiesEachHour: [],
  render: function () {
    var ulEl = document.getElementById('locationName4');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      console.log('Hello');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  },
};
capHill.calcCustomersPerHour();

capHill.calcCookiesThisHour();

capHill.render();

var alki = {
  locationName: 'Alki',
  minCusHour: 2,
  maxCusHour: 16,
  avgCookiesPerCustomer: 1.2,
  totalDailySales: 0,
  randomCustomersPerHours: [],
  totalCookiesPerHour: [],
  calcCustomersPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var avgCusHour = (Math.floor(Math.random() * (this.maxCusHour - this.minCusHour + 1)) + this.minCusHour);
      console.log(this.randomCustomersPerHours[i]);
      this.randomCustomersPerHours.push(avgCusHour);
    }
  },

  randomCookiesPerHour: [],
  calcCookiesThisHour: function () {
      for (var i = 0; i < hours.length; i++) {
        var avgCookiesPerCustomer = (Math.ceil(this.randomCustomersPerHours[i] * this.avgCookiesPerCustomer));
        console.log(this.avgCookiesPerCustomer);
        this.totalCookiesPerHour.push(avgCookiesPerCustomer);
      }
    },

  cookiesEachHour: [],
  render: function () {
    var ulEl = document.getElementById('locationName5');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      console.log('Hello');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  },
};
alki.calcCustomersPerHour();

alki.calcCookiesThisHour();

alki.render();
