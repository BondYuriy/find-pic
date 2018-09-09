import Api from "./service/api";
import Model from "./js/model";
import View from "./js/view";
import Controller from "./js/controller";
import "./sass/styles.scss";

const api = new Api();
const model = new Model(api);
const view = new View();

new Controller(model, view);
