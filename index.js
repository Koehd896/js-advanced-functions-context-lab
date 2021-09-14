/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(records) {
    return records.map(record => createEmployeeRecord(record));
}

function createTimeInEvent(date) {
    const record = { 
        type: "TimeIn",
        hour: parseInt(date.split(" ")[1], 10),
        date: date.split(" ")[0]
    }
    this.timeInEvents.push(record);
    return this;
}

function createTimeOutEvent(date) {
    const record = { 
        type: "TimeOut",
        hour: parseInt(date.split(" ")[1], 10),
        date: date.split(" ")[0]
    }
    this.timeOutEvents.push(record);
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
}

function findEmployeeByFirstName(employees, name) {
    return employees.find(employee => employee.firstName === name);
}

function calculatePayroll(records) {
    const wages = records.map(employee => allWagesFor(employee))
    return reduce.reduce((previous, current) => previous + current);
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}