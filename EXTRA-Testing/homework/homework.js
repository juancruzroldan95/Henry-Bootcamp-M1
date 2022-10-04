const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
];

function getRowNumber(letter) {
    return letter.charCodeAt(0) - 65;
}

function getSeat(letter, number) {
    const numberRow = getRowNumber(letter);
    const numberCol = number - 1;
    const seat = layout[numberRow][numberCol];
    return seat;
}

function checkSeatStatus(row, column) {
    if((typeof row) !== 'string'){
        throw new TypeError('First parameter is not a string');
    }
    if((typeof column) !== 'number'){
        throw new TypeError('Second parameter is not a number');
    }
    if(row.length !== 1){
        throw new TypeError('First parameter is not a letter');
    }
    if(row !== 'A' || row !== 'B' || row !== 'C' || row !== 'D' || row !== 'E'){
        throw new TypeError('The letter is not valid');
    }

    let layoutRow = getRowNumber(row);
    let layoutCol = column - 1;
    return layout[layoutRow][layoutCol].booked;
}

function book(row, column) {
    let seatStatus = checkSeatStatus(row, column);

    if(seatStatus === false){
        const seat = getSeat(row, column);
        seat.booked = true;
        // return "Seat in " + row + column + " successfully booked";
        return `Seat in ${row}${column} successfully booked`;
    }
    if(seatStatus === true) {
        // return "Seat in " + row + column + " is already booked";
        return `Seat in ${row}${column} is already booked`;
    }
}

module.exports = {
    checkSeatStatus,
    getRowNumber,
    book
}