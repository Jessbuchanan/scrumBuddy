function HomePageWindow() {
	var win = Ti.UI.createWindow({
		backgroundColor: '#A6B97B',
		layout:'horizontal'
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

	// Our wrapper view
	var wrapperView = Ti.UI.createScrollView({
    	width           : '100%',
    	height          : '100%',
    	layout: 'vertical'
	});

	var secondBarView = Ti.UI.createView({
		width: '100%',
		height: '10%',
		left: 2,
		right: 2,
		top: 5,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
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
		height: '40%',
		left: 2,
		right: 2,
		top: 5,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
	});
	
	var fifthBarView = Ti.UI.createView({
		width: '100%',
		height: '10%',
		left: 2,
		right: 2,
		top: 5,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
	});
	
	var sixthBarView = Ti.UI.createView({
		width: '100%',
		height: '15%',
		left: 2,
		right: 2,
		top: 5,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
	});

	//Second Bar View 
		//Updates feed label
	var updateFeedLabel = Ti.UI.createLabel({
    	text: 'Updates',
    	color: '#7139BB',
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: 12.5,
    	bottom: 0,
    	height: '10%',
    	width: '100%'
	});	
	//Third Bar View Calendar feed label
	var calendarFeedLabel = Ti.UI.createLabel({
    	text: 'Calendar Feed',
    	color: '#7139BB',
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: 12.5,
    	bottom: 0,
    	height: '10%',
    	width: '100%'
	});
	
	//Fourth Bar View Buttons
		// Start Task page link button
	var buttonStartTaskPage = Ti.UI.createButton({
		backgroundColor: '#D1E5A7',
		height: '25%',
		width: '40%',
		left: 5,
		right: 5,
		top: 10,
		borderRadius: 30,
		style: Ti.UI.iPhone.SystemButtonStyle.PLAIN
	});

	var startTaskTop = Ti.UI.createLabel({
    	text: 'Start',
    	color: '#7139BB',
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: 2,
    	bottom: 0,
    	height: '30%',
    	width: '30%'
	});
	var startTaskBottom = Ti.UI.createLabel({
		text: 'Task',
		font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: 15,
		color: '#7139BB',    
    	height:'35%',
    	width: '35%',
    	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
 
	buttonStartTaskPage.add([startTaskTop, startTaskBottom]);

		// Log page button
	var buttonLogPage = Ti.UI.createButton({
		backgroundColor: '#D1E5A7',
		height: '25%',
		width: '40%',
		left: 5,
		right: 5,
		top: 10,
		borderRadius: 30,
		style: Ti.UI.iPhone.SystemButtonStyle.PLAIN
	});
	
	var logPageTop = Ti.UI.createLabel({
    	text: 'Logs',
    	color: '#7139BB',
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
	    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	    top: '20%',
	    bottom: 0,
	    height: '30%',
	    width: '30%'
	});
	
	var logPageBottom = Ti.UI.createLabel({
	    bottom: 1,
	    height:'35%',
	    width: '35%',
	    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
 
	buttonLogPage.add([logPageTop, logPageBottom]);	
	
		//Calendar page button
	var buttonCalendarPage = Ti.UI.createButton({
		backgroundColor: '#D1E5A7',
		height: '25%',
		width: '40%',
		left: 5,
		right: 5,
		top: 10,
		borderRadius: 30,
		style: Ti.UI.iPhone.SystemButtonStyle.PLAIN
	});
	
	var CalendarPageTop = Ti.UI.createLabel({
	    text: 'Calendar',
	    color: '#7139BB',
	    font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
	    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	    top: 12.5,
	    bottom: 0,
	    left: '20%',
	    right: 0,
	    height: '30%',
	    width: '50%',
	});
	var CalendarPageBottom = Ti.UI.createLabel({
	    bottom: 1,
	    height:'30%',
	    width: '50%',
	    left: 1,
	    right: 0,
	    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
 
	buttonCalendarPage.add([CalendarPageTop, CalendarPageBottom]);	

		//Postponed page button
	var buttonPostponedPage = Ti.UI.createButton({
		backgroundColor: '#D1E5A7',
		height: '25%',
		width: '40%',
		left: 5,
		right: 5,
		top: 10,
		borderRadius: 30,
		style: Ti.UI.iPhone.SystemButtonStyle.PLAIN
	});
	
	var postponedPageTop = Ti.UI.createLabel({
	    text: 'Postponed',
	    color: '#7139BB',
	    font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
	    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	    top: 12.5,
	    bottom: 0,
	    left: '25%',
	    right: 0,
	    height: '30%',
	    width: '60%'
	});
	var postponedPageBottom = Ti.UI.createLabel({
	    bottom: 1,
	    height:'30%',
	    width: '60%',
	    left: 1,
	    right: 0,
	    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	 
	buttonPostponedPage.add([postponedPageTop, postponedPageBottom]);	
	
		//Stored Tasks Button
		var buttonStoredTasks = Ti.UI.createButton({
		backgroundColor: '#D1E5A7',
		width: '40%',
		height: '25%',
		top: 10,
		left: '30%',
		borderRadius: 30,
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});
		var storedTasksTop = Ti.UI.createLabel({
		text: 'Stored',	
		color: '#7139BB',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: '25%',
    	bottom: 0,
    	left: '25%',
    	right: 0,
    	height: '30%',
    	width: '50%'
	});
		var storedTasksBottom = Ti.UI.createLabel({
		text: 'Tasks',	
		color: '#7139BB',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
    	top: '45%',
    	bottom: 0,
    	left: '25%',
    	right: 0,
    	height: '30%',
    	width: '50%'
	});
	
	buttonStoredTasks.add([storedTasksTop, storedTasksBottom]);
	
	
	//Fifth Bar View Buttons
		//Short Term Goals Button
	var buttonShortTermGoals = Titanium.UI.createButton({
		backgroundColor: '#D1E5A7',
		height: '70%',
		width: '45%',
		left: 5,
		right: 5,
		top: 5,
		borderRadius: 30,
		style: Ti.UI.iPhone.SystemButtonStyle.PLAIN
	});

	var shortTermGoalsTop = Ti.UI.createLabel({
	    text: 'Short Term',
	    color: '#7139BB',
	    font: {
			fontSize: '15sp',
			fontWeight: 'bold'
			},
	    top: 2,
	    bottom: 0,
	    height: '60%',
	    width: '60%'
	});
	var shortTermGoalsBottom = Ti.UI.createLabel({
	    text: 'Goals',
	    color: '#7139BB',
	    font: {
			fontSize: '15sp',
			fontWeight: 'bold'
			},
	    bottom: 1,
	    height:'60%',
	    width: '60%',
	    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
 
	buttonShortTermGoals.add([shortTermGoalsTop, shortTermGoalsBottom]);

		//Long Term Goals Button
	var buttonLongTermGoals = Titanium.UI.createButton({
		backgroundColor: '#D1E5A7',
		height: '70%',
		width: '45%',
		left: 5,
		right: 5,
		top: 5,
		borderRadius: 30,
		style: Ti.UI.iPhone.SystemButtonStyle.PLAIN
	});

	var longTermGoalsTop = Ti.UI.createLabel({
    	text: 'Long Term',
    	color: '#7139BB',
	    font: {
			fontSize: '15sp',
			fontWeight: 'bold'
			},
	    top: 2,
	    bottom: 0,
	    height: '60%',
	    width: '60%'
	});
	
	var longTermGoalsBottom = Ti.UI.createLabel({
	    text: 'Goals',
	    color: '#7139BB',
	    font: {
			fontSize: '15sp',
			fontWeight: 'bold'
			},
	    bottom: 1,
	    height:'60%',
	    width: '60%',
	    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
 
	buttonLongTermGoals.add([longTermGoalsTop, longTermGoalsBottom]);

	//Sixth Bar View Button
		//Projects Page Button
	var buttonProjectsPage = Ti.UI.createButton({
		backgroundColor: '#D1E5A7',
		height: '70%',
		width: '45%',
		left: '25%',
		top: 12.5,
		borderRadius: 30,
		style: Ti.UI.iPhone.SystemButtonStyle.PLAIN
	});
	
	var projectsLabel = Ti.UI.createLabel({
	    text: 'Projects',
	    color: '#7139BB',
	    font: {
			fontSize: '15sp',
			fontWeight: 'bold'
			},
	    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	    top: 10,
	    bottom: 0,
	    height: '60%',
	    width: '60%'
	});

	buttonProjectsPage.add(projectsLabel);

	//Add Bar Views and labels to the Page	
	
	secondBarView.add(updateFeedLabel);
	
	thirdBarView.add(calendarFeedLabel);
	
	fourthBarView.add(buttonLogPage);

	fourthBarView.add(buttonStartTaskPage);
	
	fourthBarView.add(buttonCalendarPage);
	
	fourthBarView.add(buttonPostponedPage);
	
	fourthBarView.add(buttonStoredTasks);

	fifthBarView.add(buttonShortTermGoals);

	fifthBarView.add(buttonLongTermGoals);
	
	sixthBarView.add(buttonProjectsPage);
	
	wrapperView.add(secondBarView);
	wrapperView.add(thirdBarView);
	wrapperView.add(fourthBarView);
	wrapperView.add(fifthBarView);
	wrapperView.add(sixthBarView);
	win.add(wrapperView);


	buttonStartTaskPage.addEventListener('click', function() {
		var StartTaskWindow = require('/pages/StartTaskWindow');
		new StartTaskWindow().open();
	});

	buttonLogPage.addEventListener('click', function() {
		var LogsWindow = require('/pages/LogsWindow');
		new LogsWindow().open();
	});

	//buttonCalendarPage.addEventListener('click', function() {
		//var CalendarPage = require('/pages/CalendarPage');
		//new CalendarPage().open();
	//});
	
	buttonPostponedPage.addEventListener('click', function(){
		var PostponedPage = require('/pages/PostponedPage');
		new PostponedPage().open();
	});
	
	buttonStoredTasks.addEventListener('click', function(){
		var StoredTasks = require('/pages/StoredTasksPage');
		new StoredTasks().open();
	});
	
	buttonShortTermGoals.addEventListener('click', function() {
		var ShortTermGoalsPage = require('/pages/ShortTermGoalsPage');
		new ShortTermGoalsPage().open();
	});
	
	buttonLongTermGoals.addEventListener('click', function(){
		var LongTermGoalsPage = require('/pages/LongTermGoalsPage');
		new LongTermGoalsPage().open();
	});
	
	buttonProjectsPage.addEventListener('click', function(){
		var ProjectsPage = require('/pages/ProjectsPage');
		new ProjectsPage().open();
	});
	
	return win;
}

module.exports = HomePageWindow;