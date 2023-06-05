// 定义一个时间函数

// var localtime = now.toString();
// document.write(localtime);






setInterval(timer, 1000);
function timer() {
    var now = new Date();

    var hours = now.getHours();
    // console.log(hours);
    var mins = now.getMinutes();
    // console.log(mins);
    var seconds = now.getSeconds();
    console.log(seconds);

    document.getElementById('s1').innerHTML = hours>=10?hours:"0"+hours;
    document.getElementById('s2').innerHTML = mins>=10?mins:"0"+mins;
    document.getElementById('s3').innerHTML = seconds>=10?seconds:"0"+seconds;
}
