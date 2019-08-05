export default class D {
  constructor(...args) {
    this.date = new Date(...args);
  }

  year() {
    // Returns full 4-digit year of date
    return this.date.getFullYear();
  }

  month() {
    // Returns name of month rather than a number
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const thisMonth = months[this.date.getMonth()];
    return thisMonth;
  }

  day() {
    // Returns day of month 1 - 31
    return this.date.getDate();
  }

  hours() {
    // Returns hour of day 0 - 23
    // Does not make sense to offset by one because value of 1 = 1 AM, which currently makes sense
    return this.date.getHours();
  }

  min() {
    // Returns minute of hour 0 - 59
    // No offset because there the 60th minute is the next hour
    return this.date.getMinutes();
  }

  secs() {
    // Returns second of minute 0 - 59
    // No offset because there the 60th second is the next minute
    return this.date.getSeconds();
  }
}
