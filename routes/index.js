const express = require('express');
const router = express.Router();

const messages = [
  {
    text:"Hi there!",
    user:"wilbrod",
    added: new Date()
  },
  {
    text:"Hello World!",
    user:"liz",
    added: new Date()
  },
  {
    text: "Good morning from Uganda",
    user: "Gigi",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Mini Message Board", messages: messages });
});

/* new message page */
/*router.get('/new', (_req, res) => {
  res.render('form');
});*/
router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message Form' });
});

/*post a new message*/
/*router.post('/new', (req, res) => {
  const { author, messageText } = req.body;

  const newMessage = {
    text: messageText,
    user: author,
    added: new Date()
  };

  messages.push(newMessage);

  res.redirect('/');
});*/
router.post('/new', (req, res) => {
  const { messageUser, messageText } = req.body;
  const newMessage = {
    text: messageText,
    user: messageUser,
    added: new Date()
  };
  messages.push(newMessage);
  res.redirect('/');
});



module.exports = router;
