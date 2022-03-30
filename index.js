/*************************************************************************
*****                                                                *****
*****    使用教程/readme ：                                            *****
*****    https://cloud.tencent.com/document/product/583/32996        *****
*****                                                                *****
**************************************************************************/

const fs = require('fs')
const path = require('path')

exports.main_handler = async (event, context, callback) => {
  console.log(event)
  input_path = event['path']
  console.log(path)
  // path: '/',
  // path: '/ckplayer/css/ckplayer.css',
  // path: '/ckplayer/js/ckplayer.min.js',
  // path: '/favicon.ico',
  // path: '/ckplayer/css/images/play.png',
  // path: '/ckplayer/css/images/loading.png',
  // content-type: text/css
  // content-type: application/javascript
  var filePath = './index.html'
  var contentType = 'text/html'
  if (input_path != '/') {
    filePath = '.' + input_path
    var fileExtension = input_path.split('.').pop().toLowerCase();
    if (fileExtension == 'js') {
      contentType = 'application/javascript'
    } else {
      contentType = 'text/' +  fileExtension
    }
  }
  let html = fs.readFileSync(path.resolve(__dirname, filePath), {
    encoding: 'utf-8'
  })
  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: { 'Content-Type': contentType },
    body: html
  }
}

