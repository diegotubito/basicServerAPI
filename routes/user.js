const { Router } = require('express');
const {userPost, userGet} = require('../controllers/user_controller');
const router = Router();

router.get('/fetch', userGet);
router.post('/create', userPost);

module.exports = router