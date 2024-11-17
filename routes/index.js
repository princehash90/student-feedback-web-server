const express = require('express')
const router= express.Router()// making router object to figure out what code to run in response to a request
// typically based on the url and method, GET, POST...


//function get request to the home page
router.get('/', function (req, res, next){
    // next parameter is used lets say a request is used and this function cant deal with request, next is used to pass
    //something else
    res.render('index', {
        title: 'Feedback Application',
        author:'Hashim',
        timePageLoadedAt: new Date()

    })// arguments are names of handlebar file
    // or name of templates, optional objects with data for the templates
})

router.get('/feedback-form', function (req,res,next){
    res.render('student_feedback_form')
})
// this a request to respond to post request
router.post('/submit-feedback', function (req,res,next){
    //access form Data
    //const formData = req.query// query will take the query parameters and convert them into an object
    const formData = req.body// Post request is sent in the body of the url, it is packed in the request
    console.log(formData)

    res.render('thank_you', {
        name:formData.name,
        email:formData.email,
        Comment: formData.Comment,
        CurrentStudent: formData['student-?']
    })
})

module.exports= router // return this router object to whatever that requires this file