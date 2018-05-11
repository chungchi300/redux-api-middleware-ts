"use strict";
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(d, b) {
          d.__proto__ = b;
        }) ||
      function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
var InvalidRSAA = (function(_super) {
  __extends(InvalidRSAA, _super);
  function InvalidRSAA(validationErrors) {
    var _this = _super.call(this) || this;
    _this.name = "InvalidRSAA";
    _this.message = "Invalid RSAA";
    _this.validationErrors = validationErrors;
    return _this;
  }
  return InvalidRSAA;
})(Error);
exports.InvalidRSAA = InvalidRSAA;
var InternalError = (function(_super) {
  __extends(InternalError, _super);
  function InternalError(message) {
    var _this = _super.call(this) || this;
    _this.name = "InternalError";
    _this.message = message;
    return _this;
  }
  return InternalError;
})(Error);
exports.InternalError = InternalError;
var RequestError = (function(_super) {
  __extends(RequestError, _super);
  function RequestError(message) {
    var _this = _super.call(this) || this;
    _this.name = "RequestError";
    _this.message = message;
    return _this;
  }
  return RequestError;
})(Error);
exports.RequestError = RequestError;
var ApiError = (function(_super) {
  __extends(ApiError, _super);
  function ApiError(status, statusText, response) {
    var _this = _super.call(this) || this;
    _this.name = "ApiError";
    _this.status = status;
    _this.statusText = statusText;
    _this.response = response;
    _this.message = status + " - " + statusText;
    return _this;
  }
  return ApiError;
})(Error);
exports.ApiError = ApiError;
