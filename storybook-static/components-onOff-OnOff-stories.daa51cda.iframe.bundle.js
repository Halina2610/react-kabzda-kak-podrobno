/*! For license information please see components-onOff-OnOff-stories.daa51cda.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunklesson0=self.webpackChunklesson0||[]).push([[464],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{aD:function(){return chunk_AY7I2SME.aD}});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/onOff/OnOff.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OffMode:function(){return OffMode},OnMode:function(){return OnMode},OnOffDemo:function(){return OnOffDemo},OnOffUncontroled:function(){return OnOffUncontroled},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return OnOff_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),OnOff=function OnOff(props){var onStyle={width:"30px",height:"20px",border:"1px solid black",padding:"5px",backgroundColor:props.value?"lightgreen":"white"},offStyle={width:"30px",height:"20px",padding:"5px",border:"1px solid black",backgroundColor:props.value?"white":"red"},indicatorStyle={width:"20px",height:"20px",borderRadius:"10px",border:"1px solid black",backgroundColor:props.value?"lightgreen":"red"};return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"10px",alignItems:"center",marginTop:"100px"},children:[(0,jsx_runtime.jsx)("button",{style:onStyle,onClick:function onClickOn(){return props.callback(!0)},children:"On"}),(0,jsx_runtime.jsx)("button",{style:offStyle,onClick:function onClickOff(){return props.callback(!1)},children:"Off"}),(0,jsx_runtime.jsx)("button",{style:indicatorStyle})]})};try{OnOff.displayName="OnOff",OnOff.__docgenInfo={description:"",displayName:"OnOff",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"(value: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/onOff/OnOff.tsx#OnOff"]={docgenInfo:OnOff.__docgenInfo,name:"OnOff",path:"src/components/onOff/OnOff.tsx#OnOff"})}catch(__react_docgen_typescript_loader_error){}var _OnOffDemo$parameters,_OnOffDemo$parameters2,_OnOffDemo$parameters3,_OnOffUncontroled$par,_OnOffUncontroled$par2,_OnOffUncontroled$par3,_OnMode$parameters,_OnMode$parameters2,_OnMode$parameters2$d,_OffMode$parameters,_OffMode$parameters2,_OffMode$parameters2$,UncontrolledOnOff=__webpack_require__("./src/components/onOff/UncontrolledOnOff.tsx"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),OnOff_stories={title:"Components/OnOff",component:OnOff},OnOffDemo=function OnOffDemo(){var _useState=(0,react.useState)(!0),_useState2=(0,slicedToArray.Z)(_useState,2),controlledOnOff=_useState2[0],setControlledOnOff=_useState2[1];return(0,jsx_runtime.jsx)(OnOff,{value:controlledOnOff,callback:function controlledCallback(){setControlledOnOff(!controlledOnOff)}})},OnOffUncontroled=function OnOffUncontroled(){var _useState3=(0,react.useState)(!0),_useState4=(0,slicedToArray.Z)(_useState3,2),controlledOnOff=_useState4[0],setControlledOnOff=_useState4[1];return(0,jsx_runtime.jsx)(UncontrolledOnOff.k,{onChange:function controlledCallback(){setControlledOnOff(!controlledOnOff)}})},OnMode=function OnMode(){return(0,jsx_runtime.jsx)(OnOff,{value:!0,callback:(0,dist.aD)("clicked")})},OffMode=function OffMode(){return(0,jsx_runtime.jsx)(OnOff,{value:!1,callback:(0,dist.aD)("clicked")})};OnOffDemo.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},OnOffDemo.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_OnOffDemo$parameters=OnOffDemo.parameters)||void 0===_OnOffDemo$parameters?void 0:_OnOffDemo$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => {\n  const [controlledOnOff, setControlledOnOff] = useState<boolean>(true);\n  const controlledCallback = () => {\n    setControlledOnOff(!controlledOnOff);\n  };\n  return <OnOff value={controlledOnOff} callback={controlledCallback} />;\n}"},null===(_OnOffDemo$parameters2=OnOffDemo.parameters)||void 0===_OnOffDemo$parameters2||null===(_OnOffDemo$parameters3=_OnOffDemo$parameters2.docs)||void 0===_OnOffDemo$parameters3?void 0:_OnOffDemo$parameters3.source)})}),OnOffUncontroled.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},OnOffUncontroled.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_OnOffUncontroled$par=OnOffUncontroled.parameters)||void 0===_OnOffUncontroled$par?void 0:_OnOffUncontroled$par.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => {\n  const [controlledOnOff, setControlledOnOff] = useState<boolean>(true);\n  const controlledCallback = () => {\n    setControlledOnOff(!controlledOnOff);\n  };\n  return <UncontrolledOnOff onChange={controlledCallback} />;\n}"},null===(_OnOffUncontroled$par2=OnOffUncontroled.parameters)||void 0===_OnOffUncontroled$par2||null===(_OnOffUncontroled$par3=_OnOffUncontroled$par2.docs)||void 0===_OnOffUncontroled$par3?void 0:_OnOffUncontroled$par3.source)})}),OnMode.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},OnMode.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_OnMode$parameters=OnMode.parameters)||void 0===_OnMode$parameters?void 0:_OnMode$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <OnOff value={true} callback={action('clicked')} />"},null===(_OnMode$parameters2=OnMode.parameters)||void 0===_OnMode$parameters2||null===(_OnMode$parameters2$d=_OnMode$parameters2.docs)||void 0===_OnMode$parameters2$d?void 0:_OnMode$parameters2$d.source)})}),OffMode.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},OffMode.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_OffMode$parameters=OffMode.parameters)||void 0===_OffMode$parameters?void 0:_OffMode$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <OnOff value={false} callback={action('clicked')} />"},null===(_OffMode$parameters2=OffMode.parameters)||void 0===_OffMode$parameters2||null===(_OffMode$parameters2$=_OffMode$parameters2.docs)||void 0===_OffMode$parameters2$?void 0:_OffMode$parameters2$.source)})});var __namedExportsOrder=["OnOffDemo","OnOffUncontroled","OnMode","OffMode"]},"./src/components/onOff/UncontrolledOnOff.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{k:function(){return UncontrolledOnOff}});var D_IT_INCUBATOR_react_kabzda_kak_podrobno_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),UncontrolledOnOff=function UncontrolledOnOff(props){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState2=(0,D_IT_INCUBATOR_react_kabzda_kak_podrobno_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_useState,2),on=_useState2[0],setOn=_useState2[1],onStyle={width:"30px",height:"20px",border:"1px solid black",padding:"5px",backgroundColor:on?"lightgreen":"white"},offStyle={width:"30px",height:"20px",padding:"5px",border:"1px solid black",backgroundColor:on?"white":"red"},indikatorStyle={width:"20px",height:"20px",borderRadius:"10px",border:"1px solid black",backgroundColor:on?"lightgreen":"red"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:"flex",gap:"10px",alignItems:"center",marginTop:"100px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{style:onStyle,onClick:function handleClickOn(){return setOn(!0)},children:"On"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{style:offStyle,onClick:function handleClickOff(){return setOn(!1)},children:"Off"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{style:indikatorStyle,onClick:function handleClick(){setOn(!on),props.onChange(!on)}})]})};try{UncontrolledOnOff.displayName="UncontrolledOnOff",UncontrolledOnOff.__docgenInfo={description:"",displayName:"UncontrolledOnOff",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(on: boolean) => void"}},defaultOn:{defaultValue:null,description:"",name:"defaultOn",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/onOff/UncontrolledOnOff.tsx#UncontrolledOnOff"]={docgenInfo:UncontrolledOnOff.__docgenInfo,name:"UncontrolledOnOff",path:"src/components/onOff/UncontrolledOnOff.tsx#UncontrolledOnOff"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);