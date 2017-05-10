var request = require('../../common/request.js');//引入公用方法
var util = require('../../common/util.js');//引入公用方法
var app = getApp();  
Page({
  data:{ 
    allData:{},
    id:0,
    name:"国家规范-建筑专业",
    imgUrl:"../../../images/lunbo.jpg"
  },
	onTapToItem:function(event) {
    var id = event.currentTarget.id;
    console.log(id);
	console.log(this.data.alldata);
    wx.navigateTo({
      url: 'lmitem/lmitem?id=' + id,
    })
  },
  onLoad: function(options) {
    var that = this;
		request.request('industry/id/'+options.id, 'GET', {}, function(res) {//获取规范列表接口
			console.log(res);
			that.setData({
				allData: res.data,
				name:res.info.name,
				imgUrl:res.info.img
			});
		});
	}
})  