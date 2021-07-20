const express = require('express');
const router = express.Router();
const getAllGroupInfo = require('../services/getAllGroupData');
const sizeof = require('object-sizeof');

const cache = {};

/* GET home page. */
router.get('/', function(req, res) {
  res.send('index');
});

router.get('/group/:id', async function(req, res) {
  const { id } = req.params;

  // Add cache for check id request and return if exist
  if (cache[id]) {
    console.log('Data return from cache!');
    console.log('Size of cache: ', sizeof(cache), 'bytes', 
      `\nOr this is ${sizeof(cache) / 1024} kbytes`, 
      `\nOr this is ${sizeof(cache) / 1024 / 1024} Mbytes`);
    const fromCache = cache[id];
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(fromCache);
    return;
  }

  const data = await getAllGroupInfo(id)
  cache[id] = data;
  console.log('Data from request!');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(data)
});

router.get('/search/:name', function (req, res) {
  const { name } = req.params;
  const url = `https://www.rcscomponents.kiev.ua/modules.php?name=Asers_Shop&s_op=search&query=${name}`;
  res.json({ url });

})

module.exports = router;
