gdjs.MenuSceneCode = {};
gdjs.MenuSceneCode.GDBackgroundObjects1= [];
gdjs.MenuSceneCode.GDBackgroundObjects2= [];
gdjs.MenuSceneCode.GDBackgroundObjects3= [];
gdjs.MenuSceneCode.GDCreditsObjects1= [];
gdjs.MenuSceneCode.GDCreditsObjects2= [];
gdjs.MenuSceneCode.GDCreditsObjects3= [];
gdjs.MenuSceneCode.GDGameTitleObjects1= [];
gdjs.MenuSceneCode.GDGameTitleObjects2= [];
gdjs.MenuSceneCode.GDGameTitleObjects3= [];
gdjs.MenuSceneCode.GDInstructionsObjects1= [];
gdjs.MenuSceneCode.GDInstructionsObjects2= [];
gdjs.MenuSceneCode.GDInstructionsObjects3= [];
gdjs.MenuSceneCode.GDContinueObjects1= [];
gdjs.MenuSceneCode.GDContinueObjects2= [];
gdjs.MenuSceneCode.GDContinueObjects3= [];
gdjs.MenuSceneCode.GDKenneyObjects1= [];
gdjs.MenuSceneCode.GDKenneyObjects2= [];
gdjs.MenuSceneCode.GDKenneyObjects3= [];
gdjs.MenuSceneCode.GDPlayerModelObjects1= [];
gdjs.MenuSceneCode.GDPlayerModelObjects2= [];
gdjs.MenuSceneCode.GDPlayerModelObjects3= [];
gdjs.MenuSceneCode.GDHPObjects1= [];
gdjs.MenuSceneCode.GDHPObjects2= [];
gdjs.MenuSceneCode.GDHPObjects3= [];
gdjs.MenuSceneCode.GDDevOptionsObjects1= [];
gdjs.MenuSceneCode.GDDevOptionsObjects2= [];
gdjs.MenuSceneCode.GDDevOptionsObjects3= [];
gdjs.MenuSceneCode.GDAmmoUpObjects1= [];
gdjs.MenuSceneCode.GDAmmoUpObjects2= [];
gdjs.MenuSceneCode.GDAmmoUpObjects3= [];
gdjs.MenuSceneCode.GDBonusObjects1= [];
gdjs.MenuSceneCode.GDBonusObjects2= [];
gdjs.MenuSceneCode.GDBonusObjects3= [];

gdjs.MenuSceneCode.conditionTrue_0 = {val:false};
gdjs.MenuSceneCode.condition0IsTrue_0 = {val:false};
gdjs.MenuSceneCode.condition1IsTrue_0 = {val:false};


gdjs.MenuSceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.MenuSceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DevOptions"), gdjs.MenuSceneCode.GDDevOptionsObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDDevOptionsObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDDevOptionsObjects1[i].getBehavior("Flash").Flash(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.MenuSceneCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.MenuSceneCode.GDContinueObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDContinueObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDContinueObjects1[i].getBehavior("Flash").Flash(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\sfx\\Audio\\Theyre-Here_Looping.mp3", 1, true, 100, 1);
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 50);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.MenuSceneCode.GDBackgroundObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{for(var i = 0, len = gdjs.MenuSceneCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDBackgroundObjects1[i].setYOffset(gdjs.MenuSceneCode.GDBackgroundObjects1[i].getYOffset() + (-(300) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScene", true);
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.MenuSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "FlashLoop");
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.MenuSceneCode.GDContinueObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDContinueObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDContinueObjects1[i].getBehavior("Flash").Flash(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MenuSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DevOptions"), gdjs.MenuSceneCode.GDDevOptionsObjects1);
{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.MenuSceneCode.GDDevOptionsObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDDevOptionsObjects1[i].getBehavior("Flash").Flash(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DevOptions"), gdjs.MenuSceneCode.GDDevOptionsObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDDevOptionsObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDDevOptionsObjects1[i].hide();
}
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DevOptions"), gdjs.MenuSceneCode.GDDevOptionsObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDDevOptionsObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDDevOptionsObjects1[i].hide(false);
}
}}

}


};

gdjs.MenuSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuSceneCode.GDBackgroundObjects1.length = 0;
gdjs.MenuSceneCode.GDBackgroundObjects2.length = 0;
gdjs.MenuSceneCode.GDBackgroundObjects3.length = 0;
gdjs.MenuSceneCode.GDCreditsObjects1.length = 0;
gdjs.MenuSceneCode.GDCreditsObjects2.length = 0;
gdjs.MenuSceneCode.GDCreditsObjects3.length = 0;
gdjs.MenuSceneCode.GDGameTitleObjects1.length = 0;
gdjs.MenuSceneCode.GDGameTitleObjects2.length = 0;
gdjs.MenuSceneCode.GDGameTitleObjects3.length = 0;
gdjs.MenuSceneCode.GDInstructionsObjects1.length = 0;
gdjs.MenuSceneCode.GDInstructionsObjects2.length = 0;
gdjs.MenuSceneCode.GDInstructionsObjects3.length = 0;
gdjs.MenuSceneCode.GDContinueObjects1.length = 0;
gdjs.MenuSceneCode.GDContinueObjects2.length = 0;
gdjs.MenuSceneCode.GDContinueObjects3.length = 0;
gdjs.MenuSceneCode.GDKenneyObjects1.length = 0;
gdjs.MenuSceneCode.GDKenneyObjects2.length = 0;
gdjs.MenuSceneCode.GDKenneyObjects3.length = 0;
gdjs.MenuSceneCode.GDPlayerModelObjects1.length = 0;
gdjs.MenuSceneCode.GDPlayerModelObjects2.length = 0;
gdjs.MenuSceneCode.GDPlayerModelObjects3.length = 0;
gdjs.MenuSceneCode.GDHPObjects1.length = 0;
gdjs.MenuSceneCode.GDHPObjects2.length = 0;
gdjs.MenuSceneCode.GDHPObjects3.length = 0;
gdjs.MenuSceneCode.GDDevOptionsObjects1.length = 0;
gdjs.MenuSceneCode.GDDevOptionsObjects2.length = 0;
gdjs.MenuSceneCode.GDDevOptionsObjects3.length = 0;
gdjs.MenuSceneCode.GDAmmoUpObjects1.length = 0;
gdjs.MenuSceneCode.GDAmmoUpObjects2.length = 0;
gdjs.MenuSceneCode.GDAmmoUpObjects3.length = 0;
gdjs.MenuSceneCode.GDBonusObjects1.length = 0;
gdjs.MenuSceneCode.GDBonusObjects2.length = 0;
gdjs.MenuSceneCode.GDBonusObjects3.length = 0;

gdjs.MenuSceneCode.eventsList2(runtimeScene);
return;

}

gdjs['MenuSceneCode'] = gdjs.MenuSceneCode;
