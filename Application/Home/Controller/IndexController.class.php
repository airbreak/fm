<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    /* -- 添加自定义function -- */
    public function index(){
        $this->display();
    }
    public function indexa(){
        $this->display();
    }

    /*右侧滚动banner*/
    public function getBannerInfo(){
        $str=$_SERVER['HTTP_HOST']. '/fm/Application/Home/Content/img/slide/';
        $aa1=array(
            "Id"=>"img0",
            "imgName"=>$str."20815.jpg",
            "contentTitle"=>"想把我唱给你听MHz",
            "contentMain"=>"没有什么，就是想起你的小心情，不值得提起也不值得歌颂。",
            "hotSong_1"=> "天黑黑",
            "hotSong_2"=> "你知道我在等你们分手吗",
            "hotSong_3"=> "说爱我",
            "songCounts"=>279
        );
        $aa2=array(
            "Id"=> "img1",
            "imgName"=> $str."23105.jpg",
            "contentTitle"=> "中国好声音MHz",
            "contentMain"=> "不值得提起也不值得歌颂。",
            "hotSong_1"=> "北京北京",
            "hotSong_2"=> "白天不懂夜的黑",
            "hotSong_3"=> "爱要坦荡荡",
            "songCounts"=> 211
        );
        $aa3=array(
            "Id"=> "img2",
            "imgName"=> $str."16288.jpg",
            "contentTitle"=> "MayDay五月天MHz",
            "contentMain"=> "如果看到彩虹你也想去追，那说明我们是同一类人。",
            "hotSong_1"=> "后青春期的诗",
            "hotSong_2"=> "伤心的人别听慢歌",
            "hotSong_3"=> "你不是真正的快乐",
            "songCounts"=> 271
        );
        $aa4=array(
            "Id"=> "img3",
            "imgName"=> $str."17981.jpg",
            "contentTitle"=> "香港金曲MHz",
            "contentMain"=> "beyond,谭校长,陈百强,李克勤...",
            "hotSong_1"=> "海阔天空",
            "hotSong_2"=> "讲不出再见",
            "hotSong_3"=> "一生何求",
            "songCounts"=> 379
        );
        $aa5=array(
            "Id"=> "img4",
            "imgName"=> $str."20801.jpg",
            "contentTitle"=> "台湾MHz",
            "contentMain"=> "是想起你的小心情，心中的白鸽。",
            "hotSong_1"=> "小情歌",
            "hotSong_2"=> "心墙",
            "hotSong_3"=> "冬季到台北来看雨",
            "songCounts"=> 278
        );
        $aa = array($aa1,$aa2,$aa3,$aa4,$aa5);
        $aaa=array(
            data=>$aa,
            status=>'success'
        );
        $this->ajaxReturn($aaa,'JSON');
    }

    /*得到音乐类别*/
    public function getMusicTypeInfo(){

        $aa = array(
                "摇滚",
                "古典",
                "爵士",
                "民谣/乡村",
                "流行",
                "电子",
                "原声配乐",
                "轻音乐",
                "说唱",
                "雷鬼",
                "拉丁",
                "世界音乐",
                "布鲁斯",
                "放克/灵歌/R&B"
        );
        $aaa=array(
            data=>$aa,
            status=>'success'
        );
        $this->ajaxReturn($aaa,'JSON');
    }

    /*得到热门兆赫*/
    public function getHotMz(){
        $str=$_SERVER['HTTP_HOST']. '/fm/Application/Home/Content/img/slide/';
        $aa1=array(
            "musicTypeId"=>"huayu",
            "imgName"=>$str."huayu.png",
            "musicTypeName"=> "华语Mhz",
            "contentMain"=>"这就是最好的华语歌曲！",
            "hotSong_1"=>"假如",
            "hotSong_2"=> "吻别",
            "hotSong_3"=> "再见",
            "songCounts"=> 8489
        );
        $aa2=array(
            "musicTypeId"=> "oumei",
            "imgName"=>$str."oumei.png",
            "musicTypeName"=> "欧美Mhz",
            "contentMain"=> "关于欧美流行音乐的一切，就在这里了。",
            "hotSong_1"=> "The show",
            "hotSong_2"=> "Free Loop",
            "hotSong_3"=> "Someone Like You",
            "songCounts"=> 9224
        );
        $aa3=array(
            "musicTypeId"=> "baling",
            "imgName"=>$str."baling.png",
            "musicTypeName"=> "八零MHz",
            "contentMain"=> "80重金属，就在这里。",
            "hotSong_1"=> "后青春期的诗",
            "hotSong_2"=> "伤心的人别听慢歌",
            "hotSong_3"=> "你不是真正的快乐",
            "songCounts"=> 6065
        );
        $aa4=array(
            "musicTypeId"=> "yueyu",
            "imgName"=>$str."yueyu.png",
            "musicTypeName"=> "粤语MHz",
            "contentMain"=> "beyond,谭校长,陈百强,李克勤...",
            "hotSong_1"=> "海阔天空",
            "hotSong_2"=> "讲不出再见",
            "hotSong_3"=> "一生何求",
            "songCounts"=> 8931
        );
        $aa5=array(
            "musicTypeId"=> "kafei",
            "imgName"=>$str."kafei.png",
            "musicTypeName"=> "咖啡MHz",
            "contentMain"=> "你会不会突然地出现，在街角的咖啡店。",
            "hotSong_1"=> "好久不见",
            "hotSong_2"=> "讲不出再见",
            "hotSong_3"=> "咖啡吧",
            "songCounts"=> 8931
        );
        $aa6=array(
            "musicTypeId"=> "huayu1",
            "imgName"=>$str. "huayu.png",
            "musicTypeName"=> "华语Mhz",
            "contentMain"=> "这就是最好的华语歌曲！",
            "hotSong_1"=> "假如",
            "hotSong_2"=> "吻别",
            "hotSong_3"=> "再见",
            "songCounts"=> 8489
        );
        $aa7=array(
            "musicTypeId"=> "oumei1",
            "imgName"=>$str."oumei.png",
            "musicTypeName"=> "欧美Mhz",
            "contentMain"=> "关于欧美流行音乐的一切，就在这里了。",
            "hotSong_1"=> "The show",
            "hotSong_2"=> "Free Loop",
            "hotSong_3"=> "Someone Like You",
            "songCounts"=> 9224
        );
        $aa8=array(
            "musicTypeId"=> "huayu2",
            "imgName"=>$str. "huayu.png",
            "musicTypeName"=> "华语Mhz",
            "contentMain"=> "这就是最好的华语歌曲！",
            "hotSong_1"=> "假如",
            "hotSong_2"=> "吻别",
            "hotSong_3"=> "再见",
            "songCounts"=> 8489
        );

        $aa = array($aa1,$aa2,$aa3,$aa4,$aa5,$aa6,$aa7,$aa8);
        $aaa=array(
            data=>$aa,
            status=>'success'
        );
        $this->ajaxReturn($aaa,'JSON');
    }

    /*得到上升最快兆赫*/
    public function getRaiseUpMz(){
        $str=$_SERVER['HTTP_HOST']. '/fm/Application/Home/Content/img/slide/';
        $aa1=array(
            "musicTypeId"=>"huayu",
            "imgName"=>$str."huayu.png",
            "musicTypeName"=> "华语Mhz",
            "contentMain"=>"中国话才是最屌的！这就是最好的华语歌曲！",
            "hotSong_1"=>"梦一场",
            "hotSong_2"=> "吻别",
            "hotSong_3"=> "再见",
            "songCounts"=> 18989
        );
        $aa2=array(
            "musicTypeId"=> "oumei",
            "imgName"=>$str."oumei.png",
            "musicTypeName"=> "欧美Mhz",
            "contentMain"=> "关于欧美流行音乐的一切，就在这里了。",
            "hotSong_1"=> "The show",
            "hotSong_2"=> "Free Loop",
            "hotSong_3"=> "Someone Like You",
            "songCounts"=> 9224
        );
        $aa3=array(
            "musicTypeId"=> "baling",
            "imgName"=>$str."baling.png",
            "musicTypeName"=> "八零MHz",
            "contentMain"=> "80重金属，就在这里。",
            "hotSong_1"=> "后青春期的诗",
            "hotSong_2"=> "伤心的人别听慢歌",
            "hotSong_3"=> "你不是真正的快乐",
            "songCounts"=> 6065
        );
        $aa4=array(
            "musicTypeId"=> "yueyu",
            "imgName"=>$str."yueyu.png",
            "musicTypeName"=> "粤语MHz",
            "contentMain"=> "beyond,谭校长,陈百强,李克勤...",
            "hotSong_1"=> "海阔天空",
            "hotSong_2"=> "讲不出再见",
            "hotSong_3"=> "一生何求",
            "songCounts"=> 8931
        );
        $aa5=array(
            "musicTypeId"=> "kafei",
            "imgName"=>$str."kafei.png",
            "musicTypeName"=> "咖啡MHz",
            "contentMain"=> "你会不会突然地出现，在街角的咖啡店。",
            "hotSong_1"=> "好久不见",
            "hotSong_2"=> "讲不出再见",
            "hotSong_3"=> "咖啡吧",
            "songCounts"=> 8931
        );

        $aa = array($aa1,$aa2,$aa3,$aa4,$aa5);
        $aaa=array(
            data=>$aa,
            status=>'success'
        );
        $this->ajaxReturn($aaa,'JSON');
    }

    /*得到品牌兆赫*/
    public function getBrandMz(){
        $str=$_SERVER['HTTP_HOST']. '/fm/Application/Home/Content/img/slide/';
        $aa1=array(
            "musicTypeId"=>"oumei",
            "imgName"=>$str."oumei.png",
            "musicTypeName"=> "SK-Ⅱ最初的梦Mhz",
            "contentMain"=>"这就是最好的华语歌曲！",
            "hotSong_1"=>"what!",
            "hotSong_2"=> "Some one",
            "hotSong_3"=> "Bye",
            "songCounts"=> 8489
        );
        $aa2=array(
            "musicTypeId"=> "oumei",
            "imgName"=>$str."oumei.png",
            "musicTypeName"=> "欧美Mhz",
            "contentMain"=> "关于欧美流行音乐的一切，就在这里了。",
            "hotSong_1"=> "The show",
            "hotSong_2"=> "Free Loop",
            "hotSong_3"=> "Someone Like You",
            "songCounts"=> 9224
        );
        $aa3=array(
            "musicTypeId"=> "baling",
            "imgName"=>$str."baling.png",
            "musicTypeName"=> "北欧哥特MHz",
            "contentMain"=> "沙马特贵族，就在这里。",
            "hotSong_1"=> "飞向别人的床",
            "hotSong_2"=> "催眠",
            "hotSong_3"=> "指尖的星光",
            "songCounts"=> 8
        );
        $aa = array($aa1,$aa2,$aa3);
        $aaa=array(
            data=>$aa,
            status=>'success'
        );
        $this->ajaxReturn($aaa,'JSON');
    }


    /*得到推荐类别*/
    public function getTryThatMzInfo(){
        $aa = array(
            "Freels Like Home Mhz",
            "中国好声音 MHZ",
            "Just Rock It",
            "The Britain Queen",
            "The Beatles"
        );
        $aaa=array(
            data=>$aa,
            status=>'success'
        );
        $this->ajaxReturn($aaa,'JSON');
    }

    /*得到最近收听类别*/
    public function getRecentlyMzInfo(){
        $aa = array(
            "粤语Mhz",
            "九零MHZ",
            "日语MHz",
            "QueenMHz",
            "定西河西MHz"
        );
        $aaa=array(
            data=>$aa,
            status=>'success'
        );
        $this->ajaxReturn($aaa,'JSON');
    }

    /*得到当前要播放的音乐*/
    public function getCurrentSongInfo(){
        $str=$_SERVER['HTTP_HOST']. '/fm/Application/Home/Content/img/';
        $aa = array(
            "id"=>128902,
            "typeId"=>362,
            "poster"=>$str."players/coverPic_song0.png",
            "musicTypeName"=> "oumei",
            "name"=>"she is my sin",
            "subTitle"=>"《wishmaster-century media》",
            "author"=>"Nightwish",
            "nextId"=>128903
        );
        $aaa=array(
            data=>$aa,
            status=>'success'
        );
        $this->ajaxReturn($aaa,'JSON');
    }

    /*登录*/
    public function login($name='',$pwd='',$code=''){
        if($name=='hisihi' && $pwd=='123456' && $code=='W4r0'){
            $this->ajaxReturn('登录成功','JSON');
            exit();
        }
        else if($code!='W4r0'){
            $this->ajaxReturn('验证码错误','JSON');
            exit();
        }
        else if($name!='hisihi'|| $pwd!='123456'){
            $this->ajaxReturn('账号或者密码错误','JSON');
            exit();
        }
    }
}