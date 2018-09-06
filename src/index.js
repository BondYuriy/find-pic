import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';
import './sass/styles.scss';
// import 'normalize.css';

const model = new Model();
const view = new View();

new Controller(model, view);