import{a as h,b as g}from"./chunk-MC5TLA7E.js";import"./chunk-TIWCUDTS.js";import{d as c,g as o,j as i}from"./chunk-SO6VPFYA.js";function u(e,s="SHA-1",n="hex"){return i(this,null,function*(){let t;switch(s){case"SHA-1":{t=new r.default;break}case"SHA-256":{t=new a.default;break}}return t.update(e).digest(n)})}function d(e){return i(this,null,function*(){let n=`blob ${e.byteLength.toString()}\0`;return new r.default().update(n).update(e).digest("hex")})}var r,a,p=c(()=>{r=o(h()),a=o(g());});p();export{d as gitHashFile,u as hashFile};
