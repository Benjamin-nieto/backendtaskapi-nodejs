const { Router} = require('express');
const router = Router();

router.get('/', (req,res) => {
    const data = {
        "name":"tst",
        "status":"up"
    };
    res.json(data);
});

module.exports = router;