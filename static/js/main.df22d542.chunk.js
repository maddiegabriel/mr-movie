(this["webpackJsonpmr-movie"]=this["webpackJsonpmr-movie"]||[]).push([[0],{65:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),s=n(12),c=n.n(s),o=(n(65),n(32)),l=n(15),u=n(89),d=n(99),j=n(100),h=n.p+"static/media/logo.f41ab86e.png",b=function(){var e=Object(u.a)((function(){return{head:{minHeight:"46vh",width:"100%",backgroundColor:"#cae6ef"},logo:{maxWidth:"65vh",top:"18vh",position:"absolute",left:"50%",transform:"translate(-50%, -50%)"}}}))();return Object(a.jsx)("div",{className:e.head,children:Object(a.jsx)("img",{src:h,alt:"website logo",className:e.logo})})},m=n(72),x=n(101),p=n(91),O=n(48),f=n.n(O),v=function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),i=n[0],s=n[1],c=Object(u.a)((function(e){return{form:{padding:"10px 4px",display:"flex",width:"70%",position:"absolute",left:"50%",transform:"translate(-50%, -50%)",marginTop:"-70px"},input:{marginLeft:e.spacing(1),flex:1,fontSize:"1.3rem"},iconButton:{padding:10}}}))();return Object(a.jsxs)(m.a,{component:"form",className:c.form,children:[Object(a.jsx)(x.a,{className:c.input,placeholder:"Search for your favourite movie!",inputProps:{"aria-label":"search omdb"},value:i,onChange:function(t){s(t.target.value),e.search(i)}}),Object(a.jsx)(p.a,{type:"submit",className:c.iconButton,"aria-label":"search",onClick:function(t){t.preventDefault(),e.search(i)},children:Object(a.jsx)(f.a,{})})]})},g=n(92),y=n(97),N=n(98),L=n(93),w=n(96),S=n(95),C=n(35),k=n(49),T=n.n(k),B=n(94),M=n(29),F=n(30),A=n(34),E=n(33),P=i.a.createContext(),R=P.Provider,I=P.Consumer,D=function(e){Object(A.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={nominationList:[]},e.setNominationList=function(t){e.setState((function(e){return{nominationList:t}}))},e}return Object(F.a)(n,[{key:"render",value:function(){return Object(a.jsx)(R,{value:{nominationList:this.state.nominationList,setNominationList:this.setNominationList},children:this.props.children})}}]),n}(r.Component),J=i.a.createContext(),H=J.Provider,z=J.Consumer,Q=function(e){Object(A.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={banners:[!1,!1]},e.setBanners=function(t,n){e.setState((function(e){return{banners:[t,n]}}))},e}return Object(F.a)(n,[{key:"render",value:function(){return Object(a.jsx)(H,{value:{banners:this.state.banners,setBanners:this.setBanners},children:this.props.children})}}]),n}(r.Component),W=function(e){var t=Object(u.a)((function(){return{root:{display:"flex",width:"100%",boxShadow:"2px 4px 6px 4px #ccc"},details:{width:"70%",display:"flex",flexDirection:"column",minHeight:"30vh"},content:{flex:"1 0 auto"},image:{width:"30%"},button:{marginTop:"30px",backgroundColor:"#96BF48","&:hover":{backgroundColor:"#5E8E3E"}}}}))(),n=function(e,t){for(var n=0;n<e.nominationList.length;n++)if(JSON.parse(e.nominationList[n]).imdb===t)return!0;return!1};return Object(a.jsx)(I,{children:function(r){return Object(a.jsx)(z,{children:function(i){return Object(a.jsxs)(g.a,{className:t.root,children:[Object(a.jsx)("div",{className:t.details,children:Object(a.jsxs)(L.a,{className:t.content,children:[Object(a.jsx)(C.a,{component:"h5",variant:"h5",children:e.title}),Object(a.jsx)(C.a,{variant:"subtitle1",color:"textSecondary",children:e.year}),Object(a.jsx)(B.a,{variant:"contained",size:"large",color:"primary",className:t.button,startIcon:Object(a.jsx)(T.a,{}),disabled:n(r,e.imdb),onClick:function(){return function(e,t,n,a,r,i){if(5!==e.nominationList.length){4===e.nominationList.length&&t.setBanners(!0,!1);for(var s={imdb:n,title:a,year:r,poster:i},c=[],o=0;o<e.nominationList.length;o++)c.push(e.nominationList[o]);c.push(JSON.stringify(s)),e.setNominationList(c)}else t.setBanners(!1,!0)}(r,i,e.imdb,e.title,e.year,e.poster)},children:"Nominate"})]})}),Object(a.jsx)(S.a,{className:t.image,image:e.poster,title:"Movie poster"})]})}})}})},Y=function(e){var t=Object(u.a)((function(){return{card:{padding:"10px 4px",boxShadow:"2px 4px 6px 4px #ccc",marginBottom:"6%"},title:{position:"sticky"},results:{height:"45vh",overflow:"scroll",paddingLeft:"0"},result:{paddingLeft:"2px"},errorText:{textAlign:"center",marginTop:"20%"}}}))();return Object(a.jsxs)(g.a,{className:t.card,children:[Object(a.jsx)(w.a,{className:t.title,title:"Movie Search Results"}),Object(a.jsx)(L.a,{children:Object(a.jsx)(y.a,{className:t.results,children:null===e.movies?Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:t.errorText,children:[Object(a.jsx)(C.a,{component:"h5",variant:"h5",children:"Hmmm... no results!"}),Object(a.jsx)(C.a,{variant:"subtitle1",color:"textSecondary",children:"Try a more specific search."})]})}):e.movies.map((function(e,n){return Object(a.jsx)(N.a,{className:t.result,children:Object(a.jsx)(W,{imdb:e.imdbID,title:e.Title,year:e.Year,poster:e.Poster},n)},n)}))})})]})},U=n(50),V=n.n(U),q=function(e){var t=Object(u.a)((function(){return{root:{display:"flex",width:"100%",boxShadow:"2px 4px 6px 4px #ccc"},details:{width:"70%",display:"flex",flexDirection:"column",minHeight:"30vh"},content:{flex:"1 0 auto"},image:{width:"30%"},button:{marginTop:"30px",backgroundColor:"#D71C21","&:hover":{backgroundColor:"#880C15"}}}}))();return Object(a.jsx)(I,{children:function(n){return Object(a.jsx)(z,{children:function(r){return Object(a.jsxs)(g.a,{className:t.root,children:[Object(a.jsx)("div",{className:t.details,children:Object(a.jsxs)(L.a,{className:t.content,children:[Object(a.jsx)(C.a,{component:"h5",variant:"h5",children:e.title}),Object(a.jsx)(C.a,{variant:"subtitle1",color:"textSecondary",children:e.year}),Object(a.jsx)(B.a,{variant:"contained",color:"primary",size:"large",className:t.button,startIcon:Object(a.jsx)(V.a,{}),onClick:function(){return function(e,t,n){for(var a=[],r=0;r<e.nominationList.length;r++)JSON.parse(e.nominationList[r]).imdb!=n&&a.push(e.nominationList[r]);e.setNominationList(a),t.setBanners(!1,!1)}(n,r,e.imdb)},children:"REMOVE"})]})}),Object(a.jsx)(S.a,{className:t.image,image:e.poster,title:"Movie poster"})]})}})}})},G=n.p+"static/media/sad.3963c84a.png",K=function(e){var t=Object(u.a)((function(){return{card:{padding:"10px 4px",boxShadow:"2px 4px 6px 4px #ccc"},title:{position:"sticky"},nominations:{height:"45vh",overflow:"scroll"},sadOscar:{width:"32%",minWidth:"20vh",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"8%"},sadOscarText:{textAlign:"center"}}}))(),n=[],r=function(e){n=[];for(var t=0;t<e.length;t++)n.push(JSON.parse(e[t]))};return Object(a.jsx)(I,{children:function(e){return Object(a.jsxs)(g.a,{className:t.card,children:[r(e.nominationList),Object(a.jsx)(w.a,{className:t.title,title:"Your Favourite Movies"}),Object(a.jsx)(L.a,{children:Object(a.jsx)(y.a,{className:t.nominations,children:0===e.nominationList.length?Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:G,alt:"sad oscar",className:t.sadOscar}),Object(a.jsxs)("div",{className:t.sadOscarText,children:[Object(a.jsx)(C.a,{component:"h5",variant:"h5",children:"No nominations yet!"}),Object(a.jsx)(C.a,{variant:"subtitle1",color:"textSecondary",children:"Use the search bar to get started."})]})]}):n.map((function(e,n){return Object(a.jsx)(N.a,{className:t.result,children:Object(a.jsx)(q,{imdb:e.imdb,title:e.title,year:e.year,poster:e.poster},n)},n)}))})})]})}})},X={movies:[],errorMessage:null},Z=function(e,t){switch(t.type){case"REQ":return Object(l.a)(Object(l.a)({},e),{},{errorMessage:null});case"PASS":return Object(l.a)(Object(l.a)({},e),{},{movies:t.payload,errorMessage:null});case"FAIL":return Object(l.a)(Object(l.a)({},e),{},{movies:null,errorMessage:t.error});default:return e}},$=function(){var e=Object(r.useReducer)(Z,X),t=Object(o.a)(e,2),n=t[0],i=t[1],s=n.movies,c=n.errorMessage,l=function(e){i({type:"REQ"}),fetch("https://www.omdbapi.com/?apikey=2259721&s=".concat(e,"&type=movie")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?i({type:"PASS",payload:e.Search}):i({type:"FAIL",error:e.Error})}))},h=Object(u.a)((function(){return{root:{backgroundColor:"#FCFCFC"},results:{width:"90%",position:"absolute",left:"50%",transform:"translate(-50%, -50%)"},divider:{height:"40vh"}}}))();return Object(a.jsx)(z,{children:function(e){return Object(a.jsxs)("div",{className:h.root,children:[Object(a.jsx)(b,{}),Object(a.jsx)(v,{search:l}),e.banners[0]?Object(a.jsx)(j.a,{severity:"success",children:"All done - you have favourited 5 movies!"}):null,e.banners[1]?Object(a.jsx)(j.a,{severity:"error",children:"Hey - you already favourited 5 movies! Remove a nomination to keep going."}):null,Object(a.jsx)("div",{className:h.divider}),Object(a.jsx)("div",{className:h.results,children:Object(a.jsxs)(d.a,{container:!0,spacing:3,children:[Object(a.jsx)(d.a,{item:!0,xs:6,children:Object(a.jsx)(Y,{movies:s,errorMessage:c})}),Object(a.jsx)(d.a,{item:!0,xs:6,children:Object(a.jsx)(K,{})})]})})]})}})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(D,{children:Object(a.jsx)(Q,{children:Object(a.jsx)($,{})})})}),document.getElementById("root")),_()}},[[71,1,2]]]);
//# sourceMappingURL=main.df22d542.chunk.js.map