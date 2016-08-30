# Semantic-UI.ngTab
Semantic-UI Tab - AngularJS
<br>Semantic is a UI component framework based around useful principles from natural language. http://www.semantic-ui.com

<p>
  <a href="https://gitter.im/miamarti/Semantic-UI.ngTab" target="_blank"><img src="https://img.shields.io/gitter/room/nwjs/nw.js.svg"></a>
  <img src="https://img.shields.io/badge/SemanticUI.ngTab-release-green.svg">
  <img src="https://img.shields.io/badge/version-1.0.1-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
  <a href="https://github.com/miamarti/Semantic-UI.ngTab/tarball/master"><img src="https://img.shields.io/github/downloads/atom/atom/latest/total.svg"></a>
  <img src="https://img.shields.io/bower/v/bootstrap.svg">
</p>

<img src="https://c6.staticflickr.com/8/7341/28163429221_493b20f4ec_z.jpg" width="640" height="196" alt="Semantic-UI.ngTab">

## Dependencies
* AngularJS

## Implementation
```
    <div class="ui pointing secondary menu" ng-tab>
        <a class="item active" data-tab="tabA">Tab A</a>
        <a class="item" data-tab="tabB">Tab B</a>
        <a class="item" data-tab="tabC">Tab C</a>
    </div>
    
    <div class="ui attached tab active tabs-datails" data-tab="tabA">
      ...
    </div>
    <div class="ui attached tab tabs-datails" data-tab="tabB">
      ...
    </div>
    <div class="ui attached tab tabs-datails" data-tab="tabC">
      ...
    </div>
```

## Bower install de dependency
```
$ bower install Semantic-UI.ngTab --save
```

## Module AngularJS include
```
angular.module('example', ["ngTab"]);
```
