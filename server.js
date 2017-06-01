const express = require('express');

var router = express();

var port = process.env.PORT || 3000;

router.use(express.static('public'));

router.listen(port, () => {
  console.log(`Server up on ${port}`);
});
