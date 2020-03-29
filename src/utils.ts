import moment from 'moment';

export const WEDDING_DATE = '2020-08-08';
export const countdown = (unit: 'days' | 'hours' | 'minutes') => moment(WEDDING_DATE)
    .diff(moment(), unit);

export const createUrl = (res: string) => `/connoranddeborah/images/${res}`.replace(/[/\\]+/g, '/');