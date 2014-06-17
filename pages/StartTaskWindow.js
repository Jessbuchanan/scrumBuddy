function StartTaskWindow() {
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
		height: '50%',
		left: 2,
		right: 2,
		top: 5,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
	});
	
	var fourthBarView = Ti.UI.createView({
		width: '100%',
		height: '15%',
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
		
// Art page link button
	var buttonArtPage = Ti.UI.createButton({
		title: 'Art',
		color: '#7139BB',
		backgroundColor: '#D1E5A7',
		font: {
			fontSize: '25sp',
			fontWeight: 'bold'
		},
		borderRadius: 30,
		width: '30%', 
		height: '30%',
		top: 5,
		left: '10%',
		right: '10%',
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});


// Coding page link button
	var buttonCodingPage = Ti.UI.createButton({
		title: 'Coding',
		color: '#7139BB',
		backgroundColor: '#D1E5A7',
		font: {
			fontSize: '25sp',
			fontWeight: 'bold'
		},
		borderRadius: 30,
		width: '30%', 
		height: '30%',
		top: 5,
		left: '10%',
		right: '10%',
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});

// Design page link button
	var buttonDesignPage = Ti.UI.createButton({
		title: 'Design',
		color: '#7139BB',
		backgroundColor: '#D1E5A7',
		font: {
			fontSize: '25sp',
			fontWeight: 'bold'
		},
		borderRadius: 30,
		width: '30%', 
		height: '30%',
		top: 5,
		left: '10%',
		right: '10%',
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});

// Meeting page link button
	var buttonMeetingPage = Ti.UI.createButton({
		title: 'Meeting',
		color: '#7139BB',
		backgroundColor: '#D1E5A7',
		font: {
			fontSize: '25sp',
			fontWeight: 'bold'
		},
		borderRadius: 30,
		width: '30%', 
		height: '30%',
		top: 5,
		left: '10%',
		right: '10%',
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});

	//Create New button
		var buttonCreateNew = Ti.UI.createButton({
			color: '#7139BB',
			backgroundColor: '#D1E5A7',
			font: {
				fontSize: '15sp',
				fontWeight: 'bold'
			},
			borderRadius: 30,
			width: '30%', 
			height: '30%',
			top: 5,
			left: '35%',
			right: '35%',
			style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
		});
		
		var createNewTop = Ti.UI.createLabel({
		text: 'Create',
		color: '#7139BB',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: 10,
    	bottom: 0,
    	height: '50%',
    	width: '50%'
	});
			
		var createNewBottom = Ti.UI.createLabel({
		text: 'New',
		color: '#7139BB',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: 25,
    	bottom: 0,
    	height: '50%',
    	width: '50%'
	});
		
	buttonCreateNew.add([createNewTop, createNewBottom]);
	
	//Log Task button
		var buttonLogTask = Ti.UI.createButton({
			color: '#7139BB',
			backgroundColor: '#D1E5A7',
			font: {
				fontSize: '15sp',
				fontWeight: 'bold'
			},
			borderRadius: 30,
			width: '50%', 
			height: '70%',
			top: 5,
			left: '25%',
			right: '40%',
			style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
		});
		
		var logTaskTop = Ti.UI.createLabel({
		text: 'Log Current',
		color: '#7139BB',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: 5,
    	bottom: 0,
    	height: '50%',
    	width: '80%'
	});
			
		var logTaskBottom = Ti.UI.createLabel({
		text: 'Task',
		color: '#7139BB',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: 25,
    	bottom: 0,
    	height: '50%',
    	width: '50%'
	});
		
	buttonLogTask.add([logTaskTop, logTaskBottom]);
	
	//Calendar button
		var buttonCalendar = Ti.UI.createButton({
			color: '#7139BB',
			backgroundColor: '#D1E5A7',
			font: {
				fontSize: '15sp',
				fontWeight: 'bold'
			},
			borderRadius: 30,
			width: '50%', 
			height: '70%',
			top: 5,
			left: '25%',
			right: '40%',
			style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
		});
		
		var calendarLabel = Ti.UI.createLabel({
		text: 'Calendar',
		color: '#7139BB',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: 3,
    	bottom: 0,
    	height: '100%',
    	width: '100%'
	});
		
	buttonCalendar.add(calendarLabel);
		
	//Add Bar Views and labels to the Page	
		
		thirdBarView.add(buttonArtPage);
		
		thirdBarView.add(buttonCodingPage);
		
		thirdBarView.add(buttonDesignPage);
		
		thirdBarView.add(buttonMeetingPage);
		
		thirdBarView.add(buttonCreateNew);
		
		fourthBarView.add(buttonLogTask);
		
		fifthBarView.add(buttonCalendar);


		wrapperView.add(thirdBarView);
		wrapperView.add(fourthBarView);
		wrapperView.add(fifthBarView);
		win.add(wrapperView);
	
	
	//Art button event listener
	buttonArtPage.addEventListener('click', function() {
		var artTask = require('/taskPages/artTask');
			new artTask().open();
	});
	
	//Coding button event listener
	buttonCodingPage.addEventListener('click', function() {
		var codingTask = require('/taskPages/codingTask');
			new codingTask().open();
	});
	
	//Design button event listener
	buttonDesignPage.addEventListener('click', function() {
		var designTask = require('/taskPages/designTask');
			new designTask().open();
	});

	//Meeting page event listener
	buttonMeetingPage.addEventListener('click', function() {
		var meetingTask = require('/taskPages/meetingTask');
		new meetingTask().open();
	});

	//Create New page event listener
	buttonCreateNew.addEventListener('click', function() {
		var createNew = require('/taskPages/createNewTask');
		new createNew().open();
	});
	
	//Log Current Task event listener
	buttonLogTask.addEventListener('click', function(){
		var logTask = require('/pages/logCurrentTask');
		new logTask().open(); 
	});
	
	//Calendar page event listener
	buttonCalendar.addEventListener('click', function(){
		var calendar = require('/pages/CalendarPage');
		new calendar().open();
	});
	
	return win;	
}

module.exports = StartTaskWindow;
