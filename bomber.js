const axios = require('axios')
const list = require('./list')
const colors = require('colors');
const validate = list.number.search(/^9\d{9}$/i);
if (validate == 0) {
    list.api.forEach(function (item) {

        if (item.method == "POST") {
            axios.post(item.url, item.data).then(function (response) {
                console.log(`${colors.green(item.name)}  ${colors.yellow(item.url)} ${colors.white(response.status)} ${colors.red(item.method)}`);
            }).catch(error => {

                console.log(`${colors.green(item.name)}  ${colors.yellow(item.url)} ${colors.white(error.response.status)} ${colors.red(item.method)}`);

            })
        }

        else {
            axios.get(item.url).then(function (response) {
                console.log(`${colors.green(item.name)}  ${colors.yellow(item.url)} ${colors.white(response.status)} ${colors.red(item.method)}`);
            }).catch(error => {

                console.log(`${colors.green(item.name)}  ${colors.yellow(item.url)} ${colors.white(error.response.status)} ${colors.red(item.method)}`);

            })
        }




    })
} else {
    console.log("Invalid Format");
}

