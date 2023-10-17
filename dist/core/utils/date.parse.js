"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSundaysInRageDates = exports.makeRangeDate = exports.secondsToHours = exports.readdateToDate = exports.querydateToDate = exports.timestampToDate = exports.dateToTimestamp = exports.rangeDateToQuery = exports.dateToRead = exports.dateToQuery = void 0;
function dateToQuery(date) {
    if (date) {
        return `${date.getFullYear()}-${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
    }
    return null;
}
exports.dateToQuery = dateToQuery;
function dateToRead(date) {
    if (date) {
        return `${date.getDate() < 10 ? '0' : ''}${date.getDate()}-${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}-${date.getFullYear()}`;
    }
    return null;
}
exports.dateToRead = dateToRead;
function rangeDateToQuery(dates) {
    if (Array.isArray(dates) && dates.length == 2) {
        return `${dateToQuery(dates[0])}_${dateToQuery(dates[1])}`;
    }
    return null;
}
exports.rangeDateToQuery = rangeDateToQuery;
function dateToTimestamp(date) {
    if (date) {
        return date.getTime();
    }
    return 0;
}
exports.dateToTimestamp = dateToTimestamp;
function timestampToDate(timestamp) {
    if (timestamp > 0) {
        const mDate = new Date(timestamp);
        return isNaN(mDate.getTime()) ? null : mDate;
    }
    else {
        return null;
    }
}
exports.timestampToDate = timestampToDate;
function querydateToDate(stringDate) {
    const reg = /(\d{4})-(\d{2})-(\d{2})/;
    if (reg.test(stringDate)) {
        const mDate = new Date(`${stringDate} 00:00:00`);
        return isNaN(mDate.getTime()) ? null : mDate;
    }
    else {
        return null;
    }
}
exports.querydateToDate = querydateToDate;
function readdateToDate(stringDate) {
    const reg = /(\d{2})-(\d{2})-(\d{4})/;
    if (reg.test(stringDate)) {
        const arr = stringDate.split('-');
        return querydateToDate(`${arr[2]}-${arr[1]}-${arr[0]}`);
    }
    else {
        return null;
    }
}
exports.readdateToDate = readdateToDate;
function secondsToHours(seconds) {
    if (seconds > 0) {
        return Math.round((seconds / 3600) * 10) / 10;
    }
    return 0;
}
exports.secondsToHours = secondsToHours;
function makeRangeDate(startDate, endDate) {
    const range = [];
    const txtStart = dateToQuery(startDate);
    const txtEnd = dateToQuery(endDate);
    if (dateToQuery(startDate) == dateToQuery(endDate)) {
        range.push(querydateToDate(txtStart));
    }
    else {
        const tmpStart = querydateToDate(txtStart);
        const tmpEnd = querydateToDate(txtEnd);
        if (tmpStart.getTime() < tmpEnd.getTime()) {
            while (tmpStart.getTime() <= tmpEnd.getTime()) {
                range.push(querydateToDate(dateToQuery(tmpStart)));
                tmpStart.setDate(tmpStart.getDate() + 1);
            }
        }
    }
    return range;
}
exports.makeRangeDate = makeRangeDate;
function filterSundaysInRageDates(range) {
    return range.filter((element) => element.getDay() > 0);
}
exports.filterSundaysInRageDates = filterSundaysInRageDates;
//# sourceMappingURL=date.parse.js.map