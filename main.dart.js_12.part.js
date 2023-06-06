self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
kf(d,e,f,g,h,i,j,k){return new A.Sv(k,f,g,i,d,e,j,h,null)},
Sv:function Sv(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
amp:function amp(d){this.a=d},
amo:function amo(d){this.a=d},
zb:function zb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
VM:function VM(d){var _=this
_.d=null
_.e=!0
_.a=null
_.b=d
_.c=null},
aqB:function aqB(d){this.a=d},
aMa(d){return new A.rF(d,null)},
M7:function M7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
rF:function rF(d,e){this.c=d
this.a=e},
a43:function a43(d,e){this.a=d
this.b=e},
tq:function tq(d,e){this.a=d
this.b=e},
amt:function amt(){},
aUT(d){switch(d.a){case 0:return C.E6
case 1:return C.E7
case 2:return D.a2j
case 3:return C.E8}},
df(d,e){var x=0,w=B.S(y.e),v,u,t,s,r,q
var $async$df=B.N(function(f,g){if(f===1)return B.P(g,w)
while(true)switch(x){case 0:if(e===D.qL)u=!(d.geZ()==="https"||d.geZ()==="http")
else u=!1
if(u)throw B.c(B.fp(d,"url","To use an in-app web view, you must provide an http(s) URL."))
u=$.axv()
t=d.j(0)
s=A.aUT(e)
r=C.c.bA(t,"http:")||C.c.bA(t,"https:")
if(s!==C.E7)q=r&&s===C.E6
else q=!0
v=u.xu(t,!0,!0,C.dg,s===C.E8,q,q,null)
x=1
break
case 1:return B.Q(v,w)}})
return B.R($async$df,w)},
aAi(d){var x=0,w=B.S(y.e),v
var $async$aAi=B.N(function(e,f){if(e===1)return B.P(f,w)
while(true)switch(x){case 0:v=$.axv().OO(d.j(0))
x=1
break
case 1:return B.Q(v,w)}})
return B.R($async$aAi,w)}},B,C,D
A=a.updateHolder(c[20],A)
B=c[0]
C=c[2]
D=c[30]
A.Sv.prototype={
E(d){return new A.zb(this.abO(d),this.e,this.d,null)},
abO(d){var x=this,w=null
return B.bW(w,new A.M7(new A.amp(x),B.bT(x.d,0,w),x.f,w),!1,w,!1,!1,w,w,w,x.r,w,x.w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,x.x)}}
A.zb.prototype={
ad(){return new A.VM(C.i)}}
A.VM.prototype={
E(d){var x,w,v=this,u=null,t=d.j9(y.a).e
t===$&&B.b()
if(!t)return v.a.c
x="html-link-"+v.a.e
$.o3()
$.m5().lz(x,new A.aqB(v),!0)
t=v.d
w=B.a([new B.uz(v.gFa(),v.a.c,u)],y.l)
if(v.d!=null&&v.e)w.push(new B.fw(!0,u,new B.jB(x,u),u))
return B.uA(B.dQ(C.aK,w,C.R,C.ar),t)}}
A.M7.prototype={
gahr(){return!1},
ga0T(){var x=$.axv().gRd()
return x==null?A.aVY():x},
E(d){return this.a0U(this)},
$iM8:1,
a0U(d){return this.ga0T().$1(d)}}
A.rF.prototype={
gabF(){var x=this.c.e
if(x===C.pb)return!0
if(x===C.bh)return!1
return!1},
nF(d){return this.a1z(d)},
a1z(d){var x=0,w=B.S(y.f),v,u=this,t
var $async$nF=B.N(function(e,f){if(e===1)return B.P(f,w)
while(true)switch(x){case 0:t=u.c.d
x=!t.grH()?3:4
break
case 3:x=5
return B.Y(B.aI_(d,t.j(0)),$async$nF)
case 5:x=1
break
case 4:x=9
return B.Y(A.aAi(t),$async$nF)
case 9:x=f?6:8
break
case 6:x=10
return B.Y(A.df(t,u.gabF()?D.qL:D.OV),$async$nF)
case 10:x=7
break
case 8:B.cZ(new B.bl("Could not launch link "+t.j(0),B.Rq(),"url_launcher",B.bi("during launching a link"),null,!1))
case 7:case 1:return B.Q(v,w)}})
return B.R($async$nF,w)},
E(d){return this.c.c.$2(d,new A.a43(this,d))}}
A.tq.prototype={
K(){return"LaunchMode."+this.b}}
A.amt.prototype={}
var z=a.updateTypes(["rF(M8)"])
A.amp.prototype={
$2(d,e){var x=null,w=this.a
return B.dk(B.c9(x,w.c,C.F,!1,x,x,x,x,x,x,x,x,x,x,new A.amo(w),x,x,x,x,x,x),C.aI,x,x,x)},
$S:498}
A.amo.prototype={
$0(){var x=this.a.y
if(x!=null)x.$0()},
$S:0}
A.aqB.prototype={
$1(d){var x,w,v=this.a,u=B.axL(v.a.e)
u.textContent=v.a.d
x=u.style
x.fontSize="14px"
x=u.style
x.color="#ff0000"
x=u.style
x.margin="0px"
x=u.style
x.padding="0px"
x=u.style
w=v.d
w=w==null?null:w.a
if(w==null)w=0
x.width=B.i(w)+"px"
x=u.style
v=v.d
v=v==null?null:v.b
if(v==null)v=0
x.height=B.i(v)+"px"
return u},
$S:499}
A.a43.prototype={
$0(){return this.a.nF(this.b)},
$S:41};(function installTearOffs(){var x=a._static_1
x(A,"aVY","aMa",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.ae,[A.Sv,A.M7,A.rF])
w(A.amp,B.f6)
x(B.fq,[A.amo,A.a43])
w(A.zb,B.X)
w(A.VM,B.nf)
w(A.aqB,B.bP)
w(A.tq,B.hH)
w(A.amt,B.D)})()
B.e6(b.typeUniverse,JSON.parse('{"Sv":{"ae":[],"e":[]},"zb":{"X":[],"e":[]},"VM":{"a8":["zb"],"pG":[]},"rF":{"ae":[],"e":[]},"M7":{"ae":[],"e":[],"M8":[]},"tq":{"M":[]}}'))
var y={l:B.U("q<e>"),a:B.U("qB"),e:B.U("E"),f:B.U("~")};(function constants(){D.abB=new A.amt()
D.ai=new A.tq(0,"platformDefault")
D.qL=new A.tq(1,"inAppWebView")
D.OV=new A.tq(2,"externalApplication")
D.a2j=new B.pv(2,"externalApplication")})()}
$__dart_deferred_initializers__["ZHy/8NY3TNd42bR6E9O4rR3E7eM="] = $__dart_deferred_initializers__.current
