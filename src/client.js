import * as sapper from '@sapper/app';
import './styles.scss';
import './store'

sapper.start({
	target: document.querySelector('#sapper'),
});