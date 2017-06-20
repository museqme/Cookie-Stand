'use strict';
// var globalVariables = 'value', 0, true, []
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
  '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookietable = document.getElementById('cookiestand');
var form = document.getElementById('add-location');


// OBJECT //
//constructorWith(arguments, inside, parenthesis) {
  //this.properties = properties;
  //this.areListed = areListed;
  //this.withIn = withIn;
  //this.objectProperties = objectProperties;
  //ObjectName.all.push(this);<------Array Created. will use in instances below.
//}
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
CookieShop.all = [];
// METHOD //
//ObjectName.prototype.valueOf = function() {
  //for (loop i = 0; i < array.length; i++) {
    //this.propertyArray.push(random(this.property, this.property));<----Array created. will need for method below.
  //}
//};
CookieShop.prototype.calcCustomersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.randomCustomersPerHours.push(random(this.minCusHour, this.maxCusHour));
  }
};
// METHOD //
//ObjectName.prototype.secondValue = function() {
  //this.parentParentProperty();
    //for (loop i = 0; i < array.length; i++) {
      //var newVariable = Math.ceil(this.maxIntegerFromParentMethod[i] * this.maxInteger);
      //this.arrayProperty.push(newVariable);
      //this.propertyNumber += newVariable;<------ / += x=x+y
CookieShop.prototype.calcCookiesThisHour = function() {
  this.calcCustomersPerHour();
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.ceil(this.randomCustomersPerHours[i] * this.avgCookiesPerCustomer);
    this.totalCookiesPerHour.push(oneHour);
    this.totalDailySales += oneHour;
  }
};
// RENDERING CONTENT //
// LOCATION CELL COLUMN //
CookieShop.prototype.render = function() {
  this.calcCookiesThisHour();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locName;
  trEl.appendChild(tdEl);
//
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
// ARRAY OF ALL STORES //
CookieShop.all = [];
new CookieShop('Pike Place Market', 23, 65, 6.3);
new CookieShop('SeaTac Airport', 3, 25, 1.2);
new CookieShop('Seattle Center', 11, 38, 3.7);
new CookieShop('Capital Hill', 20, 38, 2.3);
new CookieShop('Alki', 2, 16, 4.6);

renderTable ();

makeFooterRow ();

function handleForm(e) {
  console.log('event object', e);
  e.preventDefault();
  var loc = e.target.locaName.value;
  var min = parseInt(e.target.min.value);
  var max = parseInt(e.target.max.value);
  var avg = parseFloat(e.target.avg.value);

  //Prevent empty fields
  // if(!loc || !min || !max || !avg) {
  //   return alert('All fields must be filled');
  // }
  if(typeof min !== 'number') {
    return alert('Make sure number fields are ONLY numbers.');
  }

  for (var i = 0; i < CookieShop.all.length; i++) {
    if(loc === CookieShop.all[i].locName) {
      // reassigning the starter properties //
      CookieShop.all[i].minCusHour = min;
      CookieShop.all[i].maxCusHour = max;
      CookieShop.all[i].avgCookiesPerCustomer = avg;

      //zeroing out the results of our calculations
      CookieShop.all[i].randomCustomersPerHours = [];
      CookieShop.all[i].totalDailySales = 0;
      CookieShop.all[i].totalCookiesPerHour = [];
      this.totalCookiesPerHour = [];

      //doing the calculations
      CookieShop.all[i].calcCookiesThisHour ();
      clearForm ();
      renderTable ();
      makeFooterRow();
      return;
    }
  }

  new CookieShop(loc, min, max, avg);

  function clearForm () {
    e.target.locaName.value = null;
    e.target.min.value = null;
    e.target.max.value = null;
    e.target.avg.value = null;
  }

  clearForm ();

  renderTable ();

  makeFooterRow();
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// CREATING HANDLE FORM //

// CREATE HEADER ROW //
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);
//ASSIG
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
//
  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  cookietable.appendChild(trEl);
}
// MAKE FAR LEFT LEFT COLUMNS //
function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);

  var totalOfTotals = 0;
  var hourlyTotal = 0;

//  HOUR LOOP  //
  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    // HOURLY TOTAL PER LOCATION //
    for (var g = 0; g < CookieShop.all.length; g++) {
      hourlyTotal += CookieShop.all[g].totalCookiesPerHour[i];
      totalOfTotals += CookieShop.all[g].totalCookiesPerHour[i];
    }
    // HEADER FOR HOULY TOTAL //
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = totalOfTotals;
  trEl.appendChild(thEl);

  cookietable.appendChild(trEl);
}
function renderTable (){
  cookietable.innerHTML = '';
  makeHeaderRow();
  for(var i = 0; i < CookieShop.all.length; i++) {
    CookieShop.all[i].render();
  }
}

form.addEventListener('submit', handleForm);
