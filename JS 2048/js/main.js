// 在此放置代码!
var canvas = document.getElementById("2048");
var context = canvas.getContext('2d');
function draw(a) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "black";  //画布的笔触色 
    context.fillStyle = "black";  //画布的填充色
    context.lineWidth = 1;  //线条宽度 
    context.beginPath(); //开始创建绘制
    context.moveTo(canvas.width / 4, 0);
    context.lineTo(canvas.width / 4, canvas.height);
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.moveTo(canvas.width / 4 * 3, 0);
    context.lineTo(canvas.width / 4 * 3, canvas.height);
    context.moveTo(0, canvas.height / 4)
    context.lineTo(canvas.width, canvas.height / 4);
    context.moveTo(0, canvas.height / 2)
    context.lineTo(canvas.width, canvas.height / 2);
    context.moveTo(0, canvas.height / 4 * 3)
    context.lineTo(canvas.width, canvas.height / 4 * 3);

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++){
            if (a[i][j] != 0) {
                context.font = "20px Georgia";
                context.fillText(a[i][j], j * canvas.width / 4 + canvas.width / 8, i * canvas.height / 4 + canvas.height/8);
            }
        }
    }
    context.stroke(); //绘制
}
var a = new Array(4);
for (var i = 0; i < 4; i++) {
    a[i] = new Array(4);
}
for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        a[i][j] = getrandomint();
    }
}
document.onkeydown = function (event) {
    var e = event  || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 37) {
        for (var q = 0; q < 3; q++) {
            for (var i = 0; i < 4; i++) {
                for (var j = 3; j > 0; j--) {
                    if (a[i][j - 1] == 0) {
                        a[i][j - 1] = a[i][j];
                        a[i][j] = 0;
                    }
                }
            }
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                if (a[i][j] == a[i][j + 1]) {
                    a[i][j] *= 2;
                    a[i][j + 1] = 0;
                }
            }
        }
        for (var q = 0; q < 3; q++) {
            for (var i = 0; i < 4; i++) {
                for (var j = 3; j > 0; j--) {
                    if (a[i][j - 1] == 0) {
                        a[i][j - 1] = a[i][j];
                        a[i][j] = 0;
                    }
                }
            }
        }
    }
    if (e && e.keyCode == 38) {
        for (var q = 0; q < 3; q++) {
            for (var i = 3; i > 0; i--) {
                for (var j = 0; j < 4; j++) {
                    if (a[i - 1][j] == 0) {
                        a[i - 1][j] = a[i][j];
                        a[i][j] = 0;
                    }
                }
            }
        }
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 4; j++) {
                if (a[i][j] == a[i + 1][j]) {
                    a[i][j] *= 2;
                    a[i + 1][j] = 0;
                }
            }
        }
        for (var q = 0; q < 3; q++) {
            for (var i = 3; i > 0; i--) {
                for (var j = 0; j < 4; j++) {
                    if (a[i - 1][j] == 0) {
                        a[i - 1][j] = a[i][j];
                        a[i][j] = 0;
                    }
                }
            }
        }
    }
    if (e && e.keyCode == 39) {
        for (var q = 0; q < 3; q++) {
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 3; j++) {
                    if (a[i][j + 1] == 0) {
                        a[i][j + 1] = a[i][j]
                        a[i][j] = 0;
                    }
                }
            }
        }
        for (var i = 0; i < 4; i++) {
            for (var j=3; j >0; j--) {
                if (a[i][j] == a[i][j - 1]) {
                    a[i][j] *= 2;
                    a[i][j - 1] = 0;
                }
            }
        }
        for (var q = 0; q < 3; q++) {
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 3; j++) {
                    if (a[i][j + 1] == 0) {
                        a[i][j + 1] = a[i][j]
                        a[i][j] = 0;
                    }
                }
            }
        }
    }
    if (e && e.keyCode == 40) {
        for (var q = 0; q < 3; q++) {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 4; j++) {
                    if (a[i + 1][j] == 0) {
                        a[i + 1][j] = a[i][j];
                        a[i][j] = 0;
                    }
                }
            }
        }
        for (var i = 3; i >0 ; i--) {
            for (var j = 0; j < 4; j++) {
                if (a[i][j] == a[i - 1][j]) {
                    a[i][j] *= 2;
                    a[i - 1][j] = 0;
                }
            }
        }
        for (var q = 0; q < 3; q++) {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 4; j++) {
                    if (a[i + 1][j] == 0) {
                        a[i + 1][j] = a[i][j];
                        a[i][j] = 0;
                    }
                }
            }
        }
    }
    var q, p;
    for (q = 0; q < 4; q++) {
        for (p = 0; p < 4; p++) {
            if (a[q][p] == 2048) {
                drawwin();
                break;
            }
        }
    }
    if (q == 4 && p == 4) {
        getvoida();
    }
    else {

    }
}
function getvoida() {
    var aq = new Array();
    var ap = new Array();
    for (var q = 0; q < 4; q++) {
        for (var p = 0; p < 4; p++) {
            if (a[q][p] == 0) {
                aq.push(q);
                ap.push(p);
            }
        }
    }
    if (aq.length > 0) {
        var i = aq[Math.floor(Math.random() * aq.length)];
        var j = ap[Math.floor(Math.random() * ap.length)];
        a[i][j] = getrandomint();
        draw(a);
    }
    else {
        drawlose();
    }
}
function getrandomint() {
    return Math.random() > 0.5 ? 4 : 2;
}
function drawlose() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "red";  //画布的笔触色 
    context.fillStyle = "red";  //画布的填充色
    context.lineWidth = 1;  //线条宽度 
    context.beginPath(); //开始创建绘制
    context.font = "100px Arial";
    context.fillText("你输了", 0, canvas.height/4*3);
    context.stroke(); //绘制
}
function drawwin() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "red";  //画布的笔触色 
    context.fillStyle = "red";  //画布的填充色
    context.lineWidth = 1;  //线条宽度 
    context.beginPath(); //开始创建绘制
    context.font = "100px Arial";
    context.fillText("你赢了", 0, canvas.height / 4 * 3);
    context.stroke(); //绘制
}
draw(a);