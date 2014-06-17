if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

function StopwatchWindow() {
	var win = Ti.UI.createWindow({
		backgroundColor: '#A6B97B',
		layout: 'vertical'
	});

// Timer View
var timeView = Ti.UI.createView({
	top:0,
	width: '100%',
	height: '30%',
	backgroundColor: '#C8D8AB'
});

var label = Ti.UI.createLabel({
	color: '#404040',
	text: 'Progress',
	height: Ti.UI.SIZE,
	textAlign: 'center',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	font:{
		fontSize: '55sp',
		fontWeight: 'bold'
	}
});

timeView.add(label);
win.add(timeView);

// Creating a file for the log
var TimeSpentLog = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'individualLog.txt');
if(TimeSpentLog.exists()===false) {
    TimeSpentLog.createFile();
}

// Stopwatch specific code
var Stopwatch = require('Functions/stopwatch');
var stopWatch = new Stopwatch(stopwatchListener, 10);

function stopwatchListener(watch) {
	label.text = watch.toString();
}

// Container view for buttons
var buttonsView = Ti.UI.createView({
	width: '100%',
	height: '10%',
	layout: 'horizontal'
});

// First button : stop / reset
var buttonStopReset = Ti.UI.createButton({
	title: 'STOP',
	color: '#7139BB',
	width: '33%',
	height: Ti.UI.FILL,
	backgroundColor: '#92B838',
	font: {
		fontSize: '25sp',
		fontWeight: 'bold'
	},
	style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
});

buttonsView.add(buttonStopReset);

// Second button : go / lap
var buttonStartLog = Ti.UI.createButton({
	title: 'GO!',
	color: '#7139BB',
	width: '33%',
	height: Ti.UI.FILL,
	backgroundColor: '#DBEBBB',
	font: {
		fontSize: '25sp',
		fontWeight: 'bold'
	},
	style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
});

buttonsView.add(buttonStartLog);

// Third button : pause
var buttonPause = Ti.UI.createButton({
	title: 'Pause',
	color: '#7139BB',
	width: '33%',
	height: Ti.UI.FILL,
	backgroundColor: '#B3D26A',
	font: {
		fontSize: '25sp',
		fontWeight: 'bold'
	},
	style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
});
buttonsView.add(buttonPause);
	
win.add(buttonsView);

// Table View that contains previous laps
var table = Ti.UI.createTableView({
	width: '100%',
	height:Ti.UI.SIZE,
	backgroundColor: '#C0BFBF'
});
win.add(table);

var isRunning = false;

// Start button functionality
buttonStartLog.addEventListener('click', function(e) {
	if (isRunning) {
		var IndividualLog = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'individualLog.txt');
			IndividualLog.write('Your log\n');
		for(var i=0; i<10; i++) {
    		IndividualLog.write(i+':'+'\n', true); 
			IndividualLog.write(stopWatch.toString());
			}
			alert(IndividualLog.read().text);
		}
	else {
		isRunning = true;
		buttonStartLog.title = 'LOG!';
		buttonStopReset.title = 'STOP';
		stopWatch.start();
	}
});

// Stop button functionality
buttonStopReset.addEventListener('click', function(e) {
	// If the timer is running, we stop it
	if (isRunning) {
		buttonStartLog.title = 'GO!';
		buttonStopReset.title = 'RESET';
		stopWatch.stop();
		isRunning = false;
	} else {
		// If the timer is not running, we reset everything
		table.setData([]);
		stopWatch.reset();
		label.text = 'Progress';
	}
});

// Pause button functionality
buttonPause.addEventListener('click',function(e) {
	// If the timer is running, we stop it
	if (isRunning) {
		buttonPause.title = 'Continue';
		stopWatch.stop();
		isRunning = false;
	} else {
		// If timer is not running, we start it
		isRunning = true;
		buttonPause.title = 'Pause';
		stopWatch.start();	
	}
});

// Comments page link button
	var buttonCommentsPage = Ti.UI.createButton({
		title: 'Add Comments',
		color: '#7139BB',
		backgroundColor: '#D1E5A7',
		font: {
			fontSize: '25sp',
			fontWeight: 'bold'
		},
		width: '500 px', 
		height: '150 px',
		top:30,
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});

	win.add(buttonCommentsPage);

	buttonCommentsPage.addEventListener('click', function() {
		var CommentsWindow = require('CommentsWindow');
			new CommentsWindow().open();
	});
	
// Back button
	var buttonBack = Ti.UI.createButton({
		title: 'Back',
		color: '#7139BB',
		backgroundColor: '#D1E5A7',
		font: {
			fontSize: '25sp',
			fontWeight: 'bold'
		},
		width: '300 px', 
		height: '100 px',
		top:30,
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});

	win.add(buttonBack);

	buttonBack.addEventListener('click', function() {
	var StartTaskWindow = require('StartTaskWindow');
			new StartTaskWindow().open();
	});	
	
TimeSpentLog.write(stopWatch.toString());

return win;

}

module.exports = StopwatchWindow;