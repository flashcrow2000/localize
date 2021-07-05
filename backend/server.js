const express = require('express');
const cors = require('cors');
const dbService = require('./services/db-service');
const app = express();

app.use(cors());

app.listen(4400, function() {
    console.log('listening on 4400')
})

app.get('/translations', async (req, res) => {
    const fields = await dbService.fetchLocalizedKey(req.query.page, req.query.locale, req.query.key);
    res.json({data: fields});
})