import { readable, writable } from 'svelte/store'

interface Page {
    segment?: string
    href: string
    text: string
}

const createPageLink = (href: string, text: string, dark?: boolean) => ({
    href, text, segment: href, dark
});

export const pages = readable<Page[]>([
    { href: '.', text: 'home' },
    createPageLink('rsvp', 'rsvp'),
    createPageLink('details', 'details'),
    createPageLink('about', 'story'),
    createPageLink('pictures', 'photos', true),
    createPageLink('registry', 'registry'),
], () => () => { });

interface RsvpForm {
    step: number
    error?: boolean
    complete?: boolean
}

export const form = (() => {
    const { set, update, subscribe } = writable<RsvpForm>({
        step: 1
    });
    return {
        subscribe,
        set,
        next() {
            update(s => {
                let { step } = s;
                step++;
                return {
                    ...s,
                    step
                }
            });
        },
        toggleError() {
            update(s => {
                let { error } = s;
                return {
                    ...s,
                    error: !error
                }
            });
        },
        async submit(rsvp: RSVP) {
            // placeholder
            update(s => ({
                ...s,
                complete: true
            }))
        }
    }
})();


interface RSVP {
    name: string
    party: string[]
}

export const rsvp = (() => {
    const { set, update, subscribe } = writable<RSVP>({ name: '', party: [] });
    return {
        subscribe,
        async setRespondent(name: string) {
            update(rsvp => ({ ...rsvp, name }));

            // placeholder
            let guests = await (async () => 3)();

            // Add blank party members
            const party: string[] = [];
            while (guests-- > 0) {
                party.push('');
            }
            update(rsvp => ({ ...rsvp, party }))
            form.next();
            console.log('set:', name);
        },
        updateGuest(i: number, name: string) {
            update(rsvp => {
                rsvp.party[i] = name;
                return rsvp;
            });
        },
        set
    }
})();

form.subscribe(console.log);
