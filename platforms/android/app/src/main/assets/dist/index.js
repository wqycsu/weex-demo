// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(32)
)

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(34)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/components/goodcard_c.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a72d0fe8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gmixin = __webpack_require__(2);

var _gmixin2 = _interopRequireDefault(_gmixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* weex initialized here, please do not move this line */
var router = __webpack_require__(3); /* global Vue */

var App = __webpack_require__(48);
/* eslint-disable no-new */
Vue.config.debug = true;

Vue.mixin(_gmixin2.default);

new Vue(Vue.util.extend({ el: '#root', router: router }, App));
router.push('/');

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by weiquanyun on 2018/4/9.
 */
// eslint-disable-next-line no-undef
var stream = weex.requireModule('stream');
exports.default = {
  methods: {
    jump: function jump(to) {
      if (to) {
        if (this.$router) {
          this.$router.push(to);
        }
      }
    },
    setNavTitle: function setNavTitle(title) {
      var needBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // eslint-disable-next-line no-undef
      var navigator = weex.requireModule('navigator');
      navigator.setNavBarTitle(title);
      if (needBack) {
        navigator.setNavBarLeftItem('back');
      } else {
        navigator.setNavBarLeftItem('null');
      }
    },
    toast: function toast(message) {
      // eslint-disable-next-line no-undef
      var modal = weex.requireModule('modal');
      modal.toast({
        message: message,
        duration: 3
      });
    },
    isWeb: function isWeb() {
      // eslint-disable-next-line no-undef
      var platform = weex.config.env.platform;
      return !platform || platform.toLowerCase() === 'web';
    },
    initIconFont: function initIconFont() {
      // eslint-disable-next-line no-undef
      var domModule = weex.requireModule('dom');
      domModule.addRule('fontFace', {
        'fontFamily': 'iconfont',
        'src': "url('http://at.alicdn.com/t/font_627710_3zxmndg2v6y1fw29.ttf')"
      });
    },
    get: function get(api, callback) {
      return stream.fetch({
        method: 'GET',
        type: 'json',
        url: 'http://cdn.zwwill.com/yanxuan/' + api
      }, callback);
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueRouter = __webpack_require__(4);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _hello = __webpack_require__(5);

var _hello2 = _interopRequireDefault(_hello);

var _Main = __webpack_require__(9);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueRouter2.default); /* global Vue */


module.exports = new _vueRouter2.default({
  routes: [{
    path: '/',
    redirect: '/main'
  }, {
    path: '/hello',
    name: 'Hello',
    component: _hello2.default
  }, {
    path: '/main',
    name: 'Main',
    component: _Main2.default
  }]
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert(condition, message) {
  if (!condition) {
    throw new Error("[vue-router] " + message);
  }
}

function warn(condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn("[vue-router] " + message);
  }
}

function isError(err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1;
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render(_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children);
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h();
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (val && current !== vm || !val && current === vm) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children);
  }
};

function resolveProps(route, config) {
  switch (typeof config === 'undefined' ? 'undefined' : _typeof(config)) {
    case 'undefined':
      return;
    case 'object':
      return config;
    case 'function':
      return config(route);
    case 'boolean':
      return config ? route.params : undefined;
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "props in \"" + route.path + "\" is a " + (typeof config === 'undefined' ? 'undefined' : _typeof(config)) + ", " + "expecting an object, function or boolean.");
      }
  }
}

function extend(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to;
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent;

function resolveQuery(query, extraQuery, _parseQuery) {
  if (extraQuery === void 0) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery;
}

function parseQuery(query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res;
}

function stringifyQuery(obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encode(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&');
    }

    return encode(key) + '=' + encode(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?" + res : '';
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute(record, location, redirectedFrom, router) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || record && record.name,
    meta: record && record.meta || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route);
}

function clone(value) {
  if (Array.isArray(value)) {
    return value.map(clone);
  } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res;
  } else {
    return value;
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch(record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res;
}

function getFullPath(ref, _stringifyQuery) {
  var path = ref.path;
  var query = ref.query;if (query === void 0) query = {};
  var hash = ref.hash;if (hash === void 0) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash;
}

function isSameRoute(a, b) {
  if (b === START) {
    return a === b;
  } else if (!b) {
    return false;
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
  } else if (a.name && b.name) {
    return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
  } else {
    return false;
  }
}

function isObjectEqual(a, b) {
  if (a === void 0) a = {};
  if (b === void 0) b = {};

  // handle null value #1566
  if (!a || !b) {
    return a === b;
  }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if ((typeof aVal === 'undefined' ? 'undefined' : _typeof(aVal)) === 'object' && (typeof bVal === 'undefined' ? 'undefined' : _typeof(bVal)) === 'object') {
      return isObjectEqual(aVal, bVal);
    }
    return String(aVal) === String(bVal);
  });
}

function isIncludedRoute(current, target) {
  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
}

function queryIncludes(current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false;
    }
  }
  return true;
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render(h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null ? 'router-link-exact-active' : globalExactActiveClass;
    var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
    var compareTarget = location.path ? createRoute(null, location, null, router) : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);

    var handler = function handler(e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default);
  }
};

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
    return;
  }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) {
    return;
  }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) {
    return;
  }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) {
      return;
    }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true;
}

function findAnchor(children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child;
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child;
      }
    }
  }
}

var _Vue;

function install(Vue) {
  if (install.installed && _Vue === Vue) {
    return;
  }
  install.installed = true;

  _Vue = Vue;

  var isDef = function isDef(v) {
    return v !== undefined;
  };

  var registerInstance = function registerInstance(vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate() {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed() {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get() {
      return this._routerRoot._router;
    }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get() {
      return this._routerRoot._route;
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative;
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/');
}

function parsePath(path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  };
}

function cleanPath(path) {
  return path.replace(/\/\//g, '/');
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (isarray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams(path, params, routeMsg) {
  try {
    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true });
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, "missing param for " + routeMsg + ": " + e.message);
    }
    return '';
  }
}

/*  */

function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  };
}

function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(typeof route.component !== 'string', "route config \"component\" for path: " + String(path || name) + " cannot be a " + "string id. Use an actual component instead.");
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null ? {} : route.components ? route.props : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) {
        return (/^\/?$/.test(child.path)
        );
      })) {
        warn(false, "Named Route '" + route.name + "' has a default child route. " + "When navigating to this named route (:to=\"{name: '" + route.name + "'\"), " + "the default child route will not be rendered. Remove the name from " + "this route and use the name of the default child route for named " + "links instead.");
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(false, "Duplicate named routes definition: " + "{ name: \"" + name + "\", path: \"" + record.path + "\" }");
    }
  }
}

function compileRouteRegex(path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], "Duplicate param keys in route with path: \"" + path + "\"");
      keys[key.name] = true;
    });
  }
  return regex;
}

function normalizePath(path, parent, strict) {
  if (!strict) {
    path = path.replace(/\/$/, '');
  }
  if (path[0] === '/') {
    return path;
  }
  if (parent == null) {
    return path;
  }
  return cleanPath(parent.path + "/" + path);
}

/*  */

function normalizeLocation(raw, current, append, router) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next;
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, "path " + current.path);
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next;
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = current && current.path || '/';
  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;

  var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  };
}

function assign(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a;
}

/*  */

function createMatcher(routes, router) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match(raw, currentRoute, redirectedFrom) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, "Route with name '" + name + "' does not exist");
      }
      if (!record) {
        return _createRoute(null, location);
      }
      var paramNames = record.regex.keys.filter(function (key) {
        return !key.optional;
      }).map(function (key) {
        return key.name;
      });

      if (_typeof(location.params) !== 'object') {
        location.params = {};
      }

      if (currentRoute && _typeof(currentRoute.params) === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
        return _createRoute(record, location, redirectedFrom);
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom);
        }
      }
    }
    // no match
    return _createRoute(null, location);
  }

  function redirect(record, location) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || (typeof redirect === 'undefined' ? 'undefined' : _typeof(redirect)) !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location);
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location);
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }
  }

  function alias(record, location, matchAs) {
    var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location);
    }
    return _createRoute(null, location);
  }

  function _createRoute(record, location, redirectedFrom) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location);
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs);
    }
    return createRoute(record, location, redirectedFrom, router);
  }

  return {
    match: match,
    addRoutes: addRoutes
  };
}

function matchRoute(regex, path, params) {
  var m = path.match(regex);

  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true;
}

function resolveRecordPath(path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true);
}

/*  */

var positionStore = Object.create(null);

function setupScroll() {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll(router, to, from, isPop) {
  if (!router.app) {
    return;
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return;
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition(shouldScroll, position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition() {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition() {
  var key = getStateKey();
  if (key) {
    return positionStore[key];
  }
}

function getElementPosition(el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  };
}

function isValidPosition(obj) {
  return isNumber(obj.x) || isNumber(obj.y);
}

function normalizePosition(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  };
}

function normalizeOffset(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  };
}

function isNumber(v) {
  return typeof v === 'number';
}

function scrollToPosition(shouldScroll, position) {
  var isObject = (typeof shouldScroll === 'undefined' ? 'undefined' : _typeof(shouldScroll)) === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && _typeof(shouldScroll.offset) === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && function () {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }

  return window.history && 'pushState' in window.history;
}();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;

var _key = genKey();

function genKey() {
  return Time.now().toFixed(3);
}

function getStateKey() {
  return _key;
}

function setStateKey(key) {
  _key = key;
}

function pushState(url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState(url) {
  pushState(url, true);
}

/*  */

function runQueue(queue, fn, cb) {
  var step = function step(index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents(matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function' ? resolvedDef : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason) ? reason : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) {
      next();
    }
  };
}

function flatMapComponents(matched, fn) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key);
    });
  }));
}

function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var hasSymbol = typeof Symbol === 'function' && _typeof(Symbol.toStringTag) === 'symbol';

function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === 'Module';
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once(fn) {
  var called = false;
  return function () {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }if (called) {
      return;
    }
    called = true;
    return fn.apply(this, args);
  };
}

/*  */

var History = function History(router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen(cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady(cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError(errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
  var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) {
        cb(err);
      });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
  var this$1 = this;

  var current = this.current;
  var abort = function abort(err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (isSameRoute(route, current) &&
  // in the case the route map has been dynamically appended to
  route.matched.length === current.matched.length) {
    this.ensureURL();
    return abort();
  }

  var ref = resolveQueue(this.current.matched, route.matched);
  var updated = ref.updated;
  var deactivated = ref.deactivated;
  var activated = ref.activated;

  var queue = [].concat(
  // in-component leave guards
  extractLeaveGuards(deactivated),
  // global before hooks
  this.router.beforeHooks,
  // in-component update hooks
  extractUpdateHooks(updated),
  // in-config enter guards
  activated.map(function (m) {
    return m.beforeEnter;
  }),
  // async components
  resolveAsyncComponents(activated));

  this.pending = route;
  var iterator = function iterator(hook, next) {
    if (this$1.pending !== route) {
      return abort();
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (typeof to === 'string' || (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if ((typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function isValid() {
      return this$1.current === route;
    };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort();
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute(route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase(base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '');
}

function resolveQueue(current, next) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  };
}

function extractGuards(records, name, bind, reverse) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard) ? guard.map(function (guard) {
        return bind(guard, instance, match, key);
      }) : bind(guard, instance, match, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}

function extractGuard(def, key) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key];
}

function extractLeaveGuards(deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
}

function extractUpdateHooks(updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
}

function bindGuard(guard, instance) {
  if (instance) {
    return function boundRouteGuard() {
      return guard.apply(instance, arguments);
    };
  }
}

function extractEnterGuards(activated, cbs, isValid) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid);
  });
}

function bindEnterGuard(guard, match, key, cbs, isValid) {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    });
  };
}

function poll(cb, // somehow flow cannot infer this is a function
instances, key, isValid) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = function (History$$1) {
  function HTML5History(router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return;
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if (History$$1) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go(n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL(push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
    return getLocation(this.base);
  };

  return HTML5History;
}(History);

function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

/*  */

var HashHistory = function (History$$1) {
  function HashHistory(router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return;
    }
    ensureSlash();
  }

  if (History$$1) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners() {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return;
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go(n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL(push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    return getHash();
  };

  return HashHistory;
}(History);

function checkFallback(base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true;
  }
}

function ensureSlash() {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true;
  }
  replaceHash('/' + path);
  return false;
}

function getHash() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1);
}

function getUrl(path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return base + "#" + path;
}

function pushHash(path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash(path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = function (History$$1) {
  function AbstractHistory(router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if (History$$1) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go(n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return;
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/';
  };

  AbstractHistory.prototype.ensureURL = function ensureURL() {
    // noop
  };

  return AbstractHistory;
}(History);

/*  */

var VueRouter = function VueRouter(options) {
  if (options === void 0) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break;
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break;
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break;
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, "invalid mode: " + mode);
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom);
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current;
};

VueRouter.prototype.init = function init(app /* Vue component instance */) {
  var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return;
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function setupHashListener() {
      history.setupListeners();
    };
    history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach(fn) {
  return registerHook(this.beforeHooks, fn);
};

VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
  return registerHook(this.resolveHooks, fn);
};

VueRouter.prototype.afterEach = function afterEach(fn) {
  return registerHook(this.afterHooks, fn);
};

VueRouter.prototype.onReady = function onReady(cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError(errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go(n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back() {
  this.go(-1);
};

VueRouter.prototype.forward = function forward() {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
  var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
  if (!route) {
    return [];
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
};

VueRouter.prototype.resolve = function resolve(to, current, append) {
  var location = normalizeLocation(to, current || this.history.current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  };
};

VueRouter.prototype.addRoutes = function addRoutes(routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties(VueRouter.prototype, prototypeAccessors);

function registerHook(list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) {
      list.splice(i, 1);
    }
  };
}

function createHref(base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path;
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

exports.default = VueRouter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/views/hello.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cc211f1a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#dddddd"
  },
  "container_mounted": {
    "left": 0
  },
  "topic-header": {
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "marginBottom": "12"
  },
  "header-item": {
    "width": "275",
    "height": "150",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "item-image": {
    "width": "270",
    "height": "150",
    "borderRadius": "10",
    "position": "absolute",
    "left": 0,
    "top": 0
  },
  "item-name": {
    "fontSize": "28",
    "overflow": "hidden",
    "textAlign": "center",
    "color": "#ffffff",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "item-image-1": {
    "width": "750",
    "height": "380"
  },
  "body-item": {
    "width": "750",
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "marginBottom": "12"
  },
  "author-info": {
    "width": "750",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "alignItems": "center",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "author-head": {
    "width": "60",
    "height": "60",
    "borderRadius": "30"
  },
  "author-name": {
    "textAlign": "center",
    "marginLeft": "10",
    "fontSize": "24",
    "color": "#333333",
    "lines": 1,
    "overflow": "hidden",
    "textOverflow": "ellipsis"
  },
  "title-info": {
    "width": "750",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "flexDirection": "row",
    "alignItems": "center",
    "flexWrap": "nowrap"
  },
  "item-title": {
    "fontSize": "28",
    "color": "#333333"
  },
  "price": {
    "fontSize": "28",
    "color": "#b4282d",
    "position": "absolute",
    "right": "20"
  },
  "item-info": {
    "fontSize": "24",
    "color": "#7f7f7f",
    "width": "750",
    "paddingLeft": "20",
    "paddingRight": "20",
    "paddingBottom": "10"
  },
  "item-image-container": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "item-image-main": {
    "flex": 1,
    "height": "380"
  },
  "sub-image-container": {
    "width": "190",
    "height": "380"
  },
  "item-image-sub": {
    "width": "190",
    "height": "188",
    "marginLeft": "3",
    "marginBottom": "3"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      mounted: false,
      itemList: []
    };
  },

  computed: {},
  created: function created() {
    var _this = this;

    this.get('api/topic/index', function (res) {
      var result = res.data.result;
      _this.topics = result['topics'];
      var topic = {};
      topic.type = '0';
      topic.item = result['topics'];
      _this.itemList.push(topic);
      _this.get('api/topic/articles', function (res) {
        var result = res.data.result;
        var articles = result['articles'];
        for (var i = 0; i < articles.length; i++) {
          var article = {};
          if (typeof articles[i].img === 'string') {
            article.type = '1';
            article.item = articles[i];
          } else if (_typeof(articles[i].img) === 'object' && articles[i].img.length >= 3) {
            article.type = '2';
            article.item = articles[i];
          }
          _this.itemList.push(article);
        }
        console.log(JSON.stringify(_this.itemList));
      });
    });
  },
  mounted: function mounted() {
    if (!this.isWeb()) {
      this.setNavTitle('专题');
      // eslint-disable-next-line no-undef
      var animation = weex.requireModule('animation');
      animation.transition(this.$refs.container, {
        styles: {
          left: 0
        },
        duration: 300,
        timingFunction: 'ease-in-out',
        needLayout: false,
        delay: 0
      }, function () {});
    } else {
      this.mounted = true;
    }
  },

  methods: {
    back: function back() {
      this.$router.back();
    },
    loadMore: function loadMore() {
      var _this2 = this;

      this.toast('load more');
      this.$nextTick(function () {
        var _itemList;

        var data = [{
          item: {
            auther: '居家组：朵朵',
            autherImg: 'https://yanxuan.nosdn.127.net/15040896357740404.png?imageView&thumbnail=64y64',
            img: ['https://yanxuan.nosdn.127.net/15040927525260414.jpg', 'https://yanxuan.nosdn.127.net/15040927586650416.jpg', 'https://yanxuan.nosdn.127.net/15040927556820415.jpg'],
            info: '连续下了几场雨，杭州的早晚，已透出几丝凉意。再睡席子便有点凉了，于是周末从柜子翻...',
            price: '',
            tlt: '初秋，最想用它来裸睡'
          },
          type: '2'
        }, {
          item: {
            auther: '严选推荐',
            autherImg: 'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64',
            img: 'http://yanxuan.nosdn.127.net/4d72145e48e65ee3deaf2e1403e6ec73.jpg',
            info: '那些值得珍藏的严选手作好物',
            price: '29',
            tlt: '不为繁华易匠心'
          },
          type: '1'
        }];
        (_itemList = _this2.itemList).push.apply(_itemList, data);
      });
    }
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: ["container"],
    attrs: {
      "id": "div"
    }
  }, [_c('recycle-list', {
    key: _vm.index,
    appendAsTree: true,
    attrs: {
      "loadmoreoffset": "100",
      "listData": _vm.itemList,
      "bindingExpression": "itemList",
      "alias": "item",
      "index": "index",
      "switch": "type",
      "append": "tree"
    },
    on: {
      "loadmore": _vm.loadMore
    }
  }, [_c('cell-slot', {
    appendAsTree: true,
    attrs: {
      "case": "0",
      "append": "tree"
    }
  }, [_c('scroller', {
    staticClass: ["topic-header"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, [_c('div', {
    key: {
      "@binding": "i"
    },
    staticClass: ["header-item"],
    attrs: {
      "[[repeat]]": {
        "@expression": "item.item",
        "@alias": "data",
        "@index": "i"
      }
    }
  }, [_c('image', {
    staticClass: ["item-image"],
    attrs: {
      "resize": "cover",
      "src": {
        "@binding": "data.img"
      }
    }
  }), _c('text', {
    staticClass: ["item-name"],
    attrs: {
      "value": {
        "@binding": "data.name"
      }
    }
  })])])]), _c('cell-slot', {
    appendAsTree: true,
    attrs: {
      "case": "1",
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["body-item"]
  }, [_c('div', {
    staticClass: ["author-info"]
  }, [_c('image', {
    staticClass: ["author-head"],
    attrs: {
      "src": {
        "@binding": "item.item.autherImg"
      }
    }
  }), _c('text', {
    staticClass: ["author-name"],
    attrs: {
      "value": {
        "@binding": "item.item.auther"
      }
    }
  })]), _c('image', {
    staticClass: ["item-image-1"],
    attrs: {
      "src": {
        "@binding": "item.item.img"
      }
    }
  }), _c('div', {
    staticClass: ["title-info"]
  }, [_c('text', {
    staticClass: ["item-title"],
    attrs: {
      "value": {
        "@binding": "item.item.tlt"
      }
    }
  }), _c('text', {
    staticClass: ["price"],
    attrs: {
      "[[match]]": "item.item.price",
      "value": [{
        "@binding": "item.item.price"
      }, "元起"]
    }
  })]), _c('text', {
    staticClass: ["item-info"],
    attrs: {
      "value": {
        "@binding": "item.item.info"
      }
    }
  })])]), _c('cell-slot', {
    appendAsTree: true,
    attrs: {
      "case": "2",
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["body-item"]
  }, [_c('div', {
    staticClass: ["author-info"]
  }, [_c('image', {
    staticClass: ["author-head"],
    attrs: {
      "src": {
        "@binding": "item.item.autherImg"
      }
    }
  }), _c('text', {
    staticClass: ["author-name"],
    attrs: {
      "value": {
        "@binding": "item.item.auther"
      }
    }
  })]), _c('div', {
    staticClass: ["item-image-container"]
  }, [_c('image', {
    staticClass: ["item-image-main"],
    attrs: {
      "src": {
        "@binding": "item.item.img[0]"
      }
    }
  }), _c('div', {
    staticClass: ["sub-image-container"]
  }, [_c('image', {
    staticClass: ["item-image-sub"],
    attrs: {
      "src": {
        "@binding": "item.item.img[1]"
      }
    }
  }), _c('image', {
    staticClass: ["item-image-sub"],
    attrs: {
      "src": {
        "@binding": "item.item.img[2]"
      }
    }
  })])]), _c('div', {
    staticClass: ["title-info"]
  }, [_c('text', {
    staticClass: ["item-title"],
    attrs: {
      "value": {
        "@binding": "item.item.tlt"
      }
    }
  }), _c('text', {
    staticClass: ["price"],
    attrs: {
      "[[match]]": "item.item.price",
      "value": [{
        "@binding": "item.item.price"
      }, "元起"]
    }
  })]), _c('text', {
    staticClass: ["item-info"],
    attrs: {
      "value": {
        "@binding": "item.item.info"
      }
    }
  })])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(47)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/views/Main.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4803d4c8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "main-scroller": {
    "position": "absolute",
    "top": "168",
    "left": 0,
    "right": 0
  },
  "refresh": {
    "width": "750",
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "refresh-indicator-text": {
    "height": "150",
    "color": "#888888",
    "fontSize": "42",
    "textAlign": "center"
  },
  "loading-indicator-text": {
    "color": "#888888",
    "fontSize": "42",
    "textAlign": "center"
  },
  "slider": {
    "width": "750",
    "height": "400"
  },
  "slider-image": {
    "width": "750",
    "height": "400"
  },
  "indicator": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "height": "60",
    "itemSize": "10",
    "itemColor": "#ffffff",
    "itemSelectedColor": "#b4282d"
  },
  "slogan": {
    "display": "flex",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "height": "66",
    "alignItems": "center"
  },
  "slogan-item": {
    "fontFamily": "iconfont",
    "fontSize": "26",
    "flex": 1,
    "textAlign": "center",
    "color": "#b4282d"
  },
  "makers-block": {
    "marginTop": "12",
    "justifyContent": "center",
    "backgroundColor": "#ffffff"
  },
  "makers-title": {
    "textAlign": "center",
    "marginTop": "30",
    "marginBottom": "26",
    "fontSize": "30"
  },
  "makers-box": {
    "width": "750",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "center"
  },
  "goods-recommend-box": {
    "position": "relative",
    "backgroundColor": "#ffffff",
    "marginTop": "10",
    "paddingBottom": "15"
  },
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "good-list-container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "backgroundColor": "#ffffff",
    "paddingTop": "30",
    "marginTop": "12",
    "marginBottom": "12"
  },
  "good-list-title": {
    "textAlign": "center",
    "color": "#333333",
    "width": "750",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "fontSize": "30"
  },
  "good-list-box": {
    "width": "750",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "center"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(12);

var _button2 = _interopRequireDefault(_button);

var _homeheader = __webpack_require__(16);

var _homeheader2 = _interopRequireDefault(_homeheader);

var _headertab = __webpack_require__(20);

var _headertab2 = _interopRequireDefault(_headertab);

var _labels = __webpack_require__(28);

var _labels2 = _interopRequireDefault(_labels);

var _goodcard_c = __webpack_require__(0);

var _goodcard_c2 = _interopRequireDefault(_goodcard_c);

var _goodcard_s = __webpack_require__(35);

var _goodcard_s2 = _interopRequireDefault(_goodcard_s);

var _goodsRecommend = __webpack_require__(39);

var _goodsRecommend2 = _interopRequireDefault(_goodsRecommend);

var _goodcard_cc = __webpack_require__(43);

var _goodcard_cc2 = _interopRequireDefault(_goodcard_cc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// eslint-disable-next-line no-undef
var dom = weex.requireModule('dom');
// eslint-disable-next-line no-undef
var animation = weex.requireModule('animation');
exports.default = {
  components: { CcGoodCard: _goodcard_cc2.default, GoodsRecommend: _goodsRecommend2.default, SGoodCard: _goodcard_s2.default, CGoodCard: _goodcard_c2.default, Labels: _labels2.default, HeaderTab: _headertab2.default, CButton: _button2.default, HomeHeader: _homeheader2.default },
  data: function data() {
    return {
      tabs: [{
        index: 0,
        text: '推荐',
        selected: false
      }, {
        index: 1,
        text: '限时购',
        selected: false
      }, {
        index: 2,
        text: '新品',
        selected: false
      }, {
        index: 3,
        text: '居家',
        selected: false
      }, {
        index: 4,
        text: '餐厨',
        selected: false
      }, {
        index: 5,
        text: '配件',
        selected: false
      }, {
        index: 6,
        text: '服装',
        selected: false
      }, {
        index: 7,
        text: '电器',
        selected: false
      }, {
        index: 8,
        text: '洗护',
        selected: false
      }, {
        index: 9,
        text: '杂货',
        selected: false
      }],
      labels: ['推荐', '限时购', '新品', '居家', '餐厨', '配件', '服装', '电器', '洗护', '杂货'],
      sliderLists: [],
      makers: {},
      headerNew: {},
      goodsNew: [],
      headerHot: {},
      goodsHot: [],
      goodsList: [],
      showMoreLabels: false,
      moreIconClicked: false,
      headerTabSize: {},
      labelsSize: {},
      topOffset: -300,
      refreshIndicatorText: '下拉刷新',
      refreshing: false,
      loading: false
    };
  },
  mounted: function mounted() {
    this.setNavTitle('Awesome Project');
    this.computeHeadTabSize();
  },
  created: function created() {
    var _this = this;

    this.get('api/home/index', function (res) {
      var result = res.data.result;
      _this.sliderLists = result['banners'];
      _this.makers = result['makers'];
      _this.headerNew = result['recommend']['head1'];
      _this.headerHot = result['recommend']['head2'];
      _this.goodsNew = result['recommend']['goods1'];
      _this.goodsHot = result['recommend']['goods2'];
    });
    this.get('api/home/pullGoods', function (res) {
      var result = res.data.result;
      _this.goodsList = result['goods'];
    });
  },

  methods: {
    moreIconClick: function moreIconClick() {
      if (!this.showMoreLabels) {
        this.showMoreLabels = true;
      }
      this.moreIconClicked = !this.moreIconClicked;
      this.showHideMoreLabels();
    },
    computeHeadTabSize: function computeHeadTabSize() {
      var _this2 = this;

      dom.getComponentRect(this.$refs.headertab, function (option) {
        if (option.result) {
          _this2.headerTabSize = option.size;
        } else {
          _this2.toast('getComponentRect of headerTag failed!');
        }
      });
    },
    showHideMoreLabels: function showHideMoreLabels() {
      this.$nextTick(function () {
        var _this3 = this;

        if (this.moreIconClicked) {
          animation.transition(this.$refs.labelsRef, {
            styles: {
              transform: 'translate(0, ' + ((this.headerTabSize ? this.headerTabSize.bottom : 168) - this.topOffset) + 'px)'
            },
            duration: 300,
            timingFunction: 'ease-in-out',
            needLayout: true,
            delay: 0
          }, function () {
            dom.getComponentRect(_this3.$refs.labelsRef, function (option) {
              if (option.result) {
                _this3.labelsSize = option.size;
              } else {
                _this3.toast('getComponentRect of labelsRef failed!');
              }
            });
          });
        } else {
          animation.transition(this.$refs.labelsRef, {
            styles: {
              transform: 'translate(0, ' + (this.labelsSize.top - this.labelsSize.height) + 'px)'
            },
            duration: 300,
            timingFunction: 'ease-in-out'
          }, function () {
            _this3.showMoreLabels = false;
          });
        }
      });
    },
    closeLabels: function closeLabels() {
      this.$refs.headertab.moreItemClick();
    },
    labelClick: function labelClick(index) {
      this.$refs.headertab.onTabItemSelect(index, true);
      this.closeLabels();
    },
    onpullingdown: function onpullingdown(event) {
      if (event.pullingDistance < 200) {
        this.refreshIndicatorText = '下拉刷新';
      } else {
        this.refreshIndicatorText = '释放刷新';
      }
    },
    onrefresh: function onrefresh() {
      var _this4 = this;

      this.refreshIndicatorText = '刷新中...';
      this.refreshing = true;
      setTimeout(function () {
        _this4.refreshing = false;
      }, 3000);
    },
    onloading: function onloading() {
      var _this5 = this;

      this.loading = true;
      setTimeout(function () {
        _this5.loading = false;
      }, 1000);
    },
    onloadmore: function onloadmore() {
      var _this6 = this;

      this.loading = true;
      setTimeout(function () {
        var _goodsList;

        (_goodsList = _this6.goodsList).push.apply(_goodsList, _toConsumableArray(_this6.goodsHot));
        _this6.loading = false;
      }, 3000);
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(15)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/components/button.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-47df4e4d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "button-view": {
    "backgroundColor": "#00B5FB",
    "borderRadius": "40",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "color": "#FFFFFF",
    "textAlign": "center",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "backgroundColor:active": "#BBBFF0",
    "borderRadius:active": "40",
    "paddingTop:active": "20",
    "paddingRight:active": "20",
    "paddingBottom:active": "20",
    "paddingLeft:active": "20",
    "color:active": "#FFFFFF",
    "textAlign:active": "center",
    "marginTop:active": "10",
    "marginRight:active": "10",
    "marginBottom:active": "10",
    "marginLeft:active": "10"
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

exports.default = {
  name: 'c-button',
  props: {
    text: String,
    required: true
  },
  methods: {
    click: function click() {
      this.$emit('click');
    }
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["button-view"],
    on: {
      "click": _vm.click
    }
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/components/homeheader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4f6614c7"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "header-wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "114",
    "paddingTop": "40",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "zIndex": 101,
    "backgroundColor": "#fafafa"
  },
  "header-icon-text": {
    "height": "80",
    "width": "96"
  },
  "icon": {
    "fontFamily": "iconfont",
    "fontSize": "32",
    "textAlign": "center",
    "color": "#666666"
  },
  "text": {
    "fontSize": "18",
    "textAlign": "center",
    "color": "#666666"
  },
  "header-search": {
    "flex": 1,
    "height": "60",
    "fontSize": "26",
    "paddingTop": "13",
    "backgroundColor": "#ededed",
    "borderRadius": "8"
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'home-header'
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header-wrapper"]
  }, [_c('div', {
    staticClass: ["header-icon-text"]
  }, [_c('text', {
    staticClass: ["icon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("扫一扫")])]), _c('text', {
    staticClass: ["header-search", "icon"]
  }, [_vm._v(" 搜索好商品，无限好物")]), _c('div', {
    staticClass: ["header-icon-text"]
  }, [_c('text', {
    staticClass: ["icon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("消息")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(27)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/components/headertab.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-66d777c6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "flexDirection": "row",
    "position": "fixed",
    "top": "114",
    "left": 0,
    "right": 0,
    "height": "54",
    "zIndex": 100,
    "backgroundColor": "#fafafa",
    "borderBottomWidth": "1",
    "borderBottomColor": "#d9d9d9"
  },
  "scroller-wrapper": {
    "width": "650"
  },
  "scroller": {
    "flex": 1,
    "flexDirection": "row",
    "height": "54"
  },
  "indicator": {
    "position": "absolute",
    "left": "15",
    "bottom": 0,
    "width": "80",
    "height": "4",
    "backgroundColor": "#b4282d"
  },
  "iconfont": {
    "fontFamily": "iconfont",
    "textAlign": "center"
  },
  "more": {
    "justifyContent": "center",
    "alignItems": "center",
    "position": "absolute",
    "top": 0,
    "right": 0,
    "height": "52",
    "width": "100",
    "backgroundColor": "#fafafa",
    "opacity": 0.9,
    "boxShadow": "-6px -4px 4px #fafafa"
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _headertabitem = __webpack_require__(23);

var _headertabitem2 = _interopRequireDefault(_headertabitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'header-tab',
  components: { HeaderTabItem: _headertabitem2.default },
  props: {
    tabItems: {
      default: []
    }
  },
  data: function data() {
    return {
      selectedIndex: 0,
      indicatorPosition: {},
      moreClicked: false,
      moreIcon: '\uE669'
    };
  },
  mounted: function mounted() {
    this.computeIndicatorPosition();
    this.tabItems[this.selectedIndex].selected = true;
  },

  methods: {
    computeIndicatorPosition: function computeIndicatorPosition() {},
    onTabItemSelect: function onTabItemSelect(index) {
      var shouldScrollScroller = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.selectedIndex === index) {
        return;
      }
      this.selectedIndex = index;
      for (var i = 0; i < this.tabItems.length; i++) {
        if (i === index) {
          this.tabItems[i].selected = true;
        } else {
          this.tabItems[i].selected = false;
        }
      }
      // eslint-disable-next-line no-undef
      var animation = weex.requireModule('animation');
      animation.transition(this.$refs.indicator, {
        styles: {
          transform: 'translate(' + this.selectedIndex * 110 + 'px, 0)'
        },
        duration: 300,
        timingFunction: 'ease'
      }, function () {});
      if (shouldScrollScroller) {
        // eslint-disable-next-line no-undef
        var dom = weex.requireModule('dom');
        dom.scrollToElement(this.$refs['item' + index][0], {});
      }
    },
    moreItemClick: function moreItemClick() {
      if (!this.moreClick) {
        this.moreClick = true;
        this.moreIcon = '\uE66A';
      } else {
        this.moreClick = false;
        this.moreIcon = '\uE669';
      }
      this.$emit('moreIconClick');
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(24)
)

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(26)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/components/headertabitem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e28499a0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center",
    "height": "54",
    "width": "110"
  },
  "text-common": {
    "fontSize": "26",
    "textAlign": "center"
  },
  "text": {
    "color": "#666666"
  },
  "text-selected": {
    "color": "#b4282d"
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

exports.default = {
  name: 'header-tab-item',
  props: {
    index: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    onTabItemSelect: function onTabItemSelect() {
      this.$emit('onTabItemSelect', this.index);
    }
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "click": _vm.onTabItemSelect
    }
  }, [_c('text', {
    staticClass: ["text-common"],
    class: [_vm.selected ? 'text-selected' : 'text']
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["scroller-wrapper"]
  }, [_c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, [_c('div', {
    ref: "indicator",
    staticClass: ["indicator"],
    style: _vm.indicatorPosition
  }), _vm._l((_vm.tabItems), function(tabItem) {
    return _c('header-tab-item', _vm._b({
      key: tabItem.index,
      ref: 'item' + tabItem.index,
      refInFor: true,
      on: {
        "onTabItemSelect": _vm.onTabItemSelect
      }
    }, 'header-tab-item', tabItem, false))
  })], 2)]), _c('div', {
    staticClass: ["more"],
    on: {
      "click": _vm.moreItemClick
    }
  }, [_c('text', {
    ref: "more",
    staticClass: ["iconfont"]
  }, [_vm._v(_vm._s(_vm.moreIcon))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(29)
)

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(31)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/components/labels.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5d8b4ecc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#ffffff",
    "paddingBottom": "18",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "label": {
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "paddingLeft": "24",
    "paddingRight": "24",
    "paddingTop": "12",
    "paddingBottom": "12",
    "marginTop": "18",
    "borderRadius": "28",
    "marginLeft": "12",
    "backgroundColor": "#f8f8f8",
    "fontSize": "24",
    "color": "#333333",
    "maxWidth": "700",
    "backgroundColor:active": "#c9c9c9"
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

exports.default = {
  name: 'labels',
  props: {
    labels: []
  },
  methods: {
    onLabelClick: function onLabelClick(index) {
      this.$emit('labelClick', index);
    },

    stopPropagation: function stopPropagation(e) {
      return true;
    }
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "stopPropagation": _vm.stopPropagation
    }
  }, _vm._l((_vm.labels), function(label, index) {
    return _c('text', {
      key: index,
      staticClass: ["label"],
      on: {
        "click": function($event) {
          _vm.onLabelClick(index)
        }
      }
    }, [_vm._v(_vm._s(label))])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flexDirection": "column",
    "paddingLeft": "15",
    "paddingRight": "15"
  },
  "img": {
    "backgroundColor": "#efefef",
    "width": "286",
    "height": "286"
  },
  "title": {
    "fontSize": "28",
    "color": "#333333",
    "width": "286",
    "marginTop": "16",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "lines": 1,
    "whiteSpace": "nowrap"
  },
  "info": {
    "fontSize": "24",
    "width": "286",
    "marginTop": "8",
    "color": "#7f7f7f",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "lines": 1,
    "whiteSpace": "nowrap"
  },
  "price": {
    "fontSize": "28",
    "width": "286",
    "marginTop": "16",
    "color": "#b4282d",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  name: 'c-good-card',
  props: {
    good: {}
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('image', {
    staticClass: ["img"],
    attrs: {
      "src": _vm.good.img
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.good.tlt))]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v(_vm._s(_vm.good.info))]), _c('text', {
    staticClass: ["price"]
  }, [_vm._v("￥" + _vm._s(_vm.good.price))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(36)
)

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(38)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/components/goodcard_s.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a56a1fc8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "width": "350",
    "height": "226",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "backgroundColor": "#efefef",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "name": {
    "position": "relative",
    "color": "#333333",
    "fontSize": "28"
  },
  "price": {
    "flexDirection": "row",
    "position": "relative",
    "marginTop": "10",
    "alignItems": "flex-end"
  },
  "price-num": {
    "fontSize": "36",
    "color": "#333333"
  },
  "price-text": {
    "color": "#333333",
    "fontSize": "24"
  },
  "state": {
    "position": "relative",
    "fontSize": "20",
    "color": "#b8a989",
    "width": "70",
    "paddingTop": "5",
    "paddingRight": "5",
    "paddingBottom": "5",
    "paddingLeft": "5",
    "marginTop": "10",
    "lineHeight": "20",
    "textAlign": "center",
    "borderWidth": "1",
    "borderColor": "#b8a989",
    "borderRadius": "4"
  },
  "img": {
    "width": "350",
    "height": "226",
    "position": "absolute",
    "top": "0",
    "left": "0"
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 's-good-card',
  props: {
    item: {}
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('image', {
    staticClass: ["img"],
    attrs: {
      "resize": "cover",
      "src": _vm.item.bg
    }
  }), _c('text', {
    staticClass: ["name"]
  }, [_vm._v(_vm._s(_vm.item.name))]), _c('div', {
    staticClass: ["price"]
  }, [_c('text', {
    staticClass: ["price-num"]
  }, [_vm._v(_vm._s(_vm.item.price))]), _c('text', {
    staticClass: ["price-text"]
  }, [_vm._v("元起")])]), (_vm.item.state) ? _c('text', {
    staticClass: ["state"]
  }, [_vm._v(_vm._s(_vm.item.state))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(40)
)

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(42)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/components/goods-recommend.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a1d0b60c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "container": {
    "flexDirection": "column"
  },
  "header": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": "750",
    "height": "260"
  },
  "header-title": {
    "textAlign": "center",
    "fontSize": "34"
  },
  "header-nav": {
    "textAlign": "center",
    "fontSize": "26",
    "width": "220",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "marginTop": "20",
    "borderRadius": "4"
  },
  "title-new": {
    "color": "#8ba0b6"
  },
  "nav-new": {
    "color": "#8ba0b6",
    "backgroundColor": "#D8E5F1"
  },
  "title-hot": {
    "color": "#b4a078"
  },
  "nav-hot": {
    "color": "#b4a078",
    "backgroundColor": "#f4e9cb"
  },
  "header-bg": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "right": 0
  },
  "goods-list": {
    "flexDirection": "row",
    "paddingBottom": "30",
    "paddingTop": "30",
    "paddingLeft": "15",
    "paddingRight": "15"
  },
  "more-box": {
    "paddingLeft": "15",
    "paddingRight": "15"
  },
  "see-more": {
    "height": "286",
    "width": "286",
    "fontSize": "28",
    "lineHeight": "40",
    "borderWidth": "6",
    "paddingTop": "120",
    "paddingBottom": "120",
    "borderColor": "#f4f4f4",
    "textAlign": "center"
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _goodcard_c = __webpack_require__(0);

var _goodcard_c2 = _interopRequireDefault(_goodcard_c);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { CGoodCard: _goodcard_c2.default },
  name: 'goods-recommend',
  props: {
    head: {},
    goods: {},
    type: 0
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('image', {
    staticClass: ["header-bg"],
    attrs: {
      "resize": "cover",
      "src": _vm.head.tltBg
    }
  }), _c('text', {
    staticClass: ["header-title"],
    class: [_vm.type === 0 ? 'title-new' : 'title-hot']
  }, [_vm._v(_vm._s(_vm.head.tlt))]), _c('text', {
    staticClass: ["header-nav", "iconfont"],
    class: [_vm.type === 0 ? 'nav-new' : 'nav-hot']
  }, [_vm._v("查看全部 ")])]), _c('scroller', {
    staticClass: ["goods-list"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, [_vm._l((_vm.goods), function(good, index) {
    return _c('c-good-card', {
      key: index,
      attrs: {
        "good": good
      }
    })
  }), _vm._m(0)], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["more-box"]
  }, [_c('text', {
    staticClass: ["see-more"]
  }, [_vm._v("查看全部")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(44)
)

/* script */
__vue_exports__ = __webpack_require__(45)

/* template */
var __vue_template__ = __webpack_require__(46)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/components/goodcard_cc.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-38e09af2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flexDirection": "column",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  },
  "img": {
    "backgroundColor": "#efefef",
    "width": "350",
    "height": "350"
  },
  "title": {
    "fontSize": "28",
    "color": "#333333",
    "width": "286",
    "marginTop": "16",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "lines": 1,
    "whiteSpace": "nowrap"
  },
  "info": {
    "fontSize": "24",
    "width": "350",
    "height": "65",
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "15",
    "paddingBottom": "15",
    "color": "#9f8a60",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "lines": 1,
    "whiteSpace": "nowrap",
    "backgroundColor": "#F1ECE2"
  },
  "price": {
    "fontSize": "28",
    "width": "286",
    "marginTop": "8",
    "color": "#b4282d",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  name: 'cc-good-card',
  props: {
    good: {}
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('image', {
    staticClass: ["img"],
    attrs: {
      "src": _vm.good.img
    }
  }), _c('text', {
    staticClass: ["info"]
  }, [_vm._v(_vm._s(_vm.good.info))]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.good.tlt))]), _c('text', {
    staticClass: ["price"]
  }, [_vm._v("￥" + _vm._s(_vm.good.price))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('home-header'), _c('header-tab', {
    ref: "headertab",
    attrs: {
      "tabItems": _vm.tabs
    },
    on: {
      "moreIconClick": _vm.moreIconClick
    }
  }), (_vm.showMoreLabels) ? _c('labels', {
    ref: "labelsRef",
    style: {
      top: _vm.topOffset + 'px'
    },
    attrs: {
      "labels": _vm.labels
    },
    on: {
      "labelClick": _vm.labelClick
    }
  }) : _vm._e(), _c('scroller', {
    staticClass: ["main-scroller"],
    attrs: {
      "offsetAccuracy": "300",
      "loadmoreoffset": "300",
      "showScrollbar": "false"
    },
    on: {
      "loadmore": _vm.onloadmore
    }
  }, [_c('refresh', {
    staticClass: ["refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh,
      "pullingdown": _vm.onpullingdown
    }
  }, [_c('text', {
    staticClass: ["refresh-indicator-text"]
  }, [_vm._v(_vm._s(_vm.refreshIndicatorText))])]), _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "true"
    }
  }, [_vm._l((_vm.sliderLists), function(image, index) {
    return _c('div', {
      key: index
    }, [_c('image', {
      staticClass: ["slider-image"],
      attrs: {
        "resize": "cover",
        "src": image.src
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2), _vm._m(0), _c('div', {
    staticClass: ["makers-block"]
  }, [_c('text', {
    staticClass: ["makers-title", "iconfont"]
  }, [_vm._v(_vm._s(_vm.makers.title) + " ")]), _c('div', {
    staticClass: ["makers-box"]
  }, _vm._l((_vm.makers.items), function(item, index) {
    return _c('s-good-card', {
      key: index,
      attrs: {
        "item": item
      }
    })
  }))]), _c('goods-recommend', {
    staticClass: ["goods-recommend-box"],
    attrs: {
      "type": 0,
      "head": _vm.headerNew,
      "goods": _vm.goodsNew
    }
  }), _c('goods-recommend', {
    staticClass: ["goods-recommend-box"],
    attrs: {
      "type": 1,
      "head": _vm.headerHot,
      "goods": _vm.goodsHot
    }
  }), _c('div', {
    staticClass: ["good-list-container"]
  }, [_c('text', {
    staticClass: ["good-list-title"]
  }, [_vm._v("猜你喜欢")]), _c('div', {
    staticClass: ["good-list-box"]
  }, _vm._l((_vm.goodsList), function(good, index) {
    return _c('cc-good-card', {
      key: index,
      attrs: {
        "good": good
      }
    })
  }))]), _c('loading', {
    staticClass: ["loading"],
    attrs: {
      "display": _vm.loading ? 'show' : 'hide'
    },
    on: {
      "loading": _vm.onloading
    }
  }, [_c('text', {
    staticClass: ["loading-indicator-text"]
  }, [_vm._v("加载中...")])])], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["slogan"]
  }, [_c('text', {
    staticClass: ["slogan-item"]
  }, [_vm._v(" 网易自营品牌")]), _c('text', {
    staticClass: ["slogan-item"]
  }, [_vm._v(" 30天无忧退货")]), _c('text', {
    staticClass: ["slogan-item"]
  }, [_vm._v(" 48小时快速退款")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(49)
)

/* script */
__vue_exports__ = __webpack_require__(50)

/* template */
var __vue_template__ = __webpack_require__(59)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-17406a54"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "content": {
    "backgroundColor": "#f5f5f5",
    "position": "absolute",
    "top": 0,
    "bottom": "100",
    "left": 0,
    "right": 0
  }
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabbar = __webpack_require__(51);

var _tabbar2 = _interopRequireDefault(_tabbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-undef
var eventModule = weex.requireModule('event'); //
//
//
//
//
//
//

exports.default = {
  components: { TabBar: _tabbar2.default },
  name: 'App',
  data: function data() {
    return {
      isBack: false,
      tabs: [{
        index: 0,
        icon: '\uE601',
        title: '首页',
        dot: '0',
        needNum: true,
        selected: true
      }, {
        index: 1,
        icon: '\uE617',
        title: '专题',
        dot: '1',
        needNum: false,
        selected: false
      }, {
        index: 2,
        icon: '\uE7F8',
        title: '分类',
        dot: '1',
        needNum: false,
        selected: false
      }, {
        index: 3,
        icon: '\uE603',
        title: '购物车',
        dot: '5',
        needNum: true,
        selected: false
      }, {
        index: 4,
        icon: '\uE602',
        title: '我',
        dot: '1',
        needNum: false,
        selected: false
      }],
      selectedIndex: 0,
      tabPaths: ['/main', '/hello', '/main', '/hello', '/main']
    };
  },
  created: function created() {
    this.initIconFont();
  },

  watch: {
    '$route': function $route(to, from) {}
  },
  methods: {
    back: function back() {
      this.isBack = true;
      var path = this.$route.path;
      if (path === '/') {
        eventModule.quitApp();
      } else {
        this.$router.back();
      }
      console.log('back' + this.$route.path);
    },
    tabItemClick: function tabItemClick(index) {
      this.selectedIndex = index;
      this.$router.push(this.tabPaths[index]);
    }
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(52)
)

/* script */
__vue_exports__ = __webpack_require__(53)

/* template */
var __vue_template__ = __webpack_require__(58)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/components/tabbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7c006d0e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "width": "750",
    "flexDirection": "column"
  },
  "tab-line": {
    "position": "fixed",
    "bottom": "100",
    "width": "750",
    "height": "1",
    "backgroundColor": "#efefef"
  },
  "tabbar": {
    "backgroundColor": "#ffffff",
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "height": "99",
    "flexWrap": "nowrap",
    "flexDirection": "row"
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabitem = __webpack_require__(54);

var _tabitem2 = _interopRequireDefault(_tabitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'tab-bar',
  components: { TabItem: _tabitem2.default },
  props: {
    tabItems: {
      default: []
    }
  },
  data: function data() {
    return {
      selectedIndex: 0
    };
  },
  created: function created() {
    this.select(this.selectedIndex);
  },
  mounted: function mounted() {
    for (var i = 0; i < this.tabItems.length; i++) {
      var tabItem = this.tabItems[i];
      var tabItemEl = this.$refs['item' + i][0];
      tabItemEl.setNum(parseInt(tabItem.dot));
    }
  },

  methods: {
    tabItemOnClick: function tabItemOnClick(params) {
      this.selectedIndex = params.index;
      this.select(this.selectedIndex);
      this.$emit('tabItemClick', params.index);
    },
    select: function select(index) {
      this.$emit('tabItemClick', index);
      for (var i = 0; i < this.tabItems.length; i++) {
        var tabItem = this.tabItems[i];
        if (i === index) {
          tabItem.selected = true;
        } else {
          tabItem.selected = false;
        }
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(55)
)

/* script */
__vue_exports__ = __webpack_require__(56)

/* template */
var __vue_template__ = __webpack_require__(57)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weiquanyun/WeexProjects/awesome-project/src/components/tabitem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2f60199d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {
  "bar-item": {
    "flex": 1
  },
  "text": {
    "color": "#666666",
    "textAlign": "center",
    "fontSize": "22",
    "paddingTop": "2"
  },
  "icon": {
    "color": "#666666",
    "textAlign": "center",
    "paddingTop": "14",
    "fontSize": "38"
  },
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "active": {
    "color": "#b4282d"
  },
  "notice": {
    "width": "30",
    "height": "30",
    "borderRadius": 100,
    "fontSize": "26",
    "lineHeight": "30",
    "textAlign": "center",
    "color": "#ffffff",
    "backgroundColor": "#ff0000"
  },
  "dot": {
    "height": "15",
    "width": "15",
    "borderRadius": 100,
    "color": "#ffffff",
    "backgroundColor": "#ff0000"
  },
  "dot-c": {
    "position": "absolute",
    "top": "5",
    "right": "40",
    "width": "30",
    "height": "30"
  }
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'tab-item',
  props: {
    index: {
      type: Number,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    needNum: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      dot: '',
      shouldShow: false
    };
  },

  methods: {
    setNum: function setNum(num) {
      if (num <= 0) {
        this.dot = '';
      } else {
        this.dot = num + '';
      }
    },
    onTabItemClick: function onTabItemClick() {
      var params = {
        index: this.index
      };
      this.$emit('tabItemOnClick', params);
    }
  },
  watch: {
    dot: function dot(num) {
      if (num) {
        var i = parseInt(num);
        if (i && i > 0) {
          this.shouldShow = true;
        } else {
          this.shouldShow = false;
        }
      } else {
        this.shouldShow = false;
      }
    }
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": _vm.onTabItemClick
    }
  }, [_c('text', {
    staticClass: ["icon", "iconfont"],
    class: [_vm.selected ? 'active' : '']
  }, [_vm._v(_vm._s(_vm.icon))]), _c('text', {
    staticClass: ["text"],
    class: [_vm.selected ? 'active' : '']
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.shouldShow) ? _c('div', {
    staticClass: ["dot-c"]
  }, [(_vm.needNum) ? _c('text', {
    staticClass: ["notice"]
  }, [_vm._v(_vm._s(_vm.dot))]) : _c('text', {
    staticClass: ["dot"]
  })]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["tab-line"]
  }), _c('div', {
    staticClass: ["tabbar"]
  }, _vm._l((_vm.tabItems), function(item) {
    return _c('tab-item', _vm._b({
      key: item.index,
      ref: 'item' + item.index,
      refInFor: true,
      on: {
        "tabItemOnClick": _vm.tabItemOnClick
      }
    }, 'tab-item', item, false))
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "androidback": _vm.back
    }
  }, [_c('router-view', {
    staticClass: ["content"]
  }), _c('tab-bar', {
    attrs: {
      "tabItems": _vm.tabs
    },
    on: {
      "tabItemClick": _vm.tabItemClick
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);