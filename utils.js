 /**
 *  获取url参数
 */
function getSearchParams() {
	var param = {};
	var chunks = location.search.substr(1).split(/&/g);
	for (var i = 0; i < chunks.length; i++) {
		try {
			var items = chunks[i].split("=", 2);
			var key = decodeURIComponent(items[0]);
			var value = decodeURIComponent(items[1]);

			 if (key.length) {
			 	param[key] = value;
			 }
		}
		catch (ex) {

		}
	}
	return param;
}

/**
 * 函数绑定：用call或apply模拟原生的bind
 */
function bind(fn, context) {
	return function() {
		fn.apply(context, arguments);  // arguments是指内部函数的，不是外部bind的
	}
}