var style = {
   backButton: {
        title:"Back",
        color:"red"
    },
    logsButton: {
        title:"Logs",
        color:"blue"
    }
};
 
function Button2(styleId) {
    if (!styleId || !style[styleId]) {
        Ti.API.info("styleId argument not provided or style not found");
        return;
    }
    var self = Ti.UI.createButton(style[styleId]);
    return self;
}
module.exports = Button2;