(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cfff12a"],{"0ccb":function(e,t,r){var n=r("50c4"),a=r("1148"),s=r("1d80"),o=Math.ceil,l=function(e){return function(t,r,l){var i,c,u=String(s(t)),d=u.length,p=void 0===l?" ":String(l),m=n(r);return m<=d||""==p?u:(i=m-d,c=a.call(p,o(i/p.length)),c.length>i&&(c=c.slice(0,i)),e?u+c:c+u)}};e.exports={start:l(!1),end:l(!0)}},"0feb":function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"a",(function(){return s})),r.d(t,"e",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return i}));var n=r("b775");function a(e){return Object(n["a"])({url:"/sys/permission",params:e})}function s(e){return Object(n["a"])({url:"/sys/permission",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/sys/permission/".concat(e.id),method:"put",data:e})}function l(e){return Object(n["a"])({url:"/sys/permission/".concat(e),method:"delete"})}function i(e){return Object(n["a"])({url:"/sys/permission/".concat(e)})}},1276:function(e,t,r){"use strict";var n=r("d784"),a=r("44e7"),s=r("825a"),o=r("1d80"),l=r("4840"),i=r("8aa5"),c=r("50c4"),u=r("14c3"),d=r("9263"),p=r("d039"),m=[].push,f=Math.min,h=4294967295,b=!p((function(){return!RegExp(h,"y")}));n("split",2,(function(e,t,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var n=String(o(this)),s=void 0===r?h:r>>>0;if(0===s)return[];if(void 0===e)return[n];if(!a(e))return t.call(n,e,s);var l,i,c,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,b=new RegExp(e.source,p+"g");while(l=d.call(b,n)){if(i=b.lastIndex,i>f&&(u.push(n.slice(f,l.index)),l.length>1&&l.index<n.length&&m.apply(u,l.slice(1)),c=l[0].length,f=i,u.length>=s))break;b.lastIndex===l.index&&b.lastIndex++}return f===n.length?!c&&b.test("")||u.push(""):u.push(n.slice(f)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var a=o(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,a,r):n.call(String(a),t,r)},function(e,a){var o=r(n,e,this,a,n!==t);if(o.done)return o.value;var d=s(e),p=String(this),m=l(d,RegExp),g=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(b?"y":"g"),x=new m(b?d:"^(?:"+d.source+")",v),w=void 0===a?h:a>>>0;if(0===w)return[];if(0===p.length)return null===u(x,p)?[p]:[];var y=0,k=0,O=[];while(k<p.length){x.lastIndex=b?k:0;var j,D=u(x,b?p:p.slice(k));if(null===D||(j=f(c(x.lastIndex+(b?0:k)),p.length))===y)k=i(p,k,g);else{if(O.push(p.slice(y,k)),O.length===w)return O;for(var R=1;R<=D.length-1;R++)if(O.push(D[R]),O.length===w)return O;k=y=j}}return O.push(p.slice(y)),O}]}),!b)},"4d90":function(e,t,r){"use strict";var n=r("23e7"),a=r("0ccb").start,s=r("9a0c");n({target:"String",proto:!0,forced:s},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},7424:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard-container"},[r("div",{staticClass:"app-container"},[r("el-card",[r("el-tabs",[r("el-tab-pane",{attrs:{label:"角色管理"}},[r("el-row",{staticStyle:{height:"60px"}},[r("el-button",{attrs:{icon:"el-icon-plus",size:"small",type:"primary"},on:{click:function(t){e.showDialog=!0}}},[e._v("新增角色")])],1),r("el-table",{attrs:{border:"",data:e.list}},[r("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"120"}}),r("el-table-column",{attrs:{align:"center",prop:"name",label:"名称",width:"240"}}),r("el-table-column",{attrs:{align:"center",prop:"description",label:"描述"}}),r("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-button",{attrs:{size:"small",type:"success"},on:{click:function(t){return e.assignPerm(n.id)}}},[e._v("分配权限")]),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.editRole(n.id)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.deleteRole(n.id)}}},[e._v("删除")])]}}])})],1),r("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",justify:"center",align:"middle"}},[r("el-pagination",{attrs:{"current-page":e.page.page,"page-size":e.page.pagesize,total:e.page.total,layout:"prev, pager, next"},on:{"current-change":e.changePage}})],1)],1),r("el-tab-pane",{attrs:{label:"公司信息"}},[r("el-alert",{attrs:{title:"对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改",type:"info","show-icon":"",closable:!1}}),r("el-form",{staticStyle:{"margin-top":"50px"},attrs:{"label-width":"120px"}},[r("el-form-item",{attrs:{label:"公司名称"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{disabled:""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),r("el-form-item",{attrs:{label:"公司地址"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{disabled:""},model:{value:e.formData.companyAddress,callback:function(t){e.$set(e.formData,"companyAddress",t)},expression:"formData.companyAddress"}})],1),r("el-form-item",{attrs:{label:"邮箱"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{disabled:""},model:{value:e.formData.mailbox,callback:function(t){e.$set(e.formData,"mailbox",t)},expression:"formData.mailbox"}})],1),r("el-form-item",{attrs:{label:"备注"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:3,disabled:""},model:{value:e.formData.remarks,callback:function(t){e.$set(e.formData,"remarks",t)},expression:"formData.remarks"}})],1)],1)],1)],1)],1)],1),r("el-dialog",{attrs:{title:"编辑弹层",visible:e.showDialog},on:{close:e.btnCancel}},[r("el-form",{ref:"roleForm",attrs:{model:e.roleForm,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[r("el-input",{model:{value:e.roleForm.name,callback:function(t){e.$set(e.roleForm,"name",t)},expression:"roleForm.name"}})],1),r("el-form-item",{attrs:{label:"角色描述"}},[r("el-input",{model:{value:e.roleForm.description,callback:function(t){e.$set(e.roleForm,"description",t)},expression:"roleForm.description"}})],1)],1),r("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[r("el-col",{attrs:{span:6}},[r("el-button",{attrs:{size:"small"},on:{click:e.btnCancel}},[e._v("取消")]),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.btnOK}},[e._v("确定")])],1)],1)],1),r("el-dialog",{attrs:{title:"分配权限",visible:e.showPermDialog},on:{close:e.btnPermCancel}},[r("el-tree",{ref:"permTree",attrs:{data:e.permData,props:e.defaultProps,"show-checkbox":!0,"check-strictly":!0,"default-expand-all":!0,"default-checked-keys":e.selectCheck,"node-key":"id"}}),r("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[r("el-col",{attrs:{span:6}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.btnPermOK}},[e._v("确定")]),r("el-button",{attrs:{size:"small"},on:{click:e.btnPermCancel}},[e._v("取消")])],1)],1)],1)],1)},a=[],s=r("1da1"),o=r("5530"),l=(r("96cf"),r("90e7")),i=r("2f62"),c=r("ed08"),u=r("0feb"),d={data:function(){return{list:[],page:{page:1,pagesize:10,total:0},formData:{},showDialog:!1,showPermDialog:!1,roleForm:{},rules:{name:[{required:!0,message:"角色名称不能为空",trigger:"blur"}]},defaultProps:{label:"name"},permData:[],selectCheck:[],roleId:null}},computed:Object(o["a"])({},Object(i["d"])(["companyId"])),created:function(){this.getRoleList(),this.getCompanyInfo()},methods:{getRoleList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["f"])(e.page);case 2:r=t.sent,n=r.total,a=r.rows,e.page.total=n,e.list=a;case 7:case"end":return t.stop()}}),t)})))()},changePage:function(e){this.page.page=e,this.getRoleList()},getCompanyInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["d"])(e.companyId);case 2:e.formData=t.sent;case 3:case"end":return t.stop()}}),t)})))()},deleteRole:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$confirm("确认删除该角色吗");case 3:return r.next=5,Object(l["c"])(e);case 5:t.getRoleList(),t.$message.success("删除角色成功"),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},editRole:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(l["e"])(e);case 2:t.roleForm=r.sent,t.showDialog=!0;case 4:case"end":return r.stop()}}),r)})))()},btnOK:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.roleForm.validate();case 3:if(!e.roleForm.id){t.next=8;break}return t.next=6,Object(l["g"])(e.roleForm);case 6:t.next=10;break;case 8:return t.next=10,Object(l["a"])(e.roleForm);case 10:e.getRoleList(),e.$message.success("操作成功"),e.showDialog=!1,t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()},btnCancel:function(){this.roleForm={name:"",description:""},this.$refs.roleForm.resetFields(),this.showDialog=!1},assignPerm:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.t0=c["a"],r.next=3,Object(u["d"])();case 3:return r.t1=r.sent,t.permData=(0,r.t0)(r.t1,"0"),t.roleId=e,r.next=8,Object(l["e"])(e);case 8:n=r.sent,a=n.permIds,t.selectCheck=a,t.showPermDialog=!0;case 12:case"end":return r.stop()}}),r)})))()},btnPermOK:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["b"])({permIds:e.$refs.permTree.getCheckedKeys(),id:e.roleId});case 2:e.$message.success("分配权限成功"),e.showPermDialog=!1;case 4:case"end":return t.stop()}}),t)})))()},btnPermCancel:function(){this.selectCheck=[],this.showPermDialog=!1}}},p=d,m=r("2877"),f=Object(m["a"])(p,n,a,!1,null,"4d44dbcf",null);t["default"]=f.exports},"90e7":function(e,t,r){"use strict";r.d(t,"f",(function(){return a})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return o})),r.d(t,"g",(function(){return l})),r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u}));var n=r("b775");function a(e){return Object(n["a"])({url:"/sys/role",params:e})}function s(e){return Object(n["a"])({url:"/company/".concat(e)})}function o(e){return Object(n["a"])({url:"/sys/role/".concat(e),method:"delete"})}function l(e){return Object(n["a"])({url:"/sys/role/".concat(e.id),data:e,method:"put"})}function i(e){return Object(n["a"])({url:"/sys/role/".concat(e)})}function c(e){return Object(n["a"])({url:"/sys/role",data:e,method:"post"})}function u(e){return Object(n["a"])({url:"/sys/role/assignPrem",method:"put",data:e})}},"9a0c":function(e,t,r){var n=r("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("53ca"),r("ac1f"),r("00b4"),r("5319"),r("4d63"),r("2c3e"),r("25f0"),r("d3b7"),r("4d90"),r("1276"),r("159b");function n(e,t){var r=[];return e.forEach((function(a){if(a.pid===t){var s=n(e,a.id);s.length>0&&(a.children=s),r.push(a)}})),r}}}]);