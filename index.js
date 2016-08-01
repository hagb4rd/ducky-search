var ducky = function ducky(query, site) { if (site) { site = "+" + encodeURIComponent("site:" + site); } else { site = ""; }; var url = ("https://duckduckgo.com/?q=!ducky+%q" + site).replace("%q", encodeURIComponent( query.replace(" ", "+") ) ); return url; }

if(typeof module !== 'undefined') {
  if(module.exports)
    module.exports = ducky;
}
