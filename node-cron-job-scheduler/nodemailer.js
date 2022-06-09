const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
       user:"beast.an07@gmail.com",
       pass:"mahad0o7"
       }
//
//
});

let mailOptions = {
    from: 'vikash@nimapinfotech.com',
    to:'vikashparida067@gmail.com',
    subject: 'test node package nodemailer',
    text: 'hii vikash'
}


transport.sendMail(mailOptions,(error,info)=>{
if(error){
    console.log(error);
}else{
    console.log('Email has send :' + info.response );
}
})
