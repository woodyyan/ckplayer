#### ckplayer介绍
ckplayer是一款用于在网页上播放视频的软件，本软件为开源软件，遵守开源协议：MIT

#### 功能介绍
用于在网页端播放视频，支持mp4,flv,m3u8,ts等格式文件的点播、直播、直播+回放，支持移动端，PC端。
支持监听播放器的状态以及控制播放器

#### 软件架构
本软件采用javascript编写核心代码，css文件定义播放器风格

#### 安装教程
ckplayer不存在安装过程，将下载包里的ckplayer文件夹上传到网站环境中即可使用，在需要播放视频的页面上插入下面代码即可，注意引入ckplayer.js及ckplayer.css文件的路径需要确保正确。

```
<link type="text/css" rel="stylesheet" href="ckplayer/css/ckplayer.css" />
<script type="text/javascript" src="ckplayer/js/ckplayer.js" charset="UTF-8"></script>
<div class="video" style="width: 600px;height: 400px;">播放器容器</div>
<script type="text/javascript">
    //定义一个变量：videoObject，用来做为视频初始化配置
    var videoObject = {
        container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
        video: 'http://ckplayer-video.oss-cn-shanghai.aliyuncs.com/sample-mp4/05cacb4e02f9d9e.mp4'//视频地址
    };
    var player = new ckplayer(videoObject);//初始化播放器
</script>
```


#### 使用说明
使用过程中碰到问题，请至官网查看手册：http://www.ckplayer.com/manual/

#### 参与贡献
niandeng

