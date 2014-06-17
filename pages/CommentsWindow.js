function CommentsWindow() {
	var window = Ti.UI.createWindow({
  	backgroundColor: '#A6B97B'
	});

// Creating a file for the log
//var CommentsLog = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'CommentsLog.txt');
//if(CommentsLog.exists()===false) {
    //CommentsLog.createFile();
 //return file.exists() ? file.read().text : "";
//}
//CommentsLog.write('writing to the file would be enough to create it');	

var cancelButton = Ti.UI.createButton({ 
	title: 'Cancel',
	systemButton: Ti.UI.iPhone.SystemButton.CANCEL,
	color: 'blue',
	width: ' 200 px', 
	height: '100 px',
	style: Titanium.UI.iphone.SystemButtonStyle.PLAIN
	
	});

// Submit Button
var buttonSubmit = Ti.UI.createButton({
	title: 'Submit',
	color: '#7139BB',
	width: '200 px', 
	height: '100 px',
	top: 200,
	backgroundColor: '#D1E5A7',
	font: {
		fontSize: '25sp',
		fontWeight: 'bold'
	},
	style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
});		

window.add(buttonSubmit);

	var comments = Ti.UI.createLabel({
  	color: 'black',
  	font: { fontSize:48 },
  	shadowColor: 'grey',
  	shadowOffset: {x:5, y:5},
  	shadowRadius: 3,
  	text: 'Comments',
  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  	top: 30,
  	width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});

	window.add(comments);

	var textArea = Ti.UI.createTextArea({
  		borderWidth: 2,
  		borderColor: '#bbb',
  		borderRadius: 5,
  		color: '#888',
  		font: {fontSize:20, fontWeight:'bold'},
  		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
  		returnKeyType: Ti.UI.RETURNKEY_GO,
  		clearOnEdit: true, 
  		textAlign: 'left',
  		value: 'Type your comments here',
  		top: 100,
  		width: 300, 
  		height : 70
  		
	});

	window.add(textArea);	

buttonSubmit.addEventListener('click', function(e) {
			var IndividualLog = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'individualLog.txt');
		for(var i=0; i<10; i++) {
    		IndividualLog.write(i+':'+'\n', true); 
			IndividualLog.write(textArea.value);
			textArea.blur();
		}
			alert(IndividualLog.read().text);
});

// Home Page button
	var buttonHomePage = Ti.UI.createButton({
		title: 'Home',
		color: '#7139BB',
		backgroundColor: '#D1E5A7',
		font: {
			fontSize: '25sp',
			fontWeight: 'bold'
		},
		width: '200 px', 
		height: '100 px',
		top:300,
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});

	window.add(buttonHomePage);

	buttonHomePage.addEventListener('click', function() {
	var HomePage = require('HomePage');
			new HomePage().open();
	});	

return window;

}

//make constructor function the public component interface
module.exports = CommentsWindow;