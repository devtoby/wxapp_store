const App = getApp(); Component({ options: { addGlobalClass: true, }, properties: { itemIndex: String, itemStyle: Object, params: Object, dataList: Object, }, methods: { _onTargetGoods(e) { App.saveFormId(e.detail.formId); wx.navigateTo({ url: '/pages/goods/index?goods_id=' + e.detail.target.dataset.id, }) }, _onTargetGoodsIndex(e) { App.saveFormId(e.detail.formId); wx.navigateTo({ url: `/pages/category/list`, }) }, } })