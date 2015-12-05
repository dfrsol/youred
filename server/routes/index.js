var express = require('express');
var router = express.Router();

// Home Page
router.get('/', function(req, res, next) {
    res.sendFile('../client/index.html');
});

module.exports = router;