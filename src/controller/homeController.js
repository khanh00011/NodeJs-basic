
import pool from "../configs/connectDB";

const homePage = async (req , res) => {
    const [rows , fields] = await pool.execute('SELECT * FROM users ');
    return res.render("index.ejs", {data : rows} );
}
const createUser = async (req , res) => {
    let data = req.body;
    await pool.execute('INSERT INTO users (firstName, lastName, Email, address) VALUES (? , ? , ? , ? ) ',[data.firstName , data.lastName , data.Email , data.address]);

    return res.redirect('/');
}
const detailsPage =async (req , res) => {
    let id = req.params.id;
    const [user , fields] = await pool.execute('select * from users where id = ? ',[id])
    return res.send(JSON.stringify(user));
}

module.exports = {
    homePage,
    createUser,
    detailsPage
}