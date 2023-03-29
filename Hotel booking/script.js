let availableRooms = 5;
let roomPrice = 300;
let discount = 150;

let userBalance = 500;
let userHasDiscount = false;
let userRoomCount = 5;
const discountedPrice = roomPrice -= discount;

const paymentComplete = userBalance >= (userHasDiscount ? discountedPrice * userRoomCount : roomPrice * userRoomCount) && userRoomCount <= availableRooms;


console.log(paymentComplete);
