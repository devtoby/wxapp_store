const wxParse = require("../../../wxParse/wxParse.js"); Component({ options: { addGlobalClass: true, }, properties: { itemIndex: String, itemStyle: Object, params: Object }, ready: function () { let content = this.data.params.content; if (content.length > 0) { wxParse.wxParse('contentT', 'html', content, this, 0) } }, })