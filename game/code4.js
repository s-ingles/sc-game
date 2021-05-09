gdjs.MenuCode = {};
gdjs.MenuCode.GDCreditsButtonObjects1_1final = [];

gdjs.MenuCode.GDInstButtonObjects1_1final = [];

gdjs.MenuCode.GDLBButtonObjects1_1final = [];

gdjs.MenuCode.GDStartButtonObjects1_1final = [];

gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundObjects3= [];
gdjs.MenuCode.GDGameTitleObjects1= [];
gdjs.MenuCode.GDGameTitleObjects2= [];
gdjs.MenuCode.GDGameTitleObjects3= [];
gdjs.MenuCode.GDSceneTitleObjects1= [];
gdjs.MenuCode.GDSceneTitleObjects2= [];
gdjs.MenuCode.GDSceneTitleObjects3= [];
gdjs.MenuCode.GDKenneyObjects1= [];
gdjs.MenuCode.GDKenneyObjects2= [];
gdjs.MenuCode.GDKenneyObjects3= [];
gdjs.MenuCode.GDPlayerModelObjects1= [];
gdjs.MenuCode.GDPlayerModelObjects2= [];
gdjs.MenuCode.GDPlayerModelObjects3= [];
gdjs.MenuCode.GDDevOptionsObjects1= [];
gdjs.MenuCode.GDDevOptionsObjects2= [];
gdjs.MenuCode.GDDevOptionsObjects3= [];
gdjs.MenuCode.GDStartButtonObjects1= [];
gdjs.MenuCode.GDStartButtonObjects2= [];
gdjs.MenuCode.GDStartButtonObjects3= [];
gdjs.MenuCode.GDOptButtonObjects1= [];
gdjs.MenuCode.GDOptButtonObjects2= [];
gdjs.MenuCode.GDOptButtonObjects3= [];
gdjs.MenuCode.GDInstButtonObjects1= [];
gdjs.MenuCode.GDInstButtonObjects2= [];
gdjs.MenuCode.GDInstButtonObjects3= [];
gdjs.MenuCode.GDLBButtonObjects1= [];
gdjs.MenuCode.GDLBButtonObjects2= [];
gdjs.MenuCode.GDLBButtonObjects3= [];
gdjs.MenuCode.GDCreditsButtonObjects1= [];
gdjs.MenuCode.GDCreditsButtonObjects2= [];
gdjs.MenuCode.GDCreditsButtonObjects3= [];
gdjs.MenuCode.GDNewGameObjects1= [];
gdjs.MenuCode.GDNewGameObjects2= [];
gdjs.MenuCode.GDNewGameObjects3= [];
gdjs.MenuCode.GDOptionsObjects1= [];
gdjs.MenuCode.GDOptionsObjects2= [];
gdjs.MenuCode.GDOptionsObjects3= [];
gdjs.MenuCode.GDInstructionsObjects1= [];
gdjs.MenuCode.GDInstructionsObjects2= [];
gdjs.MenuCode.GDInstructionsObjects3= [];
gdjs.MenuCode.GDLeaderboardObjects1= [];
gdjs.MenuCode.GDLeaderboardObjects2= [];
gdjs.MenuCode.GDLeaderboardObjects3= [];
gdjs.MenuCode.GDCreditsObjects1= [];
gdjs.MenuCode.GDCreditsObjects2= [];
gdjs.MenuCode.GDCreditsObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.conditionTrue_2 = {val:false};
gdjs.MenuCode.condition0IsTrue_2 = {val:false};
gdjs.MenuCode.condition1IsTrue_2 = {val:false};
gdjs.MenuCode.condition2IsTrue_2 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects2Objects = Hashtable.newFrom({"StartButton": gdjs.MenuCode.GDStartButtonObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDInstButtonObjects2Objects = Hashtable.newFrom({"InstButton": gdjs.MenuCode.GDInstButtonObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLBButtonObjects2Objects = Hashtable.newFrom({"LBButton": gdjs.MenuCode.GDLBButtonObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCreditsButtonObjects2Objects = Hashtable.newFrom({"CreditsButton": gdjs.MenuCode.GDCreditsButtonObjects2});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\sfx\\Audio\\Theyre-Here_Looping.mp3", 1, true, 100, 1);
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 50);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.MenuCode.GDBackgroundObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{for(var i = 0, len = gdjs.MenuCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBackgroundObjects1[i].setYOffset(gdjs.MenuCode.GDBackgroundObjects1[i].getYOffset() + (-(300) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.MenuCode.GDStartButtonObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDStartButtonObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MenuCode.GDStartButtonObjects2);
{gdjs.MenuCode.conditionTrue_2 = gdjs.MenuCode.condition1IsTrue_1;
gdjs.MenuCode.condition0IsTrue_2.val = false;
gdjs.MenuCode.condition1IsTrue_2.val = false;
{
gdjs.MenuCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_2.val ) {
{
gdjs.MenuCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.MenuCode.conditionTrue_2.val = true && gdjs.MenuCode.condition0IsTrue_2.val && gdjs.MenuCode.condition1IsTrue_2.val;
}
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDStartButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDStartButtonObjects1_1final.indexOf(gdjs.MenuCode.GDStartButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDStartButtonObjects1_1final.push(gdjs.MenuCode.GDStartButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDStartButtonObjects1_1final, gdjs.MenuCode.GDStartButtonObjects1);
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameLoop", true);
}}

}


{

gdjs.MenuCode.GDInstButtonObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDInstButtonObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("InstButton"), gdjs.MenuCode.GDInstButtonObjects2);
{gdjs.MenuCode.conditionTrue_2 = gdjs.MenuCode.condition1IsTrue_1;
gdjs.MenuCode.condition0IsTrue_2.val = false;
gdjs.MenuCode.condition1IsTrue_2.val = false;
{
gdjs.MenuCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDInstButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_2.val ) {
{
gdjs.MenuCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.MenuCode.conditionTrue_2.val = true && gdjs.MenuCode.condition0IsTrue_2.val && gdjs.MenuCode.condition1IsTrue_2.val;
}
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDInstButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDInstButtonObjects1_1final.indexOf(gdjs.MenuCode.GDInstButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDInstButtonObjects1_1final.push(gdjs.MenuCode.GDInstButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDInstButtonObjects1_1final, gdjs.MenuCode.GDInstButtonObjects1);
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Instructions");
}}

}


{

gdjs.MenuCode.GDLBButtonObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDLBButtonObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LBButton"), gdjs.MenuCode.GDLBButtonObjects2);
{gdjs.MenuCode.conditionTrue_2 = gdjs.MenuCode.condition1IsTrue_1;
gdjs.MenuCode.condition0IsTrue_2.val = false;
gdjs.MenuCode.condition1IsTrue_2.val = false;
{
gdjs.MenuCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLBButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_2.val ) {
{
gdjs.MenuCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.MenuCode.conditionTrue_2.val = true && gdjs.MenuCode.condition0IsTrue_2.val && gdjs.MenuCode.condition1IsTrue_2.val;
}
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDLBButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDLBButtonObjects1_1final.indexOf(gdjs.MenuCode.GDLBButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDLBButtonObjects1_1final.push(gdjs.MenuCode.GDLBButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDLBButtonObjects1_1final, gdjs.MenuCode.GDLBButtonObjects1);
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Leaderboard");
}}

}


{

gdjs.MenuCode.GDCreditsButtonObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDCreditsButtonObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.MenuCode.GDCreditsButtonObjects2);
{gdjs.MenuCode.conditionTrue_2 = gdjs.MenuCode.condition1IsTrue_1;
gdjs.MenuCode.condition0IsTrue_2.val = false;
gdjs.MenuCode.condition1IsTrue_2.val = false;
{
gdjs.MenuCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCreditsButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_2.val ) {
{
gdjs.MenuCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.MenuCode.conditionTrue_2.val = true && gdjs.MenuCode.condition0IsTrue_2.val && gdjs.MenuCode.condition1IsTrue_2.val;
}
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDCreditsButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDCreditsButtonObjects1_1final.indexOf(gdjs.MenuCode.GDCreditsButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDCreditsButtonObjects1_1final.push(gdjs.MenuCode.GDCreditsButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDCreditsButtonObjects1_1final, gdjs.MenuCode.GDCreditsButtonObjects1);
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Credits");
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num0");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DevOptions"), gdjs.MenuCode.GDDevOptionsObjects1);
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}{for(var i = 0, len = gdjs.MenuCode.GDDevOptionsObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDDevOptionsObjects1[i].getBehavior("Flash").Flash(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DevOptions"), gdjs.MenuCode.GDDevOptionsObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDDevOptionsObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDDevOptionsObjects1[i].hide();
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DevOptions"), gdjs.MenuCode.GDDevOptionsObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDDevOptionsObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDDevOptionsObjects1[i].hide(false);
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDGameTitleObjects1.length = 0;
gdjs.MenuCode.GDGameTitleObjects2.length = 0;
gdjs.MenuCode.GDGameTitleObjects3.length = 0;
gdjs.MenuCode.GDSceneTitleObjects1.length = 0;
gdjs.MenuCode.GDSceneTitleObjects2.length = 0;
gdjs.MenuCode.GDSceneTitleObjects3.length = 0;
gdjs.MenuCode.GDKenneyObjects1.length = 0;
gdjs.MenuCode.GDKenneyObjects2.length = 0;
gdjs.MenuCode.GDKenneyObjects3.length = 0;
gdjs.MenuCode.GDPlayerModelObjects1.length = 0;
gdjs.MenuCode.GDPlayerModelObjects2.length = 0;
gdjs.MenuCode.GDPlayerModelObjects3.length = 0;
gdjs.MenuCode.GDDevOptionsObjects1.length = 0;
gdjs.MenuCode.GDDevOptionsObjects2.length = 0;
gdjs.MenuCode.GDDevOptionsObjects3.length = 0;
gdjs.MenuCode.GDStartButtonObjects1.length = 0;
gdjs.MenuCode.GDStartButtonObjects2.length = 0;
gdjs.MenuCode.GDStartButtonObjects3.length = 0;
gdjs.MenuCode.GDOptButtonObjects1.length = 0;
gdjs.MenuCode.GDOptButtonObjects2.length = 0;
gdjs.MenuCode.GDOptButtonObjects3.length = 0;
gdjs.MenuCode.GDInstButtonObjects1.length = 0;
gdjs.MenuCode.GDInstButtonObjects2.length = 0;
gdjs.MenuCode.GDInstButtonObjects3.length = 0;
gdjs.MenuCode.GDLBButtonObjects1.length = 0;
gdjs.MenuCode.GDLBButtonObjects2.length = 0;
gdjs.MenuCode.GDLBButtonObjects3.length = 0;
gdjs.MenuCode.GDCreditsButtonObjects1.length = 0;
gdjs.MenuCode.GDCreditsButtonObjects2.length = 0;
gdjs.MenuCode.GDCreditsButtonObjects3.length = 0;
gdjs.MenuCode.GDNewGameObjects1.length = 0;
gdjs.MenuCode.GDNewGameObjects2.length = 0;
gdjs.MenuCode.GDNewGameObjects3.length = 0;
gdjs.MenuCode.GDOptionsObjects1.length = 0;
gdjs.MenuCode.GDOptionsObjects2.length = 0;
gdjs.MenuCode.GDOptionsObjects3.length = 0;
gdjs.MenuCode.GDInstructionsObjects1.length = 0;
gdjs.MenuCode.GDInstructionsObjects2.length = 0;
gdjs.MenuCode.GDInstructionsObjects3.length = 0;
gdjs.MenuCode.GDLeaderboardObjects1.length = 0;
gdjs.MenuCode.GDLeaderboardObjects2.length = 0;
gdjs.MenuCode.GDLeaderboardObjects3.length = 0;
gdjs.MenuCode.GDCreditsObjects1.length = 0;
gdjs.MenuCode.GDCreditsObjects2.length = 0;
gdjs.MenuCode.GDCreditsObjects3.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
