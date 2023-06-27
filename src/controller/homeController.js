
import connection from "../configs/connectDB";

const homePage = (req , res) => {
    connection.query(
        'SELECT * FROM `users` ',
        function(err, results, fields) {
          console.log("checkk mysql",err);
          console.log(results); // results contains rows returned by server
          return res.render("index.ejs" , {results} );
        } 
      );
   
}
const aboutPage = (req , res) => {
    return res.send("day là about nè!!!!!!!")
}
export {
    homePage,
    aboutPage
}