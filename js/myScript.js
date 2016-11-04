var xPos = 2;
var yPos = 100;
var x2Pos= 2;
var y2Pos= 300;
var x3Pos= 150;
var y3Pos= 250;
var step = 5;
var step2 = 4;
var step3 = 6;
var delay = 1;
var height = 0;
var height2 = 0;
var height3 = 0;
var Hoffset = 0;
var Hoffset2 = 0;
var Hoffset3 = 0;
var Woffset = 0;
var Woffset2 = 0;
var Woffset3 = 0;
var yon = 0;
var yon2 = 0;
var yon3 = 0;
var xon = 0;
var xon2 = 0;
var xon3 = 0;
var pause = true;
var interval;
var c=0;
var t;
var timer_is_on=0;
var x="";
var y="";
var run=true;
img1.style.top = yPos;
img2.style.top = y2Pos;
img3.style.top = y3Pos;


function changePos1()
{
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    Hoffset = img1.offsetHeight;
    Woffset = img1.offsetWidth;
    img1.style.left = xPos + document.documentElement.scrollLeft+"px";
    img1.style.top = yPos + document.documentElement.scrollTop+"px";
    if (yon)
    {yPos = yPos + step;}
    else
    {yPos = yPos - step;}
    if (yPos < 0)
    {yon = 1;yPos = 0;}
    if (yPos >= (height - Hoffset))
    {yon = 0;yPos = (height - Hoffset);}
    if (xon)
    {xPos = xPos + step;}
    else
    {xPos = xPos - step;}
    if (xPos < 0)
    {xon = 1;xPos = 0;}
    if (xPos >= (width - Woffset))
    {xon = 0;xPos = (width - Woffset);   }
}
function changePos2()
{
    width2 = document.documentElement.clientWidth;
    height2 = document.documentElement.clientHeight;
    Hoffset2 = img2.offsetHeight;
    Woffset2 = img2.offsetWidth;
    img2.style.left = x2Pos + document.documentElement.scrollLeft+"px";
    img2.style.top = y2Pos + document.documentElement.scrollTop+"px";
    if (yon2)
    {y2Pos = y2Pos + step2;}
    else
    {y2Pos = y2Pos - step2;}
    if (y2Pos < 0)
    {yon2 = 1;y2Pos = 0;}
    if (y2Pos >= (height2 - Hoffset2))
    {yon2 = 0;y2Pos = (height2 - Hoffset2);}
    if (xon2)
    {x2Pos = x2Pos + step2;}
    else
    {x2Pos = x2Pos - step2;}
    if (x2Pos < 0)
    {xon2 = 1;x2Pos = 0;}
    if (x2Pos >= (width2 - Woffset2))
    {xon2 = 0;x2Pos = (width2 - Woffset2);   }
}
function changePos3()
{
    width3 = document.documentElement.clientWidth;
    height3 = document.documentElement.clientHeight;
    Hoffset3 = img3.offsetHeight;
    Woffset3 = img3.offsetWidth;
    img3.style.left = x3Pos + document.documentElement.scrollLeft+"px";
    img3.style.top = y3Pos + document.documentElement.scrollTop+"px";
    if (yon3)
    {y3Pos = y3Pos + step3;}
    else
    {y3Pos = y3Pos - step3;}
    if (y3Pos < 0)
    {yon3 = 1;y3Pos = 0;}
    if (y3Pos >= (height3 - Hoffset3))
    {yon3 = 0;y3Pos = (height3 - Hoffset3);}
    if (xon3)
    {x3Pos = x3Pos + step3;}
    else
    {x3Pos = x3Pos - step3;}
    if (x3Pos < 0)
    {xon3 = 1;x3Pos = 0;}
    if (x3Pos >= (width3 - Woffset3))
    {xon3 = 0;x3Pos = (width3 - Woffset3);   }
}
function start()//预启动
{

    img1.visibility = "visible";
    img2.visibility="visible";
    img3.visibility="visible";
    interval = setInterval('start2()', delay);
}

function start2()//启动
{
    changePos1();
    changePos2();
    changePos3();
}
//暂停代码
function pause_resume()
{
    if(pause)
    {
        clearInterval(interval);
        pause = false;}
    else
    {
        interval = setInterval('changePos()',delay);
        pause = true;
    }
}

//计时器代码
function timedCount(){
    var d;
    if (run){
    document.getElementById('time').value=c;
    c=c+1;
    t=setTimeout(function(){timedCount()},1000);
}else {
    d=c-1;
        document.getElementById("second").innerHTML=d;
        setTimeout('document.getElementById("gameOver").style.visibility="visible"',2000);
    }
}
function doTimer(){
    if (!timer_is_on){
        timer_is_on=1;
        timedCount();
    }
}
function stopCount(){
    clearTimeout(t);
    timer_is_on=0;
}

//下面的函数用来设置地球的运动
//定位图片位置
function GetMouse(oEvent)
{
    if(run){ x=oEvent.clientX;
        y=oEvent.clientY;
        document.getElementById("img4").style.left=(parseInt(x)-100)+"px";
        document.getElementById("img4").style.top=y+"px";
    }}
//入口
function moveEarth()
{

    var ele=document.getElementById("earth");
    //注册鼠标移动事件
    ele.onmousemove=function(){GetMouse(event);}
    // 注册鼠标按下事件
    //ele.onmousedown=function(){ChangeBg("Img","image/sun.png");}
    //注册鼠标弹回事件
    //ele.onmouseup=function(){ChangeBg("Img","image/earth.png");}


}
//图片变化
function ChangeBg(id,url)
{
    document.getElementById(id).src=url;
}

/*
 下面的功能用来判定碰撞
 */
function  foundPos(){//获取太阳和地球的坐标参数，并赋值给变量
    var odiv1=document.getElementById('img1');
    var x1=parseInt(odiv1.getBoundingClientRect().left)+42;
    var y1=parseInt(odiv1.getBoundingClientRect().top)+42;

    var odiv2=document.getElementById('img2');
    var x2=parseInt(odiv2.getBoundingClientRect().left)+50;
    var y2=parseInt(odiv2.getBoundingClientRect().top)+50;

    var odiv3=document.getElementById('img3');
    var x3=parseInt(odiv3.getBoundingClientRect().left)+35;
    var y3=parseInt(odiv3.getBoundingClientRect().top)+35;

    var odiv4=document.getElementById('img4');
    var x4=parseInt(odiv4.getBoundingClientRect().left)+30;
    var y4=parseInt(odiv4.getBoundingClientRect().top)+30;

    if((x1-x4)*(x1-x4)+(y1-y4)*(y1-y4)<5184||(x2-x4)*(x2-x4)+(y2-y4)*(y2-y4)<6400||(x3-x4)*(x3-x4)+(y3-y4)*(y3-y4)<4225){//判定圆心距小于半径和则发生碰撞
        run=false;
        moveEarth();
        boom();

    }

}

/*碰撞开关*/
function contact(){
    if (run) {
        setInterval(foundPos, 1);
    }
}
/*
    刷新页面，重新开始
*/
function refresh() {
    document.location.reload();
}

/*碰撞动画*/
function boom() {
    document.getElementById("img4").src="image/boom.jpg";
    setTimeout("hiddenEarth()",3000);
}

/*地球消失*/
function hiddenEarth() {
    document.getElementById("img4").style.visibility="hidden";
    document.getElementById("mainMenu").style.visibility="visible";/*显示导航条*/
}

/*时间出现，警告隐藏*/
function appear() {
    document.getElementById("doTime").style.visibility="visible";
    document.getElementById("time").style.visibility="visible";
    document.getElementById("statement").style.visibility="hidden";
    document.getElementById("mainMenu").style.visibility="hidden";
}


/*图片放大功能*/
function extraImg(imgx){
    document.getElementById("bigImg").src=imgx.src;
    document.getElementById("bigImg").style.visibility="visible";
}