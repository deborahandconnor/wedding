import moment from 'moment';

export const WEDDING_DATE = '2020-08-08 19:00';
export const countdown = (unit: 'days' | 'hours' | 'minutes') => moment(WEDDING_DATE)
    .diff(moment(), unit);

export const createUrl = (res: string) => `/wedding/images/${res}`.replace(/[/\\]+/g, '/');

export const onEnter = (fn: Function) => ({ code }: KeyboardEvent) => {
    if (code === 'Enter') {
        fn();
    }
}

interface RSVP {
    accept: string[]
    decline: string[]
    responder: string
    date: Date
}

export const rsvpHelper = {
    getUnique(rsvps: RSVP[]): RSVP[] {
        const unique: RSVP[] = [];
        rsvps.forEach(r => {
            const i = unique.findIndex(o => rsvpHelper.match(o, r));
            if (i < 0) {
                unique.push(r);
            } else if (!rsvpHelper.exact(unique[i], r) && r.date > unique[i].date) {
                unique[i] = r;
            }
        });
        return unique;
    },
    match(a: RSVP, b: RSVP) {
        return (
            a.accept.length === 0 || !!a.accept.find(o => !!b.accept.includes(o) || !!b.decline.includes(o))
        )
            && (
                b.accept.length === 0 || !!b.accept.find(o => !!a.accept.includes(o) || !!a.decline.includes(o))
            )
            && (
                a.decline.length === 0 || !!a.decline.find(o => !!b.accept.includes(o) || !!b.decline.includes(o))
            )
            && (
                b.decline.length === 0 || !!b.decline.find(o => !!a.accept.includes(o) || !!a.decline.includes(o))
            )
    },
    exact(a: RSVP, b: RSVP) {
        return (
            a.accept.length === 0 || !!a.accept.find(o => !!b.accept.includes(o))
        )
            && (
                b.accept.length === 0 || !!b.accept.find(o => !!a.accept.includes(o))
            )
            && (
                a.decline.length === 0 || !!a.decline.find(o => !!b.decline.includes(o))
            )
            && (
                b.decline.length === 0 || !!b.decline.find(o => !!a.decline.includes(o))
            )
    }
}
