var style = {
    signInButton: {
        title:"Sign In",
        color:"red"
    },
    settingButton: {
        title:"Settings",
        color:"blue"
    }
};
 
function Button(styleId) {
    if (!styleId || !style[styleId]) {
        Ti.API.info("styleId argument not provided or style not found");
        return;
    }
    var self = Ti.UI.createButton(style[styleId]);
    return self;
}
module.exports = Button;