function teamLogPage() {
	var win = Ti.UI.createWindow({
		backgroundColor: '#A6B97B',
		layout: 'vertical'
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

// Individual Log button
	var buttonIndividualLog = Ti.UI.createButton({
		title: 'Individual Log',
		color: '#7139BB',
		backgroundColor: '#D1E5A7',
		font: {
			fontSize: '25sp',
			fontWeight: 'bold'
		},
		width: '500 px', 
		height: '200 px',
		top:50,
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});

	win.add(buttonIndividualLog);
	
	buttonIndividualLog.addEventListener('click', function() {
	var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'individualLog.txt');
	var contents = f.read();
	var win1 = Ti.UI.createWindow({
  		backgroundColor: '#A6B97B',
  		exitOnClose: true,
 		fullscreen: false,
  		layout: 'vertical',
});
	var label1 = Ti.UI.createLabel({
  	color: '#900',
  	font: { fontSize:48 },
  	text: contents.text,
  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  	top: 30,
  	width: '500 px',
  	 height: '400 px'
});

win1.add(label1);
win1.open();
});
	
return win;	
	
}

module.exports = teamLogPage;