module.exports = function(app){
		app.use('/', require('./routes/application'))
		app.use('/users', require('./routes/users'))
		app.use('/trips', require('./routes/trips'))
		app.use('/pricing', require('./routes/pricing'));
    //other routes..
}