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
        }),
        app.get('/api/goodsList', function(req, res){
          res.json({
            code: 0,
            data: [
              {
                id: 1,
                name: '布娃娃',
                price: '9.99'
              },
              {
                id: 2,
                name: '猪猪侠',
                price: '19.20'
              },
              {
                id: 3,
                name: '竹二郎',
                price: '39.12'
              }
            ]
          })
        })
      }
    }
  }
}