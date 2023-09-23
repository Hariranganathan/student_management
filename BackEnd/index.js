{
  const express = require('express')
  const cors = require('cors')
  const bodyparser = require('body-parser')
  const database = require('mysql')

  var add = express()
  add.use(cors())
  add.use(bodyparser.json())
  add.use(express.json())
  add.use(bodyparser.urlencoded({ extended: true }))
  add.use(express.static('public'));

  let con = database.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Hari@iphone6",
    database: "grooming"
  })

  con.connect(function (error) {
    if (error) {
      console.log(error)
    } else {
      console.log("Connection Successfull");
    }
  });

  add.get('/getone/:student_id', (req, res) => {
    const studentId = req.params.student_id;    
    const query = 'SELECT * FROM student_details WHERE student_id = ?';  
    con.query(query, [studentId], (error, results) => {
      if (error) {
        console.error('Database error:', error);
        return res.json({ error: 'Internal server   error' });
      }  
      if (results.length === 0) {
        return res.json({ error: 'Student not found' });
      }  
      const student = results[0];
      return res.json(student);
    });
  });

  add.get('/getall', (req, res) => {
    try {
      let getQuery = 'SELECT * FROM student_details';
      con.query(getQuery, (error, result) => {
        if (error) {
          res.send(error)
        } else {
          return res.json(result);
        }

      })
    } catch (error) {
      console.log(error)

    }
  })

  add.post('/register', (request, response) => {
    let = { username, lastname, phone, email, city, state, password } = request.body
    let sql = 'insert into reg(username,lastname,phone,email,city,state,password)values(?,?,?,?,?,?,?)'
    con.query(sql, [username, lastname, phone, email, city, state, password], (error, result) => {
      if (error) {
        response.send({ "status": "error" })
        console.log(error)
      }
      else {
        response.send({ "status": "Success" })
      }
    })
  })

  add.post('/login', (request, response) => {
    let { email, password } = request.body;
    let sql = 'select count(*) as count from reg where email = ? and password = ?'
    con.query(sql, [email, password], (error, result) => {
      if (result && result[0] && result[0].count > 0) {
        if (error) {
          response.send(error)
        } else {
          let obj = {
            "code": 200,
            "msg": "success"
          }
          response.send(obj)
        }
      } else {
        let obj = {
          "code": 500,
          "msg": "failure"
        }
        response.send(obj)
      }
    })
  });

   

  add.post("/createStudent", (req, res) => {
    try {
      const insertStudentQuery =
        'INSERT INTO grooming.student_details (name, phone, email, gender, dob, mark, result, location) VALUES (?,?,?,?,?,?,?,?)';
      con.query(
        insertStudentQuery,
        [req.body.name, req.body.phone, req.body.email, req.body.gender, req.body.dob, req.body.mark, req.body.result, req.body.location],
        (getError, getResult) => {
          if (getError) {
            console.log(getError)
            res.send(getError);
          } else {
            
            let msg = {
              code: 200, 
              message: "Student Successfully Added",
             
            };
           
            res.send(msg);
          }  
        }
      );
    } catch (systemError) {
      console.log(systemError);
    }
  });


  add.put('/updateStudent/:student_id', (request, response) => {

    let { student_id } = request.params
    let { name,phone, email, gender, dob, mark, result, location } = request.body
    let updatestudentQuery =
    'UPDATE student_details SET name=? ,phone=?,email=?,gender=?,dob=?,mark=?,result=?,location=? WHERE student_id=?'
    con.query(updatestudentQuery,[name,phone,email,gender,dob,mark,result,location,student_id],
      (error,result) => {
        if (error) {
          console.log(error)
          response.send({ "status" : "error" });
        } else {
          response.send({ "status" : "success" });
        }
      })
  })       
        
  add.delete("/delete/:student_id", (req, res) => {
    try {
      let studid = req.params.student_id;
      let deleteStudentQuery = "DELETE FROM student_details WHERE student_id = ?";
      con.query(deleteStudentQuery, [studid], (getError, getResult) => {
        if (getError) {
          res.send(getError);
        } else {
          let msg = {
            code: 200,
            message: "Successfully Deleted",
          };
          res.send(msg);
        }
      });
    } catch (systemError) {
      console.log(systemError);
    }
  });


  add.listen(3050, () => {
    console.log("Running on port 3050");
  });
}