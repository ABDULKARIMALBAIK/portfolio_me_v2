self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={Cw:function Cw(d,e){this.a=d
this.b=e},Cx:function Cx(d,e){this.a=d
this.b=e},EC:function EC(d,e,f){this.a=d
this.b=e
this.c=f},kh:function kh(d,e,f){var _=this
_.e=0
_.be$=d
_.a_$=e
_.a=f},Qc:function Qc(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.M=d
_.a2=e
_.aa=f
_.ao=g
_.aI=h
_.aZ=i
_.b9=j
_.bH=k
_.bQ=l
_.aS=!1
_.bi=m
_.b0$=n
_.X$=o
_.bh$=p
_.k1=_.id=null
_.k2=!1
_.k4=_.k3=null
_.ok=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=q
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},Y3:function Y3(){},Y4:function Y4(){},
bF(d,e,f,g,h,i,j){return new A.SC(g,d,j,h,i,f,e,null)},
SC:function SC(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.c=j
_.a=k}},C,B,D
A=a.updateHolder(c[21],A)
C=c[2]
B=c[0]
D=c[32]
A.Cw.prototype={
K(){return"WrapAlignment."+this.b}}
A.Cx.prototype={
K(){return"WrapCrossAlignment."+this.b}}
A.EC.prototype={}
A.kh.prototype={}
A.Qc.prototype={
saeR(d,e){if(this.M===e)return
this.M=e
this.a0()},
si9(d){if(this.a2===d)return
this.a2=d
this.a0()},
sUP(d,e){if(this.aa===e)return
this.aa=e
this.a0()},
sakB(d){if(this.ao===d)return
this.ao=d
this.a0()},
sakG(d){if(this.aI===d)return
this.aI=d
this.a0()},
sael(d){if(this.aZ===d)return
this.aZ=d
this.a0()},
dZ(d){if(!(d.e instanceof A.kh))d.e=new A.kh(null,null,C.e)},
e5(d){return this.Dp(d)},
AN(d){switch(this.M.a){case 0:return d.a
case 1:return d.b}},
AM(d){switch(this.M.a){case 0:return d.b
case 1:return d.a}},
a21(d,e){switch(this.M.a){case 0:return new B.j(d,e)
case 1:return new B.j(e,d)}},
a1O(d,e,f){var x=e-f
switch(this.aZ.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
cc(d){return this.a_N(d)},
a_N(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.M.a){case 0:x=d.b
w=new B.ax(0,x,0,1/0)
break
case 1:x=d.d
w=new B.ax(0,1/0,0,x)
break
default:w=null
x=0}v=k.X$
for(u=B.m(k).i("aq.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.aC4(v,w)
n=k.AN(o)
m=k.AM(o)
if(p>0&&r+n+k.aa>x){t=Math.max(t,r)
s+=q+k.aI
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.aa;++p
l=v.e
l.toString
v=u.a(l).a_$}s+=q
t=Math.max(t,r)
switch(k.M.a){case 0:return d.bs(new B.K(t,s))
case 1:return d.bs(new B.K(s,t))}},
bz(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.u.prototype.ga3.call(b1))
b1.aS=!1
x=b1.X$
if(x==null){b1.k3=new B.K(B.L(0,b2.a,b2.b),B.L(0,b2.c,b2.d))
return}switch(b1.M.a){case 0:w=b2.b
v=new B.ax(0,w,0,1/0)
u=b1.b9===C.a7&&!0
t=b1.bH===C.ot&&!0
break
case 1:w=b2.d
v=new B.ax(0,1/0,0,w)
u=b1.bH===C.ot&&!0
t=b1.b9===C.a7&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.aa
r=b1.aI
q=B.a([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.bS(v,!0)
j=x.k3
j.toString
i=b1.AN(j)
j=x.k3
j.toString
h=b1.AM(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.EC(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.a_$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.EC(m,l,k))}g=q.length
switch(b1.M.a){case 0:j=b1.k3=b2.bs(new B.K(o,n))
f=j.a
e=j.b
break
case 1:j=b1.k3=b2.bs(new B.K(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.aS=f<o||e<n
d=Math.max(0,e-n)
switch(b1.ao.a){case 0:a0=0
a1=0
break
case 1:a0=d
a1=0
break
case 2:a0=d/2
a1=0
break
case 3:a1=g>1?d/(g-1):0
a0=0
break
case 4:a1=d/g
a0=a1/2
break
case 5:a1=d/(g+1)
a0=a1
break
default:a0=0
a1=0}a1+=r
a2=t?e-a0:a0
x=b1.X$
for(a3=0;a3<g;++a3){a4=q[a3]
l=a4.b
k=a4.c
a5=Math.max(0,f-a4.a)
switch(b1.a2.a){case 0:a6=0
a7=0
break
case 1:a6=a5
a7=0
break
case 2:a6=a5/2
a7=0
break
case 3:a7=k>1?a5/(k-1):0
a6=0
break
case 4:a7=a5/k
a6=a7/2
break
case 5:a7=a5/(k+1)
a6=a7
break
default:a6=0
a7=0}a7+=s
a8=u?f-a6:a6
if(t)a2-=l
for(;x!=null;){j=x.e
j.toString
p.a(j)
if(j.e!==a3)break
a9=x.k3
a9.toString
i=b1.AN(a9)
a9=x.k3
a9.toString
b0=b1.a1O(t,l,b1.AM(a9))
if(u)a8-=i
j.a=b1.a21(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.a_$}a2=t?a2-a1:a2+(l+a1)}},
cA(d,e){return this.wC(d,e)},
aN(d,e){var x,w=this,v=w.aS&&w.bQ!==C.t,u=w.bi
if(v){v=w.cx
v===$&&B.b()
x=w.k3
u.saL(0,d.ko(v,e,new B.v(0,0,0+x.a,0+x.b),w.gPr(),w.bQ,u.a))}else{u.saL(0,null)
w.ow(d,e)}},
m(){this.bi.saL(0,null)
this.f0()}}
A.Y3.prototype={
ap(d){var x,w,v
this.dw(d)
x=this.X$
for(w=y.e;x!=null;){x.ap(d)
v=x.e
v.toString
x=w.a(v).a_$}},
am(d){var x,w,v
this.d6(0)
x=this.X$
for(w=y.e;x!=null;){x.am(0)
v=x.e
v.toString
x=w.a(v).a_$}}}
A.Y4.prototype={}
A.SC.prototype={
aP(d){var x=this,w=B.dv(d)
w=new A.Qc(x.e,x.f,x.r,x.w,x.x,x.y,w,C.eh,C.t,B.am(),0,null,null,B.am())
w.aO()
w.T(0,null)
return w},
aQ(d,e){var x,w=this
e.saeR(0,w.e)
e.si9(w.f)
e.sUP(0,w.r)
e.sakB(w.w)
e.sakG(w.x)
e.sael(w.y)
x=B.dv(d)
if(e.b9!=x){e.b9=x
e.a0()}if(e.bH!==C.eh){e.bH=C.eh
e.a0()}if(C.t!==e.bQ){e.bQ=C.t
e.aq()
e.bb()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.hH,[A.Cw,A.Cx])
u(A.EC,B.D)
u(A.kh,B.rw)
u(A.Y3,B.B)
u(A.Y4,A.Y3)
u(A.Qc,A.Y4)
u(A.SC,B.ey)
x(A.Y3,B.aq)
w(A.Y4,B.cx)})()
B.e6(b.typeUniverse,JSON.parse('{"kh":{"eI":[],"eL":["B"],"cw":[]},"Cw":{"M":[]},"Cx":{"M":[]},"Qc":{"cx":["B","kh"],"B":[],"aq":["B","kh"],"u":[],"J":[],"ai":[],"aq.1":"kh","cx.1":"kh","aq.0":"B"},"SC":{"ey":[],"au":[],"e":[]}}'))
var y={a:B.U("ax"),l:B.U("q<EC>"),e:B.U("kh")};(function constants(){D.p=new A.Cw(0,"start")
D.cx=new A.Cw(2,"center")
D.aak=new A.Cx(0,"start")
D.I=new A.Cx(2,"center")})()}
$__dart_deferred_initializers__["1ePnyyPoMhzIF3OA77q4Xfj3x4U="] = $__dart_deferred_initializers__.current
