
const Axios = require('axios');
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');



const router = new Router();

router.get( '/api/getTweets', async ctx => {
  const kkk ="nasa";
  let response= await Axios.get('https://api.twitter.com/1.1/search/tweets.json?q=' + kkk + '&result_type=popular',{
    headers: {
      Authorization:  'OAuth oauth_consumer_key="KKoYBOz9UjofwMahh3oA7uzDo",'+
        'oauth_token="1054247220483043328-jbgjjwxSQPhGRBecYrkN6PICcFQZe7",'+
        'oauth_signature_method="HMAC-SHA1",'+
        'oauth_timestamp="1540364765",'+
        'oauth_nonce="bnpDZz1zXQA",'+
        'oauth_version="1.0",'+
        'oauth_signature="wr19VcEB13eGDhPgvilOdz3gMTU%3D"'
    }
  });
  ctx.body = '';
  var i=1;
  var k= response.data.statuses;
  for (let x in k)
  {
    let date = new Date(k[x].created_at);
    ctx.body += i +': '+'text :'+' '+k[x].text+ '\n'+'Date :'+' '+date.toLocaleString()+ '\n\n' ;
    i++;
  }
});

app.use(router.routes());
app.listen(5000);
