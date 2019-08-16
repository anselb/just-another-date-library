# Just Another Date Library

A library with some miscellaneous date things. Some methods were created with the intention of making them more clear. For example, `Date.prototype.getMonth()` returning a month index vs `month()` returning the actual name of the month, and `Date.prototype.getDate()` sounding like it returns the whole date vs `day()` actually returning the day of the month.

## D Class
  - `new D()` - A class that extends the Date prototype. D will have all the same Date prototype methods as well as new methods that do similar and new things.

## D Methods
  - `year()` - Returns the 4-digit year of `D`'s date value.
  - `month()` - Returns the name of the month of `D`'s date value.
  - `day()` - Returns the day of the month of `D`'s date value.
  - `hour()` - Returns the hour of the day of `D`'s date value.
  - `min()` - Returns the minute of the hours of `D`'s date value.
  - `sec()` - Returns the second of the minute of `D`'s date value.
  - `format(maskedStr)` - Returns a formatted string replacing characters in the string with date values.
     - `Y` - Y is replaced by the full year
     - `y` - y is replaced by the last 2 digits of the year
     - `M` - M is replaced by the full month
     - `m` - m is replaced by the first 3 characters of the month
     - `D` - D is replaced by the day, padded with 2 zeros
     - `d` - d is replaced by the day, without padding
     - `H` - H is replaced by the hour, padded with 2 zeros
     - `h` - h is replaced by the hour, without padding
     - `I` - I is replaced by the minute, padded with 2 zeros
     - `i` - i is replaced by the minute, without padding
     - `S` - S is replaced by the second, padded with 2 zeros
     - `s` - s is replaced by the second, without padding
  - `when(now)` - Returns how much time has elapsed in either years, months, or days from the `now` parameter to the date value of the `D` class.
