function yaas(){
  var $intern_0 = '', $intern_79 = '\n-', $intern_36 = '" for "gwt:onLoadErrorFn"', $intern_34 = '" for "gwt:onPropertyErrorFn"', $intern_66 = '"<script src=\\"', $intern_21 = '"><\/script>', $intern_10 = '#', $intern_78 = ');', $intern_70 = '-\n', $intern_80 = '-><\/scr', $intern_67 = '.cache.js\\"><\/scr" + "ipt>"', $intern_12 = '/', $intern_24 = '//', $intern_51 = '1E45591732D3457918D522867ABADA0F', $intern_52 = '3C350C49C81C7A4069CC4FCAB6AABC83', $intern_53 = '57E147F3D3E72BE02F2034E2CBA298A5', $intern_54 = '595D25034F0A317138B4E9E450E32D05', $intern_55 = '72637B09C59A166F129B314D10BE5733', $intern_57 = ':', $intern_28 = '::', $intern_68 = '<scr', $intern_20 = '<script id="', $intern_31 = '=', $intern_11 = '?', $intern_56 = 'A2BEFFD05AA62C0B80FF4AD00E46C82C', $intern_33 = 'Bad handler "', $intern_48 = 'Cross-site hosted mode not yet implemented. See issue ', $intern_64 = 'DOMContentLoaded', $intern_22 = 'SCRIPT', $intern_19 = '__gwt_marker_yaas', $intern_23 = 'base', $intern_15 = 'baseUrl', $intern_4 = 'begin', $intern_3 = 'bootstrap', $intern_14 = 'clear.cache.gif', $intern_30 = 'content', $intern_77 = 'document.write(', $intern_9 = 'end', $intern_73 = 'evtGroup: "loadExternalRefs", millis:(new Date()).getTime(),', $intern_75 = 'evtGroup: "moduleStartup", millis:(new Date()).getTime(),', $intern_45 = 'gecko', $intern_46 = 'gecko1_8', $intern_5 = 'gwt.codesvr=', $intern_6 = 'gwt.hosted=', $intern_7 = 'gwt.hybrid', $intern_58 = 'gwt/standard/standard.css', $intern_35 = 'gwt:onLoadErrorFn', $intern_32 = 'gwt:onPropertyErrorFn', $intern_29 = 'gwt:property', $intern_63 = 'head', $intern_62 = 'href', $intern_49 = 'http://code.google.com/p/google-web-toolkit/issues/detail?id=2079', $intern_44 = 'ie6', $intern_43 = 'ie8', $intern_42 = 'ie9', $intern_13 = 'img', $intern_81 = 'ipt>', $intern_69 = 'ipt><!-', $intern_59 = 'link', $intern_65 = 'loadExternalRefs', $intern_25 = 'meta', $intern_72 = 'moduleName:"yaas", sessionId:window.__gwtStatsSessionId, subSystem:"startup",', $intern_8 = 'moduleStartup', $intern_41 = 'msie', $intern_26 = 'name', $intern_38 = 'opera', $intern_60 = 'rel', $intern_40 = 'safari', $intern_16 = 'script', $intern_50 = 'selectingPermutation', $intern_2 = 'startup', $intern_61 = 'stylesheet', $intern_74 = 'type: "end"});', $intern_76 = 'type: "moduleRequested"});', $intern_18 = 'undefined', $intern_47 = 'unknown', $intern_37 = 'user.agent', $intern_39 = 'webkit', $intern_71 = 'window.__gwtStatsEvent && window.__gwtStatsEvent({', $intern_1 = 'yaas', $intern_17 = 'yaas.nocache.js', $intern_27 = 'yaas::';
  var $wnd = window, $doc = document, $stats = $wnd.__gwtStatsEvent?function(a){
    return $wnd.__gwtStatsEvent(a);
  }
  :null, $sessionId = $wnd.__gwtStatsSessionId?$wnd.__gwtStatsSessionId:null, gwtOnLoad, bodyDone, base = $intern_0, metaProps = {}, values = [], providers = [], answers = [], softPermutationId = 0, onLoadErrorFunc, propertyErrorFunc;
  $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date).getTime(), type:$intern_4});
  if (!$wnd.__gwt_stylesLoaded) {
    $wnd.__gwt_stylesLoaded = {};
  }
  if (!$wnd.__gwt_scriptsLoaded) {
    $wnd.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    var result = false;
    try {
      var query = $wnd.location.search;
      return (query.indexOf($intern_5) != -1 || (query.indexOf($intern_6) != -1 || $wnd.external && $wnd.external.gwtOnLoad)) && query.indexOf($intern_7) == -1;
    }
     catch (e) {
    }
    isHostedMode = function(){
      return result;
    }
    ;
    return result;
  }

  function maybeStartModule(){
    if (gwtOnLoad && bodyDone) {
      gwtOnLoad(onLoadErrorFunc, $intern_1, base, softPermutationId);
      $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_8, millis:(new Date).getTime(), type:$intern_9});
    }
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_10);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_11);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_12, Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):$intern_0;
    }

    function ensureAbsoluteUrl(url){
      if (url.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc.createElement($intern_13);
        img.src = url + $intern_14;
        url = getDirectoryOfFile(img.src);
      }
      return url;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty($intern_15);
      if (metaVal != null) {
        return metaVal;
      }
      return $intern_0;
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc.getElementsByTagName($intern_16);
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf($intern_17) != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return $intern_0;
    }

    function tryMarkerScript(){
      var thisScript;
      if (typeof isBodyLoaded == $intern_18 || !isBodyLoaded()) {
        var markerId = $intern_19;
        var markerScript;
        $doc.write($intern_20 + markerId + $intern_21);
        markerScript = $doc.getElementById(markerId);
        thisScript = markerScript && markerScript.previousSibling;
        while (thisScript && thisScript.tagName != $intern_22) {
          thisScript = thisScript.previousSibling;
        }
        if (markerScript) {
          markerScript.parentNode.removeChild(markerScript);
        }
        if (thisScript && thisScript.src) {
          return getDirectoryOfFile(thisScript.src);
        }
      }
      return $intern_0;
    }

    function tryBaseTag(){
      var baseElements = $doc.getElementsByTagName($intern_23);
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return $intern_0;
    }

    function isLocationOk(){
      var loc = $doc.location;
      return loc.href == loc.protocol + $intern_24 + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == $intern_0) {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == $intern_0) {
      tempBase = tryMarkerScript();
    }
    if (tempBase == $intern_0) {
      tempBase = tryBaseTag();
    }
    if (tempBase == $intern_0 && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    base = tempBase;
    return tempBase;
  }

  function processMetas(){
    var metas = document.getElementsByTagName($intern_25);
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name = meta.getAttribute($intern_26), content;
      if (name) {
        name = name.replace($intern_27, $intern_0);
        if (name.indexOf($intern_28) >= 0) {
          continue;
        }
        if (name == $intern_29) {
          content = meta.getAttribute($intern_30);
          if (content) {
            var value, eq = content.indexOf($intern_31);
            if (eq >= 0) {
              name = content.substring(0, eq);
              value = content.substring(eq + 1);
            }
             else {
              name = content;
              value = $intern_0;
            }
            metaProps[name] = value;
          }
        }
         else if (name == $intern_32) {
          content = meta.getAttribute($intern_30);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_33 + content + $intern_34);
            }
          }
        }
         else if (name == $intern_35) {
          content = meta.getAttribute($intern_30);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_33 + content + $intern_36);
            }
          }
        }
      }
    }
  }

  function __gwt_getMetaProperty(name){
    var value = metaProps[name];
    return value == null?null:value;
  }

  function unflattenKeylistIntoAnswers(propValArray, value){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value;
  }

  function computePropValue(propName){
    var value = providers[propName](), allowedValuesMap = values[propName];
    if (value in allowedValuesMap) {
      return value;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value);
    }
    throw null;
  }

  providers[$intern_37] = function(){
    var ua = navigator.userAgent.toLowerCase();
    var makeVersion = function(result){
      return parseInt(result[1]) * 1000 + parseInt(result[2]);
    }
    ;
    if (function(){
      return ua.indexOf($intern_38) != -1;
    }
    ())
      return $intern_38;
    if (function(){
      return ua.indexOf($intern_39) != -1;
    }
    ())
      return $intern_40;
    if (function(){
      return ua.indexOf($intern_41) != -1 && $doc.documentMode >= 9;
    }
    ())
      return $intern_42;
    if (function(){
      return ua.indexOf($intern_41) != -1 && $doc.documentMode >= 8;
    }
    ())
      return $intern_43;
    if (function(){
      var result = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
      if (result && result.length == 3)
        return makeVersion(result) >= 6000;
    }
    ())
      return $intern_44;
    if (function(){
      return ua.indexOf($intern_45) != -1;
    }
    ())
      return $intern_46;
    return $intern_47;
  }
  ;
  values[$intern_37] = {gecko1_8:0, ie6:1, ie8:2, ie9:3, opera:4, safari:5};
  yaas.onScriptLoad = function(gwtOnLoadFunc){
    yaas.onScriptLoad = null;
    gwtOnLoad = gwtOnLoadFunc;
    maybeStartModule();
  }
  ;
  if (isHostedMode()) {
    alert($intern_48 + $intern_49);
    return;
  }
  processMetas();
  computeScriptBase();
  $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date).getTime(), type:$intern_50});
  var strongName;
  try {
    unflattenKeylistIntoAnswers([$intern_42], $intern_51);
    unflattenKeylistIntoAnswers([$intern_40], $intern_52);
    unflattenKeylistIntoAnswers([$intern_38], $intern_53);
    unflattenKeylistIntoAnswers([$intern_44], $intern_54);
    unflattenKeylistIntoAnswers([$intern_46], $intern_55);
    unflattenKeylistIntoAnswers([$intern_43], $intern_56);
    strongName = answers[computePropValue($intern_37)];
    var idx = strongName.indexOf($intern_57);
    if (idx != -1) {
      softPermutationId = Number(strongName.substring(idx + 1));
      strongName = strongName.substring(0, idx);
    }
  }
   catch (e) {
    return;
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      if (!__gwt_stylesLoaded[$intern_58]) {
        var l = $doc.createElement($intern_59);
        __gwt_stylesLoaded[$intern_58] = l;
        l.setAttribute($intern_60, $intern_61);
        l.setAttribute($intern_62, base + $intern_58);
        $doc.getElementsByTagName($intern_63)[0].appendChild(l);
      }
      maybeStartModule();
      if ($doc.removeEventListener) {
        $doc.removeEventListener($intern_64, onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc.addEventListener) {
    $doc.addEventListener($intern_64, function(){
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc.readyState)) {
      onBodyDone();
    }
  }
  , 50);
  $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date).getTime(), type:$intern_9});
  $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_65, millis:(new Date).getTime(), type:$intern_4});
  var compiledScriptTag = $intern_66 + base + strongName + $intern_67;
  $doc.write($intern_68 + $intern_69 + $intern_70 + $intern_71 + $intern_72 + $intern_73 + $intern_74 + $intern_71 + $intern_72 + $intern_75 + $intern_76 + $intern_77 + compiledScriptTag + $intern_78 + $intern_79 + $intern_80 + $intern_81);
}

yaas();
