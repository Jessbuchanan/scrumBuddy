var style = {
		barView: {
		width: '100%',
		height: '10%',
		left: 2,
		right: 2,
		top: 0,
		layout: 'horizontal',
		backgroundColor: 'red'
	},
	//Sign in button 
	buttonSignIn: {
	title: 'hi',
	backgroundColor: '#D1E5A7',
	height: '70%',
	width: '40%',
	left: '1%',
	right: 0,	
	top: '5%',	
	borderRadius: 20,	
	color: '#7139BB',	
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	    font: {	
		fontSize: '10 sp',	
		fontWeight: 'bold'	
	},	
	style: Ti.UI.iPhone.SystemButtonStyle.PLAIN	
	},
	//Settings Button	
	buttonSettings : {	
	title:'Settings',	
	backgroundColor: '#D1E5A7',	
	height: '50%',	
	width: '30%',
	left: '60%',	
	top: -40,
	borderRadius: 30,	
	color: '#7139BB',	
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,	
	    font: {	
		fontSize: '10 sp',
		fontWeight: 'bold'	
	},	
	style: Ti.UI.iPhone.SystemButtonStyle.PLAIN	
	}
};

function signInBar(styleId) {
    if (!styleId || !style[styleId]) {
        Ti.API.info("styleId argument not provided or style not found");
        return;
    }
    
  	var firstBarView = Ti.UI.createView(style[styleId]);
	return firstBarView;
	
	var self = Ti.UI.createButton(style[styleId]);
    return self;
}

module.exports = signInBar;