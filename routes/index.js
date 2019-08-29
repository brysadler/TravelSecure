module.exports = function(app){
		app.use('/', require('./application'))
		app.use('/users', require('./users'))
		app.use('/trips', require('./trips'))
		app.use('/pricing', require('./pricing'));
    //other routes..
}