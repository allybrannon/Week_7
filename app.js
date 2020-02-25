const express = require(`express`); // importing express
const app = express(); //express now running and have all the functions we need

app.listen(3333, () => {
    console.log("server running on port 3333")
});

app.get('/',(request, response) => {
    const snippet = '<h1>Hello, World!</h1>';
    response
        .status(200)
        .send(snippet)
        .end();
});

app.get('/cats',(request, response) => {
    const snippet = '<h1>Meow</h1>';
    response
        .status(200)
        .send(snippet)
        .end();
});

app.get('/dogs',(request, response) => {
    const snippet = '<h1>Woof</h1>';
    response
        .status(200)
        .send(snippet)
        .end();
});

app.get('/cats_and_dogs',(request, response) => {
    const snippet = '<h1>Meow and Woof Living Together!</h1>';
    response
        .status(200)
        .send(snippet)
        .end();
});