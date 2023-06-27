import express  from "express";
import homeController from "../controller/homeController";
let router = express.Router() ;

const initWebRoute = (app) => {
    router.get('/',homeController.homePage);
    router.get('/details/user/:id' ,homeController.detailsPage);
    router.post('/create' , homeController.createUser);
    return app.use('/' , router) ;
}
export default initWebRoute ;