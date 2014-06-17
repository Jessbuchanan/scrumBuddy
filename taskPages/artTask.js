
var hours = 0;
var minutes = 1;
function artTask() {
// Open the database and create schema (if needed)
	var timeDb = Ti.Database.open('artTimeEstimate.sqlite');
		timeDb.execute('CREATE TABLE IF NOT EXISTS TIME_ITEMS (ID INTEGER PRIMARY KEY AUTOINCREMENT, HOUR INTEGER, TIME_IS_COMPLETE INTEGER)');
	var taskName = require('taskNameText');
	var task = new taskName('artTimeEstimate');
	
	var win = Ti.UI.createWindow({
		backgroundColor: '#A6B97B',
		layout: 'horizontal'
	});

var ButtonBar = require("/uiElements/ButtonBar");
var buttonBar = new ButtonBar();
win.add(buttonBar);
 
buttonBar.addEventListener('onClick', function(e) {
    Ti.API.info("button "+e.id+" clicked");
});
 
var Button = require('/uiElements/Button');
var leftButton = new Button('signInButton');
var rightButton = new Button('settingsButton');
 
win.setLeftNavButton(leftButton);
win.setRightNavButton(rightButton);
 
leftButton.addEventListener('click', function(e){
    Ti.API.info("leftButton clicked");
});

//Button Bar 2
var ButtonBar2 = require("/uiElements/ButtonBar2");
var buttonBar2 = new ButtonBar2();
win.add(buttonBar2);
 
buttonBar2.addEventListener('onClick', function(e) {
    Ti.API.info("button "+e.id+" clicked");
});
 

var SecondSetButton = require('/uiElements/Button2');
var leftButton2 = new SecondSetButton('backButton');
var rightButton2 = new SecondSetButton('logsButton');
 
win.setLeftNavButton(leftButton2);
win.setRightNavButton(rightButton2);
 
leftButton2.addEventListener('click', function(e){
    Ti.API.info("leftButton clicked");
});

// Our wrapper view
	var wrapperView = Ti.UI.createScrollView({
    	width           : '100%',
    	height          : '100%',
    	layout: 'vertical'
	});
	
	var thirdBarView = Ti.UI.createView({
		width: '100%',
		height: '10%',
		top: 2,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
	});
	
	var fourthBarView = Ti.UI.createView({
		width: '100%',
		height: '25%',
		left: 2,
		right: 2,
		top: 2,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
	});
	
	var fifthBarView = Ti.UI.createView({
		width: '100%',
		height: '30%',
		left: 2,
		right: 2,
		top: 2,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
	});
	
	var sixthBarView = Ti.UI.createView({
		width: '100%',
		height: '30%',
		left: 2,
		right: 2,
		top: 2,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
	});
	
	//Third Bar label
		//Art Label
		var artLabel = Ti.UI.createLabel({
		text: 'Art',	
		color: '#7139BB',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    	font: {
			fontSize: '30sp',
			fontWeight: 'bold'
		},
    	top: 1,
    	bottom: 0,
    	left: 1,
    	right: 1,
    	height: '100%',
    	width: '100%'
	});
	
	//Fourth Bar text area and label
	var	taskNameText = require("/Functions/taskNameText");
		var taskName = new taskNameText('artTimeEstimate');
		fourthBarView.add(taskName);
		
	
	//Fifth Bar text area and label
		//Time estimate Label
		var timeEstimateLabel = Ti.UI.createLabel({
		  	color: 'purple',
		  	font: { fontSize:14 },
		  	shadowColor: 'grey',
		  	shadowOffset: {x:5, y:5},
		  	shadowRadius: 3,
		  	text: 'Time Estimate',
		  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		  	top: '5%',
		  	bottom: '10%',
		  	left: '1%',
		  	width: '90%', 
		  	height: '25%'		
		  	});
		
		var timeEstimateHours = Ti.UI.createTextArea({
	  		borderWidth: 2,
	  		borderColor: '#bbb',
	  		borderRadius: 5,
	  		backgroundColor: '#fff',
	  		//color: '#888',
	  		font: {fontSize:14, fontWeight:'bold'},
	  		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
	  		returnKeyType: Ti.UI.RETURNKEY_GO,
	  		clearOnEdit: true, 
	  		textAlign: 'left',
	  		hintText: 'Input hours needed to complete the task',
	  		top: 5,
	  		left: '5%',
	  		width: '20%', 
	  		height : '35%'
	});
			// //Hours set button
			// var hoursButton = Ti.UI.createButton({
		  	// color: 'purple',
		  	// font: { fontSize:14 },
		  	// shadowColor: 'grey',
		  	// shadowOffset: {x:5, y:5},
		  	// shadowRadius: 3,
		  	// title: 'Set Hours',
		  	// textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		  	// top: '5%',
		  	// left: '1%',
		  	// right: '2%',
		  	// width: '25%', 
		  	// height: '20%'		
		  	// });
// 		  	
		  	// hoursButton.addEventListener('click',function(e){
				// timeEstimateHours.blur();
// });
// 		  		
		var timeEstimateMinutes = Ti.UI.createTextArea({
	  		borderWidth: 2,
	  		borderColor: '#bbb',
	  		borderRadius: 5,
	  		//color: '#888',
	  		backgroundColor: '#fff',
	  		font: {fontSize:14, fontWeight:'bold'},
	  		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
	  		returnKeyType: Ti.UI.RETURNKEY_GO,
	  		clearOnEdit: true, 
	  		textAlign: 'left',
	  		hintText: 'Input the minutes needed to complete the task',
	 		// Check for later: hint text does not show on device. 
	  		top: 5,
	  		//left: 2,
	  		width: '20%', 
	  		height : '35%'
	});
	
	// //Minutes set button
			// var minutesButton = Ti.UI.createButton({
		  	// color: 'purple',
		  	// font: { fontSize:14 },
		  	// shadowColor: 'grey',
		  	// shadowOffset: {x:5, y:5},
		  	// shadowRadius: 3,
		  	// title: 'Set Minutes',
		  	// textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		  	// top: '5%',
		  	// //left: '1%',
		  	// width: '25%', 
		  	// height: '20%'		
		  	// });
// 		  	
		   // minutesButton.addEventListener('click',function(e){
				// timeEstimateMinutes.blur();
// });

	var setButton = Ti.UI.createButton({
		color: 'purple',
		font: {fontSize: 14 },
		shadowColor: 'grey',
		shadowOffset: {x:5, y:5},
		shadowRadius: 3,
		title: 'Set Time',
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		top: '5%',
		width: '25%',
		height: '20%',
	});
	
	 
	 setButton.addEventListener('click', function(e) {
		addTime(timeEstimateHours.value);
 });

 timeEstimateHours.addEventListener('return', function() {
	 setButton.fireEvent('click');
 });
 
 // timeEstimateMinutes.addEventListener('return', function() {
 	// setButton.fireEvent('click');
 // });
 
 var selectionView = Ti.UI.createTableView({
	width: '70%',
	height: '30%',
	backgroundColor: '#f8e4cc',
	separatorColor: '#447294'
});

selectionView.addEventListener('click', function(b) {
	var timeItem = b.rowData;
	var timeIsComplete = (timeItem.hasCheck ? 0 : 1);

	timeDb.execute('UPDATE TIME_ITEMS SET TIME_IS_COMPLETE = ? WHERE ID = ?',
			 timeIsComplete, timeItem.id);
	refreshSelectionView();
});

	//Start Button
		var buttonStart = Ti.UI.createButton({
		backgroundColor: '#D1E5A7',
		width: '40%',
		height: '70%',
		top: '10%',
		left: 1,
		borderRadius: 30,
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});
		var startLabel = Ti.UI.createLabel({
		text: 'Start',	
		color: '#7139BB',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: 1,
    	bottom: 0,
    	left: '5%',
    	right: 1,
    	height: '100%',
    	width: '100%'
	});
	
	buttonStart.add(startLabel);
	
	//Store for Later Button
		var buttonStoreTask = Ti.UI.createButton({
		backgroundColor: '#D1E5A7',
		width: '40%',
		height: '70%',
		top: '10%',
		left: '10%',
		borderRadius: 30,
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});
		var storeTaskTop = Ti.UI.createLabel({
		text: 'Store',	
		color: '#7139BB',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: '15%',
    	bottom: 0,
    	left: '20%',
    	right: 1,
    	height: '50%',
    	width: '50%'
	});
	
	var storeTaskBottom = Ti.UI.createLabel({
		text: 'Task',	
		color: '#7139BB',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: '30%',
    	bottom: 0,
    	left: '20%',
    	right: 1,
    	height: '50%',
    	width: '50%'
	});
	
	buttonStoreTask.add([storeTaskTop, storeTaskBottom]);
		
//Add Bar Views and labels to the Page	
		
		thirdBarView.add(artLabel);
		
		fifthBarView.add(timeEstimateLabel);
		
		fifthBarView.add(timeEstimateHours);
		
		//fifthBarView.add(hoursButton);
		
		fifthBarView.add(timeEstimateMinutes);
		
		fifthBarView.add(setButton);
		
		fifthBarView.add(selectionView);
	
		//fifthBarView.add(minutesButton);
		
		//fifthBarView.add(picker);
		
		//fifthBarView.add(doneBtn);
		
		sixthBarView.add(buttonStart);
		
		sixthBarView.add(buttonStoreTask);

		wrapperView.add(thirdBarView);
		wrapperView.add(fourthBarView);
		wrapperView.add(fifthBarView);
		wrapperView.add(sixthBarView);
		win.add(wrapperView);

// Make sure the dababase is closed when the app exits
win.addEventListener('close', function() {
	db.close();
});

win.addEventListener('close', function() {
	timeDb.close();
});
	
	return win;

function addTime(hour) {
	timeDb.execute('INSERT INTO TIME_ITEMS (HOUR, TIME_IS_COMPLETE) VALUES (?, 0)', hour);
	timeEstimateHours.value = '';
	//timeEstimateMinutes.value = '';
	timeEstimateHours.blur();
	//timeEstimateMinutes.blur();
	refreshSelectionView();
}

function refreshSelectionView() {
	var allRows = timeDb.execute('SELECT * FROM TIME_ITEMS');
	var data = [];

	while (allRows.isValidRow()) {
		var timeIsComplete = allRows.fieldByName('TIME_IS_COMPLETE');

		data.push({
			title: '' + allRows.fieldByName('HOUR') + '',
			hasCheck: (timeIsComplete===1) ? true : false,
			id: allRows.fieldByName('ID'),
			color: '#153450',
			className: 'time'
		});

		allRows.next();
	};

	selectionView.setData(data);
}


}

module.exports = artTask;