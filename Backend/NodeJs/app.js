//----------------------------DAY 1 ---------------------------------
// const http = require('http');

// var app = http.createServer(function(req, res, next) {
//     res.end("Bhen ki lodi raand randvi!!")
// });
// app.listen(3000);

// const http = require('http');

// var app = http.createServer(function(req, res, next) {
//     if(req.url == '/'){
//         res.end("Kahish Nagdevv")
//     }
//     else if(req.url == '/sec'){
//         res.end("Anushka Tiwari")
//     }
//     else if(req.url == '/thre'){
//         res.end("Avni Gupta")
//     }
//     else{
//         res.end("404 Page Not Found")
//     }
// });

// app.listen(3000);

//------------------------------DAY 2 (app.get())--------------------------------
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.get('/raand',function (req, res) {
//     res.send('Bhen ki lodi rand randvi')
// })
// app.get('*',function(req,res){
//     res.send('404 Page Not Found')
// })
// app.listen(8000)

//------------------------------DAY 3(app.use())--------------------------------
//Kisi bhi middleware ko use karne ke liye ham log app.use() ka use karte hai
// const express = require('express')
// const app = express()
// //MALWARE KA YE KAAM HOTA HAI KI JAB BROWSER KOI ROUTE REQUEST KARTA HAI THEN BEFORE REACHING T ROUT
// // IF WE HAVE TO PERFORM ANY OPERATION THEN WE CAN DO IT OKKKKK
// app.use(function(req,res,next){      //SABSE PAHALE ISKE PAAS AATI HAI REQUEST YE KUCH RETUEN NA KARTA 
//     console.log('Time:', Date.now()) //YE EK MALWARE SE USE KIA HUA KAAM HAI 
//     next();     //AGAR YE NA HO TOH PAGE RELOAD HI HOTA RAHEGA KYUNKI KUCH RETURN HI NA KARTA 
// })
// app.get('/',function(req,res){
//     res.send('Hello main page!!')
// })

// app.get('/about',function(req,res){
//     res.send('About page!!')
// })
// app.get('*',function(req,res){
//     res.send('404 Page Not Found')
// })
// app.listen(8000)

//-------------------------------DAY 4(express sessions)-------------------------------
// const express = require('express')
// const app = express()
// const expressSession = require('express-session')
// //Cookie ka kaam hota hai browser mai data ko store karna and session ka kaam hai ki uss session ke period takk bss server mai data ko rakhna ookk

// // app.use(function(req,res,next){
// //     console.log('Hello')
// //     next()
// // })

// app.use(expressSession({
//     secret: 'keyboard cat',
//     resave: false,//mtlb agar aapke session mai kuch bhi change nahi hua phir bhi aap usse save karne chahate ho??
//     saveUninitialized: true,//kya hame esse user jisne kuch create na kia hua ya authent. na kia ho toh esse user ka session bhi save karana hei??
// }))
// app.get('/',function(req,res){
//     res.send('Hello main page!!')
// })
// app.get('/create',function(req,res){
//     req.session.okk = true, //This is how the session is created with named okk and its value as true
//     res.send('Session created!!')
// })
// app.get('/check',function(req,res,next){
//     console.log(req.session.okk)//gives true but when we restart the session it gives undefined
// })
// app.listen(8000)

//-------------------------------DAY 5(flash) -------------------------------
// const express = require('express')
// const app = express()
// const expressSession = require('express-session')
// const flash = require('connect-flash')

// app.use(expressSession({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
// }))
// app.use(flash())

// app.get('/', function(req, res) {
//     req.flash("name", "Vibhu"); // Removed extra space
//     res.redirect('/name')
// })

// app.get('/name', function(req, res) {
//     let msg = req.flash('name')
//     res.send(`Your name is ${msg}`)
// })
// app.listen(8000, () => {
//     console.log('Server is running on port 8000')
// })

// //-------------------------------DAY 6(CORS) -------------------------------
// //CROSS ORIGIN RESOURCES SHARING
// //Browser mai ek secuirty feature hota hai jiske tahat aap ksii or web domain ka data nahi manga sakte yaa show nahi kar sakte and browser isse aapko rokta hai and agar aap chahate hai ki brwser aalow kare data ko laane ke liye toh phir aapko uss website ke server ke throush CORS enable karna hoga!!
// //For ex. abc.com xyz.com ye dono domain aapas mai data jab tak share na kar sakte jab tak ki inki side se CORS enable na ho jata !!

// const express = require('express')
// const app = express()
// const flash = require('connect-flash')
// const cors = require('cors')
// app.use(cors())
// app.get('/', function(req, res) {
//     res.send('Kya re bhadwe kya dekh rha hai!!')
// })
// app.listen(8000, () => {
//     console.log('Server is running on port 8000')
// })

//-------------------------------DAY 7(Cookie) -------------------------------
//Agar aap chahate ho ki user aapke kissi route par jaaye toh aap kuch data uske broweser par save karana cahate ho toh toh isse kahate hai cookie
// const express = require('express')
// const app = express()
// const cookieParser = require('cookie-parser')
// app.use(cookieParser())
// app.get('/', function(req, res) {
//     res.send('Kya re bhadwe kya dekh rha hai!!')
// })
// app.get('/ok',function(req,res){
//     res.cookie('ok',true)//cookie msg ko set karne ke liye koi package na chahiye but read karne ke liye cookie parser package chahiye hoga ok
//     console.log(req.cookies.ok) 
//     res.send('Cookie created!!')
// })
// app.listen(8000,()=>{
//     console.log('Server is running on port 8000')
// })

// //-------------------------------DAY 8(morgan) -------------------------------
// //Jab bhi aap apna server start kar denge and browser agar request fekega kissi bhi route par toh uss request se related info aapko morgan laake deta hai!!
// const express = require('express')
// const app = express()
// const morgan = require('morgan')

// // app.use(morgan()) ::ffff:127.0.0.1 - - [Sun, 13 Oct 2024 05:46:41 GMT] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
// // ::ffff:127.0.0.1 - - [Sun, 13 Oct 2024 05:46:41 GMT] "GET /favicon.ico HTTP/1.1" 404 150 "http://127.0.0.1:8000/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"

// // app.use(morgan('combined'))//::ffff:127.0.0.1 - - [13/Oct/2024:05:47:44 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"

// app.use(morgan('dev'))//GET / 304 5.689 ms - -

// // app.use(morgan('tiny'))//GET / 304 - - 7.487 ms

// // app.use(morgan('short'))//::ffff:127.0.0.1 - GET / HTTP/1.1 304 - - 5.041 ms

// app.get('/', function(req, res) {
//     res.send('Kya re bhadwe kya dekh rha hai!!')
// })
// app.listen(8000,()=>{
//     console.log('Server is running on port 8000')
// })

// //-------------------------------DAY 9(req,res) -------------------------------
// //Isme wo saara data hota hai jo browser se aa raha hai ok
// //FRONTEND(browser) ------req-----> BACKEND(server)------res-----> FRONTEND 
// const express = require('express')
// const app = express()
// //So req kia hua data sab browser se aata hai means frontednd to backend server
// app.get('/',function(req,res){
//     // console.log('Hey raand!!')
//     // console.log(req)
//     // console.log(req.params)//{}
//     // console.log(req.query)//{}
//     // console.log(req.params)//undefined
//     // console.log(req.cookies)//undefined
//     // console.log(req.ip)//::ffff:127.0.0.1
//     // console.log(req.port)//undefined
//     // console.log(req.headers)//mota maati info
//     console.log(req.url)// '/'
//     console.log(req.method)//GET
//     // console.log(res)
//     res.send('Kya re bhadwe kya dekh rha')
// })
// app.listen(8000,()=>{
//     console.log('Server is running on 8000')
// })

// //-------------------------------DAY 10(Dyanamic Routing) -------------------------------
// //Static routing mens we set urls for each and evry route for our web which is impossible 
// //For ex. For peofile url '/profile/ansh','/profile/kansh'..... for this infinite route has to be made which is impossible
// //Here comes dynamic routing where the url gets dynamic behaviour whatever we write in some portion of url it get redirect according to it...!!
// const express = require('express')
// const app = express()

// app.get('/',function(req,res){
//     res.send('Raand')
// })
// // app.get('/profile/:username',function(req,res){ //This will be run for every name 
// //     res.send('User ji aapka naam hai raand')
// // })
// // app.get('/profile/:username',function(req,res){ //Now access that name and print it to the page 
// //     //Now for accessing the data from frontend to backend we have to use req.
// //     res.send('User ji aapka naam hai '+req.params.username+' ji')
// // })
// // app.get('/profile/:username/:age',function(req,res){ //Now for more than one dyanamic route
// //     //Now for accessing the data from frontend to backend we have to use req.
// //     res.send('User ji aapka naam hai '+req.params.username+' ji'+' aapki umara hai '+req.params.age)
// // })
// //                                  OR 
// app.get('/profile/:username/:age',function(req,res){ //Now for more than one dyanamic route
//     //Now for accessing the data from frontend to backend we have to use req.
//     res.send(`User ji aapka naam hai ${req.params.username} aapki umara hai ${req.params.age}`)
// })
// app.listen(8000,()=>{
//     console.log('Server is running on 8000')
// })

// //-------------------------------DAY 11(Server Side Rendering-->ejs) -------------------------------
// //For creating a server side rendering we use express with ejs!
// //ejs is html with superpowers
// const express = require('express')
// const app= express()

// // Set EJS as the view engine
// app.set('view engine','ejs')
// //Ye ejs kya karta hai jo file render ho rahi hai views ki ejs file wo uska replicate ek actual html file banata hai jo ki static hota hai uss <%= %> inn sab tag ko solve karke jo value aayegi unhe statically rakhta hai ussi jagah!!
// // Phir wo static html file browser ko bhejega ....kyunki brwser toh ejs samjhta hi nahi hai!!
// //Issi ko ham server side rendering kahate hai!!
// //REACT KYA KARTA HAi?? React SSR nahi karta usme actually server se html,css,js ka bundle aata hai to browser 
// app.get('/',function(req,res){
//     res.send('Kya re bhadwe kya dekh raha hai !!')
// })
// // Route to render an EJS template
// app.get('/home', (req, res) => {
//     res.render('index', { title: 'Home Page', content: 'Welcome to the home page!' });//Render hamesha wahi page karte hai jo views mai ho ok!!
//   });
// app.listen(8000,()=>{
//     console.log('Server is running on 8000')
// })
//-------------------------------DAY 12(Form Handling) -------------------------------
// const express = require('express')
// const app= express()

// app.set('view engine','ejs')

// // Both below line used for data fetching from query i.e. url data
// app.use(express.json())
// app.use(express.urlencoded({ extended:true }))

// app.get('/',function(req,res){
//     res.render('index')
// })

// app.get('/check',function(req,res){
//     res.send(`Chal raha hai!! ${req.query.name} and ${req.query.email}`)
// })

// app.listen(8000,()=>{
//     console.log('Server is running on 8000')
// })

//-------------------------------DAY 13(Form Handling with POST) -------------------------------
// const express = require('express')
// const app= express()

// app.set('view engine','ejs')

// // Both below line used for data fetching from body i.e. url data for method post
// app.use(express.json())
// app.use(express.urlencoded({ extended:true }))//If we comment this only then value will be undefined

// app.get('/',function(req,res){
//     res.render('index')
// })

// app.post('/check',function(req,res){
//     res.send(`Chal raha hai!! ${req.body.name} and ${req.body.email}`)
// })

// app.listen(8000,()=>{
//     console.log('Server is running on 8000')
// })

//-------------------------------DAY 14(API Basics) -------------------------------
// const express = require('express')
// const app= express()

// app.set('view engine','ejs')

// app.use(express.json())
// app.use(express.urlencoded({ extended:true }))

// app.get('/',function(req,res){
//     res.send("Hey Raand!!")
//     // res.render('index')
// })

// app.get('/check',function(req,res){
//     res.send("Yup")
//     // res.send(`Chal raha hai!! ${req.body.name} and ${req.body.email}`)
// })
// app.listen(8000,()=>{
//     console.log('Server is running on 8000')
// })

// //-------------------------------DAY 15(Error Handling In API) -------------------------------
// const express = require('express')
// const app= express()

// app.set('view engine','ejs')

// app.get('/',function(req,res,next){
//     try{
//         res.send("Hey Raand!!")
//     }
//     catch(err){
//         next(err)
//     }
// }) 

// app.get('/check',function(req,res){
//     res.send("Yup")
// })
// app.use((err,req,res,next)=>{
//     res.status(500).send(err.message)
// })
// app.listen(8000,()=>{
//     console.log('Server is running on 8000')
// })

// //-------------------------------DAY 16(Error Handling In API) -------------------------------
// const express = require('express')
// const app= express()

// app.set('view engine','ejs')

// app.get('/',function(req,res){
//     res.send("Hey Raand!!")
// }) 

// app.get('/user/profile/view',function(req,res){
//     res.send("Yup")
// })
// app.listen(8000,()=>{
//     console.log('Server is running on 8000')
// })

//-------------------------------DAY 17(Integrating Mongoose With Express) ------------------------
const express = require('express')
const app = express()
const mongooseconnections = require('./config/mongoose')

app.set('view engine','ejs')

app.get('/',function(req,res){
    res.send("Hey Raand!!")
})
app.listen(8000,()=>{
    console.log('Server is running on 8000')
})