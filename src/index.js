import Api from "./service/api";
import Storage from "./service/storage";
import Model from "./js/model";
import View from "./js/view";
import Controller from "./js/controller";
import "./sass/styles.scss";

const api = new Api();
const storage = new Storage();
const model = new Model(api, storage);
const view = new View();

new Controller(model, view);
