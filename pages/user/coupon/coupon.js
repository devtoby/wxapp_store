const App = getApp(); Page({ data: { dataType: 'not_use', swiperHeight: 0, list: [], notcont: false }, onLoad: function (options) { this.setSwiperHeight() }, onShow: function () { this.getCouponList() }, getCouponList: function () { let _this = this; App._get('user.coupon/lists', { data_type: _this.data.dataType }, function (result) { _this.setData({ list: result.data.list, notcont: !result.data.list.length }) }) }, setSwiperHeight: function () { let systemInfo = wx.getSystemInfoSync(), rpx = systemInfo.windowWidth / 750, tapHeight = Math.floor(rpx * 80) + 1, swiperHeight = systemInfo.windowHeight - tapHeight; this.setData({ swiperHeight }) }, swichNav: function (e) { let _this = this; _this.setData({ list: {}, dataType: e.target.dataset.current }, function () { _this.getCouponList() }) }, });