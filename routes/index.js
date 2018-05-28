var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API Service' });
});
router.post('/',function (req,res) {
  console.log(req.body.name);

    if (req.body.name == "ebin") {
        res.json({
            status: 200,
            message: {
                name: ['Abu','sonu','nikil']
            }
        })
    } else {
        res.json({
            status: 404,
            message: 'data Not fond'
        })

    }
})
router.get('/ebin',function (req,res) {
    res.send({
        status: 200,
        message: {
            name: ['Abu','sonu','nikil']
        }
    })
})
module.exports = router;
