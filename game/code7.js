gdjs.ConfirmCode = {};
gdjs.ConfirmCode.GDNoButtonObjects1_1final = [];

gdjs.ConfirmCode.GDYesButtonObjects1_1final = [];

gdjs.ConfirmCode.GDBackgroundObjects1= [];
gdjs.ConfirmCode.GDBackgroundObjects2= [];
gdjs.ConfirmCode.GDGameTitleObjects1= [];
gdjs.ConfirmCode.GDGameTitleObjects2= [];
gdjs.ConfirmCode.GDPlayerModelObjects1= [];
gdjs.ConfirmCode.GDPlayerModelObjects2= [];
gdjs.ConfirmCode.GDConfirmObjects1= [];
gdjs.ConfirmCode.GDConfirmObjects2= [];
gdjs.ConfirmCode.GDNoButtonObjects1= [];
gdjs.ConfirmCode.GDNoButtonObjects2= [];
gdjs.ConfirmCode.GDYesButtonObjects1= [];
gdjs.ConfirmCode.GDYesButtonObjects2= [];
gdjs.ConfirmCode.GDNoObjects1= [];
gdjs.ConfirmCode.GDNoObjects2= [];
gdjs.ConfirmCode.GDSureObjects1= [];
gdjs.ConfirmCode.GDSureObjects2= [];
gdjs.ConfirmCode.GDYesObjects1= [];
gdjs.ConfirmCode.GDYesObjects2= [];
gdjs.ConfirmCode.GDCursorObjects1= [];
gdjs.ConfirmCode.GDCursorObjects2= [];

gdjs.ConfirmCode.conditionTrue_0 = {val:false};
gdjs.ConfirmCode.condition0IsTrue_0 = {val:false};
gdjs.ConfirmCode.condition1IsTrue_0 = {val:false};
gdjs.ConfirmCode.condition2IsTrue_0 = {val:false};
gdjs.ConfirmCode.conditionTrue_1 = {val:false};
gdjs.ConfirmCode.condition0IsTrue_1 = {val:false};
gdjs.ConfirmCode.condition1IsTrue_1 = {val:false};
gdjs.ConfirmCode.condition2IsTrue_1 = {val:false};
gdjs.ConfirmCode.conditionTrue_2 = {val:false};
gdjs.ConfirmCode.condition0IsTrue_2 = {val:false};
gdjs.ConfirmCode.condition1IsTrue_2 = {val:false};
gdjs.ConfirmCode.condition2IsTrue_2 = {val:false};


gdjs.ConfirmCode.mapOfGDgdjs_46ConfirmCode_46GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.ConfirmCode.GDCursorObjects1});gdjs.ConfirmCode.mapOfGDgdjs_46ConfirmCode_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.ConfirmCode.GDNoButtonObjects2});gdjs.ConfirmCode.mapOfGDgdjs_46ConfirmCode_46GDYesButtonObjects2Objects = Hashtable.newFrom({"YesButton": gdjs.ConfirmCode.GDYesButtonObjects2});gdjs.ConfirmCode.eventsList0 = function(runtimeScene) {

{


gdjs.ConfirmCode.condition0IsTrue_0.val = false;
{
gdjs.ConfirmCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ConfirmCode.condition0IsTrue_0.val) {
gdjs.ConfirmCode.GDCursorObjects1.length = 0;

{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().get("Confirm"), false);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ConfirmCode.mapOfGDgdjs_46ConfirmCode_46GDCursorObjects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "Cursor", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "Cursor", 0), "Cursor");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.ConfirmCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.ConfirmCode.GDCursorObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{for(var i = 0, len = gdjs.ConfirmCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.ConfirmCode.GDBackgroundObjects1[i].setYOffset(gdjs.ConfirmCode.GDBackgroundObjects1[i].getYOffset() + (-(300) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.ConfirmCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.ConfirmCode.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "Cursor", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "Cursor", 0));
}
}}

}


{

gdjs.ConfirmCode.GDNoButtonObjects1.length = 0;


gdjs.ConfirmCode.condition0IsTrue_0.val = false;
{
{gdjs.ConfirmCode.conditionTrue_1 = gdjs.ConfirmCode.condition0IsTrue_0;
gdjs.ConfirmCode.GDNoButtonObjects1_1final.length = 0;gdjs.ConfirmCode.condition0IsTrue_1.val = false;
gdjs.ConfirmCode.condition1IsTrue_1.val = false;
{
gdjs.ConfirmCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if( gdjs.ConfirmCode.condition0IsTrue_1.val ) {
    gdjs.ConfirmCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.ConfirmCode.GDNoButtonObjects2);
{gdjs.ConfirmCode.conditionTrue_2 = gdjs.ConfirmCode.condition1IsTrue_1;
gdjs.ConfirmCode.condition0IsTrue_2.val = false;
gdjs.ConfirmCode.condition1IsTrue_2.val = false;
{
gdjs.ConfirmCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConfirmCode.mapOfGDgdjs_46ConfirmCode_46GDNoButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ConfirmCode.condition0IsTrue_2.val ) {
{
gdjs.ConfirmCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.ConfirmCode.conditionTrue_2.val = true && gdjs.ConfirmCode.condition0IsTrue_2.val && gdjs.ConfirmCode.condition1IsTrue_2.val;
}
if( gdjs.ConfirmCode.condition1IsTrue_1.val ) {
    gdjs.ConfirmCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.ConfirmCode.GDNoButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.ConfirmCode.GDNoButtonObjects1_1final.indexOf(gdjs.ConfirmCode.GDNoButtonObjects2[j]) === -1 )
            gdjs.ConfirmCode.GDNoButtonObjects1_1final.push(gdjs.ConfirmCode.GDNoButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.ConfirmCode.GDNoButtonObjects1_1final, gdjs.ConfirmCode.GDNoButtonObjects1);
}
}
}if (gdjs.ConfirmCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.ConfirmCode.GDYesButtonObjects1.length = 0;


gdjs.ConfirmCode.condition0IsTrue_0.val = false;
{
{gdjs.ConfirmCode.conditionTrue_1 = gdjs.ConfirmCode.condition0IsTrue_0;
gdjs.ConfirmCode.GDYesButtonObjects1_1final.length = 0;gdjs.ConfirmCode.condition0IsTrue_1.val = false;
gdjs.ConfirmCode.condition1IsTrue_1.val = false;
{
gdjs.ConfirmCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if( gdjs.ConfirmCode.condition0IsTrue_1.val ) {
    gdjs.ConfirmCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.ConfirmCode.GDYesButtonObjects2);
{gdjs.ConfirmCode.conditionTrue_2 = gdjs.ConfirmCode.condition1IsTrue_1;
gdjs.ConfirmCode.condition0IsTrue_2.val = false;
gdjs.ConfirmCode.condition1IsTrue_2.val = false;
{
gdjs.ConfirmCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConfirmCode.mapOfGDgdjs_46ConfirmCode_46GDYesButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ConfirmCode.condition0IsTrue_2.val ) {
{
gdjs.ConfirmCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.ConfirmCode.conditionTrue_2.val = true && gdjs.ConfirmCode.condition0IsTrue_2.val && gdjs.ConfirmCode.condition1IsTrue_2.val;
}
if( gdjs.ConfirmCode.condition1IsTrue_1.val ) {
    gdjs.ConfirmCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.ConfirmCode.GDYesButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.ConfirmCode.GDYesButtonObjects1_1final.indexOf(gdjs.ConfirmCode.GDYesButtonObjects2[j]) === -1 )
            gdjs.ConfirmCode.GDYesButtonObjects1_1final.push(gdjs.ConfirmCode.GDYesButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.ConfirmCode.GDYesButtonObjects1_1final, gdjs.ConfirmCode.GDYesButtonObjects1);
}
}
}if (gdjs.ConfirmCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};

gdjs.ConfirmCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ConfirmCode.GDBackgroundObjects1.length = 0;
gdjs.ConfirmCode.GDBackgroundObjects2.length = 0;
gdjs.ConfirmCode.GDGameTitleObjects1.length = 0;
gdjs.ConfirmCode.GDGameTitleObjects2.length = 0;
gdjs.ConfirmCode.GDPlayerModelObjects1.length = 0;
gdjs.ConfirmCode.GDPlayerModelObjects2.length = 0;
gdjs.ConfirmCode.GDConfirmObjects1.length = 0;
gdjs.ConfirmCode.GDConfirmObjects2.length = 0;
gdjs.ConfirmCode.GDNoButtonObjects1.length = 0;
gdjs.ConfirmCode.GDNoButtonObjects2.length = 0;
gdjs.ConfirmCode.GDYesButtonObjects1.length = 0;
gdjs.ConfirmCode.GDYesButtonObjects2.length = 0;
gdjs.ConfirmCode.GDNoObjects1.length = 0;
gdjs.ConfirmCode.GDNoObjects2.length = 0;
gdjs.ConfirmCode.GDSureObjects1.length = 0;
gdjs.ConfirmCode.GDSureObjects2.length = 0;
gdjs.ConfirmCode.GDYesObjects1.length = 0;
gdjs.ConfirmCode.GDYesObjects2.length = 0;
gdjs.ConfirmCode.GDCursorObjects1.length = 0;
gdjs.ConfirmCode.GDCursorObjects2.length = 0;

gdjs.ConfirmCode.eventsList0(runtimeScene);
return;

}

gdjs['ConfirmCode'] = gdjs.ConfirmCode;
