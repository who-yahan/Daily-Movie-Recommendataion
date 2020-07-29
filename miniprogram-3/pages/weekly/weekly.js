Page({
  data:{
    weeklyMovieList: [
      {
        name: "教父",
        comment: "最精彩的剧本，最真实的",
        imagePath: "/images/Golf.jpg",
        isHighlyRecommended: true,
        id: 77
      },
      {
        name: "泰坦尼克号",
        comment: "失去的才是永恒的",
        imagePath: "/images/Golf.jpg",
        isHighlyRecommended: true,
        id: 99
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事，我的天呐怎么",
        imagePath: "/images/Golf.jpg",
        isHighlyRecommended: true,
        id: 88
      }
    ],
    count: 0,
    score: 58,
  },
  
  onLoad: function (options){
    this.setData({ 
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },

  f0: function (event){
      this.setData({ 
        currentIndex: this.data.weeklyMovieList.length - 1
      })
  },
  
  f1: function (event){
    var movieId = event.currentTarget.dataset.movieId;
    console.log(movieId);
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movieId
    })
  },

  onShareAppMessage: function() {
    return {
      title: "每周推荐"
    }    
  }
})