function codingTask() {
	// Open the database and create schema (if needed)
	var db = Ti.Database.open('codingTaskName.sqlite');
		db.execute('CREATE TABLE IF NOT EXISTS TASKNAME_ITEMS (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT, IS_COMPLETE INTEGER)');
	
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
 
// see above
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
 
// see above
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
		left: 2,
		right: 2,
		top: 5,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
	});
	
	var fourthBarView = Ti.UI.createView({
		width: '100%',
		height: '35%',
		left: 2,
		right: 2,
		top: 5,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
	});
	
	var fifthBarView = Ti.UI.createView({
		width: '100%',
		height: '15%',
		left: 2,
		right: 2,
		top: 5,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
	});
	
		
	var sixthBarView = Ti.UI.createView({
		width: '100%',
		height: '30%',
		left: 2,
		right: 2,
		top: 5,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
	});
	
	//Third Bar label
		//Coding Label
		var codingLabel = Ti.UI.createLabel({
		text: 'Coding',	
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
		//Task Name Label
		var taskNameLabel = Ti.UI.createLabel({
		  	color: 'purple',
		  	font: { fontSize:14 },
		  	shadowColor: 'grey',
		  	shadowOffset: {x:5, y:5},
		  	shadowRadius: 3,
		  	text: 'Task Name',
		  	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		  	top: 10,
		  	left: '1%',
		  	width: '20%', 
		  	height: '20%'
		});
		
		var taskNameText = Ti.UI.createTextField({
	  		borderWidth: 2,
	  		borderColor: '#bbb',
	  		borderRadius: 5,
	  		color: '#888',
	  		font: {fontSize:14, fontWeight:'bold'},
	  		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	  		returnKeyType: Ti.UI.RETURNKEY_GO,
	  		clearOnEdit: true, 
	  		textAlign: 'left',
	  		hintText: 'Type the name of the task here',
	  		top: 5,
	  		width: '70%', 
	  		height : '20%'
	});
	
	var btnAdd = Ti.UI.createButton({
		backgroundColor: "purple",
		text: 'ADD',
		left: 15,
		height: '45dp',
		width: '45dp'
	});

	btnAdd.addEventListener('click', function(e) {
		addTask(taskNameText.value);
});

taskNameText.addEventListener('return', function() {
	btnAdd.fireEvent('click');
});

var btnClear = Ti.UI.createButton({
	title: 'Clear',
	right: 5,
	color: '##e9e9e9'
});

btnClear.addEventListener('click', function(e) {
	db.execute('DELETE FROM TASKNAME_ITEMS WHERE IS_COMPLETE = 1;');
	refreshTaskList();
});

var taskList = Ti.UI.createTableView({
	width: '70%',
	height: '60%',
	backgroundColor: '#f8e4cc',
	separatorColor: '#447294'
});

taskList.addEventListener('click', function(e) {
	var taskNameItem = e.rowData;
	var isComplete = (taskNameItem.hasCheck ? 0 : 1);

	db.execute('UPDATE TASKNAME_ITEMS SET IS_COMPLETE = ? WHERE ID = ?',
				isComplete, taskNameItem.id);
	refreshTaskList();
});

	//Fifth Bar text area and label
		//Time estimate Label
		var timeEstimateLabel = Ti.UI.createLabel({
		  	color: 'purple',
		  	font: { fontSize:14 },
		  	shadowColor: 'grey',
		  	shadowOffset: {x:5, y:5},
		  	shadowRadius: 3,
		  	text: 'Time Estimate',
		  	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		  	top: '25%',
		  	left: '1%',
		  	width: Ti.UI.SIZE, height: Ti.UI.SIZE
		});
		
		var timeEstimateTextArea = Ti.UI.createTextArea({
	  		borderWidth: 2,
	  		borderColor: '#bbb',
	  		borderRadius: 5,
	  		color: '#888',
	  		font: {fontSize:14, fontWeight:'bold'},
	  		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
	  		returnKeyType: Ti.UI.RETURNKEY_GO,
	  		clearOnEdit: true, 
	  		textAlign: 'left',
	  		value: 'Estimate the amount of time needed to complete the task',
	  		top: 5,
	  		width: '60%', 
	  		height : '80%'
	});
	
	//Start Button
		var buttonStart = Ti.UI.createButton({
		backgroundColor: '#D1E5A7',
		width: '40%',
		height: '70%',
		top: 1,
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
		top: 1,
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
		
		thirdBarView.add(codingLabel);
		
		fourthBarView.add(taskNameLabel);
		
		fourthBarView.add(taskNameText);
		
		fourthBarView.add(btnAdd);
		
		fourthBarView.add(btnClear);
		
		fourthBarView.add(taskList);
		
		fifthBarView.add(timeEstimateLabel);
		
		fifthBarView.add(timeEstimateTextArea);
		
		sixthBarView.add(buttonStart);
		
		sixthBarView.add(buttonStoreTask);

		wrapperView.add(thirdBarView);
		wrapperView.add(fourthBarView);
		wrapperView.add(fifthBarView);
		wrapperView.add(sixthBarView);
		win.add(wrapperView);
	
	return win;
// Make sure the dababase is closed when the app exits
win.addEventListener('close', function() {
	db.close();
});
	
	return win;


function addTask(name) {
	db.execute('INSERT INTO TASKNAME_ITEMS (NAME, IS_COMPLETE) VALUES (?, 0)', name);
	taskNameText.value = '';
	taskNameText.blur();
	refreshTaskList();
}
function refreshTaskList() {
	var rows = db.execute('SELECT * FROM TASKNAME_ITEMS');
	var data = [];

	while (rows.isValidRow()) {
		var isComplete = rows.fieldByName('IS_COMPLETE');

		data.push({
			title: '' + rows.fieldByName('NAME') + '',
			hasCheck: (isComplete===1) ? true : false,
			id: rows.fieldByName('ID'),
			color: '#153450',
			className: 'task'
		});

		rows.next();
	};

	taskList.setData(data);
}
}

module.exports = codingTask;