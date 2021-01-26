import MainController from "./Views/mainController.js";
import MainView from "./Views/mainView.js";

localStorage.setItem("result", [0,0,0,0,0,0,0,0]);

new MainView();
new MainController(0);