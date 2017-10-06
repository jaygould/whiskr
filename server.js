// Get dependencies
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const compression = require('compression');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const expressStatusMonitor = require('express-status-monitor');
const bodyParser = require('body-parser');
const mongoUtil = require('./util/mongo');

//Load environment variables
require('dotenv').config();

//Route handlers
const indexController = require('./controllers/index');
const homeController = require('./controllers/home');
const apiController = require('./controllers/api');
const scraperController = require('./controllers/scraper');

//Create server
const app = express();

mongoUtil.connectToServer(err => {
	if (err) return console.log(err);
});

//Express configuration
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 1137);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(expressStatusMonitor());
app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use(
	express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
);

//Error handler
app.use(errorHandler());

//App routes
app.get('/', indexController.index);
app.get('/home', homeController.index);

//API routes
app.use('/api', apiController);
app.use('/scraper', scraperController);

app.listen(app.get('port'), () => {
	console.log(
		'%s App is running at http://localhost:%d in %s mode',
		chalk.green('✓'),
		app.get('port'),
		app.get('env')
	);
	console.log('  Press CTRL-C to stop\n');
});
