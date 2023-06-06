self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={m7:function m7(d,e){this.a=d
this.b=e},
kD(d,e,f,g,h,i,j){var x,w,v=null
if(g==null)x=e!=null?new B.bV(e,v,v,v,v,v,C.a6):v
else x=g
w=B.jl(i,j)
return new A.wy(d,x,w,f,h,v,v)},
oh:function oh(d,e){this.a=d
this.b=e},
mn:function mn(d,e){this.a=d
this.b=e},
p9:function p9(d,e){this.a=d
this.b=e},
wy:function wy(d,e,f,g,h,i,j){var _=this
_.r=d
_.y=e
_.Q=f
_.c=g
_.d=h
_.e=i
_.a=j},
SO:function SO(d,e,f){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.dS$=d
_.bD$=e
_.a=null
_.b=f
_.c=null},
amG:function amG(){},
amH:function amH(){},
amI:function amI(){},
amJ:function amJ(){},
amK:function amK(){},
amL:function amL(){},
amM:function amM(){},
amN:function amN(){},
aEb(){var x=new Float64Array(4)
x[3]=1
return new A.n8(x)},
n8:function n8(d){this.a=d}},B,C
A=a.updateHolder(c[18],A)
B=c[0]
C=c[2]
A.m7.prototype={
da(d){return B.r4(this.a,this.b,d)}}
A.oh.prototype={
da(d){var x=B.rg(this.a,this.b,d)
x.toString
return x}}
A.mn.prototype={
da(d){var x=B.ee(this.a,this.b,d)
x.toString
return x}}
A.p9.prototype={
da(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.dT(new Float64Array(3)),a3=new B.dT(new Float64Array(3)),a4=A.aEb(),a5=A.aEb(),a6=new B.dT(new Float64Array(3)),a7=new B.dT(new Float64Array(3))
this.a.Pq(a2,a4,a6)
this.b.Pq(a3,a5,a7)
x=1-a8
w=a2.kA(x).S(0,a3.kA(a8))
v=a4.kA(x).S(0,a5.kA(a8))
u=new Float64Array(4)
t=new A.n8(u)
t.bc(v)
t.EV(0)
s=a6.kA(x).S(0,a7.kA(a8))
x=new Float64Array(16)
v=new B.b7(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
v.bf(0,s)
return v}}
A.wy.prototype={
ad(){return new A.SO(null,null,C.i)}}
A.SO.prototype={
mJ(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.b
u.CW=x.a(d.$3(s,t,new A.amG()))
s=u.cx
u.a.toString
w=y.f
u.cx=w.a(d.$3(s,t,new A.amH()))
s=y.d
u.cy=s.a(d.$3(u.cy,u.a.y,new A.amI()))
v=u.db
u.a.toString
u.db=s.a(d.$3(v,t,new A.amJ()))
u.dx=y.e.a(d.$3(u.dx,u.a.Q,new A.amK()))
v=u.dy
u.a.toString
u.dy=w.a(d.$3(v,t,new A.amL()))
v=u.fr
u.a.toString
u.fr=y.w.a(d.$3(v,t,new A.amM()))
v=u.fx
u.a.toString
u.fx=x.a(d.$3(v,t,new A.amN()))},
E(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.ge1(),n=q.CW
n=n==null?p:n.a1(0,o.gl(o))
x=q.cx
x=x==null?p:x.a1(0,o.gl(o))
w=q.cy
w=w==null?p:w.a1(0,o.gl(o))
v=q.db
v=v==null?p:v.a1(0,o.gl(o))
u=q.dx
u=u==null?p:u.a1(0,o.gl(o))
t=q.dy
t=t==null?p:t.a1(0,o.gl(o))
s=q.fr
s=s==null?p:s.a1(0,o.gl(o))
r=q.fx
r=r==null?p:r.a1(0,o.gl(o))
return B.d6(n,q.a.r,C.t,p,u,w,v,p,t,x,s,r,p)}}
A.n8.prototype={
bc(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
U7(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
EV(d){var x,w,v=Math.sqrt(this.gkk())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gkk(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gp(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
H(d,e){var x=e.a,w=this.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]},
kA(d){var x=new Float64Array(4),w=new A.n8(x)
w.bc(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
a4(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.galF(),a1=a0.h(0,3),a2=a0.h(0,2),a3=a0.h(0,1),a4=a0.h(0,0)
h=C.d.a4(g,a4)
x=C.d.a4(d,a1)
w=C.d.a4(e,a2)
v=C.d.a4(f,a3)
u=C.d.a4(g,a3)
t=C.d.a4(e,a1)
s=C.d.a4(f,a4)
r=C.d.a4(d,a2)
q=C.d.a4(g,a2)
p=C.d.a4(f,a1)
o=C.d.a4(d,a3)
n=C.d.a4(e,a4)
m=C.d.a4(g,a1)
l=C.d.a4(d,a4)
k=C.d.a4(e,a3)
j=C.d.a4(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.n8(i)},
S(d,e){var x=new A.n8(new Float64Array(4))
x.bc(this)
x.H(0,e)
return x},
a9(d,e){var x,w=new Float64Array(4),v=new A.n8(w)
v.bc(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
n(d,e,f){this.a[e]=f},
j(d){var x=this.a
return B.i(x[0])+", "+B.i(x[1])+", "+B.i(x[2])+" @ "+B.i(x[3])}}
var z=a.updateTypes(["m7(@)","mn(@)","oh(@)","p9(@)"])
A.amG.prototype={
$1(d){return new A.m7(y.k.a(d),null)},
$S:z+0}
A.amH.prototype={
$1(d){return new A.mn(y.m.a(d),null)},
$S:z+1}
A.amI.prototype={
$1(d){return new B.kK(y.r.a(d),null)},
$S:141}
A.amJ.prototype={
$1(d){return new B.kK(y.r.a(d),null)},
$S:141}
A.amK.prototype={
$1(d){return new A.oh(y.a.a(d),null)},
$S:z+2}
A.amL.prototype={
$1(d){return new A.mn(y.m.a(d),null)},
$S:z+1}
A.amM.prototype={
$1(d){return new A.p9(y.E.a(d),null)},
$S:z+3}
A.amN.prototype={
$1(d){return new A.m7(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.ao,[A.m7,A.oh,A.mn,A.p9])
w(A.wy,B.yL)
w(A.SO,B.o7)
x(B.bP,[A.amG,A.amH,A.amI,A.amJ,A.amK,A.amL,A.amM,A.amN])
w(A.n8,B.D)})()
B.e6(b.typeUniverse,JSON.parse('{"m7":{"ao":["f4?"],"al":["f4?"],"al.T":"f4?","ao.T":"f4?"},"oh":{"ao":["ax"],"al":["ax"],"al.T":"ax","ao.T":"ax"},"mn":{"ao":["cE"],"al":["cE"],"al.T":"cE","ao.T":"cE"},"p9":{"ao":["b7"],"al":["b7"],"al.T":"b7","ao.T":"b7"},"wy":{"X":[],"e":[]},"SO":{"a8":["wy"]}}'))
var y=(function rtii(){var x=B.U
return{k:x("f4"),a:x("ax"),r:x("hn"),m:x("cE"),E:x("b7"),b:x("m7?"),e:x("oh?"),d:x("kK?"),f:x("mn?"),w:x("p9?")}})()}
$__dart_deferred_initializers__["hd8JmwqhTodCgsBtSgGAB50fKbc="] = $__dart_deferred_initializers__.current

//# sourceMappingURL=main.dart.js_22.part.js.map
