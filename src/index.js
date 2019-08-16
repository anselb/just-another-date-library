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

  hour() {
    // Returns hour of day 0 - 23
    // Does not make sense to offset by one because value of 1 = 1 AM, which currently makes sense
    return this.date.getHours();
  }

  min() {
    // Returns minute of hour 0 - 59
    // No offset because there the 60th minute is the next hour
    return this.date.getMinutes();
  }

  sec() {
    // Returns second of minute 0 - 59
    // No offset because there the 60th second is the next minute
    return this.date.getSeconds();
  }

  format(maskedStr = '') {
    // If nothing or empty string is passed in, return default date string
    if (maskedStr === '') {
      return `${this.month()} ${this.day()}, ${this.year()}`;
    }

    const newString = maskedStr.split('');

    for (let i = 0; i < newString.length; i += 1) {
      const char = newString[i];
      // Y is replaced by the full year
      if (char === 'Y') {
        newString[i] = `${this.year()}`;
      // y is replaced by the last 2 digits of the year
      } else if (char === 'y') {
        newString[i] = `${this.year()}`.slice(2, 4);

      // M is replaced by the full month
      } else if (char === 'M') {
        newString[i] = `${this.month()}`;
      // m is replaced by the first 3 characters of the month
      } else if (char === 'm') {
        newString[i] = `${this.month()}`.slice(0, 3);

      // D is replaced by the day, padded with 2 zeros
      } else if (char === 'D') {
        newString[i] = `${this.day()}`.padStart(2, '0');
      // d is replaced by the day, without padding
      } else if (char === 'd') {
        newString[i] = `${this.day()}`;

      // H is replaced by the hour, padded with 2 zeros
      } else if (char === 'H') {
        newString[i] = `${this.hour()}`.padStart(2, '0');
      // h is replaced by the hour, without padding
      } else if (char === 'h') {
        newString[i] = `${this.hour()}`;

      // I is replaced by the minute, padded with 2 zeros
      } else if (char === 'I') {
        newString[i] = `${this.min()}`.padStart(2, '0');
      // i is replaced by the minute, without padding
      } else if (char === 'i') {
        newString[i] = `${this.min()}`;

      // S is replaced by the second, padded with 2 zeros
      } else if (char === 'S') {
        newString[i] = `${this.sec()}`.padStart(2, '0');
      // s is replaced by the second, without padding
      } else if (char === 's') {
        newString[i] = `${this.sec()}`;
      }
    }

    return newString.join('');
  }

  when(now = new Date()) {
    // Year difference
    const nowYear = now.getFullYear();
    const dateYear = this.date.getFullYear();
    if (nowYear !== dateYear) {
      if (nowYear < dateYear) {
        return `${dateYear - nowYear} year${(dateYear - nowYear) === 1 ? '' : 's'} from now`;
      }
      return `${nowYear - dateYear} year${(nowYear - dateYear) === 1 ? '' : 's'} ago`;
    }

    // Month difference
    const nowMonth = now.getMonth();
    const dateMonth = this.date.getMonth();
    if (nowMonth !== dateMonth) {
      if (nowMonth < dateMonth) {
        return `${dateMonth - nowMonth} month${(dateMonth - nowMonth) === 1 ? '' : 's'} from now`;
      }
      return `${nowMonth - dateMonth} month${(nowMonth - dateMonth) === 1 ? '' : 's'} ago`;
    }

    // Day difference
    const nowDay = now.getDate();
    const dateDay = this.date.getDate();
    if (nowDay !== dateDay) {
      if (nowDay < dateDay) {
        return `${dateDay - nowDay} day${(dateDay - nowDay) === 1 ? '' : 's'} from now`;
      }
      return `${nowDay - dateDay} day${(nowDay - dateDay) === 1 ? '' : 's'} ago`;
    }

    return 'Today';
  }
}
