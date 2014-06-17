function ButtonBar2() {
 
    var self = Ti.UI.createView({
        top:5,
        backgroundColor:'#335463',
        height: 44
    });
 
    var button1 = Ti.UI.createButton({
        id: "button1",
        title:"Back",
        backgroundColor: '#D1E5A7',
		width: '40%',
		height: '70%',
		borderRadius: 30,
		color: '#7139BB',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    	font: {
			fontSize: '15sp',
			fontWeight: 'bold'
		},
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
	    left:40
    });
    var button2 = Ti.UI.createButton({
        id: "button2",
        title:"Logs",
        right:40
    });
 
    self.add(button1);
    self.add(button2);
 
 
    function click(e) {
        self.fireEvent('onClick', {
            id:e.source.id
        });
    }
 
    button1.addEventListener('click', click);
    button2.addEventListener('click', click);
    
    //Back button event listener	
	button1.addEventListener('click', function() {
		var HomePage = require('/pages/HomePage');
		new HomePage().open();
	});	
 
 	//Logs button event listener	
	button2.addEventListener('click', function() {
		var LogsWindow = require('/pages/LogsWindow');
		new LogsWindow().open();
	});	
	
    return self;
}
 
module.exports = ButtonBar2;