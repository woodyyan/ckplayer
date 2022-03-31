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
  console.log(input_path)
  // path: '/',
  // path: '/ckplayer/css/ckplayer.css',
  // path: '/ckplayer/js/ckplayer.min.js',
  // path: '/favicon.ico',
  // path: '/ckplayer/css/images/play.png',
  // path: '/ckplayer/css/images/loading.png',
  // content-type: text/css
  // content-type: application/javascript
  // content-type: image/png
  // content-type: image/svg+xml
  // content-type: image/x-icon
  var filePath = './index.html'
  var contentType = 'text/html'
  if (input_path != '/') {
    filePath = './' + input_path
    var fileExtension = input_path.split('.').pop().toLowerCase();
    console.log(fileExtension)
    var ext = path.extname(input_path);
    if (fileExtension == 'js') {
      contentType = 'application/javascript'
    } else if (fileExtension == 'png' || fileExtension == 'jpg') {
      contentType = 'image/' +  fileExtension
      imagePath = path.resolve(__dirname, filePath)
      console.log('imagePath')
      console.log(imagePath)
      const content = fs.readFileSync(imagePath, {
        encoding: 'base64',
      });
      return {
        isBase64Encoded: false,
        statusCode: 200,
        headers: { 'Content-Type': contentType },
        body: 'data:image/png;base64,' + content
      }
    } else if (fileExtension == 'ico') {
      contentType = 'image/x-icon'
    } else if (fileExtension == 'svg') {
      contentType = 'image/svg+xml'
    } else if (fileExtension == 'css') {
      contentType = 'text/css'
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

