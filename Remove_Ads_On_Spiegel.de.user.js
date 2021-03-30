// ==UserScript==
// @name           Remove Ads On Spiegel.de
// @namespace      *
// @include        http://www.spiegel.de/*
// @include        https://www.spiegel.de/*
// @grant          none
// @license        GPL-3.0-or-later
// ==/UserScript==

/**
 * (en) Removes node by its class name
 * (de) Entfernt einen Knoten anhand seiner Klassenbezeichnung
 */
function removeNodeByClass(tag, c) {
  var es = document.getElementsByTagName(tag);

  /* (en) walk through the list of elements with this tag name
   *      and remove the ones with this class name from its parent
   */
  /* (de) gehe die Liste der Elemente durch, die den angegebenen Tag-Namen
   *      besitzen, und entferne diejenigen Elemente, die die angegebene
   *      Klassenbezeichnung besitzen, aus der Liste der Kinderknoten des
   *      Vaterknotens
   */
  for (var i = 0; i <= (es.length - 1); i++) {
    if (es[i].className == c) {
      es[i].parentNode.removeChild(es[i]);
    }
  }
}

/* (en) remove outbrain advertisement imgs */
/* (de) entferne die Outbrain-Werbe-Bilder */
function removeOutbrainImgs() {
  var es = document.querySelectorAll('[referrerpolicy="unsafe-url"]');
  for (var i = 0; i <= (es.length - 1); i++) {
    es[i].parentNode.removeChild(es[i]);
  }
}

/* (en) remove outbrain advertisement imgs and vi video */
/* (de) entferne die Outbrain-Werbe-Bilder und das vi-Video */
function removeAds() {
  removeOutbrainImgs();
  removeNodeByClass('div', 'vi-stories-top-div viUnit2');
}

/* (en) remove outbrain advertisement imgs and vi video */
/* (de) entferne die Outbrain-Werbe-Bilder und das vi-Video */
setInterval(removeAds, 5000);
