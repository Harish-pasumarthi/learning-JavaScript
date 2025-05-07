'use strict';

const bookings = [];
const createBookings = function (a = 'A1', b = 'hi', c = 'rama') {
  const booking = {
    a,
    b,
    c,
  };
  console.log(booking);
  bookings.push(booking);
};
console.log(bookings);
createBookings();
