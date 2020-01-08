// ==UserScript==
// @name         Hide Ads on Facebook
// @namespace    https://tampermonkey.net/
// @version      1.25
// @description  Hide sponsored feeds on Facebook
// @author       KudoAmine
// @match        https://www.facebook.com/*
// @license MIT
// @grant        none
// ==/UserScript==
var side_bar_right = document.getElementsByClassName('home_right_column');

side_bar_right[0].style.display = "none";
const HideAds = () => {
      try {
  const feeds = document.getElementById('contentArea').querySelectorAll('[id*=story]');
  feeds.forEach(feed => {
      if(feed.style.display != "none"){
    try {
            const feedtype = feed
        .querySelector('[data-testid*="story"]')
        .children[0];

                try {
if (feedtype.getAttribute("class").indexOf(" ")!=-1){
          feed.style.display = "none";
        // feed.setAttribute("Hideads", "hiddenfeedtype");
                     }
        } catch (e) {
    }

    try {
     var texthere="";
var alleles = feedtype
.querySelector('[id*="_"]')
        .children[0];
for (var k=0;k<alleles.childElementCount;k++) {
if(getComputedStyle(alleles.children[k].children[0], null).display=="inline"){
texthere=texthere+alleles.children[k].children[0].getAttribute("data-content");
    }}
console.log(texthere);
        if ((texthere.indexOf("Sponsor") != -1) || (texthere.indexOf("مُم") != -1) || (texthere.indexOf("Publicidad") != -1) || (texthere.indexOf("Gesponsert") != -1) || (texthere.indexOf("zato") != -1) || (texthere.indexOf("cinP") != -1) || (texthere.indexOf("Patrocinado") != -1) || (texthere.indexOf("Được tài trợ") != -1) || (texthere.indexOf("Реклама") != -1) || (texthere.indexOf("赞助内容") != -1) || (texthere.indexOf("贊助") != -1) || (texthere.indexOf("Sponsrad") != -1) || (texthere.indexOf("Hirdet") != -1) ) {
          feed.style.display = "none";
         // feed.setAttribute("Hideads", "hiddenfeedtype");
           }
} catch (e) {
    }
        }
    catch (e) {
    }
          }
        try {
          const sponsoredlink = feed
        .querySelector('[class="uiStreamSponsoredLink"]');
      if (sponsoredlink != undefined) {
        feed.style.display = "none";
       // feed.setAttribute("Hideads", "hiddensponsoredlink");
      }
        }
             catch (e) {
    }
          try {
        if (feed.innerHTML.indexOf("/ads/about?") != -1) {
     feed.style.display = "none";
          }
       if (feed.innerHTML.indexOf("Suggested for you") != -1) {
     feed.style.display = "none";
          }
                 }
    catch (e) {
    }

  });
     }
    catch (e) {
    }
}
 HideAds()
setTimeout(HideAds, 1000);
(function () {
  window.addEventListener('scroll', () => {
    HideAds()
    setTimeout(HideAds, 1000);
  });


})();
