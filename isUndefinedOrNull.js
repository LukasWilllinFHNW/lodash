
/**
 * Checks if `value` is `undefined` or is `null`.
 *
 * @since 4.17.4
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined` and/or `null`, else `false`.
 * @example
 *
 * isUndefinedOrNull(void 0)
 * // => true
 *
 * isUndefinedOrNull(null)
 * // => true
 *
 * isUndefinedOrNull({})
 * // => false
 */
function isUndefinedOrNull(value) {
	return isUndefined(value) || isNull(value)
}

export default isUndefinedOrNull
