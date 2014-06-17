function timeEstimatePicker(){
	var hours = 0;
	var minutes = 1;
	var picker = Ti.UI.createPicker({
  		type:Ti.UI.PICKER_TYPE_COUNT_DOWN_TIMER,
  		top:2,
  		width: '50%',
  		height: '20%'
	});
	
	//Ti.App.Properties.setInt('countDownDuration', 0);
// by default value

picker.addEventListener("change", function(e) {
	Ti.App.Properties.setInt('countDownDuration', e.countDownDuration);

	if (e.countDownDuration >= 3600000)
		{
			hours = Math.floor(Ti.App.Properties.getInt('countDownDuration')/3600000);
			minutes = Math.floor(Ti.App.Properties.getInt('countDownDuration')/60000 - (hours*60));
		}
	
	else {
		minutes = Math.floor(Ti.App.Properties.getInt('countDownDuration')/60000);
		hours = 0;	
	}
    //Ti.App.Properties.setInt('countDownDuration', e.countDownDuration/60000);
    // set  value
});

var doneBtn = Ti.UI.createButton({
    title : 'Get Value',
    height : '15%',
    width : '30%'
});
 
doneBtn.addEventListener('click', function() {
    // get value
    if(hours > 0){
    	alert('You set the time estimate to ' + hours + ' hours and ' + minutes+ ' minutes');
    }
    else {
    	alert('You set the time estimate to ' + minutes + ' minutes');
    }
    //Ti.API.info('get>>>>' + val);
    //alert('You set the time estimate to ' + val + ' hours and minutes');
});
};

module.exports = timeEstimatePicker;
