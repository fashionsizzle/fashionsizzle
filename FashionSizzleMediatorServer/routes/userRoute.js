const express = require('express');
const router = express.Router();
var config= require('../config.json');
// const client = express.client();
// const user = require('../models/user');
var request = require('request');



/* api's
*/
router.get('/fashionSizzle', function (req, res) {
    console.log(config);
    var page = req.params.page
    request({
        url: config.fashionSizzle+page
    }).pipe(res)
});

router.get('/fashionSizzler', function (req, res) {
    var page = req.params.page
    request({
        url: config.fashionSizzler+page
    }).pipe(res)

});

router.get('/sizzleMenswear', function (req, res) {
    var page = req.params.page
    request({
        url: config.sizzleMenswear+page
    }).pipe(res)
});

router.get('/teenSizzle', function (req, res) {
    var page = req.params.page
    request({
        url:config.teenSizzle+page
    }).pipe(res)
});


module.exports = router;




// router.post('/1st', (request, response) => {

//     console.log("1st api");
//     console.log(request.body);

//     request.sanitize('username').trim();

//     let data = new user({
//         username: request.body.username,
//         password: request.body.password
//     });

//     let firstResponse = {};

//     data.save((error, result) => {
//         if (error) {
//             firstResponse.error = true;
//             firstResponse.message = `Error :` + error.message;
//             response.status(404).json(firstResponse);
//         }
//         else if (result) {

//             result.first = first(data);
//             firstResponse.error = false;
//             firstResponse.user = result;
//             firstResponse.message = ` 1st api post successfully.`;
//             response.status(200).json(firstResponse);
//         }
//     });
// });


// router.post('/2nd', (request, response) => {

//     console.log("2nd api");
//     console.log(request.body);
//     let data = new user({
//         phoneNumber: request.body.phoneNumber,

//     });

//     let secondResponse = {};

//     data.save((error, result) => {
//         if (error) {
//             secondResponse.error = true;
//             secondResponse.message = `Error :` + error.message;
//             response.status(404).json(secondResponse);
//         } else if (result) {
//             secondResponse.error = false;
//             secondResponse.user = result;
//             secondResponse.message = ` 2nd api post successfully.`;
//             response.status(200).json(secondResponse);

//         }

//     });
// });



// router.post('/3rd', (request, response) => {

//     console.log("3rd api");
//     console.log(request.body);
//     let data = new user({
//         email: request.body.email,

//     });

//     let thirdResponse = {};

//     data.save((error, result) => {
//         if (error) {
//             thirdResponse.error = true;
//             thirdResponse.message = `Error :` + error.message;
//             response.status(404).json(thirdResponse);
//         } else if (result) {
//             thirdResponse.error = false;
//             thirdResponse.user = result;
//             thirdResponse.message = ` 3rd api post successfully.`;
//             response.status(200).json(thirdResponse);

//         }

//     });
// });

// router.post('/4th', (request, response) => {

//     console.log("4th api");
//     console.log(request.body);
//     let data = new user({
//         address: request.body.address,

//     });

//     let fourthResponse = {};

//     data.save((error, result) => {
//         if (error) {
//             fourthResponse.error = true;
//             fourthResponse.message = `Error :` + error.message;
//             response.status(404).json(fourthResponse);
//         } else if (result) {
//             fourthResponse.error = false;
//             fourthResponse.user = result;
//             fourthResponse.message = ` 4th api post successfully.`;
//             response.status(200).json(fourthResponse);

//         }

//     });
// });
// });
