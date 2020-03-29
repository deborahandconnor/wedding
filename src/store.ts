import { readable } from 'svelte/store'

interface Page {
    segment?: string
    href: string
    text: string
}

const createPageLink = (href: string, text: string, dark?: boolean) => ({
    href, text, segment: href, dark
});

export let pages = readable<Page[]>([
    { href: '.', text: 'home' },
    createPageLink('rsvp', 'rsvp'),
    createPageLink('details', 'details'),
    createPageLink('about', 'story'),
    createPageLink('pictures', 'photos', true),
    createPageLink('registry', 'registry'),
], () => () => { });