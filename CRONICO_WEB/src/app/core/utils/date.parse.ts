export function dateToQuery(date: Date) {
  if (date) {
    return `${date.getFullYear()}-${date.getMonth() < 9 ? '0' : ''}${
      date.getMonth() + 1
    }-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
  }
  return null;
}

export function dateToRead(date: Date) {
  if (date) {
    return `${date.getDate() < 10 ? '0' : ''}${date.getDate()}-${
      date.getMonth() < 9 ? '0' : ''
    }${date.getMonth() + 1}-${date.getFullYear()}`;
  }
  return null;
}

export function rangeDateToQuery(dates: Date[]) {
  if (Array.isArray(dates) && dates.length == 2) {
    return `${dateToQuery(dates[0])}_${dateToQuery(dates[1])}`;
  }
  return null;
}

export function dateToTimestamp(date: Date) {
  if (date) {
    return date.getTime();
  }
  return 0;
}

export function timestampToDate(timestamp: number) {
  if (timestamp > 0) {
    const mDate = new Date(timestamp);
    return isNaN(mDate.getTime()) ? null : mDate;
  } else {
    return null;
  }
}

export function querydateToDate(stringDate: string): Date | null {
  const reg = /(\d{4})-(\d{2})-(\d{2})/;
  if (reg.test(stringDate)) {
    const mDate = new Date(`${stringDate} 00:00:00`);
    return isNaN(mDate.getTime()) ? null : mDate;
  } else {
    return null;
  }
}

export function readdateToDate(stringDate: string) {
  const reg = /(\d{2})-(\d{2})-(\d{4})/;
  if (reg.test(stringDate)) {
    const arr = stringDate.split('-');
    return querydateToDate(`${arr[2]}-${arr[1]}-${arr[0]}`);
  } else {
    return null;
  }
}

export function secondsToHours(seconds: number) {
  if (seconds > 0) {
    return Math.round((seconds / 3600) * 10) / 10;
  }
  return 0;
}

export function makeRangeDate(startDate: Date, endDate: Date): Date[] {
  let range: Date[] = [];
  let txtStart = dateToQuery(startDate);
  let txtEnd = dateToQuery(endDate);
  if (dateToQuery(startDate) == dateToQuery(endDate)) {
    range.push(querydateToDate(txtStart!)!);
  } else {
    let tmpStart = querydateToDate(txtStart!);
    let tmpEnd = querydateToDate(txtEnd!);
    if (tmpStart!.getTime() < tmpEnd!.getTime()) {
      while (tmpStart!.getTime() <= tmpEnd!.getTime()) {
        range.push(querydateToDate(dateToQuery(tmpStart!)!)!);
        tmpStart!.setDate(tmpStart!.getDate() + 1);
      }
    }
  }
  return range!;
}

export function filterSundaysInRageDates(range: Date[]): Date[] {
  return range.filter((element) => element.getDay() > 0);
}
