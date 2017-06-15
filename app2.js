'use strict';
// var globalVariables = 'value', 0, true, []
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
  '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookietable = document.getElementById('cookiestand');

// constructor objectWith(arguments, inside, parenthesis) {
  //this.properties = properties;
  //this.areListed = areListed;
  //this.withIn = withIn;
  //this.objectProperties = objectProperties;
  //FunctionName.all.push(this);
function CookieShop(locName, minCusHour, maxCusHour, avgCookiesPerCustomer) {
  this.locName = locName;
  this.minCusHour = minCusHour;
  this.maxCusHour = maxCusHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.randomCustomersPerHours = [];
  this.totalCookiesPerHour = [];
  this.totalDailySales = 0;
  CookieShop.all.push(this);
}
//MethodsObjectName.prototype.valueOf = function()
CookieShop.prototype.calcCustomersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.randomCustomersPerHours.push(random(this.minCusHour, this.avgCookiesPerCustomer));
  }
};

CookieShop.prototype.calcCookiesThisHour = function() {
  this.calcCustomersPerHour();
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.ceil(this.randomCustomersPerHours[i] * this.avgCookiesPerCustomer);
    this.totalCookiesPerHour.push(oneHour);
    this.totalDailySales += oneHour;
  }
};
// Rendering Content
CookieShop.prototype.render = function() {
  this.calcCookiesThisHour();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locName;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  var thEl = document.createElement('th');
  thEl.textContent = this.totalDailySales;
  trEl.appendChild(thEl);
  cookietable.appendChild(trEl);
};

CookieShop.all = [];
new CookieShop('Pike Place Market', 23, 65, 6.3);
new CookieShop('SeaTac Airport', 3, 24, 1.2);
new CookieShop('Seattle Center', 11, 38, 3.7);
new CookieShop('Capital Hill', 20, 38, 2.3);
new CookieShop('Alki', 2, 16, 4.6);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Location Totals';
  trEl.appendChild(thEl);
  cookietable.appendChild(trEl);
}

function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals for All Locations';
  trEl.appendChild(thEl);
  var totalOfTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (var g = 0; g < CookieShop.all.length; g++) {
      hourlyTotal += CookieShop.all[g].totalCookiesPerHour[i];
      totalOfTotals += CookieShop.all[g].totalCookiesPerHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = totalOfTotals;
  trEl.appendChild(thEl);
  cookietable.appendChild(trEl);
}

(function renderTable(){
  makeHeaderRow();
  for(var i = 0; i < CookieShop.all.length; i++) {
    CookieShop.all[i].render();
  }
  makeFooterRow();
})();

//   for (var i = 0; i < store.length; i++){
//     store[i].render();
//   }
// }
// for (var i = 0; i < store.length; i++){
//   store[i].calcCookiesThisHour();
// }
// renderStore();
