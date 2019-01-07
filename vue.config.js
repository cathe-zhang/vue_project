module.exports = {
  configureWebpack: {
    devServer: {
      before(app){
        // mock数据
        app.get('/api/goods', function(req, res){
          // 后台返回json
          res.json({
            code: 0,
            data: [
              {
                id: 1,
                name: '布娃娃',
                price: 9.9,
              },
              {
                id: 2,
                name: '泥菩萨',
                price: 6.89,
              },
            ]
          })
        })
      }
    }
  }
}