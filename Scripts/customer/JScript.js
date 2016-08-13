/*

<div class="main">
    <div class="info-person" id="info-person">
    <!--人物头像-->
        <a href="#" class="bjx person">白嘉轩</a>
        <a href="#" class="lzl person">鹿子霖</a>
        <a href="#" class="txe person">田小娥</a>
        <a href="#" class="bxw person">白孝文</a>
        <a href="#" class="lzp person">鹿兆鹏</a>
        <a href="#" class="bl">白灵</a>
        <a href="#" class="ls person">鹿三</a>
        <a href="#" class="hw person">黑娃</a>
    <!--人物头像完毕-->
    <!--每个人的独白-->
        <a href="#" class="bjx-word word">白嘉轩的独白</a>
        <a href="#" class="lzl-word word">鹿子霖的独白</a>
        <a href="#" class="txe-word word">田小娥的独白</a>
        <a href="#" class="bxw-word word">白孝文的独白</a>
        <a href="#" class="lzp-word word">鹿兆鹏的独白</a>
        <a href="#" class="ls-word word">鹿三的独白</a>
        <a href="#" class="hw-word word">黑娃的独白</a>
    <!--独白完毕-->
    </div><!--end .info-person-->
</div><!--end .main-->
*/


window.onload = function () {
    //获取class的方法
    function getByClass(className, context) {
        var context = context || document;
        if (context.getElementsByClassName) {
            return context.getElementsByClassName(className);
        }
        var nodes = context.getElementsByTagName("*");
        ret = [];
        for (var i = 0; i < nodes.length; i++) {
            if (hasClass(nodes[i], className)) {
                ret.push(nodes[i]);
            }
        }
        return ret;
    }
    function hasClass(node, className) {
        var names = node.className.split(/s+/);
        for (var i = 0; i < names.length; i++) {
            if (names[i] == className) {
                return true;
            }
        }
        return false;
    }
    /*显示隐藏独白*/
    var timer = null;
    var person = getByClass("person");
    var word = getByClass("word");
    var pre = 0;
    var addEvent = [];
    for (var j = 0, leng = word.length; j < leng; j++) {
        addEvent[j] = -1;
    }
    for (var i = 0, len = person.length; i < len; i++) {
        person[i].onmouseover = function (i) {
            return function () {
                word[pre].style.display = "none";
                pre = i;
                word[pre].style.display = "block";
                if (addEvent[i] === -1) {
                    word[i].onmouseover = function () {
                        clearTimeout(timer);
                        this.style.display = "block";
                    };
                    word[i].onmouseout = function () {
                        this.style.display = "none";
                    };
                    addEvent[i] = 0;
                }

            };
        } (i);
        person[i].onmouseout = function (i) {
            return function () {
                timer = setTimeout(function () {
                    word[i].style.display = "none";
                }, 300);
            };
        } (i);
    };
}