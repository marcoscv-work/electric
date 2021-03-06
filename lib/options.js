'use strict';

var util = require('./util');

var normalizeOptions = function(options) {
	options = options || {};

	options.codeMirrorLanguages = options.codeMirrorLanguages || ['xml', 'css', 'javascript'];
	options.codeMirrorTheme = options.codeMirrorTheme || 'dracula';
	options.markdownOptions = options.markdownOptions;
	options.pathDest = options.pathDest || 'dist';
	options.pathSrc = options.pathSrc || 'src';
	options.plugins = options.plugins || ['electric-components'];
	options.taskPrefix = options.taskPrefix || '';

	options.runSequence = require('run-sequence').use(options.gulp);
	options.util = util;

	return options;
};

module.exports = normalizeOptions;
