(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{21:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__2IZUW"}},23:function(e,a,t){e.exports={App:"App_App__1r56j"}},24:function(e,a,t){e.exports={Button:"LoadMoreBtn_Button__18fhh"}},25:function(e,a,t){e.exports=t(49)},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(20),c=t.n(o),l=t(10),i=t(2),s=t(3),m=t(5),u=t(4),h=t(6),p=t(7),g=t.n(p),d=function(e){var a=e.value,t=e.onChange,n=e.onSubmit;return r.a.createElement("header",{className:g.a.Searchbar},r.a.createElement("form",{className:g.a.SearchForm,onSubmit:n},r.a.createElement("button",{type:"submit",className:g.a.SearchFormButton},r.a.createElement("span",{className:g.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:g.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:a,onChange:t})))},f=t(21),b=t.n(f),y=t(8),_=t.n(y),v=function(e){var a=e.onOpen,t=e.image;return r.a.createElement("li",{className:_.a.ImageGalleryItem},r.a.createElement("img",{onClick:a,src:t.webformatURL,alt:t.tags,className:_.a.ImageGalleryItemImage,"data-big":t.largeImageURL}))},S=t(9),I=t.n(S),O=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).backDropRef=Object(n.createRef)(),t.handleKeyPress=function(e){"Escape"===e.code&&t.props.onClose()},t.hendleBackdropClick=function(e){var a=t.backDropRef.current;a&&e.target!==a||t.props.onClose()},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillMount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){return r.a.createElement("div",{className:I.a.Overlay,ref:this.backDropRef,onClick:this.hendleBackdropClick},r.a.createElement("img",{src:this.props.image,alt:this.props.tags,className:I.a.Modal}))}}]),a}(n.Component),E=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={isModalOpen:!1,bigImage:"",tags:""},t.openModal=function(e){t.setState({bigImage:e.target.dataset.big,tags:e.target.alt,isModalOpen:!0})},t.closeModal=function(){t.setState({isModalOpen:!1})},t.listRef=Object(n.createRef)(),t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,a){e.images!==this.props.images&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,a=this.state,t=a.bigImage,o=a.tags;return r.a.createElement(n.Fragment,null,this.state.isModalOpen&&r.a.createElement(O,{image:t,tags:o,onClose:this.closeModal}),r.a.createElement("ul",{ref:this.listRef,className:b.a.ImageGallery},this.props.images.length>0&&this.props.images.map((function(a){return r.a.createElement(v,{onOpen:e.openModal,key:a.id,image:a})}))))}}]),a}(n.Component),k=t(22),j=t.n(k),C=t(23),F=t.n(C),w=t(24),M=t.n(w),N=function(e){var a=e.onClick;return r.a.createElement("button",{className:M.a.Button,type:"submit",onClick:a},r.a.createElement("span",null,"Load more"))},x=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={images:[],searchField:"",query:"",page:1,pixabayKey:"15899429-285d303a29400aacd77e83367"},t.fetchArticlies=function(){j.a.get("https://pixabay.com/api/?q=".concat(t.state.query,"&page=").concat(t.state.page,"&key=").concat(t.state.pixabayKey,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return t.setState((function(a){return{images:[].concat(Object(l.a)(a.images),Object(l.a)(e.data.hits))}}))})),t.setState((function(e){return{page:e.page+1}}))},t.hendleQueryChange=function(e){t.setState({query:e.target.value,searchField:e.target.value})},t.hendleQuerySubmit=function(e){e.preventDefault(),t.setState({images:[],page:1}),t.fetchArticlies(),t.setState({searchField:""})},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.searchField,t=e.images;return r.a.createElement("div",{className:F.a.App},r.a.createElement(d,{value:a,onChange:this.hendleQueryChange,onSubmit:this.hendleQuerySubmit}),r.a.createElement(E,{images:t}),t.length>0&&r.a.createElement(N,{onClick:this.fetchArticlies}))}}]),a}(n.Component);t(47),t(48);c.a.render(r.a.createElement(n.Fragment,null,r.a.createElement(x,null)),document.querySelector("#root"))},7:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__hOtnU",SearchForm:"Searchbar_SearchForm__3xzZH",SearchFormButton:"Searchbar_SearchFormButton__LLg3j",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3_VNt",SearchFormInput:"Searchbar_SearchFormInput__2LhBr"}},8:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3lbNz",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3wJj8"}},9:function(e,a,t){e.exports={Overlay:"Modal_Overlay__2kJU6",Modal:"Modal_Modal__3yvxE"}}},[[25,1,2]]]);
//# sourceMappingURL=main.fe5479df.chunk.js.map