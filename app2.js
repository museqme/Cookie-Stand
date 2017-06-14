'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
'3pm', '4pm',  '5pm', '6pm', '7pm', '8pm'];

var store = [];

var cookietable = document.getElementById('cookiestand');

function CookieShop(locName, minCusHour, maxCusHour, avgCookiesPerCustomer) {
  this.locName = locName;
  this.minCusHour = minCusHour;
  this.maxCusHour = maxCusHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalDailySales = 0;
  this.randomCustomersPerHours = [];
  this.totalCookiesPerHour = [];
  store.push(this);
};

CookieShop.prototype.calcCustomersPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var avgCusHour = (Math.floor(Math.random() * (this.maxCusHour - this.minCusHour + 1)) + this.minCusHour);
    // console.log(this.randomCustomersPerHours);
    this.randomCustomersPerHours.push(avgCusHour);
    console.log(avgCusHour);
  }
};
CookieShop.prototype.calcCookiesThisHour = function () {
  this.calcCustomersPerHour();
  for (var i = 0; i < hours.length; i++) {
    var avgCookiesPerCustomer = (Math.ceil(this.randomCustomersPerHours[i] * this.avgCookiesPerCustomer));
    console.log(this.avgCookiesPerCustomer);
    this.totalCookiesPerHour.push(avgCookiesPerCustomer);
    this.totalDailySales += avgCookiesPerCustomer;
  }
  return this.totalCookiesPerHour;
};

// Rendering Content
CookieShop.prototype.render = function() {
  // var trEl = document.createElement('tr');

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locName;
  trEl.appendChild(tdEl);
  for (var i = 0; i < this.totalCookiesPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  cookietable.appendChild(trEl);

};

var pike = new CookieShop('Pike Place Market', 23, 65, 6.3);
var seaTac = new CookieShop('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new CookieShop('Seattle Center', 11, 38, 3.7);
var capHill = new CookieShop('Capital Hill', 20, 38, 2.3);
var alki = new CookieShop('Alki', 2, 16, 4.6);

function renderStore() {
  var tdEl = document.createElement('td');
  tdEl.textContent = '';
  cookietable.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    cookietable.appendChild(tdEl);
  }
  cookietable.appendChild(tdEl);

  for (var i = 0; i < store.length; i++){
    store[i].render();
  }
}
for (var i = 0; i < store.length; i++){
  store[i].calcCookiesThisHour();
}
renderStore();
