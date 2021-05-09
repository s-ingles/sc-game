gdjs.SplashCode = {};
gdjs.SplashCode.GDGameTitleObjects1= [];
gdjs.SplashCode.GDGameTitleObjects2= [];
gdjs.SplashCode.GDPlayerModelObjects1= [];
gdjs.SplashCode.GDPlayerModelObjects2= [];
gdjs.SplashCode.GDBackgroundObjects1= [];
gdjs.SplashCode.GDBackgroundObjects2= [];
gdjs.SplashCode.GDInstructionObjects1= [];
gdjs.SplashCode.GDInstructionObjects2= [];

gdjs.SplashCode.conditionTrue_0 = {val:false};
gdjs.SplashCode.condition0IsTrue_0 = {val:false};
gdjs.SplashCode.condition1IsTrue_0 = {val:false};
gdjs.SplashCode.condition2IsTrue_0 = {val:false};
gdjs.SplashCode.conditionTrue_1 = {val:false};
gdjs.SplashCode.condition0IsTrue_1 = {val:false};
gdjs.SplashCode.condition1IsTrue_1 = {val:false};
gdjs.SplashCode.condition2IsTrue_1 = {val:false};


gdjs.SplashCode.eventsList0 = function(runtimeScene) {

{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Instruction"), gdjs.SplashCode.GDInstructionObjects1);
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}{for(var i = 0, len = gdjs.SplashCode.GDInstructionObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDInstructionObjects1[i].getBehavior("Flash").Flash(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.network.sendAsyncRequest(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), "", "GET", "", runtimeScene.getVariables().get("Response"), runtimeScene.getVariables().get("Error"));
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Response")), runtimeScene.getGame().getVariables().getFromIndex(4));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.SplashCode.GDBackgroundObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{for(var i = 0, len = gdjs.SplashCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDBackgroundObjects1[i].setYOffset(gdjs.SplashCode.GDBackgroundObjects1[i].getYOffset() + (-(300) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
{gdjs.SplashCode.conditionTrue_1 = gdjs.SplashCode.condition0IsTrue_0;
gdjs.SplashCode.condition0IsTrue_1.val = false;
gdjs.SplashCode.condition1IsTrue_1.val = false;
{
gdjs.SplashCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.SplashCode.condition0IsTrue_1.val ) {
    gdjs.SplashCode.conditionTrue_1.val = true;
}
}
{
gdjs.SplashCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.SplashCode.condition1IsTrue_1.val ) {
    gdjs.SplashCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "FlashLoop");
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Instruction"), gdjs.SplashCode.GDInstructionObjects1);
{for(var i = 0, len = gdjs.SplashCode.GDInstructionObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDInstructionObjects1[i].getBehavior("Flash").Flash(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FlashLoop");
}}

}


};

gdjs.SplashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashCode.GDGameTitleObjects1.length = 0;
gdjs.SplashCode.GDGameTitleObjects2.length = 0;
gdjs.SplashCode.GDPlayerModelObjects1.length = 0;
gdjs.SplashCode.GDPlayerModelObjects2.length = 0;
gdjs.SplashCode.GDBackgroundObjects1.length = 0;
gdjs.SplashCode.GDBackgroundObjects2.length = 0;
gdjs.SplashCode.GDInstructionObjects1.length = 0;
gdjs.SplashCode.GDInstructionObjects2.length = 0;

gdjs.SplashCode.eventsList0(runtimeScene);
return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
