import * as sapper from '@sapper/app';
import why from 'butwhy'
import './styles.scss';
import './store'
// import '@fortawesome/fontawesome-free/js/solid'

sapper.start({
	target: document.querySelector('#sapper'),
});

window.why = why;