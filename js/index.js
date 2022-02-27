'use strict'
const emailMatch = new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$');
const domainMatch = new RegExp('https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*');
const dateMatch = new RegExp('^([0-9]{2})\\.([0-9]{2})\\.([1-2][0-9]{3})$');
const numMatch = new RegExp('^\d{4,14}$'); //не смогла найти рег выр для Беларуси, но даже это выдает false

class Validator {
    IsEmail(email) {
        if (emailMatch.test(email)) {
            return true;
        } else {
            return false;
        }
    }
    isDomain(domain) {
        if (emailMatch.test(domain)) {
            return true;
        } else {
            return false;
        }
    }
    isDate(date) {
        if (dateMatch.test(date)) {
            return true;
        } else {
            return false;
        }
    }
    isPhoneNum(num) {
        if (numMatch.test(num)) {
            return true;
        } else {
            return false;
        }
    }

}

const validator = new Validator();
console.log(validator.IsEmail('alisa@mail.ru'));
console.log(validator.isDomain('https//itgirlschool.ru'));
console.log(validator.isDate('25.02.2000'));
console.log(validator.isPhoneNum('80292032938'));

class ValidatorStatic {
    static IsEmail(email) {
        if (emailMatch.test(email)) {
            return true;
        } else {
            return false;
        }
    }
    static isDomain(domain) {
        if (emailMatch.test(domain)) {
            return true;
        } else {
            return false;
        }
    }
    static isDate(date) {
        if (dateMatch.test(date)) {
            return true;
        } else {
            return false;
        }
    }
    static isPhoneNum(num) {
        if (numMatch.test(num)) {
            return true;
        } else {
            return false;
        }
    }

}

console.log(ValidatorStatic.IsEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('https//www.itgirlschool.ru'));
console.log(ValidatorStatic.isDate('25.02.2000'));
console.log(ValidatorStatic.isPhoneNum('80292032938'));