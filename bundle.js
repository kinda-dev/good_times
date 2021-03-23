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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(2);
var isBuffer = __webpack_require__(11);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(13);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(4);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(4);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(14);
var buildURL = __webpack_require__(16);
var parseHeaders = __webpack_require__(17);
var isURLSameOrigin = __webpack_require__(18);
var createError = __webpack_require__(5);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(19);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(20);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(15);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_javascripts_game__ = __webpack_require__(28);
const axios = __webpack_require__(9);


let canvas = '';

document.addEventListener('DOMContentLoaded', () => {

    
    const canvas = document.getElementById('good-times');
    const instructions = document.getElementsByClassName('instructions')[0];
    const volumeButton = document.getElementById('volume-button-wrap');
    const playGameButton = document.getElementById('start-game-button');
    const instructionsButton = document.getElementById('show-instructions-button');
    const splashText = document.getElementsByClassName('splash-text')[0];
    const hideInstructionsButton = document.getElementById('hide-instructions');
    const splashScreen = document.getElementsByClassName('splash-screen')[0];
    const gameContainer = document.getElementsByClassName('game-container')[0];
    const gameOver = document.getElementsByClassName('game-over')[0];
    const restartGameButton = document.getElementById('re-start-game-button');
    const musicOnMsg = document.getElementById('music-on-msg');
    const leaderBoardContainer = document.getElementsByClassName('leader-board-container')[0];
    const leaderBoardButton = document.getElementById('leader-board-button');
    const leaderBoard = document.getElementById('leader-board-scores');


    playGameButton.addEventListener('mouseover', () => {
        musicOnMsg.innerHTML = "Music will play when you click this";

    })

    playGameButton.addEventListener('mouseout', () => {
        musicOnMsg.innerHTML = "";

    })

    instructionsButton.addEventListener('click', () => {
        gameOver.classList.add('hidden');
        splashText.classList.add('hidden');
        instructionsButton.classList.add('hidden');
        instructions.classList.remove('hidden');
        hideInstructionsButton.classList.remove('hidden');
    })

    hideInstructionsButton.addEventListener('click', () => {
        instructions.classList.add('hidden');
        hideInstructionsButton.classList.add('hidden');
        splashText.classList.remove('hidden');
        instructionsButton.classList.remove('hidden');
    })

    playGameButton.addEventListener('click', () => {
        splashScreen.classList.add('hidden');
        volumeButton.classList.remove('hidden');
        let game = new __WEBPACK_IMPORTED_MODULE_0__public_javascripts_game__["a" /* default */](canvas);
        game.startGame();
    })



    restartGameButton.addEventListener('click', () => {
        splashScreen.classList.add('hidden');
        volumeButton.classList.remove('hidden');
        let game = new __WEBPACK_IMPORTED_MODULE_0__public_javascripts_game__["a" /* default */](canvas);
        game.startGame();
    })


    
    // firestore setup


    const firebaseConfig = {
        apiKey: "AIzaSyDdqeG61IDJustJMg4w67P2ryGb2nPJbTs",
        authDomain: "good-times-mini-game.firebaseapp.com",
        projectId: "good-times-mini-game",
        storageBucket: "good-times-mini-game.appspot.com",
        messagingSenderId: "584091630854",
        appId: "1:584091630854:web:76393596b9351fa3daf287",
        measurementId: "G-Q6PK57SF02"
      };
    
    const leaderBoardPlayers = document.getElementsByClassName('leader-board-players')[0];
    
      // Initialize Firebase
    //   firebase.initializeApp(firebaseConfig);
    //   firebase.analytics();
      // maybe lines above are to comment out
    
    const app = firebase.initializeApp(firebaseConfig);
    
    const db = firebase.firestore(app);
        firebase.firestore().settings({
            cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
        });

        const playername = document.getElementById("player-name");
        const score = document.getElementById('your-score')
        
        leaderBoardButton.addEventListener('click', () => {
            gameOver.classList.add('hidden');
            leaderBoardContainer.classList.remove('hidden');
    
            // firebase logic below
    
            if( playername.value != ''){
                db.collection('players').add({
                    name: playername.value,
                    score: parseInt(score.innerHTML)
                    })
            }
            getLeaderBoard()    
        })
    
    
    //    const name = document.querySelector("#name");
    //    const leaderBoard = document.querySelector("#leaderBoard");
    //    const score = document.querySelector("#demo2");
    
    function renderScore(doc){
        
        let ul = document.createElement('ul')
        ul.setAttribute('data-id', doc.id);
        ul.className = "players-data-container"
        
        let name = document.createElement('li')
        name.className = "firebase-player-data"
        name.innerHTML = doc.data().name;
        
        let score = document.createElement('li');
        score.className = "firebase-player-data";
        score.innerHTML = doc.data().score + " points";
        
        leaderBoard.appendChild(ul);
        ul.appendChild(name);
        ul.appendChild(score);

    }
    
    
    
    // .onSnapshot({
        //     // Listen for document metadata changes
        //     includeMetadataChanges: true
        // });
        function getLeaderBoard(){
            
            
            let leaderBoard = db.collection('players').orderBy('score', "desc").limit(5)
            leaderBoard.get().then((doc) => {
                if (doc) {
                    console.log(doc)
                    doc.forEach(player => {
                        console.log(player.data().name)
                        renderScore(player)
                    });
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
            
            
        }
            // saving data




    // before game start
    // no music button
    // navbar
    // splash
    // instructions button
    // play game button

    // when looking at instructions
    // hide splah-text
    // display hide instructions button
    // display play game button

    // when click game start
    // hide play game button
    // hide splash
    // hide instructions
    // reset canvas
    // show music button
    // show canvas
    // create game instance

    // when game stops
    // hide canvas
    // reset canvas
    // show game over message
    // show scoreboard
    // show start a new game button

    // when click start new game
    // show splash

})

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(2);
var Axios = __webpack_require__(12);
var defaults = __webpack_require__(1);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(7);
axios.CancelToken = __webpack_require__(26);
axios.isCancel = __webpack_require__(6);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(27);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(1);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(21);
var dispatchRequest = __webpack_require__(22);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(5);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(23);
var isCancel = __webpack_require__(6);
var defaults = __webpack_require__(1);
var isAbsoluteURL = __webpack_require__(24);
var combineURLs = __webpack_require__(25);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(7);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__background__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dude__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obstacle__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reward__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wave__ = __webpack_require__(33);






class GoodTimes {
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.dimensions = { width: canvas.width, height: canvas.height};
        this.loc = canvas;
        this.id = '';
        this.score = 0;
        this.isPitted = false;
        this.gameOver = false;

    }

    startGame() {
        this.score = 0;
        this.gameOver = false;
        const element = document.getElementById('play-riff').muted= false;

        this.background = new __WEBPACK_IMPORTED_MODULE_0__background__["a" /* default */](this.dimensions);
        // create instance of dude after the backround so it doesn't get covered
        this.dude = new __WEBPACK_IMPORTED_MODULE_1__dude__["a" /* default */](this.dimensions);

        this.obstacles = new __WEBPACK_IMPORTED_MODULE_2__obstacle__["a" /* default */](this.dimensions);

        this.rewards = new __WEBPACK_IMPORTED_MODULE_3__reward__["a" /* default */](this.dimensions);


        this.wave = new __WEBPACK_IMPORTED_MODULE_4__wave__["a" /* default */](this.dimensions);

        this.registerKeyEvents();
        this.collision();

        // triggers animate condinoals to trigger will go here
        this.animate();
    }

    registerKeyEvents() {
        this.boundKeyDown = this.handlePressedKeys.bind(this);
        this.boundDudeStopHandler = this.stopDudeTrigger.bind(this);
        document.addEventListener("keydown", this.boundKeyDown);
        document.addEventListener("keyup", this.boundDudeStopHandler);

    }

    removeRegisterKeyEvents() {
        this.boundKeyDown = this.handlePressedKeys.bind(this);
        this.boundDudeStopHandler = this.stopDudeTrigger.bind(this);
        document.removeEventListener("keydown", this.boundKeyDown);
        document.removeEventListener("keyup", this.boundDudeStopHandler);
    }
    
    handlePressedKeys(e = '') {
        
        this.dude.moveDude(e);
    }

    stopDudeTrigger(e = '') {
        this.dude.moveDude(e);
    }

    collision() {
        if ( this.obstacles.collidesWith(this.dude.bounds()) ) {
            this.gameOver = true;
            this.gameIsOver();
        }
        // add logic for adding scores if pickup bonuses
        if ( this.rewards.collidesWith(this.dude.bounds()) ) {
            this.score += 10;

            // maybe we can draw something
        }
        
    }

    handleScore() {
        if (this.dude.bounds().right < 180) {
            this.score += 0.08;
            this.isPitted = true;

        } else {
        this.score += 0.04;
        this.isPitted = false;
        }

    }
    gameIsOver() {
        document.getElementsByClassName('game-container')[0].classList.add('hidden');
        document.getElementsByClassName('game-over')[0].classList.remove('hidden');
        document.getElementById('your-score').innerHTML=Math.trunc(this.score)
    }

     // first I am going to crate an animate method
    animate() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
        // const riff = document.getElementById('play-riff').autoplay="true";
        if ( this.gameOver ) {
            cancelAnimationFrame(this.id);
        } else {
        document.getElementsByClassName('leader-board-container')[0].classList.add('hidden');
        document.getElementsByClassName('game-over')[0].classList.add('hidden');
        document.getElementsByClassName('game-container')[0].classList.remove('hidden');

        this.handleScore();
        this.collision()

        // drasw the background this is to comment in
        this.background.animate(this.ctx);

        // draw the dude after the backround so it doesn't get covered
        this.dude.animate(this.ctx);
        
        this.obstacles.animate(this.ctx);

        this.rewards.animate(this.ctx);
        // below should be the last to animate
        this.wave.animate(this.ctx);

        if (this.isPitted) {
            this.drawPitted();
        }

        this.drawScore()
        // }
            // cancelAnimationFrame(this.id)
        
        // debugger
            // if (this.isPlaying) {
               this.id = requestAnimationFrame(this.animate.bind(this));
            } 
        
    }

    drawScore() {
        //loc will be the location 
        const loc = {x: this.dimensions.width / 30, y: this.dimensions.height / 10}
        this.ctx.font = "bold 20pt 'DotGothic16', sans-serif";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("SCORE " + Math.trunc(this.score), loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        this.ctx.strokeText("SCORE " + Math.trunc(this.score), loc.x, loc.y);
    }

    drawPitted() {
        const loc = {x: this.dimensions.width / 4.5, y: this.dimensions.height / 6}
        this.ctx.font = "bold 30pt 'DotGothic16', sans-serif";
        this.ctx.fillStyle = "yellow";
        this.ctx.fillText("Gnarly!! Double Points!!", loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        this.ctx.strokeText("Gnarly!! Double Points!!", loc.x, loc.y);

    }


    drawGameOver() {

        const loc = {x: this.dimensions.width / 7, y: this.dimensions.height / 4}
        this.ctx.font = "bold 20pt 'DotGothic16', sans-serif";
        this.ctx.fillStyle = "red";
        this.ctx.fillText("The Game is Over your score is: " + Math.trunc(this.score), loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        this.ctx.strokeText("The Game is Over your score is: " + Math.trunc(this.score), loc.x, loc.y);
        
        this.ctx.fillText("To play again press 'R'", loc.x, loc.y + 30);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        this.ctx.strokeText("To play again press 'R'", loc.x, loc.y + 30);

        this.ctx.fillStyle = "blue";
        this.ctx.fillText("Hopefully you enjoyed playing this game", loc.x, loc.y + 90);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        this.ctx.strokeText("Hopefully you enjoyed playing this game", loc.x, loc.y + 90);

        this.ctx.fillText("as much as I did making it.", loc.x, loc.y + 120);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        this.ctx.strokeText("as much as I did making it.", loc.x, loc.y + 120);

        this.ctx.fillText("Thank you for playing. With pleasure, Fabio.", loc.x, loc.y + 150);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        this.ctx.strokeText("Thank you for playing. With pleasure, Fabio.", loc.x, loc.y + 150);
    }

    

    
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GoodTimes;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSTANTS = {
  // speed should be 

  BACKGROUND_SPEED: 1,


};

class Background {
    constructor(dimensions) {
      this.dimensions = dimensions;
      this.backgroundPosX1 = 0,
      this.backgroundPosX2 = this.dimensions.width,
      this.backgroundPosY = 0,
      this.backgroundHeight = this.dimensions.height,
      this.backgroundWidth = this.dimensions.width

    }
  
    background() {
      const background = new Image();
      // background.src = 'https://good-times-surfing-game.s3-us-west-1.amazonaws.com/background.png';
      background.src = 'https://good-times-surfing-game.s3-us-west-1.amazonaws.com/background.png';

      return background;
    }
    drawBackground(ctx) {
      // debugger
        // const background = new Image();
        // background.src = 'https://good-times-surfing-game.s3-us-west-1.amazonaws.com/background.png';
        // ctx.drawImage(background, 0, 0, this.dimensions.width, this.dimensions.height);

        if ( this.backgroundPosX1 <= -this.backgroundWidth + CONSTANTS.BACKGROUND_SPEED ) this.backgroundPosX1 = this.backgroundWidth;
        else  this.backgroundPosX1 -= CONSTANTS.BACKGROUND_SPEED;
        if ( this.backgroundPosX2 <= -this.backgroundWidth + CONSTANTS.BACKGROUND_SPEED ) this.backgroundPosX2 = this.backgroundWidth;
        else  this.backgroundPosX2 -= CONSTANTS.BACKGROUND_SPEED;
        // this.backgroundPosX2 -= CONSTANTS.BACKGROUND_SPEED;

        ctx.drawImage(this.background(), this.backgroundPosX1, this.backgroundPosY, this.backgroundWidth, this.backgroundHeight);
        ctx.drawImage(this.background(), this.backgroundPosX2, this.backgroundPosY, this.backgroundWidth, this.backgroundHeight);


          
        
        // draws a rectangle
      // ctx.fillStyle = "skyblue";
      // ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    //create animate mthod to be invoked in other classes
    animate(ctx) {
        this.drawBackground(ctx);
    }
  }
/* harmony export (immutable) */ __webpack_exports__["a"] = Background;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSTANTS = {
    DUDE_WIDTH: 90,
    DUDE_HEIGHT: 100,
    // how many frames I move per animation
    // 12 was ideal using .keyCode ad event listener
    SPEED: 10,
    // pullback value to test
    WAVE_PULLBACK: 1

};

const KEYS = [];

class Dude {
    constructor(dimensions) {
      this.dimensions = dimensions;
      // dude position on x axis
      this.x = 200,
      // dude position on y axis
      this.y = 200,
      this.spriteX = 0,
      this.spriteY = 35, 
      this.spriteWidth = 90, 
      this.spriteHeight = 70
    }
    
    drawDude(ctx) {
        const dude = new Image();
        dude.src = 'https://good-times-surfing-game.s3-us-west-1.amazonaws.com/surfer_sprite.png'
        // ctx.clearRect(this.x - CONSTANTS.DUDE_WIDTH, this.y - CONSTANTS.DUDE_HEIGHT, CONSTANTS.DUDE_WIDTH, CONSTANTS.DUDE_HEIGHT);
        ctx.drawImage(dude, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, this.x, this.y, CONSTANTS.DUDE_WIDTH, CONSTANTS.DUDE_HEIGHT);
        
        // ctx.fillStyle = "yellow";
        // ctx.fillRect(this.x, this.y, CONSTANTS.DUDE_WIDTH, CONSTANTS.DUDE_HEIGHT);
    }

    animate(ctx) {

        this.drawDude(ctx);
        this.moveDude();
        // ctx.clearRect(this.x -=1, this.y -=1, CONSTANTS.DUDE_WIDTH, CONSTANTS.DUDE_HEIGHT);

    }

    moveDude(e = '') {
        if ( e.type === 'keydown') {
            KEYS[e.keyCode] = true;
        }
        
        if ( e.type === 'keyup') {
            delete KEYS[e.keyCode];
            this.spriteX = 0,
            this.spriteY = 35, 
            this.spriteWidth = 90, 
            this.spriteHeight = 70
        }
        // console.log(e.type)

        // debugger
            // move char in negative direction along y axes
            // move dude up
    // player.y > 100 is to limit the movement to 100 pixels max from the top
    if (KEYS[38] && this.y > 100) {
        this.y -= CONSTANTS.SPEED;
        this.spriteX = 192;
        this.spriteY = 20; 
        this.spriteWidth = 57; 
        this.spriteHeight = 85;
    }
    // // // move player to the left on the orizontal axis
    // // // implement here logic for out of screen / game over
    if (KEYS[37]  && this.x > 0) {
        this.x -= CONSTANTS.SPEED;
        this.spriteX = 104;
        this.spriteY = 24; 
        this.spriteWidth = 79; 
        this.spriteHeight = 81;
    }
    // //     // move dude down
    if (KEYS[40] && this.y < 370) {
        this.y += CONSTANTS.SPEED;
        this.spriteX = 257;
        this.spriteY = 14; 
        this.spriteWidth = 58; 
        this.spriteHeight = 91;
    }
    // //     // move dude right
    if (KEYS[39] && this.x < 700) {
        this.x += CONSTANTS.SPEED;
        this.spriteX = 329;
        this.spriteY = 23; 
        this.spriteWidth = 80; 
        this.spriteHeight = 82;
    }

    // line below pulls the dude toward the back of the wave
    // tested and working later
    // this.x -= CONSTANTS.WAVE_PULLBACK;
    }

    bounds() {
        return {
            left: this.x,
            right: this.x + CONSTANTS.DUDE_WIDTH,
            top: this.y,
            bottom: this.y +CONSTANTS.DUDE_HEIGHT
        }
    }


  }
/* harmony export (immutable) */ __webpack_exports__["a"] = Dude;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSTANTS = {
    OBSTACLE_WIDTH: 70,
    OBSTACLE_HEIGHT: 35,
    // how many frames I move per animation
    // variable speed assigned randomly
    // SPEED: Math.random() * 5 + 1,
    // pullback value to test
    // WAVE_PULLBACK: 1

};

const SPRITES = {
    0: {
        SPRITE_X: 4,
        SPRITE_Y: 5, 
        SPRITE_WIDTH: 30, 
        SPRITE_HEIGHT: 23
    },
    1: {
        SPRITE_X: 43,
        SPRITE_Y: 10, 
        SPRITE_WIDTH: 16, 
        SPRITE_HEIGHT: 14
    },
    2: {
        SPRITE_X: 4,
        SPRITE_Y: 37, 
        SPRITE_WIDTH: 32, 
        SPRITE_HEIGHT: 23
    },
}

class Obstacle {
    constructor(dimensions) {
      this.dimensions = dimensions;
      // obstacle position on x axis
      this.x = 900,

      // I will put like 3 obstacles in an array to cycle them on the screen
      this.obstacles = [
          this.obstacle(this.x),
          this.obstacle(this.x + 100),
          this.obstacle(this.x + 200),
      ]

    }

    obstacle(obstacleStartPoint) {

        const obstacleSpecs = {
            // how many frames I move per animation
            // variable speed assigned randomly
            obstacleSpeed: Math.random() * 5 + 1,
            // obstacle position on y axis
            // randomly calculated as follows Math.random() * (max - min) + min

            // aka top
            obstacleYposition: Math.random() * (450 - 150) + 150,
            // aka left
            obstacleStartPoint: obstacleStartPoint,
            // aka right
            // obstacleRight: obstacleStartPoint + CONSTANTS.OBSTACLE_WIDTH,
            // aka bottom
            // obstacleBottom: obstacleYposition + CONSTANTS.OBSTACLE_HEIGHT
        }

        return obstacleSpecs;

    }
    
    drawObstacle(ctx) {
        const foe = new Image();
        foe.src = 'https://good-times-surfing-game.s3-us-west-1.amazonaws.com/enemies.png'

        this.obstacles.forEach((obst, idx )=> {
            ctx.drawImage(foe, SPRITES[idx].SPRITE_X, SPRITES[idx].SPRITE_Y, 
                SPRITES[idx].SPRITE_WIDTH, SPRITES[idx].SPRITE_HEIGHT, obst.obstacleStartPoint, obst.obstacleYposition, CONSTANTS.OBSTACLE_WIDTH, CONSTANTS.OBSTACLE_HEIGHT);

            // const SPRITES = {
            //     0: {
            //         SPRITE_X: 0,
            //         SPRITE_Y: 35, 
            //         SPRITE_WIDTH: 90, 
            //         SPRITE_HEIGHT: 70

            // ctx.fillStyle = "orange";


            // ctx.fillRect(
            //     obst.obstacleStartPoint, obst.obstacleYposition, CONSTANTS.OBSTACLE_WIDTH, CONSTANTS.OBSTACLE_HEIGHT);
        });
    }

    // }

    animate(ctx) {

        this.drawObstacle(ctx);
        this.moveObstacle();

    }

    moveObstacle() {

    // // // move obstacles to the left on the orizontal axis
        this.obstacles.forEach(obst => {
            if ( obst.obstacleStartPoint + CONSTANTS.OBSTACLE_WIDTH  < 0) {
                obst.obstacleStartPoint = this.x + (Math.random() * (200 - 1) + 1);
                obst.obstacleSpeed = Math.random() * 5 + 1;
                obst.obstacleYposition = Math.random() * (450 - 150) + 150;

            }
            obst.obstacleStartPoint -= obst.obstacleSpeed;

    });
    }

    collidesWith(dude) {
        const _overlap = (obj1, obj2) => {
            if ((obj1.obstacleStartPoint > obj2.right || 
                obj1.obstacleStartPoint + CONSTANTS.OBSTACLE_WIDTH < obj2.left)) {
                    return false;
                }
            if ((obj1.obstacleYposition > obj2.bottom || 
                obj1.obstacleYposition + CONSTANTS.OBSTACLE_HEIGHT < obj2.top)) {
                    return false;
                }
            return true
        }







        let collision = false;
        this.obstacles.forEach(obst => {
            //check that they don't overlap in the x axis or the y axis
            if ( _overlap(obst, dude) ) { collision = true; } 
            
            // collision = true;
        });
        return collision;

        
    }

  }
/* harmony export (immutable) */ __webpack_exports__["a"] = Obstacle;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSTANTS = {
    REWARD_WIDTH: 40,
    REWARD_HEIGHT: 40,

};

class Reward {
    constructor(dimensions) {
      this.dimensions = dimensions;
      // obstacle position on x axis
      this.x = 900,

      // I will put like 3 obstacles in an array to cycle them on the screen
      this.rewards = [
          this.reward(this.x),
          this.reward(this.x + 100),
        //   this.reward(this.x + 200),
      ]

    }

    reward(rewardStartPoint) {

        const rewardSpecs = {
            rewardSpeed: Math.random() * 5 + 1,
            rewardYposition: Math.random() * (450 - 150) + 150,
            rewardStartPoint: rewardStartPoint,
        }

        return rewardSpecs;

    }
    
    drawreward(ctx) {
        const shaka = new Image();
        shaka.src = 'https://good-times-surfing-game.s3-us-west-1.amazonaws.com/shaka.png'
        this.rewards.forEach(rew => {

            ctx.drawImage(shaka, 0, 0, 356, 293, rew.rewardStartPoint, rew.rewardYposition, CONSTANTS.REWARD_WIDTH, CONSTANTS.REWARD_HEIGHT);

        //     ctx.fillStyle = "red";


        //     ctx.fillRect(
        //         rew.rewardStartPoint, rew.rewardYposition, CONSTANTS.REWARD_WIDTH, CONSTANTS.REWARD_HEIGHT);
        });
    }

    

    animate(ctx) {

        this.drawreward(ctx);
        this.moveReward();

    }

    moveReward() {

    // // // move rewacles to the left on the orizontal axis
        this.rewards.forEach(rew => {
            if ( rew.rewardStartPoint + CONSTANTS.REWARD_WIDTH  < 0) {
                rew.rewardStartPoint = this.x + (Math.random() * (200 - 1) + 1);
                rew.rewardSpeed = Math.random() * 5 + 1;
                rew.rewardYposition = Math.random() * (450 - 150) + 150;

            }
            rew.rewardStartPoint -= rew.rewardSpeed;

    });
    }

    collidesWith(dude) {
        const _overlap = (obj1, obj2) => {
            if ((obj1.rewardStartPoint > obj2.right || 
                obj1.rewardStartPoint + CONSTANTS.REWARD_WIDTH < obj2.left)) {
                    return false;
                }
            if ((obj1.rewardYposition > obj2.bottom || 
                obj1.rewardYposition + CONSTANTS.REWARD_HEIGHT < obj2.top)) {
                    return false;
                }
            return true
        }







        let collision = false;
        this.rewards.forEach(rew => {
            //check that they don't overlap in the x axis or the y axis
            if ( _overlap(rew, dude) ) { 
                rew.rewardStartPoint = this.x + (Math.random() * (200 - 1) + 1);
                rew.rewardSpeed = Math.random() * 5 + 1;
                rew.rewardYposition = Math.random() * (450 - 150) + 150;
                collision = true; 
            } 
        });
        return collision;

        
    }

  }
/* harmony export (immutable) */ __webpack_exports__["a"] = Reward;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// const CONSTANTS = {
//     // speed should be 
  
//     WAVE_SPEED: 4,
  
  
//   };

const SPRITES = {
  2: {
      SPRITE_X: 0,
      SPRITE_Y: 0, 
      SPRITE_WIDTH: 348, 
      SPRITE_HEIGHT: 489
  },
  1: {
      SPRITE_X: 351,
      SPRITE_Y: 0, 
      SPRITE_WIDTH: 346, 
      SPRITE_HEIGHT: 489
  },
  0: {
      SPRITE_X: 699,
      SPRITE_Y: 0, 
      SPRITE_WIDTH: 352, 
      SPRITE_HEIGHT: 489
  },
}
  
  class WaveCrest {
      constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = 0,
        this.y = 0,
        // this.backgroundHeight = this.dimensions.height,
        // this.backgroundWidth = this.dimensions.width

        this.waves = [
          this.wave(this.x),
          this.wave(this.x),
          this.wave(this.x)
          
        ],

        this.idx = 0
  
      }

      wave(waveStartPoint) {

        const waveSpecs = {
            waveStartPoint: waveStartPoint,
            waveSpeed: Math.random() * (8 - 12) + 5,
        }

        return waveSpecs;

    }
    


      drawWave(ctx) {
        const waveCrest = new Image();
        waveCrest.src = 'https://good-times-surfing-game.s3-us-west-1.amazonaws.com/wave.png';
          
          this.waves.forEach((wave, idx)=> {
            ctx.drawImage(waveCrest, SPRITES[idx].SPRITE_X, SPRITES[idx].SPRITE_Y, 
                SPRITES[idx].SPRITE_WIDTH, SPRITES[idx].SPRITE_HEIGHT, 
                wave.waveStartPoint, 95, 
                SPRITES[idx].SPRITE_WIDTH, SPRITES[idx].SPRITE_HEIGHT);
          // ctx.fillStyle = "orange";
          // ctx.fillRect(
          //     obst.obstacleStartPoint, obst.obstacleYposition, CONSTANTS.OBSTACLE_WIDTH, CONSTANTS.OBSTACLE_HEIGHT);
          });
          // if (this.idx === 2) {this.idx = 0};
          // const length = this.waves.length;
          // ctx.drawImage(waveCrest, SPRITES[this.idx].SPRITE_X, SPRITES[this.idx].SPRITE_Y, 
          //   SPRITES[this.idx].SPRITE_WIDTH, SPRITES[this.idx].SPRITE_HEIGHT, 
          //   this.waves[this.idx].waveStartPoint, 95, 
          //   SPRITES[this.idx].SPRITE_WIDTH, SPRITES[this.idx].SPRITE_HEIGHT);
          // this.idx ++

      }

      moveWave() {

        // // // move obstacles to the left on the orizontal axis
            this.waves.forEach(wave => {
                if ( wave.waveStartPoint < -40) {
                    wave.waveStartPoint = this.x + (Math.random() * (0 - 4) - 12);
                    wave.waveSpeed = 0.1;
    
                }
                wave.waveStartPoint -= wave.waveSpeed;
    
        });
        }
  
      //create animate mthod to be invoked in other classes
      animate(ctx) {
        // setInterval(this.drawWave(ctx), 2000);
          this.drawWave(ctx);
          this.moveWave();
      }
    }
/* harmony export (immutable) */ __webpack_exports__["a"] = WaveCrest;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map