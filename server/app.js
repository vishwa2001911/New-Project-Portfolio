const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();



const db = new sqlite3.Database('./data.db',sqlite3.OPEN_READWRITE,(err)=>{
    if(err) console.log(err+"fdffdff");
    else console.log("Connected to data.db ");
});
exports.db = db;


let sql = `CREATE TABLE messages(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name,
    phone,
    url,
    organization_name,
    avatarUrl,
    message,
    date
)`;



//sql = `DROP TABLE messages`
//db.run(sql)





app.use(cors());
app.use(bodyParser.json());


app.post('/',(req,res)=>{
    try {

        sql = `INSERT INTO messages(name,
                phone,
                url,
                organization_name,
                avatarUrl,
                message,
                date
        ) VALUES(?,?,?,?,?,?,?)`  

        let {name,phone,url,organization_name,avatarUrl,message,date} = req.body;

        db.run(sql,[name,phone,url,organization_name,avatarUrl,message,date],(err)=>{
            if(err) console.log(err);
        })

        res.json({
            method:'POST', 
            status:200,
            success:true    
        });
        
    } catch (error) {
        res.json({
            method:'POST',
            status:404,
            success:false, 
            error:error    
        });
    }
})



app.get('/', (req, res) => {
    try {
        sql = `SELECT * FROM messages`;
        let data;
        db.all(sql, [], (err, rows) => {
            if (err) console.log(err)
            if(rows.length ==0){
                return res.json({
                    method: 'GET',
                    status: 200,
                    success: true,
                });
            }
            return res.json({
                method: 'GET',
                status: 200,
                success: true,
                data: rows
            });
        });


    } catch (error) {
        res.json({
            method: 'GET',
            status: 404,
            success: false,
            error: error
        });
    }
});

app.delete('/',(req,res)=>{

    sql = "DELETE FROM messages WHERE phone=(?)"

    try {
        let phone = req.body.phone;
        console.log(phone)
        db.run(sql,[phone],(err)=>{
            if(err) console.log(`${err}`)
        })
        return res.json({
            method:'DELETE',
            status:200,
            success:true,   
        })
    } catch (error) {
        return res.json({
            method:'POST',
            status:404,
            success:false, 
            error:error
        })
    }
})



app.listen('3000',(err)=>{
    if(err)console.log(err)
    else console.log("Server is on")
})

