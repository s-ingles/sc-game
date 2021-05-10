gdjs.PauseScreenCode = {};
gdjs.PauseScreenCode.GDInstButtonObjects1_1final = [];

gdjs.PauseScreenCode.GDMenuButtonObjects1_1final = [];

gdjs.PauseScreenCode.GDNoButtonObjects1_1final = [];

gdjs.PauseScreenCode.GDRtnButtonObjects1_1final = [];

gdjs.PauseScreenCode.GDYesButtonObjects2_1final = [];

gdjs.PauseScreenCode.GDBackgroundObjects1= [];
gdjs.PauseScreenCode.GDBackgroundObjects2= [];
gdjs.PauseScreenCode.GDBackgroundObjects3= [];
gdjs.PauseScreenCode.GDGameTitleObjects1= [];
gdjs.PauseScreenCode.GDGameTitleObjects2= [];
gdjs.PauseScreenCode.GDGameTitleObjects3= [];
gdjs.PauseScreenCode.GDPlayerModelObjects1= [];
gdjs.PauseScreenCode.GDPlayerModelObjects2= [];
gdjs.PauseScreenCode.GDPlayerModelObjects3= [];
gdjs.PauseScreenCode.GDPausedObjects1= [];
gdjs.PauseScreenCode.GDPausedObjects2= [];
gdjs.PauseScreenCode.GDPausedObjects3= [];
gdjs.PauseScreenCode.GDRtnButtonObjects1= [];
gdjs.PauseScreenCode.GDRtnButtonObjects2= [];
gdjs.PauseScreenCode.GDRtnButtonObjects3= [];
gdjs.PauseScreenCode.GDInstButtonObjects1= [];
gdjs.PauseScreenCode.GDInstButtonObjects2= [];
gdjs.PauseScreenCode.GDInstButtonObjects3= [];
gdjs.PauseScreenCode.GDMenuButtonObjects1= [];
gdjs.PauseScreenCode.GDMenuButtonObjects2= [];
gdjs.PauseScreenCode.GDMenuButtonObjects3= [];
gdjs.PauseScreenCode.GDNoButtonObjects1= [];
gdjs.PauseScreenCode.GDNoButtonObjects2= [];
gdjs.PauseScreenCode.GDNoButtonObjects3= [];
gdjs.PauseScreenCode.GDYesButtonObjects1= [];
gdjs.PauseScreenCode.GDYesButtonObjects2= [];
gdjs.PauseScreenCode.GDYesButtonObjects3= [];
gdjs.PauseScreenCode.GDReturnObjects1= [];
gdjs.PauseScreenCode.GDReturnObjects2= [];
gdjs.PauseScreenCode.GDReturnObjects3= [];
gdjs.PauseScreenCode.GDInstructionsObjects1= [];
gdjs.PauseScreenCode.GDInstructionsObjects2= [];
gdjs.PauseScreenCode.GDInstructionsObjects3= [];
gdjs.PauseScreenCode.GDNoObjects1= [];
gdjs.PauseScreenCode.GDNoObjects2= [];
gdjs.PauseScreenCode.GDNoObjects3= [];
gdjs.PauseScreenCode.GDSureObjects1= [];
gdjs.PauseScreenCode.GDSureObjects2= [];
gdjs.PauseScreenCode.GDSureObjects3= [];
gdjs.PauseScreenCode.GDYesObjects1= [];
gdjs.PauseScreenCode.GDYesObjects2= [];
gdjs.PauseScreenCode.GDYesObjects3= [];
gdjs.PauseScreenCode.GDCursorObjects1= [];
gdjs.PauseScreenCode.GDCursorObjects2= [];
gdjs.PauseScreenCode.GDCursorObjects3= [];
gdjs.PauseScreenCode.GDMainMenuObjects1= [];
gdjs.PauseScreenCode.GDMainMenuObjects2= [];
gdjs.PauseScreenCode.GDMainMenuObjects3= [];

gdjs.PauseScreenCode.conditionTrue_0 = {val:false};
gdjs.PauseScreenCode.condition0IsTrue_0 = {val:false};
gdjs.PauseScreenCode.condition1IsTrue_0 = {val:false};
gdjs.PauseScreenCode.condition2IsTrue_0 = {val:false};
gdjs.PauseScreenCode.condition3IsTrue_0 = {val:false};
gdjs.PauseScreenCode.conditionTrue_1 = {val:false};
gdjs.PauseScreenCode.condition0IsTrue_1 = {val:false};
gdjs.PauseScreenCode.condition1IsTrue_1 = {val:false};
gdjs.PauseScreenCode.condition2IsTrue_1 = {val:false};
gdjs.PauseScreenCode.condition3IsTrue_1 = {val:false};
gdjs.PauseScreenCode.conditionTrue_2 = {val:false};
gdjs.PauseScreenCode.condition0IsTrue_2 = {val:false};
gdjs.PauseScreenCode.condition1IsTrue_2 = {val:false};
gdjs.PauseScreenCode.condition2IsTrue_2 = {val:false};
gdjs.PauseScreenCode.condition3IsTrue_2 = {val:false};


gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.PauseScreenCode.GDCursorObjects1});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDMenuButtonObjects2Objects = Hashtable.newFrom({"MenuButton": gdjs.PauseScreenCode.GDMenuButtonObjects2});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDInstButtonObjects2Objects = Hashtable.newFrom({"InstButton": gdjs.PauseScreenCode.GDInstButtonObjects2});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDRtnButtonObjects2Objects = Hashtable.newFrom({"RtnButton": gdjs.PauseScreenCode.GDRtnButtonObjects2});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDYesButtonObjects3Objects = Hashtable.newFrom({"YesButton": gdjs.PauseScreenCode.GDYesButtonObjects3});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.PauseScreenCode.GDNoButtonObjects2});gdjs.PauseScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.PauseScreenCode.GDYesButtonObjects2.length = 0;


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition0IsTrue_0;
gdjs.PauseScreenCode.GDYesButtonObjects2_1final.length = 0;gdjs.PauseScreenCode.condition0IsTrue_1.val = false;
gdjs.PauseScreenCode.condition1IsTrue_1.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if( gdjs.PauseScreenCode.condition0IsTrue_1.val ) {
    gdjs.PauseScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.PauseScreenCode.GDYesButtonObjects3);
{gdjs.PauseScreenCode.conditionTrue_2 = gdjs.PauseScreenCode.condition1IsTrue_1;
gdjs.PauseScreenCode.condition0IsTrue_2.val = false;
gdjs.PauseScreenCode.condition1IsTrue_2.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDYesButtonObjects3Objects, runtimeScene, true, false);
}if ( gdjs.PauseScreenCode.condition0IsTrue_2.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.PauseScreenCode.conditionTrue_2.val = true && gdjs.PauseScreenCode.condition0IsTrue_2.val && gdjs.PauseScreenCode.condition1IsTrue_2.val;
}
if( gdjs.PauseScreenCode.condition1IsTrue_1.val ) {
    gdjs.PauseScreenCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PauseScreenCode.GDYesButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.PauseScreenCode.GDYesButtonObjects2_1final.indexOf(gdjs.PauseScreenCode.GDYesButtonObjects3[j]) === -1 )
            gdjs.PauseScreenCode.GDYesButtonObjects2_1final.push(gdjs.PauseScreenCode.GDYesButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PauseScreenCode.GDYesButtonObjects2_1final, gdjs.PauseScreenCode.GDYesButtonObjects2);
}
}
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{

gdjs.PauseScreenCode.GDNoButtonObjects1.length = 0;


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition0IsTrue_0;
gdjs.PauseScreenCode.GDNoButtonObjects1_1final.length = 0;gdjs.PauseScreenCode.condition0IsTrue_1.val = false;
gdjs.PauseScreenCode.condition1IsTrue_1.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if( gdjs.PauseScreenCode.condition0IsTrue_1.val ) {
    gdjs.PauseScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.PauseScreenCode.GDNoButtonObjects2);
{gdjs.PauseScreenCode.conditionTrue_2 = gdjs.PauseScreenCode.condition1IsTrue_1;
gdjs.PauseScreenCode.condition0IsTrue_2.val = false;
gdjs.PauseScreenCode.condition1IsTrue_2.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDNoButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.PauseScreenCode.condition0IsTrue_2.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.PauseScreenCode.conditionTrue_2.val = true && gdjs.PauseScreenCode.condition0IsTrue_2.val && gdjs.PauseScreenCode.condition1IsTrue_2.val;
}
if( gdjs.PauseScreenCode.condition1IsTrue_1.val ) {
    gdjs.PauseScreenCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PauseScreenCode.GDNoButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.PauseScreenCode.GDNoButtonObjects1_1final.indexOf(gdjs.PauseScreenCode.GDNoButtonObjects2[j]) === -1 )
            gdjs.PauseScreenCode.GDNoButtonObjects1_1final.push(gdjs.PauseScreenCode.GDNoButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PauseScreenCode.GDNoButtonObjects1_1final, gdjs.PauseScreenCode.GDNoButtonObjects1);
}
}
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InstButton"), gdjs.PauseScreenCode.GDInstButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.PauseScreenCode.GDInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.PauseScreenCode.GDMainMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.PauseScreenCode.GDMenuButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.PauseScreenCode.GDNoObjects1);
/* Reuse gdjs.PauseScreenCode.GDNoButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Return"), gdjs.PauseScreenCode.GDReturnObjects1);
gdjs.copyArray(runtimeScene.getObjects("RtnButton"), gdjs.PauseScreenCode.GDRtnButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sure"), gdjs.PauseScreenCode.GDSureObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.PauseScreenCode.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.PauseScreenCode.GDYesButtonObjects1);
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().get("Confirm"), false);
}{for(var i = 0, len = gdjs.PauseScreenCode.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDYesButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.PauseScreenCode.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDNoButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.PauseScreenCode.GDYesObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDYesObjects1[i].hide();
}
for(var i = 0, len = gdjs.PauseScreenCode.GDNoObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDNoObjects1[i].hide();
}
for(var i = 0, len = gdjs.PauseScreenCode.GDSureObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDSureObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PauseScreenCode.GDRtnButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDRtnButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.PauseScreenCode.GDInstButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDInstButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.PauseScreenCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDMenuButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.PauseScreenCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDInstructionsObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.PauseScreenCode.GDReturnObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDReturnObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.PauseScreenCode.GDMainMenuObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDMainMenuObjects1[i].hide(false);
}
}}

}


};gdjs.PauseScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.PauseScreenCode.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.PauseScreenCode.GDNoButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sure"), gdjs.PauseScreenCode.GDSureObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.PauseScreenCode.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.PauseScreenCode.GDYesButtonObjects1);
gdjs.PauseScreenCode.GDCursorObjects1.length = 0;

{for(var i = 0, len = gdjs.PauseScreenCode.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDYesButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.PauseScreenCode.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDNoButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.PauseScreenCode.GDYesObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDYesObjects1[i].hide();
}
for(var i = 0, len = gdjs.PauseScreenCode.GDNoObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDNoObjects1[i].hide();
}
for(var i = 0, len = gdjs.PauseScreenCode.GDSureObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDSureObjects1[i].hide();
}
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().get("Confirm"), false);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDCursorObjects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "Cursor", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "Cursor", 0), "Cursor");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.PauseScreenCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.PauseScreenCode.GDCursorObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{for(var i = 0, len = gdjs.PauseScreenCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDBackgroundObjects1[i].setYOffset(gdjs.PauseScreenCode.GDBackgroundObjects1[i].getYOffset() + (-(300) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.PauseScreenCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "Cursor", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "Cursor", 0));
}
}}

}


{

gdjs.PauseScreenCode.GDMenuButtonObjects1.length = 0;


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition0IsTrue_0;
gdjs.PauseScreenCode.GDMenuButtonObjects1_1final.length = 0;gdjs.PauseScreenCode.condition0IsTrue_1.val = false;
gdjs.PauseScreenCode.condition1IsTrue_1.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if( gdjs.PauseScreenCode.condition0IsTrue_1.val ) {
    gdjs.PauseScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.PauseScreenCode.GDMenuButtonObjects2);
{gdjs.PauseScreenCode.conditionTrue_2 = gdjs.PauseScreenCode.condition1IsTrue_1;
gdjs.PauseScreenCode.condition0IsTrue_2.val = false;
gdjs.PauseScreenCode.condition1IsTrue_2.val = false;
gdjs.PauseScreenCode.condition2IsTrue_2.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDMenuButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.PauseScreenCode.condition0IsTrue_2.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PauseScreenCode.condition1IsTrue_2.val ) {
{
gdjs.PauseScreenCode.condition2IsTrue_2.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().get("Confirm"), false);
}}
}
gdjs.PauseScreenCode.conditionTrue_2.val = true && gdjs.PauseScreenCode.condition0IsTrue_2.val && gdjs.PauseScreenCode.condition1IsTrue_2.val && gdjs.PauseScreenCode.condition2IsTrue_2.val;
}
if( gdjs.PauseScreenCode.condition1IsTrue_1.val ) {
    gdjs.PauseScreenCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PauseScreenCode.GDMenuButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.PauseScreenCode.GDMenuButtonObjects1_1final.indexOf(gdjs.PauseScreenCode.GDMenuButtonObjects2[j]) === -1 )
            gdjs.PauseScreenCode.GDMenuButtonObjects1_1final.push(gdjs.PauseScreenCode.GDMenuButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PauseScreenCode.GDMenuButtonObjects1_1final, gdjs.PauseScreenCode.GDMenuButtonObjects1);
}
}
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InstButton"), gdjs.PauseScreenCode.GDInstButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.PauseScreenCode.GDInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.PauseScreenCode.GDMainMenuObjects1);
/* Reuse gdjs.PauseScreenCode.GDMenuButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.PauseScreenCode.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.PauseScreenCode.GDNoButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Return"), gdjs.PauseScreenCode.GDReturnObjects1);
gdjs.copyArray(runtimeScene.getObjects("RtnButton"), gdjs.PauseScreenCode.GDRtnButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sure"), gdjs.PauseScreenCode.GDSureObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.PauseScreenCode.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.PauseScreenCode.GDYesButtonObjects1);
{for(var i = 0, len = gdjs.PauseScreenCode.GDRtnButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDRtnButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.PauseScreenCode.GDInstButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDInstButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.PauseScreenCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDMenuButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.PauseScreenCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDInstructionsObjects1[i].hide();
}
for(var i = 0, len = gdjs.PauseScreenCode.GDReturnObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDReturnObjects1[i].hide();
}
for(var i = 0, len = gdjs.PauseScreenCode.GDMainMenuObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDMainMenuObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PauseScreenCode.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDYesButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.PauseScreenCode.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDNoButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.PauseScreenCode.GDYesObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDYesObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.PauseScreenCode.GDNoObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDNoObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.PauseScreenCode.GDSureObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDSureObjects1[i].hide(false);
}
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().get("Confirm"), true);
}}

}


{

gdjs.PauseScreenCode.GDInstButtonObjects1.length = 0;


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition0IsTrue_0;
gdjs.PauseScreenCode.GDInstButtonObjects1_1final.length = 0;gdjs.PauseScreenCode.condition0IsTrue_1.val = false;
gdjs.PauseScreenCode.condition1IsTrue_1.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if( gdjs.PauseScreenCode.condition0IsTrue_1.val ) {
    gdjs.PauseScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("InstButton"), gdjs.PauseScreenCode.GDInstButtonObjects2);
{gdjs.PauseScreenCode.conditionTrue_2 = gdjs.PauseScreenCode.condition1IsTrue_1;
gdjs.PauseScreenCode.condition0IsTrue_2.val = false;
gdjs.PauseScreenCode.condition1IsTrue_2.val = false;
gdjs.PauseScreenCode.condition2IsTrue_2.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDInstButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.PauseScreenCode.condition0IsTrue_2.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PauseScreenCode.condition1IsTrue_2.val ) {
{
gdjs.PauseScreenCode.condition2IsTrue_2.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().get("Confirm"), false);
}}
}
gdjs.PauseScreenCode.conditionTrue_2.val = true && gdjs.PauseScreenCode.condition0IsTrue_2.val && gdjs.PauseScreenCode.condition1IsTrue_2.val && gdjs.PauseScreenCode.condition2IsTrue_2.val;
}
if( gdjs.PauseScreenCode.condition1IsTrue_1.val ) {
    gdjs.PauseScreenCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PauseScreenCode.GDInstButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.PauseScreenCode.GDInstButtonObjects1_1final.indexOf(gdjs.PauseScreenCode.GDInstButtonObjects2[j]) === -1 )
            gdjs.PauseScreenCode.GDInstButtonObjects1_1final.push(gdjs.PauseScreenCode.GDInstButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PauseScreenCode.GDInstButtonObjects1_1final, gdjs.PauseScreenCode.GDInstButtonObjects1);
}
}
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Instructions");
}}

}


{

gdjs.PauseScreenCode.GDRtnButtonObjects1.length = 0;


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition0IsTrue_0;
gdjs.PauseScreenCode.GDRtnButtonObjects1_1final.length = 0;gdjs.PauseScreenCode.condition0IsTrue_1.val = false;
gdjs.PauseScreenCode.condition1IsTrue_1.val = false;
gdjs.PauseScreenCode.condition2IsTrue_1.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if( gdjs.PauseScreenCode.condition0IsTrue_1.val ) {
    gdjs.PauseScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.PauseScreenCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if( gdjs.PauseScreenCode.condition1IsTrue_1.val ) {
    gdjs.PauseScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RtnButton"), gdjs.PauseScreenCode.GDRtnButtonObjects2);
{gdjs.PauseScreenCode.conditionTrue_2 = gdjs.PauseScreenCode.condition2IsTrue_1;
gdjs.PauseScreenCode.condition0IsTrue_2.val = false;
gdjs.PauseScreenCode.condition1IsTrue_2.val = false;
gdjs.PauseScreenCode.condition2IsTrue_2.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDRtnButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.PauseScreenCode.condition0IsTrue_2.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PauseScreenCode.condition1IsTrue_2.val ) {
{
gdjs.PauseScreenCode.condition2IsTrue_2.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().get("Confirm"), false);
}}
}
gdjs.PauseScreenCode.conditionTrue_2.val = true && gdjs.PauseScreenCode.condition0IsTrue_2.val && gdjs.PauseScreenCode.condition1IsTrue_2.val && gdjs.PauseScreenCode.condition2IsTrue_2.val;
}
if( gdjs.PauseScreenCode.condition2IsTrue_1.val ) {
    gdjs.PauseScreenCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PauseScreenCode.GDRtnButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.PauseScreenCode.GDRtnButtonObjects1_1final.indexOf(gdjs.PauseScreenCode.GDRtnButtonObjects2[j]) === -1 )
            gdjs.PauseScreenCode.GDRtnButtonObjects1_1final.push(gdjs.PauseScreenCode.GDRtnButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PauseScreenCode.GDRtnButtonObjects1_1final, gdjs.PauseScreenCode.GDRtnButtonObjects1);
}
}
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().get("Confirm"), true);
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PauseScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.PauseScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseScreenCode.GDBackgroundObjects1.length = 0;
gdjs.PauseScreenCode.GDBackgroundObjects2.length = 0;
gdjs.PauseScreenCode.GDBackgroundObjects3.length = 0;
gdjs.PauseScreenCode.GDGameTitleObjects1.length = 0;
gdjs.PauseScreenCode.GDGameTitleObjects2.length = 0;
gdjs.PauseScreenCode.GDGameTitleObjects3.length = 0;
gdjs.PauseScreenCode.GDPlayerModelObjects1.length = 0;
gdjs.PauseScreenCode.GDPlayerModelObjects2.length = 0;
gdjs.PauseScreenCode.GDPlayerModelObjects3.length = 0;
gdjs.PauseScreenCode.GDPausedObjects1.length = 0;
gdjs.PauseScreenCode.GDPausedObjects2.length = 0;
gdjs.PauseScreenCode.GDPausedObjects3.length = 0;
gdjs.PauseScreenCode.GDRtnButtonObjects1.length = 0;
gdjs.PauseScreenCode.GDRtnButtonObjects2.length = 0;
gdjs.PauseScreenCode.GDRtnButtonObjects3.length = 0;
gdjs.PauseScreenCode.GDInstButtonObjects1.length = 0;
gdjs.PauseScreenCode.GDInstButtonObjects2.length = 0;
gdjs.PauseScreenCode.GDInstButtonObjects3.length = 0;
gdjs.PauseScreenCode.GDMenuButtonObjects1.length = 0;
gdjs.PauseScreenCode.GDMenuButtonObjects2.length = 0;
gdjs.PauseScreenCode.GDMenuButtonObjects3.length = 0;
gdjs.PauseScreenCode.GDNoButtonObjects1.length = 0;
gdjs.PauseScreenCode.GDNoButtonObjects2.length = 0;
gdjs.PauseScreenCode.GDNoButtonObjects3.length = 0;
gdjs.PauseScreenCode.GDYesButtonObjects1.length = 0;
gdjs.PauseScreenCode.GDYesButtonObjects2.length = 0;
gdjs.PauseScreenCode.GDYesButtonObjects3.length = 0;
gdjs.PauseScreenCode.GDReturnObjects1.length = 0;
gdjs.PauseScreenCode.GDReturnObjects2.length = 0;
gdjs.PauseScreenCode.GDReturnObjects3.length = 0;
gdjs.PauseScreenCode.GDInstructionsObjects1.length = 0;
gdjs.PauseScreenCode.GDInstructionsObjects2.length = 0;
gdjs.PauseScreenCode.GDInstructionsObjects3.length = 0;
gdjs.PauseScreenCode.GDNoObjects1.length = 0;
gdjs.PauseScreenCode.GDNoObjects2.length = 0;
gdjs.PauseScreenCode.GDNoObjects3.length = 0;
gdjs.PauseScreenCode.GDSureObjects1.length = 0;
gdjs.PauseScreenCode.GDSureObjects2.length = 0;
gdjs.PauseScreenCode.GDSureObjects3.length = 0;
gdjs.PauseScreenCode.GDYesObjects1.length = 0;
gdjs.PauseScreenCode.GDYesObjects2.length = 0;
gdjs.PauseScreenCode.GDYesObjects3.length = 0;
gdjs.PauseScreenCode.GDCursorObjects1.length = 0;
gdjs.PauseScreenCode.GDCursorObjects2.length = 0;
gdjs.PauseScreenCode.GDCursorObjects3.length = 0;
gdjs.PauseScreenCode.GDMainMenuObjects1.length = 0;
gdjs.PauseScreenCode.GDMainMenuObjects2.length = 0;
gdjs.PauseScreenCode.GDMainMenuObjects3.length = 0;

gdjs.PauseScreenCode.eventsList1(runtimeScene);
return;

}

gdjs['PauseScreenCode'] = gdjs.PauseScreenCode;
