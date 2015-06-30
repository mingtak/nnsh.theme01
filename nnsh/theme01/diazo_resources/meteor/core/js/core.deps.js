
/* core.deps.js */

(function($, Core) {

var loader;
var loaded = {};
var loading = {};
var events = Core.EventEmitter();

if (Core.ie8) {
  
  loader = function(scripts, callback) {
    var cb, load = [].concat(scripts);
    $.getScript(load.shift(), cb = function() {
      if (load.length === 0) {
        callback();
      } else {
        loader(load, cb);
      }
    });
  }

} else {
  
  loader = function(scripts, callback) {
    head.js.apply(null, scripts.concat(callback));
  }
  
}

Core.deps = {
  
  load: function(dep, callback) {
    if (dep instanceof Array) { var cb;
      this.load(dep.shift(), cb = function() {
        if (dep.length === 0) {
          callback();
        } else {
          Core.deps.load(dep, cb);
        }
      });
    } else if (dep in loading) {
      events.once(dep, callback);
    } else if (dep in loaded) {
      callback();
    } else if (dep in this) {
      loading[dep] = true;
      events.once(dep, callback);
      
      loader(_.map(this[dep], resolve), function() {
        delete loading[dep];
        loaded[dep] = true;
        events.emit(dep);
      });
      
    } else {
      throw new Error("Unable to load: " + dep);
    }
  },
  
  "google-code-prettify": [
    "++theme++nnsh.theme01/meteor/core/js/google-code-prettify/run_prettify.js"
  ],

  "jcarousel": [
    "++theme++nnsh.theme01/meteor/core/js/jcarousel/jquery.jcarousel.js"
  ],
  
  "jquery-base64": [
    "++theme++nnsh.theme01/meteor/core/js/jquery/jquery.base-sixty-four.js"
  ],

  "jquery-validate": [
    "++theme++nnsh.theme01/meteor/core/js/jquery/jquery.form.min.js",
    "++theme++nnsh.theme01/meteor/core/js/jquery/jquery.validate.js",
    "++theme++nnsh.theme01/meteor/core/js/jquery/jquery.validate-extras.js",
  ],
  
  "locache": [
    "++theme++nnsh.theme01/meteor/core/js/lib/locache.js"
  ],
  
  "md5": [
    "++theme++nnsh.theme01/meteor/core/js/lib/md5.js"
  ],
  
  "mediaelement": [
    "++theme++nnsh.theme01/meteor/core/js/mediaelement/mediaelement-and-player.min.js"
  ],
  
  "prettyphoto": [
    "++theme++nnsh.theme01/meteor/core/js/prettyphoto/jquery.prettyphoto.js"
  ],
  
  "videojs": [
    "++theme++nnsh.theme01/meteor/core/js/video-js/video.js"
  ],
  
  "core.canvas": [
    "++theme++nnsh.theme01/meteor/core/js/core.canvas.js"
  ],
  
  "core.slider": [
    "++theme++nnsh.theme01/meteor/core/js/core.slider.js"
  ],
  
  "client.flickr": [
    "++theme++nnsh.theme01/meteor/core/js/client.flickr.js"
  ],
  
  "client.forms": [
    "++theme++nnsh.theme01/meteor/core/js/client.forms.js"
  ],
  
  "client.maps": [
    "++theme++nnsh.theme01/meteor/core/js/client.maps.js"
  ],
  
  "client.search": [
    "++theme++nnsh.theme01/meteor/core/js/client.search.js"
  ],
  
  "client.social": [
    "++theme++nnsh.theme01/meteor/core/js/client.social.js"
  ],
  
  "client.twitter": [
    "++theme++nnsh.theme01/meteor/core/js/client.twitter.js"
  ],
  
  "meteor.jcarousel": [
    "++theme++nnsh.theme01/meteor/core/js/meteor.jcarousel.js"
  ],
  
  "meteor.posts-scroller": [
    "++theme++nnsh.theme01/meteor/core/js/meteor.posts-scroller.js"
  ],
  
  "meteor.slider": [
    "++theme++nnsh.theme01/meteor/core/js/meteor.slider.js"
  ],
  
  "meteor.vslider": [
    "++theme++nnsh.theme01/meteor/core/js/meteor.vslider.js"
  ]

}

function resolve(path) {
  return Core.path(path, true);
}

})(jQuery, window.Core);
