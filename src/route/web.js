import express  from "express";
import { homePage , aboutPage} from "../controller/homeController";
let router = express.Router() ;

const initWebRoute = (app) => {
    router.get('/', homePage)
    router.get('/about' , aboutPage)
    return app.use('/' , router) ;
}
export default initWebRoute ;