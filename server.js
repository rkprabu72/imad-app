var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/basic-course', function (req, res) {
  res.sendFile(createtemplate(basic-course));
});

var basic-course = {
                     title: 'BASIC COURSE POINTS',
                     heading: 5 basic course points,
                     date: March 28, 1999,
                     content:`<h1>
                              live in the present moment
                             </h1>
                                <p>
                                    present moment is inevitable</p>
                                  <p> donot be a football of other's opinion </p>
                                    <p>   opposite values are complementary </p>
                                 <p>   accept people and situation as they are </p>
                                  <p>   donot see intention behind other's mistakes
                                </p>`
                    };

function createtemplate (data)
    {var title = data.title;
     var heading = data.heading;
     var date = data.date;
     var content = data. content;
     var htmltemplate = 
       `<html>
          <title> 
            ${title}
          </title>
           <h1> 
            ${heading}
          </h1>
           <h1> 
            ${date}
          </h1>
           <body> 
            ${content}
          </body>
      </html>`
      ;
     return htmltemplate;
    }
app.get('/prabhu1', function (req, res) {
  res.send('You have called Prabhu');
});
app.get('/Sudarshan1', function (req, res) {
  res.send('You have called Sudarshan');
});
app.get ('/JGD',function (req, res)
                 {res.send('YOU HAVE CALLED THE GURU')
                 }
        )
 app.get ('/Basic-course',function (req, res)
                 {res.send(createtemplate(basic-course))
                 }
         );
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
