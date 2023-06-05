// 创建一个now变量，并在其中存储当前的日期和时间
now = new Date();
// console.log(now);
localtime = now.toString();
// toGTMString已被废弃,用toUTCString代替
utctime = now.toUTCString();
document.write("<b>Local time:</b>" + localtime + "<BR>");
document.write("<b>UTC time:</b>" + utctime);




// 时分秒
    hours = now.getHours();
    console.log(hours);
    minutes = now.getMinutes();
    console.log(minutes);
    seconds = now.getSeconds();
    console.log(seconds);



// setInterval(function(){myTime()},1000)
document.write("<h1>");
document.write(hours + ":" + minutes + ":" + seconds);
document.write("</h1>");


function click() {
    window.location.href = "http://www.baidu.com/";
}


