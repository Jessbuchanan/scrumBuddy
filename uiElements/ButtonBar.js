function ButtonBar() {
 
    var self = Ti.UI.createView({
        top:0,
        backgroundColor:'#335463',
        height: 44
    });
 
    var button1 = Ti.UI.createButton({
        id: "button1",
        title:"Sign In",
        left:40
    });
    var button2 = Ti.UI.createButton({
        id: "button2",
        title:"Settings",
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
 
    return self;
}
 
module.exports = ButtonBar;