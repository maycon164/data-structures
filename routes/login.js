module.exports = (app) => {

    app.post('/sign', (req, res) => {
        res.send('<h1>Hello, World</h1>')
    });

    app.post('/login', (req, res) => {

    })

    app.get('/users', (req, res) => {

    });

}