(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(t,e,n){t.exports=n(56)},56:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(11),c=n(9),i=n(10),l=n(4),u=n(5),s=n(7),f=n(6),d=n(8),p=n(13),m=n.n(p),g=function(t){var e=new Date(t).getFullYear(),n=new Date(t),a=n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,r=new Date(t).getDate();return"".concat(e,"-").concat(a,"-").concat(r)},h=n(24),v=function(t){return Date.parse(t.start.toString())},w=function(t){return Date.parse(t.start.toString())+1e3*t.duration},b=Object(h.a)(function(t){return t.data},function(t){return t.currentDate},function(t,e){return t.reduce(function(t,n,a,r){var o=n.start.split(" ")[1].split(":"),l="".concat(o[0],":").concat(o[1]);return v(n)>e?[].concat(Object(c.a)(t),[Object(i.a)({},n,{type:"inFuture",time:l,end:w(n)})]):v(n)<=e&&w(n)>=e?[].concat(Object(c.a)(t),[Object(i.a)({},n,{type:"isNow",time:l,end:w(n)})]):w(n)<e&&w(r[a+1])>=e?[].concat(Object(c.a)(t),[Object(i.a)({},n,{type:"isOver",time:l,end:w(n)})]):w(n)<e&&w(r[a+1])<e&&w(r[a+2])>=e?[].concat(Object(c.a)(t),[Object(i.a)({},n,{type:"isPast",time:l,end:w(n)})]):Object(c.a)(t)},[])}),O=n(1),j=n(2),x="#aeaeae",y="#fff",D="blue",S="#c7e6fd",N="pink",E="#333";function k(){var t=Object(O.a)(["\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 500px;\n\tmax-height: 100vh;\n\tbackground-color:",";\n"]);return k=function(){return t},t}function I(){var t=Object(O.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\tmin-height: 100vh;\n\toverflow: hidden;\n\tbackground-color: ",";\n"]);return I=function(){return t},t}var P=j.a.div.attrs({className:"wrapper"})(I(),x),T=j.a.div.attrs({className:"container"})(k(),y);function _(){var t=Object(O.a)(["\n\twidth: calc(100% - 70px);\n\tfont-size: 24px;\n\tfont-weight: 600;\n\tpadding-left: 30px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\ta {\n\t\tcolor: ",";\n\t\ttext-decoration: underline;\n\t}\n\t@media (max-width: 430px) {\n         font-size: 22px;\n  \t}\n"]);return _=function(){return t},t}function J(){var t=Object(O.a)(["\n\twidth: 70px;\n\theight: 70px;\n\timg {\n\t\tmax-width: 100%;\n\t\tmax-height: 100%;\n\t}\n"]);return J=function(){return t},t}function z(){var t=Object(O.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 100%;\n\tpadding: 10px 20px;\n"]);return z=function(){return t},t}var C=j.a.div.attrs({className:"head"})(z()),F=j.a.div.attrs({className:"head__logo"})(J()),M=j.a.h1.attrs({className:"head__title"})(_(),D),U=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.logo,a=t.url;return r.a.createElement(C,null,r.a.createElement(F,null,r.a.createElement("img",{src:n,alt:e})),r.a.createElement(M,null,r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},e)))}}]),e}(a.PureComponent);U.defaultProps={title:"",logo:"",url:""};var A=U;function R(){var t=Object(O.a)(["\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\tmax-height: calc(100vh - 90px);\n"]);return R=function(){return t},t}var B=j.a.div.attrs({className:"telecast-list"})(R());function Y(){var t=Object(O.a)(["\n\twidth: calc(100% - 70px);\n\tfont-size: 20px;\n\tfont-weight: 600;\n\tcolor: ",";\n\tpadding-left: 15px;\n\toverflow: hidden;\n\t@media (max-width: 430px) {\n         font-size: 18px;\n  \t}\n"]);return Y=function(){return t},t}function q(){var t=Object(O.a)(["\n\twidth: 55px;\n\tfont-size: 22px;\n\t@media (max-width: 430px) {\n         font-size: 20px;\n  \t}\n"]);return q=function(){return t},t}function G(){var t=Object(O.a)(["\n\tdisplay: flex;\n\tpadding: 10px 20px;\n\talign-items: flex-start;\n\tborder-bottom: 1px solid ",";\n\tbackground-color: ",";\n\t",";\n"]);return G=function(){return t},t}var H=j.a.div.attrs({className:"telecast-item"})(G(),x,function(t){return"isNow"===t.type?S:"isOver"===t.type?N:"initial"},function(t){return"isPast"===t.type?"opacity: 0.3":null}),K=j.a.div.attrs({className:"telecast-time"})(q()),L=j.a.h1.attrs({className:"head__title"})(Y(),E),Q=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.time,a=t.type;return r.a.createElement(H,{type:a},r.a.createElement(K,null,n),r.a.createElement(L,null,e))}}]),e}(a.PureComponent);Q.defaultProps={title:"",img:"",altImg:"",type:"inFuture"};var V=Q,W=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(o)))).renderItems=function(){return n.props.info.map(function(t){return r.a.createElement(V,{key:t.start+Math.random(),title:t.title,time:t.time,type:t.type})})},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(B,null,this.renderItems())}}]),e}(a.PureComponent);W.defaultProps={info:[],currentDate:Date.parse(new Date)};var X=W,Z="148",$="perm",tt="https://epg.domru.ru",et=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).state={title:"",logo:"",url:"",info:[]},n.getInfoProgramm=function(){var t=JSON.parse(window.localStorage.getItem("info"));t&&t.title&&t.logo&&t.url?n.setState({title:t.title,logo:t.logo,url:t.url}):m.a.get("".concat(tt,"/channel/info?chid=").concat(Z,"&domain=").concat($)).then(function(t){n.setState({title:t.data.title,logo:tt+t.data.logo,url:t.data.url}),window.localStorage.setItem("info",JSON.stringify(n.state))}).catch(function(t){return console.log(t)})},n.getTelecasts=function(){var t=Date.parse(new Date),e="".concat(g(t-864e5),"+").concat(encodeURIComponent("18:00:00")),a="".concat(g(t),"+").concat(encodeURIComponent("23:59:59")),r=JSON.parse(window.localStorage.getItem("rangeDate")),o=JSON.parse(window.localStorage.getItem("info"));if(r&&o&&r.from<=t&&r.to>=t){var l=b({data:o.info,currentDate:t});return n.setState(Object(i.a)({},o,{info:Object(c.a)(l)})),void n.allUpdate(l)}m.a.get("".concat(tt,"/program/list?date_from=").concat(e,"&date_to=").concat(a,"&xvid[0]=1&chid=").concat(Z,"&domain=").concat($)).then(function(t){var e=Date.parse(new Date);n.setState({info:b({data:t.data[1],currentDate:e})}),window.localStorage.setItem("info",JSON.stringify(n.state)),window.localStorage.setItem("rangeDate",JSON.stringify({from:Date.parse(g(e-864e5)+" 18:00:0"),to:Date.parse(g(e)+" 23:59:59")})),n.allUpdate(n.state.info)}).catch(function(t){return console.log(t)})},n.allUpdate=function(t){var e=Date.parse(new Date);n.updateFromServer(e,Date.parse(g(e)+" 23:59:59")),n.updateTelecasts(t,e)},n.updateTelecasts=function(t,e){var a=t[2].end-e+1e3;console.log("Next update from state: ",a/1e3/60," min");var r=setTimeout(function(){console.log("updating from state"),clearTimeout(r),n.setState({info:b({data:t,currentDate:Date.parse(new Date)})}),n.updateTelecasts(n.state.info,Date.parse(new Date))},a)},n.updateFromServer=function(t,e){var a=e-t+1e3;console.log("Next update from server: ",a/1e3/60/60," hours");var r=setTimeout(function(){console.log("updating from server"),clearTimeout(r),n.getTelecasts()},a)},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.getInfoProgramm(),this.getTelecasts()}},{key:"render",value:function(){var t=this.state,e=t.title,n=t.logo,a=t.url,o=t.info;return r.a.createElement(P,null,r.a.createElement(T,null,r.a.createElement(A,{title:e,logo:n,url:a}),r.a.createElement(X,{info:o})))}}]),e}(a.Component);Object(o.render)(r.a.createElement(et,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.19616526.chunk.js.map