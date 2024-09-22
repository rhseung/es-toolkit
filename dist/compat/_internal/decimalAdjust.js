'use strict';

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function decimalAdjust(type, number) {
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  number = Number(number);
  if (Object.is(number, -0)) {
    number = '-0';
  }
  precision = Math.min(Number.parseInt(precision, 10), 292);
  if (precision) {
    var _number$toString$spli = number.toString().split('e'),
      _number$toString$spli2 = _slicedToArray(_number$toString$spli, 2),
      magnitude = _number$toString$spli2[0],
      _number$toString$spli3 = _number$toString$spli2[1],
      exponent = _number$toString$spli3 === void 0 ? 0 : _number$toString$spli3;
    var adjustedValue = Math[type](Number("".concat(magnitude, "e").concat(Number(exponent) + precision)));
    if (Object.is(adjustedValue, -0)) {
      adjustedValue = '-0';
    }
    var _adjustedValue$toStri = adjustedValue.toString().split('e'),
      _adjustedValue$toStri2 = _slicedToArray(_adjustedValue$toStri, 2),
      newMagnitude = _adjustedValue$toStri2[0],
      _adjustedValue$toStri3 = _adjustedValue$toStri2[1],
      newExponent = _adjustedValue$toStri3 === void 0 ? 0 : _adjustedValue$toStri3;
    return Number("".concat(newMagnitude, "e").concat(Number(newExponent) - precision));
  }
  return Math[type](Number(number));
}
exports.decimalAdjust = decimalAdjust;
