const {checkSeatStatus, getRowNumber, book} = require('../homework');

describe('checkSeatStatus', () => {
    it('checkSeatStatus is a function', () => {
        expect(typeof checkSeatStatus).toBe('function');
    });
    
    it('should throw a TypeError if first parameter is not a string', () => {
        expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
    });
    
    it('should throw a TypeError if second parameter is not a number', () => {
        expect(() => checkSeatStatus('bien', 'mal')).toThrow(new TypeError('Second parameter is not a number'));
    });

    it('should throw a TypeError if first parameter is not a letter', () => {
        expect(() => checkSeatStatus('hola', 3)).toThrow(new TypeError('First parameter is not a letter'));
    });

    it('should throw a TypeError if the letter is not from range A to E', () => {
        expect(() => checkSeatStatus('A', 4)).toThrow(new TypeError('The letter is not valid'));
    });

    it('should return booked true in row A and column 2', () => {
        expect(() => checkSeatStatus('A', 2).toBe(true));
    });
    
    it('should return booked false in row E and column 4', () => {
        expect( () => checkSeatStatus('E', 4).toBe(false));
    });
});

describe('getRowNumber', () => {
    it('should return 0 if the letter given is an A', () => {
        expect(getRowNumber('A')).toBe(0);
    });
    
    it('should return 2 if the letter given is a C', () => {
        expect(getRowNumber('C')).toBe(2);
    });
});

describe('book', () => {
    it('should return "Seat in XX successfully booked" if seat is available', () => {
        expect(book('E', 4)).toBe('Seat in E4 successfully booked')
    });

    it('should return "Seat in XX is already booked" if seat is booked', () => {
        expect(book('A', 2)).toBe('Seat in A2 is already booked')
    });
});