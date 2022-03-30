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
  console.log(context)
  console.log(callback)
  let html = fs.readFileSync(path.resolve(__dirname, './index.html'), {
    encoding: 'utf-8'
  })
  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: html
  }
}

