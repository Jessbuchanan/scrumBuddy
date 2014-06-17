function ShortTermGoalsPage() {
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
	
	return win;	
	
}

module.exports = ShortTermGoalsPage;