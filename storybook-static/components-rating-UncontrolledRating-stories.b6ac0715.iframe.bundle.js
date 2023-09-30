/*! For license information please see components-rating-UncontrolledRating-stories.b6ac0715.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunklesson0=self.webpackChunklesson0||[]).push([[521],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{aD:function(){return chunk_AY7I2SME.aD}});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/rating/UncontrolledRating.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UncontrolledRatingDefault1:function(){return UncontrolledRatingDefault1},UncontrolledRatingDefault2:function(){return UncontrolledRatingDefault2},UncontrolledRatingDefault3:function(){return UncontrolledRatingDefault3},UncontrolledRatingDefault4:function(){return UncontrolledRatingDefault4},UncontrolledRatingDefault5:function(){return UncontrolledRatingDefault5},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UncontrolledRating_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),Rating=__webpack_require__("./src/components/rating/Rating.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UncontrolledRating=function UncontrolledRating(props){var _useState=(0,react.useState)(props.defaultValue?props.defaultValue:0),_useState2=(0,slicedToArray.Z)(_useState,2),rating=_useState2[0],setRating=_useState2[1],handleRatingChange=function handleRatingChange(value){return function(){return setRating(rating===value?0:value)}};return(0,jsx_runtime.jsx)("div",{children:[1,2,3,4,5].map((function(value){return(0,jsx_runtime.jsx)(Rating.U,{selected:rating>=value,onClick:handleRatingChange(value),value:0},value)}))})};try{UncontrolledRating.displayName="UncontrolledRating",UncontrolledRating.__docgenInfo={description:"",displayName:"UncontrolledRating",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"}]}},callback:{defaultValue:null,description:"",name:"callback",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/rating/UncontrolledRating.tsx#UncontrolledRating"]={docgenInfo:UncontrolledRating.__docgenInfo,name:"UncontrolledRating",path:"src/components/rating/UncontrolledRating.tsx#UncontrolledRating"})}catch(__react_docgen_typescript_loader_error){}var _UncontrolledRatingDe,_UncontrolledRatingDe2,_UncontrolledRatingDe3,_UncontrolledRatingDe4,_UncontrolledRatingDe5,_UncontrolledRatingDe6,_UncontrolledRatingDe7,_UncontrolledRatingDe8,_UncontrolledRatingDe9,_UncontrolledRatingDe10,_UncontrolledRatingDe11,_UncontrolledRatingDe12,_UncontrolledRatingDe13,_UncontrolledRatingDe14,_UncontrolledRatingDe15,dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),UncontrolledRating_stories={title:"Components/UncontrolledRating",component:UncontrolledRating},onChangeHandler=(0,dist.aD)("onChange"),UncontrolledRatingDefault1=function UncontrolledRatingDefault1(){return(0,jsx_runtime.jsx)(UncontrolledRating,{defaultValue:1,callback:onChangeHandler})},UncontrolledRatingDefault2=function UncontrolledRatingDefault2(){return(0,jsx_runtime.jsx)(UncontrolledRating,{defaultValue:2,callback:onChangeHandler})},UncontrolledRatingDefault3=function UncontrolledRatingDefault3(){return(0,jsx_runtime.jsx)(UncontrolledRating,{defaultValue:3,callback:onChangeHandler})},UncontrolledRatingDefault4=function UncontrolledRatingDefault4(){return(0,jsx_runtime.jsx)(UncontrolledRating,{defaultValue:4,callback:onChangeHandler})},UncontrolledRatingDefault5=function UncontrolledRatingDefault5(){return(0,jsx_runtime.jsx)(UncontrolledRating,{defaultValue:5,callback:onChangeHandler})};UncontrolledRatingDefault1.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},UncontrolledRatingDefault1.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_UncontrolledRatingDe=UncontrolledRatingDefault1.parameters)||void 0===_UncontrolledRatingDe?void 0:_UncontrolledRatingDe.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <UncontrolledRating defaultValue={1} callback={onChangeHandler} />"},null===(_UncontrolledRatingDe2=UncontrolledRatingDefault1.parameters)||void 0===_UncontrolledRatingDe2||null===(_UncontrolledRatingDe3=_UncontrolledRatingDe2.docs)||void 0===_UncontrolledRatingDe3?void 0:_UncontrolledRatingDe3.source)})}),UncontrolledRatingDefault2.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},UncontrolledRatingDefault2.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_UncontrolledRatingDe4=UncontrolledRatingDefault2.parameters)||void 0===_UncontrolledRatingDe4?void 0:_UncontrolledRatingDe4.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <UncontrolledRating defaultValue={2} callback={onChangeHandler} />"},null===(_UncontrolledRatingDe5=UncontrolledRatingDefault2.parameters)||void 0===_UncontrolledRatingDe5||null===(_UncontrolledRatingDe6=_UncontrolledRatingDe5.docs)||void 0===_UncontrolledRatingDe6?void 0:_UncontrolledRatingDe6.source)})}),UncontrolledRatingDefault3.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},UncontrolledRatingDefault3.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_UncontrolledRatingDe7=UncontrolledRatingDefault3.parameters)||void 0===_UncontrolledRatingDe7?void 0:_UncontrolledRatingDe7.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <UncontrolledRating defaultValue={3} callback={onChangeHandler} />"},null===(_UncontrolledRatingDe8=UncontrolledRatingDefault3.parameters)||void 0===_UncontrolledRatingDe8||null===(_UncontrolledRatingDe9=_UncontrolledRatingDe8.docs)||void 0===_UncontrolledRatingDe9?void 0:_UncontrolledRatingDe9.source)})}),UncontrolledRatingDefault4.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},UncontrolledRatingDefault4.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_UncontrolledRatingDe10=UncontrolledRatingDefault4.parameters)||void 0===_UncontrolledRatingDe10?void 0:_UncontrolledRatingDe10.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <UncontrolledRating defaultValue={4} callback={onChangeHandler} />"},null===(_UncontrolledRatingDe11=UncontrolledRatingDefault4.parameters)||void 0===_UncontrolledRatingDe11||null===(_UncontrolledRatingDe12=_UncontrolledRatingDe11.docs)||void 0===_UncontrolledRatingDe12?void 0:_UncontrolledRatingDe12.source)})}),UncontrolledRatingDefault5.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},UncontrolledRatingDefault5.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_UncontrolledRatingDe13=UncontrolledRatingDefault5.parameters)||void 0===_UncontrolledRatingDe13?void 0:_UncontrolledRatingDe13.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <UncontrolledRating defaultValue={5} callback={onChangeHandler} />"},null===(_UncontrolledRatingDe14=UncontrolledRatingDefault5.parameters)||void 0===_UncontrolledRatingDe14||null===(_UncontrolledRatingDe15=_UncontrolledRatingDe14.docs)||void 0===_UncontrolledRatingDe15?void 0:_UncontrolledRatingDe15.source)})});var __namedExportsOrder=["UncontrolledRatingDefault1","UncontrolledRatingDefault2","UncontrolledRatingDefault3","UncontrolledRatingDefault4","UncontrolledRatingDefault5"]},"./src/components/rating/Rating.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:function(){return Star},i:function(){return Rating}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Rating=function Rating(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:[1,2,3,4,5].map((function(value){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Star,{selected:props.value>=value,onClick:props.onClick,value:value},value)}))})},Star=function Star(props){console.log("Star rendering");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{onClick:function handleClick(){return props.onClick(props.value)},children:props.selected?"★":"☆"})};try{Rating.displayName="Rating",Rating.__docgenInfo={description:"",displayName:"Rating",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(value: RatingValueType) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/rating/Rating.tsx#Rating"]={docgenInfo:Rating.__docgenInfo,name:"Rating",path:"src/components/rating/Rating.tsx#Rating"})}catch(__react_docgen_typescript_loader_error){}try{Star.displayName="Star",Star.__docgenInfo={description:"",displayName:"Star",props:{selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(value: RatingValueType) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/rating/Rating.tsx#Star"]={docgenInfo:Star.__docgenInfo,name:"Star",path:"src/components/rating/Rating.tsx#Star"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);