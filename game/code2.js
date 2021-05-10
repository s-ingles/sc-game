gdjs.InstructionsCode = {};
gdjs.InstructionsCode.GDButtonObjects1_1final = [];

gdjs.InstructionsCode.GDBackgroundObjects1= [];
gdjs.InstructionsCode.GDBackgroundObjects2= [];
gdjs.InstructionsCode.GDBackgroundObjects3= [];
gdjs.InstructionsCode.GDCreditsObjects1= [];
gdjs.InstructionsCode.GDCreditsObjects2= [];
gdjs.InstructionsCode.GDCreditsObjects3= [];
gdjs.InstructionsCode.GDSceneTitleObjects1= [];
gdjs.InstructionsCode.GDSceneTitleObjects2= [];
gdjs.InstructionsCode.GDSceneTitleObjects3= [];
gdjs.InstructionsCode.GDGameTitleObjects1= [];
gdjs.InstructionsCode.GDGameTitleObjects2= [];
gdjs.InstructionsCode.GDGameTitleObjects3= [];
gdjs.InstructionsCode.GDInstructionsObjects1= [];
gdjs.InstructionsCode.GDInstructionsObjects2= [];
gdjs.InstructionsCode.GDInstructionsObjects3= [];
gdjs.InstructionsCode.GDContinueObjects1= [];
gdjs.InstructionsCode.GDContinueObjects2= [];
gdjs.InstructionsCode.GDContinueObjects3= [];
gdjs.InstructionsCode.GDKenneyObjects1= [];
gdjs.InstructionsCode.GDKenneyObjects2= [];
gdjs.InstructionsCode.GDKenneyObjects3= [];
gdjs.InstructionsCode.GDPlayerModelObjects1= [];
gdjs.InstructionsCode.GDPlayerModelObjects2= [];
gdjs.InstructionsCode.GDPlayerModelObjects3= [];
gdjs.InstructionsCode.GDHPObjects1= [];
gdjs.InstructionsCode.GDHPObjects2= [];
gdjs.InstructionsCode.GDHPObjects3= [];
gdjs.InstructionsCode.GDDevOptionsObjects1= [];
gdjs.InstructionsCode.GDDevOptionsObjects2= [];
gdjs.InstructionsCode.GDDevOptionsObjects3= [];
gdjs.InstructionsCode.GDAmmoUpObjects1= [];
gdjs.InstructionsCode.GDAmmoUpObjects2= [];
gdjs.InstructionsCode.GDAmmoUpObjects3= [];
gdjs.InstructionsCode.GDBonusObjects1= [];
gdjs.InstructionsCode.GDBonusObjects2= [];
gdjs.InstructionsCode.GDBonusObjects3= [];
gdjs.InstructionsCode.GDButtonObjects1= [];
gdjs.InstructionsCode.GDButtonObjects2= [];
gdjs.InstructionsCode.GDButtonObjects3= [];
gdjs.InstructionsCode.GDButtonTextObjects1= [];
gdjs.InstructionsCode.GDButtonTextObjects2= [];
gdjs.InstructionsCode.GDButtonTextObjects3= [];

gdjs.InstructionsCode.conditionTrue_0 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_0 = {val:false};
gdjs.InstructionsCode.conditionTrue_1 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_1 = {val:false};
gdjs.InstructionsCode.conditionTrue_2 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_2 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_2 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_2 = {val:false};


gdjs.InstructionsCode.eventsList0 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDButtonObjects2Objects = Hashtable.newFrom({"Button": gdjs.InstructionsCode.GDButtonObjects2});gdjs.InstructionsCode.eventsList1 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.InstructionsCode.GDBackgroundObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{for(var i = 0, len = gdjs.InstructionsCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDBackgroundObjects1[i].setYOffset(gdjs.InstructionsCode.GDBackgroundObjects1[i].getYOffset() + (-(300) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.InstructionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num0");
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DevOptions"), gdjs.InstructionsCode.GDDevOptionsObjects1);
{for(var i = 0, len = gdjs.InstructionsCode.GDDevOptionsObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDDevOptionsObjects1[i].hide();
}
}}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DevOptions"), gdjs.InstructionsCode.GDDevOptionsObjects1);
{for(var i = 0, len = gdjs.InstructionsCode.GDDevOptionsObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDDevOptionsObjects1[i].hide(false);
}
}}

}


{

gdjs.InstructionsCode.GDButtonObjects1.length = 0;


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition0IsTrue_0;
gdjs.InstructionsCode.GDButtonObjects1_1final.length = 0;gdjs.InstructionsCode.condition0IsTrue_1.val = false;
gdjs.InstructionsCode.condition1IsTrue_1.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if( gdjs.InstructionsCode.condition0IsTrue_1.val ) {
    gdjs.InstructionsCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.InstructionsCode.GDButtonObjects2);
{gdjs.InstructionsCode.conditionTrue_2 = gdjs.InstructionsCode.condition1IsTrue_1;
gdjs.InstructionsCode.condition0IsTrue_2.val = false;
gdjs.InstructionsCode.condition1IsTrue_2.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.InstructionsCode.condition0IsTrue_2.val ) {
{
gdjs.InstructionsCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.InstructionsCode.conditionTrue_2.val = true && gdjs.InstructionsCode.condition0IsTrue_2.val && gdjs.InstructionsCode.condition1IsTrue_2.val;
}
if( gdjs.InstructionsCode.condition1IsTrue_1.val ) {
    gdjs.InstructionsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.InstructionsCode.GDButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.InstructionsCode.GDButtonObjects1_1final.indexOf(gdjs.InstructionsCode.GDButtonObjects2[j]) === -1 )
            gdjs.InstructionsCode.GDButtonObjects1_1final.push(gdjs.InstructionsCode.GDButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.InstructionsCode.GDButtonObjects1_1final, gdjs.InstructionsCode.GDButtonObjects1);
}
}
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDBackgroundObjects1.length = 0;
gdjs.InstructionsCode.GDBackgroundObjects2.length = 0;
gdjs.InstructionsCode.GDBackgroundObjects3.length = 0;
gdjs.InstructionsCode.GDCreditsObjects1.length = 0;
gdjs.InstructionsCode.GDCreditsObjects2.length = 0;
gdjs.InstructionsCode.GDCreditsObjects3.length = 0;
gdjs.InstructionsCode.GDSceneTitleObjects1.length = 0;
gdjs.InstructionsCode.GDSceneTitleObjects2.length = 0;
gdjs.InstructionsCode.GDSceneTitleObjects3.length = 0;
gdjs.InstructionsCode.GDGameTitleObjects1.length = 0;
gdjs.InstructionsCode.GDGameTitleObjects2.length = 0;
gdjs.InstructionsCode.GDGameTitleObjects3.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects1.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects2.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects3.length = 0;
gdjs.InstructionsCode.GDContinueObjects1.length = 0;
gdjs.InstructionsCode.GDContinueObjects2.length = 0;
gdjs.InstructionsCode.GDContinueObjects3.length = 0;
gdjs.InstructionsCode.GDKenneyObjects1.length = 0;
gdjs.InstructionsCode.GDKenneyObjects2.length = 0;
gdjs.InstructionsCode.GDKenneyObjects3.length = 0;
gdjs.InstructionsCode.GDPlayerModelObjects1.length = 0;
gdjs.InstructionsCode.GDPlayerModelObjects2.length = 0;
gdjs.InstructionsCode.GDPlayerModelObjects3.length = 0;
gdjs.InstructionsCode.GDHPObjects1.length = 0;
gdjs.InstructionsCode.GDHPObjects2.length = 0;
gdjs.InstructionsCode.GDHPObjects3.length = 0;
gdjs.InstructionsCode.GDDevOptionsObjects1.length = 0;
gdjs.InstructionsCode.GDDevOptionsObjects2.length = 0;
gdjs.InstructionsCode.GDDevOptionsObjects3.length = 0;
gdjs.InstructionsCode.GDAmmoUpObjects1.length = 0;
gdjs.InstructionsCode.GDAmmoUpObjects2.length = 0;
gdjs.InstructionsCode.GDAmmoUpObjects3.length = 0;
gdjs.InstructionsCode.GDBonusObjects1.length = 0;
gdjs.InstructionsCode.GDBonusObjects2.length = 0;
gdjs.InstructionsCode.GDBonusObjects3.length = 0;
gdjs.InstructionsCode.GDButtonObjects1.length = 0;
gdjs.InstructionsCode.GDButtonObjects2.length = 0;
gdjs.InstructionsCode.GDButtonObjects3.length = 0;
gdjs.InstructionsCode.GDButtonTextObjects1.length = 0;
gdjs.InstructionsCode.GDButtonTextObjects2.length = 0;
gdjs.InstructionsCode.GDButtonTextObjects3.length = 0;

gdjs.InstructionsCode.eventsList1(runtimeScene);
return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
