let availableRooms = 5;
let roomPrice = 300;
let discount = 150;

let userBalance = 500;
let userHasDiscount = false;
let userRoomCount = 5;

if (discount) {
    roomPrice - discount
}

const paymentComplete = userBalance >= roomPrice * userRoomCount && userRoomCount <= availableRooms;


console.log(paymentComplete);
