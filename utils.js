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