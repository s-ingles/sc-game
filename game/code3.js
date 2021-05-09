gdjs.CreditsCode = {};
gdjs.CreditsCode.GDBackButtonObjects1_1final = [];

gdjs.CreditsCode.GDBackgroundObjects1= [];
gdjs.CreditsCode.GDBackgroundObjects2= [];
gdjs.CreditsCode.GDBackgroundObjects3= [];
gdjs.CreditsCode.GDCreditsObjects1= [];
gdjs.CreditsCode.GDCreditsObjects2= [];
gdjs.CreditsCode.GDCreditsObjects3= [];
gdjs.CreditsCode.GDSceneTitleObjects1= [];
gdjs.CreditsCode.GDSceneTitleObjects2= [];
gdjs.CreditsCode.GDSceneTitleObjects3= [];
gdjs.CreditsCode.GDGameTitleObjects1= [];
gdjs.CreditsCode.GDGameTitleObjects2= [];
gdjs.CreditsCode.GDGameTitleObjects3= [];
gdjs.CreditsCode.GDInstructionsObjects1= [];
gdjs.CreditsCode.GDInstructionsObjects2= [];
gdjs.CreditsCode.GDInstructionsObjects3= [];
gdjs.CreditsCode.GDKenneyObjects1= [];
gdjs.CreditsCode.GDKenneyObjects2= [];
gdjs.CreditsCode.GDKenneyObjects3= [];
gdjs.CreditsCode.GDPlayerModelObjects1= [];
gdjs.CreditsCode.GDPlayerModelObjects2= [];
gdjs.CreditsCode.GDPlayerModelObjects3= [];
gdjs.CreditsCode.GDBackButtonObjects1= [];
gdjs.CreditsCode.GDBackButtonObjects2= [];
gdjs.CreditsCode.GDBackButtonObjects3= [];
gdjs.CreditsCode.GDGoBackObjects1= [];
gdjs.CreditsCode.GDGoBackObjects2= [];
gdjs.CreditsCode.GDGoBackObjects3= [];
gdjs.CreditsCode.GDDevOptionsObjects1= [];
gdjs.CreditsCode.GDDevOptionsObjects2= [];
gdjs.CreditsCode.GDDevOptionsObjects3= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};
gdjs.CreditsCode.condition2IsTrue_0 = {val:false};
gdjs.CreditsCode.conditionTrue_1 = {val:false};
gdjs.CreditsCode.condition0IsTrue_1 = {val:false};
gdjs.CreditsCode.condition1IsTrue_1 = {val:false};
gdjs.CreditsCode.condition2IsTrue_1 = {val:false};
gdjs.CreditsCode.conditionTrue_2 = {val:false};
gdjs.CreditsCode.condition0IsTrue_2 = {val:false};
gdjs.CreditsCode.condition1IsTrue_2 = {val:false};
gdjs.CreditsCode.condition2IsTrue_2 = {val:false};


gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.CreditsCode.eventsList1 = function(runtimeScene) {

{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DevOptions"), gdjs.CreditsCode.GDDevOptionsObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDDevOptionsObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDDevOptionsObjects1[i].getBehavior("Flash").Flash(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDBackButtonObjects2Objects = Hashtable.newFrom({"BackButton": gdjs.CreditsCode.GDBackButtonObjects2});gdjs.CreditsCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.CreditsCode.GDBackgroundObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{for(var i = 0, len = gdjs.CreditsCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDBackgroundObjects1[i].setYOffset(gdjs.CreditsCode.GDBackgroundObjects1[i].getYOffset() + (-(300) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.CreditsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "FlashLoop");
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CreditsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num0");
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DevOptions"), gdjs.CreditsCode.GDDevOptionsObjects1);
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}{for(var i = 0, len = gdjs.CreditsCode.GDDevOptionsObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDDevOptionsObjects1[i].getBehavior("Flash").Flash(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DevOptions"), gdjs.CreditsCode.GDDevOptionsObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDDevOptionsObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDDevOptionsObjects1[i].hide();
}
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DevOptions"), gdjs.CreditsCode.GDDevOptionsObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDDevOptionsObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDDevOptionsObjects1[i].hide(false);
}
}}

}


{

gdjs.CreditsCode.GDBackButtonObjects1.length = 0;


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition0IsTrue_0;
gdjs.CreditsCode.GDBackButtonObjects1_1final.length = 0;gdjs.CreditsCode.condition0IsTrue_1.val = false;
gdjs.CreditsCode.condition1IsTrue_1.val = false;
{
gdjs.CreditsCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if( gdjs.CreditsCode.condition0IsTrue_1.val ) {
    gdjs.CreditsCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.CreditsCode.GDBackButtonObjects2);
{gdjs.CreditsCode.conditionTrue_2 = gdjs.CreditsCode.condition1IsTrue_1;
gdjs.CreditsCode.condition0IsTrue_2.val = false;
gdjs.CreditsCode.condition1IsTrue_2.val = false;
{
gdjs.CreditsCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDBackButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_2.val ) {
{
gdjs.CreditsCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.CreditsCode.conditionTrue_2.val = true && gdjs.CreditsCode.condition0IsTrue_2.val && gdjs.CreditsCode.condition1IsTrue_2.val;
}
if( gdjs.CreditsCode.condition1IsTrue_1.val ) {
    gdjs.CreditsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.CreditsCode.GDBackButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.CreditsCode.GDBackButtonObjects1_1final.indexOf(gdjs.CreditsCode.GDBackButtonObjects2[j]) === -1 )
            gdjs.CreditsCode.GDBackButtonObjects1_1final.push(gdjs.CreditsCode.GDBackButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CreditsCode.GDBackButtonObjects1_1final, gdjs.CreditsCode.GDBackButtonObjects1);
}
}
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDBackgroundObjects3.length = 0;
gdjs.CreditsCode.GDCreditsObjects1.length = 0;
gdjs.CreditsCode.GDCreditsObjects2.length = 0;
gdjs.CreditsCode.GDCreditsObjects3.length = 0;
gdjs.CreditsCode.GDSceneTitleObjects1.length = 0;
gdjs.CreditsCode.GDSceneTitleObjects2.length = 0;
gdjs.CreditsCode.GDSceneTitleObjects3.length = 0;
gdjs.CreditsCode.GDGameTitleObjects1.length = 0;
gdjs.CreditsCode.GDGameTitleObjects2.length = 0;
gdjs.CreditsCode.GDGameTitleObjects3.length = 0;
gdjs.CreditsCode.GDInstructionsObjects1.length = 0;
gdjs.CreditsCode.GDInstructionsObjects2.length = 0;
gdjs.CreditsCode.GDInstructionsObjects3.length = 0;
gdjs.CreditsCode.GDKenneyObjects1.length = 0;
gdjs.CreditsCode.GDKenneyObjects2.length = 0;
gdjs.CreditsCode.GDKenneyObjects3.length = 0;
gdjs.CreditsCode.GDPlayerModelObjects1.length = 0;
gdjs.CreditsCode.GDPlayerModelObjects2.length = 0;
gdjs.CreditsCode.GDPlayerModelObjects3.length = 0;
gdjs.CreditsCode.GDBackButtonObjects1.length = 0;
gdjs.CreditsCode.GDBackButtonObjects2.length = 0;
gdjs.CreditsCode.GDBackButtonObjects3.length = 0;
gdjs.CreditsCode.GDGoBackObjects1.length = 0;
gdjs.CreditsCode.GDGoBackObjects2.length = 0;
gdjs.CreditsCode.GDGoBackObjects3.length = 0;
gdjs.CreditsCode.GDDevOptionsObjects1.length = 0;
gdjs.CreditsCode.GDDevOptionsObjects2.length = 0;
gdjs.CreditsCode.GDDevOptionsObjects3.length = 0;

gdjs.CreditsCode.eventsList2(runtimeScene);
return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
