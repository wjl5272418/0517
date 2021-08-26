const router = require('koa-router')()
const axios=require('axios')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/list', async (ctx, next) => {
  var response = await axios.get('http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f');
  var ids = response.data.data.map((v,i) => {
    return v;
  });
  console.log(ids)
  ctx.body={
    errcode:0,
    errmsg:'ok',
    ids
}
})

router.get('/list2', async (ctx, next) => {
  var response = await axios.get('http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f');
  var ids = response.data.data.map((v,i) => {
    return v;
  });
  console.log(ids)
  ctx.body={
    ids
}
})

router.get('/list3', async (ctx, next) => {
  var response = await axios.get('http://vueshop.glbuys.com/api/home/index/recom?token=1ec949a15fb709370f');
  var ids = response.data.data.map((v,i) => {
    return v;
  });
  console.log(ids)
  ctx.body={
    ids
}
})

router.get('/list4', async (ctx, next) => {
  var response = await axios.get('http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f');
  var idss = response.data.data.map((v,i) => {
    return v;
  });

  ctx.body={
    idss
}
})


// router.post('/list4', async (ctx, next) => {
//   var response = await axios.get('http://localhost/api/vcode/chkcode?token=1ec949a15fb709370f');
//   var ids = response.data.map((v,i) => {
//     return v;
//   });
//   console.log(ids)
//   ctx.body={
//     errcode:0,
//     errmsg:'ok',
//     ids
//   }
// })




module.exports = router
