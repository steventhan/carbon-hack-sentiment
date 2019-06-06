(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{236:function(e,t,a){e.exports=a(446)},245:function(e,t,a){},445:function(e,t,a){},446:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(20),i=a.n(c),o=a(41),l=a(67),s=a(186),u=a(124),p=a(49),m=["#FC4A1A","#4ABDAC","#F7B733"],d=["#FC4A1A","#4ABDAC","#F7B733","#89DA59","#80BD9E","#AEBD38","#456"],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sentimentLoading:!0,toneLoading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_SENTIMENT_PENDING":return Object(p.a)({},e,{sentimentLoading:!0,sentimentData:void 0});case"LOAD_SENTIMENT_FULFILLED":var a=t.payload.data,n=Object.entries(a).map(function(e){var t=Object(u.a)(e,2);return{name:t[0],value:t[1]}}).filter(function(e){return!["average","total"].includes(e.name)}).sort(function(e,t){return e.name.localeCompare(t.name)}).map(function(e,t){return Object(p.a)({},e,{color:m[t]})});return Object(p.a)({},e,{sentimentLoading:!1,sentimentData:n});case"LOAD_TONE_PENDING":return Object(p.a)({},e,{toneLoading:!0,toneData:void 0});case"LOAD_TONE_FULFILLED":var r=t.payload.data,c=Object.entries(r).map(function(e){var t=Object(u.a)(e,2);return{name:t[0],value:t[1]}}).filter(function(e){return!("total"===e.name||e.name.includes("_"))}).sort(function(e,t){return e.name.localeCompare(t.name)}).map(function(e,t){return Object(p.a)({},e,{color:d[t]})});return Object(p.a)({},e,{toneLoading:!1,toneData:c});default:return e}},b=(a(245),a(479)),g=a(206),f=a(480),O=a(38),E=a(21),v=a(43),j=a(39),y=a(42),w=a(44),D=a(11),N=a(481),k=a(469),L=a(470),A=a(471),C=a(478),x=a(472),I=a(121),T=a(192),_=a.n(T),F=a(193),B=a.n(F),M=a(48),S=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={inputValue:""},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.grow},r.a.createElement(N.a,{position:"static"},r.a.createElement(k.a,null,r.a.createElement(L.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(_.a,null)),r.a.createElement(A.a,{className:t.title,variant:"h6",noWrap:!0},"Cap1 Sentiment Analyzer"),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(B.a,null)),r.a.createElement(C.a,{placeholder:"Search for topic\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"Search",onChange:function(t){return e.setState({inputValue:t.target.value})}}})),r.a.createElement(x.a,{variant:"contained",color:"secondary",className:t.button,onClick:function(){var t=e.state.inputValue,a=t?"/api/sentiment/search/".concat(t):"/api/sentiment/search",n=t?"/api/tone/search/".concat(t):"/api/tone/search";e.props.dispatch({type:"LOAD_SENTIMENT",payload:Object(M.get)(a)}),e.props.dispatch({type:"LOAD_TONE",payload:Object(M.get)(n)})}},"Search"))))}}]),t}(n.Component),R=Object(o.b)(null)(Object(D.a)(function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(w.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(w.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(I.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(I.fade)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3)}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(w.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(w.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(w.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),button:{margin:e.spacing(1)}}})(S)),P=a(474),G=a(477),V=a(475),W=a(473),J=a(29),K=a(448),U={negatives:"Negative",positives:"Positive",neutrals:"Neutral"},z=Math.PI/180,$=function(e){var t=e.cx,a=e.cy,n=e.midAngle,c=e.innerRadius,i=e.outerRadius,o=e.percent,l=(e.index,e.name),s=c+.5*(i-c),u=t+s*Math.cos(-n*z),p=a+s*Math.sin(-n*z);return r.a.createElement("text",{x:u,y:p,fill:"white",textAnchor:"middle",dominantBaseline:"middle"},"".concat(U[l],": ").concat((100*o).toFixed(0),"%"))},q=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"LOAD_SENTIMENT",payload:Object(M.get)("/api/sentiment/search")})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.loading,c=e.data;return r.a.createElement(n.Fragment,null,r.a.createElement(A.a,{variant:"h5"},"Sentiment analysis"),a?r.a.createElement("div",{className:t.center},r.a.createElement(W.a,{color:"secondary"})):r.a.createElement(J.d,{width:"100%",height:400},r.a.createElement(J.c,{height:400},r.a.createElement(J.b,{stroke:"none",data:c,dataKey:"value",labelLine:!1,label:$},c.map(function(e,t){return r.a.createElement(J.a,{key:"cell-".concat(t),fill:e.color})})))))}}]),t}(n.Component),H=Object(o.b)(function(e){return{data:e.sentimentData,loading:e.sentimentLoading}})(Object(K.a)(function(e){return{progress:{margin:e.spacing(2)},center:{justifyContent:"center",display:"flex"}}})(q)),Q=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"LOAD_TONE",payload:Object(M.get)("/api/tone/search")})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.data,c=e.loading;return r.a.createElement(n.Fragment,null,r.a.createElement(A.a,{variant:"h5"},"Tone analysis"),c?r.a.createElement("div",{className:t.center},r.a.createElement(W.a,{color:"secondary"})):r.a.createElement(J.d,{width:"100%",height:400},r.a.createElement(J.c,{height:400},r.a.createElement(J.b,{stroke:"none",data:a,dataKey:"value",label:function(e){return t=e.name,a=e.percent,"".concat(t,": ").concat((100*a).toFixed(0),"%");var t,a}},a.map(function(e,t){return r.a.createElement(J.a,{key:"cell-".concat(t),fill:e.color})})))))}}]),t}(n.Component),X=Object(o.b)(function(e){return{data:e.toneData,loading:e.toneLoading}})(Object(K.a)(function(e){return{progress:{margin:e.spacing(2)},center:{justifyContent:"center",display:"flex"}}})(Q)),Y=function(e){function t(){return Object(O.a)(this,t),Object(v.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(P.a,null,r.a.createElement(G.a,{mt:2},r.a.createElement(V.a,{container:!0,spacing:3},r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(H,null))),r.a.createElement(V.a,{container:!0,spacing:3},r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(X,null)))))}}]),t}(n.Component),Z=(a(445),Object(g.a)({palette:{type:"dark"}}));var ee=function(){return r.a.createElement(f.a,{theme:Z},r.a.createElement(b.a,null),r.a.createElement(R,null),r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(o.a,{store:Object(l.c)(h,Object(l.a)(s.a))},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[236,1,2]]]);
//# sourceMappingURL=main.8988f85d.chunk.js.map