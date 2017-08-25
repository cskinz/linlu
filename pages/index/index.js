//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    cityName: '长沙',
    cityList: ['1','2','3','4'],
     imgUrls: [
      'http://m.changdipai.com/resource/changdipai/img/album/0/1.jpg',
      'http://m.changdipai.com/resource/changdipai/img/album/0/2.jpg',
      'http://m.changdipai.com/resource/changdipai/img/album/0/3.jpg'
    ],
     suggests: [
       {
         "name": "橘洲户外婚礼",
         "avatar": "http://m.changdipai.com/resource/changdipai/img/album/6/1.jpg",
         "price": 3980,
         "tags": [
           "WIFI",
           "电视",
           "投影仪",
           "投影幕布",
           "音响"
         ],
         "text": "适合大型活动，户外婚礼，音乐节，军事展，美食节等"
       },
       {
         "name": "橘子洲mrmao音乐花园",
         "avatar": "http://m.changdipai.com/resource/changdipai/img/album/9/1.jpg",
         "price": 3980,
         "tags": [
           "WIFI",
           "电视",
           "投影仪",
           "投影幕布",
           "音响"
         ],
         "text": "适合小中型活动，婚礼，聚会，牛头宴，私人派对等"
       },
       {
         "name": "橘子洲沙滩公园",
         "avatar": "http://m.changdipai.com/resource/changdipai/img/album/5/1.png",
         "price": 2000,
         "tags": [
           "WIFI",
           "投影仪",
           "投影幕布",
           "音响"
         ],
         "text": "适合大型活动，户外婚礼，音乐节，军事展，美食节等"
       },
       {
         "name": "橘子洲湘江游轮",
         "avatar": "http://m.changdipai.com/resource/changdipai/img/album/5/1.png",
         "price": 2000,
         "tags": [
           "WIFI",
           "投影仪",
           "投影幕布",
           "音响"
         ],
         "text": "适合大型活动，户外婚礼，音乐节，军事展，美食节等"
       }
     ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  //事件处理函数
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '13342515271', 
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  }
})
