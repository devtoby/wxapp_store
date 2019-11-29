const App = getApp(); Page({ data: { categoryList: [], articleList: [], category_id: 0, scrollHeight: null, no_more: false, isLoading: true, page: 1, }, onLoad: function (options) { let _this = this; _this.setListHeight(); _this.getIndexData() }, getIndexData() { let _this = this; App._get('article/index', {}, function (result) { _this.setData({ categoryList: result.data.categoryList }) }); _this.getArticleList() }, onSwitchTab: function (e) { let _this = this; _this.setData({ category_id: e.currentTarget.dataset.id, articleList: {}, page: 1, no_more: false, isLoading: true, }); _this.getArticleList() }, getArticleList(isPage, page) { let _this = this; App._get('article/lists', { page: page || 1, category_id: _this.data.category_id }, function (result) { let resList = result.data.list, dataList = _this.data.articleList; if (isPage == true) { _this.setData({ 'articleList.data': dataList.data.concat(resList.data), isLoading: false, }) } else { _this.setData({ articleList: resList, isLoading: false, }) } }) }, onTargetDetail(e) { wx.navigateTo({ url: './detail/index?article_id=' + e.currentTarget.dataset.id }) }, onShareAppMessage() { return { title: '文章首页', path: "/pages/article/index?" + App.getShareUrlParams() } }, bindDownLoad() { if (this.data.page >= this.data.articleList.last_page) { this.setData({ no_more: true }); return false } this.getArticleList(true, ++this.data.page) }, setListHeight() { let systemInfo = wx.getSystemInfoSync(), rpx = systemInfo.windowWidth / 750, tapHeight = Math.floor(rpx * 98), scrollHeight = systemInfo.windowHeight - tapHeight; this.setData({ scrollHeight }) }, })