window.onload= function() {
	//获取class的方法
function getByClass( className, context) {
	var context = context || document;
	if( context.getElementsByClassName) {
		return context.getElementsByClassName(className);
	}
	var nodes = context.getElementsByTagName("*");
	ret=[];
	for( var i=0; i<nodes.length; i++) {
		if( hasClass(nodes[i],className)) {
			ret.push(nodes[i]);
		}
	}
	return ret;
}
function hasClass ( node, className) {
	var names = node.className.split(/\s+/);
	for ( var i=0;i<names.length;i++) {
		if(names[i]==className) {
			return true;
		}
	}
	return false;
}
/*显示隐藏独白*/
var timer=null;
var person = getByClass("person");
var word = getByClass("word");
var pre=0;
var addEvent=[];
for(var j=0,leng=word.length;j<leng;j++){
    addEvent[j]=-1;
}
for(var i=0,len=person.length;i<len;i++){
    person[i].onmouseover=function(i){
	    return function(){
		    word[pre].style.display="none";
			pre=i;
			word[pre].style.display="block";
			if(addEvent[i]===-1){
			    word[i].onmouseover=function(){
				    clearTimeout(timer);
				    this.style.display="block";
				};
				word[i].onmouseout=function(){
				    this.style.display="none";
				};
				addEvent[i]=0;
			}
			
		};
	}(i);
	 person[i].onmouseout=function(i){
	    return function(){
		    timer=setTimeout(function(){
			    word[i].style.display="none";
			},300);
		};
	}(i);
};
}