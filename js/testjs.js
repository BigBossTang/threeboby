/**
 * Created by Administrator on 2016/10/18 0018.
 */
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




function changePos(xPos,yPos,step,imageID)
{
    width = document.documentElement.clientWidth; /*获取屏幕的高度宽度*/
    height = document.documentElement.clientHeight;
    var ids=document.getElementById(imageID)
    Hoffset = ids.offsetHeight;/*获取IMG相对于版面的高度宽度*/
    Woffset = ids.offsetWidth;
    imageID.style.left = xPos + document.documentElement.scrollLeft+"px";
    imageID.style.top = yPos + document.documentElement.scrollTop+"px";
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
    {xon = 0; xPos = (width - Woffset);   }
}

function start2()//启动
{
    changePos(2,100,2,"img1");
    changePos(4,35,4,"img2");
    changePos(1,66,5,"img3");
}

function start()//预启动
{

    img1.visibility = "visible";
    img2.visibility="visible";
    img3.visibility="visible";
    interval = setInterval('start2()', delay);
}