function taskNameText(dbName){
	var db = Ti.Database.open(dbName + '.sqlite');
		//db.execute('CREATE TABLE IF NOT EXISTS TASKNAME_ITEMS (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT, IS_COMPLETE INTEGER)');
	
	var taskNameView = Ti.UI.createView({
		width: '100%',
		height: '80%',
		left: 2,
		right: 2,
		top: 2,
		layout: 'horizontal',
		backgroundColor: '#b2d46c'
	});
 
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
		  	width: Ti.UI.SIZE, height: Ti.UI.SIZE
		});
		
		var taskNameText = Ti.UI.createTextArea({
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
		 title: 'ADD',
		 color: '#e9e9e9',
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
	color: '#e9e9e9'
});

btnClear.addEventListener('click', function(e) {
	db.execute('DELETE FROM TASKNAME_ITEMS WHERE IS_COMPLETE = 1;');
	refreshTaskList();
});

var taskList = Ti.UI.createTableView({
	width: '70%',
	height: '30%',
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

	taskNameView.add(taskNameLabel);
	taskNameView.add(taskNameText);
	taskNameView.add(btnAdd);
	taskNameView.add(btnClear);
	taskNameView.add(taskList);
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
 return taskNameView;
}
module.exports = taskNameText;