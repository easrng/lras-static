(function (lr,as){
    'use strict';
    lr.onload=function (){
        lr.onmessage=function (m){
            as.querySelector("iframe#info").height=m.data+"px";
        }.bind(this);
    }.bind(this);
})(window,document);