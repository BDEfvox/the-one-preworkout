(()=>{var g9=0,No=1,_9=2;var Ms=1,x9=2,Ei=3,Sn=0,it=1,rt=2,Wn=0,Ti=1,Ss=2,Uo=3,Fo=4,bn=5;var Xn=100,v9=101,y9=102,M9=103,S9=104,wi=200,Ve=201,b9=202,E9=203,Oo=204,Bo=205,T9=206,w9=207,A9=208,R9=209,C9=210,P9=211,I9=212,L9=213,D9=214,_r=0,xr=1,vr=2,di=3,yr=4,Mr=5,Sr=6,br=7,zo=0,N9=1,U9=2,xt=0,Ho=1,ko=2,Go=3,Vo=4,Wo=5,Xo=6,qo=7;var En=300,qn=301,Ai=302,Kr=303,Qr=304,Tt=1e3,Pe=1001,Er=1002,pe=1003,F9=1004;var bs=1005;var ue=1006,jr=1007;var ht=1008;var at=1009,Yo=1010,Zo=1011,Ri=1012,ea=1013,At=1014,st=1015,We=1016,ta=1017,na=1018,Yn=1020,$o=35902,Jo=35899,Ko=1021,Qo=1022,He=1023,Yt=1026,Qt=1027,Ci=1028,ia=1029,Tn=1030,sa=1031;var ra=1033,Es=33776,Ts=33777,ws=33778,As=33779,aa=35840,oa=35841,la=35842,ca=35843,ha=36196,ua=37492,da=37496,fa=37488,pa=37489,Rs=37490,ma=37491,ga=37808,_a=37809,xa=37810,va=37811,ya=37812,Ma=37813,Sa=37814,ba=37815,Ea=37816,Ta=37817,wa=37818,Aa=37819,Ra=37820,Ca=37821,Pa=36492,Ia=36494,La=36495,Da=36283,Na=36284,Cs=36285,Ua=36286;var $i=2300,Tr=2301,mr=2302,Eo=2303,To=2400,wo=2401,Ao=2402;var O9=3200;var Fa=0,B9=1,jt="",tt="srgb",Ji="srgb-linear",Ki="linear",ee="srgb";var gr=7680;var z9=519,H9=512,k9=513,G9=514,jo=515,V9=516,W9=517,e1=518,t1=519,X9=35044,Oa=35048;var n1="300 es",ft=2e3,fi=2001;function Ml(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sl(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function q9(){let i=Qi("canvas");return i.style.display="block",i}var B1={},pi=null;function i1(...i){let e="THREE."+i.shift();pi?pi("log",e,...i):console.log(e,...i)}function Y9(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function N0(...i){i=Y9(i);let e="THREE."+i.shift();if(pi)pi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function z0(...i){i=Y9(i);let e="THREE."+i.shift();if(pi)pi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function On(...i){let e=i.join(" ");e in B1||(B1[e]=!0,N0(...i))}function Z9(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var $9={[_r]:_r,[vr]:Sr,[yr]:yr,[di]:Mr,[xr]:xr,[Sr]:vr,[br]:br,[Mr]:di},It=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],z1=1234567,Xi=Math.PI/180,Bn=180/Math.PI;function Pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[e&255]+Ye[e>>8&255]+"-"+Ye[e>>16&15|64]+Ye[e>>24&255]+"-"+Ye[t&63|128]+Ye[t>>8&255]+"-"+Ye[t>>16&255]+Ye[t>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function W0(i,e,t){return Math.max(e,Math.min(t,i))}function s1(i,e){return(i%e+e)%e}function bl(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function El(i,e,t){return i!==e?(t-i)/(e-i):0}function qi(i,e,t){return(1-t)*i+t*e}function Tl(i,e,t,n){return qi(i,e,1-Math.exp(-t*n))}function wl(i,e=1){return e-Math.abs(s1(i,e*2)-e)}function Al(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pl(i,e){return i+Math.random()*(e-i)}function Il(i){return i*(.5-Math.random())}function Ll(i){i!==void 0&&(z1=i);let e=z1+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dl(i){return i*Xi}function Nl(i){return i*Bn}function Ul(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Fl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function r1(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ol(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),u=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*u,o*c);break;case"YXY":i.set(l*u,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*u,o*h,o*c);break;default:N0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function a1(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function J9(i,e){if(e.constructor===Float32Array)return i;let t=a1(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function K9(i,e){if(e.constructor===Float32Array)return i;let t=a1(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ii={DEG2RAD:Xi,RAD2DEG:Bn,generateUUID:Pi,clamp:W0,euclideanModulo:s1,mapLinear:bl,inverseLerp:El,lerp:qi,damp:Tl,pingpong:wl,smoothstep:Al,smootherstep:Rl,randInt:Cl,randFloat:Pl,randFloatSpread:Il,seededRandom:Ll,degToRad:Dl,radToDeg:Nl,isPowerOfTwo:Ul,ceilPowerOfTwo:Fl,floorPowerOfTwo:r1,setQuaternionFromProperEuler:Ol,normalize:K9,denormalize:J9},v0=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W0(this.x,e.x,t.x),this.y=W0(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W0(this.x,e,t),this.y=W0(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W0(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W0(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],m=r[a+2],y=r[a+3];if(f!==y||l!==d||c!==u||h!==m){let g=l*d+c*u+h*m+f*y;g<0&&(d=-d,u=-u,m=-m,y=-y,g=-g);let p=1-o;if(g<.9995){let M=Math.acos(g),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,l=l*p+d*o,c=c*p+u*o,h=h*p+m*o,f=f*p+y*o}else{l=l*p+d*o,c=c*p+u*o,h=h*p+m*o,f=f*p+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*u-c*d,e[t+1]=l*m+h*d+c*f-o*u,e[t+2]=c*m+h*u+o*d-l*f,e[t+3]=h*m-o*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),u=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f-d*u*m;break;case"YXZ":this._x=d*h*f+c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f+d*u*m;break;case"ZXY":this._x=d*h*f-c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f-d*u*m;break;case"ZYX":this._x=d*h*f-c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f+d*u*m;break;case"YZX":this._x=d*h*f+c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f-d*u*m;break;case"XZY":this._x=d*h*f-c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f+d*u*m;break;default:N0("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W0(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(H1.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(H1.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W0(this.x,e.x,t.x),this.y=W0(this.y,e.y,t.y),this.z=W0(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W0(this.x,e,t),this.y=W0(this.y,e,t),this.z=W0(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W0(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W0(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eo=new L,H1=new pt,H0=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],m=n[8],y=s[0],g=s[3],p=s[6],M=s[1],T=s[4],b=s[7],A=s[2],E=s[5],_=s[8];return r[0]=a*y+o*M+l*A,r[3]=a*g+o*T+l*E,r[6]=a*p+o*b+l*_,r[1]=c*y+h*M+f*A,r[4]=c*g+h*T+f*E,r[7]=c*p+h*b+f*_,r[2]=d*y+u*M+m*A,r[5]=d*g+u*T+m*E,r[8]=d*p+u*b+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,m=t*f+n*d+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=f*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=u*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return On("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(to.makeScale(e,t)),this}rotate(e){return On("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(to.makeRotation(-e)),this}translate(e,t){return On("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},to=new H0,k1=new H0().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G1=new H0().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bl(){let i={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ee&&(s.r=qt(s.r),s.g=qt(s.g),s.b=qt(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jt?Ki:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ji]:{primaries:e,whitePoint:n,transfer:Ki,toXYZ:k1,fromXYZ:G1,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:e,whitePoint:n,transfer:ee,toXYZ:k1,fromXYZ:G1,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),i}var $0=Bl();function qt(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Kn,wr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kn===void 0&&(Kn=Qi("canvas")),Kn.width=e.width,Kn.height=e.height;let s=Kn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Kn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qt(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qt(t[n]/255)*255):t[n]=qt(t[n]);return{data:t,width:e.width,height:e.height}}else return N0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zl=0,mi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(no(s[a].image)):r.push(no(s[a]))}else r=no(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(N0("Texture: Unable to serialize Texture."),{})}var Hl=0,io=new L,nt=class i extends It{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Pe,s=Pe,r=ue,a=ht,o=He,l=at,c=i.DEFAULT_ANISOTROPY,h=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=Pi(),this.name="",this.source=new mi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new v0(0,0),this.repeat=new v0(1,1),this.center=new v0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(io).x}get height(){return this.source.getSize(io).y}get depth(){return this.source.getSize(io).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){N0(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){N0(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==En)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tt:e.x=e.x-Math.floor(e.x);break;case Pe:e.x=e.x<0?0:1;break;case Er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tt:e.y=e.y-Math.floor(e.y);break;case Pe:e.y=e.y<0?0:1;break;case Er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nt.DEFAULT_IMAGE=null;nt.DEFAULT_MAPPING=En;nt.DEFAULT_ANISOTROPY=1;var de=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,b=(u+1)/2,A=(p+1)/2,E=(h+d)/4,_=(f+y)/4,v=(m+g)/4;return T>b&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=_/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=v/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=v/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-y)/M,this.z=(d-h)/M,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W0(this.x,e.x,t.x),this.y=W0(this.y,e.y,t.y),this.z=W0(this.z,e.z,t.z),this.w=W0(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W0(this.x,e,t),this.y=W0(this.y,e,t),this.z=W0(this.z,e,t),this.w=W0(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W0(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ar=class extends It{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ue,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new de(0,0,e,t),this.scissorTest=!1,this.viewport=new de(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new nt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ue,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new mi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},re=class extends Ar{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ji=class extends nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gi=class extends nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var J0=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,f,d,u,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,d,u,m,y,g)}set(e,t,n,s,r,a,o,l,c,h,f,d,u,m,y,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Qn.setFromMatrixColumn(e,0).length(),r=1/Qn.setFromMatrixColumn(e,1).length(),a=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*f,m=o*h,y=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+m*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=m+u*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,m=c*h,y=c*f;t[0]=d+y*o,t[4]=m*o-u,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=u*o-m,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,m=c*h,y=c*f;t[0]=d-y*o,t[4]=-a*f,t[8]=m+u*o,t[1]=u+m*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,u=a*f,m=o*h,y=o*f;t[0]=l*h,t[4]=m*c-u,t[8]=d*c+y,t[1]=l*f,t[5]=y*c+d,t[9]=u*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,u=a*c,m=o*l,y=o*c;t[0]=l*h,t[4]=y-d*f,t[8]=m*f+u,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*f+m,t[10]=d-y*f}else if(e.order==="XZY"){let d=a*l,u=a*c,m=o*l,y=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+y,t[5]=a*h,t[9]=u*f-m,t[2]=m*f-u,t[6]=o*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kl,e,Gl)}lookAt(e,t,n){let s=this.elements;return ot.subVectors(e,t),ot.lengthSq()===0&&(ot.z=1),ot.normalize(),hn.crossVectors(n,ot),hn.lengthSq()===0&&(Math.abs(n.z)===1?ot.x+=1e-4:ot.z+=1e-4,ot.normalize(),hn.crossVectors(n,ot)),hn.normalize(),qs.crossVectors(ot,hn),s[0]=hn.x,s[4]=qs.x,s[8]=ot.x,s[1]=hn.y,s[5]=qs.y,s[9]=ot.y,s[2]=hn.z,s[6]=qs.z,s[10]=ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],m=n[2],y=n[6],g=n[10],p=n[14],M=n[3],T=n[7],b=n[11],A=n[15],E=s[0],_=s[4],v=s[8],D=s[12],P=s[1],I=s[5],N=s[9],U=s[13],C=s[2],H=s[6],V=s[10],z=s[14],t0=s[3],q=s[7],k=s[11],J=s[15];return r[0]=a*E+o*P+l*C+c*t0,r[4]=a*_+o*I+l*H+c*q,r[8]=a*v+o*N+l*V+c*k,r[12]=a*D+o*U+l*z+c*J,r[1]=h*E+f*P+d*C+u*t0,r[5]=h*_+f*I+d*H+u*q,r[9]=h*v+f*N+d*V+u*k,r[13]=h*D+f*U+d*z+u*J,r[2]=m*E+y*P+g*C+p*t0,r[6]=m*_+y*I+g*H+p*q,r[10]=m*v+y*N+g*V+p*k,r[14]=m*D+y*U+g*z+p*J,r[3]=M*E+T*P+b*C+A*t0,r[7]=M*_+T*I+b*H+A*q,r[11]=M*v+T*N+b*V+A*k,r[15]=M*D+T*U+b*z+A*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],m=e[3],y=e[7],g=e[11],p=e[15],M=l*u-c*d,T=o*u-c*f,b=o*d-l*f,A=a*u-c*h,E=a*d-l*h,_=a*f-o*h;return t*(y*M-g*T+p*b)-n*(m*M-g*A+p*E)+s*(m*T-y*A+p*_)-r*(m*b-y*E+g*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],m=e[12],y=e[13],g=e[14],p=e[15],M=t*o-n*a,T=t*l-s*a,b=t*c-r*a,A=n*l-s*o,E=n*c-r*o,_=s*c-r*l,v=h*y-f*m,D=h*g-d*m,P=h*p-u*m,I=f*g-d*y,N=f*p-u*y,U=d*p-u*g,C=M*U-T*N+b*I+A*P-E*D+_*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/C;return e[0]=(o*U-l*N+c*I)*H,e[1]=(s*N-n*U-r*I)*H,e[2]=(y*_-g*E+p*A)*H,e[3]=(d*E-f*_-u*A)*H,e[4]=(l*P-a*U-c*D)*H,e[5]=(t*U-s*P+r*D)*H,e[6]=(g*b-m*_-p*T)*H,e[7]=(h*_-d*b+u*T)*H,e[8]=(a*N-o*P+c*v)*H,e[9]=(n*P-t*N-r*v)*H,e[10]=(m*E-y*b+p*M)*H,e[11]=(f*b-h*E-u*M)*H,e[12]=(o*D-a*I-l*v)*H,e[13]=(t*I-n*D+s*v)*H,e[14]=(y*T-m*A-g*M)*H,e[15]=(h*A-f*T+d*M)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,m=r*f,y=a*h,g=a*f,p=o*f,M=l*c,T=l*h,b=l*f,A=n.x,E=n.y,_=n.z;return s[0]=(1-(y+p))*A,s[1]=(u+b)*A,s[2]=(m-T)*A,s[3]=0,s[4]=(u-b)*E,s[5]=(1-(d+p))*E,s[6]=(g+M)*E,s[7]=0,s[8]=(m+T)*_,s[9]=(g-M)*_,s[10]=(1-(d+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Qn.set(s[0],s[1],s[2]).length(),o=Qn.set(s[4],s[5],s[6]).length(),l=Qn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Mt.copy(this);let c=1/a,h=1/o,f=1/l;return Mt.elements[0]*=c,Mt.elements[1]*=c,Mt.elements[2]*=c,Mt.elements[4]*=h,Mt.elements[5]*=h,Mt.elements[6]*=h,Mt.elements[8]*=f,Mt.elements[9]*=f,Mt.elements[10]*=f,t.setFromRotationMatrix(Mt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=ft,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),m,y;if(l)m=r/(a-r),y=a*r/(a-r);else if(o===ft)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===fi)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ft,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),u=-(n+s)/(n-s),m,y;if(l)m=1/(a-r),y=a/(a-r);else if(o===ft)m=-2/(a-r),y=-(a+r)/(a-r);else if(o===fi)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qn=new L,Mt=new J0,kl=new L(0,0,0),Gl=new L(1,1,1),hn=new L,qs=new L,ot=new L,V1=new J0,W1=new pt,wt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(W0(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-W0(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(W0(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-W0(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(W0(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-W0(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:N0("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return V1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(V1,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return W1.setFromEuler(this),this.setFromQuaternion(W1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wt.DEFAULT_ORDER="XYZ";var es=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vl=0,X1=new L,jn=new pt,Ht=new J0,Ys=new L,zi=new L,Wl=new L,Xl=new pt,q1=new L(1,0,0),Y1=new L(0,1,0),Z1=new L(0,0,1),$1={type:"added"},ql={type:"removed"},ei={type:"childadded",child:null},so={type:"childremoved",child:null},Ie=class i extends It{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new wt,n=new pt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new J0},normalMatrix:{value:new H0}}),this.matrix=new J0,this.matrixWorld=new J0,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(q1,e)}rotateY(e){return this.rotateOnAxis(Y1,e)}rotateZ(e){return this.rotateOnAxis(Z1,e)}translateOnAxis(e,t){return X1.copy(e).applyQuaternion(this.quaternion),this.position.add(X1.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(q1,e)}translateY(e){return this.translateOnAxis(Y1,e)}translateZ(e){return this.translateOnAxis(Z1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ht.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ht.lookAt(zi,Ys,this.up):Ht.lookAt(Ys,zi,this.up),this.quaternion.setFromRotationMatrix(Ht),s&&(Ht.extractRotation(s.matrixWorld),jn.setFromRotationMatrix(Ht),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(z0("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($1),ei.child=e,this.dispatchEvent(ei),ei.child=null):z0("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ql),so.child=e,this.dispatchEvent(so),so.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ht.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ht.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ht),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($1),ei.child=e,this.dispatchEvent(ei),ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,Wl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,Xl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),u=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ie.DEFAULT_UP=new L(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ee=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yl={type:"move"},_i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,m=.005;c.inputState.pinching&&d>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yl)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Q9={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function ro(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var R0=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$0.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$0.workingColorSpace){return this.r=e,this.g=t,this.b=n,$0.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$0.workingColorSpace){if(e=s1(e,1),t=W0(t,0,1),n=W0(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ro(a,r,e+1/3),this.g=ro(a,r,e),this.b=ro(a,r,e-1/3)}return $0.colorSpaceToWorking(this,s),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&N0("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:N0("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);N0("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=Q9[e.toLowerCase()];return n!==void 0?this.setHex(n,t):N0("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qt(e.r),this.g=qt(e.g),this.b=qt(e.b),this}copyLinearToSRGB(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return $0.workingToColorSpace(Ze.copy(this),e),Math.round(W0(Ze.r*255,0,255))*65536+Math.round(W0(Ze.g*255,0,255))*256+Math.round(W0(Ze.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$0.workingColorSpace){$0.workingToColorSpace(Ze.copy(this),t);let n=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$0.workingColorSpace){return $0.workingToColorSpace(Ze.copy(this),t),e.r=Ze.r,e.g=Ze.g,e.b=Ze.b,e}getStyle(e=tt){$0.workingToColorSpace(Ze.copy(this),e);let t=Ze.r,n=Ze.g,s=Ze.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(un),this.setHSL(un.h+e,un.s+t,un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(Zs);let n=qi(un.h,Zs.h,t),s=qi(un.s,Zs.s,t),r=qi(un.l,Zs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new R0;R0.NAMES=Q9;var ts=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new R0(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zt=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wt,this.environmentIntensity=1,this.environmentRotation=new wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},St=new L,kt=new L,ao=new L,Gt=new L,ti=new L,ni=new L,J1=new L,oo=new L,lo=new L,co=new L,ho=new de,uo=new de,fo=new de,mn=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),St.subVectors(e,t),s.cross(St);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){St.subVectors(s,t),kt.subVectors(n,t),ao.subVectors(e,t);let a=St.dot(St),o=St.dot(kt),l=St.dot(ao),c=kt.dot(kt),h=kt.dot(ao),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-u-m,m,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gt)===null?!1:Gt.x>=0&&Gt.y>=0&&Gt.x+Gt.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Gt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gt.x),l.addScaledVector(a,Gt.y),l.addScaledVector(o,Gt.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ho.setScalar(0),uo.setScalar(0),fo.setScalar(0),ho.fromBufferAttribute(e,t),uo.fromBufferAttribute(e,n),fo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ho,r.x),a.addScaledVector(uo,r.y),a.addScaledVector(fo,r.z),a}static isFrontFacing(e,t,n,s){return St.subVectors(n,t),kt.subVectors(e,t),St.cross(kt).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return St.subVectors(this.c,this.b),kt.subVectors(this.a,this.b),St.cross(kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ti.subVectors(s,n),ni.subVectors(r,n),oo.subVectors(e,n);let l=ti.dot(oo),c=ni.dot(oo);if(l<=0&&c<=0)return t.copy(n);lo.subVectors(e,s);let h=ti.dot(lo),f=ni.dot(lo);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(ti,a);co.subVectors(e,r);let u=ti.dot(co),m=ni.dot(co);if(m>=0&&u<=m)return t.copy(r);let y=u*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ni,o);let g=h*m-u*f;if(g<=0&&f-h>=0&&u-m>=0)return J1.subVectors(r,s),o=(f-h)/(f-h+(u-m)),t.copy(s).addScaledVector(J1,o);let p=1/(g+y+d);return a=y*p,o=d*p,t.copy(n).addScaledVector(ti,a).addScaledVector(ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bt):bt.fromBufferAttribute(r,a),bt.applyMatrix4(e.matrixWorld),this.expandByPoint(bt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bt),bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),Js.subVectors(this.max,Hi),ii.subVectors(e.a,Hi),si.subVectors(e.b,Hi),ri.subVectors(e.c,Hi),dn.subVectors(si,ii),fn.subVectors(ri,si),Dn.subVectors(ii,ri);let t=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-Dn.z,Dn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,Dn.z,0,-Dn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-Dn.y,Dn.x,0];return!po(t,ii,si,ri,Js)||(t=[1,0,0,0,1,0,0,0,1],!po(t,ii,si,ri,Js))?!1:(Ks.crossVectors(dn,fn),t=[Ks.x,Ks.y,Ks.z],po(t,ii,si,ri,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vt=[new L,new L,new L,new L,new L,new L,new L,new L],bt=new L,$s=new Lt,ii=new L,si=new L,ri=new L,dn=new L,fn=new L,Dn=new L,Hi=new L,Js=new L,Ks=new L,Nn=new L;function po(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Nn.fromArray(i,r);let o=s.x*Math.abs(Nn.x)+s.y*Math.abs(Nn.y)+s.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Xt=Zl();function Zl(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function $l(i){Math.abs(i)>65504&&N0("DataUtils.toHalfFloat(): Value out of range."),i=W0(i,-65504,65504),Xt.floatView[0]=i;let e=Xt.uint32View[0],t=e>>23&511;return Xt.baseTable[t]+((e&8388607)>>Xt.shiftTable[t])}function Jl(i){let e=i>>10;return Xt.uint32View[0]=Xt.mantissaTable[Xt.offsetTable[e]+(i&1023)]+Xt.exponentTable[e],Xt.floatView[0]}var xi=class{static toHalfFloat(e){return $l(e)}static fromHalfFloat(e){return Jl(e)}},Ae=new L,Qs=new v0,Kl=0,ze=class extends It{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kl++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=X9,this.updateRanges=[],this.gpuType=st,this.version=0,this._normalizationScale=e!==void 0?a1(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ae.fromBufferAttribute(this,t),Ae.applyMatrix3(e),this.setXYZ(t,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ae.fromBufferAttribute(this,t),Ae.applyMatrix4(e),this.setXYZ(t,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ae.fromBufferAttribute(this,t),Ae.applyNormalMatrix(e),this.setXYZ(t,Ae.x,Ae.y,Ae.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ae.fromBufferAttribute(this,t),Ae.transformDirection(e),this.setXYZ(t,Ae.x,Ae.y,Ae.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):J9(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):K9(e,this.array)}};var ns=class extends ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var is=class extends ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var te=class extends ze{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ql=new Lt,ki=new L,mo=new L,$t=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ql.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);let t=ki.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(mo)),this.expandByPoint(ki.copy(e.center).sub(mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jl=0,dt=new J0,go=new Ie,ai=new L,lt=new Lt,Gi=new Lt,Oe=new L,Le=class i extends It{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ml(e)?is:ns)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new H0().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dt.makeRotationFromQuaternion(e),this.applyMatrix4(dt),this}rotateX(e){return dt.makeRotationX(e),this.applyMatrix4(dt),this}rotateY(e){return dt.makeRotationY(e),this.applyMatrix4(dt),this}rotateZ(e){return dt.makeRotationZ(e),this.applyMatrix4(dt),this}translate(e,t,n){return dt.makeTranslation(e,t,n),this.applyMatrix4(dt),this}scale(e,t,n){return dt.makeScale(e,t,n),this.applyMatrix4(dt),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&N0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){z0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];lt.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,lt.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,lt.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(lt.min),this.boundingBox.expandByPoint(lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){z0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(lt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(lt.min,Gi.min),lt.expandByPoint(Oe),Oe.addVectors(lt.max,Gi.max),lt.expandByPoint(Oe)):(lt.expandByPoint(Gi.min),lt.expandByPoint(Gi.max))}lt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Oe.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Oe));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(ai.fromBufferAttribute(e,c),Oe.add(ai)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&z0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new L,l[D]=new L;let h=new L,f=new L,d=new L,u=new v0,m=new v0,y=new v0,g=new L,p=new L;function M(D,P,I){c[D]=c[P]=c[I]=1,h.fromBufferAttribute(n,D),f.fromBufferAttribute(n,P),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,D),m.fromBufferAttribute(r,P),y.fromBufferAttribute(r,I),f.sub(h),d.sub(h),m.sub(u),y.sub(u);let N=1/(m.x*y.y-y.x*m.y);isFinite(N)&&(g.copy(f).multiplyScalar(y.y).addScaledVector(d,-m.y).multiplyScalar(N),p.copy(d).multiplyScalar(m.x).addScaledVector(f,-y.x).multiplyScalar(N),o[D].add(g),o[P].add(g),o[I].add(g),l[D].add(p),l[P].add(p),l[I].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,P=T.length;D<P;++D){let I=T[D],N=I.start,U=I.count;for(let C=N,H=N+U;C<H;C+=3)M(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let b=new L,A=new L,E=new L,_=new L;function v(D){E.fromBufferAttribute(s,D),_.copy(E);let P=o[D];b.copy(P),b.sub(E.multiplyScalar(E.dot(P))).normalize(),A.crossVectors(_,P);let N=A.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,N)}for(let D=0,P=n.count;D<P;++D)c[D]&&v(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(e)for(let d=0,u=e.count;d<u;d+=3){let m=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Oe.fromBufferAttribute(e,t),Oe.normalize(),e.setXYZ(t,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),u=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?u=l[y]*o.data.stride+o.offset:u=l[y]*h;for(let p=0;p<h;p++)d[m++]=c[u++]}return new ze(d,h,f)}if(this.index===null)return N0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var _o=new L,ec=new L,tc=new H0,Et=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_o.subVectors(n,t).cross(ec.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(_o),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tc.getNormalMatrix(e),s=this.coplanarPoint(_o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},nc=0,Jt=class extends It{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Ti,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Bo,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new R0(0,0,0),this.blendAlpha=0,this.depthFunc=di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z9,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){N0(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){N0(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new R0().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Et().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new v0().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new v0().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Wt=new L,xo=new L,js=new L,er=new L,ss=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wt.copy(this.origin).addScaledVector(this.direction,t),Wt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xo.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),er.copy(this.origin).sub(xo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(js),o=er.dot(this.direction),l=-er.dot(js),c=er.lengthSq(),h=Math.abs(1-a*a),f,d,u,m;if(h>0)if(f=a*l-o,d=a*o-l,m=r*h,f>=0)if(d>=-m)if(d<=m){let y=1/h;f*=y,d*=y,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(xo).addScaledVector(js,d),u}intersectSphere(e,t){if(e.radius<0)return null;Wt.subVectors(e.center,this.origin);let n=Wt.dot(this.direction),s=Wt.dot(Wt)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wt)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,u=e.z-a.z,m=t.x-a.x,y=t.y-a.y,g=t.z-a.z,p=n.x-a.x,M=n.y-a.y,T=n.z-a.z,b=Math.abs(l),A=Math.abs(c),E=Math.abs(h),_,v,D,P,I,N,U,C,H,V,z,t0;if(b>=A&&b>=E?(D=l,N=f,H=m,t0=p,l>=0?(_=c,v=h,P=d,I=u,U=y,C=g,V=M,z=T):(_=h,v=c,P=u,I=d,U=g,C=y,V=T,z=M)):A>=E?(D=c,N=d,H=y,t0=M,c>=0?(_=h,v=l,P=u,I=f,U=g,C=m,V=T,z=p):(_=l,v=h,P=f,I=u,U=m,C=g,V=p,z=T)):(D=h,N=u,H=g,t0=T,h>=0?(_=l,v=c,P=f,I=d,U=m,C=y,V=p,z=M):(_=c,v=l,P=d,I=f,U=y,C=m,V=M,z=p)),D===0)return null;let q=_/D,k=v/D,J=1/D,h0=P-q*N,p0=I-k*N,B=U-q*H,K=C-k*H,i0=V-q*t0,y0=z-k*t0,l0=i0*K-y0*B,n0=h0*y0-p0*i0,I0=B*p0-K*h0;if(s){if(l0<0||n0<0||I0<0)return null}else if((l0<0||n0<0||I0<0)&&(l0>0||n0>0||I0>0))return null;let T0=l0+n0+I0;if(T0===0)return null;let G0=J*(l0*N+n0*H+I0*t0);return(T0>0?G0<0:G0>0)?null:this.at(G0/T0,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vi=class extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new R0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wt,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},K1=new J0,Un=new ss,tr=new $t,Q1=new L,nr=new L,ir=new L,sr=new L,vo=new L,rr=new L,j1=new L,ar=new L,ae=class extends Ie{constructor(e=new Le,t=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(vo.fromBufferAttribute(f,e),a?rr.addScaledVector(vo,h):rr.addScaledVector(vo.sub(t),h))}t.add(rr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),Un.copy(e.ray).recast(e.near),!(tr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(tr,Q1)===null||Un.origin.distanceToSquared(Q1)>(e.far-e.near)**2))&&(K1.copy(r).invert(),Un.copy(e.ray).applyMatrix4(K1),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=a[g.materialIndex],M=Math.max(g.start,u.start),T=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let b=M,A=T;b<A;b+=3){let E=o.getX(b),_=o.getX(b+1),v=o.getX(b+2);s=or(this,p,e,n,c,h,f,E,_,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let g=m,p=y;g<p;g+=3){let M=o.getX(g),T=o.getX(g+1),b=o.getX(g+2);s=or(this,a,e,n,c,h,f,M,T,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=a[g.materialIndex],M=Math.max(g.start,u.start),T=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let b=M,A=T;b<A;b+=3){let E=b,_=b+1,v=b+2;s=or(this,p,e,n,c,h,f,E,_,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let g=m,p=y;g<p;g+=3){let M=g,T=g+1,b=g+2;s=or(this,a,e,n,c,h,f,M,T,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ic(i,e,t,n,s,r,a,o){let l;if(e.side===it?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Sn,o),l===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ar);return c<t.near||c>t.far?null:{distance:c,point:ar.clone(),object:i}}function or(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,nr),i.getVertexPosition(l,ir),i.getVertexPosition(c,sr);let h=ic(i,e,t,n,nr,ir,sr,j1);if(h){let f=new L;mn.getBarycoord(j1,nr,ir,sr,f),s&&(h.uv=mn.getInterpolatedAttribute(s,o,l,c,f,new v0)),r&&(h.uv1=mn.getInterpolatedAttribute(r,o,l,c,f,new v0)),a&&(h.normal=mn.getInterpolatedAttribute(a,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};mn.getNormal(nr,ir,sr,d.normal),h.face=d,h.barycoord=f}return h}var mt=class extends nt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=pe,h=pe,f,d){super(null,a,o,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rs=class extends ze{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},oi=new J0,e9=new J0,lr=[],t9=new Lt,sc=new J0,Vi=new ae,Wi=new $t,as=class extends ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sc)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Lt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oi),t9.copy(e.boundingBox).applyMatrix4(oi),this.boundingBox.union(t9)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $t),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oi),Wi.copy(e.boundingSphere).applyMatrix4(oi),this.boundingSphere.union(Wi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wi.copy(this.boundingSphere),Wi.applyMatrix4(n),e.ray.intersectsSphere(Wi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,oi),e9.multiplyMatrices(n,oi),Vi.matrixWorld=e9,Vi.raycast(e,lr);for(let a=0,o=lr.length;a<o;a++){let l=lr[a];l.instanceId=r,l.object=this,t.push(l)}lr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new mt(new Float32Array(s*this.count),s,this.count,Ci,st));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fn=new $t,rc=new v0(.5,.5),cr=new L,gn=class{constructor(e=new Et,t=new Et,n=new Et,s=new Et,r=new Et,a=new Et){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ft,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],m=r[8],y=r[9],g=r[10],p=r[11],M=r[12],T=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,u-h,p-m,A-M).normalize(),s[1].setComponents(c+a,u+h,p+m,A+M).normalize(),s[2].setComponents(c+o,u+f,p+y,A+T).normalize(),s[3].setComponents(c-o,u-f,p-y,A-T).normalize(),n)s[4].setComponents(l,d,g,b).normalize(),s[5].setComponents(c-l,u-d,p-g,A-b).normalize();else if(s[4].setComponents(c-l,u-d,p-g,A-b).normalize(),t===ft)s[5].setComponents(c+l,u+d,p+g,A+b).normalize();else if(t===fi)s[5].setComponents(l,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){Fn.center.set(0,0,0);let t=rc.distanceTo(e.center);return Fn.radius=.7071067811865476+t,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(cr.x=s.normal.x>0?e.max.x:e.min.x,cr.y=s.normal.y>0?e.max.y:e.min.y,cr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},n9=new J0,Rr=class i{constructor(){this.coordinateSystem=ft,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];n9.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new gn),n[s].setFromProjectionMatrix(n9,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new gn),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Cr=class extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new R0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},i9=new J0,Ro=new ss,hr=new $t,ur=new L,os=class extends Ie{constructor(e=new Le,t=new Cr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,e.ray.intersectsSphere(hr)===!1)return;i9.copy(s).invert(),Ro.copy(e.ray).applyMatrix4(i9);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let m=d,y=u;m<y;m++){let g=c.getX(m);ur.fromBufferAttribute(f,g),s9(ur,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let m=d,y=u;m<y;m++)ur.fromBufferAttribute(f,m),s9(ur,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function s9(i,e,t,n,s,r,a){let o=Ro.distanceSqToPoint(i);if(o<t){let l=new L;Ro.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ls=class extends nt{constructor(e=[],t=qn,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_n=class extends nt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Kt=class extends nt{constructor(e,t,n=At,s,r,a,o=pe,l=pe,c,h=Yt,f=1){if(h!==Yt&&h!==Qt)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},cs=class extends Kt{constructor(e,t=At,n=qn,s,r,a=pe,o=pe,l,c=Yt){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},hs=class extends nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$e=class i extends Le{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,u=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(f,2));function m(y,g,p,M,T,b,A,E,_,v,D){let P=b/_,I=A/v,N=b/2,U=A/2,C=E/2,H=_+1,V=v+1,z=0,t0=0,q=new L;for(let k=0;k<V;k++){let J=k*I-U;for(let h0=0;h0<H;h0++){let p0=h0*P-N;q[y]=p0*M,q[g]=J*T,q[p]=C,c.push(q.x,q.y,q.z),q[y]=0,q[g]=0,q[p]=E>0?1:-1,h.push(q.x,q.y,q.z),f.push(h0/_),f.push(1-k/v),z+=1}}for(let k=0;k<v;k++)for(let J=0;J<_;J++){let h0=d+J+H*k,p0=d+J+H*(k+1),B=d+(J+1)+H*(k+1),K=d+(J+1)+H*k;l.push(h0,p0,K),l.push(p0,B,K),t0+=6}o.addGroup(u,t0,D),u+=t0,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var oe=class i extends Le{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],m=0,y=[],g=n/2,p=0;M(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new te(f,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(u,2));function M(){let b=new L,A=new L,E=0,_=(t-e)/n;for(let v=0;v<=r;v++){let D=[],P=v/r,I=P*(t-e)+e;for(let N=0;N<=s;N++){let U=N/s,C=U*l+o,H=Math.sin(C),V=Math.cos(C);A.x=I*H,A.y=-P*n+g,A.z=I*V,f.push(A.x,A.y,A.z),b.set(H,_,V).normalize(),d.push(b.x,b.y,b.z),u.push(U,1-P),D.push(m++)}y.push(D)}for(let v=0;v<s;v++)for(let D=0;D<r;D++){let P=y[D][v],I=y[D+1][v],N=y[D+1][v+1],U=y[D][v+1];(e>0||D!==0)&&(h.push(P,I,U),E+=3),(t>0||D!==r-1)&&(h.push(I,N,U),E+=3)}c.addGroup(p,E,0),p+=E}function T(b){let A=m,E=new v0,_=new L,v=0,D=b===!0?e:t,P=b===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,g*P,0),d.push(0,P,0),u.push(.5,.5),m++;let I=m;for(let N=0;N<=s;N++){let C=N/s*l+o,H=Math.cos(C),V=Math.sin(C);_.x=D*V,_.y=g*P,_.z=D*H,f.push(_.x,_.y,_.z),d.push(0,P,0),E.x=H*.5+.5,E.y=V*.5*P+.5,u.push(E.x,E.y),m++}for(let N=0;N<s;N++){let U=A+N,C=I+N;b===!0?h.push(C,C+1,U):h.push(C+1,C,U),v+=3}c.addGroup(p,v,b===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var gt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){N0("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new v0:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new J0;for(let u=0;u<=e;u++){let m=u/e;s[u]=this.getTangentAt(m,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(W0(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,m))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(W0(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},us=class extends gt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new v0){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Pr=class extends us{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function o1(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var r9=new L,a9=new L,yo=new o1,Mo=new o1,So=new o1,yi=class extends gt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(a9.subVectors(s[0],s[1]).add(s[0]),c=a9);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(r9.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=r9),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),u),y=Math.pow(f.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),yo.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,m,y,g),Mo.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,m,y,g),So.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(yo.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Mo.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),So.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(yo.calc(l),Mo.calc(l),So.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function o9(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function ac(i,e){let t=1-i;return t*t*e}function oc(i,e){return 2*(1-i)*i*e}function lc(i,e){return i*i*e}function Yi(i,e,t,n){return ac(i,e)+oc(i,t)+lc(i,n)}function cc(i,e){let t=1-i;return t*t*t*e}function hc(i,e){let t=1-i;return 3*t*t*i*e}function uc(i,e){return 3*(1-i)*i*i*e}function dc(i,e){return i*i*i*e}function Zi(i,e,t,n,s){return cc(i,e)+hc(i,t)+uc(i,n)+dc(i,s)}var Ir=class extends gt{constructor(e=new v0,t=new v0,n=new v0,s=new v0){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new v0){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zi(e,s.x,r.x,a.x,o.x),Zi(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lr=class extends gt{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zi(e,s.x,r.x,a.x,o.x),Zi(e,s.y,r.y,a.y,o.y),Zi(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dr=class extends gt{constructor(e=new v0,t=new v0){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new v0){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new v0){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nr=class extends gt{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ur=class extends gt{constructor(e=new v0,t=new v0,n=new v0){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new v0){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Yi(e,s.x,r.x,a.x),Yi(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ds=class extends gt{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Yi(e,s.x,r.x,a.x),Yi(e,s.y,r.y,a.y),Yi(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fr=class extends gt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new v0){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(o9(o,l.x,c.x,h.x,f.x),o9(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new v0().fromArray(s))}return this}},fc=Object.freeze({__proto__:null,ArcCurve:Pr,CatmullRomCurve3:yi,CubicBezierCurve:Ir,CubicBezierCurve3:Lr,EllipseCurve:us,LineCurve:Dr,LineCurve3:Nr,QuadraticBezierCurve:Ur,QuadraticBezierCurve3:ds,SplineCurve:Fr});var zn=class i extends Le{constructor(e=[new v0(0,-.5),new v0(.5,0),new v0(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=W0(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,f=new L,d=new v0,u=new L,m=new L,y=new L,g=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,u.x=p*1,u.y=-g,u.z=p*0,y.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=y.x,u.y+=y.y,u.z+=y.z,u.normalize(),l.push(u.x,u.y,u.z),y.copy(m)}for(let M=0;M<=t;M++){let T=n+M*h*s,b=Math.sin(T),A=Math.cos(T);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*b,f.y=e[E].y,f.z=e[E].x*A,a.push(f.x,f.y,f.z),d.x=M/t,d.y=E/(e.length-1),o.push(d.x,d.y);let _=l[3*E+0]*b,v=l[3*E+1],D=l[3*E+0]*A;c.push(_,v,D)}}for(let M=0;M<t;M++)for(let T=0;T<e.length-1;T++){let b=T+M*e.length,A=b,E=b+e.length,_=b+e.length+1,v=b+1;r.push(A,E,v),r.push(_,v,E)}this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("uv",new te(o,2)),this.setAttribute("normal",new te(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var _t=class i extends Le{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,d=t/l,u=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let M=p*d-a;for(let T=0;T<c;T++){let b=T*f-r;m.push(b,-M,0),y.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let T=M+c*p,b=M+c*(p+1),A=M+1+c*(p+1),E=M+1+c*p;u.push(T,b,E),u.push(b,A,E)}this.setIndex(u),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(y,3)),this.setAttribute("uv",new te(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var fs=class i extends Le{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new L,d=new L,u=[],m=[],y=[],g=[];for(let p=0;p<=n;p++){let M=[],T=p/n,b=a+T*o,A=e*Math.cos(b),E=Math.sqrt(e*e-A*A),_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let v=0;v<=t;v++){let D=v/t,P=s+D*r;f.x=-E*Math.cos(P),f.y=A,f.z=E*Math.sin(P),m.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),g.push(D+_,1-T),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let T=h[p][M+1],b=h[p][M],A=h[p+1][M],E=h[p+1][M+1];(p!==0||a>0)&&u.push(T,b,E),(p!==n-1||l<Math.PI)&&u.push(b,A,E)}this.setIndex(u),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(y,3)),this.setAttribute("uv",new te(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hn=class i extends Le{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],d=new L,u=new L,m=new L;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let p=0;p<=s;p++){let M=p/s*r;u.x=(e+t*Math.cos(g))*Math.cos(M),u.y=(e+t*Math.cos(g))*Math.sin(M),u.z=t*Math.sin(g),c.push(u.x,u.y,u.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),m.subVectors(u,d).normalize(),h.push(m.x,m.y,m.z),f.push(p/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,M=(s+1)*(y-1)+g-1,T=(s+1)*(y-1)+g,b=(s+1)*y+g;l.push(p,M,b),l.push(M,T,b)}this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ps=class i extends Le{constructor(e=new ds(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new v0,h=new L,f=[],d=[],u=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new te(f,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(u,2));function y(){for(let T=0;T<t;T++)g(T);g(r===!1?t:0),M(),p()}function g(T){h=e.getPointAt(T/t,h);let b=a.normals[T],A=a.binormals[T];for(let E=0;E<=s;E++){let _=E/s*Math.PI*2,v=Math.sin(_),D=-Math.cos(_);l.x=D*b.x+v*A.x,l.y=D*b.y+v*A.y,l.z=D*b.z+v*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=t;T++)for(let b=1;b<=s;b++){let A=(s+1)*(T-1)+(b-1),E=(s+1)*T+(b-1),_=(s+1)*T+b,v=(s+1)*(T-1)+b;m.push(A,E,v),m.push(E,_,v)}}function M(){for(let T=0;T<=t;T++)for(let b=0;b<=s;b++)c.x=T/t,c.y=b/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new fc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Zn(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(l9(s))s.isRenderTargetTexture?(N0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(l9(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ke(i){let e={};for(let t=0;t<i.length;t++){let n=Zn(i[t]);for(let s in n)e[s]=n[s]}return e}function l9(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pc(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function l1(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$0.workingColorSpace}var j9={clone:Zn,merge:Ke},mc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Me=class extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mc,this.fragmentShader=gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zn(e.uniforms),this.uniformsGroups=pc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new R0().setHex(s.value);break;case"v2":this.uniforms[n].value=new v0().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new de().fromArray(s.value);break;case"m3":this.uniforms[n].value=new H0().fromArray(s.value);break;case"m4":this.uniforms[n].value=new J0().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Or=class extends Me{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Je=class extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new R0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new R0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new v0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kn=class extends Je{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new v0(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return W0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new R0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new R0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new R0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return On('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){On('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Br=class extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O9,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zr=class extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function li(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var xn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Hr=class extends xn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:To,endingEnd:To}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wo:r=e,o=2*t-n;break;case Ao:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wo:a=e,l=2*n-t;break;case Ao:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,m=(n-t)/(s-t),y=m*m,g=y*m,p=-d*g+2*d*y-d*m,M=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,T=(-1-u)*g+(1.5+u)*y+.5*m,b=u*g-u*y;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+M*a[c+A]+T*a[l+A]+b*a[f+A];return r}},kr=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},Gr=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vr=class extends xn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-t)/(s-t),y=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*m;return r}let d=o*2,u=e-1;for(let m=0;m!==o;++m){let y=a[c+m],g=a[l+m],p=u*d+m*2,M=f[p],T=f[p+1],b=e*d+m*2,A=h[b],E=h[b+1],_=xc(n,t,M,A,s);r[m]=e2(_,y,T,E,g)}return r}};function e2(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function _c(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function xc(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=e2(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=_c(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ct=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=li(t,this.TimeBufferType),this.values=li(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:li(e.times,Array),values:li(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),dr(e.settings)&&(n.settings={inTangents:li(e.settings.inTangents,Array),outTangents:li(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $i:t=this.InterpolantFactoryMethodDiscrete;break;case Tr:t=this.InterpolantFactoryMethodLinear;break;case mr:t=this.InterpolantFactoryMethodSmooth;break;case Eo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return N0("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $i;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return mr;case this.InterpolantFactoryMethodBezier:return Eo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;dr(this.settings)&&(c9(this.settings.inTangents,e),c9(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;dr(this.settings)&&(h9(this.settings.inTangents,e),h9(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z0("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(z0("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){z0("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){z0("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Sl(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){z0("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,u=f+n;for(let m=0;m!==n;++m){let y=t[f+m];if(y!==t[d+m]||y!==t[u+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,dr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function c9(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function h9(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ct.prototype.ValueTypeName="";ct.prototype.TimeBufferType=Float32Array;ct.prototype.ValueBufferType=Float32Array;ct.prototype.DefaultInterpolation=Tr;var vn=class extends ct{constructor(e,t,n){super(e,t,n)}};vn.prototype.ValueTypeName="bool";vn.prototype.ValueBufferType=Array;vn.prototype.DefaultInterpolation=$i;vn.prototype.InterpolantFactoryMethodLinear=void 0;vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wr=class extends ct{constructor(e,t,n,s){super(e,t,n,s)}};Wr.prototype.ValueTypeName="color";var Xr=class extends ct{constructor(e,t,n,s){super(e,t,n,s)}};Xr.prototype.ValueTypeName="number";var qr=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)pt.slerpFlat(r,0,a,c-o,a,c,l);return r}},ms=class extends ct{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new qr(this.times,this.values,this.getValueSize(),e)}};ms.prototype.ValueTypeName="quaternion";ms.prototype.InterpolantFactoryMethodSmooth=void 0;var yn=class extends ct{constructor(e,t,n){super(e,t,n)}};yn.prototype.ValueTypeName="string";yn.prototype.ValueBufferType=Array;yn.prototype.DefaultInterpolation=$i;yn.prototype.InterpolantFactoryMethodLinear=void 0;yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends ct{constructor(e,t,n,s){super(e,t,n,s)}};Yr.prototype.ValueTypeName="vector";var Zr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],m=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},t2=new Zr,$r=class{constructor(e){this.manager=e!==void 0?e:t2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};$r.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mn=class extends Ie{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new R0(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Mi=class extends Mn{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new R0(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},bo=new J0,u9=new L,d9=new L,Si=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new v0(512,512),this.mapType=at,this.map=null,this.mapPass=null,this.matrix=new J0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gn,this._frameExtents=new v0(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;u9.setFromMatrixPosition(e.matrixWorld),t.position.copy(u9),d9.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(d9),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(bo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===fi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fr=new L,pr=new pt,Pt=new L,gs=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new J0,this.projectionMatrix=new J0,this.projectionMatrixInverse=new J0,this.coordinateSystem=ft,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fr,pr,Pt),Pt.x===1&&Pt.y===1&&Pt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,Pt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fr,pr,Pt),Pt.x===1&&Pt.y===1&&Pt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,Pt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pn=new L,f9=new v0,p9=new v0,Be=class extends gs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bn*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pn.x,pn.y).multiplyScalar(-e/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-e/pn.z)}getViewSize(e,t){return this.getViewBounds(e,f9,p9),t.subVectors(p9,f9)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Co=class extends Si{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Bn*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Gn=class extends Mn{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Co}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Po=class extends Si{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0}},_s=class extends Mn{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Po}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Vn=class extends gs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Io=class extends Si{constructor(){super(new Vn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xs=class extends Mn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Io}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var vs=class extends Mn{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};var ci=-90,hi=1,bi=class extends Ie{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(ci,hi,e,t);s.layers=this.layers,this.add(s);let r=new Be(ci,hi,e,t);r.layers=this.layers,this.add(r);let a=new Be(ci,hi,e,t);a.layers=this.layers,this.add(a);let o=new Be(ci,hi,e,t);o.layers=this.layers,this.add(o);let l=new Be(ci,hi,e,t);l.layers=this.layers,this.add(l);let c=new Be(ci,hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ft)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Jr=class extends Be{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var c1="\\[\\]\\.:\\/",vc=new RegExp("["+c1+"]","g"),h1="[^"+c1+"]",yc="[^"+c1.replace("\\.","")+"]",Mc=/((?:WC+[\/:])*)/.source.replace("WC",h1),Sc=/(WCOD+)?/.source.replace("WCOD",yc),bc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",h1),Ec=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",h1),Tc=new RegExp("^"+Mc+Sc+bc+Ec+"$"),wc=["material","materials","bones","map"],Lo=class{constructor(e,t,n){let s=n||me.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},me=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vc,"")}static parseTrackName(e){let t=Tc.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wc.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){N0("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){z0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){z0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){z0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){z0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){z0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){z0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){z0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;z0("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){z0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){z0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Lo;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hu=new Float32Array(1);var Do=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}},m9=new v0,ys=class{constructor(e=new v0(1/0,1/0),t=new v0(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=m9.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,m9).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function u1(i,e,t,n){let s=Ac(n);switch(t){case Ko:return i*e;case Ci:return i*e/s.components*s.byteLength;case ia:return i*e/s.components*s.byteLength;case Tn:return i*e*2/s.components*s.byteLength;case sa:return i*e*2/s.components*s.byteLength;case Qo:return i*e*3/s.components*s.byteLength;case He:return i*e*4/s.components*s.byteLength;case ra:return i*e*4/s.components*s.byteLength;case Es:case Ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ws:case As:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:case ca:return Math.max(i,16)*Math.max(e,8)/4;case aa:case la:return Math.max(i,8)*Math.max(e,8)/2;case ha:case ua:case fa:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case Rs:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pa:case Ia:case La:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Da:case Na:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cs:case Ua:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ac(i){switch(i){case at:case Yo:return{byteLength:1,components:1};case Ri:case Zo:case We:return{byteLength:2,components:1};case ta:case na:return{byteLength:2,components:4};case At:case ea:case st:return{byteLength:4,components:1};case $o:case Jo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?N0("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function b2(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cc(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,m)=>u.start-m.start);let d=0;for(let u=1;u<f.length;u++){let m=f[d],y=f[u];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,f[d]=y)}f.length=d+1;for(let u=0,m=f.length;u<m;u++){let y=f[u];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Pc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ic=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Oc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$c=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,e3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,t3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r3="gl_FragColor = linearToOutputTexel( gl_FragColor );",a3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,l3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,c3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,h3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,M3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,S3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,A3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,P3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I3=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,L3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V3=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,q3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Q3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,j3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s4=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,r4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u4=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,d4=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,f4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,p4=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g4=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x4=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S4=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b4=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,E4=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,T4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P4=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L4=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F4=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,O4=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,B4=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,z4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k4=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,W4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Z4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,J4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t5=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n5=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i5=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r5=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a5=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o5=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,X0={alphahash_fragment:Pc,alphahash_pars_fragment:Ic,alphamap_fragment:Lc,alphamap_pars_fragment:Dc,alphatest_fragment:Nc,alphatest_pars_fragment:Uc,aomap_fragment:Fc,aomap_pars_fragment:Oc,batching_pars_vertex:Bc,batching_vertex:zc,begin_vertex:Hc,beginnormal_vertex:kc,bsdfs:Gc,iridescence_fragment:Vc,bumpmap_pars_fragment:Wc,clipping_planes_fragment:Xc,clipping_planes_pars_fragment:qc,clipping_planes_pars_vertex:Yc,clipping_planes_vertex:Zc,color_fragment:$c,color_pars_fragment:Jc,color_pars_vertex:Kc,color_vertex:Qc,common:jc,defaultnormal_vertex:e3,displacementmap_pars_vertex:t3,displacementmap_vertex:n3,emissivemap_fragment:i3,emissivemap_pars_fragment:s3,colorspace_fragment:r3,colorspace_pars_fragment:a3,envmap_fragment:o3,envmap_common_pars_fragment:l3,envmap_pars_fragment:c3,envmap_pars_vertex:h3,envmap_physical_pars_fragment:M3,envmap_vertex:u3,fog_vertex:d3,fog_pars_vertex:f3,fog_fragment:p3,fog_pars_fragment:m3,gradientmap_pars_fragment:g3,lightmap_pars_fragment:_3,lights_lambert_fragment:x3,lights_lambert_pars_fragment:v3,lights_pars_begin:y3,lights_toon_fragment:S3,lights_toon_pars_fragment:b3,lights_phong_fragment:E3,lights_phong_pars_fragment:T3,lights_physical_fragment:w3,lights_physical_pars_fragment:A3,lights_fragment_begin:R3,lights_fragment_maps:C3,lights_fragment_end:P3,lightprobes_pars_fragment:I3,logdepthbuf_fragment:L3,logdepthbuf_pars_fragment:D3,logdepthbuf_pars_vertex:N3,logdepthbuf_vertex:U3,map_fragment:F3,map_pars_fragment:O3,map_particle_fragment:B3,map_particle_pars_fragment:z3,metalnessmap_fragment:H3,metalnessmap_pars_fragment:k3,morphinstance_vertex:G3,morphcolor_vertex:V3,morphnormal_vertex:W3,morphtarget_pars_vertex:X3,morphtarget_vertex:q3,normal_fragment_begin:Y3,normal_fragment_maps:Z3,normal_pars_fragment:$3,normal_pars_vertex:J3,normal_vertex:K3,normalmap_pars_fragment:Q3,clearcoat_normal_fragment_begin:j3,clearcoat_normal_fragment_maps:e4,clearcoat_pars_fragment:t4,iridescence_pars_fragment:n4,opaque_fragment:i4,packing:s4,premultiplied_alpha_fragment:r4,project_vertex:a4,dithering_fragment:o4,dithering_pars_fragment:l4,roughnessmap_fragment:c4,roughnessmap_pars_fragment:h4,shadowmap_pars_fragment:u4,shadowmap_pars_vertex:d4,shadowmap_vertex:f4,shadowmask_pars_fragment:p4,skinbase_vertex:m4,skinning_pars_vertex:g4,skinning_vertex:_4,skinnormal_vertex:x4,specularmap_fragment:v4,specularmap_pars_fragment:y4,tonemapping_fragment:M4,tonemapping_pars_fragment:S4,transmission_fragment:b4,transmission_pars_fragment:E4,uv_pars_fragment:T4,uv_pars_vertex:w4,uv_vertex:A4,worldpos_vertex:R4,background_vert:C4,background_frag:P4,backgroundCube_vert:I4,backgroundCube_frag:L4,cube_vert:D4,cube_frag:N4,depth_vert:U4,depth_frag:F4,distance_vert:O4,distance_frag:B4,equirect_vert:z4,equirect_frag:H4,linedashed_vert:k4,linedashed_frag:G4,meshbasic_vert:V4,meshbasic_frag:W4,meshlambert_vert:X4,meshlambert_frag:q4,meshmatcap_vert:Y4,meshmatcap_frag:Z4,meshnormal_vert:$4,meshnormal_frag:J4,meshphong_vert:K4,meshphong_frag:Q4,meshphysical_vert:j4,meshphysical_frag:e5,meshtoon_vert:t5,meshtoon_frag:n5,points_vert:i5,points_frag:s5,shadow_vert:r5,shadow_frag:a5,sprite_vert:o5,sprite_frag:l5},x0={common:{diffuse:{value:new R0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H0},alphaMap:{value:null},alphaMapTransform:{value:new H0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H0}},envmap:{envMap:{value:null},envMapRotation:{value:new H0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H0},normalScale:{value:new v0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new R0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new R0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H0},alphaTest:{value:0},uvTransform:{value:new H0}},sprite:{diffuse:{value:new R0(16777215)},opacity:{value:1},center:{value:new v0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H0},alphaMap:{value:null},alphaMapTransform:{value:new H0},alphaTest:{value:0}}},Nt={basic:{uniforms:Ke([x0.common,x0.specularmap,x0.envmap,x0.aomap,x0.lightmap,x0.fog]),vertexShader:X0.meshbasic_vert,fragmentShader:X0.meshbasic_frag},lambert:{uniforms:Ke([x0.common,x0.specularmap,x0.envmap,x0.aomap,x0.lightmap,x0.emissivemap,x0.bumpmap,x0.normalmap,x0.displacementmap,x0.fog,x0.lights,{emissive:{value:new R0(0)},envMapIntensity:{value:1}}]),vertexShader:X0.meshlambert_vert,fragmentShader:X0.meshlambert_frag},phong:{uniforms:Ke([x0.common,x0.specularmap,x0.envmap,x0.aomap,x0.lightmap,x0.emissivemap,x0.bumpmap,x0.normalmap,x0.displacementmap,x0.fog,x0.lights,{emissive:{value:new R0(0)},specular:{value:new R0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X0.meshphong_vert,fragmentShader:X0.meshphong_frag},standard:{uniforms:Ke([x0.common,x0.envmap,x0.aomap,x0.lightmap,x0.emissivemap,x0.bumpmap,x0.normalmap,x0.displacementmap,x0.roughnessmap,x0.metalnessmap,x0.fog,x0.lights,{emissive:{value:new R0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X0.meshphysical_vert,fragmentShader:X0.meshphysical_frag},toon:{uniforms:Ke([x0.common,x0.aomap,x0.lightmap,x0.emissivemap,x0.bumpmap,x0.normalmap,x0.displacementmap,x0.gradientmap,x0.fog,x0.lights,{emissive:{value:new R0(0)}}]),vertexShader:X0.meshtoon_vert,fragmentShader:X0.meshtoon_frag},matcap:{uniforms:Ke([x0.common,x0.bumpmap,x0.normalmap,x0.displacementmap,x0.fog,{matcap:{value:null}}]),vertexShader:X0.meshmatcap_vert,fragmentShader:X0.meshmatcap_frag},points:{uniforms:Ke([x0.points,x0.fog]),vertexShader:X0.points_vert,fragmentShader:X0.points_frag},dashed:{uniforms:Ke([x0.common,x0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X0.linedashed_vert,fragmentShader:X0.linedashed_frag},depth:{uniforms:Ke([x0.common,x0.displacementmap]),vertexShader:X0.depth_vert,fragmentShader:X0.depth_frag},normal:{uniforms:Ke([x0.common,x0.bumpmap,x0.normalmap,x0.displacementmap,{opacity:{value:1}}]),vertexShader:X0.meshnormal_vert,fragmentShader:X0.meshnormal_frag},sprite:{uniforms:Ke([x0.sprite,x0.fog]),vertexShader:X0.sprite_vert,fragmentShader:X0.sprite_frag},background:{uniforms:{uvTransform:{value:new H0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X0.background_vert,fragmentShader:X0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H0}},vertexShader:X0.backgroundCube_vert,fragmentShader:X0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X0.cube_vert,fragmentShader:X0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X0.equirect_vert,fragmentShader:X0.equirect_frag},distance:{uniforms:Ke([x0.common,x0.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X0.distance_vert,fragmentShader:X0.distance_frag},shadow:{uniforms:Ke([x0.lights,x0.fog,{color:{value:new R0(0)},opacity:{value:1}}]),vertexShader:X0.shadow_vert,fragmentShader:X0.shadow_frag}};Nt.physical={uniforms:Ke([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H0},clearcoatNormalScale:{value:new v0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new H0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H0},sheen:{value:0},sheenColor:{value:new R0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H0},transmissionSamplerSize:{value:new v0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H0},attenuationDistance:{value:0},attenuationColor:{value:new R0(0)},specularColor:{value:new R0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H0},anisotropyVector:{value:new v0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H0}}]),vertexShader:X0.meshphysical_vert,fragmentShader:X0.meshphysical_frag};var Ba={r:0,b:0,g:0},c5=new J0,E2=new H0;E2.set(-1,0,0,0,1,0,0,0,1);function h5(i,e,t,n,s,r){let a=new R0(0),o=s===!0?0:1,l,c,h=null,f=0,d=null;function u(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let b=M.backgroundBlurriness>0;T=e.get(T,b)}return T}function m(M){let T=!1,b=u(M);b===null?g(a,o):b&&b.isColor&&(g(b,1),T=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,T){let b=u(T);b&&b.isCubeTexture?(c===void 0&&(c=new ae(new $e(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:Zn(Nt.backgroundCube.uniforms),vertexShader:Nt.backgroundCube.vertexShader,fragmentShader:Nt.backgroundCube.fragmentShader,side:it,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c5.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(E2),c.material.toneMapped=$0.getTransfer(b.colorSpace)!==ee,(h!==b||f!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ae(new _t(2,2),new Me({name:"BackgroundMaterial",uniforms:Zn(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=$0.getTransfer(b.colorSpace)!==ee,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,T){M.getRGB(Ba,l1(i)),t.buffers.color.setClear(Ba.r,Ba.g,Ba.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:y,dispose:p}}function u5(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(I,N,U,C,H){let V=!1,z=f(I,C,U,N);r!==z&&(r=z,c(r.object)),V=u(I,C,U,H),V&&m(I,C,U,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(I,N,U,C),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function f(I,N,U,C){let H=C.wireframe===!0,V=n[N.id];V===void 0&&(V={},n[N.id]=V);let z=I.isInstancedMesh===!0?I.id:0,t0=V[z];t0===void 0&&(t0={},V[z]=t0);let q=t0[U.id];q===void 0&&(q={},t0[U.id]=q);let k=q[H];return k===void 0&&(k=d(l()),q[H]=k),k}function d(I){let N=[],U=[],C=[];for(let H=0;H<t;H++)N[H]=0,U[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:C,object:I,attributes:{},index:null}}function u(I,N,U,C){let H=r.attributes,V=N.attributes,z=0,t0=U.getAttributes();for(let q in t0)if(t0[q].location>=0){let J=H[q],h0=V[q];if(h0===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(h0=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(h0=I.instanceColor)),J===void 0||J.attribute!==h0||h0&&J.data!==h0.data)return!0;z++}return r.attributesNum!==z||r.index!==C}function m(I,N,U,C){let H={},V=N.attributes,z=0,t0=U.getAttributes();for(let q in t0)if(t0[q].location>=0){let J=V[q];J===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));let h0={};h0.attribute=J,J&&J.data&&(h0.data=J.data),H[q]=h0,z++}r.attributes=H,r.attributesNum=z,r.index=C}function y(){let I=r.newAttributes;for(let N=0,U=I.length;N<U;N++)I[N]=0}function g(I){p(I,0)}function p(I,N){let U=r.newAttributes,C=r.enabledAttributes,H=r.attributeDivisors;U[I]=1,C[I]===0&&(i.enableVertexAttribArray(I),C[I]=1),H[I]!==N&&(i.vertexAttribDivisor(I,N),H[I]=N)}function M(){let I=r.newAttributes,N=r.enabledAttributes;for(let U=0,C=N.length;U<C;U++)N[U]!==I[U]&&(i.disableVertexAttribArray(U),N[U]=0)}function T(I,N,U,C,H,V,z){z===!0?i.vertexAttribIPointer(I,N,U,H,V):i.vertexAttribPointer(I,N,U,C,H,V)}function b(I,N,U,C){y();let H=C.attributes,V=U.getAttributes(),z=N.defaultAttributeValues;for(let t0 in V){let q=V[t0];if(q.location>=0){let k=H[t0];if(k===void 0&&(t0==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),t0==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){let J=k.normalized,h0=k.itemSize,p0=e.get(k);if(p0===void 0)continue;let B=p0.buffer,K=p0.type,i0=p0.bytesPerElement,y0=K===i.INT||K===i.UNSIGNED_INT||k.gpuType===ea;if(k.isInterleavedBufferAttribute){let l0=k.data,n0=l0.isInterleavedBuffer===!0?l0.stride:l0.itemSize,I0=k.offset;if(l0.isInstancedInterleavedBuffer||l0.isInstancedBufferAttribute){for(let T0=0;T0<q.locationSize;T0++)p(q.location+T0,l0.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=l0.meshPerAttribute*l0.count)}else for(let T0=0;T0<q.locationSize;T0++)g(q.location+T0);i.bindBuffer(i.ARRAY_BUFFER,B);for(let T0=0;T0<q.locationSize;T0++)T(q.location+T0,h0/q.locationSize,K,J,n0*i0,(I0+h0/q.locationSize*T0)*i0,y0)}else{if(k.isInstancedBufferAttribute){for(let l0=0;l0<q.locationSize;l0++)p(q.location+l0,k.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let l0=0;l0<q.locationSize;l0++)g(q.location+l0);i.bindBuffer(i.ARRAY_BUFFER,B);for(let l0=0;l0<q.locationSize;l0++)T(q.location+l0,h0/q.locationSize,K,J,h0*i0,h0/q.locationSize*l0*i0,y0)}}else if(z!==void 0){let J=z[t0];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(q.location,J);break;case 3:i.vertexAttrib3fv(q.location,J);break;case 4:i.vertexAttrib4fv(q.location,J);break;default:i.vertexAttrib1fv(q.location,J)}}}}M()}function A(){D();for(let I in n){let N=n[I];for(let U in N){let C=N[U];for(let H in C){let V=C[H];for(let z in V)h(V[z].object),delete V[z];delete C[H]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let U in N){let C=N[U];for(let H in C){let V=C[H];for(let z in V)h(V[z].object),delete V[z];delete C[H]}}delete n[I.id]}function _(I){for(let N in n){let U=n[N];for(let C in U){let H=U[C];if(H[I.id]===void 0)continue;let V=H[I.id];for(let z in V)h(V[z].object),delete V[z];delete H[I.id]}}}function v(I){for(let N in n){let U=n[N],C=I.isInstancedMesh===!0?I.id:0,H=U[C];if(H!==void 0){for(let V in H){let z=H[V];for(let t0 in z)h(z[t0].object),delete z[t0];delete H[V]}delete U[C],Object.keys(U).length===0&&delete n[N]}}}function D(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function d5(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function f5(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==He&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let v=_===We&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==at&&_!==st&&!v&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(N0("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&N0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&N0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:b,maxSamples:A,samples:E}}function p5(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Et,o=new H0,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let m=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,T=M*4,b=p.clippingState||null;l.value=b,b=h(m,d,T,u);for(let A=0;A!==T;++A)b[A]=t[A];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,m){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=u+y*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,b=u;T!==y;++T,b+=4)a.copy(f[T]).applyMatrix4(M,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var Ls=class extends re{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ls(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $e(5,5,5),r=new Me({name:"CubemapFromEquirect",uniforms:Zn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:it,blending:Wn});r.uniforms.tEquirect.value=t;let a=new ae(s,r),o=t.minFilter;return t.minFilter===ht&&(t.minFilter=ue),new bi(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},n2=256,m5=3,g5=20,T2=256,w2=16,_5=3,x5=new L,v5=new R0,Di=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new bi(1,10,null),this._boxMesh=new ae(new $e(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=x5}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(v5));let g=new bi(n,s,h);return g.position.copy(o),g.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=m,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(n2,r1(e))}_fromTexture(e,t){e.mapping===qn||e.mapping===Ai?this._setSize(e.image.length===0?n2:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=i2(e,!1,!1),n=Math.log2(e)-m5;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=i2(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===qn||e.mapping===Ai?(this._cubemapMaterial===null&&(this._cubemapMaterial=r2()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=s2()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=y5(),this._integrationMaterial=M5());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/w2);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-_5)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(T2*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=S5());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function i2(i,e,t){return new Ls(i,{minFilter:ht,generateMipmaps:e,type:We,colorSpace:Ji,depthBuffer:t})}function Ds(i,e,t){return new Me({name:i,uniforms:e,vertexShader:X0.cube_vert,fragmentShader:t,side:it,blending:Wn,depthTest:!1,depthWrite:!1})}function y5(){return Ds("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${T2}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function M5(){return Ds("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:w2}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function S5(){return Ds("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${g5}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function s2(){return Ds("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function r2(){return Ds("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function b5(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Kr||u===Qr)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let y=new Ls(m.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,m=u===Kr||u===Qr,y=u===qn||u===Ai;if(m||y){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Di(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return m&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Di(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,u){return u===Kr?d.mapping=qn:u===Qr&&(d.mapping=Ai),d}function l(d){let u=0,m=6;for(let y=0;y<m;y++)d[y]!==void 0&&u++;return u===m}function c(d){let u=d.target;u.removeEventListener("dispose",c);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function E5(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&On("WebGLRenderer: "+n+" extension not supported."),s}}}function T5(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let y=r.get(m);y&&(e.remove(y),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(m){let y=m.attributes;for(let g in y)e.update(y[g],i.ARRAY_BUFFER)}function f(m){let y=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let M=y!==null?y.array.length:g.array.length/3-1,T=g.count>=65535?is:ns,b=new T(Math.ceil(M/3)*6,1),A=b.array;if(y!==null){let _=y.array;p=y.version;for(let v=0,D=0;v<M;v+=3){let P=_[v+0],I=_[v+1],N=_[v+2];A[D++]=P,A[D++]=I,A[D++]=I,A[D++]=N,A[D++]=N,A[D++]=P}}else{p=g.version;for(let _=0,v=0;_<M;_+=3){let D=_+0,P=_+1,I=_+2;A[v++]=D,A[v++]=P,A[v++]=P,A[v++]=I,A[v++]=I,A[v++]=D}}b.version=p;let E=r.get(m);E&&e.remove(E),r.set(m,b)}function d(m){let y=r.get(m);if(y){let g=m.index;g!==null&&y.version<g.version&&f(m)}else f(m);return r.get(m)}function u(){for(let m in s){let y=s[m].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function w5(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,f*a,u),t.update(d,n,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let y=0;for(let g=0;g<u;g++)y+=d[g];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function A5(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:z0("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function R5(i,e,t){let n=new WeakMap,s=new de;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let D=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;u===!0&&(T=1),m===!0&&(T=2),y===!0&&(T=3);let b=o.attributes.position.count*T,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*A*4*f),_=new ji(E,b,A,f);_.type=st,_.needsUpdate=!0;let v=T*4;for(let P=0;P<f;P++){let I=g[P],N=p[P],U=M[P],C=b*A*4*P;for(let H=0;H<I.count;H++){let V=H*v;u===!0&&(s.fromBufferAttribute(I,H),E[C+V+0]=s.x,E[C+V+1]=s.y,E[C+V+2]=s.z,E[C+V+3]=0),m===!0&&(s.fromBufferAttribute(N,H),E[C+V+4]=s.x,E[C+V+5]=s.y,E[C+V+6]=s.z,E[C+V+7]=0),y===!0&&(s.fromBufferAttribute(U,H),E[C+V+8]=s.x,E[C+V+9]=s.y,E[C+V+10]=s.z,E[C+V+11]=U.itemSize===4?s.w:1)}}d={count:f,texture:_,size:new v0(b,A)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let y=0;y<c.length;y++)u+=c[y];let m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function C5(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var P5={[Ho]:"LINEAR_TONE_MAPPING",[ko]:"REINHARD_TONE_MAPPING",[Go]:"CINEON_TONE_MAPPING",[Vo]:"ACES_FILMIC_TONE_MAPPING",[Xo]:"AGX_TONE_MAPPING",[qo]:"NEUTRAL_TONE_MAPPING",[Wo]:"CUSTOM_TONE_MAPPING"};function I5(i,e,t,n,s,r){let a=new re(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Le;h.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new te([0,2,0,0,2,0],2));let f=new Or({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ae(h,f),u=new Vn(-1,1,1,-1,0,1),m=null,y=null,g=!1,p,M=null,T=[],b=!1;this.setSize=function(A,E){a.setSize(A,E),o!==null&&o.setSize(A,E),l!==null&&l.setSize(A,E);for(let _=0;_<T.length;_++){let v=T[_];v.setSize&&v.setSize(A,E)}},this.setEffects=function(A){T=A,b=T.length>0&&T[0].isRenderPass===!0;let E=a.width,_=a.height;T.length>0&&o===null&&(o=new re(E,_,{type:We,depthBuffer:!1,stencilBuffer:!1}),l=new re(E,_,{type:We,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&T.some(D=>D.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&c===null&&(c=new Kt(E,_),r===!0&&(c.format=Qt,c.type=Yn)),a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let D=0;D<T.length;D++){let P=T[D];P.setSize&&P.setSize(E,_),v&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(A,E){if(g||A.toneMapping===xt&&T.length===0)return!1;if(M=E,E!==null){let _=E.width,v=E.height;(a.width!==_||a.height!==v)&&this.setSize(_,v)}return b===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=xt,!0},this.hasRenderPass=function(){return b},this.end=function(A,E){A.toneMapping=p,g=!0;let _=a,v=o;for(let D=0;D<T.length;D++){let P=T[D];P.enabled!==!1&&(P.render(A,v,_,E),P.needsSwap!==!1&&(_=v,v=v===o?l:o))}if(m!==A.outputColorSpace||y!==A.toneMapping){m=A.outputColorSpace,y=A.toneMapping,f.defines={},$0.getTransfer(m)===ee&&(f.defines.SRGB_TRANSFER="");let D=P5[y];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(M),A.render(d,u),M=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var A2=new nt,R2=new Kt(1,1),C2=new cs(1),P2=new ji,I2=new gi,L2=new ls,a2=[],o2=[],l2=new Float32Array(16),c2=new Float32Array(9),h2=new Float32Array(4);function Ni(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=a2[s];if(r===void 0&&(r=new Float32Array(s),a2[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function De(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ne(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ka(i,e){let t=o2[e];t===void 0&&(t=new Int32Array(e),o2[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function L5(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function D5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(De(t,e))return;i.uniform2fv(this.addr,e),Ne(t,e)}}function N5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(De(t,e))return;i.uniform3fv(this.addr,e),Ne(t,e)}}function U5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(De(t,e))return;i.uniform4fv(this.addr,e),Ne(t,e)}}function F5(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(De(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ne(t,e)}else{if(De(t,n))return;h2.set(n),i.uniformMatrix2fv(this.addr,!1,h2),Ne(t,n)}}function O5(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(De(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ne(t,e)}else{if(De(t,n))return;c2.set(n),i.uniformMatrix3fv(this.addr,!1,c2),Ne(t,n)}}function B5(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(De(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ne(t,e)}else{if(De(t,n))return;l2.set(n),i.uniformMatrix4fv(this.addr,!1,l2),Ne(t,n)}}function z5(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function H5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(De(t,e))return;i.uniform2iv(this.addr,e),Ne(t,e)}}function k5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(De(t,e))return;i.uniform3iv(this.addr,e),Ne(t,e)}}function G5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(De(t,e))return;i.uniform4iv(this.addr,e),Ne(t,e)}}function V5(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function W5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(De(t,e))return;i.uniform2uiv(this.addr,e),Ne(t,e)}}function X5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(De(t,e))return;i.uniform3uiv(this.addr,e),Ne(t,e)}}function q5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(De(t,e))return;i.uniform4uiv(this.addr,e),Ne(t,e)}}function Ga(i){return i.version===0&&(i.compareFunction=t1,i.needsUpdate=!0),i}function Y5(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ga(R2):r=A2,t.setTexture2D(e||r,s)}function Z5(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||I2,s)}function $5(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ga(C2):r=L2,t.setTextureCube(e||r,s)}function J5(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||P2,s)}function K5(i){switch(i){case 5126:return L5;case 35664:return D5;case 35665:return N5;case 35666:return U5;case 35674:return F5;case 35675:return O5;case 35676:return B5;case 5124:case 35670:return z5;case 35667:case 35671:return H5;case 35668:case 35672:return k5;case 35669:case 35673:return G5;case 5125:return V5;case 36294:return W5;case 36295:return X5;case 36296:return q5;case 35678:case 36198:case 36298:case 36306:case 35682:return Y5;case 35679:case 36299:case 36307:return Z5;case 35680:case 36300:case 36308:case 36293:return $5;case 36289:case 36303:case 36311:case 36292:return J5}}function Q5(i,e){i.uniform1fv(this.addr,e)}function j5(i,e){let t=Ni(e,this.size,2);i.uniform2fv(this.addr,t)}function eh(i,e){let t=Ni(e,this.size,3);i.uniform3fv(this.addr,t)}function th(i,e){let t=Ni(e,this.size,4);i.uniform4fv(this.addr,t)}function nh(i,e){let t=Ni(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ih(i,e){let t=Ni(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sh(i,e){let t=Ni(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rh(i,e){i.uniform1iv(this.addr,e)}function ah(i,e){i.uniform2iv(this.addr,e)}function oh(i,e){i.uniform3iv(this.addr,e)}function lh(i,e){i.uniform4iv(this.addr,e)}function ch(i,e){i.uniform1uiv(this.addr,e)}function hh(i,e){i.uniform2uiv(this.addr,e)}function uh(i,e){i.uniform3uiv(this.addr,e)}function dh(i,e){i.uniform4uiv(this.addr,e)}function fh(i,e,t){let n=this.cache,s=e.length,r=ka(t,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ga(R2):a=A2;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ph(i,e,t){let n=this.cache,s=e.length,r=ka(t,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||I2,r[a])}function mh(i,e,t){let n=this.cache,s=e.length,r=ka(t,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ga(C2):a=L2;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function gh(i,e,t){let n=this.cache,s=e.length,r=ka(t,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||P2,r[a])}function _h(i){switch(i){case 5126:return Q5;case 35664:return j5;case 35665:return eh;case 35666:return th;case 35674:return nh;case 35675:return ih;case 35676:return sh;case 5124:case 35670:return rh;case 35667:case 35671:return ah;case 35668:case 35672:return oh;case 35669:case 35673:return lh;case 5125:return ch;case 36294:return hh;case 36295:return uh;case 36296:return dh;case 35678:case 36198:case 36298:case 36306:case 35682:return fh;case 35679:case 36299:case 36307:return ph;case 35680:case 36300:case 36308:case 36293:return mh;case 36289:case 36303:case 36311:case 36292:return gh}}var p1=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=K5(t.type)}},m1=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_h(t.type)}},g1=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},d1=/(\w+)(\])?(\[|\.)?/g;function u2(i,e){i.seq.push(e),i.map[e.id]=e}function xh(i,e,t){let n=i.name,s=n.length;for(d1.lastIndex=0;;){let r=d1.exec(n),a=d1.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){u2(t,c===void 0?new p1(o,i,e):new m1(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new g1(o),u2(t,f)),t=f}}}var Li=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);xh(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function d2(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var vh=37297,yh=0;function Mh(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var f2=new H0;function Sh(i){$0._getMatrix(f2,$0.workingColorSpace,i);let e=`mat3( ${f2.elements.map(t=>t.toFixed(4))} )`;switch($0.getTransfer(i)){case Ki:return[e,"LinearTransferOETF"];case ee:return[e,"sRGBTransferOETF"];default:return N0("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function p2(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Mh(i.getShaderSource(e),o)}else return r}function bh(i,e){let t=Sh(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Eh={[Ho]:"Linear",[ko]:"Reinhard",[Go]:"Cineon",[Vo]:"ACESFilmic",[Xo]:"AgX",[qo]:"Neutral",[Wo]:"Custom"};function Th(i,e){let t=Eh[e];return t===void 0?(N0("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var za=new L;function wh(){$0.getLuminanceCoefficients(za);let i=za.x.toFixed(4),e=za.y.toFixed(4),t=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ah(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function Rh(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ch(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Is(i){return i!==""}function m2(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function g2(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ph=/^[ \t]*#include +<([\w\d./]+)>/gm;function _1(i){return i.replace(Ph,Ih)}function Ih(i,e){let t=X0[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _1(t)}var Lh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _2(i){return i.replace(Lh,Dh)}function Dh(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function x2(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Nh={[Ms]:"SHADOWMAP_TYPE_PCF",[Ei]:"SHADOWMAP_TYPE_VSM"};function Uh(i){return Nh[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fh={[Ai]:"ENVMAP_MODE_REFRACTION"};function Oh(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fh[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bh={[zo]:"ENVMAP_BLENDING_MULTIPLY",[N9]:"ENVMAP_BLENDING_MIX",[U9]:"ENVMAP_BLENDING_ADD"};function zh(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bh[i.combine]||"ENVMAP_BLENDING_NONE"}function Hh(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Uh(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Oh(t),f=zh(t),d=Ah(t),u=Rh(r),m=s.createProgram(),y,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Is).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Is).join(`
`),g.length>0&&(g+=`
`)):(y=[x2(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),g=[x2(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xt?"#define TONE_MAPPING":"",t.toneMapping!==xt?X0.tonemapping_pars_fragment:"",t.toneMapping!==xt?Th("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",X0.colorspace_pars_fragment,bh("linearToOutputTexel",t.outputColorSpace),wh(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),a=_1(a),a=m2(a,t),a=g2(a,t),o=_1(o),o=m2(o,t),o=g2(o,t),a=_2(a),o=_2(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===n1?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===n1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=p+y+a,T=p+g+o,b=d2(s,s.VERTEX_SHADER,M),A=d2(s,s.FRAGMENT_SHADER,T);s.attachShader(m,b),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(P){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(m)||"",N=s.getShaderInfoLog(b)||"",U=s.getShaderInfoLog(A)||"",C=I.trim(),H=N.trim(),V=U.trim(),z=!0,t0=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,A);else{let q=p2(s,b,"vertex"),k=p2(s,A,"fragment");z0("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+q+`
`+k)}else C!==""?N0("WebGLProgram: Program Info Log:",C):(H===""||V==="")&&(t0=!1);t0&&(P.diagnostics={runnable:z,programLog:C,vertexShader:{log:H,prefix:y},fragmentShader:{log:V,prefix:g}})}s.deleteShader(b),s.deleteShader(A),_=new Li(s,m),v=Ch(s,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,vh)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yh++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=A,this}var kh=0,x1=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new v1(e),t.set(e,n)),n}},v1=class{constructor(e){this.id=kh++,this.code=e,this.usedTimes=0}};function Gh(i){return i===Tn||i===Rs||i===Cs}function Vh(i,e,t,n,s,r){let a=new es,o=new x1,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,v,D,P,I,N){let U=P.fog,C=I.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||H,V),t0=d[_.type],q=n.precision;_.precision!==null&&(q=n.getMaxPrecision(_.precision),q!==_.precision&&N0("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let k=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,J=k!==void 0?k.length:0,h0=0;C.morphAttributes.position!==void 0&&(h0=1),C.morphAttributes.normal!==void 0&&(h0=2),C.morphAttributes.color!==void 0&&(h0=3);let p0,B,K,i0;if(t0){let M0=Nt[t0];p0=M0.vertexShader,B=M0.fragmentShader}else{p0=_.vertexShader,B=_.fragmentShader;let M0=o.getVertexShaderStage(_),Q0=o.getFragmentShaderStage(_);o.update(_,M0,Q0),K=M0.id,i0=Q0.id}let y0=i.getRenderTarget(),l0=i.state.buffers.depth.getReversed(),n0=I.isInstancedMesh===!0,I0=I.isBatchedMesh===!0,T0=!!_.map,G0=!!_.matcap,U0=!!z,O0=U0&&z.isPMREMTexture===!0,Se=!!_.aoMap,ge=!!_.lightMap,Te=!!_.bumpMap&&_.wireframe===!1,se=!!_.normalMap,je=!!_.displacementMap,le=!!_.emissiveMap,ke=!!_.metalnessMap,Re=!!_.roughnessMap,Ce=_.anisotropy>0,O=_.clearcoat>0,Ue=_.diffuseRoughness>0,ce=_.dispersion>0,ne=_.retroreflectivity>0,m0=_.iridescence>0,_e=_.sheen>0,L0=_.transmission>0,B0=Ce&&!!_.anisotropyMap,w=O&&!!_.clearcoatMap,x=O&&!!_.clearcoatNormalMap,G=O&&!!_.clearcoatRoughnessMap,a0=Ue&&!!_.diffuseRoughnessMap,e0=m0&&!!_.iridescenceMap,u0=m0&&!!_.iridescenceThicknessMap,d0=_e&&!!_.sheenColorMap,Q=_e&&!!_.sheenRoughnessMap,j=!!_.specularMap,f0=!!_.specularColorMap,R=!!_.specularIntensityMap,Z=L0&&!!_.transmissionMap,Y=L0&&!!_.thicknessMap,s0=!!_.gradientMap,c0=!!_.alphaMap,o0=_.alphaTest>0,S0=!!_.alphaHash,D0=!!_.extensions,r0=xt;_.toneMapped&&(y0===null||y0.isXRRenderTarget===!0)&&(r0=i.toneMapping);let C0=O0?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,F0={shaderID:t0,shaderType:_.type,shaderName:_.name,vertexShader:p0,fragmentShader:B,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:i0,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:I0,batchingColor:I0&&I._colorsTexture!==null,instancing:n0,instancingColor:n0&&I.instanceColor!==null,instancingMorph:n0&&I.morphTexture!==null,outputColorSpace:y0===null?i.outputColorSpace:y0.isXRRenderTarget===!0?y0.texture.colorSpace:$0.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:T0,matcap:G0,envMap:U0,envMapMode:U0&&z.mapping,envMapPMREM:O0,envMapMaxLod:O0?C0.length-1:null,envMapSize:O0?C0[0].width:null,aoMap:Se,lightMap:ge,bumpMap:Te,normalMap:se,displacementMap:je,emissiveMap:le,normalMapObjectSpace:se&&_.normalMapType===B9,normalMapTangentSpace:se&&_.normalMapType===Fa,packedNormalMap:se&&_.normalMapType===Fa&&Gh(_.normalMap.format),metalnessMap:ke,roughnessMap:Re,anisotropy:Ce,anisotropyMap:B0,clearcoat:O,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:G,diffuseRoughness:Ue,diffuseRoughnessMap:a0,dispersion:ce,retroreflection:ne,iridescence:m0,iridescenceMap:e0,iridescenceThicknessMap:u0,sheen:_e,sheenColorMap:d0,sheenRoughnessMap:Q,specularMap:j,specularColorMap:f0,specularIntensityMap:R,transmission:L0,transmissionMap:Z,thicknessMap:Y,gradientMap:s0,opaque:_.transparent===!1&&_.blending===Ti&&_.alphaToCoverage===!1,alphaMap:c0,alphaTest:o0,alphaHash:S0,combine:_.combine,mapUv:T0&&u(_.map.channel),aoMapUv:Se&&u(_.aoMap.channel),lightMapUv:ge&&u(_.lightMap.channel),bumpMapUv:Te&&u(_.bumpMap.channel),normalMapUv:se&&u(_.normalMap.channel),displacementMapUv:je&&u(_.displacementMap.channel),emissiveMapUv:le&&u(_.emissiveMap.channel),metalnessMapUv:ke&&u(_.metalnessMap.channel),roughnessMapUv:Re&&u(_.roughnessMap.channel),anisotropyMapUv:B0&&u(_.anisotropyMap.channel),clearcoatMapUv:w&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:a0&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:e0&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:u0&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:d0&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&u(_.sheenRoughnessMap.channel),specularMapUv:j&&u(_.specularMap.channel),specularColorMapUv:f0&&u(_.specularColorMap.channel),specularIntensityMapUv:R&&u(_.specularIntensityMap.channel),transmissionMapUv:Z&&u(_.transmissionMap.channel),thicknessMapUv:Y&&u(_.thicknessMap.channel),alphaMapUv:c0&&u(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(se||Ce),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!C.attributes.uv&&(T0||c0),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:l0,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:h0,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:N.filter(M0=>M0.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:r0,decodeVideoTexture:T0&&_.map.isVideoTexture===!0&&$0.getTransfer(_.map.colorSpace)===ee,decodeVideoTextureEmissive:le&&_.emissiveMap.isVideoTexture===!0&&$0.getTransfer(_.emissiveMap.colorSpace)===ee,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===rt,flipSided:_.side===it,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:D0&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(D0&&_.extensions.multiDraw===!0||I0)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return F0.vertexUv1s=l.has(1),F0.vertexUv2s=l.has(2),F0.vertexUv3s=l.has(3),l.clear(),F0}function y(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)v.push(D),v.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(g(v,_),p(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function g(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapPMREM),_.push(v.envMapMaxLod),_.push(v.envMapSize),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.diffuseRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.numSunLights),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numSunLightShadows),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.numLightProbeGrids),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function p(_,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let v=d[_.type],D;if(v){let P=Nt[v];D=j9.clone(P.uniforms)}else D=_.uniforms;return D}function T(_,v){let D=h.get(v);return D!==void 0?++D.usedTimes:(D=new Hh(i,v,_,s),c.push(D),h.set(v,D)),D}function b(_){if(--_.usedTimes===0){let v=c.indexOf(_);c[v]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:M,acquireProgram:T,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:E}}function Wh(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function v2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function y2(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,m,y,g,p){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:u,material:m,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:p},i[e]=M):(M.id=d.id,M.object=d,M.geometry=u,M.material=m,M.materialVariant=a(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=g,M.group=p),e++,M}function l(d,u,m,y,g,p,M){M.reversedDepth===!0&&(g=-g);let T=o(d,u,m,y,g,p);m.transmission>0?n.push(T):m.transparent===!0?s.push(T):t.push(T)}function c(d,u,m,y,g,p){let M=o(d,u,m,y,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,u){t.length>1&&t.sort(d||Xh),n.length>1&&n.sort(u||v2),s.length>1&&s.sort(u||v2)}function f(){for(let d=e,u=i.length;d<u;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function qh(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new y2,i.set(n,[a])):s>=r.length?(a=new y2,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yh(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new R0};break;case"SpotLight":t={position:new L,direction:new L,color:new R0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new R0,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new R0,groundColor:new R0};break;case"RectAreaLight":t={color:new R0,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Zh(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new v0};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new v0};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new v0,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var $h=0;function Jh(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kh(i){let e=new Yh,t=Zh(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new J0,a=new J0;function o(c){let h=0,f=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let u=0,m=0,y=0,g=0,p=0,M=0,T=0,b=0,A=0,E=0,_=0,v=0,D=0,P=0;c.sort(Jh);for(let N=0,U=c.length;N<U;N++){let C=c[N],H=C.color,V=C.intensity,z=C.distance,t0=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Tn?t0=C.shadow.map.texture:t0=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=H.r*V,f+=H.g*V,d+=H.b*V;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],V);P++}else if(C.isSunLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,J=t.get(C);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[m]=J,n.sunShadowMap[m]=t0;let h0=k.getViewportCount();for(let p0=0;p0<h0;p0++)n.sunShadowMatrix[y+p0]=k.getMatrix(p0),n.sunShadowCascade[y+p0]=k._cascadeData[p0];y+=h0,m++}n.sun[u]=q,u++}else if(C.isDirectionalLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,J=t.get(C);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=t0,n.directionalShadowMatrix[g]=C.shadow.matrix,A++}n.directional[g]=q,g++}else if(C.isSpotLight){let q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(H).multiplyScalar(V),q.distance=z,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[M]=q;let k=C.shadow;if(C.map&&(n.spotLightMap[v]=C.map,v++,k.updateMatrices(C),C.castShadow&&D++),n.spotLightMatrix[M]=k.matrix,C.castShadow){let J=t.get(C);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,n.spotShadow[M]=J,n.spotShadowMap[M]=t0,_++}M++}else if(C.isRectAreaLight){let q=e.get(C);q.color.copy(H).multiplyScalar(V),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=q,T++}else if(C.isPointLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){let k=C.shadow,J=t.get(C);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,J.shadowCameraNear=k.camera.near,J.shadowCameraFar=k.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=t0,n.pointShadowMatrix[p]=C.shadow.matrix,E++}n.point[p]=q,p++}else if(C.isHemisphereLight){let q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(V),q.groundColor.copy(C.groundColor).multiplyScalar(V),n.hemi[b]=q,b++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=x0.LTC_FLOAT_1,n.rectAreaLTC2=x0.LTC_FLOAT_2):(n.rectAreaLTC1=x0.LTC_HALF_1,n.rectAreaLTC2=x0.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let I=n.hash;(I.sunLength!==u||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==T||I.hemiLength!==b||I.numSunShadows!==m||I.numDirectionalShadows!==A||I.numPointShadows!==E||I.numSpotShadows!==_||I.numSpotMaps!==v||I.numLightProbes!==P)&&(n.sun.length=u,n.directional.length=g,n.spot.length=M,n.rectArea.length=T,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+v-D,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=P,I.sunLength=u,I.directionalLength=g,I.pointLength=p,I.spotLength=M,I.rectAreaLength=T,I.hemiLength=b,I.numSunShadows=m,I.numDirectionalShadows=A,I.numPointShadows=E,I.numSpotShadows=_,I.numSpotMaps=v,I.numLightProbes=P,n.version=$h++)}function l(c,h){let f=0,d=0,u=0,m=0,y=0,g=0,p=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let b=c[M];if(b.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),f++}else if(b.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(b.isSpotLight){let A=n.spot[m];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let A=n.rectArea[y];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let A=n.point[u];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),u++}else if(b.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function M2(i){let e=new Kh(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qh(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new M2(i),e.set(s,[o])):r>=a.length?(o=new M2(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var jh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tu=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],nu=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],S2=new J0,Ps=new L,f1=new L;function iu(i,e,t){let n=new gn,s=new v0,r=new v0,a=new de,o=new Br,l=new zr,c={},h=t.maxTextureSize,f={[Sn]:it,[it]:Sn,[rt]:rt},d=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new v0},radius:{value:4}},vertexShader:jh,fragmentShader:eu}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let m=new Le;m.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ae(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let p=this.type;this.render=function(E,_,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===x9&&(N0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ms);let D=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Wn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=p!==this.type;U&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(H=>H.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,H=E.length;C<H;C++){let V=E[C],z=V.shadow;if(z===void 0){N0("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let t0=z.getFrameExtents();s.multiply(t0),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/t0.x),s.x=r.x*t0.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/t0.y),s.y=r.y*t0.y,z.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=q,z.map===null||U===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ei){if(V.isPointLight){N0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new re(s.x,s.y,{format:Tn,type:We,minFilter:ue,magFilter:ue,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new Kt(s.x,s.y,st),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=Yt,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=pe,z.map.depthTexture.magFilter=pe}else V.isPointLight?(z.map=new Ls(s.x),z.map.depthTexture=new cs(s.x,At)):(z.map=new re(s.x,s.y),z.map.depthTexture=new Kt(s.x,s.y,At)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=Yt,this.type===Ms?(z.map.depthTexture.compareFunction=q?e1:jo,z.map.depthTexture.minFilter=ue,z.map.depthTexture.magFilter=ue):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=pe,z.map.depthTexture.magFilter=pe);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let k=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();V.isPointLight!==!0&&z.updateMatrices(V,v);let J=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:v.layers;for(let h0=0;h0<k;h0++){let p0=z.getCamera(h0);if(V.isPointLight){let B=z.camera,K=z.matrix,i0=V.distance||B.far;i0!==B.far&&(B.far=i0,B.updateProjectionMatrix()),Ps.setFromMatrixPosition(V.matrixWorld),B.position.copy(Ps),f1.copy(B.position),f1.add(tu[h0]),B.up.copy(nu[h0]),B.lookAt(f1),B.updateMatrixWorld(),K.makeTranslation(-Ps.x,-Ps.y,-Ps.z),S2.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),z._frustum.setFromProjectionMatrix(S2,B.coordinateSystem,B.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,h0),i.clear();else{h0===0&&(i.setRenderTarget(z.map),i.clear());let B=z.getViewport(h0);a.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),N.viewport(a)}n=z.getFrustum(h0),b(_,v,p0,V,J,this.type)}z.isPointLightShadow!==!0&&this.type===Ei&&M(z,v),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(D,P,I)};function M(E,_){let v=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new re(s.x,s.y,{format:Tn,type:We}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,v,d,y,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,v,u,y,null)}function T(E,_,v,D){let P=null,I=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)P=I;else if(P=v.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let N=P.uuid,U=_.uuid,C=c[N];C===void 0&&(C={},c[N]=C);let H=C[U];H===void 0&&(H=P.clone(),C[U]=H,_.addEventListener("dispose",A)),P=H}if(P.visible=_.visible,P.wireframe=_.wireframe,D===Ei?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:f[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=i.properties.get(P);N.light=v}return P}function b(E,_,v,D,P,I){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Ei)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let C=e.update(E),H=E.material;if(Array.isArray(H)){let V=C.groups;for(let z=0,t0=V.length;z<t0;z++){let q=V[z],k=H[q.materialIndex];if(k&&k.visible){let J=T(E,k,D,I);E.onBeforeShadow(i,E,_,v,C,J,q),i.renderBufferDirect(v,null,C,J,E,q),E.onAfterShadow(i,E,_,v,C,J,q)}}}else if(H.visible){let V=T(E,H,D,I);E.onBeforeShadow(i,E,_,v,C,V,null),i.renderBufferDirect(v,null,C,V,E,null),E.onAfterShadow(i,E,_,v,C,V,null)}}let U=E.children;for(let C=0,H=U.length;C<H;C++)b(U[C],_,v,D,P,I)}function A(E){E.target.removeEventListener("dispose",A);for(let v in c){let D=c[v],P=E.target.uuid;P in D&&(D[P].dispose(),delete D[P])}}}function su(i,e){function t(){let R=!1,Z=new de,Y=null,s0=new de(0,0,0,0);return{setMask:function(c0){Y!==c0&&!R&&(i.colorMask(c0,c0,c0,c0),Y=c0)},setLocked:function(c0){R=c0},setClear:function(c0,o0,S0,D0,r0){r0===!0&&(c0*=D0,o0*=D0,S0*=D0),Z.set(c0,o0,S0,D0),s0.equals(Z)===!1&&(i.clearColor(c0,o0,S0,D0),s0.copy(Z))},reset:function(){R=!1,Y=null,s0.set(-1,0,0,0)}}}function n(){let R=!1,Z=!1,Y=null,s0=null,c0=null;return{setReversed:function(o0){if(Z!==o0){let S0=e.get("EXT_clip_control");o0?S0.clipControlEXT(S0.LOWER_LEFT_EXT,S0.ZERO_TO_ONE_EXT):S0.clipControlEXT(S0.LOWER_LEFT_EXT,S0.NEGATIVE_ONE_TO_ONE_EXT),Z=o0;let D0=c0;c0=null,this.setClear(D0)}},getReversed:function(){return Z},setTest:function(o0){o0?l0(i.DEPTH_TEST):n0(i.DEPTH_TEST)},setMask:function(o0){Y!==o0&&!R&&(i.depthMask(o0),Y=o0)},setFunc:function(o0){if(Z&&(o0=$9[o0]),s0!==o0){switch(o0){case _r:i.depthFunc(i.NEVER);break;case xr:i.depthFunc(i.ALWAYS);break;case vr:i.depthFunc(i.LESS);break;case di:i.depthFunc(i.LEQUAL);break;case yr:i.depthFunc(i.EQUAL);break;case Mr:i.depthFunc(i.GEQUAL);break;case Sr:i.depthFunc(i.GREATER);break;case br:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}s0=o0}},setLocked:function(o0){R=o0},setClear:function(o0){c0!==o0&&(c0=o0,Z&&(o0=1-o0),i.clearDepth(o0))},reset:function(){R=!1,Y=null,s0=null,c0=null,Z=!1}}}function s(){let R=!1,Z=null,Y=null,s0=null,c0=null,o0=null,S0=null,D0=null,r0=null;return{setTest:function(C0){R||(C0?l0(i.STENCIL_TEST):n0(i.STENCIL_TEST))},setMask:function(C0){Z!==C0&&!R&&(i.stencilMask(C0),Z=C0)},setFunc:function(C0,F0,M0){(Y!==C0||s0!==F0||c0!==M0)&&(i.stencilFunc(C0,F0,M0),Y=C0,s0=F0,c0=M0)},setOp:function(C0,F0,M0){(o0!==C0||S0!==F0||D0!==M0)&&(i.stencilOp(C0,F0,M0),o0=C0,S0=F0,D0=M0)},setLocked:function(C0){R=C0},setClear:function(C0){r0!==C0&&(i.clearStencil(C0),r0=C0)},reset:function(){R=!1,Z=null,Y=null,s0=null,c0=null,o0=null,S0=null,D0=null,r0=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},f={},d={},u=new WeakMap,m=[],y=null,g=!1,p=null,M=null,T=null,b=null,A=null,E=null,_=null,v=new R0(0,0,0),D=0,P=!1,I=null,N=null,U=null,C=null,H=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,t0=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(t0=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=t0>=1):q.indexOf("OpenGL ES")!==-1&&(t0=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=t0>=2);let k=null,J={},h0=i.getParameter(i.SCISSOR_BOX),p0=i.getParameter(i.VIEWPORT),B=new de().fromArray(h0),K=new de().fromArray(p0);function i0(R,Z,Y,s0){let c0=new Uint8Array(4),o0=i.createTexture();i.bindTexture(R,o0),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let S0=0;S0<Y;S0++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,s0,0,i.RGBA,i.UNSIGNED_BYTE,c0):i.texImage2D(Z+S0,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,c0);return o0}let y0={};y0[i.TEXTURE_2D]=i0(i.TEXTURE_2D,i.TEXTURE_2D,1),y0[i.TEXTURE_CUBE_MAP]=i0(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),y0[i.TEXTURE_2D_ARRAY]=i0(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),y0[i.TEXTURE_3D]=i0(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),l0(i.DEPTH_TEST),a.setFunc(di),Te(!1),se(No),l0(i.CULL_FACE),Se(Wn);function l0(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function n0(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function I0(R,Z){return d[R]!==Z?(i.bindFramebuffer(R,Z),d[R]=Z,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Z),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function T0(R,Z){let Y=m,s0=!1;if(R){Y=u.get(Z),Y===void 0&&(Y=[],u.set(Z,Y));let c0=R.textures;if(Y.length!==c0.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let o0=0,S0=c0.length;o0<S0;o0++)Y[o0]=i.COLOR_ATTACHMENT0+o0;Y.length=c0.length,s0=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,s0=!0);s0&&i.drawBuffers(Y)}function G0(R){return y!==R?(i.useProgram(R),y=R,!0):!1}let U0={[Xn]:i.FUNC_ADD,[v9]:i.FUNC_SUBTRACT,[y9]:i.FUNC_REVERSE_SUBTRACT};U0[M9]=i.MIN,U0[S9]=i.MAX;let O0={[wi]:i.ZERO,[Ve]:i.ONE,[b9]:i.SRC_COLOR,[Oo]:i.SRC_ALPHA,[C9]:i.SRC_ALPHA_SATURATE,[A9]:i.DST_COLOR,[T9]:i.DST_ALPHA,[E9]:i.ONE_MINUS_SRC_COLOR,[Bo]:i.ONE_MINUS_SRC_ALPHA,[R9]:i.ONE_MINUS_DST_COLOR,[w9]:i.ONE_MINUS_DST_ALPHA,[P9]:i.CONSTANT_COLOR,[I9]:i.ONE_MINUS_CONSTANT_COLOR,[L9]:i.CONSTANT_ALPHA,[D9]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(R,Z,Y,s0,c0,o0,S0,D0,r0,C0){if(R===Wn){g===!0&&(n0(i.BLEND),g=!1);return}if(g===!1&&(l0(i.BLEND),g=!0),R!==bn){if(R!==p||C0!==P){if((M!==Xn||A!==Xn)&&(i.blendEquation(i.FUNC_ADD),M=Xn,A=Xn),C0)switch(R){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ss:i.blendFunc(i.ONE,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:z0("WebGLState: Invalid blending: ",R);break}else switch(R){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uo:z0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fo:z0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:z0("WebGLState: Invalid blending: ",R);break}T=null,b=null,E=null,_=null,v.set(0,0,0),D=0,p=R,P=C0}return}c0=c0||Z,o0=o0||Y,S0=S0||s0,(Z!==M||c0!==A)&&(i.blendEquationSeparate(U0[Z],U0[c0]),M=Z,A=c0),(Y!==T||s0!==b||o0!==E||S0!==_)&&(i.blendFuncSeparate(O0[Y],O0[s0],O0[o0],O0[S0]),T=Y,b=s0,E=o0,_=S0),(D0.equals(v)===!1||r0!==D)&&(i.blendColor(D0.r,D0.g,D0.b,r0),v.copy(D0),D=r0),p=R,P=!1}function ge(R,Z){R.side===rt?n0(i.CULL_FACE):l0(i.CULL_FACE);let Y=R.side===it;Z&&(Y=!Y),Te(Y),R.blending===Ti&&R.transparent===!1?Se(Wn):Se(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let s0=R.stencilWrite;o.setTest(s0),s0&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),le(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?l0(i.SAMPLE_ALPHA_TO_COVERAGE):n0(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(R){I!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),I=R)}function se(R){R!==g9?(l0(i.CULL_FACE),R!==N&&(R===No?i.cullFace(i.BACK):R===_9?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):n0(i.CULL_FACE),N=R}function je(R){R!==U&&(z&&i.lineWidth(R),U=R)}function le(R,Z,Y){R?(l0(i.POLYGON_OFFSET_FILL),(C!==Z||H!==Y)&&(C=Z,H=Y,a.getReversed()&&(Z=-Z,Y=-Y),i.polygonOffset(Z,Y))):n0(i.POLYGON_OFFSET_FILL)}function ke(R){R?l0(i.SCISSOR_TEST):n0(i.SCISSOR_TEST)}function Re(R){R===void 0&&(R=i.TEXTURE0+V-1),k!==R&&(i.activeTexture(R),k=R)}function Ce(R,Z,Y){Y===void 0&&(k===null?Y=i.TEXTURE0+V-1:Y=k);let s0=J[Y];s0===void 0&&(s0={type:void 0,texture:void 0},J[Y]=s0),(s0.type!==R||s0.texture!==Z)&&(k!==Y&&(i.activeTexture(Y),k=Y),i.bindTexture(R,Z||y0[R]),s0.type=R,s0.texture=Z)}function O(){let R=J[k];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Ue(){try{i.compressedTexImage2D(...arguments)}catch(R){z0("WebGLState:",R)}}function ce(){try{i.compressedTexImage3D(...arguments)}catch(R){z0("WebGLState:",R)}}function ne(){try{i.texSubImage2D(...arguments)}catch(R){z0("WebGLState:",R)}}function m0(){try{i.texSubImage3D(...arguments)}catch(R){z0("WebGLState:",R)}}function _e(){try{i.compressedTexSubImage2D(...arguments)}catch(R){z0("WebGLState:",R)}}function L0(){try{i.compressedTexSubImage3D(...arguments)}catch(R){z0("WebGLState:",R)}}function B0(){try{i.texStorage2D(...arguments)}catch(R){z0("WebGLState:",R)}}function w(){try{i.texStorage3D(...arguments)}catch(R){z0("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){z0("WebGLState:",R)}}function G(){try{i.texImage3D(...arguments)}catch(R){z0("WebGLState:",R)}}function a0(R){return f[R]!==void 0?f[R]:i.getParameter(R)}function e0(R,Z){f[R]!==Z&&(i.pixelStorei(R,Z),f[R]=Z)}function u0(R){B.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),B.copy(R))}function d0(R){K.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),K.copy(R))}function Q(R,Z){let Y=c.get(Z);Y===void 0&&(Y=new WeakMap,c.set(Z,Y));let s0=Y.get(R);s0===void 0&&(s0=i.getUniformBlockIndex(Z,R.name),i.uniformBlockBinding(Z,s0,s0),Y.set(R,s0))}function j(R,Z,Y){let c0=c.get(Z).get(R);l[c0]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,c0,Y),l[c0]=Y)}function f0(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},k=null,J={},d={},l={},u=new WeakMap,m=[],y=null,g=!1,p=null,M=null,T=null,b=null,A=null,E=null,_=null,v=new R0(0,0,0),D=0,P=!1,I=null,N=null,U=null,C=null,H=null,B.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:l0,disable:n0,bindFramebuffer:I0,drawBuffers:T0,useProgram:G0,setBlending:Se,setMaterial:ge,setFlipSided:Te,setCullFace:se,setLineWidth:je,setPolygonOffset:le,setScissorTest:ke,activeTexture:Re,bindTexture:Ce,unbindTexture:O,compressedTexImage2D:Ue,compressedTexImage3D:ce,texImage2D:x,texImage3D:G,pixelStorei:e0,getParameter:a0,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:B0,texStorage3D:w,texSubImage2D:ne,texSubImage3D:m0,compressedTexSubImage2D:_e,compressedTexSubImage3D:L0,scissor:u0,viewport:d0,reset:f0}}function ru(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new v0,h=new WeakMap,f=new Set,d,u=new WeakMap,m=new Set,y=new FinalizationRegistry(w=>m.delete(w)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,x){return g?new OffscreenCanvas(w,x):Qi("canvas")}function M(w,x,G){let a0=1,e0=B0(w);if((e0.width>G||e0.height>G)&&(a0=G/Math.max(e0.width,e0.height)),a0<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let u0=Math.floor(a0*e0.width),d0=Math.floor(a0*e0.height);d===void 0&&(d=p(u0,d0));let Q=x?p(u0,d0):d;return Q.width=u0,Q.height=d0,Q.getContext("2d").drawImage(w,0,0,u0,d0),N0("WebGLRenderer: Texture has been resized from ("+e0.width+"x"+e0.height+") to ("+u0+"x"+d0+")."),Q}else return"data"in w&&N0("WebGLRenderer: Image in DataTexture is too big ("+e0.width+"x"+e0.height+")."),w;return w}function T(w){return w.generateMipmaps}function b(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,x,G,a0,e0,u0=!1){if(w!==null){if(i[w]!==void 0)return i[w];N0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let d0;a0&&(d0=e.get("EXT_texture_norm16"),d0||N0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8),G===i.UNSIGNED_SHORT&&d0&&(Q=d0.R16_EXT),G===i.SHORT&&d0&&(Q=d0.R16_SNORM_EXT)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),x===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8),G===i.UNSIGNED_SHORT&&d0&&(Q=d0.RG16_EXT),G===i.SHORT&&d0&&(Q=d0.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&(G===i.UNSIGNED_SHORT&&d0&&(Q=d0.RGB16_EXT),G===i.SHORT&&d0&&(Q=d0.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),x===i.RGBA){let j=u0?Ki:$0.getTransfer(e0);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=j===ee?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&d0&&(Q=d0.RGBA16_EXT),G===i.SHORT&&d0&&(Q=d0.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(w,x){let G;return w?x===null||x===At||x===Yn?G=i.DEPTH24_STENCIL8:x===st?G=i.DEPTH32F_STENCIL8:x===Ri&&(G=i.DEPTH24_STENCIL8,N0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===At||x===Yn?G=i.DEPTH_COMPONENT24:x===st?G=i.DEPTH_COMPONENT32F:x===Ri&&(G=i.DEPTH_COMPONENT16),G}function v(w,x){return T(w)===!0||w.isFramebufferTexture&&w.minFilter!==pe&&w.minFilter!==ue?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function D(w){let x=new WeakRef(w);n.get(w).__ref=x,m.add(x),y.register(w,x,x)}function P(w){let x=n.get(w).__ref;x!==void 0&&(m.delete(x),y.unregister(x))}function I(w){U(w.target)}function N(w){C(w.target)}function U(w){w.removeEventListener("dispose",I),P(w),V(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function C(w){w.removeEventListener("dispose",N),P(w),t0(w)}function H(){for(let w of m){let x=w.deref();x!==void 0&&(x.isRenderTarget===!0?C(x):U(x))}m.clear(),f.clear()}function V(w){let x=n.get(w);if(x.__webglInit===void 0)return;let G=w.source,a0=u.get(G);if(a0){let e0=a0[x.__cacheKey];e0.usedTimes--,e0.usedTimes===0&&z(w),Object.keys(a0).length===0&&u.delete(G)}n.remove(w)}function z(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let G=w.source,a0=u.get(G);delete a0[x.__cacheKey],a.memory.textures--}function t0(w){let x=n.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();let G=w.depthTexture;if(G&&G.renderTarget===w&&U(G),w.isWebGLCubeRenderTarget)for(let e0=0;e0<6;e0++){if(Array.isArray(x.__webglFramebuffer[e0]))for(let u0=0;u0<x.__webglFramebuffer[e0].length;u0++)i.deleteFramebuffer(x.__webglFramebuffer[e0][u0]);else i.deleteFramebuffer(x.__webglFramebuffer[e0]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[e0])}else{if(Array.isArray(x.__webglFramebuffer))for(let e0=0;e0<x.__webglFramebuffer.length;e0++)i.deleteFramebuffer(x.__webglFramebuffer[e0]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let e0=0;e0<x.__webglColorRenderbuffer.length;e0++)x.__webglColorRenderbuffer[e0]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[e0]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let a0=w.textures;for(let e0=0,u0=a0.length;e0<u0;e0++){let d0=n.get(a0[e0]);d0.__webglTexture&&(i.deleteTexture(d0.__webglTexture),a.memory.textures--),n.remove(a0[e0])}n.remove(w)}let q=0;function k(){q=0}function J(){return q}function h0(w){q=w}function p0(){let w=q;return w>=s.maxTextures&&N0("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,w}function B(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function K(w,x){let G=n.get(w);if(w.isVideoTexture&&_e(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&G.__version!==w.version){let a0=w.image;if(a0===null)N0("WebGLRenderer: Texture marked for update but no image data found.");else if(a0.complete===!1)N0("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(G,w,x);return}}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function i0(w,x){let G=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){ge(G,w,x);return}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function y0(w,x){let G=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){ge(G,w,x);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function l0(w,x){let G=n.get(w);if(w.version>0&&G.__version!==w.version){Te(G,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}let n0={[Tt]:i.REPEAT,[Pe]:i.CLAMP_TO_EDGE,[Er]:i.MIRRORED_REPEAT},I0={[pe]:i.NEAREST,[F9]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[ue]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[ht]:i.LINEAR_MIPMAP_LINEAR},T0={[H9]:i.NEVER,[t1]:i.ALWAYS,[k9]:i.LESS,[jo]:i.LEQUAL,[G9]:i.EQUAL,[e1]:i.GEQUAL,[V9]:i.GREATER,[W9]:i.NOTEQUAL};function G0(w,x){if(x.type===st&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ue||x.magFilter===jr||x.magFilter===bs||x.magFilter===ht||x.minFilter===ue||x.minFilter===jr||x.minFilter===bs||x.minFilter===ht)&&N0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,n0[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,n0[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,n0[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,I0[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,I0[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,T0[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pe||x.minFilter!==bs&&x.minFilter!==ht||x.type===st&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function U0(w,x){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",I),D(x));let a0=x.source,e0=u.get(a0);e0===void 0&&(e0={},u.set(a0,e0));let u0=B(x);if(u0!==w.__cacheKey){e0[u0]===void 0&&(e0[u0]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),e0[u0].usedTimes++;let d0=e0[w.__cacheKey];d0!==void 0&&(e0[w.__cacheKey].usedTimes--,d0.usedTimes===0&&z(x)),w.__cacheKey=u0,w.__webglTexture=e0[u0].texture}return G}function O0(w,x,G){return Math.floor(Math.floor(w/G)/x)}function Se(w,x,G,a0){let u0=w.updateRanges;if(u0.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,G,a0,x.data);else{u0.sort((R,Z)=>R.start-Z.start);let d0=0;for(let R=1;R<u0.length;R++){let Z=u0[d0],Y=u0[R],s0=Z.start+Z.count,c0=O0(Y.start,x.width,4),o0=O0(Z.start,x.width,4);Y.start<=s0+1&&c0===o0&&O0(Y.start+Y.count-1,x.width,4)===c0?Z.count=Math.max(Z.count,Y.start+Y.count-Z.start):(++d0,u0[d0]=Y)}u0.length=d0+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),f0=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,Z=u0.length;R<Z;R++){let Y=u0[R],s0=Math.floor(Y.start/4),c0=Math.ceil(Y.count/4),o0=s0%x.width,S0=Math.floor(s0/x.width),D0=c0,r0=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,o0),t.pixelStorei(i.UNPACK_SKIP_ROWS,S0),t.texSubImage2D(i.TEXTURE_2D,0,o0,S0,D0,r0,G,a0,x.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,f0)}}function ge(w,x,G){let a0=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(a0=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(a0=i.TEXTURE_3D);let e0=U0(w,x),u0=x.source;t.bindTexture(a0,w.__webglTexture,i.TEXTURE0+G);let d0=n.get(u0);if(u0.version!==d0.__version||e0===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let r0=$0.getPrimaries($0.workingColorSpace),C0=x.colorSpace===jt?null:$0.getPrimaries(x.colorSpace),F0=x.colorSpace===jt||r0===C0?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,F0)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let j=M(x.image,!1,s.maxTextureSize);j=L0(x,j);let f0=r.convert(x.format,x.colorSpace),R=r.convert(x.type),Z=E(x.internalFormat,f0,R,x.normalized,x.colorSpace,x.isVideoTexture);G0(a0,x);let Y,s0=x.mipmaps,c0=x.isVideoTexture!==!0,o0=d0.__version===void 0||e0===!0,S0=u0.dataReady,D0=v(x,j);if(x.isDepthTexture)Z=_(x.format===Qt,x.type),o0&&(c0?t.texStorage2D(i.TEXTURE_2D,1,Z,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,Z,j.width,j.height,0,f0,R,null));else if(x.isDataTexture)if(s0.length>0){c0&&o0&&t.texStorage2D(i.TEXTURE_2D,D0,Z,s0[0].width,s0[0].height);for(let r0=0,C0=s0.length;r0<C0;r0++)Y=s0[r0],c0?S0&&t.texSubImage2D(i.TEXTURE_2D,r0,0,0,Y.width,Y.height,f0,R,Y.data):t.texImage2D(i.TEXTURE_2D,r0,Z,Y.width,Y.height,0,f0,R,Y.data);x.generateMipmaps=!1}else c0?(o0&&t.texStorage2D(i.TEXTURE_2D,D0,Z,j.width,j.height),S0&&Se(x,j,f0,R)):t.texImage2D(i.TEXTURE_2D,0,Z,j.width,j.height,0,f0,R,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){c0&&o0&&t.texStorage3D(i.TEXTURE_2D_ARRAY,D0,Z,s0[0].width,s0[0].height,j.depth);for(let r0=0,C0=s0.length;r0<C0;r0++)if(Y=s0[r0],x.format!==He)if(f0!==null)if(c0){if(S0)if(x.layerUpdates.size>0){let F0=u1(Y.width,Y.height,x.format,x.type);for(let M0 of x.layerUpdates){let Q0=Y.data.subarray(M0*F0/Y.data.BYTES_PER_ELEMENT,(M0+1)*F0/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,r0,0,0,M0,Y.width,Y.height,1,f0,Q0)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,r0,0,0,0,Y.width,Y.height,j.depth,f0,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,r0,Z,Y.width,Y.height,j.depth,0,Y.data,0,0);else N0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else c0?S0&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,r0,0,0,0,Y.width,Y.height,j.depth,f0,R,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,r0,Z,Y.width,Y.height,j.depth,0,f0,R,Y.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{c0&&o0&&t.texStorage2D(i.TEXTURE_2D,D0,Z,s0[0].width,s0[0].height);for(let r0=0,C0=s0.length;r0<C0;r0++)Y=s0[r0],x.format!==He?f0!==null?c0?S0&&t.compressedTexSubImage2D(i.TEXTURE_2D,r0,0,0,Y.width,Y.height,f0,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,r0,Z,Y.width,Y.height,0,Y.data):N0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c0?S0&&t.texSubImage2D(i.TEXTURE_2D,r0,0,0,Y.width,Y.height,f0,R,Y.data):t.texImage2D(i.TEXTURE_2D,r0,Z,Y.width,Y.height,0,f0,R,Y.data)}else if(x.isDataArrayTexture)if(c0){if(o0&&t.texStorage3D(i.TEXTURE_2D_ARRAY,D0,Z,j.width,j.height,j.depth),S0)if(x.layerUpdates.size>0){let r0=u1(j.width,j.height,x.format,x.type);for(let C0 of x.layerUpdates){let F0=j.data.subarray(C0*r0/j.data.BYTES_PER_ELEMENT,(C0+1)*r0/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,C0,j.width,j.height,1,f0,R,F0)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,f0,R,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,j.width,j.height,j.depth,0,f0,R,j.data);else if(x.isData3DTexture)c0?(o0&&t.texStorage3D(i.TEXTURE_3D,D0,Z,j.width,j.height,j.depth),S0&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,f0,R,j.data)):t.texImage3D(i.TEXTURE_3D,0,Z,j.width,j.height,j.depth,0,f0,R,j.data);else if(x.isFramebufferTexture){if(o0)if(c0)t.texStorage2D(i.TEXTURE_2D,D0,Z,j.width,j.height);else{let r0=j.width,C0=j.height;for(let F0=0;F0<D0;F0++)t.texImage2D(i.TEXTURE_2D,F0,Z,r0,C0,0,f0,R,null),r0>>=1,C0>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let r0=i.canvas;if(r0.hasAttribute("layoutsubtree")||r0.setAttribute("layoutsubtree","true"),j.parentNode!==r0){r0.appendChild(j),f.add(x),r0.onpaint=C0=>{let F0=C0.changedElements;for(let M0 of f)F0.includes(M0.image)&&(M0.needsUpdate=!0)},r0.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let F0=i.RGBA,M0=i.RGBA,Q0=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,F0,M0,Q0,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(s0.length>0){if(c0&&o0){let r0=B0(s0[0]);t.texStorage2D(i.TEXTURE_2D,D0,Z,r0.width,r0.height)}for(let r0=0,C0=s0.length;r0<C0;r0++)Y=s0[r0],c0?S0&&t.texSubImage2D(i.TEXTURE_2D,r0,0,0,f0,R,Y):t.texImage2D(i.TEXTURE_2D,r0,Z,f0,R,Y);x.generateMipmaps=!1}else if(c0){if(o0){let r0=B0(j);t.texStorage2D(i.TEXTURE_2D,D0,Z,r0.width,r0.height)}S0&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,f0,R,j)}else t.texImage2D(i.TEXTURE_2D,0,Z,f0,R,j);T(x)&&x.mipmapsAutoUpdate===!0&&b(a0),d0.__version=u0.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Te(w,x,G){if(x.image.length!==6)return;let a0=U0(w,x),e0=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+G);let u0=n.get(e0);if(e0.version!==u0.__version||a0===!0){t.activeTexture(i.TEXTURE0+G);let d0=$0.getPrimaries($0.workingColorSpace),Q=x.colorSpace===jt?null:$0.getPrimaries(x.colorSpace),j=x.colorSpace===jt||d0===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let f0=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let M0=0;M0<6;M0++)!f0&&!R?Z[M0]=M(x.image[M0],!0,s.maxCubemapSize):Z[M0]=R?x.image[M0].image:x.image[M0],Z[M0]=L0(x,Z[M0]);let Y=Z[0],s0=r.convert(x.format,x.colorSpace),c0=r.convert(x.type),o0=E(x.internalFormat,s0,c0,x.normalized,x.colorSpace),S0=x.isVideoTexture!==!0,D0=u0.__version===void 0||a0===!0,r0=e0.dataReady,C0=v(x,Y);G0(i.TEXTURE_CUBE_MAP,x);let F0;if(x.isDepthTexture){if(o0=_(x.format===Qt,x.type),D0)if(S0)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,o0,Y.width,Y.height);else for(let M0=0;M0<6;M0++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,o0,Y.width,Y.height,0,s0,c0,null)}else if(f0){S0&&D0&&t.texStorage2D(i.TEXTURE_CUBE_MAP,C0,o0,Y.width,Y.height);for(let M0=0;M0<6;M0++){F0=Z[M0].mipmaps;for(let Q0=0;Q0<F0.length;Q0++){let be=F0[Q0];x.format!==He?s0!==null?S0?r0&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M0,Q0,0,0,be.width,be.height,s0,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M0,Q0,o0,be.width,be.height,0,be.data):N0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S0?r0&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M0,Q0,0,0,be.width,be.height,s0,c0,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M0,Q0,o0,be.width,be.height,0,s0,c0,be.data)}}}else{if(F0=x.mipmaps,S0&&D0){F0.length>0&&C0++;let M0=B0(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,C0,o0,M0.width,M0.height)}for(let M0=0;M0<6;M0++)if(R){S0?r0&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,0,0,Z[M0].width,Z[M0].height,s0,c0,Z[M0].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,o0,Z[M0].width,Z[M0].height,0,s0,c0,Z[M0].data);for(let Q0=0;Q0<F0.length;Q0++){let ut=F0[Q0].image[M0].image;S0?r0&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M0,Q0+1,0,0,ut.width,ut.height,s0,c0,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M0,Q0+1,o0,ut.width,ut.height,0,s0,c0,ut.data)}}else{S0?r0&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,0,0,s0,c0,Z[M0]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,o0,s0,c0,Z[M0]);for(let Q0=0;Q0<F0.length;Q0++){let be=F0[Q0];S0?r0&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M0,Q0+1,0,0,s0,c0,be.image[M0]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M0,Q0+1,o0,s0,c0,be.image[M0])}}}T(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),u0.__version=e0.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function se(w,x,G,a0,e0,u0){let d0=r.convert(G.format,G.colorSpace),Q=r.convert(G.type),j=E(G.internalFormat,d0,Q,G.normalized,G.colorSpace),f0=n.get(x),R=n.get(G);if(R.__renderTarget=x,!f0.__hasExternalTextures){let Z=Math.max(1,x.width>>u0),Y=Math.max(1,x.height>>u0);e0===i.TEXTURE_3D||e0===i.TEXTURE_2D_ARRAY?t.texImage3D(e0,u0,j,Z,Y,x.depth,0,d0,Q,null):t.texImage2D(e0,u0,j,Z,Y,0,d0,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),m0(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,a0,e0,R.__webglTexture,0,ne(x)):(e0===i.TEXTURE_2D||e0>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&e0<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,a0,e0,R.__webglTexture,u0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(w,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let a0=x.depthTexture,e0=a0&&a0.isDepthTexture?a0.type:null,u0=_(x.stencilBuffer,e0),d0=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;m0(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(x),u0,x.width,x.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(x),u0,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,u0,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,d0,i.RENDERBUFFER,w)}else{let a0=x.textures;for(let e0=0;e0<a0.length;e0++){let u0=a0[e0],d0=r.convert(u0.format,u0.colorSpace),Q=r.convert(u0.type),j=E(u0.internalFormat,d0,Q,u0.normalized,u0.colorSpace);m0(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(x),j,x.width,x.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(x),j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(w,x,G){let a0=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let e0=n.get(x.depthTexture);e0.__renderTarget=x;let u0=a0?x.depthTexture.image[0]:x.depthTexture.image;(!e0.__webglTexture||u0.width!==x.width||u0.height!==x.height)&&(u0.width=x.width,u0.height=x.height,x.depthTexture.needsUpdate=!0),a0?l0(x.depthTexture,0):K(x.depthTexture,0);let d0=e0.__webglTexture,Q=ne(x),j=a0?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,f0=x.depthTexture.format===Qt?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Yt)m0(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,f0,j,d0,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,f0,j,d0,0);else if(x.depthTexture.format===Qt)m0(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,f0,j,d0,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,f0,j,d0,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(w){let x=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let a0=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),a0){let e0=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,a0.removeEventListener("dispose",e0)};a0.addEventListener("dispose",e0),x.__depthDisposeCallback=e0}x.__boundDepthTexture=a0}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(G)for(let a0=0;a0<6;a0++)le(x.__webglFramebuffer[a0],w,a0);else w.texture.mipmaps.length>0?le(x.__webglFramebuffer[0],w,0):le(x.__webglFramebuffer,w,0);else if(G){x.__webglDepthbuffer=[];for(let a0=0;a0<6;a0++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[a0]),x.__webglDepthbuffer[a0]===void 0)x.__webglDepthbuffer[a0]=i.createRenderbuffer(),je(x.__webglDepthbuffer[a0],w,!1);else{let e0=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,u0=x.__webglDepthbuffer[a0];i.bindRenderbuffer(i.RENDERBUFFER,u0),i.framebufferRenderbuffer(i.FRAMEBUFFER,e0,i.RENDERBUFFER,u0)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),je(x.__webglDepthbuffer,w,!1);else{let e0=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,u0=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,u0),i.framebufferRenderbuffer(i.FRAMEBUFFER,e0,i.RENDERBUFFER,u0)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(w,x,G){let a0=n.get(w);x!==void 0&&se(a0.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ke(w)}function Ce(w){let x=w.texture,G=n.get(w),a0=n.get(x);w.addEventListener("dispose",N),D(w);let e0=w.textures,u0=w.isWebGLCubeRenderTarget===!0,d0=e0.length>1;if(d0||(a0.__webglTexture===void 0&&(a0.__webglTexture=i.createTexture()),a0.__version=x.version,a.memory.textures++),u0){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let j=0;j<x.mipmaps.length;j++)G.__webglFramebuffer[Q][j]=i.createFramebuffer()}else G.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(x.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)G.__webglFramebuffer[Q]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(d0)for(let Q=0,j=e0.length;Q<j;Q++){let f0=n.get(e0[Q]);f0.__webglTexture===void 0&&(f0.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&m0(w)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<e0.length;Q++){let j=e0[Q];G.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);let f0=r.convert(j.format,j.colorSpace),R=r.convert(j.type),Z=E(j.internalFormat,f0,R,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),Y=ne(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,Z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),je(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(u0){t.bindTexture(i.TEXTURE_CUBE_MAP,a0.__webglTexture),G0(i.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)se(G.__webglFramebuffer[Q][j],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else se(G.__webglFramebuffer[Q],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);T(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(d0){for(let Q=0,j=e0.length;Q<j;Q++){let f0=e0[Q],R=n.get(f0),Z=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,R.__webglTexture),G0(Z,f0),se(G.__webglFramebuffer,w,f0,i.COLOR_ATTACHMENT0+Q,Z,0),T(f0)&&b(Z)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,a0.__webglTexture),G0(Q,x),x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)se(G.__webglFramebuffer[j],w,x,i.COLOR_ATTACHMENT0,Q,j);else se(G.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,Q,0);T(x)?b(Q):x.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&ke(w)}function O(w){let x=w.textures;for(let G=0,a0=x.length;G<a0;G++){let e0=x[G];if(T(e0)&&e0.mipmapsAutoUpdate===!0){let u0=A(w),d0=n.get(e0).__webglTexture;t.bindTexture(u0,d0),b(u0),t.unbindTexture()}}}let Ue=[];function ce(w){if(w.samples>0){if(m0(w)===!1){let x=w.textures,G=w.width,a0=w.height,e0=i.COLOR_BUFFER_BIT,u0=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,d0=n.get(w),Q=x.length>1;if(Q)for(let f0=0;f0<x.length;f0++)t.bindFramebuffer(i.FRAMEBUFFER,d0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+f0,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,d0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+f0,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,d0.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,d0.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,d0.__webglFramebuffer);for(let f0=0;f0<x.length;f0++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(e0|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(e0|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,d0.__webglColorRenderbuffer[f0]);let R=n.get(x[f0]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,G,a0,0,0,G,a0,e0,i.NEAREST),l===!0&&(Ue.length=0,Ue.push(i.COLOR_ATTACHMENT0+f0),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Ue.push(u0),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let f0=0;f0<x.length;f0++){t.bindFramebuffer(i.FRAMEBUFFER,d0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+f0,i.RENDERBUFFER,d0.__webglColorRenderbuffer[f0]);let R=n.get(x[f0]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,d0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+f0,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,d0.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ne(w){return Math.min(s.maxSamples,w.samples)}function m0(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function _e(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function L0(w,x){let G=w.colorSpace,a0=w.format,e0=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==Ji&&G!==jt&&($0.getTransfer(G)===ee?(a0!==He||e0!==at)&&N0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):z0("WebGLTextures: Unsupported texture color space:",G)),x}function B0(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=p0,this.resetTextureUnits=k,this.getTextureUnits=J,this.setTextureUnits=h0,this.setTexture2D=K,this.setTexture2DArray=i0,this.setTexture3D=y0,this.setTextureCube=l0,this.rebindTextures=Re,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=se,this.useMultisampledRTT=m0,this.dispose=H}function au(i,e){function t(n,s=jt){let r,a=$0.getTransfer(s);if(n===at)return i.UNSIGNED_BYTE;if(n===ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$o)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yo)return i.BYTE;if(n===Zo)return i.SHORT;if(n===Ri)return i.UNSIGNED_SHORT;if(n===ea)return i.INT;if(n===At)return i.UNSIGNED_INT;if(n===st)return i.FLOAT;if(n===We)return i.HALF_FLOAT;if(n===Ko)return i.ALPHA;if(n===Qo)return i.RGB;if(n===He)return i.RGBA;if(n===Yt)return i.DEPTH_COMPONENT;if(n===Qt)return i.DEPTH_STENCIL;if(n===Ci)return i.RED;if(n===ia)return i.RED_INTEGER;if(n===Tn)return i.RG;if(n===sa)return i.RG_INTEGER;if(n===ra)return i.RGBA_INTEGER;if(n===Es||n===Ts||n===ws||n===As)if(a===ee)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Es)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Es)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===oa||n===la||n===ca)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===la)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===Rs||n===ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ha||n===ua)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===da)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fa)return r.COMPRESSED_R11_EAC;if(n===pa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Rs)return r.COMPRESSED_RG11_EAC;if(n===ma)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ga||n===_a||n===xa||n===va||n===ya||n===Ma||n===Sa||n===ba||n===Ea||n===Ta||n===wa||n===Aa||n===Ra||n===Ca)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ga)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ba)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===Ia||n===La)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pa)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Da||n===Na||n===Cs||n===Ua)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ou=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,y1=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new hs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Me({vertexShader:ou,fragmentShader:lu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new _t(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},M1=class extends It{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,m=null,y=typeof XRWebGLBinding<"u",g=new y1,p={},M=t.getContextAttributes(),T=null,b=null,A=[],E=[],_=new v0,v=null,D=null,P=new Be;P.viewport=new de;let I=new Be;I.viewport=new de;let N=[P,I],U=new Jr,C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=A[B];return K===void 0&&(K=new _i,A[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=A[B];return K===void 0&&(K=new _i,A[B]=K),K.getGripSpace()},this.getHand=function(B){let K=A[B];return K===void 0&&(K=new _i,A[B]=K),K.getHandSpace()};function V(B){let K=E.indexOf(B.inputSource);if(K===-1)return;let i0=A[K];i0!==void 0&&(i0.update(B.inputSource,B.frame,c||a),i0.dispatchEvent({type:B.type,data:B.inputSource}))}function z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",t0);for(let B=0;B<A.length;B++){let K=E[B];K!==null&&(E[B]=null,A[B].disconnect(K))}C=null,H=null,g.reset();for(let B in p)delete p[B];if(e.setRenderTarget(T),u=null,d=null,f=null,s=null,b=null,p0.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(_.width,_.height,!1),D!==null){let B=D.camera;B.fov=D.fov,B.zoom=D.zoom,B.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&N0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&N0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",z),s.addEventListener("inputsourceschange",t0),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let i0=null,y0=null,l0=null;M.depth&&(l0=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,i0=M.stencil?Qt:Yt,y0=M.stencil?Yn:At);let n0={colorFormat:t.RGBA8,depthFormat:l0,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(n0),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new re(d.textureWidth,d.textureHeight,{format:He,type:at,depthTexture:new Kt(d.textureWidth,d.textureHeight,y0,void 0,void 0,void 0,void 0,void 0,void 0,i0),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let i0={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,i0),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new re(u.framebufferWidth,u.framebufferHeight,{format:He,type:at,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),p0.setContext(s),p0.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function t0(B){for(let K=0;K<B.removed.length;K++){let i0=B.removed[K],y0=E.indexOf(i0);y0>=0&&(E[y0]=null,A[y0].disconnect(i0))}for(let K=0;K<B.added.length;K++){let i0=B.added[K],y0=E.indexOf(i0);if(y0===-1){for(let n0=0;n0<A.length;n0++)if(n0>=E.length){E.push(i0),y0=n0;break}else if(E[n0]===null){E[n0]=i0,y0=n0;break}if(y0===-1)break}let l0=A[y0];l0&&l0.connect(i0)}}function q(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let K=B.near,i0=B.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(i0=g.depthFar)),U.near=I.near=P.near=K,U.far=I.far=P.far=i0,(C!==U.near||H!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,H=U.far),U.layers.mask=B.layers.mask|6,P.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;let y0=B.parent,l0=U.cameras;q(U,y0);for(let n0=0;n0<l0.length;n0++)q(l0[n0],y0);U.projectionMatrix.copy(P.projectionMatrix),U.projectionMatrixInverse.copy(P.projectionMatrixInverse),D===null&&B.isPerspectiveCamera&&(D={camera:B,fov:B.fov,zoom:B.zoom}),k(B,U,y0)};function k(B,K,i0){i0===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(i0.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Bn*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=B)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(B){return p[B]};let J=null;function h0(B,K){if(h=K.getViewerPose(c||a),m=K,h!==null){let i0=h.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let y0=!1;i0.length!==U.cameras.length&&(U.cameras.length=0,y0=!0);for(let T0=0;T0<i0.length;T0++){let G0=i0[T0],U0=null;if(u!==null)U0=u.getViewport(G0);else{let Se=f.getViewSubImage(d,G0);U0=Se.viewport,T0===0&&(e.setRenderTargetTextures(b,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(b))}let O0=N[T0];O0===void 0&&(O0=new Be,O0.layers.enable(T0),O0.viewport=new de,N[T0]=O0),O0.matrix.fromArray(G0.transform.matrix),O0.matrix.decompose(O0.position,O0.quaternion,O0.scale),O0.projectionMatrix.fromArray(G0.projectionMatrix),O0.projectionMatrixInverse.copy(O0.projectionMatrix).invert(),O0.viewport.set(U0.x,U0.y,U0.width,U0.height),T0===0&&(U.matrix.copy(O0.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),y0===!0&&U.cameras.push(O0)}let l0=s.enabledFeatures;if(l0&&l0.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let T0=f.getDepthInformation(i0[0]);T0&&T0.isValid&&T0.texture&&g.init(T0,s.renderState)}if(l0&&l0.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let T0=0;T0<i0.length;T0++){let G0=i0[T0].camera;if(G0){let U0=p[G0];U0||(U0=new hs,p[G0]=U0);let O0=f.getCameraImage(G0);U0.sourceTexture=O0}}}}for(let i0=0;i0<A.length;i0++){let y0=E[i0],l0=A[i0];y0!==null&&l0!==void 0&&l0.update(y0,K,c||a)}J&&J(B,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}let p0=new b2;p0.setAnimationLoop(h0),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}},cu=new J0,D2=new H0;D2.set(-1,0,0,0,1,0,0,0,1);function hu(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,l1(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,T,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&u(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===it&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===it&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),T=M.envMap,b=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(cu.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(D2),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,M){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===it&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uu(i,e,t,n){let s={},r={};function a(M,T){let b=T.program;n.uniformBlockBinding(M,b,s[M.id])}function o(M,T){let b=s[M.id];b===void 0&&(m(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",g));let A=T.program;n.updateUBOMapping(M,A);let E=e.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){let T=i.createBuffer(),b=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,b,A),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(M){let T=s[M.id],b=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,_=b.length;E<_;E++){let v=b[E];if(Array.isArray(v))for(let D=0,P=v.length;D<P;D++)h(v[D],E,D,A);else h(v,E,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,T,b,A){if(d(M,T,b,A)===!0){let E=M.__offset,_=M.value;if(Array.isArray(_)){let v=0;for(let D=0;D<_.length;D++){let P=_[D],I=y(P,!0);f(P,M.__data,v),v+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,M.__data)}}function f(M,T,b){typeof M=="number"||typeof M=="boolean"?T[b]=M:M.isMatrix3?(T[b]=M.elements[0],T[b+1]=M.elements[1],T[b+2]=M.elements[2],T[b+3]=0,T[b+4]=M.elements[3],T[b+5]=M.elements[4],T[b+6]=M.elements[5],T[b+7]=0,T[b+8]=M.elements[6],T[b+9]=M.elements[7],T[b+10]=M.elements[8],T[b+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-b),b):M.toArray(T,b)}function d(M,T,b,A){let E=M.value,_=T+"_"+b;if(Array.isArray(E)){A[_]===void 0&&(A[_]=[]);let v=A[_],D=!1;for(let P=0;P<E.length;P++)u(E[P],v,P)===!0&&(D=!0);return D}return u(E,A,_)}function u(M,T,b){if(T[b]===void 0)return typeof M=="number"||typeof M=="boolean"?T[b]=M:ArrayBuffer.isView(M)?T[b]=M.slice():T[b]=M.clone(),!0;{let A=T[b];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return T[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function m(M){let T=M.uniforms,b=0,A=16;for(let _=0,v=T.length;_<v;_++){let D=Array.isArray(T[_])?T[_]:[T[_]];for(let P=0,I=D.length;P<I;P++){let N=D[P],U=Array.isArray(N.value)?N.value:[N.value],C=Array.isArray(T[_])||Array.isArray(N.value),H=b;for(let z=0,t0=U.length;z<t0;z++){let q=U[z],k=y(q,C),J=b%A,h0=J%k.boundary,p0=J+h0;b+=h0,p0!==0&&A-p0<k.storage&&(b+=A-p0),z===0&&(H=b),b+=k.storage}let V=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new V((b-H)/Float32Array.BYTES_PER_ELEMENT),N.__offset=H}}let E=b%A;return E>0&&(b+=A-E),M.__size=b,M.__cache={},this}function y(M,T){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?N0("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):N0("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function g(M){let T=M.target;T.removeEventListener("dispose",g),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:p}}var du=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dt=null;function fu(){return Dt===null&&(Dt=new mt(du,16,16,Tn,We),Dt.name="DFG_LUT",Dt.minFilter=ue,Dt.magFilter=ue,Dt.wrapS=Pe,Dt.wrapT=Pe,Dt.generateMipmaps=!1,Dt.needsUpdate=!0),Dt}var Ha=class{constructor(e={}){let{canvas:t=q9(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=at}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let y=u,g=new Set([ra,sa,ia]),p=new Set([at,At,Ri,Yn,ta,na]),M=new Uint32Array(4),T=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,E=null,_=[],v=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,N=null,U=null,C=null,H=null;this._outputColorSpace=tt;let V=0,z=0,t0=null,q=-1,k=null,J=new de,h0=new de,p0=null,B=new R0(0),K=0,i0=t.width,y0=t.height,l0=1,n0=null,I0=null,T0=new de(0,0,i0,y0),G0=new de(0,0,i0,y0),U0=!1,O0=new gn,Se=new Rr,ge=!1,Te=!1,se=new J0,je=new L,le=new de,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Ce(){return t0===null?l0:1}let O=n;function Ue(S,F){return t.getContext(S,F)}let ce,ne,m0,_e,L0,B0,w,x,G,a0,e0,u0,d0,Q,j,f0,R,Z,Y,s0,c0,o0,S0;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",C0,!1),t.addEventListener("webglcontextrestored",F0,!1),t.addEventListener("webglcontextcreationerror",M0,!1),O===null){let F="webgl2";if(O=Ue(F,S),O===null)throw Ue(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}D0()}catch(S){throw t.removeEventListener("webglcontextlost",C0,!1),t.removeEventListener("webglcontextrestored",F0,!1),t.removeEventListener("webglcontextcreationerror",M0,!1),z0("WebGLRenderer: "+S.message),S}function D0(){ce=new E5(O),ce.init(),c0=new au(O,ce),ne=new f5(O,ce,e,c0),m0=new su(O,ce),ne.reversedDepthBuffer&&d&&m0.buffers.depth.setReversed(!0),U=O.createFramebuffer(),C=O.createFramebuffer(),H=O.createFramebuffer(),_e=new A5(O),L0=new Wh,B0=new ru(O,ce,m0,L0,ne,c0,_e),w=new b5(P),x=new Cc(O),o0=new u5(O,x),G=new T5(O,x,_e,o0),a0=new C5(O,G,x,o0,_e),Z=new R5(O,ne,B0),j=new p5(L0),e0=new Vh(P,w,ce,ne,o0,j),u0=new hu(P,L0),d0=new qh,Q=new Qh(ce),R=new h5(P,w,m0,a0,m,l),f0=new iu(P,a0,ne),S0=new uu(O,_e,ne,m0),Y=new d5(O,ce,_e),s0=new w5(O,ce,_e),_e.programs=e0.programs,P.capabilities=ne,P.extensions=ce,P.properties=L0,P.renderLists=d0,P.shadowMap=f0,P.state=m0,P.info=_e}y!==at&&(D=new I5(y,t.width,t.height,o,s,r));let r0=new M1(P,O);this.xr=r0,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=ce.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ce.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return l0},this.setPixelRatio=function(S){S!==void 0&&(l0=S,this.setSize(i0,y0,!1))},this.getSize=function(S){return S.set(i0,y0)},this.setSize=function(S,F,$=!0){if(r0.isPresenting){N0("WebGLRenderer: Can't change size while VR device is presenting.");return}i0=S,y0=F,t.width=Math.floor(S*l0),t.height=Math.floor(F*l0),$===!0&&(t.style.width=S+"px",t.style.height=F+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(i0*l0,y0*l0).floor()},this.setDrawingBufferSize=function(S,F,$){i0=S,y0=F,l0=$,t.width=Math.floor(S*$),t.height=Math.floor(F*$),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(y===at){z0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){N0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(J)},this.getViewport=function(S){return S.copy(T0)},this.setViewport=function(S,F,$,W){S.isVector4?T0.set(S.x,S.y,S.z,S.w):T0.set(S,F,$,W),m0.viewport(J.copy(T0).multiplyScalar(Ce()).round())},this.getScissor=function(S){return S.copy(G0)},this.setScissor=function(S,F,$,W){S.isVector4?G0.set(S.x,S.y,S.z,S.w):G0.set(S,F,$,W),m0.scissor(h0.copy(G0).multiplyScalar(Ce()).round())},this.getScissorTest=function(){return U0},this.setScissorTest=function(S){m0.setScissorTest(U0=S)},this.setOpaqueSort=function(S){n0=S},this.setTransparentSort=function(S){I0=S},this.getClearColor=function(S){return S.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,$=!0){let W=0;if(S){let X=!1;if(t0!==null){let _0=t0.texture.format;X=g.has(_0)}if(X){let _0=t0.texture.type,E0=p.has(_0),g0=R.getClearColor(),b0=R.getClearAlpha(),P0=g0.r,k0=g0.g,Y0=g0.b;E0?(M[0]=P0,M[1]=k0,M[2]=Y0,M[3]=b0,O.clearBufferuiv(O.COLOR,0,M)):(T[0]=P0,T[1]=k0,T[2]=Y0,T[3]=b0,O.clearBufferiv(O.COLOR,0,T))}else W|=O.COLOR_BUFFER_BIT}F&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),N=S},this.dispose=function(){t.removeEventListener("webglcontextlost",C0,!1),t.removeEventListener("webglcontextrestored",F0,!1),t.removeEventListener("webglcontextcreationerror",M0,!1),R.dispose(),d0.dispose(),Q.dispose(),B0.dispose(),L0.dispose(),w.dispose(),a0.dispose(),G.dispose(),o0.dispose(),S0.dispose(),e0.dispose(),r0.dispose(),r0.removeEventListener("sessionstart",ve),r0.removeEventListener("sessionend",an),Ft.stop()};function C0(S){S.preventDefault(),i1("WebGLRenderer: Context Lost."),I=!0}function F0(){i1("WebGLRenderer: Context Restored."),I=!1;let S=_e.autoReset,F=f0.enabled,$=f0.autoUpdate,W=f0.needsUpdate,X=f0.type;D0(),_e.autoReset=S,f0.enabled=F,f0.autoUpdate=$,f0.needsUpdate=W,f0.type=X}function M0(S){z0("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Q0(S){let F=S.target;F.removeEventListener("dispose",Q0),be(F)}function be(S){ut(S),L0.remove(S)}function ut(S){let F=L0.get(S).programs;F!==void 0&&(F.forEach(function($){e0.releaseProgram($)}),S.isShaderMaterial&&e0.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,$,W,X,_0){F===null&&(F=ke);let E0=X.isMesh&&X.matrixWorld.determinantAffine()<0,g0=xl(S,F,$,W,X);m0.setMaterial(W,E0);let b0=$.index,P0=1;if(W.wireframe===!0){if(b0=G.getWireframeAttribute($),b0===void 0)return;P0=2}let k0=$.drawRange,Y0=$.attributes.position,w0=k0.start*P0,Z0=(k0.start+k0.count)*P0;_0!==null&&(w0=Math.max(w0,_0.start*P0),Z0=Math.min(Z0,(_0.start+_0.count)*P0)),b0!==null?(w0=Math.max(w0,0),Z0=Math.min(Z0,b0.count)):Y0!=null&&(w0=Math.max(w0,0),Z0=Math.min(Z0,Y0.count));let we=Z0-w0;if(we<0||we===1/0)return;o0.setup(X,W,g0,$,b0);let fe,he=Y;if(b0!==null&&(fe=x.get(b0),he=s0,he.setIndex(fe)),X.isMesh)W.wireframe===!0?(m0.setLineWidth(W.wireframeLinewidth*Ce()),he.setMode(O.LINES)):he.setMode(O.TRIANGLES);else if(X.isLine){let Xe=W.linewidth;Xe===void 0&&(Xe=1),m0.setLineWidth(Xe*Ce()),X.isLineSegments?he.setMode(O.LINES):X.isLineLoop?he.setMode(O.LINE_LOOP):he.setMode(O.LINE_STRIP)}else X.isPoints?he.setMode(O.POINTS):X.isSprite&&he.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))he.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Xe=X._multiDrawStarts,A0=X._multiDrawCounts,et=X._multiDrawCount,j0=b0?x.get(b0).bytesPerElement:1,In=L0.get(W).currentProgram.getUniforms();for(let qe=0;qe<et;qe++)In.setValue(O,"_gl_DrawID",qe),he.render(Xe[qe]/j0,A0[qe])}else if(X.isInstancedMesh)he.renderInstances(w0,we,X.count);else if($.isInstancedBufferGeometry){let Xe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,A0=Math.min($.instanceCount,Xe);he.renderInstances(w0,we,A0)}else he.render(w0,we)};function ks(S,F,$,W){N!==null&&S.isNodeMaterial&&N.setObject(W,S),ge===!0&&j.setState(S,$,!1),S.transparent===!0&&S.side===rt&&S.forceSinglePass===!1?(S.side=it,S.needsUpdate=!0,Bt(S,F,W),S.side=Sn,S.needsUpdate=!0,Bt(S,F,W),S.side=rt):Bt(S,F,W)}this.compile=function(S,F,$=null){$===null&&($=S),N!==null&&N.renderStart(S,F,$),E=Q.get($),E.init(F),v.push(E),$.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),S!==$&&S.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),Te=this.localClippingEnabled,ge=j.init(this.clippingPlanes,Te),ge===!0&&j.setGlobalState(this.clippingPlanes,F),N!==null&&f0.render(E.state.shadowsArray,$,F);let W=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let _0=X.material;if(_0)if(Array.isArray(_0))for(let E0=0;E0<_0.length;E0++){let g0=_0[E0];ks(g0,$,F,X),W.add(g0)}else ks(_0,$,F,X),W.add(_0)}),E=v.pop(),N!==null&&N.renderEnd(),W},this.compileAsync=function(S,F,$=null){let W=this.compile(S,F,$);return new Promise(X=>{function _0(){if(W.forEach(function(E0){let b0=L0.get(E0).currentProgram;(b0===void 0||b0.isReady())&&W.delete(E0)}),W.size===0){X(S);return}setTimeout(_0,10)}ce.get("KHR_parallel_shader_compile")!==null?_0():setTimeout(_0,10)})};let xe=null;function vt(S){xe&&xe(S)}function ve(){Ft.stop()}function an(){Ft.start()}let Ft=new b2;Ft.setAnimationLoop(vt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(S){xe=S,r0.setAnimationLoop(S),S===null?Ft.stop():Ft.start()},r0.addEventListener("sessionstart",ve),r0.addEventListener("sessionend",an),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){z0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(S,F);let $=r0.enabled===!0&&r0.isPresenting===!0,W=D!==null&&(t0===null||$)&&D.begin(P,t0);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),r0.enabled===!0&&r0.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(r0.cameraAutoUpdate===!0&&r0.updateCamera(F),F=r0.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,F,t0),E=Q.get(S,v.length),E.init(F),E.state.textureUnits=B0.getTextureUnits(),v.push(E),se.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Se.setFromArrayCamera(F):O0.setFromProjectionMatrix(se,ft,F.reversedDepth),Te=this.localClippingEnabled,ge=j.init(this.clippingPlanes,Te),A=d0.get(S,_.length),A.init(),_.push(A),this.info.render.frame++,r0.enabled===!0&&r0.isPresenting===!0){let E0=P.xr.getDepthSensingMesh();E0!==null&&Bi(E0,F,-1/0,P.sortObjects)}Bi(S,F,0,P.sortObjects),A.finish(),N!==null&&N.updateLights(E.state.lightsArray),P.sortObjects===!0&&A.sort(n0,I0),Re=r0.enabled===!1||r0.isPresenting===!1||r0.hasDepthSensing()===!1,Re&&R.addToRenderList(A,S),this.info.autoReset===!0&&this.info.reset(),ge===!0&&j.beginShadows();let X=E.state.shadowsArray;if(f0.render(X,S,F),ge===!0&&j.endShadows(),(W&&D.hasRenderPass())===!1){let E0=A.opaque,g0=A.transmissive;if(E.setupLights(),F.isArrayCamera){let b0=F.cameras;if(g0.length>0)for(let P0=0,k0=b0.length;P0<k0;P0++){let Y0=b0[P0];Jn(E0,g0,S,Y0)}Re&&R.render(S);for(let P0=0,k0=b0.length;P0<k0;P0++){let Y0=b0[P0];Gs(A,S,Y0,Y0.viewport)}}else g0.length>0&&Jn(E0,g0,S,F),Re&&R.render(S),Gs(A,S,F)}t0!==null&&z===0&&(B0.updateMultisampleRenderTarget(t0),B0.updateRenderTargetMipmap(t0)),W&&D.end(P),S.isScene===!0&&S.onAfterRender(P,S,F),o0.resetDefaultState(),q=-1,k=null,v.pop(),v.length>0?(E=v[v.length-1],B0.setTextureUnits(E.state.textureUnits),ge===!0&&j.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,N!==null&&N.renderEnd()};function Bi(S,F,$,W){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){let E0=F.isArrayCamera?Se:O0;if(!S.frustumCulled||S.intersectsFrustum(E0)){W&&le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(se);let g0=a0.update(S),b0=S.material;b0.visible&&A.push(S,g0,b0,$,le.z,null,F)}}else if(S.isMesh||S.isLine||S.isPoints){let E0=F.isArrayCamera?Se:O0;if(!S.frustumCulled||S.intersectsFrustum(E0)){let g0=a0.update(S),b0=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),le.copy(S.boundingSphere.center)):(g0.boundingSphere===null&&g0.computeBoundingSphere(),le.copy(g0.boundingSphere.center)),le.applyMatrix4(S.matrixWorld).applyMatrix4(se)),Array.isArray(b0)){let P0=g0.groups;for(let k0=0,Y0=P0.length;k0<Y0;k0++){let w0=P0[k0],Z0=b0[w0.materialIndex];Z0&&Z0.visible&&A.push(S,g0,Z0,$,le.z,w0,F)}}else b0.visible&&A.push(S,g0,b0,$,le.z,null,F)}}}let _0=S.children;for(let E0=0,g0=_0.length;E0<g0;E0++)Bi(_0[E0],F,$,W)}function Gs(S,F,$,W){let{opaque:X,transmissive:_0,transparent:E0}=S;E.setupLightsView($),ge===!0&&j.setGlobalState(P.clippingPlanes,$),W&&m0.viewport(J.copy(W)),X.length>0&&on(X,F,$),_0.length>0&&on(_0,F,$),E0.length>0&&on(E0,F,$),m0.buffers.depth.setTest(!0),m0.buffers.depth.setMask(!0),m0.buffers.color.setMask(!0),m0.setPolygonOffset(!1)}function Jn(S,F,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let w0=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new re(1,1,{generateMipmaps:!0,type:w0?We:at,minFilter:ht,samples:Math.max(4,ne.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$0.workingColorSpace})}let _0=E.state.transmissionRenderTarget[W.id],E0=W.viewport||J;_0.setSize(E0.z*P.transmissionResolutionScale,E0.w*P.transmissionResolutionScale);let g0=P.getRenderTarget(),b0=P.getActiveCubeFace(),P0=P.getActiveMipmapLevel();P.setRenderTarget(_0),P.getClearColor(B),K=P.getClearAlpha(),K<1&&P.setClearColor(16777215,.5),P.clear(),Re&&R.render($);let k0=P.toneMapping;P.toneMapping=xt;let Y0=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),ge===!0&&j.setGlobalState(P.clippingPlanes,W),on(S,$,W),B0.updateMultisampleRenderTarget(_0),B0.updateRenderTargetMipmap(_0),ce.has("WEBGL_multisampled_render_to_texture")===!1){let w0=!1;for(let Z0=0,we=F.length;Z0<we;Z0++){let fe=F[Z0],{object:he,geometry:Xe,material:A0,group:et}=fe;if(A0.side===rt&&he.layers.test(W.layers)){let j0=A0.side;A0.side=it,A0.needsUpdate=!0,ln(he,$,W,Xe,A0,et),A0.side=j0,A0.needsUpdate=!0,w0=!0}}w0===!0&&(B0.updateMultisampleRenderTarget(_0),B0.updateRenderTargetMipmap(_0))}P.setRenderTarget(g0,b0,P0),P.setClearColor(B,K),Y0!==void 0&&(W.viewport=Y0),P.toneMapping=k0}function on(S,F,$){let W=F.isScene===!0?F.overrideMaterial:null;for(let X=0,_0=S.length;X<_0;X++){let E0=S[X],{object:g0,geometry:b0,group:P0}=E0,k0=E0.material;k0.allowOverride===!0&&W!==null&&(k0=W),g0.layers.test($.layers)&&ln(g0,F,$,b0,k0,P0)}}function ln(S,F,$,W,X,_0){N!==null&&X.isNodeMaterial&&N.setObject(S,X),S.onBeforeRender(P,F,$,W,X,_0),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(P,F,$,W,S,_0),X.transparent===!0&&X.side===rt&&X.forceSinglePass===!1?(X.side=it,X.needsUpdate=!0,P.renderBufferDirect($,F,W,X,S,_0),X.side=Sn,X.needsUpdate=!0,P.renderBufferDirect($,F,W,X,S,_0),X.side=rt):P.renderBufferDirect($,F,W,X,S,_0),S.onAfterRender(P,F,$,W,X,_0)}function Ot(S){let F=0;for(let $ of S)$.texture!==null&&F++;return F}function Bt(S,F,$){F.isScene!==!0&&(F=ke);let W=L0.get(S),X=E.state.lights,_0=E.state.shadowsArray,E0=X.state.version,g0=e0.getParameters(S,X.state,_0,F,$,E.state.lightProbeGridArray),b0=e0.getProgramCacheKey(g0),P0=W.programs;W.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;let k0=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;W.envMap=w.get(S.envMap||W.environment,k0),W.envMapRotation=W.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,P0===void 0&&(S.addEventListener("dispose",Q0),P0=new Map,W.programs=P0,W.programVariants=new Map);let Y0=P0.get(b0);if(Y0!==void 0){if(W.currentProgram===Y0&&W.lightsStateVersion===E0)return U1(S,g0),Y0}else g0.uniforms=e0.getUniforms(S),N!==null&&S.isNodeMaterial&&N.build(S,$,g0),S.onBeforeCompile(g0,P),Y0=e0.acquireProgram(g0,b0),P0.set(b0,Y0),W.uniforms=g0.uniforms;let w0=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(w0.clippingPlanes=j.uniform),U1(S,g0),W.needsLights=yl(S),W.lightsStateVersion=E0,W.needsLights&&(w0.ambientLightColor.value=X.state.ambient,w0.lightProbe.value=X.state.probe,w0.sunLights.value=X.state.sun,w0.sunLightShadows.value=X.state.sunShadow,w0.directionalLights.value=X.state.directional,w0.directionalLightShadows.value=X.state.directionalShadow,w0.spotLights.value=X.state.spot,w0.spotLightShadows.value=X.state.spotShadow,w0.rectAreaLights.value=X.state.rectArea,w0.ltc_1.value=X.state.rectAreaLTC1,w0.ltc_2.value=X.state.rectAreaLTC2,w0.pointLights.value=X.state.point,w0.pointLightShadows.value=X.state.pointShadow,w0.hemisphereLights.value=X.state.hemi,w0.sunShadowMatrix.value=X.state.sunShadowMatrix,w0.sunShadowCascade.value=X.state.sunShadowCascade,w0.directionalShadowMatrix.value=X.state.directionalShadowMatrix,w0.spotLightMatrix.value=X.state.spotLightMatrix,w0.spotLightMap.value=X.state.spotLightMap,w0.pointShadowMatrix.value=X.state.pointShadowMatrix),W.numLightProbeGrids=Ot(E.state.lightProbeGridArray),W.currentProgram=Y0,W.uniformsList=null,Y0}function Vs(S,F,$,W,X){let _0=L0.get(S),E0=_0.currentProgram.id+","+W+","+X,g0=_0.programVariants.get(E0);return g0===void 0?(g0=Bt(S,F,$),_0.programVariants.set(E0,g0)):(_0.currentProgram=g0,_0.uniformsList=null,_0.outputColorSpace=W,_0.toneMapping=X),g0}function Ws(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=Li.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function U1(S,F){let $=L0.get(S);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function xl(S,F,$,W,X){F.isScene!==!0&&(F=ke),B0.resetTextureUnits();let _0=F.fog,E0=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,g0=t0===null?P.outputColorSpace:t0.isXRRenderTarget===!0?t0.texture.colorSpace:$0.workingColorSpace,b0=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,P0=w.get(W.envMap||E0,b0),k0=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Y0=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),w0=!!$.morphAttributes.position,Z0=!!$.morphAttributes.normal,we=!!$.morphAttributes.color,fe=xt;W.toneMapped&&(t0===null||t0.isXRRenderTarget===!0)&&(fe=P.toneMapping);let he=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Xe=he!==void 0?he.length:0,A0=L0.get(W),et=E.state.lights;if(ge===!0&&(Te===!0||S!==k)){let ye=S===k&&W.id===q;j.setState(W,S,ye)}let j0=!1,In=!1;W.version===A0.__version?A0.needsLights&&A0.lightsStateVersion!==et.state.version||X.isBatchedMesh&&A0.batching===!1||!X.isBatchedMesh&&A0.batching===!0||X.isBatchedMesh&&A0.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&A0.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&A0.instancing===!1||!X.isInstancedMesh&&A0.instancing===!0||X.isSkinnedMesh&&A0.skinning===!1||!X.isSkinnedMesh&&A0.skinning===!0||X.isInstancedMesh&&A0.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&A0.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&A0.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&A0.instancingMorph===!1&&X.morphTexture!==null||A0.envMap!==P0||W.fog===!0&&A0.fog!==_0||A0.numClippingPlanes!==void 0&&(A0.numClippingPlanes!==j.numPlanes||A0.numIntersection!==j.numIntersection)||A0.vertexAlphas!==k0||A0.vertexTangents!==Y0||A0.morphTargets!==w0||A0.morphNormals!==Z0||A0.morphColors!==we||A0.morphTargetsCount!==Xe||A0.numLightProbeGrids!==Ot(E.state.lightProbeGridArray)?j0=!0:(A0.outputColorSpace!==g0||A0.toneMapping!==fe)&&(In=!0):(j0=!0,A0.__version=W.version);let qe=A0.currentProgram;(j0===!0||In===!0)&&(qe=In===!0?Vs(W,F,X,g0,fe):Bt(W,F,X),N&&W.isNodeMaterial&&N.onUpdateProgram(W,qe,A0));let Xs=!1,cn=!1,Ln=!1,K0=qe.getUniforms(),Ge=A0.uniforms;if(m0.useProgram(qe.program)&&(Xs=!0,cn=!0,Ln=!0),W.id!==q&&(q=W.id,cn=!0),Xs||k!==S){m0.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),K0.setValue(O,"projectionMatrix",S.projectionMatrix),K0.setValue(O,"viewMatrix",S.matrixWorldInverse);let Fe=K0.map.cameraPosition;Fe!==void 0&&Fe.setValue(O,je.setFromMatrixPosition(S.matrixWorld)),ne.logarithmicDepthBuffer&&K0.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&K0.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),k!==S&&(k=S,cn=!0,Ln=!0)}if(A0.needsLights&&(et.state.sunShadowMap.length>0&&K0.setValue(O,"sunShadowMap",et.state.sunShadowMap,B0),et.state.directionalShadowMap.length>0&&K0.setValue(O,"directionalShadowMap",et.state.directionalShadowMap,B0),et.state.spotShadowMap.length>0&&K0.setValue(O,"spotShadowMap",et.state.spotShadowMap,B0),et.state.pointShadowMap.length>0&&K0.setValue(O,"pointShadowMap",et.state.pointShadowMap,B0)),X.isSkinnedMesh){K0.setOptional(O,X,"bindMatrix"),K0.setOptional(O,X,"bindMatrixInverse");let ye=X.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),K0.setValue(O,"boneTexture",ye.boneTexture,B0))}X.isBatchedMesh&&(K0.setOptional(O,X,"batchingTexture"),K0.setValue(O,"batchingTexture",X._matricesTexture,B0),K0.setOptional(O,X,"batchingIdTexture"),K0.setValue(O,"batchingIdTexture",X._indirectTexture,B0),K0.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&K0.setValue(O,"batchingColorTexture",X._colorsTexture,B0));let yt=$.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0)&&Z.update(X,$,qe),(cn||A0.receiveShadow!==X.receiveShadow)&&(A0.receiveShadow=X.receiveShadow,K0.setValue(O,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(Ge.envMapIntensity.value=F.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=fu()),cn){if(K0.setValue(O,"toneMappingExposure",P.toneMappingExposure),A0.needsLights&&vl(Ge,Ln),_0&&W.fog===!0&&u0.refreshFogUniforms(Ge,_0),u0.refreshMaterialUniforms(Ge,W,l0,y0,E.state.transmissionRenderTarget[S.id]),A0.needsLights&&A0.numLightProbeGrids>0){let ye=b,Fe=0;for(let zt of E.state.lightProbeGridArray)zt.texture!==null&&(ye.textures[Fe]=zt.texture,ye.min[Fe]=zt.boundingBox.min,ye.max[Fe]=zt.boundingBox.max,ye.resolution[Fe]=zt.resolution,Fe++);for(let zt in ye)ye[zt].length=Fe;Ge.probesSH.value=ye.textures,Ge.probesMin.value=ye.min,Ge.probesMax.value=ye.max,Ge.probesResolution.value=ye.resolution}Li.upload(O,Ws(A0),Ge,B0)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Li.upload(O,Ws(A0),Ge,B0),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&K0.setValue(O,"center",X.center),K0.setValue(O,"modelViewMatrix",X.modelViewMatrix),K0.setValue(O,"normalMatrix",X.normalMatrix),K0.setValue(O,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let ye=W.uniformsGroups;for(let Fe=0,zt=ye.length;Fe<zt;Fe++){let O1=ye[Fe];S0.update(O1,qe),S0.bind(O1,qe)}}return qe}function vl(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function yl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return t0},this.setRenderTargetTextures=function(S,F,$){let W=L0.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),L0.get(S.texture).__webglTexture=F,L0.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let $=L0.get(S);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,$=0){t0=S,V=F,z=$;let W=null,X=!1,_0=!1;if(S){let g0=L0.get(S);if(g0.__useDefaultFramebuffer!==void 0){m0.bindFramebuffer(O.FRAMEBUFFER,g0.__webglFramebuffer),J.copy(S.viewport),h0.copy(S.scissor),p0=S.scissorTest,m0.viewport(J),m0.scissor(h0),m0.setScissorTest(p0),q=-1;return}else if(g0.__webglFramebuffer===void 0)B0.setupRenderTarget(S);else if(g0.__hasExternalTextures)B0.rebindTextures(S,L0.get(S.texture).__webglTexture,L0.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let k0=S.depthTexture;if(g0.__boundDepthTexture!==k0){if(k0!==null&&L0.has(k0)&&(S.width!==k0.image.width||S.height!==k0.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B0.setupDepthRenderbuffer(S)}}let b0=S.texture;(b0.isData3DTexture||b0.isDataArrayTexture||b0.isCompressedArrayTexture)&&(_0=!0);let P0=L0.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(P0[F])?W=P0[F][$]:W=P0[F],X=!0):S.samples>0&&B0.useMultisampledRTT(S)===!1?W=L0.get(S).__webglMultisampledFramebuffer:Array.isArray(P0)?W=P0[$]:W=P0,J.copy(S.viewport),h0.copy(S.scissor),p0=S.scissorTest}else J.copy(T0).multiplyScalar(l0).floor(),h0.copy(G0).multiplyScalar(l0).floor(),p0=U0;if($!==0&&(W=U),m0.bindFramebuffer(O.FRAMEBUFFER,W)&&m0.drawBuffers(S,W),m0.viewport(J),m0.scissor(h0),m0.setScissorTest(p0),X){let g0=L0.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,g0.__webglTexture,$)}else if(_0){let g0=F;for(let b0=0;b0<S.textures.length;b0++){let P0=L0.get(S.textures[b0]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+b0,P0.__webglTexture,$,g0)}}else if(S!==null&&$!==0){let g0=L0.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,g0.__webglTexture,$)}q=-1};function F1(S){let F=L0.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=ne.textureFormatReadable(S.format),F.__typeReadable=ne.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,$,W,X,_0,E0,g0=0){if(!(S&&S.isWebGLRenderTarget)){z0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let b0=L0.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&E0!==void 0&&(b0=b0[E0],Array.isArray(b0)&&(b0=b0[0])),b0){m0.bindFramebuffer(O.FRAMEBUFFER,b0);try{let P0=S.textures[g0],k0=P0.format,Y0=P0.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+g0);let w0=F1(P0);if(w0.__formatReadable===!1){z0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(w0.__typeReadable===!1){z0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-W&&$>=0&&$<=S.height-X&&O.readPixels(F,$,W,X,c0.convert(k0),c0.convert(Y0),_0)}finally{let P0=t0!==null?L0.get(t0).__webglFramebuffer:null;m0.bindFramebuffer(O.FRAMEBUFFER,P0)}}},this.readRenderTargetPixelsAsync=async function(S,F,$,W,X,_0,E0,g0=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let b0=L0.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&E0!==void 0&&(b0=b0[E0],Array.isArray(b0)&&(b0=b0[0])),b0)if(F>=0&&F<=S.width-W&&$>=0&&$<=S.height-X){m0.bindFramebuffer(O.FRAMEBUFFER,b0);let P0=S.textures[g0],k0=P0.format,Y0=P0.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+g0);let w0=F1(P0);if(w0.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(w0.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Z0=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Z0),O.bufferData(O.PIXEL_PACK_BUFFER,_0.byteLength,O.STREAM_READ),O.readPixels(F,$,W,X,c0.convert(k0),c0.convert(Y0),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let we=t0!==null?L0.get(t0).__webglFramebuffer:null;m0.bindFramebuffer(O.FRAMEBUFFER,we);let fe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Z9(O,fe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Z0),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Z0),O.deleteSync(fe),_0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,$=0){let W=Math.pow(2,-$),X=Math.floor(S.image.width*W),_0=Math.floor(S.image.height*W),E0=F!==null?F.x:0,g0=F!==null?F.y:0;B0.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,E0,g0,X,_0),m0.unbindTexture()},this.copyTextureToTexture=function(S,F,$=null,W=null,X=0,_0=0){let E0,g0,b0,P0,k0,Y0,w0,Z0,we,fe=S.isCompressedTexture?S.mipmaps[_0]:S.image;if($!==null)E0=$.max.x-$.min.x,g0=$.max.y-$.min.y,b0=$.isBox3?$.max.z-$.min.z:1,P0=$.min.x,k0=$.min.y,Y0=$.isBox3?$.min.z:0;else{let K0=Math.pow(2,-X);E0=Math.floor(fe.width*K0),g0=Math.floor(fe.height*K0),S.isDataArrayTexture?b0=fe.depth:S.isData3DTexture?b0=Math.floor(fe.depth*K0):b0=1,P0=0,k0=0,Y0=0}W!==null?(w0=W.x,Z0=W.y,we=W.z):(w0=0,Z0=0,we=0);let he=c0.convert(F.format),Xe=c0.convert(F.type),A0;F.isData3DTexture?(B0.setTexture3D(F,0),A0=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(B0.setTexture2DArray(F,0),A0=O.TEXTURE_2D_ARRAY):(B0.setTexture2D(F,0),A0=O.TEXTURE_2D),m0.activeTexture(O.TEXTURE0),m0.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),m0.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),m0.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let et=m0.getParameter(O.UNPACK_ROW_LENGTH),j0=m0.getParameter(O.UNPACK_IMAGE_HEIGHT),In=m0.getParameter(O.UNPACK_SKIP_PIXELS),qe=m0.getParameter(O.UNPACK_SKIP_ROWS),Xs=m0.getParameter(O.UNPACK_SKIP_IMAGES);m0.pixelStorei(O.UNPACK_ROW_LENGTH,fe.width),m0.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fe.height),m0.pixelStorei(O.UNPACK_SKIP_PIXELS,P0),m0.pixelStorei(O.UNPACK_SKIP_ROWS,k0),m0.pixelStorei(O.UNPACK_SKIP_IMAGES,Y0);let cn=S.isDataArrayTexture||S.isData3DTexture,Ln=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let K0=L0.get(S),Ge=L0.get(F),yt=L0.get(K0.__renderTarget),ye=L0.get(Ge.__renderTarget);m0.bindFramebuffer(O.READ_FRAMEBUFFER,yt.__webglFramebuffer),m0.bindFramebuffer(O.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Fe=0;Fe<b0;Fe++)cn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,L0.get(S).__webglTexture,X,Y0+Fe),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,L0.get(F).__webglTexture,_0,we+Fe)),O.blitFramebuffer(P0,k0,P0+E0,k0+g0,w0,Z0,w0+E0,Z0+g0,O.DEPTH_BUFFER_BIT,O.NEAREST);m0.bindFramebuffer(O.READ_FRAMEBUFFER,null),m0.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||L0.has(S)){let K0=L0.get(S),Ge=L0.get(F);m0.bindFramebuffer(O.READ_FRAMEBUFFER,C),m0.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let yt=0;yt<b0;yt++)cn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,K0.__webglTexture,X,Y0+yt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,K0.__webglTexture,X),Ln?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.__webglTexture,_0,we+yt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ge.__webglTexture,_0),X!==0?O.blitFramebuffer(P0,k0,P0+E0,k0+g0,w0,Z0,w0+E0,Z0+g0,O.COLOR_BUFFER_BIT,O.NEAREST):Ln?O.copyTexSubImage3D(A0,_0,w0,Z0,we+yt,P0,k0,E0,g0):O.copyTexSubImage2D(A0,_0,w0,Z0,P0,k0,E0,g0);m0.bindFramebuffer(O.READ_FRAMEBUFFER,null),m0.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ln?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(A0,_0,w0,Z0,we,E0,g0,b0,he,Xe,fe.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(A0,_0,w0,Z0,we,E0,g0,b0,he,fe.data):O.texSubImage3D(A0,_0,w0,Z0,we,E0,g0,b0,he,Xe,fe):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_0,w0,Z0,E0,g0,he,Xe,fe.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_0,w0,Z0,fe.width,fe.height,he,fe.data):O.texSubImage2D(O.TEXTURE_2D,_0,w0,Z0,E0,g0,he,Xe,fe);m0.pixelStorei(O.UNPACK_ROW_LENGTH,et),m0.pixelStorei(O.UNPACK_IMAGE_HEIGHT,j0),m0.pixelStorei(O.UNPACK_SKIP_PIXELS,In),m0.pixelStorei(O.UNPACK_SKIP_ROWS,qe),m0.pixelStorei(O.UNPACK_SKIP_IMAGES,Xs),_0===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(A0),m0.unbindTexture()},this.initRenderTarget=function(S){L0.get(S).__webglFramebuffer===void 0&&B0.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?B0.setTextureCube(S,0):S.isData3DTexture?B0.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?B0.setTexture2DArray(S,0):B0.setTexture2D(S,0),m0.unbindTexture()},this.resetState=function(){V=0,z=0,t0=null,m0.reset(),o0.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ft}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$0._getDrawingBufferColorSpace(e),t.unpackColorSpace=$0._getUnpackColorSpace()}};var pu=new Vn(-1,1,1,-1,0,1),S1=class extends Le{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}},mu=new S1,Va=class{constructor(e){this._mesh=new ae(mu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pu)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var en=class{static init(){let e=[1,0,0,2e-5,1,0,0,503905e-9,1,0,0,.00201562,1,0,0,.00453516,1,0,0,.00806253,1,0,0,.0125978,1,0,0,.018141,1,0,0,.0246924,1,0,0,.0322525,1,0,0,.0408213,1,0,0,.0503999,1,0,0,.0609894,1,0,0,.0725906,1,0,0,.0852058,1,0,0,.0988363,1,0,0,.113484,1,0,0,.129153,1,0,0,.145839,1,0,0,.163548,1,0,0,.182266,1,0,0,.201942,1,0,0,.222314,1,0,0,.241906,1,0,0,.262314,1,0,0,.285754,1,0,0,.310159,1,0,0,.335426,1,0,0,.361341,1,0,0,.387445,1,0,0,.412784,1,0,0,.438197,1,0,0,.466966,1,0,0,.49559,1,0,0,.523448,1,0,0,.549938,1,0,0,.57979,1,0,0,.608746,1,0,0,.636185,1,0,0,.664748,1,0,0,.69313,1,0,0,.71966,1,0,0,.747662,1,0,0,.774023,1,0,0,.799775,1,0,0,.825274,1,0,0,.849156,1,0,0,.873248,1,0,0,.89532,1,0,0,.917565,1,0,0,.937863,1,0,0,.958139,1,0,0,.976563,1,0,0,.994658,1,0,0,1.0112,1,0,0,1.02712,1,0,0,1.04189,1,0,0,1.05568,1,0,0,1.06877,1,0,0,1.08058,1,0,0,1.09194,1,0,0,1.10191,1,0,0,1.11161,1,0,0,1.1199,1,0,0,1.12813,.999547,-448815e-12,.0224417,199902e-10,.999495,-113079e-10,.0224406,503651e-9,.999496,-452317e-10,.0224406,.00201461,.999496,-101772e-9,.0224406,.00453287,.999495,-180928e-9,.0224406,.00805845,.999497,-282702e-9,.0224406,.0125914,.999496,-407096e-9,.0224406,.0181319,.999498,-554114e-9,.0224406,.02468,.999499,-723768e-9,.0224406,.0322363,.999495,-916058e-9,.0224405,.0408009,.999499,-.00113101,.0224408,.050375,.999494,-.00136863,.0224405,.0609586,.999489,-.00162896,.0224401,.0725537,.999489,-.00191201,.0224414,.0851619,.999498,-.00221787,.0224413,.0987867,.999492,-.00254642,.0224409,.113426,.999507,-.00289779,.0224417,.129088,.999494,-.0032716,.0224386,.145767,.999546,-.0036673,.0224424,.163472,.999543,-.00408166,.0224387,.182182,.999499,-.00450056,.0224338,.201843,.999503,-.00483661,.0224203,.222198,.999546,-.00452928,.022315,.241714,.999508,-.00587403,.0224329,.262184,.999509,-.00638806,.0224271,.285609,.999501,-.00691028,.0224166,.309998,.999539,-.00741979,.0223989,.335262,.999454,-.00786282,.0223675,.361154,.999529,-.00811928,.0222828,.387224,.999503,-.00799941,.0221063,.41252,.999561,-.00952753,.0223057,.438006,.999557,-.0099134,.0222065,.466735,.999541,-.0100935,.0220402,.495332,.999562,-.00996821,.0218067,.523197,.999556,-.0105031,.0217096,.550223,.999561,-.0114191,.0217215,.579498,.999588,-.0111818,.0213357,.608416,.999633,-.0107725,.0208689,.635965,.999527,-.0121671,.0210149,.664476,.999508,-.0116005,.020431,.692786,.999568,-.0115604,.0199791,.719709,.999671,-.0121117,.0197415,.74737,.999688,-.0110769,.0188846,.773692,.99962,-.0122368,.0188452,.799534,.999823,-.0110325,.0178001,.825046,.999599,-.0114923,.0174221,.849075,.999619,-.0105923,.0164345,.872999,.999613,-.0105988,.0158227,.895371,.99964,-.00979861,.0148131,.917364,.99977,-.00967238,.0140721,.938002,.999726,-.00869175,.0129543,.957917,.99973,-.00866872,.0122329,.976557,.999773,-.00731956,.0108958,.994459,.999811,-.00756027,.0102715,1.01118,.999862,-.00583732,.00878781,1.02701,.999835,-.00631438,.00827529,1.04186,.999871,-.00450785,.00674583,1.05569,.999867,-.00486079,.00621041,1.06861,.999939,-.00322072,.00478301,1.08064,.999918,-.00318199,.00406395,1.09181,1.00003,-.00193348,.00280682,1.10207,.999928,-.00153729,.00198741,1.11152,.999933,-623666e-9,917714e-9,1.12009,1,-102387e-11,907581e-12,1.12813,.997866,-896716e-12,.0448334,199584e-10,.997987,-225945e-10,.0448389,502891e-9,.997987,-903781e-10,.0448388,.00201156,.997985,-203351e-9,.0448388,.00452602,.997986,-361514e-9,.0448388,.00804629,.997987,-56487e-8,.0448389,.0125724,.997988,-813423e-9,.0448389,.0181045,.997984,-.00110718,.0448387,.0246427,.997985,-.00144616,.0448388,.0321875,.997987,-.00183038,.044839,.0407392,.997983,-.00225987,.0448387,.0502986,.997991,-.00273467,.0448389,.0608667,.997984,-.00325481,.0448384,.0724444,.998002,-.00382043,.044839,.0850348,.997997,-.00443145,.0448396,.0986372,.998007,-.00508796,.0448397,.113255,.998008,-.00578985,.04484,.128891,.998003,-.00653683,.0448384,.145548,.997983,-.00732713,.0448358,.163221,.997985,-.00815454,.0448358,.181899,.998005,-.00898985,.0448286,.201533,.998026,-.00964404,.0447934,.221821,.998055,-.00922677,.044611,.241282,.99804,-.0117361,.0448245,.261791,.998048,-.0127628,.0448159,.285181,.998088,-.0138055,.0447996,.30954,.998058,-.0148206,.0447669,.334751,.998099,-.0156998,.044697,.36061,.998116,-.0161976,.0445122,.386603,.998195,-.015945,.0441711,.411844,.998168,-.0183947,.0444255,.43773,.998184,-.0197913,.0443809,.466009,.998251,-.0201426,.0440689,.494574,.998305,-.0198847,.0435632,.522405,.998273,-.0210577,.043414,.549967,.998254,-.0227901,.0433943,.578655,.998349,-.0223108,.0426529,.60758,.99843,-.0223088,.042,.635524,.998373,-.0241141,.0418987,.663621,.998425,-.0231446,.0408118,.691906,.998504,-.0233684,.0400565,.719339,.998443,-.0241652,.0394634,.74643,.99848,-.0228715,.0380002,.773086,.998569,-.023519,.0372322,.798988,.998619,-.0223108,.0356468,.824249,.998594,-.0223105,.034523,.848808,.998622,-.0213426,.0328887,.87227,.998669,-.0207912,.0314374,.895157,.998705,-.0198416,.0296925,.916769,.998786,-.0189168,.0279634,.937773,.998888,-.0178811,.0261597,.957431,.99906,-.0166845,.0242159,.976495,.999038,-.0155464,.0222638,.994169,.999237,-.0141349,.0201967,1.01112,.999378,-.0129324,.0181744,1.02692,.999433,-.0113192,.0159898,1.04174,.999439,-.0101244,.0140385,1.05559,.999614,-.00837456,.0117826,1.06852,.999722,-.00721769,.00983745,1.08069,.999817,-.00554067,.00769002,1.09176,.99983,-.00426961,.005782,1.10211,.999964,-.00273904,.00374503,1.11152,1.00001,-.00136739,.00187176,1.12031,.999946,393227e-10,-28919e-9,1.12804,.995847,-13435e-10,.0671785,19916e-9,.995464,-338387e-10,.0671527,501622e-9,.99547,-135355e-9,.0671531,.00200649,.995471,-30455e-8,.0671532,.00451461,.99547,-541423e-9,.0671531,.008026,.995471,-84598e-8,.0671531,.0125407,.99547,-.00121823,.0671531,.0180589,.99547,-.00165817,.0671531,.0245806,.995463,-.00216583,.0671526,.0321062,.995468,-.00274127,.0671527,.0406366,.995474,-.00338447,.0671534,.0501717,.995473,-.00409554,.0671533,.0607131,.995478,-.00487451,.0671531,.0722618,.995476,-.00572148,.0671532,.0848191,.995477,-.00663658,.0671539,.0983882,.995498,-.00761986,.0671541,.112972,.995509,-.00867094,.0671542,.128568,.995509,-.00978951,.0671531,.145183,.995503,-.0109725,.0671491,.162808,.995501,-.012211,.0671465,.181441,.99553,-.0134565,.0671371,.201015,.99555,-.014391,.0670831,.221206,.99558,-.014351,.0668883,.240813,.995577,-.0173997,.0671055,.261257,.995602,-.0191111,.0671178,.284467,.995623,-.0206705,.0670946,.308765,.995658,-.022184,.0670472,.333905,.995705,-.0234832,.0669417,.359677,.995719,-.0241933,.0666714,.385554,.995786,-.0243539,.066266,.410951,.995887,-.0271866,.0664367,.437163,.995944,-.0296012,.0664931,.464842,.996004,-.0301045,.0660105,.49332,.996128,-.0298311,.0652694,.521131,.996253,-.0316426,.0650739,.549167,.996244,-.0339043,.0649433,.57737,.996309,-.033329,.0638926,.606073,.996417,-.0338935,.0630849,.634527,.996372,-.0353104,.0625083,.66256,.996542,-.0348942,.0611986,.690516,.996568,-.0351614,.060069,.718317,.996711,-.0354317,.0588522,.74528,.996671,-.0349513,.0571902,.772061,.996865,-.0345622,.0555321,.798089,.996802,-.0342566,.0537816,.823178,.996992,-.0330862,.0516095,.847949,.996944,-.0324666,.0495537,.871431,.997146,-.0309544,.0470302,.894357,.997189,-.0299372,.0446043,.916142,.997471,-.0281389,.0418812,.937193,.997515,-.0268702,.0391823,.957,.997812,-.0247166,.0361338,.975936,.998027,-.0233525,.0333945,.99391,.998233,-.0209839,.0301917,1.01075,.998481,-.0194309,.027271,1.02669,.998859,-.0169728,.0240162,1.04173,.99894,-.0152322,.0210517,1.05551,.999132,-.0127497,.0178632,1.06856,.999369,-.0108282,.014787,1.08054,.999549,-.00845886,.0116185,1.09185,.999805,-.0063937,.00867209,1.10207,.99985,-.00414582,.00566823,1.1117,.999912,-.00207443,.00277562,1.12022,1.00001,870226e-10,-53766e-9,1.12832,.991943,-178672e-11,.0893382,198384e-10,.991952,-450183e-10,.089339,499849e-9,.991956,-180074e-9,.0893394,.0019994,.991955,-405167e-9,.0893393,.00449867,.991953,-720298e-9,.0893391,.00799764,.991955,-.00112548,.0893393,.0124964,.991957,-.0016207,.0893395,.0179951,.991958,-.00220601,.0893396,.0244939,.991947,-.00288137,.0893385,.0319929,.991962,-.00364693,.0893399,.0404933,.991965,-.00450264,.0893399,.049995,.99198,-.00544862,.0893411,.0604995,.99197,-.00648491,.0893397,.0720074,.991976,-.00761164,.089341,.0845207,.99198,-.00882891,.0893405,.0980413,.991982,-.0101367,.0893396,.112571,.992008,-.011535,.0893415,.128115,.992026,-.0130228,.0893414,.144672,.992064,-.0145966,.0893418,.162241,.992041,-.0162421,.0893359,.180801,.992086,-.0178888,.0893214,.200302,.992157,-.0190368,.0892401,.220332,.992181,-.0195584,.0890525,.240144,.992175,-.0227257,.0892153,.260728,.99221,-.0254195,.089304,.283473,.99222,-.0274883,.0892703,.307673,.992317,-.0294905,.0892027,.332729,.992374,-.0311861,.0890577,.358387,.992505,-.0320656,.0886994,.384102,.992568,-.0329715,.0883198,.409767,.992675,-.036006,.0883602,.436145,.992746,-.0392897,.0884591,.463217,.992873,-.0399337,.0878287,.491557,.992934,-.040231,.0870108,.519516,.993091,-.0422013,.0865857,.547741,.993259,-.0443503,.0861937,.575792,.993455,-.0446368,.0851187,.604233,.993497,-.0454299,.0840576,.632925,.993694,-.0463296,.0829671,.660985,.993718,-.0470619,.0817185,.688714,.993973,-.0468838,.0800294,.716743,.994207,-.046705,.0781286,.74377,.994168,-.0469698,.0763337,.77042,.9945,-.0456816,.0738184,.796659,.994356,-.0455518,.0715545,.821868,.994747,-.0439488,.0686085,.846572,.994937,-.0430056,.065869,.870435,.995142,-.0413414,.0626446,.893272,.995451,-.0396521,.05929,.915376,.995445,-.0378453,.0558503,.936196,.995967,-.0355219,.0520949,.956376,.996094,-.0335146,.048377,.975327,.996622,-.030682,.0442575,.993471,.996938,-.0285504,.0404693,1.01052,.997383,-.0253399,.0360903,1.02637,.997714,-.0231651,.0322176,1.04139,.998249,-.0198138,.0278433,1.05542,.998596,-.0174337,.0238759,1.06846,.998946,-.0141349,.0195944,1.08056,.99928,-.0115603,.0156279,1.09181,.999507,-.00839065,.0114607,1.10213,.999697,-.005666,.00763325,1.11169,.999869,-.00269902,.00364946,1.12042,1.00001,623836e-10,-319288e-10,1.12832,.987221,-222675e-11,.111332,197456e-10,.98739,-561116e-10,.111351,497563e-9,.987448,-224453e-9,.111357,.00199031,.987441,-505019e-9,.111357,.0044782,.987442,-897816e-9,.111357,.00796129,.987442,-.00140284,.111357,.0124396,.987444,-.00202012,.111357,.0179132,.987442,-.00274964,.111357,.0243824,.987446,-.00359147,.111357,.0318474,.987435,-.00454562,.111356,.0403086,.987461,-.00561225,.111358,.0497678,.987458,-.00679125,.111358,.0602239,.987443,-.0080828,.111356,.0716792,.987476,-.0094872,.111358,.0841364,.98749,-.0110044,.111361,.097597,.987508,-.0126344,.111362,.112062,.987494,-.0143767,.111357,.127533,.987526,-.0162307,.111359,.144015,.987558,-.0181912,.111361,.161502,.987602,-.0202393,.111355,.179979,.987692,-.022273,.111346,.199386,.987702,-.0235306,.111215,.219183,.987789,-.0247628,.111061,.239202,.987776,-.0280668,.111171,.259957,.987856,-.0316751,.111327,.282198,.987912,-.0342468,.111282,.306294,.988,-.0367205,.111198,.331219,.988055,-.0387766,.110994,.356708,.988241,-.0397722,.110547,.382234,.988399,-.0416076,.110198,.408227,.988539,-.0448192,.110137,.434662,.988661,-.0483793,.110143,.461442,.988967,-.0495895,.109453,.489318,.989073,-.0506797,.108628,.517516,.989274,-.0526953,.108003,.545844,.989528,-.054578,.107255,.573823,.989709,-.0561503,.106294,.601944,.989991,-.056866,.104896,.630855,.990392,-.0572914,.103336,.658925,.990374,-.0586224,.10189,.686661,.990747,-.0584764,.099783,.714548,.991041,-.0582662,.0974309,.74186,.991236,-.0584118,.0951678,.768422,.991585,-.0573055,.0921581,.794817,.991984,-.0564241,.0891167,.820336,.9921,-.0553608,.085805,.84493,.992749,-.0533816,.0820354,.868961,.99288,-.0518661,.0782181,.891931,.993511,-.0492492,.0738935,.914186,.993617,-.0471956,.0696402,.93532,.99411,-.044216,.0649659,.95543,.994595,-.0416654,.0603177,.974685,.994976,-.0384314,.0553493,.992807,.995579,-.0353491,.0503942,1.00996,.996069,-.0319787,.0452123,1.02606,.996718,-.028472,.0400112,1.04114,.997173,-.0250789,.0349456,1.05517,.997818,-.0213326,.029653,1.0683,.998318,-.0178509,.024549,1.0805,.998853,-.0141118,.0194197,1.09177,.999218,-.0105914,.0143869,1.1022,.999594,-.00693474,.00943517,1.11175,.99975,-.00340478,.00464051,1.12056,1.00001,109172e-9,-112821e-9,1.12853,.983383,-266524e-11,.133358,196534e-10,.981942,-671009e-10,.133162,494804e-9,.981946,-268405e-9,.133163,.00197923,.981944,-603912e-9,.133163,.00445326,.981941,-.00107362,.133162,.00791693,.981946,-.00167755,.133163,.0123703,.981944,-.00241569,.133162,.0178135,.981945,-.00328807,.133163,.0242466,.981945,-.00429472,.133162,.03167,.981955,-.00543573,.133164,.0400846,.981951,-.00671105,.133163,.0494901,.981968,-.00812092,.133165,.0598886,.981979,-.00966541,.133166,.0712811,.981996,-.0113446,.133168,.083669,.982014,-.0131585,.133169,.0970533,.982011,-.0151073,.133167,.111438,.982062,-.0171906,.133172,.126826,.9821,-.0194067,.133175,.143215,.982149,-.0217502,.133176,.160609,.982163,-.0241945,.133173,.178981,.982247,-.0265907,.133148,.198249,.982291,-.027916,.132974,.217795,.982396,-.0299663,.132868,.238042,.982456,-.0334544,.132934,.258901,.982499,-.0378636,.133137,.280639,.982617,-.0409274,.133085,.304604,.98274,-.0438523,.132985,.329376,.982944,-.0462288,.132728,.354697,.98308,-.0475995,.132228,.380102,.983391,-.0501901,.131924,.406256,.983514,-.0535899,.131737,.432735,.98373,-.0571858,.131567,.459359,.984056,-.0592353,.130932,.486637,.984234,-.0610488,.130092,.51509,.984748,-.0630758,.12923,.543461,.985073,-.0647398,.128174,.571376,.985195,-.0671941,.127133,.599414,.985734,-.0681345,.125576,.628134,.986241,-.0686089,.123639,.656399,.986356,-.0698511,.121834,.684258,.986894,-.0700931,.119454,.711818,.987382,-.0698321,.116718,.739511,.988109,-.0693975,.113699,.766267,.988363,-.0689584,.110454,.792456,.989112,-.0672353,.106602,.81813,.989241,-.0662034,.10267,.842889,.990333,-.0638938,.0981381,.867204,.990591,-.0618534,.0935388,.89038,.991106,-.0593117,.088553,.912576,.991919,-.0562676,.0832187,.934118,.992111,-.0534085,.0778302,.954254,.992997,-.0495459,.0720453,.973722,.993317,-.0463707,.0663458,.991949,.994133,-.0421245,.0601883,1.00936,.994705,-.0384977,.0542501,1.02559,.995495,-.0340956,.0479862,1.04083,.996206,-.030105,.041887,1.05497,.996971,-.0256095,.0355355,1.06824,.997796,-.0213932,.0293655,1.08056,.998272,-.0169612,.0232926,1.09182,.998857,-.0126756,.0172786,1.10219,.99939,-.00832486,.0113156,1.11192,.999752,-.00410826,.00557892,1.12075,1,150957e-9,-119101e-9,1.12885,.975169,-309397e-11,.154669,195073e-10,.975439,-779608e-10,.154712,491534e-9,.975464,-311847e-9,.154716,.00196617,.975464,-701656e-9,.154716,.00442387,.975462,-.0012474,.154715,.0078647,.975461,-.00194906,.154715,.0122886,.975464,-.00280667,.154715,.0176959,.975468,-.00382025,.154716,.0240867,.975471,-.00498985,.154716,.0314612,.975472,-.00631541,.154717,.0398199,.975486,-.00779719,.154718,.0491639,.975489,-.00943505,.154718,.0594932,.975509,-.0112295,.154721,.0708113,.97554,-.0131802,.154724,.0831176,.975557,-.0152876,.154726,.096415,.975585,-.0175512,.154728,.110705,.975605,-.0199713,.154729,.125992,.975645,-.0225447,.154729,.142272,.975711,-.0252649,.154735,.159549,.975788,-.0280986,.154736,.177805,.975872,-.0308232,.154704,.196911,.975968,-.0324841,.154525,.216324,.976063,-.0351281,.154432,.236628,.976157,-.0388618,.15446,.257539,.976204,-.0437704,.154665,.278975,.976358,-.047514,.154652,.302606,.976571,-.0508638,.154535,.327204,.976725,-.0534995,.154221,.352276,.977013,-.0555547,.153737,.377696,.977294,-.0586728,.153403,.403855,.977602,-.0622715,.15312,.430333,.977932,-.0658166,.152755,.456855,.978241,-.0689877,.152233,.483668,.978602,-.0712805,.15132,.512097,.979234,-.0732775,.150235,.540455,.97977,-.075163,.148978,.568486,.979995,-.0778026,.147755,.596524,.98078,-.0791854,.146019,.624825,.981628,-.0799666,.143906,.653403,.982067,-.0808532,.141561,.681445,.98271,-.0816024,.139025,.708918,.983734,-.0812511,.135764,.736594,.98431,-.0806201,.132152,.763576,.985071,-.0801605,.12846,.789797,.98618,-.0784208,.124084,.815804,.986886,-.0766643,.1193,.840869,.987485,-.0747744,.114236,.864952,.988431,-.0716701,.108654,.888431,.988886,-.0691609,.102994,.910963,.990024,-.0654048,.0967278,.932629,.990401,-.0619765,.090384,.95313,.991093,-.0579296,.0837885,.972587,.992018,-.0536576,.0770171,.991184,.992536,-.0493719,.0701486,1.00863,.993421,-.0444813,.062953,1.02494,.993928,-.040008,.0560455,1.04017,.994994,-.0347982,.04856,1.05463,.995866,-.0301017,.0416152,1.06807,.996916,-.0248225,.0342597,1.08039,.997766,-.0199229,.0271668,1.09177,.998479,-.0147422,.0201387,1.10235,.99921,-.00980173,.0131944,1.11206,.999652,-.0047426,.00640712,1.12104,.999998,891673e-10,-10379e-8,1.12906,.967868,-351885e-11,.175947,193569e-10,.968001,-886733e-10,.175972,487782e-9,.96801,-354697e-9,.175973,.00195115,.968012,-798063e-9,.175974,.00439006,.968011,-.00141879,.175973,.00780461,.968011,-.00221686,.175973,.0121948,.968016,-.00319231,.175974,.0175607,.968019,-.00434515,.175974,.0239027,.968018,-.00567538,.175974,.0312208,.968033,-.00718308,.175977,.0395158,.968049,-.00886836,.175979,.0487885,.968047,-.0107312,.175978,.0590394,.968072,-.0127719,.175981,.0702705,.968108,-.0149905,.175986,.0824836,.968112,-.0173866,.175985,.0956783,.968173,-.0199611,.175993,.109862,.96827,-.0227128,.176008,.125033,.968292,-.025639,.17601,.141193,.968339,-.0287299,.176007,.158336,.968389,-.0319399,.176001,.176441,.968501,-.034941,.175962,.195359,.968646,-.0370812,.175793,.214686,.968789,-.0402329,.175708,.234973,.96886,-.0442601,.1757,.255871,.969013,-.049398,.175876,.277238,.969242,-.0539932,.17594,.300326,.969419,-.0577299,.175781,.324702,.969763,-.0605643,.175432,.349527,.970093,-.0634488,.174992,.374976,.970361,-.0670589,.174611,.401097,.970825,-.0708246,.174226,.427496,.971214,-.0742871,.173684,.453858,.971622,-.0782608,.173186,.480637,.972175,-.0813151,.172288,.508655,.972944,-.0832678,.170979,.536973,.973595,-.0855964,.169573,.565138,.974345,-.0882163,.168152,.593222,.975233,-.0901671,.166314,.621201,.976239,-.0912111,.163931,.649919,.977289,-.0916959,.161106,.678011,.978076,-.0927061,.158272,.705717,.979533,-.0925562,.15475,.733228,.980335,-.0918159,.150638,.760454,.981808,-.0908508,.146201,.786918,.983061,-.0896172,.141386,.812953,.984148,-.0871588,.135837,.838281,.985047,-.0850624,.130135,.862594,.986219,-.0818541,.123882,.88633,.987043,-.0784523,.117126,.908952,.988107,-.0749601,.110341,.930744,.988955,-.0703548,.102885,.951728,.989426,-.0662798,.0954167,.971166,.990421,-.0610834,.0876331,.989984,.991032,-.0562936,.0797785,1.00765,.992041,-.0508154,.0718166,1.02434,.992794,-.0454045,.0637125,1.03976,.993691,-.0398194,.0555338,1.05418,.994778,-.0341482,.0473388,1.06772,.995915,-.028428,.0391016,1.08028,.997109,-.022642,.0309953,1.09185,.998095,-.0168738,.0230288,1.10247,.998985,-.0111274,.0150722,1.11229,.999581,-.00543881,.00740605,1.12131,1.00003,162239e-9,-105549e-9,1.12946,.959505,-393734e-11,.196876,191893e-10,.959599,-992157e-10,.196895,483544e-9,.959641,-396868e-9,.196903,.0019342,.959599,-892948e-9,.196895,.00435193,.959603,-.00158747,.196896,.0077368,.959604,-.00248042,.196896,.0120888,.959605,-.00357184,.196896,.0174082,.959605,-.00486169,.196896,.0236949,.959613,-.00635008,.196897,.0309497,.959619,-.00803696,.196898,.0391725,.959636,-.00992255,.196901,.0483649,.959634,-.0120067,.1969,.0585266,.959675,-.0142898,.196906,.0696609,.959712,-.0167717,.196911,.0817678,.959752,-.0194524,.196918,.0948494,.959807,-.0223321,.196925,.10891,.959828,-.0254091,.196924,.123947,.959906,-.0286815,.196934,.139968,.960005,-.0321371,.196944,.156968,.960071,-.0357114,.196936,.17491,.960237,-.0389064,.196882,.193597,.960367,-.041623,.196731,.21285,.960562,-.0452655,.196654,.233075,.960735,-.0496207,.196643,.253941,.960913,-.0549379,.196774,.275278,.961121,-.0603414,.196893,.297733,.96139,-.0644244,.196717,.321877,.961818,-.067556,.196314,.346476,.962175,-.0712709,.195917,.371907,.96255,-.0752848,.1955,.397916,.963164,-.0792073,.195026,.424229,.963782,-.0828225,.194424,.450637,.964306,-.0873119,.193831,.477288,.964923,-.0911051,.192973,.504716,.966048,-.093251,.19151,.533053,.967024,-.0958983,.190013,.561366,.968038,-.09835,.188253,.589464,.969152,-.100754,.186257,.617433,.970557,-.102239,.183775,.645801,.972104,-.102767,.180645,.674278,.973203,-.103492,.177242,.702004,.975123,-.103793,.17345,.729529,.97641,-.102839,.168886,.756712,.978313,-.101687,.163892,.783801,.980036,-.100314,.158439,.809671,.981339,-.097836,.152211,.835402,.982794,-.0950006,.145679,.860081,.984123,-.0920994,.138949,.883757,.984918,-.0878641,.131283,.90685,.985999,-.083939,.123464,.928786,.987151,-.0791234,.115324,.94983,.987827,-.0739332,.106854,.96962,.988806,-.0688088,.0982691,.98861,.989588,-.0628962,.0893456,1.00667,.990438,-.0573146,.0805392,1.02344,.991506,-.0509433,.0713725,1.03933,.992492,-.0448724,.0623732,1.05378,.993663,-.0383497,.0530838,1.06747,.994956,-.0319593,.0439512,1.08007,.99634,-.025401,.0347803,1.09182,.99761,-.0189687,.0257954,1.1025,.99863,-.0124441,.0169893,1.11247,.99947,-.00614003,.00829498,1.12151,1.00008,216624e-9,-146107e-9,1.12993,.950129,-434955e-11,.217413,190081e-10,.950264,-10957e-8,.217444,47884e-8,.9503,-438299e-9,.217451,.00191543,.950246,-986124e-9,.21744,.00430951,.950246,-.00175311,.21744,.00766137,.950245,-.00273923,.21744,.011971,.950253,-.00394453,.217441,.0172385,.950258,-.00536897,.217442,.0234641,.950267,-.00701262,.217444,.030648,.950277,-.00887551,.217446,.038791,.950284,-.0109576,.217446,.0478931,.950312,-.0132591,.217451,.0579568,.950334,-.01578,.217454,.0689821,.950378,-.0185204,.217462,.0809714,.950417,-.0214803,.217467,.0939265,.950488,-.0246594,.217479,.10785,.950534,-.0280565,.217483,.122743,.950633,-.0316685,.217498,.138611,.950698,-.0354787,.217499,.155442,.950844,-.0394003,.217507,.173208,.950999,-.0426812,.217419,.191605,.951221,-.0461302,.217317,.21084,.951412,-.0502131,.217238,.230945,.951623,-.0549183,.21722,.251745,.951867,-.0604493,.217306,.273001,.952069,-.0665189,.217466,.294874,.952459,-.0709179,.217266,.318732,.952996,-.0746112,.216891,.34318,.953425,-.0789252,.216503,.36849,.953885,-.0833293,.216042,.394373,.954617,-.087371,.215469,.420505,.955429,-.0914054,.214802,.446907,.956068,-.0961671,.214146,.473522,.957094,-.10048,.213286,.50052,.958372,-.103248,.211796,.528715,.959654,-.106033,.21016,.557065,.961305,-.108384,.208149,.585286,.962785,-.111122,.206024,.613334,.964848,-.112981,.203442,.641334,.966498,-.113717,.19996,.669955,.968678,-.114121,.196105,.698094,.970489,-.114524,.191906,.725643,.972903,-.113792,.186963,.752856,.974701,-.112406,.181343,.780013,.976718,-.110685,.175185,.806268,.978905,-.108468,.168535,.832073,.980267,-.105061,.161106,.857149,.981967,-.101675,.153387,.881145,.983063,-.0974492,.145199,.904255,.984432,-.0925815,.136527,.926686,.985734,-.0877983,.127584,.947901,.986228,-.081884,.118125,.968111,.98719,-.0761208,.108594,.98719,.988228,-.0698196,.0989996,1.00559,.989046,-.0632739,.0890074,1.02246,.990242,-.056522,.0790832,1.03841,.991252,-.0495272,.0689182,1.05347,.992542,-.0425373,.0588592,1.06724,.994096,-.0353198,.0486833,1.08009,.995593,-.028235,.0385977,1.09177,.99711,-.0209511,.0286457,1.10274,.998263,-.0139289,.0188497,1.11262,.999254,-.0067359,.009208,1.12191,.999967,141846e-9,-657764e-10,1.13024,.935608,-474692e-11,.236466,187817e-10,.93996,-11971e-8,.237568,473646e-9,.939959,-478845e-9,.237567,.0018946,.939954,-.0010774,.237566,.00426284,.939956,-.00191538,.237566,.00757842,.939954,-.00299277,.237566,.0118413,.93996,-.00430961,.237567,.0170518,.939969,-.00586589,.237569,.02321,.939982,-.00766166,.237572,.0303164,.939987,-.00969686,.237572,.0383711,.939997,-.0119715,.237574,.0473751,.940031,-.0144858,.237581,.0573298,.940073,-.0172399,.237589,.0682366,.94012,-.0202335,.237598,.080097,.940162,-.0234663,.237604,.0929116,.940237,-.0269387,.237615,.106686,.940328,-.0306489,.237632,.121421,.940419,-.0345917,.237645,.137115,.940522,-.0387481,.237654,.153766,.940702,-.0429906,.237661,.17133,.940871,-.0465089,.237561,.189502,.941103,-.050531,.23748,.208616,.941369,-.0550657,.237423,.228595,.941641,-.0601337,.237399,.249287,.941903,-.0658804,.237443,.270467,.942224,-.0722674,.237597,.292024,.942633,-.0771788,.237419,.315272,.943172,-.0815623,.237068,.339579,.943691,-.0863973,.236682,.364717,.944382,-.0911536,.236213,.390435,.945392,-.0952967,.235562,.416425,.946185,-.0998948,.234832,.442772,.947212,-.104796,.234114,.469347,.948778,-.10928,.233222,.496162,.950149,-.113081,.231845,.523978,.951989,-.115893,.230005,.552295,.953921,-.11846,.227862,.580569,.955624,-.12115,.225439,.608698,.958234,-.123373,.222635,.636696,.960593,-.124519,.219093,.665208,.963201,-.124736,.214749,.693557,.965642,-.125012,.210059,.721334,.968765,-.124661,.204935,.748613,.971753,-.122996,.198661,.776224,.973751,-.120998,.191823,.802461,.976709,-.118583,.184359,.828399,.977956,-.115102,.176437,.853693,.979672,-.111077,.167681,.877962,.981816,-.10688,.158872,.901564,.98238,-.101469,.149398,.924057,.983964,-.0960013,.139436,.945751,.984933,-.0899626,.12943,.966272,.985694,-.0832973,.11894,.985741,.986822,-.0767082,.108349,1.00407,.987725,-.0693614,.0976026,1.02154,.98877,-.06211,.086652,1.03757,.990129,-.0544143,.0756182,1.05296,.991337,-.046744,.0645753,1.06683,.992978,-.0387931,.0534683,1.0798,.994676,-.030973,.0424137,1.09181,.99645,-.0230311,.0314035,1.10286,.997967,-.0152065,.0206869,1.11291,.99922,-.00744837,.010155,1.12237,1.00002,240209e-9,-752767e-10,1.13089,.922948,-515351e-11,.255626,186069e-10,.928785,-129623e-9,.257244,468009e-9,.928761,-51849e-8,.257237,.00187202,.928751,-.0011666,.257235,.00421204,.928751,-.00207395,.257234,.0074881,.928754,-.00324055,.257235,.0117002,.92876,-.00466639,.257236,.0168486,.928763,-.00635149,.257237,.0229334,.928774,-.00829584,.257239,.029955,.928791,-.0104995,.257243,.0379139,.928804,-.0129623,.257245,.0468108,.928847,-.0156846,.257255,.0566473,.92889,-.0186661,.257263,.0674246,.928924,-.0219067,.257268,.0791433,.928989,-.0254066,.257282,.0918076,.92909,-.0291651,.257301,.105419,.92918,-.0331801,.257316,.119978,.92929,-.0374469,.257332,.135491,.929453,-.041939,.257357,.151948,.929586,-.0464612,.257347,.169275,.929858,-.0503426,.257269,.187257,.930125,-.0548409,.257199,.206204,.930403,-.0598063,.257149,.22601,.930726,-.0652437,.257122,.246561,.931098,-.0712376,.257153,.267618,.931396,-.0777506,.257237,.288993,.931947,-.0832374,.257124,.311527,.932579,-.0883955,.25683,.335697,.933194,-.0937037,.256444,.360634,.934013,-.0987292,.255939,.386126,.935307,-.103215,.255282,.412018,.936374,-.108234,.254538,.438292,.93776,-.113234,.253728,.464805,.939599,-.118013,.25275,.491464,.941036,-.122661,.251404,.518751,.94337,-.125477,.249435,.547133,.945318,-.128374,.247113,.575456,.947995,-.130996,.244441,.60372,.950818,-.133438,.241352,.63174,.954378,-.135004,.237849,.659971,.957151,-.135313,.233188,.688478,.960743,-.13521,.228001,.716767,.964352,-.135007,.222249,.744349,.967273,-.133523,.21542,.771786,.969767,-.131155,.208039,.798639,.973195,-.128492,.200076,.824774,.975557,-.125094,.191451,.850222,.977692,-.120578,.18184,.874761,.98026,-.115882,.172102,.898497,.981394,-.110372,.161859,.921636,.982386,-.10415,.15108,.943467,.983783,-.0978128,.140407,.964045,.98422,-.0906171,.129058,.98398,.985447,-.0832921,.117614,1.00276,.986682,-.0754412,.10585,1.02047,.987326,-.0673885,.0940943,1.03678,.988707,-.0592565,.0822093,1.05218,.990185,-.050717,.070192,1.06652,.991866,-.0423486,.0582081,1.07965,.993897,-.0336118,.0460985,1.09188,.995841,-.0252178,.0342737,1.10307,.997605,-.0164893,.0224829,1.11324,.999037,-.00817112,.0110647,1.12262,1.00003,291686e-9,-168673e-9,1.13139,.915304,-552675e-11,.275999,183285e-10,.91668,-139285e-9,.276414,461914e-9,.916664,-55713e-8,.276409,.00184763,.916653,-.00125354,.276406,.00415715,.916651,-.00222851,.276405,.00739053,.916655,-.00348205,.276406,.0115478,.916653,-.00501414,.276405,.0166291,.916667,-.00682478,.276409,.0226346,.91668,-.00891398,.276412,.0295648,.91669,-.0112817,.276413,.0374199,.916727,-.013928,.276422,.0462016,.916759,-.0168528,.276429,.0559101,.916793,-.0200558,.276436,.0665466,.916849,-.0235373,.276448,.0781139,.916964,-.0272973,.276474,.0906156,.917047,-.0313344,.276491,.104051,.917152,-.0356465,.276511,.118424,.917286,-.0402271,.276533,.133736,.917469,-.0450408,.276564,.149978,.917686,-.0497872,.276563,.167057,.917953,-.0540937,.276493,.184846,.918228,-.0590709,.276437,.203614,.918572,-.0644277,.276398,.223212,.918918,-.0702326,.276362,.243584,.919356,-.076484,.276383,.264465,.919842,-.0830808,.276434,.285701,.920451,-.0892972,.276407,.307559,.921113,-.095016,.276128,.331501,.921881,-.100771,.275754,.356207,.923027,-.106029,.275254,.381477,.924364,-.111029,.274595,.40722,.925818,-.116345,.273841,.433385,.92746,-.121424,.272913,.459848,.929167,-.12657,.271837,.486493,.931426,-.131581,.270575,.513432,.934001,-.135038,.268512,.541502,.936296,-.138039,.266135,.569658,.939985,-.140687,.263271,.598375,.943516,-.143247,.260058,.626563,.94782,-.145135,.256138,.654711,.951023,-.145733,.251154,.683285,.955338,-.145554,.245562,.711831,.959629,-.145008,.239265,.739573,.963123,-.144003,.232064,.767027,.966742,-.141289,.224036,.794359,.969991,-.138247,.215305,.820361,.973403,-.134786,.206051,.846548,.975317,-.129966,.195914,.871541,.977647,-.12471,.185184,.895313,.980137,-.119086,.174161,.918398,.981031,-.112297,.162792,.940679,.982037,-.105372,.150952,.961991,.983164,-.097821,.138921,.981913,.983757,-.0897245,.126611,1.00109,.985036,-.0815974,.114228,1.01902,.986289,-.0727725,.101389,1.03604,.987329,-.0639323,.0886476,1.05149,.989193,-.0548109,.0756837,1.06619,.990716,-.045687,.0627581,1.07948,.992769,-.0364315,.0498337,1.09172,.99524,-.0271761,.0370305,1.1033,.997154,-.0179609,.0243959,1.11353,.998845,-.00878063,.0119567,1.12319,1.00002,259038e-9,-108146e-9,1.13177,.903945,-591681e-11,.295126,181226e-10,.903668,-148672e-9,.295037,455367e-9,.903677,-594683e-9,.29504,.00182145,.903673,-.00133805,.295039,.00409831,.903666,-.00237872,.295036,.00728584,.903668,-.00371676,.295037,.0113842,.903679,-.00535212,.29504,.0163936,.903684,-.00728479,.295041,.0223141,.903698,-.00951473,.295044,.0291462,.903718,-.0120419,.295049,.0368904,.903754,-.0148664,.295058,.0455477,.903801,-.017988,.29507,.0551194,.903851,-.0214064,.295082,.0656058,.903921,-.0251219,.295097,.0770109,.904002,-.0291337,.295116,.0893354,.904111,-.033441,.29514,.102583,.904246,-.0380415,.295169,.116755,.904408,-.0429258,.295202,.131853,.904637,-.0480468,.295245,.147869,.904821,-.0529208,.295214,.164658,.905163,-.0577748,.295185,.182274,.905469,-.0631763,.295143,.200828,.905851,-.068917,.295112,.2202,.906322,-.0750861,.295104,.240372,.906761,-.0815855,.295086,.261082,.90735,-.0882138,.295095,.282123,.908087,-.095082,.295139,.303563,.908826,-.101488,.29492,.327028,.909832,-.107577,.294577,.351464,.911393,-.113033,.294115,.376497,.912804,-.118629,.293446,.402115,.914081,-.124232,.292581,.428111,.91637,-.129399,.29166,.454442,.91814,-.134892,.290422,.481024,.921179,-.140069,.289194,.507924,.924544,-.144431,.287421,.535557,.927995,-.147498,.284867,.563984,.931556,-.150197,.281722,.5923,.935777,-.152711,.278207,.620832,.940869,-.154836,.274148,.649069,.945994,-.155912,.269057,.677746,.949634,-.155641,.262799,.706293,.955032,-.154809,.256097,.734278,.95917,-.153678,.248618,.761751,.962931,-.151253,.239794,.789032,.966045,-.147625,.230281,.815422,.96971,-.143964,.220382,.841787,.972747,-.139464,.209846,.867446,.975545,-.133459,.198189,.892004,.978381,-.127424,.186362,.915458,.979935,-.120506,.173964,.937948,.980948,-.11282,.161429,.959732,.982234,-.104941,.148557,.980118,.982767,-.0962905,.135508,.999463,.983544,-.0873625,.122338,1.01756,.984965,-.0783447,.108669,1.03492,.986233,-.0684798,.0949911,1.05087,.987796,-.0590867,.0811386,1.0656,.989885,-.0489145,.0673099,1.0794,.991821,-.0391,.0535665,1.09174,.99448,-.029087,.0397529,1.10341,.996769,-.019114,.0261463,1.11383,.998641,-.00947007,.0128731,1.1237,.999978,446316e-9,-169093e-9,1.13253,.888362,-627064e-11,.312578,178215e-10,.889988,-157791e-9,.313148,448451e-9,.889825,-631076e-9,.313092,.00179356,.88984,-.00141994,.313097,.00403554,.889828,-.0025243,.313092,.00717429,.889831,-.00394421,.313093,.0112099,.889831,-.00567962,.313093,.0161425,.889844,-.00773051,.313096,.0219724,.889858,-.0100968,.3131,.0286999,.889882,-.0127786,.313106,.0363256,.889918,-.0157757,.313116,.0448509,.889967,-.0190878,.313129,.0542758,.89003,-.022715,.313145,.0646032,.890108,-.0266566,.313165,.0758339,.890218,-.0309131,.313193,.0879729,.890351,-.0354819,.313226,.101019,.89051,-.0403613,.313263,.114979,.890672,-.0455385,.313294,.129848,.890882,-.0509444,.313333,.145616,.891189,-.0559657,.313324,.162122,.891457,-.0613123,.313281,.179524,.891856,-.0671488,.313281,.197855,.892312,-.0732732,.313268,.216991,.892819,-.0797865,.313263,.236924,.893369,-.0865269,.313247,.257433,.894045,-.0931592,.313205,.278215,.894884,-.100532,.313276,.299467,.895832,-.107716,.313205,.322276,.897043,-.114099,.312873,.34642,.898515,-.119941,.312331,.371187,.900191,-.126044,.311731,.396656,.90188,-.131808,.310859,.422488,.904359,-.137289,.309857,.448744,.906923,-.142991,.308714,.475239,.910634,-.148253,.307465,.501983,.914502,-.153332,.305774,.529254,.919046,-.156646,.303156,.557709,.923194,-.159612,.299928,.586267,.928858,-.162027,.296245,.614925,.934464,-.164203,.291832,.643187,.939824,-.165602,.286565,.671601,.944582,-.165383,.280073,.700213,.949257,-.164439,.272891,.728432,.954389,-.162953,.264771,.756082,.958595,-.161007,.255927,.78369,.962138,-.157243,.245769,.810769,.966979,-.152872,.235127,.836999,.969566,-.148209,.22347,.862684,.972372,-.142211,.211147,.887847,.975916,-.135458,.198606,.911843,.978026,-.128398,.185498,.934795,.979686,-.120313,.17171,.956787,.980748,-.11166,.158159,.978046,.981622,-.103035,.144399,.997693,.982356,-.0930328,.13001,1.01642,.983308,-.0834627,.115778,1.03366,.985037,-.0732249,.101327,1.05014,.986493,-.0628145,.086554,1.06507,.988484,-.0526556,.0720413,1.07907,.991051,-.0415744,.0571151,1.09189,.993523,-.0314275,.0426643,1.10369,.99628,-.0203603,.0279325,1.11423,.998344,-.0102446,.0138182,1.12421,.999997,42612e-8,-193628e-9,1.1333,.871555,-660007e-11,.329176,174749e-10,.875255,-166579e-9,.330571,441051e-9,.875644,-666394e-9,.330718,.00176441,.875159,-.00149903,.330536,.00396899,.87516,-.00266493,.330536,.007056,.875158,-.00416393,.330535,.0110251,.87516,-.00599598,.330535,.0158764,.875163,-.00816108,.330536,.0216101,.875174,-.0106591,.330538,.0282266,.875199,-.0134899,.330545,.0357266,.875257,-.0166538,.330563,.0441117,.875304,-.0201501,.330575,.0533821,.875373,-.0239785,.330595,.0635395,.875464,-.0281389,.330619,.0745872,.875565,-.0326301,.330645,.0865255,.875691,-.0374516,.330676,.0993599,.875897,-.0425993,.330733,.113093,.876091,-.0480576,.330776,.127722,.876353,-.0537216,.330826,.143227,.876649,-.0589807,.330809,.159462,.877034,-.0647865,.330819,.176642,.877443,-.0709789,.330817,.194702,.877956,-.0774782,.330832,.213577,.878499,-.0843175,.330822,.233246,.879144,-.0912714,.330804,.253512,.879982,-.0980824,.330766,.274137,.88097,-.105823,.330864,.295209,.882051,-.113671,.330896,.317226,.883397,-.120303,.330545,.341068,.884987,-.12667,.330068,.365613,.886789,-.133118,.329418,.390807,.889311,-.139024,.328683,.416494,.891995,-.144971,.327729,.442618,.895106,-.150747,.326521,.469131,.899527,-.156283,.325229,.495921,.90504,-.161707,.32378,.523162,.909875,-.165661,.32122,.55092,.91561,-.168755,.317942,.579928,.921225,-.171193,.313983,.608539,.927308,-.17319,.309636,.636854,.933077,-.174819,.304262,.66523,.938766,-.175002,.297563,.693609,.943667,-.173946,.289613,.722157,.949033,-.172221,.281227,.750021,.953765,-.169869,.271545,.777466,.95804,-.166578,.261034,.804853,.962302,-.161761,.249434,.831569,.966544,-.156636,.237484,.857779,.969372,-.150784,.224395,.883051,.972486,-.143672,.210786,.907864,.975853,-.135772,.196556,.931223,.977975,-.127942,.182307,.954061,.979122,-.118347,.167607,.97531,.980719,-.109112,.152739,.995666,.981223,-.0991789,.137932,1.01475,.98216,-.0883553,.122692,1.03253,.983379,-.0780825,.107493,1.04917,.985434,-.0665646,.0917791,1.06464,.987332,-.0557714,.0764949,1.07896,.990004,-.0442805,.060721,1.09199,.992975,-.0331676,.0452284,1.10393,.995811,-.0219547,.0297934,1.11476,.9982,-.0107613,.0146415,1.12484,1.00002,248678e-9,-14555e-8,1.13413,.859519,-693595e-11,.347264,171673e-10,.859843,-17503e-8,.347394,433219e-9,.859656,-700076e-9,.347319,.00173277,.859671,-.00157517,.347325,.00389875,.859669,-.00280028,.347324,.00693112,.85967,-.0043754,.347324,.01083,.859665,-.00630049,.347321,.0155954,.859685,-.0085755,.347328,.0212278,.859694,-.0112003,.347329,.0277273,.859718,-.0141747,.347336,.0350946,.85976,-.0174988,.347348,.0433314,.85982,-.0211722,.347366,.0524384,.859892,-.0251941,.347387,.0624168,.860006,-.0295649,.347422,.0732708,.860122,-.0342825,.347453,.0849999,.860282,-.0393462,.347499,.0976102,.860482,-.0447513,.347554,.111104,.860719,-.0504775,.347614,.125479,.860998,-.0563577,.347666,.140703,.861322,-.0619473,.347662,.156681,.861724,-.0681277,.347684,.173597,.862198,-.0746567,.347709,.191371,.862733,-.0815234,.347727,.209976,.863371,-.0886643,.347744,.229351,.86414,-.0957908,.347734,.24934,.865138,-.102912,.34772,.269797,.866182,-.110924,.3478,.290654,.867436,-.119223,.347911,.312074,.869087,-.126197,.347649,.335438,.870859,-.133145,.347222,.359732,.872997,-.139869,.346645,.38467,.875939,-.146089,.345935,.41019,.879012,-.152334,.345012,.436218,.883353,-.15821,.343924,.462641,.888362,-.164097,.342636,.489449,.895026,-.169528,.341351,.516629,.900753,-.174408,.339115,.544109,.906814,-.17751,.335809,.572857,.912855,-.180101,.331597,.601554,.919438,-.182116,.32698,.630198,.925962,-.183494,.321449,.658404,.931734,-.184159,.314595,.686625,.93762,-.18304,.306462,.71531,.943858,-.181323,.297514,.744272,.948662,-.178683,.287447,.771462,.953299,-.175379,.276166,.798593,.957346,-.170395,.263758,.8256,.962565,-.165042,.251019,.852575,.966075,-.158655,.237011,.878316,.969048,-.151707,.222518,.90329,.972423,-.143271,.207848,.927745,.975833,-.134824,.192463,.950859,.977629,-.125444,.1768,.972947,.978995,-.114949,.161033,.993263,.980533,-.104936,.145523,1.01337,.980745,-.0935577,.129799,1.03128,.981814,-.0822956,.113486,1.04825,.983943,-.0710082,.0972925,1.06405,.986141,-.0587931,.0808138,1.0785,.988878,-.0472755,.0644915,1.09204,.992132,-.0349128,.0478128,1.10413,.9953,-.0232407,.031621,1.11527,.998117,-.0112713,.0154935,1.12551,1.00003,339743e-9,-195763e-9,1.13504,.845441,-729126e-11,.364305,169208e-10,.843588,-183164e-9,.363506,425067e-9,.843412,-73253e-8,.36343,.00169999,.843401,-.00164818,.363426,.00382495,.843399,-.00293008,.363425,.00679993,.843401,-.00457822,.363425,.010625,.843394,-.00659249,.363421,.0153002,.843398,-.00897282,.363421,.0208258,.843415,-.0117191,.363426,.0272024,.843438,-.0148312,.363432,.0344305,.843483,-.018309,.363447,.0425116,.84356,-.0221521,.363472,.0514471,.843646,-.0263597,.363499,.061238,.843743,-.0309315,.363527,.0718873,.84388,-.0358658,.363569,.0833969,.844079,-.0411624,.363631,.0957742,.844279,-.0468128,.363688,.109015,.844549,-.0527923,.363761,.123124,.844858,-.0588204,.363817,.138044,.84522,-.0647573,.36383,.153755,.845669,-.0713181,.363879,.170394,.846155,-.0781697,.363908,.187861,.846789,-.0853913,.363969,.206176,.847502,-.0928086,.363999,.225244,.8484,-.10005,.363997,.244926,.849461,-.107615,.364008,.265188,.850562,-.115814,.364055,.28587,.851962,-.124334,.364179,.306926,.854326,-.131995,.364233,.329605,.856295,-.139338,.363856,.35359,.858857,-.146346,.363347,.37831,.862428,-.152994,.362807,.403722,.866203,-.159463,.361963,.429537,.871629,-.165623,.36112,.456,.877365,-.171649,.359917,.482773,.883744,-.177151,.35848,.509705,.890693,-.182381,.356523,.537215,.897278,-.186076,.3533,.565493,.903958,-.188602,.349095,.594293,.910908,-.190755,.344215,.623165,.918117,-.192063,.338606,.651573,.924644,-.192758,.331544,.679869,.931054,-.192238,.323163,.708668,.937303,-.190035,.313529,.737201,.943387,-.187162,.303152,.764977,.948494,-.183876,.29146,.792683,.952546,-.178901,.277917,.819228,.958077,-.173173,.264753,.846559,.962462,-.16645,.25002,.872962,.966569,-.159452,.234873,.898729,.969108,-.15074,.218752,.923126,.973072,-.141523,.202673,.947278,.975452,-.132075,.186326,.969938,.977784,-.121257,.169396,.991325,.97899,-.110182,.153044,1.01123,.979777,-.0989634,.136485,1.0299,.980865,-.0865894,.119343,1.04727,.982432,-.0746115,.102452,1.06341,.984935,-.0621822,.0852423,1.07834,.987776,-.0495694,.0678546,1.092,.99103,-.0372386,.0506917,1.1043,.99474,-.0244353,.0333316,1.11576,.997768,-.0121448,.0164348,1.12617,1.00003,31774e-8,-169504e-9,1.13598,.825551,-756799e-11,.378425,165099e-10,.82664,-190922e-9,.378923,416504e-9,.826323,-763495e-9,.378779,.0016656,.826359,-.00171789,.378795,.00374768,.82636,-.00305402,.378795,.00666259,.826368,-.00477185,.378798,.0104104,.826364,-.00687131,.378795,.0149912,.826368,-.00935232,.378795,.0204054,.826376,-.0122146,.378797,.0266532,.826399,-.0154581,.378803,.0337355,.82646,-.0190825,.378824,.0416537,.826525,-.0230873,.378846,.0504091,.826614,-.0274719,.378876,.0600032,.82674,-.0322355,.378917,.0704393,.826888,-.0373766,.378964,.0817195,.827078,-.0428936,.379024,.0938492,.827318,-.0487778,.379099,.106828,.82764,-.0549935,.379199,.120659,.827926,-.0611058,.379227,.13526,.828325,-.0675054,.379275,.150713,.828801,-.0743455,.379332,.167034,.8294,-.0815523,.379415,.184209,.830094,-.0890779,.379495,.202203,.8309,-.096736,.379555,.220945,.831943,-.104135,.379577,.240306,.833037,-.112106,.379604,.260317,.834278,-.120554,.379668,.2808,.836192,-.129128,.3799,.301654,.838671,-.137541,.380109,.323502,.840939,-.14523,.379809,.347176,.844575,-.15248,.379593,.371706,.848379,-.159607,.37909,.39688,.853616,-.166267,.378617,.422702,.858921,-.172698,.377746,.448919,.865324,-.178823,.376749,.475661,.872207,-.184542,.375363,.502599,.880018,-.189836,.373657,.529914,.88694,-.194294,.370673,.557683,.894779,-.197022,.36662,.586848,.902242,-.199108,.36138,.615831,.909914,-.200398,.355434,.644478,.917088,-.20094,.348173,.672905,.923888,-.200671,.339482,.701327,.930495,-.198773,.32956,.730101,.937247,-.195394,.318363,.758383,.943108,-.191956,.306323,.786539,.948296,-.187227,.292576,.813637,.953472,-.181165,.278234,.840793,.958485,-.174119,.263054,.867712,.962714,-.166564,.246756,.893635,.966185,-.158181,.229945,.919028,.970146,-.148275,.212633,.943413,.973491,-.138157,.195229,.966627,.975741,-.127574,.178048,.988817,.977238,-.11554,.160312,1.00924,.978411,-.10364,.142857,1.02845,.979811,-.0913122,.125317,1.04648,.98116,-.0782558,.107627,1.06284,.983543,-.0655957,.0895862,1.07798,.986789,-.0520411,.0713756,1.092,.990292,-.0389727,.053228,1.10484,.994187,-.025808,.0351945,1.11642,.997499,-.0126071,.0173198,1.12703,.999999,275604e-9,-148602e-9,1.13674,.81075,-78735e-10,.394456,161829e-10,.808692,-198293e-9,.393453,407564e-9,.80846,-792877e-9,.39334,.00162965,.808595,-.00178416,.393407,.00366711,.808597,-.00317182,.393408,.00651934,.808598,-.00495589,.393408,.0101866,.808591,-.00713627,.393403,.0146689,.808592,-.00971285,.393402,.0199667,.80861,-.0126855,.393407,.0260803,.808633,-.0160538,.393413,.0330107,.80868,-.0198175,.393429,.0407589,.808748,-.0239758,.393453,.0493264,.808854,-.0285286,.39349,.0587161,.808992,-.0334748,.39354,.0689304,.809141,-.0388116,.393588,.0799707,.809352,-.0445375,.39366,.0918432,.809608,-.0506427,.393742,.104549,.809915,-.0570708,.393834,.118085,.810253,-.0633526,.393885,.132377,.810687,-.0700966,.393953,.147537,.811233,-.0772274,.394047,.163543,.811865,-.0847629,.394148,.180394,.812648,-.0925663,.394265,.198051,.813583,-.100416,.394363,.216443,.814683,-.108119,.394402,.235502,.815948,-.11644,.394489,.255242,.817278,-.125036,.394542,.275441,.819605,-.133655,.39486,.296094,.822256,-.142682,.395248,.317309,.825349,-.150756,.395241,.340516,.829605,-.158392,.395285,.364819,.83391,-.165801,.394922,.389736,.839808,-.172677,.394691,.415409,.845708,-.179448,.394006,.441546,.853025,-.185746,.393279,.46832,.859666,-.191684,.391655,.495302,.86789,-.197146,.390068,.52262,.875845,-.201904,.38727,.550336,.882634,-.205023,.382688,.578825,.891076,-.207098,.377543,.608103,.900589,-.208474,.371752,.63723,.90791,-.209068,.364016,.665769,.915971,-.208655,.355593,.694428,.923455,-.20729,.345439,.723224,.931514,-.203821,.334099,.751925,.937885,-.19986,.321069,.780249,.943136,-.194993,.306571,.8077,.948818,-.189132,.291556,.83497,.954433,-.181617,.275745,.86188,.959078,-.173595,.258695,.888562,.962705,-.164855,.240825,.914008,.966753,-.155129,.22268,.939145,.970704,-.144241,.204542,.963393,.973367,-.133188,.185927,.985983,.975984,-.121146,.167743,1.00704,.976994,-.108366,.149218,1.02715,.978485,-.0956746,.13131,1.0455,.980074,-.0820733,.112513,1.06221,.98225,-.0684061,.0938323,1.07782,.98553,-.0549503,.0749508,1.09199,.989529,-.0407857,.055848,1.10508,.993536,-.0271978,.0368581,1.11684,.997247,-.0132716,.0181845,1.12789,1,431817e-9,-198809e-9,1.13792,.785886,-812608e-11,.405036,157669e-10,.790388,-205278e-9,.407355,398297e-9,.790145,-820824e-9,.407231,.00159263,.790135,-.00184681,.407226,.00358336,.790119,-.00328316,.407218,.00637039,.790126,-.00512988,.40722,.0099539,.79013,-.00738684,.407221,.0143339,.790135,-.0100538,.407221,.0195107,.790134,-.0131306,.407217,.0254848,.79016,-.0166169,.407224,.0322572,.790197,-.020512,.407236,.0398284,.790273,-.0248157,.407263,.0482014,.790381,-.029527,.407304,.0573777,.790521,-.0346446,.407355,.0673602,.790704,-.0401665,.40742,.0781522,.790925,-.0460896,.407499,.0897582,.791195,-.0524017,.407589,.10218,.791522,-.0590121,.407691,.11541,.791878,-.0654876,.407748,.12939,.792361,-.0725207,.407849,.144237,.792942,-.0799844,.407963,.159924,.79362,-.0877896,.408087,.176425,.794529,-.0958451,.408259,.193733,.795521,-.103827,.408362,.211756,.796778,-.111937,.408482,.230524,.798027,-.120521,.408547,.249967,.799813,-.129242,.408721,.269926,.802387,-.138048,.409148,.290338,.805279,-.147301,.409641,.311193,.809251,-.155895,.410154,.333611,.813733,-.163942,.410297,.357615,.819081,-.171666,.410373,.382339,.825427,-.178905,.410348,.407828,.83172,-.185812,.409486,.434034,.83877,-.192318,.408776,.460493,.845817,-.198249,.407176,.487346,.854664,-.204034,.405719,.514832,.863495,-.208908,.403282,.542401,.871883,-.212765,.399293,.570683,.88065,-.214911,.393803,.599947,.89004,-.216214,.387536,.62932,.898476,-.216745,.379846,.658319,.906738,-.216387,.370625,.687138,.914844,-.215053,.360139,.71601,.923877,-.212007,.348849,.745124,.931925,-.207481,.335639,.773366,.938054,-.202418,.320798,.801636,.943895,-.196507,.304772,.829055,.949468,-.189009,.288033,.856097,.955152,-.180539,.270532,.88301,.959403,-.171437,.251639,.909296,.963309,-.161661,.232563,.934868,.967399,-.150425,.213231,.959662,.972009,-.138659,.194247,.98302,.97433,-.126595,.174718,1.00517,.975823,-.113205,.155518,1.02566,.976371,-.0996096,.136709,1.04418,.978705,-.0860754,.117571,1.06146,.981477,-.0714438,.0980046,1.07777,.984263,-.0572304,.0782181,1.09214,.988423,-.0428875,.0584052,1.10553,.993,-.0282442,.038522,1.11758,.99704,-.0140183,.0190148,1.12864,.999913,369494e-9,-145203e-9,1.13901,.777662,-84153e-10,.423844,154403e-10,.770458,-211714e-9,.419915,38845e-8,.770716,-846888e-9,.420055,.00155386,.770982,-.00190567,.420202,.00349653,.770981,-.00338782,.420201,.00621606,.77098,-.00529338,.4202,.00971274,.770983,-.00762223,.4202,.0139867,.770985,-.0103741,.420198,.0190381,.770996,-.0135489,.4202,.0248677,.771029,-.0171461,.420212,.0314764,.771052,-.0211647,.420215,.0388648,.771131,-.0256048,.420245,.047036,.771235,-.0304647,.420284,.0559911,.771383,-.0357436,.420341,.0657346,.771591,-.0414392,.420423,.0762694,.771819,-.0475462,.420506,.0875984,.772123,-.0540506,.420617,.099727,.772464,-.060797,.42072,.112637,.772855,-.0675393,.420799,.126313,.773317,-.0748323,.420893,.140824,.773981,-.0825681,.421058,.15617,.774746,-.0906307,.421226,.172322,.77566,-.0988982,.421397,.189253,.776837,-.106994,.421569,.206912,.778097,-.115528,.421704,.225359,.779588,-.124317,.421849,.24447,.781574,-.133139,.422097,.264156,.784451,-.142179,.422615,.284318,.787682,-.15165,.423269,.304902,.792433,-.160771,.424396,.3265,.797359,-.169166,.424772,.35014,.803986,-.177149,.425475,.374768,.809504,-.184745,.424996,.399928,.815885,-.19173,.424247,.425796,.823513,-.198525,.423515,.452287,.832549,-.204709,.422787,.479321,.841653,-.210447,.421187,.506718,.850401,-.215501,.418519,.53432,.859854,-.219752,.414715,.56242,.869364,-.222305,.409462,.591558,.878837,-.223744,.402926,.621074,.888636,-.224065,.395043,.650538,.898132,-.223742,.38564,.679538,.907181,-.222308,.375378,.708674,.915621,-.219837,.363212,.737714,.9239,-.215233,.349313,.767014,.931644,-.209592,.334162,.795133,.938887,-.203644,.317943,.823228,.945282,-.196349,.300581,.850822,.950758,-.18742,.282195,.877594,.956146,-.177879,.262481,.904564,.960355,-.167643,.242487,.930741,.965256,-.156671,.222668,.955868,.968029,-.144123,.201907,.979869,.97251,-.131305,.18202,1.00291,.974925,-.118335,.161909,1.02392,.975402,-.103714,.142129,1.0433,.976987,-.089415,.122447,1.06089,.979677,-.0748858,.102248,1.07713,.983184,-.0596086,.0814851,1.09218,.987466,-.0447671,.0609484,1.10585,.992348,-.0295217,.0401835,1.11829,.996674,-.0143917,.0198163,1.12966,1.00003,321364e-9,-149983e-9,1.1402,.757901,-869074e-11,.436176,151011e-10,.751195,-217848e-9,.432317,378533e-9,.751178,-871373e-9,.432307,.0015141,.751195,-.00196061,.432317,.0034068,.751198,-.00348552,.432318,.00605659,.751195,-.00544599,.432315,.00946353,.751207,-.00784203,.43232,.013628,.751213,-.0106732,.43232,.0185499,.751221,-.0139393,.432319,.0242302,.751244,-.0176398,.432325,.0306694,.7513,-.0217743,.432348,.0378698,.751358,-.0263412,.432367,.0458321,.751458,-.0313396,.432404,.0545587,.751608,-.0367682,.432464,.0640543,.7518,-.0426246,.43254,.0743222,.752065,-.0489031,.432645,.0853668,.752376,-.0555828,.432762,.0971911,.752715,-.0623861,.432859,.109768,.753137,-.069415,.432958,.123126,.753676,-.0770039,.433099,.137308,.754345,-.084971,.433272,.15229,.755235,-.0932681,.433504,.168075,.756186,-.10171,.433693,.184625,.757363,-.110019,.433857,.201897,.75884,-.11887,.434102,.220014,.760467,-.127881,.434306,.238778,.762969,-.136766,.434751,.258172,.765823,-.14612,.43529,.278062,.769676,-.15566,.436236,.298437,.774909,-.165177,.437754,.319532,.77994,-.17402,.438343,.342505,.785757,-.182201,.438609,.366693,.792487,-.190104,.438762,.391668,.80038,-.197438,.438795,.417494,.808494,-.204365,.438226,.443933,.817695,-.210714,.437283,.470929,.828111,-.216651,.436087,.498569,.837901,-.221804,.433717,.526165,.847813,-.226318,.430133,.554155,.858314,-.229297,.425213,.582822,.868891,-.230999,.418576,.612847,.878941,-.231155,.410405,.642445,.888809,-.230935,.400544,.672024,.898089,-.229343,.389613,.701366,.908081,-.226886,.377197,.730763,.916819,-.222676,.363397,.759642,.924968,-.216835,.347437,.788775,.932906,-.210245,.32995,.817135,.940025,-.202992,.312262,.844912,.946101,-.19436,.293313,.872164,.952835,-.184125,.273638,.899443,.957347,-.173657,.252385,.926389,.961434,-.162204,.231038,.951947,.965522,-.14979,.209834,.976751,.969412,-.136307,.188821,1.00022,.973902,-.122527,.168013,1.02229,.974045,-.108213,.147634,1.04199,.975775,-.0927397,.12705,1.06019,.978383,-.0778212,.106309,1.07711,.98211,-.0621216,.0849279,1.09245,.986517,-.0463847,.0633519,1.10651,.991696,-.0309353,.0419698,1.11903,.996349,-.0150914,.0206272,1.13073,1.00003,442449e-9,-231396e-9,1.14146,.727498,-885074e-11,.441528,145832e-10,.730897,-223525e-9,.443589,368298e-9,.730796,-893996e-9,.443528,.00147303,.730805,-.00201149,.443533,.00331433,.730814,-.00357596,.443538,.00589222,.730815,-.00558734,.443538,.00920678,.730822,-.00804544,.44354,.0132582,.730836,-.0109501,.443545,.0180468,.730848,-.0143008,.443546,.0235732,.730871,-.0180969,.443552,.0298382,.730915,-.022338,.443567,.0368438,.730982,-.0270225,.443591,.044591,.731076,-.0321491,.443627,.0530831,.731245,-.0377166,.443699,.0623243,.73144,-.0437216,.443777,.0723181,.7317,-.0501576,.443881,.0830691,.732034,-.0569942,.444014,.0945809,.732388,-.0638756,.444113,.106825,.732853,-.071203,.444247,.119859,.733473,-.0790076,.444442,.13369,.734195,-.0871937,.444645,.148304,.735069,-.095696,.444877,.163702,.736169,-.10426,.445133,.179861,.73747,-.112853,.44537,.196778,.738991,-.12199,.445651,.214496,.740865,-.131153,.445958,.232913,.743637,-.140245,.446548,.251977,.746797,-.149722,.447246,.271551,.751517,-.159341,.448656,.291774,.756156,-.169106,.449866,.312455,.761519,-.178436,.450919,.334552,.768295,-.186904,.451776,.358491,.776613,-.195117,.452832,.383446,.783966,-.202695,.45249,.408945,.793542,-.20985,.452587,.435364,.803192,-.216403,.451852,.462336,.813892,-.22251,.450708,.48987,.824968,-.227676,.4486,.517697,.835859,-.232443,.445156,.545975,.846825,-.235775,.440351,.574483,.858085,-.237897,.433641,.604246,.868825,-.238074,.425354,.634101,.879638,-.237661,.415383,.664201,.889966,-.236186,.404136,.693918,.899479,-.233599,.390917,.723481,.908769,-.229737,.376352,.75258,.917966,-.223836,.360372,.781764,.926304,-.217067,.342551,.811139,.934626,-.209309,.324238,.839585,.941841,-.20071,.304484,.867044,.94789,-.190602,.283607,.894579,.954196,-.179253,.262205,.921743,.958383,-.167646,.239847,.948026,.963119,-.155073,.218078,.973296,.966941,-.141426,.195899,.998135,.970836,-.126849,.174121,1.02021,.973301,-.112296,.153052,1.04085,.97448,-.0964965,.131733,1.05946,.977045,-.080489,.10997,1.07693,.980751,-.064844,.0881657,1.09254,.985475,-.0481938,.0657987,1.10697,.991089,-.0319185,.0435215,1.12004,.996122,-.0158088,.0214779,1.13173,1.00001,372455e-9,-200295e-9,1.14291,.708622,-907597e-11,.45304,141962e-10,.711162,-228911e-9,.454662,358052e-9,.709812,-914446e-9,.453797,.00143034,.709865,-.00205819,.453834,.00321935,.709864,-.00365894,.453833,.00572331,.709855,-.00571692,.453826,.00894278,.709862,-.00823201,.453828,.012878,.709875,-.011204,.453832,.0175295,.709896,-.0146323,.453839,.0228978,.709925,-.0185163,.453847,.0289839,.709974,-.0228551,.453866,.0357894,.710045,-.0276473,.453892,.0433161,.710133,-.032891,.453924,.0515665,.710292,-.0385851,.453992,.0605458,.710485,-.0447254,.45407,.0702574,.710769,-.0513051,.454192,.0807077,.711106,-.0582733,.454329,.091896,.711516,-.0652866,.45446,.103814,.712071,-.0728426,.454653,.116508,.712676,-.0808307,.45484,.129968,.713476,-.0892216,.455096,.144206,.714377,-.0979047,.455346,.159212,.715579,-.106531,.455647,.174973,.716977,-.115492,.455961,.191504,.71862,-.124821,.456315,.208835,.72084,-.134079,.4568,.226869,.723786,-.143427,.457521,.245582,.727464,-.153061,.458475,.264957,.732771,-.162768,.460239,.284948,.736515,-.172627,.460899,.30522,.743519,-.182487,.463225,.326717,.750041,-.191295,.464027,.350113,.758589,-.199746,.465227,.374782,.767703,-.207584,.465877,.400226,.777484,-.214973,.465996,.426442,.788792,-.221796,.466019,.453688,.800194,-.228038,.465083,.481246,.811234,-.233346,.462506,.509086,.822859,-.238073,.459257,.537338,.835082,-.241764,.454863,.566108,.846332,-.244241,.448163,.595126,.858355,-.244736,.439709,.625574,.87034,-.244278,.429837,.65617,.881027,-.24255,.418002,.686029,.891007,-.239912,.404325,.716039,.900874,-.236133,.389222,.745518,.911072,-.230672,.373269,.775026,.920359,-.22356,.355083,.804521,.928604,-.215591,.335533,.834045,.937175,-.206503,.315278,.861612,.942825,-.196684,.293653,.889131,.949805,-.185116,.271503,.916853,.955535,-.172703,.248821,.943541,.959843,-.159978,.225591,.970132,.964393,-.146375,.202719,.994709,.968008,-.131269,.179928,1.0186,.971013,-.11569,.158007,1.03928,.973334,-.1003,.13624,1.05887,.975775,-.0833352,.1138,1.07652,.979579,-.0668981,.0913141,1.09297,.984323,-.0500902,.0683051,1.10734,.990351,-.0332377,.0451771,1.12084,.995823,-.0161491,.0221705,1.13296,1.0001,234083e-9,-108712e-9,1.14441,.683895,-924677e-11,.46015,137429e-10,.68833,-233383e-9,.463134,346865e-9,.688368,-933547e-9,.463159,.00138748,.688367,-.00210049,.463159,.00312187,.688369,-.00373415,.463159,.00555004,.688377,-.00583449,.463163,.00867216,.688386,-.00840128,.463166,.0124884,.688398,-.0114343,.463169,.0169993,.688418,-.0149329,.463175,.0222054,.688453,-.0188964,.463188,.028108,.688515,-.0233239,.463214,.0347085,.68857,-.0282136,.463231,.0420091,.688679,-.033564,.463276,.0500132,.688854,-.0393733,.463356,.0587255,.689038,-.0456354,.46343,.0681476,.689321,-.0523433,.463553,.0782897,.689662,-.059412,.463693,.0891501,.690188,-.0665736,.4639,.100735,.690755,-.0743106,.464107,.113074,.691405,-.0824722,.464329,.126161,.692198,-.0910484,.464585,.140007,.693196,-.0998778,.464893,.154612,.69454,-.108651,.465285,.169984,.695921,-.117855,.465596,.186106,.697749,-.12734,.466056,.203034,.700375,-.136714,.466771,.220703,.703395,-.146386,.467579,.239062,.707904,-.156096,.469067,.258188,.711673,-.165904,.469851,.277759,.717489,-.175812,.471815,.297935,.724051,-.185931,.47389,.318916,.731965,-.195238,.47587,.341591,.741151,-.204021,.477523,.366062,.751416,-.212113,.478881,.391396,.761848,-.21979,.479226,.417599,.771886,-.2267,.478495,.444401,.783998,-.232991,.477622,.472084,.796523,-.238645,.475833,.500193,.808851,-.243396,.472568,.52865,.821191,-.247226,.467857,.557362,.834261,-.250102,.461871,.586768,.846762,-.251056,.453543,.617085,.859867,-.250604,.443494,.647659,.871948,-.248783,.431711,.678119,.882967,-.245855,.417911,.708399,.892826,-.242168,.401993,.738256,.90332,-.237062,.385371,.767999,.913633,-.22997,.366837,.798191,.922774,-.221687,.346372,.827756,.931371,-.212345,.325682,.856425,.938929,-.20206,.303665,.884299,.944821,-.190981,.280786,.912023,.951792,-.178065,.2573,.939669,.957712,-.164634,.233448,.96655,.961912,-.150863,.209504,.992366,.966382,-.13577,.18597,1.01633,.969588,-.119593,.162905,1.03843,.971777,-.103203,.14053,1.05841,.97433,-.0865888,.117909,1.07632,.978686,-.0690829,.0944101,1.09326,.983281,-.0516568,.0705671,1.10796,.989562,-.034558,.0468592,1.12182,.995465,-.0167808,.0229846,1.1342,.999991,373016e-9,-235606e-9,1.1459,.662251,-939016e-11,.468575,132714e-10,.666634,-237624e-9,.471675,335842e-9,.666411,-950385e-9,.471516,.00134321,.666399,-.00213833,.471509,.00302221,.666386,-.0038014,.471499,.00537283,.666405,-.00593958,.471511,.00839533,.666406,-.00855253,.471508,.0120898,.666428,-.0116401,.471519,.0164569,.666444,-.0152015,.471522,.0214971,.66649,-.0192362,.471543,.027212,.666537,-.0237428,.471558,.033603,.666617,-.0287198,.471591,.0406728,.666718,-.0341647,.471631,.0484238,.666889,-.0400759,.47171,.0568621,.667104,-.0464479,.471805,.0659915,.667374,-.0532677,.471923,.0758178,.667772,-.0603805,.472098,.0863425,.668371,-.0677392,.472363,.0975917,.668971,-.0756028,.472596,.109567,.669696,-.0839293,.472869,.122272,.670481,-.0926683,.473126,.135718,.6715,-.1016,.473442,.149914,.672911,-.110566,.47389,.164882,.674512,-.119984,.474354,.180602,.67651,-.129574,.474922,.19711,.679292,-.139106,.475764,.214371,.682798,-.148993,.476886,.232405,.686955,-.158737,.478179,.251153,.691406,-.168754,.479432,.270436,.697438,-.178703,.481481,.290374,.704761,-.188955,.484143,.311044,.713599,-.198814,.487007,.333003,.723194,-.207869,.488962,.357144,.732601,-.216189,.489815,.382169,.744193,-.22398,.490888,.408227,.754907,-.231156,.490355,.434928,.767403,-.23747,.489548,.462599,.78107,-.243503,.488274,.490908,.793893,-.248114,.484843,.519421,.807296,-.25222,.4803,.548561,.820529,-.255265,.474097,.577772,.833716,-.256741,.466041,.607782,.848403,-.25637,.456547,.638807,.860755,-.254804,.443946,.670058,.874012,-.251834,.430852,.700749,.885619,-.247867,.414903,.731446,.896069,-.242634,.397276,.761191,.906266,-.236093,.378535,.791053,.916759,-.227543,.358038,.821298,.92523,-.21783,.335705,.850747,.93436,-.207534,.313797,.879258,.941631,-.195983,.289671,.907734,.947564,-.183567,.265319,.935206,.953681,-.169345,.240815,.962739,.960008,-.154909,.216119,.989227,.964145,-.140161,.192096,1.01465,.968171,-.123411,.167855,1.03737,.969859,-.106525,.144817,1.05767,.972666,-.0891023,.12149,1.0761,.977055,-.0718094,.0975306,1.09336,.982527,-.0534213,.0730217,1.10878,.989001,-.0355579,.0483366,1.12285,.99512,-.0176383,.023938,1.13548,1.00007,368831e-9,-211581e-9,1.14744,.651047,-960845e-11,.484101,12922e-9,.644145,-241347e-9,.478968,324578e-9,.64396,-965142e-9,.478831,.00129798,.64396,-.00217154,.47883,.00292046,.643968,-.00386049,.478835,.00519202,.643974,-.00603186,.478838,.0081128,.643977,-.0086854,.478836,.011683,.643982,-.0118207,.478834,.0159031,.644024,-.0154374,.478856,.0207743,.644059,-.0195343,.478868,.0262975,.644122,-.0241103,.478896,.0324747,.644207,-.0291638,.478933,.039309,.64432,-.0346919,.478981,.0468029,.644481,-.0406919,.479053,.0549614,.644722,-.047159,.479169,.0637909,.645013,-.0540748,.479302,.0732974,.645503,-.0612001,.479541,.0834898,.646117,-.0687303,.479829,.0943873,.646707,-.0767846,.480061,.105991,.647431,-.0852465,.480343,.11831,.64831,-.0940719,.48066,.131348,.649486,-.103056,.481083,.14514,.650864,-.112261,.481528,.159676,.652604,-.121852,.482102,.174979,.654825,-.131505,.482813,.191079,.657876,-.141189,.483876,.207927,.661339,-.151239,.48499,.225586,.665463,-.161091,.486279,.243947,.670542,-.171235,.487968,.262957,.677361,-.181347,.49053,.282781,.685672,-.191679,.493862,.303311,.694551,-.201781,.49699,.324607,.703753,-.211164,.498884,.347916,.713703,-.219675,.500086,.372628,.725911,-.227836,.501554,.398694,.73862,-.23533,.502193,.425529,.752118,-.241786,.501811,.453209,.76579,-.247865,.500185,.481381,.779568,-.252696,.497159,.51011,.793991,-.256802,.492765,.539322,.808182,-.259942,.486827,.569078,.821698,-.261703,.478386,.598818,.836009,-.262006,.468772,.629762,.849824,-.260333,.456352,.661366,.863888,-.257398,.442533,.69295,.876585,-.253264,.426573,.723608,.888665,-.248026,.408964,.754378,.899537,-.241487,.389677,.784761,.9094,-.233463,.368516,.814688,.920166,-.223397,.346624,.845009,.928899,-.21255,.322717,.874431,.937156,-.200869,.298698,.902922,.943861,-.188387,.273491,.931356,.949557,-.174341,.247866,.958854,.955862,-.158994,.222496,.986098,.961721,-.143664,.197522,1.01229,.965976,-.127412,.17302,1.03571,.968652,-.109798,.148954,1.05699,.971084,-.0916787,.125044,1.07587,.975584,-.0739634,.100577,1.09372,.98122,-.055322,.0753666,1.10948,.988253,-.0366825,.0498899,1.12394,.99482,-.0180389,.024611,1.13694,1.00001,229839e-9,-188283e-9,1.14919,.613867,-964198e-11,.479449,123452e-10,.621485,-244534e-9,.485399,313091e-9,.621429,-978202e-9,.485353,.00125245,.62112,-.00220004,.485114,.00281687,.621119,-.0039111,.485112,.00500783,.621122,-.00611091,.485112,.00782498,.621133,-.00879922,.485117,.0112687,.621152,-.0119756,.485125,.0153394,.621183,-.0156396,.485139,.0200382,.621227,-.0197898,.485158,.0253663,.621298,-.0244253,.485192,.0313261,.621388,-.0295441,.485233,.0379204,.621507,-.0351432,.485286,.0451523,.621693,-.0412198,.485378,.0530277,.621933,-.0477673,.485495,.0615522,.622232,-.0547574,.485635,.0707316,.622809,-.0619417,.485943,.0805883,.623407,-.069625,.486232,.0911267,.62406,-.077796,.486516,.102354,.624835,-.0863731,.486838,.114279,.625758,-.095251,.487188,.126902,.627043,-.104299,.487695,.140285,.628438,-.113724,.488163,.154397,.630325,-.123417,.488858,.169267,.632801,-.133137,.489754,.184941,.635784,-.143052,.490815,.20136,.639406,-.153132,.492048,.218643,.643872,-.163143,.49363,.236615,.6499,-.17333,.496009,.255449,.657201,-.183622,.498994,.275006,.666221,-.194019,.502888,.295354,.674419,-.204192,.505459,.316244,.683729,-.21406,.507771,.33849,.695584,-.222854,.510245,.363166,.708583,-.231315,.512293,.389071,.721233,-.238911,.512747,.415737,.735134,-.245657,.512482,.443331,.750179,-.251879,.511526,.471891,.765073,-.256911,.508935,.500892,.779794,-.261144,.504341,.530294,.794801,-.264316,.498515,.560144,.810339,-.266276,.491015,.590213,.824818,-.266981,.481126,.620865,.839375,-.265778,.468685,.652687,.853043,-.262748,.453925,.684759,.867335,-.258474,.437912,.716209,.88037,-.253187,.419648,.747508,.891711,-.246476,.39982,.77797,.902896,-.238735,.37879,.808586,.913601,-.22885,.355891,.838843,.923019,-.217656,.331773,.869014,.933432,-.205539,.307356,.898512,.939691,-.192595,.281321,.9269,.946938,-.178945,.255441,.955297,.952372,-.163587,.229013,.983231,.95909,-.147214,.203179,1.00971,.963675,-.13064,.17792,1.03438,.968247,-.113121,.152898,1.05625,.97001,-.0945824,.128712,1.07598,.974458,-.0755648,.103349,1.094,.980168,-.0571998,.0776731,1.1104,.987295,-.0377994,.0514445,1.12491,.994432,-.0186417,.025429,1.13851,.999975,542714e-9,-282356e-9,1.15108,.592656,-980249e-11,.486018,119532e-10,.598467,-247275e-9,.490781,301531e-9,.597934,-988317e-9,.490343,.00120517,.597903,-.00222366,.490319,.0027116,.597913,-.00395315,.490327,.00482077,.597919,-.00617653,.490329,.00753264,.597936,-.00889375,.490339,.0108478,.597956,-.0121043,.490347,.0147668,.597992,-.0158073,.490365,.0192905,.598032,-.0200017,.490382,.0244204,.598109,-.0246865,.49042,.0301593,.598215,-.0298594,.490474,.03651,.59833,-.0355167,.490524,.0434757,.598525,-.0416559,.490624,.0510629,.598778,-.0482692,.490753,.0592781,.599135,-.0553114,.49094,.0681304,.599802,-.062542,.491328,.0776467,.600361,-.0703638,.491598,.0878184,.60101,-.0786256,.491882,.0986573,.601811,-.0872962,.492232,.11018,.602861,-.0962284,.492684,.1224,.604167,-.10538,.493213,.135354,.605693,-.114896,.493799,.149034,.607682,-.124654,.494576,.163469,.610672,-.13456,.4959,.178747,.613313,-.144581,.496713,.194723,.617603,-.154703,.498499,.211617,.622174,-.16489,.500188,.229183,.628855,-.175164,.503072,.247786,.636963,-.185565,.506798,.267116,.644866,-.195911,.509719,.28702,.653741,-.206104,.512776,.307763,.664942,-.216447,.516812,.329631,.67633,-.22552,.519181,.353515,.690012,-.234316,.521681,.379226,.704243,-.242032,.523129,.405901,.719396,-.249172,.523768,.433585,.734471,-.255543,.522541,.462085,.750539,-.260697,.520217,.491233,.766365,-.26501,.516293,.521094,.781677,-.268409,.509708,.551014,.797132,-.270399,.501944,.581463,.812655,-.271247,.492025,.612402,.828592,-.270708,.480424,.643798,.844044,-.268085,.465955,.67682,.857305,-.263459,.448425,.708496,.87114,-.258151,.430243,.74046,.884936,-.251171,.410578,.771583,.895772,-.243305,.38862,.802234,.906961,-.234037,.365214,.833179,.917775,-.222714,.34116,.86353,.927883,-.210175,.31572,.893557,.936617,-.196925,.289159,.922976,.943384,-.182788,.261996,.951606,.949713,-.167965,.235324,.979958,.955818,-.151109,.208408,1.00765,.961344,-.133834,.182591,1.03329,.965469,-.115987,.156958,1.0557,.968693,-.09746,.132239,1.07583,.973165,-.0778514,.106195,1.09451,.979387,-.0585067,.0797669,1.11137,.98671,-.0390409,.0530263,1.12643,.994093,-.019408,.0263163,1.14016,1.00002,540029e-9,-194487e-9,1.15299,.574483,-989066e-11,.494533,114896e-10,.574478,-249127e-9,.494528,289403e-9,.574607,-996811e-9,.494637,.00115797,.574396,-.00224241,.494458,.00260498,.574377,-.00398632,.49444,.00463102,.574386,-.00622836,.494445,.00723623,.574401,-.0089683,.494453,.010421,.574419,-.0122056,.49446,.0141859,.574459,-.0159396,.494481,.0185322,.574525,-.0201692,.49452,.0234617,.574587,-.0248924,.494547,.0289762,.574697,-.0301074,.494604,.0350797,.574853,-.0358114,.494688,.0417767,.575027,-.041999,.494772,.0490718,.575294,-.0486618,.494915,.0569728,.575733,-.0557148,.495173,.0654955,.576356,-.0630489,.495537,.0746612,.576944,-.0709285,.495836,.0844615,.57765,-.0792723,.496177,.0949142,.578491,-.0880167,.496563,.10603,.579639,-.0969462,.497096,.117841,.580989,-.10622,.497684,.130367,.582587,-.115861,.498337,.143609,.584951,-.125605,.499414,.157625,.587602,-.135608,.500518,.172413,.59076,-.145742,.501767,.187999,.594992,-.155934,.503542,.20445,.600656,-.166303,.506135,.221764,.607816,-.176681,.509542,.24002,.61522,-.187071,.51263,.258992,.623702,-.197465,.516021,.278773,.634192,-.207816,.520422,.299377,.644936,-.218183,.524073,.320802,.657888,-.2278,.528049,.34384,.670666,-.236747,.52986,.36916,.685626,-.24484,.531892,.395867,.701304,-.252071,.532727,.423488,.717727,-.258714,.532146,.452201,.733914,-.264211,.529883,.481579,.750529,-.26859,.5259,.511558,.76747,-.272046,.51999,.542042,.785189,-.274225,.513083,.572799,.800954,-.275189,.502936,.603816,.816962,-.274946,.490921,.635461,.83336,-.272695,.47684,.6676,.848143,-.268223,.459405,.70051,.861818,-.262768,.440319,.732902,.876828,-.255872,.420123,.765084,.889312,-.247703,.398379,.796391,.900412,-.238381,.374496,.827333,.912251,-.227783,.349874,.858385,.921792,-.214832,.323181,.888652,.931273,-.200949,.296624,.917763,.940295,-.186537,.269211,.947878,.946812,-.171538,.241447,.977016,.953588,-.155254,.213829,1.00501,.958841,-.137156,.186807,1.03179,.963746,-.118699,.160706,1.05502,.966468,-.0998358,.135504,1.07568,.971178,-.0805186,.109131,1.09479,.97831,-.0599348,.0818293,1.1123,.985886,-.0399661,.0545872,1.12771,.994021,-.0198682,.0269405,1.14186,1.00009,271022e-9,-12989e-8,1.15514,.538716,-990918e-11,.486732,109675e-10,.550656,-250642e-9,.497518,277412e-9,.55057,-.00100265,.497441,.00110974,.550903,-.00225672,.497733,.00249779,.550568,-.00401046,.497438,.00443906,.550574,-.00626613,.49744,.00693637,.550591,-.0090226,.497449,.00998921,.550623,-.0122795,.497469,.0135984,.550667,-.0160361,.497495,.0177654,.550724,-.0202908,.497526,.0224915,.550792,-.0250421,.497557,.0277795,.550918,-.0302878,.49763,.0336334,.551058,-.0360241,.497701,.0400573,.551276,-.0422473,.497824,.0470585,.551551,-.0489441,.497977,.0546433,.552074,-.0559596,.498312,.0628367,.552681,-.0633978,.498679,.071646,.553324,-.0713176,.499031,.0810746,.554011,-.0797268,.499365,.091129,.55488,-.0885238,.499779,.101837,.556171,-.0974417,.500444,.113239,.557498,-.106841,.501025,.125316,.559299,-.116533,.501864,.138128,.561647,-.126298,.502967,.151695,.564347,-.136388,.504129,.16604,.567863,-.146576,.505713,.181207,.572569,-.156832,.507953,.197259,.578919,-.167323,.511186,.214258,.585387,-.177712,.514042,.232038,.593134,-.188184,.517484,.250733,.603295,-.198717,.522345,.270454,.613854,-.209177,.526751,.290807,.626092,-.219644,.531595,.312202,.637868,-.229494,.534721,.334435,.652458,-.238718,.538304,.359184,.666985,-.247061,.539875,.385637,.683301,-.254652,.541042,.41328,.69998,-.261376,.540735,.441903,.717824,-.267085,.539139,.471609,.734617,-.271465,.534958,.501446,.753663,-.27528,.53032,.532571,.770512,-.277617,.522134,.563641,.787356,-.278525,.51206,.595067,.806252,-.278512,.50119,.627226,.822061,-.277023,.486791,.659402,.838959,-.273175,.470467,.692874,.85379,-.267238,.450688,.725702,.868268,-.260327,.429741,.75832,.881994,-.251946,.407223,.790189,.893885,-.242432,.383214,.821625,.905118,-.231904,.357297,.853011,.916045,-.219545,.330733,.883773,.927614,-.205378,.303916,.914435,.936005,-.190388,.275941,.944502,.944533,-.1749,.247493,.974439,.950758,-.158588,.218996,1.00286,.957078,-.141027,.191559,1.0304,.962448,-.121507,.164457,1.05466,.964993,-.102068,.138636,1.0761,.970017,-.0822598,.111861,1.09541,.97661,-.062033,.0843438,1.11317,.985073,-.0409832,.0558496,1.12911,.993515,-.020146,.0275331,1.1438,1.00006,27329e-8,-107883e-9,1.15736,.525324,-999341e-11,.498153,105385e-10,.526513,-251605e-9,.499277,265329e-9,.526517,-.00100641,.499282,.0010613,.526588,-.00226466,.499337,.00238823,.526539,-.0040255,.499302,.00424535,.526547,-.00628954,.499306,.00663364,.526561,-.00905628,.499313,.00955337,.526593,-.0123253,.499334,.0130054,.526642,-.0160957,.499365,.0169911,.5267,-.0203661,.499396,.0215122,.526792,-.0251347,.499451,.0265718,.526904,-.0303985,.499511,.0321732,.527079,-.0361554,.499617,.0383231,.527285,-.0423982,.499731,.045026,.527602,-.0491121,.499924,.0522936,.528166,-.0561127,.500306,.0601528,.52879,-.0635988,.5007,.0686059,.529421,-.071581,.501048,.0776518,.530144,-.0799854,.501421,.0873148,.531062,-.0888032,.501884,.0976084,.532374,-.0977643,.50259,.108588,.533828,-.107197,.50329,.120234,.53581,-.116887,.504312,.132602,.538063,-.126755,.505365,.145721,.5409,-.136819,.506668,.159617,.544882,-.147117,.508731,.174369,.550238,-.157446,.511601,.190028,.556038,-.167988,.514431,.206587,.563031,-.178364,.517808,.224046,.571543,-.189007,.521937,.242503,.582255,-.199546,.527415,.261977,.59272,-.210084,.531682,.282162,.605648,-.220448,.537123,.303426,.61785,-.230593,.540664,.325323,.632223,-.240238,.544467,.348993,.648819,-.24887,.547594,.375462,.665825,-.256657,.54912,.403024,.683389,-.263711,.549294,.431773,.701495,-.269666,.547649,.461494,.719197,-.274169,.543786,.491623,.737906,-.278124,.538644,.522994,.756652,-.280632,.531057,.554775,.775279,-.281741,.521972,.586441,.792688,-.281652,.509613,.618596,.811894,-.280345,.496497,.651462,.827938,-.277128,.47968,.684023,.844837,-.271646,.460688,.718024,.859239,-.264397,.438872,.751207,.874088,-.256144,.41577,.784232,.887693,-.246311,.391369,.816191,.899402,-.235497,.365872,.847828,.910973,-.223631,.338618,.87934,.92204,-.209874,.310803,.910325,.930987,-.194265,.281802,.940695,.94,-.178125,.252836,.970958,.948018,-.161479,.224239,1.00078,.955141,-.144038,.195857,1.0288,.960513,-.124915,.168487,1.05371,.963964,-.104284,.141495,1.07596,.968713,-.0838732,.114437,1.09628,.975524,-.0635579,.0863105,1.11448,.98431,-.042291,.0574774,1.13069,.992916,-.0209131,.0284343,1.14568,.999926,743097e-9,-379265e-9,1.15955,.501042,-998428e-11,.498726,100306e-10,.502992,-252112e-9,.500665,253283e-9,.502417,-.00100791,.500092,.00101259,.502965,-.00226919,.500621,.00227978,.502318,-.00403109,.499994,.00405011,.502333,-.00629832,.500005,.00632868,.502362,-.00906907,.500027,.00911446,.502369,-.0123423,.500023,.0124078,.50243,-.0161178,.500066,.016211,.502493,-.0203937,.500103,.0205256,.502592,-.0251684,.500166,.0253548,.502707,-.0304389,.50023,.0307029,.502881,-.0362015,.500335,.0365753,.503124,-.0424507,.500488,.0429798,.503443,-.0491582,.500686,.0499268,.504083,-.0561476,.501155,.0574541,.504668,-.0636846,.501524,.0655408,.505319,-.0716834,.501904,.0742072,.50609,-.0800925,.502321,.0834699,.507122,-.0888425,.502896,.0933603,.508414,-.097855,.503603,.10391,.509955,-.107304,.504416,.115113,.512061,-.116921,.505565,.127054,.514419,-.12689,.506732,.139709,.517529,-.136934,.508338,.153173,.522085,-.147327,.510987,.167528,.526986,-.157612,.513527,.182708,.533122,-.168213,.516717,.198881,.540807,-.178688,.520832,.215986,.550687,-.189511,.52632,.234335,.560567,-.199998,.531009,.253375,.571698,-.210652,.535839,.273499,.584364,-.220917,.541091,.294355,.599066,-.23137,.546875,.316525,.614148,-.241206,.551306,.339671,.631157,-.250379,.555187,.36531,.647919,-.258397,.556595,.392767,.666112,-.265528,.556949,.421397,.686158,-.271827,.556617,.451433,.704838,-.27674,.552975,.482131,.723957,-.280733,.547814,.513458,.74262,-.283359,.53997,.545446,.762009,-.284541,.530422,.57775,.781314,-.284507,.518546,.610434,.799116,-.283309,.504178,.643178,.817604,-.280378,.48843,.676248,.83459,-.275619,.469457,.709698,.850974,-.26856,.447698,.744245,.866747,-.260094,.424791,.777695,.881412,-.249929,.399913,.810392,.8936,-.239137,.37308,.842872,.905943,-.226818,.345705,.874677,.916408,-.213699,.31706,.906257,.927215,-.198428,.288444,.936881,.935625,-.181643,.258329,.96795,.944076,-.164386,.228488,.998216,.951229,-.146339,.199763,1.02689,.958793,-.127709,.172153,1.0535,.963219,-.107244,.144989,1.07646,.967562,-.0857764,.11685,1.09675,.974866,-.0645377,.0880571,1.11576,.983353,-.0431732,.0587352,1.13227,.992503,-.0218356,.0294181,1.1478,1.00003,605203e-9,-231013e-9,1.16207,.482935,-101177e-10,.504695,968142e-11,.477554,-251521e-9,.499071,240676e-9,.477904,-.00100683,.499436,96342e-8,.478368,-.00226636,.499899,.0021687,.477977,-.00402719,.499513,.00385384,.477993,-.00629226,.499525,.0060221,.478011,-.00906011,.499536,.00867289,.478051,-.0123305,.499566,.0118074,.478089,-.016102,.499587,.0154269,.478171,-.0203736,.499645,.0195341,.478254,-.025143,.499692,.0241318,.47839,-.0304071,.499779,.0292247,.478588,-.0361631,.499911,.0348196,.478812,-.0424023,.500046,.0409231,.479208,-.0490724,.500326,.047552,.479841,-.0560722,.500805,.0547377,.480392,-.0636125,.501152,.0624607,.481068,-.0716134,.501561,.0707473,.481898,-.0800062,.502054,.0796118,.483022,-.0886568,.502728,.0890974,.484332,-.0977553,.503479,.0992099,.486126,-.107173,.504546,.10999,.488066,-.11677,.50557,.121476,.490521,-.126725,.506849,.133672,.494232,-.136793,.50911,.146731,.498302,-.147116,.511345,.160577,.503565,-.157446,.514344,.175335,.510902,-.168121,.518824,.191207,.519263,-.178799,.523666,.208058,.528204,-.189407,.528296,.225875,.538854,-.200145,.533724,.244782,.551278,-.210701,.539833,.264753,.565222,-.221303,.546131,.285745,.579403,-.231688,.551496,.307592,.595469,-.241718,.556809,.330582,.610929,-.250992,.559641,.354995,.629433,-.259602,.562379,.382471,.648504,-.267038,.563676,.411126,.66756,-.273388,.562092,.440924,.689143,-.278788,.560807,.472118,.709056,-.282783,.555701,.503774,.729855,-.285836,.548698,.536364,.748954,-.287078,.538544,.56895,.768373,-.287133,.526711,.601991,.78827,-.285839,.512511,.635403,.807465,-.283238,.496323,.668797,.825194,-.27906,.477638,.702584,.842203,-.272286,.456253,.736393,.857749,-.263854,.432412,.77096,.874799,-.253943,.407806,.80489,.887497,-.24237,.38033,.83771,.89966,-.230278,.352446,.870376,.911753,-.21646,.323268,.902256,.923011,-.202071,.294314,.933306,.932375,-.185519,.264104,.965177,.940537,-.167604,.234035,.996303,.948904,-.149068,.20412,1.0261,.955263,-.129539,.175431,1.05304,.960303,-.109932,.148116,1.07617,.965512,-.0880572,.119693,1.09742,.973466,-.0660548,.0901619,1.11721,.98284,-.0439228,.0599875,1.13436,.992216,-.0219588,.0298975,1.15006,.999946,119402e-9,-208547e-10,1.16471,.447827,-100414e-10,.491543,914833e-11,.454778,-251257e-9,.499172,22891e-8,.453519,-.00100342,.497787,914184e-9,.45357,-.00225776,.497847,.00205701,.453578,-.00401371,.497855,.00365705,.45357,-.00627107,.497841,.00571453,.453598,-.00902968,.497864,.00823019,.453627,-.0122888,.497882,.0112049,.453684,-.0160475,.497923,.0146405,.453764,-.0203044,.49798,.0185394,.453866,-.0250576,.498049,.0229054,.453996,-.0303028,.49813,.0277424,.454196,-.0360379,.498267,.0330587,.454457,-.0422521,.498445,.0388613,.454926,-.0488393,.498812,.0451767,.455525,-.0558653,.499272,.0520153,.456074,-.0633772,.499625,.0593754,.456752,-.0713606,.500049,.0672751,.457648,-.07971,.500615,.0757447,.458849,-.0883032,.501399,.0848231,.46029,-.0974095,.502293,.0945135,.462,-.106729,.503301,.104848,.464121,-.116354,.504533,.115884,.466889,-.126214,.506172,.127652,.470744,-.136324,.508667,.14024,.47488,-.146595,.510995,.153673,.480845,-.157027,.514832,.168053,.488262,-.167658,.519506,.183508,.496547,-.178343,.524347,.199948,.506254,-.188916,.52983,.217503,.517961,-.199975,.536357,.236272,.531484,-.210624,.543641,.256096,.545496,-.221227,.550048,.277085,.559497,-.231568,.555076,.298615,.575752,-.241698,.560541,.321547,.591999,-.251172,.564156,.345602,.610654,-.260178,.567607,.371851,.630484,-.268094,.56923,.40076,.651807,-.274661,.569779,.430801,.67239,-.280331,.566791,.461939,.693024,-.284501,.562007,.493854,.715473,-.287852,.555791,.526992,.736323,-.28929,.546345,.560102,.755771,-.289405,.534,.593543,.775424,-.2881,.519114,.627256,.795447,-.285562,.502543,.661464,.815319,-.281416,.484773,.695206,.831769,-.275523,.463445,.729044,.849464,-.267516,.440269,.764069,.866775,-.257584,.415049,.799089,.881252,-.245817,.388049,.831948,.894209,-.233127,.35889,.865526,.906922,-.219579,.329915,.89818,.919686,-.204491,.300441,.930013,.929044,-.188962,.269445,.962061,.938393,-.171079,.238402,.994214,.94661,-.15199,.208204,1.02533,.953095,-.131953,.178653,1.0529,.958644,-.111233,.150684,1.0771,.963925,-.0903098,.122359,1.09855,.971995,-.0680505,.0923342,1.11874,.981658,-.0448512,.0614195,1.13635,.991649,-.0221931,.0303582,1.15238,.999985,393403e-9,-111086e-9,1.16772,.396806,-971563e-11,.457671,842355e-11,.429186,-249421e-9,.495017,21625e-8,.429324,-998052e-9,.495173,865322e-9,.429175,-.00224487,.494999,.00194637,.429129,-.00399041,.494952,.00346004,.429153,-.00623476,.494974,.00540684,.429168,-.0089773,.494983,.00778714,.429207,-.0122175,.495012,.0106022,.429257,-.0159542,.495047,.0138535,.429338,-.0201864,.495106,.0175443,.429431,-.0249104,.495165,.0216774,.429587,-.0301252,.495279,.0262594,.429796,-.0358249,.495432,.0312968,.430065,-.0419972,.495621,.0367985,.430588,-.0485144,.496061,.042798,.43113,-.0555028,.496472,.0492914,.431743,-.0629852,.496904,.0562907,.432448,-.0709256,.497369,.0638056,.433414,-.0791942,.498032,.071885,.434638,-.0877346,.498854,.0805517,.43611,-.0968056,.499812,.0898047,.437859,-.106002,.500891,.0997142,.440017,-.115648,.502198,.110289,.443236,-.125427,.504389,.121644,.44697,-.135492,.506809,.133769,.451689,-.145746,.509858,.146787,.45811,-.156219,.514247,.160793,.465305,-.166834,.518816,.175791,.474085,-.177546,.524331,.191906,.484808,-.188262,.53104,.209199,.49732,-.199346,.538511,.227825,.509693,-.209951,.544554,.247269,.524367,-.220533,.551616,.267978,.539228,-.231082,.557368,.289672,.55644,-.241342,.563782,.31268,.574204,-.250964,.568851,.33651,.593388,-.260306,.57312,.362219,.613358,-.268667,.574916,.390322,.634512,-.275591,.575053,.420478,.65563,-.281328,.572404,.451614,.678265,-.285948,.568893,.484112,.70011,-.289408,.561878,.517348,.723005,-.291328,.55359,.551355,.743744,-.291418,.541099,.585109,.763949,-.290252,.526489,.619487,.784186,-.287648,.509496,.65404,.804304,-.283782,.491484,.688649,.823629,-.278067,.470517,.723133,.84094,-.270588,.44705,.757163,.857852,-.261188,.421252,.792816,.874934,-.249313,.394191,.827248,.888709,-.236492,.365359,.861074,.902589,-.222185,.336016,.894417,.914201,-.207314,.30527,.926825,.925978,-.191146,.274532,.9595,.93512,-.174135,.243393,.991583,.943656,-.155231,.212414,1.02356,.951719,-.134403,.182005,1.05239,.957164,-.113023,.153043,1.07754,.962656,-.0914493,.124186,1.09984,.970695,-.0694179,.0941654,1.12,.980749,-.0466199,.0629671,1.13849,.991205,-.0227032,.0311146,1.15494,.999884,632388e-9,-254483e-9,1.1706,.379821,-957289e-11,.460637,789337e-11,.405188,-247483e-9,.491396,204064e-9,.404796,-989434e-9,.490914,815853e-9,.40483,-.00222607,.490949,.00183559,.40473,-.00395723,.49084,.00326332,.404731,-.00618287,.490836,.00509945,.404768,-.00890258,.490871,.00734463,.404791,-.0121156,.490883,.00999992,.404857,-.0158214,.490938,.0130676,.404943,-.0200178,.491004,.0165503,.405059,-.0247027,.491093,.0204521,.405213,-.0298729,.491205,.0247788,.405399,-.0355226,.491333,.0295373,.405731,-.0416352,.491604,.034741,.406303,-.0480807,.492116,.0404255,.406814,-.0550458,.492506,.0465732,.407404,-.0624652,.492926,.0532058,.408149,-.0702958,.493442,.0603442,.409128,-.0784623,.494136,.0680297,.410408,-.087007,.495054,.0762786,.411813,-.0959639,.495962,.0851046,.413735,-.105075,.497257,.0945878,.416137,-.114646,.498882,.104725,.41934,-.124394,.501132,.11563,.423326,-.134328,.503883,.127325,.428419,-.14458,.50747,.139911,.43484,-.154979,.511964,.153481,.442641,-.165628,.517328,.168114,.452511,-.176365,.524258,.183995,.463473,-.187298,.531248,.200953,.475564,-.198244,.538367,.219176,.488664,-.208938,.545175,.238514,.504073,-.219599,.553227,.259129,.520832,-.230378,.560653,.280997,.538455,-.240703,.567523,.303821,.55709,-.250548,.573287,.327948,.576646,-.259964,.577795,.353362,.596705,-.268721,.580077,.380336,.618053,-.276054,.58018,.4101,.640303,-.282176,.578747,.44161,.662365,-.286931,.574294,.474106,.684542,-.290521,.567035,.507549,.707984,-.292672,.558687,.541853,.730913,-.293189,.547606,.576581,.752948,-.292199,.533471,.61172,.773452,-.289508,.516395,.646339,.794715,-.285716,.497873,.682131,.814251,-.280051,.476845,.716396,.833057,-.272873,.453449,.751503,.84959,-.263982,.427857,.786085,.867022,-.252745,.400335,.821355,.882277,-.239655,.371304,.85646,.895375,-.225386,.340397,.890828,.909347,-.209587,.310005,.923532,.921885,-.193433,.2796,.956419,.932127,-.176135,.247276,.989445,.941869,-.157872,.216186,1.02221,.949735,-.137577,.185602,1.05195,.956617,-.115285,.155767,1.07822,.961974,-.0928418,.126103,1.10149,.96972,-.0700592,.0956758,1.12207,.98012,-.0474671,.0643269,1.1408,.990825,-.0238113,.0320863,1.1577,.999876,381574e-9,-812203e-10,1.17403,.367636,-961342e-11,.469176,753287e-11,.380377,-244772e-9,.485434,191797e-9,.380416,-978857e-9,.485475,767015e-9,.380376,-.00220165,.485435,.00172522,.380419,-.00391408,.485487,.00306734,.380438,-.00611549,.485505,.00479332,.380462,-.00880558,.485525,.00690391,.380496,-.0119837,.485551,.00940039,.38056,-.0156487,.485605,.0122848,.38064,-.0197988,.485666,.0155601,.380767,-.0244324,.48577,.0192313,.380909,-.0295444,.485871,.0233032,.381142,-.0351321,.48606,.0277861,.381472,-.0411535,.486336,.0326939,.382015,-.0475408,.486833,.0380565,.382523,-.0544395,.487231,.0438615,.383129,-.061784,.487683,.0501332,.383952,-.0695085,.488313,.0568996,.38498,-.0775819,.489077,.0641952,.386331,-.0860443,.490113,.0720324,.387788,-.0948406,.491099,.0804379,.389808,-.103899,.492566,.0894899,.39252,-.113313,.494601,.0992098,.395493,-.123007,.496619,.109641,.399826,-.132859,.499912,.120919,.405341,-.143077,.504061,.133107,.411932,-.153465,.508905,.146263,.420591,-.164108,.515482,.160544,.43101,-.174893,.523191,.176123,.441881,-.185839,.53026,.192757,.453919,-.196633,.537295,.210535,.468715,-.207611,.546156,.229886,.485182,-.218517,.555173,.250543,.501926,-.229249,.562728,.27221,.51785,-.239481,.567494,.294892,.536947,-.249395,.573889,.318987,.557115,-.259,.578831,.344348,.577966,-.268075,.582055,.371223,.599489,-.276115,.583307,.399834,.62479,-.282523,.583902,.431415,.647504,-.287663,.57953,.464301,.670601,-.291538,.573103,.498123,.693539,-.293842,.563731,.532662,.717385,-.294681,.553169,.567925,.741533,-.293717,.539908,.603502,.762142,-.291156,.521902,.639074,.783014,-.28719,.502815,.674439,.805158,-.281773,.482598,.710497,.823646,-.274682,.458949,.7456,.841879,-.266184,.433129,.781085,.859515,-.255682,.406064,.816,.875335,-.242849,.376509,.851074,.890147,-.228329,.345502,.886473,.903144,-.212491,.31428,.920751,.916618,-.195695,.282994,.954606,.927953,-.178267,.251091,.988402,.937414,-.159549,.219107,1.02141,.946823,-.140022,.18896,1.05167,.954651,-.118154,.158667,1.07819,.959955,-.0946636,.128808,1.1025,.96858,-.0711792,.0973787,1.12391,.97938,-.0475046,.0650965,1.14322,.990498,-.024059,.0326267,1.16077,.999844,-512408e-10,112444e-9,1.17727,.316912,-934977e-11,.425996,695559e-11,.356423,-241372e-9,.479108,179562e-9,.356272,-965292e-9,.478897,71811e-8,.356262,-.00217182,.478894,.00161574,.356265,-.00386092,.478895,.00287261,.356278,-.0060324,.478905,.00448907,.356293,-.00868565,.478914,.00646572,.356346,-.0118207,.478965,.00880438,.356395,-.0154355,.479001,.0115066,.356484,-.019529,.479075,.0145762,.356609,-.0240991,.47918,.018018,.356766,-.0291413,.479305,.0218379,.357009,-.0346498,.479512,.0260454,.357424,-.0405462,.479909,.0306657,.357899,-.0468825,.480337,.0357054,.358424,-.0536887,.480771,.0411728,.359041,-.0609416,.481242,.0470841,.359903,-.0685239,.481943,.0534831,.360932,-.0764883,.482741,.0603795,.362196,-.0848364,.483688,.0678028,.363847,-.0935002,.484947,.0758086,.365972,-.102471,.486588,.0844173,.368741,-.111751,.488787,.0937199,.372146,-.121334,.491405,.103732,.377114,-.131147,.495604,.114608,.38226,-.141213,.499436,.126345,.389609,-.151632,.505334,.139116,.397925,-.162073,.51168,.152995,.407824,-.172819,.518876,.168071,.420014,-.183929,.527639,.184495,.434266,-.195032,.537588,.20232,.447352,-.205792,.544379,.221189,.463726,-.216704,.553422,.241616,.481406,-.227531,.562074,.263298,.498707,-.238017,.568227,.286116,.518039,-.247936,.574473,.3101,.538277,-.257437,.579191,.335401,.561166,-.266829,.584807,.362246,.583189,-.275329,.586476,.390609,.606024,-.28234,.585578,.420998,.632419,-.287924,.584496,.454357,.656128,-.291972,.577766,.488233,.679953,-.29456,.56875,.523248,.704654,-.295816,.558388,.559168,.729016,-.295157,.544826,.595326,.752062,-.292779,.528273,.631864,.773138,-.288681,.508482,.667793,.794869,-.283358,.487341,.704035,.815101,-.27608,.46354,.739925,.834212,-.26767,.438672,.775539,.852368,-.257397,.411239,.810895,.870207,-.245689,.3829,.846472,.884063,-.231452,.351496,.881788,.898284,-.215561,.31895,.917438,.912964,-.198208,.287367,.952422,.924666,-.180426,.254487,.987551,.934429,-.161525,.222226,1.02142,.943485,-.141197,.191143,1.05218,.9521,-.120085,.161112,1.07937,.957876,-.0975881,.130982,1.10403,.966943,-.0726842,.0990553,1.12616,.978313,-.0483705,.0662818,1.14619,.990048,-.0239072,.0329243,1.16413,.999984,461885e-9,-772859e-10,1.18099,.321287,-935049e-11,.455413,659662e-11,.332595,-237513e-9,.471437,167562e-9,.332729,-949964e-9,.471618,670192e-9,.332305,-.00213618,.471028,.00150712,.332326,-.00379765,.471055,.00267959,.332344,-.00593353,.471072,.00418751,.332356,-.00854349,.471077,.00603172,.332403,-.0116268,.471121,.00821362,.332461,-.0151824,.47117,.0107357,.332552,-.0192088,.471251,.0136014,.332657,-.0237024,.47133,.0168152,.332835,-.0286615,.471487,.0203853,.333083,-.0340765,.471708,.0243212,.333547,-.0398563,.47219,.0286518,.333989,-.0460916,.472587,.0333763,.334532,-.0527897,.473054,.0385084,.335167,-.0599284,.473568,.0440638,.33608,-.0673514,.474362,.0500962,.337146,-.0752237,.475231,.0566022,.338462,-.083418,.476282,.0636272,.34014,-.0919382,.477615,.0712153,.342341,-.100741,.479404,.079417,.345088,-.109905,.481618,.0882631,.349049,-.119369,.485081,.0978851,.353939,-.129033,.489317,.108336,.359893,-.139038,.494309,.119698,.366945,-.149411,.499983,.132024,.375814,-.159843,.507185,.145558,.387112,-.170664,.516392,.160433,.40023,-.181897,.526519,.176648,.412555,-.192785,.53423,.193922,.427023,-.203663,.542741,.212662,.443685,-.214695,.552066,.232944,.461499,-.225561,.560762,.254495,.480975,-.236257,.569421,.277531,.501,-.24639,.576101,.301724,.521691,-.256101,.581493,.327112,.543478,-.265289,.585221,.353917,.566094,-.273938,.587614,.381941,.589578,-.281679,.587991,.41172,.614583,-.287655,.585928,.444148,.641813,-.292228,.582092,.478617,.666189,-.295172,.57398,.51397,.690475,-.29648,.561676,.550118,.715543,-.296203,.548758,.586933,.740405,-.293999,.532792,.62384,.762183,-.28998,.512735,.660723,.786069,-.28478,.492402,.69807,.806812,-.277568,.469058,.734422,.826987,-.268951,.443017,.770946,.844588,-.259049,.415501,.80699,.863725,-.2471,.387328,.842107,.879137,-.234157,.356108,.878078,.894634,-.218719,.324315,.914058,.909162,-.201293,.291813,.949922,.92072,-.18267,.258474,.985337,.93158,-.163212,.225593,1.0205,.941238,-.142771,.193986,1.05273,.949293,-.120956,.163392,1.08075,.956226,-.0985743,.132934,1.10559,.96546,-.075118,.101255,1.12823,.977403,-.0497921,.0675441,1.149,.989648,-.0241574,.0334681,1.16765,1.00001,5762e-7,-184807e-9,1.18519,.303474,-916603e-11,.4542,61243e-10,.308894,-232869e-9,.462306,155592e-9,.309426,-931661e-9,.463093,622499e-9,.308643,-.0020949,.461933,.00139979,.308651,-.0037242,.461941,.00248874,.308662,-.00581873,.46195,.00388933,.308687,-.00837818,.461974,.00560247,.308728,-.0114016,.462011,.00762948,.308789,-.0148884,.462067,.00997326,.308882,-.0188369,.462151,.0126375,.309007,-.0232436,.462263,.0156271,.30918,-.0281054,.462417,.0189498,.309442,-.0334065,.462667,.0226167,.309901,-.0390589,.463162,.0266614,.310331,-.0452042,.463555,.0310715,.310858,-.0517735,.464019,.0358698,.311576,-.0587359,.464669,.0410848,.312436,-.0660383,.465406,.0467453,.313526,-.0737266,.466339,.0528718,.314903,-.0817574,.467504,.0595039,.316814,-.090167,.469226,.0666888,.318965,-.0987555,.470981,.0744658,.322077,-.107792,.473814,.082912,.325947,-.117098,.477241,.0920846,.331008,-.126602,.48184,.102137,.337893,-.136619,.488334,.113135,.345106,-.146838,.494415,.12511,.355111,-.157357,.503275,.138356,.365095,-.167955,.510966,.152686,.378344,-.179157,.521508,.16856,.391599,-.190143,.530455,.18561,.407786,-.20123,.541275,.204308,.425294,-.212456,.551784,.224623,.444021,-.223568,.561493,.246172,.463418,-.234154,.569886,.268979,.484077,-.244546,.577116,.293411,.505513,-.254301,.582914,.318936,.527672,-.263564,.587208,.345856,.550565,-.272332,.589277,.374054,.573656,-.280011,.588426,.403276,.59827,-.286924,.587504,.43474,.624731,-.291994,.583401,.468767,.652396,-.295159,.576997,.504411,.67732,-.296954,.565863,.54114,.703147,-.296877,.552316,.57816,.728715,-.295147,.536773,.616124,.752448,-.291275,.51771,.653885,.775169,-.285905,.496087,.691537,.799307,-.279064,.474232,.729251,.819482,-.270294,.447676,.766267,.837659,-.260032,.419656,.802616,.856903,-.248497,.391328,.838583,.873325,-.235252,.360285,.874711,.889788,-.221126,.329215,.91077,.904486,-.204304,.296392,.94653,.917711,-.185562,.262159,.983828,.928969,-.165635,.229142,1.01955,.939707,-.14442,.19673,1.05317,.948167,-.122147,.165095,1.0823,.955222,-.099098,.13451,1.10791,.964401,-.0755332,.102476,1.1312,.976605,-.0513817,.0689667,1.15218,.989085,-.0258499,.034506,1.17129,.999908,617773e-9,-271268e-9,1.18961,.285803,-905752e-11,.452348,572272e-11,.284689,-22732e-8,.450581,143626e-9,.285263,-910214e-9,.451482,575099e-9,.285302,-.00204784,.451553,.00129395,.285318,-.00364057,.451574,.0023006,.28533,-.00568813,.451585,.00359547,.285361,-.00819001,.451618,.00517934,.285397,-.0111458,.45165,.007054,.285447,-.0145536,.451688,.00922167,.285527,-.0184127,.451758,.0116869,.285688,-.0227207,.451929,.0144555,.28584,-.0274712,.452055,.0175341,.286136,-.0326278,.452369,.0209406,.286574,-.0381792,.452853,.0246965,.287012,-.0441879,.453272,.0287996,.287542,-.0506096,.453752,.033268,.288299,-.0573634,.454488,.0381504,.289186,-.0645458,.455294,.0434447,.290302,-.0720405,.456301,.0491973,.291776,-.0799046,.457648,.0554453,.29372,-.088117,.459483,.0622311,.296052,-.0965328,.461571,.0695992,.299563,-.105409,.465085,.077658,.30335,-.114553,.468506,.0864176,.309167,-.123917,.474423,.0961078,.31529,-.13381,.47995,.106643,.324163,-.144021,.488592,.118322,.333272,-.154382,.496461,.131133,.344224,-.165015,.50562,.145208,.357733,-.176168,.516719,.16073,.373046,-.187468,.528513,.177807,.38788,-.198488,.537713,.196072,.405133,-.209545,.547999,.21605,.423845,-.220724,.55759,.237484,.443777,-.231518,.566246,.26039,.464824,-.242035,.574326,.284835,.486635,-.251898,.58037,.310518,.51012,-.261304,.58568,.337678,.535301,-.270384,.590197,.366242,.559193,-.27841,.590569,.395873,.583544,-.285325,.588161,.426857,.608834,-.291113,.584249,.459477,.635753,-.294882,.57763,.494734,.664367,-.297088,.569479,.532023,.689688,-.297364,.555064,.569629,.715732,-.295949,.539522,.608124,.741307,-.292259,.521613,.646231,.764949,-.287063,.49969,.684938,.788599,-.28012,.476747,.723548,.81048,-.27153,.45116,.761135,.831372,-.261289,.424101,.798916,.850092,-.249559,.39443,.835952,.867777,-.236348,.363849,.871606,.884632,-.221569,.332477,.907843,.90047,-.20618,.300667,.944187,.914524,-.188771,.266552,.981371,.926892,-.168362,.232349,1.01841,.937951,-.146761,.199359,1.05308,.947236,-.123813,.1675,1.0839,.954367,-.099984,.136166,1.11047,.963907,-.0759278,.103808,1.13414,.976218,-.0511367,.0697061,1.15575,.988772,-.0267415,.0352529,1.17531,.999888,-520778e-9,289926e-9,1.19389,.263546,-883274e-11,.441896,526783e-11,.262352,-221849e-9,.439889,132311e-9,.262325,-886683e-9,.439848,528824e-9,.26228,-.00199476,.439765,.00118975,.262372,-.00354671,.439922,.00211568,.26239,-.00554141,.439941,.00330652,.262412,-.00797888,.439961,.00476346,.262453,-.0108584,.440002,.00648818,.262528,-.0141788,.440085,.0084835,.262615,-.017938,.440166,.0107533,.262744,-.0221346,.440291,.0133044,.262939,-.026762,.440493,.0161445,.263277,-.0317573,.440889,.0192974,.26368,-.0371832,.441338,.0227699,.264106,-.0430371,.441753,.0265698,.264624,-.0493035,.442227,.0307178,.265378,-.0558669,.442985,.0352616,.266253,-.0628718,.443795,.0401968,.267478,-.0701569,.445008,.04559,.269062,-.077845,.446599,.0514539,.270926,-.0857941,.448349,.0578382,.273693,-.0940773,.451221,.0648363,.276746,-.102704,.454097,.0724389,.281693,-.111735,.459517,.0808744,.287335,-.121004,.46531,.0901551,.29448,-.130734,.472605,.100371,.30257,-.140777,.480251,.111644,.312465,-.15111,.489444,.124111,.324856,-.16189,.500919,.137979,.33774,-.172946,.511317,.153163,.35255,-.184152,.522684,.169817,.367786,-.19522,.53248,.187886,.385474,-.20632,.543326,.207634,.404976,-.217744,.554109,.229165,.425203,-.228691,.563395,.252068,.446704,-.239299,.571565,.276471,.468951,-.249348,.577935,.302323,.493487,-.258933,.584309,.329882,.517861,-.268009,.58773,.358525,.543309,-.276238,.589612,.388585,.569704,-.28356,.589294,.419787,.594871,-.289497,.585137,.452114,.622555,-.294452,.580356,.486466,.651167,-.296918,.57185,.523079,.677332,-.297647,.558428,.5611,.703718,-.296321,.542232,.599592,.730262,-.293339,.524541,.639138,.754304,-.288036,.502691,.677978,.778051,-.281018,.479212,.716537,.801557,-.272414,.454071,.75586,.822559,-.262419,.425952,.794477,.843051,-.250702,.397313,.832664,.86232,-.237264,.366534,.869876,.879044,-.222716,.334816,.906973,.896362,-.206827,.303143,.943558,.910342,-.189659,.269699,.979759,.924119,-.171108,.236411,1.01718,.935374,-.149579,.202224,1.05289,.944295,-.126295,.16989,1.08496,.952227,-.101511,.138089,1.11256,.962041,-.0766392,.105053,1.1375,.97528,-.0511967,.070329,1.15983,.988476,-.025463,.0351268,1.17987,.999962,286808e-10,145564e-10,1.19901,.227089,-841413e-11,.404216,472707e-11,.239725,-215083e-9,.426708,120833e-9,.239904,-860718e-9,.427028,483555e-9,.239911,-.00193661,.427039,.00108806,.239914,-.00344276,.42704,.00193457,.239933,-.00537907,.427064,.00302363,.239944,-.00774482,.427065,.00435604,.239993,-.01054,.427122,.00593398,.240052,-.0137626,.427179,.00775987,.240148,-.0174115,.427279,.00983854,.240278,-.021484,.42741,.0121763,.240472,-.0259729,.427618,.0147827,.240839,-.0308131,.428086,.0176837,.241201,-.0360893,.428482,.0208775,.241626,-.0417723,.428907,.0243821,.242207,-.0478337,.42952,.0282228,.24298,-.0542199,.430332,.0324333,.243881,-.0610015,.431222,.0370252,.245123,-.0680874,.432512,.0420535,.24667,-.0755482,.434088,.0475414,.248779,-.0832873,.436323,.0535542,.251665,-.0913546,.439509,.0601716,.255305,-.0998489,.443478,.0674282,.260049,-.108576,.448713,.0754673,.266192,-.117754,.455524,.084339,.273158,-.127294,.4627,.0941683,.282131,-.137311,.472068,.10515,.293332,-.147736,.483565,.117402,.304667,-.158357,.493702,.130824,.317785,-.169274,.504708,.145724,.333245,-.180595,.517107,.16215,.349843,-.191892,.528849,.180149,.367944,-.203168,.540301,.199746,.387579,-.214443,.551514,.221047,.408247,-.225624,.560906,.243981,.43014,-.236422,.56959,.268513,.452669,-.24654,.576098,.294409,.476196,-.256157,.580925,.322002,.501157,-.265289,.584839,.351052,.527632,-.273671,.587614,.3812,.555754,-.281254,.589119,.412994,.581682,-.287448,.585204,.445498,.608196,-.292614,.579006,.479505,.635661,-.296068,.571297,.514643,.664999,-.297395,.560855,.552213,.691039,-.296645,.544525,.591365,.7179,-.293785,.526535,.630883,.744059,-.289089,.50545,.670932,.76863,-.282239,.482514,.710904,.793273,-.273688,.457246,.750259,.814731,-.26328,.428872,.78948,.835603,-.251526,.399384,.828597,.85489,-.238339,.368811,.866892,.872828,-.223607,.336617,.90563,.889462,-.207538,.303997,.943538,.904929,-.190297,.270812,.980591,.919101,-.172034,.237453,1.01935,.930536,-.152058,.204431,1.05498,.941223,-.129515,.172495,1.08717,.94982,-.104263,.140175,1.11551,.960592,-.0781944,.106465,1.14098,.974629,-.051688,.0711592,1.16418,.98811,-.0253929,.0354432,1.18465,1.00004,804378e-9,-330876e-9,1.20462,.214668,-821282e-11,.406619,433582e-11,.218053,-208144e-9,.413025,109887e-9,.217987,-832212e-9,.412901,439362e-9,.217971,-.00187246,.412876,988623e-9,.217968,-.00332855,.41286,.00175772,.217985,-.00520055,.412882,.00274729,.218014,-.00748814,.412916,.00395842,.218054,-.0101901,.412957,.00539274,.218106,-.0133057,.413005,.00705348,.218217,-.0168342,.413139,.00894581,.218338,-.0207707,.413258,.0110754,.21855,-.0251001,.413509,.0134551,.218913,-.0297861,.413992,.0161081,.219265,-.0348956,.414383,.0190307,.219696,-.0403909,.414839,.0222458,.220329,-.0462003,.415567,.025792,.220989,-.0524208,.41621,.0296637,.222027,-.058948,.417385,.0339323,.223301,-.0658208,.418779,.0386055,.224988,-.0730347,.420665,.0437355,.227211,-.0805274,.423198,.0493844,.230131,-.088395,.426566,.0556135,.233908,-.0966208,.43091,.0624829,.239092,-.105223,.437148,.0701636,.245315,-.11424,.444302,.0786949,.253166,-.12368,.453262,.0882382,.262374,-.133569,.463211,.0988682,.273145,-.143836,.474271,.110727,.285512,-.154577,.4863,.123945,.299512,-.165501,.498817,.138581,.314287,-.176698,.510341,.154676,.331083,-.188066,.522583,.172459,.349615,-.199597,.534879,.191979,.369318,-.210843,.546083,.21309,.390377,-.222068,.5562,.235998,.412411,-.233059,.564704,.260518,.435715,-.24357,.572314,.286795,.461196,-.253356,.579395,.314559,.485587,-.262362,.581985,.343581,.511908,-.270895,.584347,.374367,.539798,-.278452,.58505,.406015,.567974,-.284877,.583344,.439168,.594303,-.290124,.577348,.473005,.622951,-.294183,.570751,.508534,.652404,-.296389,.561541,.544764,.679291,-.296605,.546426,.582927,.706437,-.294095,.528599,.622681,.734485,-.28978,.508676,.663567,.758841,-.283363,.484768,.704092,.78537,-.275015,.460434,.745101,.807315,-.264689,.432166,.784712,.8271,-.252597,.401807,.824241,.849191,-.239154,.371458,.863803,.867046,-.224451,.338873,.903063,.8852,-.208342,.306175,.942763,.901771,-.190684,.272759,.981559,.915958,-.172105,.239306,1.02048,.928046,-.152214,.206071,1.05765,.939961,-.130247,.17367,1.08999,.948711,-.10672,.142201,1.11829,.959305,-.0808688,.108454,1.14467,.973009,-.0539145,.0728109,1.16839,.987631,-.0262947,.0360625,1.19004,.999978,.00132758,-559424e-9,1.21058,.193925,-793421e-11,.391974,392537e-11,.196746,-200315e-9,.397675,991033e-10,.19667,-801099e-9,.397521,396342e-9,.196633,-.00180246,.397445,891829e-9,.196654,-.00320443,.397482,.00158582,.196659,-.00500647,.39748,.00247867,.196683,-.0072086,.397506,.00357167,.196728,-.00981001,.397562,.00486675,.196792,-.0128096,.397633,.00636707,.19689,-.0162055,.397746,.00807752,.197017,-.0199943,.397884,.0100052,.19729,-.024139,.39827,.0121691,.197583,-.0286671,.398639,.0145755,.197927,-.0335858,.399034,.0172355,.198383,-.0388806,.399554,.0201718,.199002,-.0444736,.400289,.0234194,.199739,-.0504583,.401111,.026984,.200784,-.056729,.402349,.0309217,.202075,-.0633643,.403841,.0352496,.203898,-.0703247,.406076,.0400313,.206199,-.0775565,.408841,.0453282,.209252,-.085184,.41259,.0511794,.213638,-.0931994,.418288,.0577459,.21881,-.101617,.424681,.0650508,.225642,-.11052,.433429,.0732759,.233717,-.119772,.442897,.0824683,.242823,-.129505,.452888,.0927484,.254772,-.139906,.466407,.104417,.266603,-.150402,.477413,.117211,.28073,-.161395,.490519,.131598,.295399,-.172465,.50201,.147407,.312705,-.183982,.515311,.165031,.331335,-.195532,.52786,.184336,.351037,-.206971,.5392,.205361,.372175,-.218117,.54941,.228043,.394548,-.229327,.558642,.25267,.419598,-.240052,.567861,.279071,.443922,-.249937,.573332,.306882,.471495,-.259407,.58013,.33661,.496769,-.267749,.580564,.367328,.524951,-.275524,.581696,.399753,.55318,-.282148,.579885,.433134,.581577,-.287533,.575471,.467534,.609231,-.291612,.567445,.502943,.637478,-.293911,.557657,.53871,.667795,-.295096,.546535,.576568,.694272,-.294073,.529561,.614929,.722937,-.290386,.510561,.655909,.749682,-.284481,.487846,.697663,.774754,-.276188,.462487,.738515,.799301,-.266215,.43481,.779802,.820762,-.254116,.404879,.820045,.843231,-.240393,.374559,.860294,.861857,-.225503,.341582,.900965,.880815,-.209382,.308778,.941727,.89766,-.19155,.275232,.980916,.912926,-.172346,.240938,1.02162,.926391,-.151799,.207223,1.0597,.938429,-.129968,.17484,1.09291,.947834,-.10651,.142984,1.12248,.958432,-.0824098,.109902,1.149,.972402,-.0565242,.0744454,1.1733,.987191,-.028427,.0373794,1.19538,.999975,385685e-10,-4203e-8,1.21676,.178114,-766075e-11,.385418,354027e-11,.176074,-191966e-9,.381002,887135e-10,.17601,-767549e-9,.380861,354715e-9,.17598,-.00172696,.380798,798168e-9,.175994,-.00307012,.380824,.00141928,.176017,-.00479684,.380858,.00221859,.176019,-.00690648,.380839,.00319714,.176072,-.00939888,.380913,.0043572,.176131,-.0122726,.380979,.005702,.176239,-.0155264,.38112,.00723689,.176371,-.0191551,.381272,.00896907,.176638,-.023117,.381669,.0109194,.176912,-.0274633,.382015,.0130903,.177279,-.032173,.382476,.0154949,.17774,-.0372219,.383041,.0181669,.178344,-.0426132,.38378,.0211209,.179153,-.0483309,.384773,.0243899,.180197,-.0543447,.386076,.0280062,.181581,-.0607122,.387809,.032004,.18344,-.0673855,.390205,.036453,.186139,-.0743989,.393944,.0414162,.189432,-.0817731,.39832,.0469394,.193795,-.0895464,.404188,.0531442,.199641,-.0978264,.4121,.0601374,.206679,-.106499,.421425,.0680078,.214865,-.115654,.431504,.076919,.224406,-.125268,.442526,.0868835,.235876,-.135475,.455465,.0981875,.248335,-.146023,.4681,.110759,.262868,-.157016,.482069,.124885,.278962,-.168245,.496182,.140645,.295082,-.17958,.507401,.157838,.313738,-.191227,.520252,.17695,.333573,-.202718,.531708,.197817,.356433,-.214424,.544509,.220785,.378853,-.225492,.55373,.245306,.402717,-.236236,.561348,.271593,.428375,-.246568,.568538,.299776,.454724,-.255941,.573462,.329433,.482291,-.264511,.576356,.360598,.509706,-.272129,.576446,.393204,.538805,-.278979,.575298,.427227,.568919,-.284528,.572154,.462157,.596804,-.288801,.564691,.497997,.625987,-.291334,.555134,.534467,.656414,-.292722,.545051,.571736,.683916,-.292185,.528813,.610158,.711809,-.290043,.51106,.649061,.739547,-.285246,.490103,.690081,.766914,-.277647,.465523,.732554,.791375,-.267603,.437718,.773982,.814772,-.256109,.40882,.81609,.836691,-.242281,.377823,.856849,.856984,-.227155,.34496,.898363,.876332,-.210395,.311335,.939471,.894988,-.192612,.277703,.980799,.911113,-.173236,.243019,1.02215,.924092,-.152258,.209037,1.06139,.936828,-.129575,.175909,1.09635,.946869,-.10594,.143852,1.12707,.958284,-.081318,.110289,1.15419,.972325,-.0556133,.0747232,1.17909,.986878,-.0297899,.0383149,1.20163,.999936,-.00197169,912402e-9,1.22338,.151174,-720365e-11,.351531,309789e-11,.155594,-18279e-8,.361806,78608e-9,.156099,-731569e-9,.362982,314615e-9,.156053,-.00164578,.362869,707845e-9,.156093,-.0029261,.362961,.00125884,.156099,-.00457155,.362959,.00196783,.15612,-.00658224,.362982,.00283622,.156168,-.00895774,.363048,.00386625,.156221,-.0116962,.363101,.00506109,.156324,-.0147973,.363241,.00642675,.156476,-.0182503,.363448,.00797175,.156731,-.0220266,.36384,.00971484,.156994,-.026176,.364179,.0116575,.157341,-.0306701,.36462,.0138207,.157867,-.0354591,.365364,.0162356,.15846,-.0406141,.366111,.0189092,.159308,-.0460519,.367248,.021885,.160426,-.0518096,.368767,.0252004,.161877,-.0578906,.370745,.0288825,.163995,-.0642812,.373831,.0330139,.16655,-.0710067,.377366,.0376283,.170237,-.0781522,.382799,.0428493,.175096,-.0857172,.389915,.0487324,.181069,-.0938025,.398487,.0554214,.188487,-.102363,.408799,.0630189,.197029,-.111343,.419991,.071634,.206684,-.120812,.431455,.0812797,.218698,-.131033,.445746,.0923651,.230726,-.141373,.457471,.104545,.245516,-.152387,.472388,.118449,.261551,-.163628,.486671,.133923,.277437,-.174814,.49762,.150849,.296662,-.186713,.51162,.169924,.31795,-.198513,.525435,.190848,.339422,-.210119,.536267,.213504,.362143,-.221354,.545982,.237947,.387198,-.23224,.555364,.264427,.412349,-.24257,.561489,.292519,.439274,-.252284,.566903,.322561,.466779,-.261023,.569614,.353952,.496011,-.26899,.571589,.387278,.524964,-.275498,.570325,.421356,.556518,-.281449,.568792,.457314,.584363,-.285526,.560268,.493199,.614214,-.28844,.55205,.530276,.645684,-.289777,.541906,.56855,.673446,-.289722,.526464,.606927,.701924,-.287792,.509872,.645945,.73037,-.284315,.490649,.685564,.757405,-.278804,.467964,.726511,.784025,-.269543,.441468,.768601,.808255,-.258117,.41216,.811321,.830739,-.244728,.380606,.853496,.851914,-.229428,.348111,.895374,.872586,-.212508,.314732,.937674,.891581,-.194025,.280338,.979869,.907641,-.174711,.245203,1.02253,.922233,-.153509,.21077,1.06371,.935878,-.130418,.177399,1.09972,.946338,-.105558,.144507,1.13124,.957265,-.080059,.110508,1.15973,.971668,-.0539766,.0742311,1.18515,.9866,-.0277101,.0375224,1.20858,1.00021,-515531e-9,135226e-9,1.23135,.137468,-686011e-11,.345041,273315e-11,.13703,-173378e-9,.343936,690761e-10,.136986,-693048e-9,.34383,276126e-9,.136964,-.00155931,.343761,621337e-9,.137003,-.00277211,.343863,.00110494,.137012,-.00433103,.343868,.00172744,.137043,-.00623606,.343916,.00249022,.13709,-.0084868,.343986,.00339559,.137145,-.0110814,.344045,.00444687,.137242,-.0140187,.344177,.00565007,.137431,-.0172713,.344491,.00701868,.137644,-.0208605,.344805,.00856042,.13791,-.024792,.345172,.0102863,.138295,-.0290461,.345734,.0122185,.138764,-.0335957,.346371,.0143771,.139415,-.038467,.347298,.0167894,.140272,-.0436176,.348527,.0194895,.141457,-.0491016,.350276,.0225043,.14303,-.0548764,.352646,.0258962,.145289,-.0610096,.356206,.0297168,.148502,-.0674777,.361488,.0340562,.152188,-.074345,.367103,.0389534,.157359,-.0817442,.375247,.0445541,.16379,-.0896334,.385064,.0509535,.171376,-.098005,.396082,.0582611,.179901,-.106817,.407418,.06654,.189892,-.116239,.420031,.075994,.201838,-.12627,.434321,.0867239,.214311,-.136701,.447631,.0987517,.228902,-.147616,.462046,.112353,.245107,-.158871,.476942,.127605,.262292,-.170261,.490285,.144469,.281215,-.182017,.503783,.163282,.301058,-.193729,.515505,.183873,.322752,-.205512,.52682,.206466,.347547,-.217214,.539473,.231194,.370969,-.227966,.546625,.257288,.397533,-.238555,.55472,.285789,.42398,-.248278,.559468,.315746,.452928,-.257422,.564095,.347724,.482121,-.265306,.565426,.380922,.510438,-.272043,.563205,.415639,.541188,-.277614,.561087,.451702,.571667,-.281927,.554922,.48845,.602432,-.285015,.546838,.526442,.634126,-.286512,.537415,.564896,.662816,-.286388,.522906,.604037,.692411,-.284734,.507003,.643795,.720946,-.281297,.488398,.68298,.748293,-.276262,.466353,.723466,.776931,-.269978,.443573,.764565,.801065,-.260305,.415279,.805838,.825843,-.247426,.384773,.849985,.84807,-.232437,.352555,.893174,.869122,-.215806,.318642,.936564,.888963,-.197307,.28381,.980253,.905547,-.177203,.247888,1.02463,.918554,-.155542,.212904,1.06714,.931395,-.131948,.1787,1.10451,.941749,-.106723,.145902,1.13694,.954551,-.0804939,.111193,1.1666,.970279,-.0534239,.0744697,1.19249,.986117,-.0257452,.0368788,1.21665,.999938,.00190634,-.0010291,1.23981,.118493,-647439e-11,.32272,23772e-10,.118765,-163023e-9,.323456,598573e-10,.118772,-65212e-8,.323477,239447e-9,.118843,-.00146741,.323657,538881e-9,.118804,-.00260846,.323553,95826e-8,.118826,-.00407576,.323595,.00149845,.118846,-.00586826,.323617,.00216047,.118886,-.00798578,.32367,.00294679,.118947,-.0104273,.323753,.00386124,.119055,-.0131909,.323922,.00490999,.119241,-.0162444,.324251,.00610804,.11944,-.0196339,.324544,.00745805,.119739,-.0233378,.325026,.00897805,.12011,-.0273179,.325586,.0106895,.120571,-.0316143,.326231,.0126073,.12124,-.0361939,.327264,.0147654,.122162,-.0410511,.328733,.0172001,.123378,-.0462233,.330659,.0199375,.125183,-.0517109,.333754,.0230498,.127832,-.0575652,.338507,.026597,.130909,-.0637441,.343666,.0306345,.135221,-.0704302,.351063,.035273,.14082,-.0776364,.360604,.0406137,.146781,-.0852293,.369638,.0466788,.155121,-.0935351,.3827,.0537628,.16398,-.102234,.39522,.0617985,.173926,-.111465,.40793,.07097,.185137,-.121296,.42105,.0813426,.19826,-.13169,.435735,.0931596,.212938,-.142614,.450932,.106547,.229046,-.153884,.465726,.121575,.246246,-.165382,.479461,.138286,.264637,-.176806,.492106,.15666,.284959,-.188793,.504774,.17728,.308157,-.200763,.518805,.19988,.330951,-.21239,.528231,.224293,.3549,-.223521,.536376,.250541,.381502,-.234169,.544846,.278902,.409529,-.244077,.551717,.309227,.437523,-.253363,.55517,.341426,.467624,-.261659,.557772,.37518,.497268,-.268498,.556442,.41007,.528294,-.274018,.553915,.446445,.559053,-.278169,.549153,.483779,.589329,-.281229,.539878,.522249,.622503,-.282902,.53162,.561754,.652382,-.282815,.518119,.601544,.681847,-.281247,.502187,.641574,.712285,-.277986,.484824,.682633,.740094,-.273017,.463483,.723426,.768478,-.266692,.441299,.763747,.794556,-.258358,.415238,.805565,.819408,-.248807,.386912,.847254,.843411,-.236214,.356165,.891091,.862397,-.219794,.320562,.936174,.883113,-.201768,.285322,.982562,.90023,-.181672,.249713,1.02862,.915192,-.159279,.214546,1.07163,.928458,-.134725,.180285,1.10995,.94069,-.10913,.147119,1.14354,.953409,-.0821315,.112492,1.17372,.969537,-.0542677,.0752014,1.20043,.985612,-.0259096,.0370361,1.22528,.999835,.00298198,-.00151801,1.24959,.10097,-602574e-11,.300277,202619e-11,.101577,-152164e-9,.302077,511662e-10,.101572,-608889e-9,.302066,204751e-9,.101566,-.00136997,.302047,460753e-9,.101592,-.00243557,.302114,819497e-9,.101608,-.0038053,.30214,.00128154,.101627,-.00547906,.30216,.0018483,.101669,-.00745647,.302224,.00252223,.101732,-.00973615,.302318,.00330716,.101844,-.0123097,.302513,.00421061,.102025,-.0151681,.30285,.00524481,.102224,-.0183334,.303166,.0064154,.102515,-.0217819,.303654,.00774063,.102886,-.0255067,.304243,.0092398,.103395,-.029514,.305089,.0109339,.104109,-.0337912,.306301,.0128561,.105074,-.0383565,.30798,.0150338,.10654,-.0432132,.310726,.0175228,.108478,-.0484244,.314351,.0203648,.111015,-.0539339,.319032,.0236325,.114682,-.0598885,.32605,.0274188,.11911,-.0663375,.334109,.0317905,.124736,-.0733011,.344013,.0368502,.131479,-.0807744,.355358,.0427104,.139283,-.0888204,.367614,.0494788,.148054,-.0973394,.380072,.0572367,.159037,-.10665,.395678,.0662704,.169794,-.116221,.40795,.0763192,.18314,-.126632,.423546,.087956,.197515,-.137383,.438213,.101042,.213514,-.148641,.453248,.115827,.23065,-.160117,.46688,.132283,.249148,-.171807,.479962,.150644,.270219,-.183695,.494618,.171073,.292338,-.195574,.506937,.193378,.314999,-.207205,.516463,.217585,.340991,-.218955,.528123,.24428,.367982,-.229917,.537025,.272784,.39432,-.239737,.541627,.302742,.423364,-.249048,.546466,.335112,.453751,-.257329,.549466,.369032,.48416,-.264623,.549503,.404577,.515262,-.270411,.547008,.441337,.547036,-.274581,.542249,.479162,.576614,-.277266,.533015,.517904,.611143,-.279144,.525512,.558508,.640989,-.279001,.51154,.598995,.671182,-.277324,.495641,.639935,.700848,-.273908,.477526,.681017,.729862,-.269063,.457955,.722764,.758273,-.262282,.434846,.764349,.784121,-.254281,.409203,.806206,.809798,-.24505,.382694,.848617,.834953,-.233861,.354034,.892445,.856817,-.221308,.321764,.936263,.877609,-.205996,.288118,.982401,.897489,-.186702,.253277,1.02975,.913792,-.164618,.217963,1.07488,.92785,-.140023,.183221,1.11487,.940378,-.11328,.149385,1.14947,.95273,-.0853958,.114152,1.1807,.969059,-.0568698,.0769845,1.20912,.985574,-.0276502,.0381186,1.23498,.999943,.00239052,-.00126861,1.25987,.0852715,-560067e-11,.279021,171162e-11,.0854143,-140871e-9,.279483,430516e-10,.0854191,-563385e-9,.2795,172184e-9,.0854188,-.00126753,.279493,387464e-9,.0854229,-.00225337,.279501,68918e-8,.0854443,-.00352086,.279549,.00107803,.0854697,-.00506962,.279591,.00155536,.0855093,-.00689873,.279652,.00212354,.0855724,-.00900821,.279752,.00278703,.0856991,-.0113799,.280011,.0035551,.085855,-.0140314,.280297,.00443449,.0860682,-.016963,.280682,.00543636,.086344,-.0201438,.281159,.0065788,.0867426,-.0235999,.281886,.00787977,.087239,-.0273069,.282745,.0093606,.0879815,-.031269,.284139,.011056,.0891258,-.035531,.28647,.0130065,.0906909,-.0400947,.289708,.0152495,.0927624,-.0449638,.293904,.0178454,.0958376,-.0502427,.300471,.0208915,.0995827,-.0559514,.30806,.0244247,.104526,-.0622152,.317874,.0285721,.110532,-.0690046,.329332,.0334227,.117385,-.0763068,.341217,.0390466,.12522,-.084184,.353968,.0455786,.134037,-.0925248,.366797,.0530773,.144014,-.101487,.380209,.0617424,.156013,-.111273,.395956,.071777,.168872,-.121431,.41053,.0830905,.183089,-.132105,.425073,.0959341,.198763,-.143286,.439833,.110448,.216159,-.154841,.454507,.126769,.234859,-.166588,.468368,.14495,.255879,-.178626,.482846,.165233,.27677,-.190218,.493489,.187217,.301184,-.202227,.506549,.211659,.325852,-.213764,.5158,.237922,.352824,-.22487,.525442,.26632,.380882,-.235246,.532487,.296691,.410137,-.244847,.537703,.329179,.439787,-.253122,.540361,.363135,.472291,-.260517,.542734,.399222,.501856,-.266519,.538826,.436352,.534816,-.270905,.535152,.474505,.565069,-.273826,.525979,.513988,.597154,-.275333,.516394,.554852,.630473,-.275314,.506206,.596592,.660574,-.273323,.489769,.638117,.692015,-.270008,.472578,.680457,.720647,-.265001,.452134,.723008,.750528,-.258311,.430344,.765954,.777568,-.250046,.405624,.809012,.80387,-.240114,.378339,.852425,.828439,-.228737,.349877,.895346,.851472,-.216632,.318968,.940695,.873906,-.202782,.287489,.987235,.89467,-.187059,.254394,1.03348,.912281,-.168818,.221294,1.07812,.927358,-.146494,.18675,1.11928,.940385,-.120009,.152322,1.15609,.952672,-.0917183,.117514,1.18875,.968496,-.0620321,.0797405,1.21821,.985236,-.0314945,.0402383,1.24523,.99998,-575153e-9,110644e-9,1.27133,.0702429,-512222e-11,.255273,140947e-11,.0702981,-128826e-9,.255469,354488e-10,.0703691,-515562e-9,.255727,141874e-9,.0703805,-.00116,.255754,31929e-8,.0703961,-.00206224,.255813,567999e-9,.0704102,-.00322223,.255839,88871e-8,.0704298,-.00463928,.255863,.00128272,.0704759,-.00631375,.255953,.00175283,.0705434,-.00824317,.256079,.00230342,.0706693,-.010412,.25636,.0029443,.0708189,-.0128439,.256647,.00368031,.0710364,-.0155177,.257084,.00452614,.0713223,-.0184374,.257637,.00549706,.0717182,-.0216002,.258416,.00661246,.072321,-.0249966,.259699,.00790147,.0731446,-.0286566,.261475,.0093884,.0743352,-.0325888,.264132,.0111186,.0760676,-.036843,.26815,.013145,.078454,-.0414292,.273636,.0155251,.0818618,-.0464634,.281653,.0183525,.0857382,-.0519478,.289992,.0216642,.0908131,-.0579836,.30066,.0255956,.0967512,-.0645124,.312204,.0301954,.103717,-.0716505,.325001,.0356017,.111596,-.0793232,.338129,.041896,.120933,-.087645,.352853,.0492447,.130787,-.096492,.366192,.0576749,.142311,-.105973,.380864,.0673969,.155344,-.116182,.396575,.0785899,.169535,-.126815,.411443,.0912377,.185173,-.138015,.426256,.105607,.201755,-.149325,.439607,.121551,.221334,-.161207,.455467,.139608,.241461,-.173162,.469096,.159591,.26294,-.18504,.481014,.18156,.286776,-.196881,.493291,.205781,.311596,-.208311,.503556,.231819,.338667,-.219671,.513268,.260274,.366021,-.230451,.519414,.290862,.395875,-.240131,.526766,.323196,.425564,-.248566,.52905,.357071,.457094,-.256195,.530796,.393262,.488286,-.262331,.528703,.430797,.522291,-.267141,.52727,.470231,.554172,-.270411,.519848,.510477,.586427,-.271986,.510307,.551594,.619638,-.27192,.499158,.593849,.650656,-.269817,.483852,.636314,.68284,-.266267,.467515,.679679,.714356,-.26113,.44931,.723884,.742717,-.254067,.425789,.767245,.770894,-.245652,.401144,.811819,.797358,-.235554,.374224,.856315,.823377,-.223896,.346167,.901077,.847456,-.210865,.316056,.946502,.870697,-.196574,.284503,.993711,.891068,-.180814,.251628,1.04134,.909267,-.163314,.219065,1.08609,.925653,-.143304,.186446,1.12702,.940017,-.121322,.153416,1.16371,.952398,-.0973872,.120334,1.19712,.967568,-.0698785,.08352,1.22791,.984772,-.0390031,.0439209,1.25672,1.00026,-.0070087,.00315668,1.28428,.0556653,-459654e-11,.227325,112556e-11,.0565238,-116382e-9,.230826,284985e-10,.0565717,-465666e-9,.231026,114036e-9,.0565859,-.00104773,.231079,256656e-9,.0565761,-.00186255,.231025,45663e-8,.0565913,-.00291002,.231058,714664e-9,.0566108,-.00418998,.231085,.00103224,.0566532,-.00570206,.231169,.00141202,.0567473,-.00743666,.231417,.00186018,.0568567,-.00940298,.231661,.00238264,.0569859,-.0115991,.231895,.00298699,.0572221,-.0140096,.232456,.00368957,.057519,-.0166508,.233096,.00450303,.0579534,-.01951,.234094,.00544945,.0585922,-.0225991,.235629,.00655564,.0595647,-.0259416,.238106,.00785724,.0609109,-.0295661,.241557,.00939127,.0628751,-.0335126,.246652,.0112198,.0656908,-.0378604,.254091,.0134168,.0691347,-.0426543,.262666,.0160374,.0732165,-.0478967,.272029,.0191514,.0782863,-.0536716,.283007,.0228597,.0843973,-.0600683,.295732,.0272829,.0913598,-.0670095,.308779,.032484,.0994407,-.0745516,.322886,.0385886,.108189,-.082712,.336408,.0457133,.118574,-.0914927,.351692,.0539832,.129989,-.100854,.366502,.0635162,.142722,-.110837,.381675,.0744386,.156654,-.121353,.3963,.0868483,.172151,-.132414,.411477,.100963,.188712,-.143809,.42508,.116795,.208093,-.155765,.441328,.134715,.227936,-.167608,.454328,.154396,.249495,-.179579,.467235,.176179,.27362,-.191488,.480248,.200193,.296371,-.202618,.487886,.225775,.324234,-.214133,.499632,.25441,.353049,-.225212,.509532,.285077,.381785,-.234875,.514265,.317047,.414038,-.244205,.521282,.351874,.445251,-.252145,.522931,.388279,.476819,-.258433,.520947,.425825,.509209,-.263411,.517669,.465104,.542759,-.266732,.512841,.505741,.574822,-.268263,.503317,.547611,.609324,-.268489,.493035,.590953,.641772,-.266941,.478816,.63488,.674049,-.263297,.462863,.679072,.705071,-.257618,.442931,.723487,.734709,-.250625,.421299,.768708,.763704,-.24179,.397085,.814375,.791818,-.231115,.370577,.859907,.817439,-.21922,.34232,.906715,.843202,-.205658,.312627,.953943,.866639,-.190563,.280933,1.00185,.888129,-.173978,.248393,1.05105,.907239,-.155485,.216007,1.09704,.923893,-.134782,.183233,1.13857,.938882,-.11249,.150376,1.17539,.952464,-.0890706,.117177,1.20924,.968529,-.0646523,.0813095,1.24055,.984763,-.038606,.0439378,1.27018,1.00053,-.01238,.00598668,1.29873,.0437928,-409594e-11,.204012,879224e-12,.0440166,-103395e-9,.205049,221946e-10,.0440529,-413633e-9,.205225,887981e-10,.0440493,-930594e-9,.2052,199858e-9,.0439884,-.00165352,.204901,355495e-9,.0440716,-.0025849,.205255,556983e-9,.0440968,-.00372222,.205311,805326e-9,.0441359,-.00506478,.205391,.00110333,.0442231,-.00660384,.205638,.00145768,.0443254,-.00835246,.205877,.00187275,.0444832,-.0102992,.20627,.00235938,.0447001,-.0124449,.206796,.0029299,.0450168,-.0147935,.207593,.0036005,.0454816,-.017336,.208819,.00439246,.0462446,-.0201156,.211036,.00533864,.0473694,-.0231568,.214388,.00646984,.0490191,-.0264941,.219357,.00783856,.0512776,-.030184,.226061,.00950182,.0541279,-.0342661,.234094,.0115156,.0578989,-.0388539,.244297,.0139687,.0620835,-.0438735,.254457,.0169015,.0673497,-.04951,.266706,.0204554,.0731759,-.0556263,.278753,.0246606,.0803937,-.0624585,.29309,.0297126,.0879287,-.0697556,.305856,.0355868,.0970669,-.0778795,.321059,.0425768,.106508,-.0863541,.333873,.05056,.11776,-.0955935,.349008,.0598972,.130081,-.105438,.363776,.0706314,.144454,-.115899,.380112,.0828822,.1596,-.126827,.394843,.0967611,.176097,-.138161,.409033,.112381,.194726,-.149904,.424257,.129952,.213944,-.161675,.436945,.149333,.235516,-.173659,.450176,.170892,.260564,-.185963,.466305,.194984,.285183,-.197582,.477328,.220805,.311095,-.208697,.486566,.248694,.338924,-.219519,.494811,.279015,.369757,-.229766,.504065,.311725,.3996,-.238879,.507909,.345844,.430484,-.246802,.509805,.381749,.46413,-.253924,.511436,.420251,.497077,-.259319,.508787,.459957,.530434,-.263297,.50394,.501356,.565725,-.265619,.49804,.544252,.599254,-.265842,.487346,.587856,.631251,-.263978,.472975,.631969,.663972,-.26043,.457135,.677471,.697724,-.255358,.439844,.723744,.727725,-.248308,.417872,.770653,.756417,-.239181,.39273,.817357,.785419,-.22814,.367839,.864221,.81266,-.215681,.339449,.912701,.839391,-.201623,.309279,.962419,.86366,-.185624,.278029,1.0122,.885028,-.16797,.245294,1.06186,.904639,-.148336,.212689,1.10934,.922048,-.12637,.179616,1.15063,.936952,-.102928,.146749,1.18885,.951895,-.0785268,.112733,1.22352,.967198,-.0530153,.0760056,1.25681,.984405,-.02649,.0383183,1.28762,1.00021,70019e-8,-20039e-8,1.31656,.0325964,-355447e-11,.176706,655682e-12,.0329333,-899174e-10,.178527,165869e-10,.0329181,-359637e-9,.178453,663498e-10,.0329085,-808991e-9,.178383,149332e-9,.0329181,-.00143826,.178394,265873e-9,.0329425,-.00224678,.178517,416597e-9,.0329511,-.00323575,.17849,603299e-9,.033011,-.00439875,.178695,829422e-9,.0330733,-.00574059,.178843,.00109908,.0331857,-.00725896,.179176,.00141933,.0333445,-.00895289,.179618,.0017999,.0335674,-.0108219,.180238,.00225316,.033939,-.0128687,.181417,.00279765,.0345239,-.015114,.183395,.0034564,.0354458,-.017596,.186616,.00425864,.0368313,-.0203524,.191547,.00524936,.0386115,-.0234105,.197508,.00647033,.0410303,-.0268509,.205395,.00798121,.0442245,-.0307481,.215365,.0098557,.0478659,-.0350863,.225595,.0121417,.0522416,-.0399506,.236946,.0149385,.0574513,-.045357,.249442,.0183189,.0631208,-.0512863,.261222,.0223644,.0701124,-.0579273,.275418,.0272418,.0777331,-.0650652,.288989,.0329458,.0862709,-.0728813,.302546,.0396819,.096103,-.081363,.317164,.04757,.106976,-.0904463,.331733,.0567012,.119175,-.100105,.34661,.067202,.132919,-.110375,.362249,.0792588,.147727,-.121115,.376978,.0928672,.163618,-.132299,.390681,.108228,.182234,-.143887,.406571,.125502,.201809,-.155827,.42042,.144836,.225041,-.168357,.438411,.166706,.247621,-.18004,.450368,.189909,.27097,-.191536,.460083,.215251,.296658,-.203024,.469765,.243164,.325892,-.214056,.481837,.273388,.35406,-.224104,.487474,.305344,.384372,-.233489,.492773,.339741,.41749,-.241874,.498451,.376287,.45013,-.248834,.499632,.414195,.481285,-.254658,.495233,.454077,.519183,-.259367,.496401,.496352,.551544,-.261818,.487686,.538798,.587349,-.262964,.479453,.583626,.621679,-.262128,.467709,.629451,.654991,-.258998,.452123,.67566,.686873,-.254119,.433495,.723248,.719801,-.246946,.413657,.771156,.750355,-.237709,.390366,.81989,.780033,-.226549,.364947,.868601,.809254,-.214186,.337256,.920034,.836576,-.199639,.307395,.971706,.861774,-.183169,.275431,1.02479,.885707,-.165111,.243431,1.07837,.904742,-.144363,.210921,1.12783,.915604,-.121305,.17647,1.17254,.930959,-.0962119,.143106,1.21012,.948404,-.069969,.108112,1.24474,.967012,-.0427586,.0708478,1.27718,.984183,-.0147043,.032335,1.3083,.999577,.0142165,-.00726867,1.3382,.0229227,-299799e-11,.148623,462391e-12,.0232194,-758796e-10,.15054,117033e-10,.0232315,-303636e-9,.15063,468397e-10,.0232354,-683189e-9,.150624,105472e-9,.0232092,-.0012136,.150445,187744e-9,.0232523,-.00189765,.150679,294847e-9,.0232828,-.00273247,.150789,428013e-9,.0233371,-.00371287,.150995,591134e-9,.0234015,-.00484794,.15118,787642e-9,.023514,-.00612877,.151562,.00102547,.023679,-.00756125,.152116,.00131351,.0239559,-.00914651,.153162,.00166594,.0244334,-.010904,.155133,.00210182,.025139,-.0128615,.158035,.00264406,.0262598,-.0150628,.162751,.00332923,.0277875,-.0175532,.168944,.00419773,.0298472,-.0203981,.176835,.00530034,.0325444,-.023655,.186686,.00669777,.0355581,-.0272982,.196248,.00842661,.0392841,-.0314457,.207352,.0105854,.0436815,-.0361157,.219279,.0132458,.0485272,-.0412932,.230728,.0164736,.0541574,-.0470337,.242994,.0203715,.0609479,-.0535002,.257042,.0250953,.0685228,-.0605409,.27102,.0306856,.0768042,-.0680553,.28406,.037193,.0864844,-.0765011,.299186,.0449795,.0969415,-.0852674,.3132,.0538316,.108478,-.0947333,.327138,.0641149,.121705,-.10481,.342345,.0759185,.136743,-.115474,.358472,.0894116,.152986,-.126536,.374067,.104562,.170397,-.138061,.388267,.121632,.191392,-.150203,.406467,.140996,.211566,-.161751,.418641,.161696,.233567,-.173407,.430418,.184557,.257769,-.185397,.44277,.210092,.28531,-.197048,.457191,.237827,.311726,-.20784,.464712,.267253,.340537,-.218345,.472539,.299332,.372921,-.228306,.482331,.333988,.402924,-.236665,.484378,.369722,.434475,-.244097,.484717,.407836,.469736,-.250547,.487093,.448465,.505045,-.25511,.485575,.490263,.540262,-.258444,.481225,.534495,.576347,-.259903,.473481,.579451,.608656,-.259572,.4603,.625604,.646679,-.257908,.450341,.674511,.679902,-.253663,.431561,.723269,.714159,-.247419,.412684,.773263,.745345,-.239122,.389388,.824182,.778248,-.228837,.365361,.876634,.807208,-.216197,.337667,.92945,.835019,-.201772,.307197,.985261,.860261,-.185291,.274205,1.04299,.877601,-.165809,.240178,1.09816,.898211,-.143897,.207571,1.14694,.915789,-.119513,.174904,1.19008,.931831,-.0932919,.141423,1.2297,.949244,-.0656528,.105603,1.26553,.967527,-.0370262,.0679551,1.29986,.984139,-.00730117,.0283133,1.33252,.999713,.0234648,-.0121785,1.36397,.0152135,-245447e-11,.122795,304092e-12,.0151652,-615778e-10,.122399,76292e-10,.0151181,-245948e-9,.122023,304802e-10,.0151203,-553394e-9,.12203,686634e-10,.015125,-983841e-9,.122037,122463e-9,.0151427,-.00153774,.12214,192706e-9,.0151708,-.0022103,.122237,281219e-9,.0152115,-.00300741,.12238,390804e-9,.0152877,-.00392494,.1227,526317e-9,.015412,-.00496597,.123244,69443e-8,.0156201,-.00613314,.124228,90547e-8,.0159658,-.00744113,.125945,.0011732,.0165674,-.00892546,.129098,.00151888,.017487,-.010627,.133865,.00197007,.018839,-.0126043,.140682,.0025637,.020554,-.0148814,.148534,.00333637,.0226727,-.0175123,.157381,.00433738,.0251879,-.0205266,.166685,.00561664,.0283635,-.0240319,.177796,.00725563,.0318694,-.0279432,.188251,.00928811,.0361044,-.0324313,.200038,.011835,.0406656,-.0373527,.210685,.0149146,.0463846,-.0430132,.224182,.0187254,.0525696,-.0491013,.23634,.0232283,.0598083,-.0559175,.250013,.0286521,.0679437,-.0633657,.263981,.0350634,.0771181,-.0714602,.278072,.0425882,.0881273,-.0803502,.29511,.0514487,.0996628,-.0896903,.309976,.0615766,.112702,-.099644,.325611,.0732139,.126488,-.109829,.339321,.0862324,.142625,-.120859,.35574,.101275,.15953,-.131956,.369845,.117892,.176991,-.143145,.38146,.136205,.199715,-.155292,.40052,.157252,.220787,-.167066,.412055,.179966,.243697,-.178396,.423133,.204418,.272106,-.190433,.439524,.232141,.297637,-.201265,.447041,.261109,.325273,-.211834,.454488,.292627,.357219,-.221889,.465004,.326669,.387362,-.230729,.468527,.362426,.423131,-.23924,.475836,.401533,.45543,-.246067,.475017,.441902,.493393,-.251557,.478017,.484239,.526253,-.255571,.4709,.528586,.560554,-.257752,.463167,.574346,.599306,-.258076,.456452,.621655,.634541,-.256471,.443725,.670492,.668907,-.253283,.428719,.721943,.705619,-.247562,.411348,.772477,.739034,-.240626,.388939,.8264,.771408,-.231493,.36425,.881702,.803312,-.220125,.337321,.9385,.828457,-.206645,.305364,.997437,.854819,-.190664,.273715,1.05693,.878666,-.171429,.242218,1.11251,.898404,-.149235,.209556,1.16398,.917416,-.12435,.176863,1.21014,.933133,-.0972703,.142775,1.25178,.95066,-.0683607,.106735,1.29028,.968589,-.0378724,.0681609,1.32703,.984776,-.00605712,.0273966,1.36158,.99994,.0263276,-.0138124,1.3943,.00867437,-186005e-11,.0928979,173682e-12,.00864003,-466389e-10,.0925237,435505e-11,.00864593,-186594e-9,.0925806,174322e-10,.00864095,-419639e-9,.0924903,392862e-10,.00863851,-746272e-9,.0924589,702598e-10,.00868531,-.00116456,.0929,111188e-9,.00869667,-.00167711,.0928529,163867e-9,.00874332,-.00228051,.0930914,23104e-8,.00882709,-.00297864,.0935679,31741e-8,.00898874,-.00377557,.0946165,430186e-9,.00929346,-.00469247,.0967406,580383e-9,.00978271,-.00575491,.100084,783529e-9,.0105746,-.00701514,.105447,.00106304,.0116949,-.00851797,.112494,.00144685,.0130419,-.0102757,.119876,.00196439,.0148375,-.012381,.129034,.00266433,.0168725,-.01482,.137812,.00358364,.0193689,-.0176563,.147696,.00478132,.0222691,-.0209211,.157795,.00631721,.0256891,-.0246655,.168431,.00826346,.0294686,-.0288597,.178587,.0106714,.0340412,-.0336441,.190251,.0136629,.0393918,-.039033,.202999,.0173272,.0453947,-.0450087,.215655,.0217448,.0521936,-.0515461,.228686,.0269941,.0600279,-.058817,.242838,.033272,.0692398,-.0667228,.258145,.0406457,.0793832,-.0752401,.273565,.0492239,.0902297,-.0841851,.287735,.0590105,.102014,-.0936479,.301161,.0702021,.116054,-.103967,.317438,.0832001,.13191,-.114622,.334166,.0977951,.148239,-.125452,.348192,.113985,.165809,-.136453,.361094,.131928,.184616,-.147648,.373534,.151811,.207491,-.159607,.39101,.174476,.230106,-.171119,.402504,.198798,.257036,-.182906,.418032,.225796,.281172,-.193605,.425468,.254027,.312034,-.204771,.440379,.285713,.340402,-.214988,.445406,.319196,.370231,-.224711,.44968,.35537,.407105,-.233516,.460747,.393838,.439037,-.240801,.460624,.433747,.47781,-.24762,.465957,.477234,.510655,-.251823,.460054,.52044,.550584,-.255552,.459172,.567853,.585872,-.257036,.450311,.615943,.620466,-.257535,.437763,.667693,.660496,-.255248,.426639,.718988,.695578,-.251141,.409185,.772503,.732176,-.244718,.39015,.827023,.760782,-.236782,.362594,.885651,.79422,-.225923,.33711,.943756,.824521,-.213855,.308272,1.00874,.854964,-.197723,.278529,1.06764,.878065,-.179209,.246208,1.12836,.899834,-.157569,.21329,1.18318,.918815,-.133206,.181038,1.23161,.934934,-.106545,.146993,1.27644,.952115,-.0780574,.111175,1.31842,.96906,-.0478279,.0728553,1.35839,.985178,-.0160014,.032579,1.39697,1.00039,.0173126,-.0095256,1.43312,.00384146,-124311e-11,.0613583,778271e-13,.00390023,-314043e-10,.0622919,196626e-11,.00389971,-125622e-9,.0622632,787379e-11,.00389491,-282352e-9,.0620659,1778e-8,.00391618,-502512e-9,.0624687,320918e-10,.00392662,-784458e-9,.0625113,515573e-10,.00396053,-.00112907,.0628175,778668e-10,.00401911,-.00153821,.0633286,113811e-9,.00414994,-.0020208,.0646443,16445e-8,.00441223,-.00260007,.0673886,237734e-9,.00484427,-.0033097,.0716528,345929e-9,.00549109,-.00418966,.0774998,505987e-9,.00636293,-.00527331,.0844758,739208e-9,.00746566,-.00660428,.0921325,.00107347,.00876625,-.00818826,.0997067,.00153691,.0103125,-.0100811,.107433,.00217153,.0123309,-.0123643,.117088,.00303427,.0146274,-.0150007,.126438,.00416018,.0172295,-.0180531,.135672,.00561513,.0204248,-.0215962,.146244,.007478,.0241597,-.0256234,.157481,.00981046,.0284693,-.0302209,.169125,.0127148,.033445,-.0353333,.181659,.0162453,.0391251,-.0410845,.1944,.0205417,.0454721,-.0473451,.207082,.0256333,.0530983,-.0542858,.221656,.0317036,.0615356,-.0618384,.236036,.0388319,.0703363,-.0697631,.248398,.046974,.0810391,-.0784757,.263611,.0565246,.0920144,-.0873488,.275857,.0671724,.105584,-.0973652,.292555,.0798105,.119506,-.107271,.306333,.0935945,.134434,-.117608,.318888,.109106,.153399,-.128938,.337552,.127074,.171258,-.139944,.349955,.14643,.191059,-.151288,.361545,.168,.215069,-.163018,.378421,.192082,.237838,-.174226,.38879,.217838,.266965,-.186063,.405857,.246931,.292827,-.196909,.414146,.277505,.324352,-.207473,.426955,.310711,.354427,-.217713,.433429,.346794,.389854,-.227183,.443966,.385237,.420749,-.235131,.44471,.424955,.459597,-.242786,.451729,.468446,.495316,-.248767,.45072,.513422,.534903,-.253351,.450924,.560618,.572369,-.256277,.445266,.609677,.612383,-.2576,.438798,.660995,.644037,-.256931,.421693,.713807,.686749,-.254036,.4109,.767616,.719814,-.249785,.390151,.82533,.754719,-.244283,.367847,.888311,.792022,-.235076,.345013,.948177,.822404,-.225061,.316193,1.01661,.853084,-.211113,.287013,1.08075,.879871,-.19449,.255424,1.14501,.901655,-.174023,.222879,1.20203,.919957,-.1509,.18989,1.25698,.938412,-.124923,.15606,1.30588,.953471,-.0968139,.120512,1.3529,.970451,-.066734,.0828515,1.3986,.985522,-.034734,.0424458,1.44148,1.00099,-.00102222,678929e-9,1.48398,965494e-9,-627338e-12,.0306409,197672e-13,99168e-8,-158573e-10,.0314638,499803e-12,991068e-9,-634012e-10,.031363,200682e-11,974567e-9,-14144e-8,.03036,457312e-11,998079e-9,-252812e-9,.031496,860131e-11,.00102243,-396506e-9,.0319955,148288e-10,.00107877,-577593e-9,.0331376,249141e-10,.00121622,-816816e-9,.0359396,423011e-10,.0014455,-.00113761,.0399652,724613e-10,.00178791,-.00156959,.0450556,123929e-9,.00225668,-.00214064,.0508025,208531e-9,.00285627,-.00287655,.0568443,341969e-9,.0035991,-.00380271,.0630892,544158e-9,.00455524,-.00496264,.0702204,842423e-9,.00569143,-.0063793,.0773426,.00126704,.00716928,-.00813531,.0860839,.00186642,.00885307,-.0101946,.0944079,.00267014,.0109316,-.0126386,.103951,.00374033,.0133704,-.0154876,.113786,.0051304,.0161525,-.0187317,.123477,.00688858,.0194267,-.0224652,.133986,.00910557,.0230967,-.0265976,.143979,.0118074,.0273627,-.0312848,.154645,.0151266,.0323898,-.0365949,.166765,.0191791,.0379225,-.0422914,.177932,.0239236,.0447501,-.0487469,.19167,.0296568,.0519391,-.0556398,.203224,.0362924,.0599464,-.0631646,.215652,.0440585,.0702427,-.0714308,.232089,.0531619,.0806902,-.0800605,.245258,.0634564,.0923194,-.0892815,.258609,.0752481,.106938,-.09931,.276654,.0888914,.121238,-.109575,.289847,.104055,.138817,-.120461,.307566,.121266,.15595,-.131209,.320117,.139944,.178418,-.143049,.339677,.161591,.197875,-.154074,.349886,.184303,.224368,-.166307,.369352,.210669,.252213,-.178051,.386242,.238895,.277321,-.189335,.395294,.269182,.310332,-.200683,.412148,.302508,.338809,-.210856,.418266,.337264,.372678,-.220655,.428723,.374881,.405632,-.230053,.433887,.415656,.442293,-.237993,.439911,.457982,.477256,-.244897,.440175,.502831,.515592,-.250657,.441079,.550277,.550969,-.255459,.435219,.601102,.592883,-.257696,.432882,.651785,.629092,-.259894,.421054,.708961,.672033,-.258592,.41177,.763806,.709147,-.256525,.395267,.824249,.745367,-.254677,.375013,.8951,.784715,-.247892,.353906,.959317,.818107,-.240162,.327801,1.03153,.847895,-.229741,.298821,1.10601,.879603,-.213084,.269115,1.164,.902605,-.195242,.236606,1.22854,.922788,-.174505,.203442,1.29017,.944831,-.150169,.169594,1.34157,.959656,-.124099,.135909,1.3956,.972399,-.0960626,.0990563,1.45128,.986549,-.0657097,.0602348,1.50312,1.00013,-.0333558,.0186694,1.55364,619747e-11,-1e-7,.00778326,796756e-16,237499e-13,-999999e-13,282592e-10,114596e-15,100292e-11,-166369e-11,250354e-9,677492e-14,350752e-11,-637769e-11,357289e-9,631655e-13,826445e-11,-174689e-10,516179e-9,31851e-11,242481e-10,-450868e-10,.0010223,130577e-11,455631e-10,-89044e-9,.00144302,374587e-11,971222e-10,-178311e-9,.00241912,102584e-10,171403e-9,-313976e-9,.00354938,236481e-10,292747e-9,-520026e-9,.00513765,496014e-10,789827e-9,-.00118187,.0238621,139056e-9,.00114093,-.00171827,.0286691,244093e-9,.00176119,-.00249667,.0368565,420623e-9,.0022233,-.00333742,.0400469,65673e-8,.00343382,-.00481976,.0535751,.00109323,.00427602,-.00600755,.057099,.00155268,.00461435,-.00737637,.0551084,.00215031,.00695698,-.00971401,.0715767,.00316529,.00867619,-.0120943,.0793314,.00436995,.0106694,-.0148202,.0869391,.0058959,.0140351,-.0183501,.101572,.00798757,.0168939,-.022006,.11018,.0104233,.020197,-.0261568,.119041,.0134167,.0254702,-.0312778,.135404,.0173009,.0298384,-.0362469,.1437,.0215428,.035159,-.042237,.15512,.0268882,.0427685,-.0488711,.17128,.033235,.0494848,-.0557997,.181813,.0404443,.0592394,-.0635578,.198745,.0490043,.0681463,-.071838,.210497,.0588239,.0804753,-.0809297,.228864,.0702835,.0942205,-.0906488,.247008,.0834012,.106777,-.100216,.258812,.0975952,.124471,-.110827,.278617,.114162,.138389,-.121193,.287049,.131983,.159543,-.13253,.307151,.152541,.176432,-.143611,.31564,.174673,.201723,-.15548,.33538,.199842,.229721,-.167166,.355256,.227097,.250206,-.178238,.360047,.256014,.282118,-.189905,.378761,.28855,.312821,-.201033,.39181,.323348,.341482,-.211584,.397716,.360564,.377368,-.221314,.410141,.400004,.418229,-.230474,.423485,.442371,.444881,-.239443,.418874,.488796,.488899,-.245987,.427545,.535012,.520317,-.253948,.422147,.589678,.568566,-.256616,.42719,.637683,.599607,-.26376,.415114,.703363,.64222,-.268687,.408715,.771363,.685698,-.2694,.399722,.83574,.732327,-.266642,.388651,.897764,.769873,-.267712,.369198,.983312,.806733,-.263479,.346802,1.06222,.843466,-.254575,.321368,1.13477,.873008,-.242749,.29211,1.20712,.908438,-.22725,.262143,1.27465,.936321,-.207621,.228876,1.33203,.950353,-.187932,.19484,1.40439,.96442,-.165154,.163178,1.4732,.979856,-.139302,.127531,1.53574,.982561,-.11134,.0903457,1.59982,.996389,-.0808124,.0489007,1.6577],t=[1,0,0,0,1,791421e-36,0,0,1,104392e-29,0,0,1,349405e-26,0,0,1,109923e-23,0,0,1,947414e-22,0,0,1,359627e-20,0,0,1,772053e-19,0,0,1,108799e-17,0,0,1,110655e-16,0,0,1,865818e-16,0,0,.999998,545037e-15,0,0,.999994,285095e-14,0,0,.999989,126931e-13,0,0,.999973,489938e-13,0,0,.999947,166347e-12,0,0,.999894,502694e-12,0,0,.999798,136532e-11,0,0,.999617,335898e-11,0,0,.999234,752126e-11,0,0,.998258,152586e-10,0,0,.99504,266207e-10,0,0,.980816,236802e-10,0,0,.967553,207684e-11,0,0,.966877,403733e-11,0,0,.965752,741174e-11,0,0,.96382,127746e-10,0,0,.960306,202792e-10,0,0,.953619,280232e-10,0,0,.941103,278816e-10,0,0,.926619,160221e-10,0,0,.920983,235164e-10,0,0,.912293,311924e-10,0,.0158731,.899277,348118e-10,0,.0476191,.880884,26041e-9,0,.0793651,.870399,338726e-10,0,.111111,.856138,392906e-10,0,.142857,.837436,372874e-10,0,.174603,.820973,392558e-10,0,.206349,.803583,434658e-10,0,.238095,.782168,40256e-9,0,.269841,.764107,448159e-10,0,.301587,.743092,457627e-10,0,.333333,.721626,455314e-10,0,.365079,.700375,477335e-10,0,.396825,.677334,461072e-10,0,.428571,.655702,484393e-10,0,.460317,.632059,464583e-10,0,.492064,.610125,483923e-10,0,.52381,.58653,464342e-10,0,.555556,.564508,477033e-10,0,.587302,.541405,459263e-10,0,.619048,.519556,46412e-9,0,.650794,.497292,448913e-10,0,.68254,.475898,445789e-10,0,.714286,.454722,433496e-10,0,.746032,.434042,423054e-10,0,.777778,.414126,413737e-10,0,.809524,.394387,397265e-10,0,.84127,.375841,390709e-10,0,.873016,.357219,369938e-10,0,.904762,.340084,365618e-10,0,.936508,.322714,342533e-10,0,.968254,.306974,339596e-10,0,1,1,101524e-23,0,0,1,10292e-22,0,0,1,130908e-23,0,0,1,473331e-23,0,0,1,625319e-22,0,0,1,107932e-20,0,0,1,163779e-19,0,0,1,203198e-18,0,0,1,204717e-17,0,0,.999999,168995e-16,0,0,.999998,115855e-15,0,0,.999996,66947e-14,0,0,.999991,330863e-14,0,0,.999983,141737e-13,0,0,.999968,532626e-13,0,0,.99994,177431e-12,0,0,.999891,528835e-12,0,0,.999797,142169e-11,0,0,.999617,347057e-11,0,0,.999227,77231e-10,0,0,.998239,155753e-10,0,0,.994937,268495e-10,0,0,.980225,213742e-10,0,0,.967549,21631e-10,0,0,.966865,417989e-11,0,0,.965739,763341e-11,0,0,.963794,130892e-10,0,0,.960244,206456e-10,0,0,.953495,282016e-10,0,148105e-9,.940876,271581e-10,0,.002454,.926569,164159e-10,0,.00867491,.920905,239521e-10,0,.01956,.912169,315127e-10,0,.035433,.899095,346626e-10,0,.056294,.882209,290223e-10,0,.0818191,.870272,342992e-10,0,.111259,.855977,394164e-10,0,.142857,.837431,372343e-10,0,.174603,.820826,396691e-10,0,.206349,.803408,435395e-10,0,.238095,.782838,419579e-10,0,.269841,.763941,450953e-10,0,.301587,.742904,455847e-10,0,.333333,.721463,458833e-10,0,.365079,.700197,477159e-10,0,.396825,.677501,470641e-10,0,.428571,.655527,484732e-10,0,.460317,.6324,476834e-10,0,.492064,.609964,484213e-10,0,.52381,.586839,475541e-10,0,.555556,.564353,476951e-10,0,.587302,.541589,467611e-10,0,.619048,.519413,463493e-10,0,.650794,.497337,453994e-10,0,.68254,.475797,445308e-10,0,.714286,.454659,435787e-10,0,.746032,.434065,424839e-10,0,.777778,.414018,41436e-9,0,.809524,.39455,401902e-10,0,.84127,.375742,390813e-10,0,.873016,.357501,377116e-10,0,.904762,.339996,36535e-9,0,.936508,.323069,351265e-10,0,.968254,.306897,339112e-10,0,1,1,10396e-19,0,0,1,104326e-20,0,0,1,110153e-20,0,0,1,144668e-20,0,0,1,34528e-19,0,0,1,175958e-19,0,0,1,12627e-17,0,0,1,936074e-18,0,0,1,645742e-17,0,0,.999998,401228e-16,0,0,.999997,222338e-15,0,0,.999995,10967e-13,0,0,.999991,482132e-14,0,0,.999981,189434e-13,0,0,.999967,667716e-13,0,0,.999938,212066e-12,0,0,.999886,60977e-11,0,0,.999792,159504e-11,0,0,.999608,381191e-11,0,0,.999209,833727e-11,0,0,.998179,165288e-10,0,0,.994605,274387e-10,0,0,.979468,167316e-10,0,0,.967529,242877e-11,0,0,.966836,461696e-11,0,0,.96569,830977e-11,0,0,.963706,140427e-10,0,244659e-11,.960063,217353e-10,0,760774e-9,.953113,286606e-10,0,.00367261,.940192,247691e-10,0,.00940263,.927731,195814e-10,0,.018333,.920669,252531e-10,0,.0306825,.911799,324277e-10,0,.0465556,.89857,340982e-10,0,.0659521,.883283,319622e-10,0,.0887677,.86989,35548e-9,0,.114784,.855483,397143e-10,0,.143618,.837987,391665e-10,0,.174606,.820546,411306e-10,0,.206349,.802878,436753e-10,0,.238095,.783402,444e-7,0,.269841,.763439,458726e-10,0,.301587,.742925,467097e-10,0,.333333,.721633,478887e-10,0,.365079,.69985,481251e-10,0,.396825,.67783,491811e-10,0,.428571,.655126,488199e-10,0,.460318,.632697,496025e-10,0,.492064,.609613,48829e-9,0,.52381,.587098,492754e-10,0,.555556,.564119,482625e-10,0,.587302,.541813,482807e-10,0,.619048,.519342,471552e-10,0,.650794,.497514,466765e-10,0,.68254,.475879,455582e-10,0,.714286,.454789,446007e-10,0,.746032,.434217,435382e-10,0,.777778,.414086,421753e-10,0,.809524,.394744,412093e-10,0,.84127,.375782,396634e-10,0,.873016,.357707,386419e-10,0,.904762,.340038,370345e-10,0,.936508,.323284,359725e-10,0,.968254,.306954,3436e-8,0,1,1,599567e-19,0,0,1,600497e-19,0,0,1,614839e-19,0,0,1,686641e-19,0,0,1,972658e-19,0,0,1,221271e-18,0,0,1,833195e-18,0,0,1,403601e-17,0,0,.999999,206001e-16,0,0,.999998,101739e-15,0,0,.999997,470132e-15,0,0,.999993,200436e-14,0,0,.999988,783682e-14,0,0,.999979,280338e-13,0,0,.999962,917033e-13,0,0,.999933,274514e-12,0,0,.999881,753201e-12,0,0,.999783,189826e-11,0,0,.999594,440279e-11,0,0,.999178,93898e-10,0,0,.998073,181265e-10,0,0,.993993,280487e-10,0,0,.979982,149422e-10,0,0,.968145,378481e-11,0,0,.966786,53771e-10,0,0,.965611,947508e-11,0,388934e-10,.963557,156616e-10,0,9693e-7,.959752,235144e-10,0,.00370329,.952461,291568e-10,0,.00868428,.940193,240102e-10,0,.0161889,.929042,231235e-10,0,.0263948,.920266,273968e-10,0,.0394088,.911178,337915e-10,0,.0552818,.897873,333629e-10,0,.0740138,.884053,351405e-10,0,.0955539,.869455,378034e-10,0,.119795,.854655,399378e-10,0,.14656,.838347,419108e-10,0,.175573,.820693,440831e-10,0,.206388,.802277,445599e-10,0,.238095,.783634,472691e-10,0,.269841,.763159,476984e-10,0,.301587,.742914,491487e-10,0,.333333,.721662,502312e-10,0,.365079,.699668,502817e-10,0,.396825,.677839,51406e-9,0,.428571,.655091,511095e-10,0,.460317,.632665,516067e-10,0,.492064,.609734,512255e-10,0,.52381,.587043,510263e-10,0,.555556,.564298,50565e-9,0,.587302,.541769,497951e-10,0,.619048,.519529,492698e-10,0,.650794,.497574,482066e-10,0,.68254,.476028,473689e-10,0,.714286,.454961,461941e-10,0,.746032,.434341,450618e-10,0,.777778,.414364,438355e-10,0,.809524,.394832,424196e-10,0,.84127,.376109,412563e-10,0,.873016,.35779,396226e-10,0,.904762,.340379,384886e-10,0,.936508,.323385,368214e-10,0,.968254,.307295,356636e-10,0,1,1,106465e-17,0,0,1,106555e-17,0,0,1,107966e-17,0,0,1,114601e-17,0,0,1,137123e-17,0,0,1,21243e-16,0,0,.999999,489653e-17,0,0,.999999,160283e-16,0,0,.999998,62269e-15,0,0,.999997,251859e-15,0,0,.999996,996192e-15,0,0,.999992,374531e-14,0,0,.999986,132022e-13,0,0,.999975,433315e-13,0,0,.999959,131956e-12,0,0,.999927,372249e-12,0,0,.999871,972461e-12,0,0,.999771,235343e-11,0,0,.999572,52768e-10,0,0,.999133,109237e-10,0,0,.997912,203675e-10,0,0,.993008,279396e-10,0,0,.980645,139604e-10,0,0,.970057,646596e-11,0,0,.966717,65089e-10,0,474145e-10,.965497,111863e-10,0,89544e-8,.96334,179857e-10,0,.0032647,.959294,259045e-10,0,.0075144,.951519,292327e-10,0,.0138734,.940517,249769e-10,0,.0224952,.93014,26803e-9,0,.0334828,.91972,303656e-10,0,.0468973,.910294,353323e-10,0,.0627703,.897701,351002e-10,0,.0811019,.884522,388104e-10,0,.10186,.869489,412932e-10,0,.124985,.853983,415781e-10,0,.150372,.838425,454066e-10,0,.177868,.820656,471624e-10,0,.207245,.801875,475243e-10,0,.238143,.783521,505621e-10,0,.269841,.763131,50721e-9,0,.301587,.74261,523293e-10,0,.333333,.72148,528699e-10,0,.365079,.699696,538677e-10,0,.396825,.677592,539255e-10,0,.428571,.65525,546367e-10,0,.460317,.632452,541348e-10,0,.492064,.609903,544976e-10,0,.52381,.586928,536201e-10,0,.555556,.564464,535185e-10,0,.587302,.541801,524949e-10,0,.619048,.519681,51812e-9,0,.650794,.497685,507687e-10,0,.68254,.47622,496243e-10,0,.714286,.455135,485714e-10,0,.746032,.4346,471847e-10,0,.777778,.414564,459294e-10,0,.809524,.395165,444705e-10,0,.84127,.376333,430772e-10,0,.873016,.358197,416229e-10,0,.904762,.34064,401019e-10,0,.936508,.323816,386623e-10,0,.968254,.307581,370933e-10,0,1,1,991541e-17,0,0,1,992077e-17,0,0,1,100041e-16,0,0,1,10385e-15,0,0,1,115777e-16,0,0,1,150215e-16,0,0,.999999,254738e-16,0,0,.999999,598822e-16,0,0,.999998,179597e-15,0,0,.999997,602367e-15,0,0,.999994,206835e-14,0,0,.99999,694952e-14,0,0,.999984,223363e-13,0,0,.999972,678578e-13,0,0,.999952,193571e-12,0,0,.999919,516594e-12,0,0,.99986,128739e-11,0,0,.999753,299298e-11,0,0,.999546,648258e-11,0,0,.999074,129985e-10,0,0,.997671,232176e-10,0,0,.991504,256701e-10,0,0,.981148,131141e-10,0,0,.971965,869048e-11,0,280182e-10,.966624,808301e-11,0,695475e-9,.965344,135235e-10,0,.00265522,.963048,210592e-10,0,.00622975,.958673,287473e-10,0,.0116234,.950262,281379e-10,0,.018976,.940836,271089e-10,0,.0283844,.930996,30926e-9,0,.0399151,.919848,348359e-10,0,.0536063,.909136,366092e-10,0,.0694793,.897554,384162e-10,0,.0875342,.884691,430971e-10,0,.107749,.869414,447803e-10,0,.130087,.853462,452858e-10,0,.154481,.838187,495769e-10,0,.180833,.820381,502709e-10,0,.209005,.801844,522713e-10,0,.238791,.783061,541505e-10,0,.269869,.763205,553712e-10,0,.301587,.742362,564909e-10,0,.333333,.721393,572646e-10,0,.365079,.699676,581012e-10,0,.396825,.677395,58096e-9,0,.428571,.655208,585766e-10,0,.460317,.632451,583602e-10,0,.492064,.609839,580234e-10,0,.52381,.587093,577161e-10,0,.555556,.564467,568447e-10,0,.587302,.542043,563166e-10,0,.619048,.519826,55156e-9,0,.650794,.497952,541682e-10,0,.68254,.476477,528971e-10,0,.714286,.455412,514952e-10,0,.746032,.434926,502222e-10,0,.777778,.4149,485779e-10,0,.809524,.395552,472242e-10,0,.84127,.376712,454891e-10,0,.873016,.358622,440924e-10,0,.904762,.341048,422984e-10,0,.936508,.324262,408582e-10,0,.968254,.308013,390839e-10,0,1,1,613913e-16,0,0,1,614145e-16,0,0,1,617708e-16,0,0,1,633717e-16,0,0,1,681648e-16,0,0,1,808291e-16,0,0,1,114608e-15,0,0,.999998,210507e-15,0,0,.999997,499595e-15,0,0,.999995,139897e-14,0,0,.999994,419818e-14,0,0,.999988,127042e-13,0,0,.999979,375153e-13,0,0,.999965,106206e-12,0,0,.999945,285381e-12,0,0,.999908,723611e-12,0,0,.999846,17255e-10,0,0,.999733,386104e-11,0,0,.999511,808493e-11,0,0,.998993,156884e-10,0,0,.997326,265538e-10,0,0,.989706,206466e-10,0,0,.981713,130756e-10,0,70005e-10,.973636,106473e-10,0,464797e-9,.966509,10194e-9,0,.00201743,.965149,165881e-10,0,.00497549,.962669,249147e-10,0,.00953262,.95786,317449e-10,0,.0158211,.949334,281045e-10,0,.0239343,.941041,303263e-10,0,.0339372,.931575,356754e-10,0,.0458738,.920102,397075e-10,0,.059772,.908002,384886e-10,0,.075645,.897269,43027e-9,0,.0934929,.884559,479925e-10,0,.113302,.869161,48246e-9,0,.135045,.853342,509505e-10,0,.158678,.837633,542846e-10,0,.184136,.820252,554139e-10,0,.211325,.801872,581412e-10,0,.240113,.782418,585535e-10,0,.270306,.7631,610923e-10,0,.301594,.742183,613678e-10,0,.333333,.721098,627275e-10,0,.365079,.699512,629413e-10,0,.396825,.677372,636351e-10,0,.428571,.655059,633555e-10,0,.460317,.632567,636513e-10,0,.492064,.609784,628965e-10,0,.52381,.587237,625546e-10,0,.555556,.564525,615825e-10,0,.587302,.542181,605048e-10,0,.619048,.520017,596329e-10,0,.650794,.498204,581516e-10,0,.68254,.476742,569186e-10,0,.714286,.455803,553833e-10,0,.746032,.435251,537807e-10,0,.777778,.415374,522025e-10,0,.809524,.395921,503421e-10,0,.84127,.377253,488211e-10,0,.873016,.359021,468234e-10,0,.904762,.341637,453269e-10,0,.936508,.3247,433014e-10,0,.968254,.308625,418007e-10,0,1,1,286798e-15,0,0,1,286877e-15,0,0,1,288094e-15,0,0,1,293506e-15,0,0,1,309262e-15,0,0,.999999,348593e-15,0,0,.999999,444582e-15,0,0,.999998,688591e-15,0,0,.999996,134391e-14,0,0,.999993,317438e-14,0,0,.999989,835609e-14,0,0,.999983,228677e-13,0,0,.999974,623361e-13,0,0,.999959,165225e-12,0,0,.999936,419983e-12,0,0,.999896,101546e-11,0,0,.99983,232376e-11,0,0,.999709,50156e-10,0,0,.999469,10167e-9,0,0,.998886,190775e-10,0,0,.996819,300511e-10,0,0,.988837,185092e-10,0,168222e-12,.982178,134622e-10,0,259622e-9,.975017,125961e-10,0,.00142595,.967101,13507e-9,0,.00382273,.964905,205003e-10,0,.00764164,.96218,29546e-9,0,.0130121,.956821,343738e-10,0,.0200253,.948829,305063e-10,0,.0287452,.941092,346487e-10,0,.039218,.931883,412061e-10,0,.0514748,.920211,444651e-10,0,.0655351,.907307,431252e-10,0,.0814082,.89684,490382e-10,0,.0990939,.884119,53334e-9,0,.118583,.869148,54114e-9,0,.139856,.853377,578536e-10,0,.162882,.836753,592285e-10,0,.187615,.820063,622787e-10,0,.213991,.801694,645492e-10,0,.241918,.782116,65353e-9,0,.271267,.762673,674344e-10,0,.301847,.742133,682788e-10,0,.333333,.720779,691959e-10,0,.365079,.699386,696817e-10,0,.396826,.67732,699583e-10,0,.428572,.654888,698447e-10,0,.460318,.632499,694063e-10,0,.492064,.609825,691612e-10,0,.52381,.587287,681576e-10,0,.555556,.564743,674138e-10,0,.587302,.542409,661617e-10,0,.619048,.520282,647785e-10,0,.650794,.498506,633836e-10,0,.68254,.477102,615905e-10,0,.714286,.456167,601013e-10,0,.746032,.435728,581457e-10,0,.777778,.415809,564215e-10,0,.809524,.396517,544997e-10,0,.84127,.377737,525061e-10,0,.873016,.359698,506831e-10,0,.904762,.342164,48568e-9,0,.936508,.325417,467826e-10,0,.968254,.309186,446736e-10,0,1,1,109018e-14,0,0,1,10904e-13,0,0,1,109393e-14,0,0,1,11095e-13,0,0,1,1154e-12,0,0,1,126089e-14,0,0,.999999,15059e-13,0,0,.999997,207899e-14,0,0,.999994,348164e-14,0,0,.999993,705728e-14,0,0,.999987,163692e-13,0,0,.999981,406033e-13,0,0,.999969,10245e-11,0,0,.999953,255023e-12,0,0,.999925,61511e-11,0,0,.999881,142218e-11,0,0,.99981,313086e-11,0,0,.99968,653119e-11,0,0,.999418,12832e-9,0,0,.998748,232497e-10,0,0,.996066,329522e-10,0,0,.988379,179613e-10,0,108799e-9,.982567,143715e-10,0,921302e-9,.976097,148096e-10,0,.00280738,.968475,178905e-10,0,.00596622,.964606,253921e-10,0,.0105284,.961564,348623e-10,0,.0165848,.955517,357612e-10,0,.0242,.948381,343493e-10,0,.03342,.941095,405849e-10,0,.0442777,.931923,475394e-10,0,.0567958,.91996,484328e-10,0,.0709879,.907419,502146e-10,0,.086861,.89618,561654e-10,0,.104415,.88337,587612e-10,0,.123643,.869046,618057e-10,0,.144531,.853278,657392e-10,0,.167057,.836091,66303e-9,0,.191188,.819644,704445e-10,0,.216878,.801246,714071e-10,0,.244062,.782031,740093e-10,0,.272649,.762066,74685e-9,0,.302509,.741964,766647e-10,0,.333442,.720554,766328e-10,0,.365079,.699098,777857e-10,0,.396826,.677189,774633e-10,0,.428572,.65484,776235e-10,0,.460318,.632496,770316e-10,0,.492064,.609908,762669e-10,0,.52381,.587312,753972e-10,0,.555556,.564938,739994e-10,0,.587302,.542577,728382e-10,0,.619048,.52062,71112e-9,0,.650794,.498819,694004e-10,0,.68254,.477555,675575e-10,0,.714286,.456568,653449e-10,0,.746032,.436278,636068e-10,0,.777778,.41637,613466e-10,0,.809524,.397144,594177e-10,0,.84127,.378412,570987e-10,0,.873016,.360376,550419e-10,0,.904762,.342906,527422e-10,0,.936508,.326136,506544e-10,0,.968254,.30997,484307e-10,0,1,1,354014e-14,0,0,1,354073e-14,0,0,1,354972e-14,0,0,1,358929e-14,0,0,1,370093e-14,0,0,.999999,396194e-14,0,0,.999998,453352e-14,0,0,.999997,578828e-14,0,0,.999994,863812e-14,0,0,.999991,153622e-13,0,0,.999985,316356e-13,0,0,.999977,712781e-13,0,0,.999964,166725e-12,0,0,.999945,390501e-12,0,0,.999912,895622e-12,0,0,.999866,198428e-11,0,0,.999786,421038e-11,0,0,.999647,850239e-11,0,0,.999356,162059e-10,0,0,.998563,282652e-10,0,0,.994928,336309e-10,0,244244e-10,.987999,178458e-10,0,523891e-9,.982893,159162e-10,0,.00194729,.977044,178056e-10,0,.00451099,.969972,230624e-10,0,.00835132,.964237,313922e-10,0,.013561,.960791,406145e-10,0,.0202056,.954292,372796e-10,0,.0283321,.948052,403199e-10,0,.0379739,.940938,479537e-10,0,.0491551,.931689,545292e-10,0,.0618918,.91987,54038e-9,0,.0761941,.907665,589909e-10,0,.0920672,.895281,642651e-10,0,.109511,.882621,659707e-10,0,.12852,.86873,709973e-10,0,.149085,.853008,742221e-10,0,.171189,.835944,761754e-10,0,.194809,.818949,797052e-10,0,.21991,.800951,812434e-10,0,.246447,.781847,838075e-10,0,.274352,.761649,84501e-9,0,.303535,.74152,860258e-10,0,.333857,.720495,866233e-10,0,.365104,.698742,868326e-10,0,.396826,.677096,87133e-9,0,.428572,.654782,863497e-10,0,.460318,.632335,860206e-10,0,.492064,.610031,849337e-10,0,.52381,.587457,838279e-10,0,.555556,.56513,82309e-9,0,.587302,.542877,803542e-10,0,.619048,.5209,786928e-10,0,.650794,.499291,765171e-10,0,.68254,.477971,744753e-10,0,.714286,.457221,72209e-9,0,.746032,.436803,697448e-10,0,.777778,.417083,675333e-10,0,.809524,.397749,648058e-10,0,.84127,.379177,625759e-10,0,.873016,.361061,598584e-10,0,.904762,.343713,575797e-10,0,.936508,.326894,549999e-10,0,.968254,.310816,527482e-10,0,1,1,10153e-12,0,0,1,101544e-13,0,0,1,101751e-13,0,0,1,102662e-13,0,0,1,10521e-12,0,0,.999999,111049e-13,0,0,.999999,123408e-13,0,0,.999996,14924e-12,0,0,.999992,204471e-13,0,0,.999989,326539e-13,0,0,.99998,603559e-13,0,0,.999971,123936e-12,0,0,.999955,269058e-12,0,0,.999933,593604e-12,0,0,.999901,129633e-11,0,0,.999847,275621e-11,0,0,.999761,564494e-11,0,0,.999607,110485e-10,0,0,.999282,204388e-10,0,0,.99831,341084e-10,0,22038e-11,.993288,294949e-10,0,242388e-9,.987855,192736e-10,0,.0012503,.983167,182383e-10,0,.0032745,.977908,218633e-10,0,.00646321,.971194,290662e-10,0,.0109133,.963867,386401e-10,0,.0166927,.95982,462827e-10,0,.0238494,.953497,420705e-10,0,.0324178,.947621,477743e-10,0,.0424225,.940611,568258e-10,0,.0538808,.931174,618061e-10,0,.0668047,.919919,627098e-10,0,.0812014,.907856,694714e-10,0,.0970745,.894509,735008e-10,0,.114424,.881954,763369e-10,0,.133246,.868309,821896e-10,0,.153534,.852511,83769e-9,0,.175275,.835821,881615e-10,0,.198453,.817981,896368e-10,0,.223042,.800504,930906e-10,0,.249009,.78141,945056e-10,0,.276304,.761427,963605e-10,0,.304862,.74094,968088e-10,0,.334584,.720233,981481e-10,0,.365322,.698592,979122e-10,0,.396826,.676763,981057e-10,0,.428571,.654808,973956e-10,0,.460318,.632326,962619e-10,0,.492064,.610049,952996e-10,0,.52381,.58763,933334e-10,0,.555556,.565261,917573e-10,0,.587302,.543244,896636e-10,0,.619048,.521273,873304e-10,0,.650794,.499818,852648e-10,0,.68254,.478536,823961e-10,0,.714286,.457826,79939e-9,0,.746032,.437549,77126e-9,0,.777778,.41776,743043e-10,0,.809524,.39863,716426e-10,0,.84127,.379954,686456e-10,0,.873016,.362025,660514e-10,0,.904762,.344581,630755e-10,0,.936508,.327909,605439e-10,0,.968254,.311736,576345e-10,0,1,1,263344e-13,0,0,1,263373e-13,0,0,1,263815e-13,0,0,1,265753e-13,0,0,1,271132e-13,0,0,.999999,283279e-13,0,0,.999997,30833e-12,0,0,.999995,358711e-13,0,0,.999992,461266e-13,0,0,.999985,67574e-12,0,0,.999977,11358e-11,0,0,.999966,213657e-12,0,0,.999948,431151e-12,0,0,.999923,896656e-12,0,0,.999884,186603e-11,0,0,.999826,381115e-11,0,0,.999732,754184e-11,0,0,.999561,143192e-10,0,0,.999191,257061e-10,0,0,.997955,405724e-10,0,744132e-10,.992228,276537e-10,0,716477e-9,.987638,208885e-10,0,.0022524,.983395,215226e-10,0,.00484816,.978614,270795e-10,0,.00860962,.972389,365282e-10,0,.0136083,.964392,474747e-10,0,.0198941,.95861,509141e-10,0,.0275023,.952806,48963e-9,0,.0364584,.94712,571119e-10,0,.04678,.940104,671704e-10,0,.0584799,.930398,687586e-10,0,.0715665,.919866,738161e-10,0,.086045,.907853,813235e-10,0,.101918,.894078,834582e-10,0,.119186,.881177,892093e-10,0,.137845,.867575,944548e-10,0,.157891,.852107,969607e-10,0,.179316,.835502,101456e-9,0,.202106,.81756,103256e-9,0,.226243,.79984,106954e-9,0,.251704,.780998,108066e-9,0,.278451,.761132,110111e-9,0,.306436,.740429,110459e-9,0,.335586,.719836,111219e-9,0,.365796,.698467,11145e-8,0,.3969,.676446,110393e-9,0,.428571,.654635,110035e-9,0,.460318,.632411,108548e-9,0,.492064,.609986,106963e-9,0,.52381,.587872,105238e-9,0,.555556,.565528,102665e-9,0,.587302,.543563,100543e-9,0,.619048,.52176,976182e-10,0,.650794,.500188,947099e-10,0,.68254,.479204,919929e-10,0,.714286,.458413,886139e-10,0,.746032,.438314,857839e-10,0,.777778,.418573,82411e-9,0,.809524,.39947,792211e-10,0,.84127,.380892,759546e-10,0,.873016,.362953,727571e-10,0,.904762,.345601,695738e-10,0,.936508,.328895,664907e-10,0,.968254,.312808,634277e-10,0,1,1,628647e-13,0,0,1,628705e-13,0,0,1,629587e-13,0,0,1,633441e-13,0,0,.999999,644087e-13,0,0,.999998,667856e-13,0,0,.999997,715889e-13,0,0,.999995,809577e-13,0,0,.999989,992764e-13,0,0,.999983,135834e-12,0,0,.999974,210482e-12,0,0,.999959,365215e-12,0,0,.999939,686693e-12,0,0,.999911,13472e-10,0,0,.999868,26731e-10,0,0,.999804,524756e-11,0,0,.9997,100403e-10,0,0,.99951,185019e-10,0,0,.999078,322036e-10,0,620676e-11,.997428,470002e-10,0,341552e-9,.99162,287123e-10,0,.00143727,.987479,234706e-10,0,.00349201,.983582,260083e-10,0,.0066242,.979186,337927e-10,0,.0109113,.97325,454689e-10,0,.0164064,.965221,573759e-10,0,.0231463,.957262,544114e-10,0,.0311571,.952211,587006e-10,0,.0404572,.946631,692256e-10,0,.0510592,.939391,787819e-10,0,.0629723,.929795,792368e-10,0,.0762025,.91965,875075e-10,0,.090753,.907737,950903e-10,0,.106626,.893899,972963e-10,0,.123822,.880239,10459e-8,0,.142337,.866562,107689e-9,0,.16217,.85164,113081e-9,0,.183314,.835021,116636e-9,0,.20576,.817311,120074e-9,0,.229496,.798845,121921e-9,0,.254502,.780479,12475e-8,0,.280753,.760694,125255e-9,0,.308212,.740142,126719e-9,0,.336825,.719248,12636e-8,0,.366517,.698209,126712e-9,0,.397167,.676398,125769e-9,0,.428578,.654378,124432e-9,0,.460318,.632484,123272e-9,0,.492064,.610113,12085e-8,0,.52381,.587931,118411e-9,0,.555556,.565872,11569e-8,0,.587302,.543814,112521e-9,0,.619048,.522265,109737e-9,0,.650794,.500835,106228e-9,0,.68254,.479818,102591e-9,0,.714286,.459258,991288e-10,0,.746032,.439061,952325e-10,0,.777778,.419552,91895e-9,0,.809524,.400399,879051e-10,0,.84127,.381976,844775e-10,0,.873016,.364009,806316e-10,0,.904762,.346761,771848e-10,0,.936508,.330049,735429e-10,0,.968254,.314018,702103e-10,0,1,1,139968e-12,0,0,1,139979e-12,0,0,1,140145e-12,0,0,1,14087e-11,0,0,.999999,142865e-12,0,0,.999998,147279e-12,0,0,.999997,156057e-12,0,0,.999992,17276e-11,0,0,.999989,204352e-12,0,0,.99998,26494e-11,0,0,.999969,383435e-12,0,0,.999953,618641e-12,0,0,.999929,108755e-11,0,0,.999898,201497e-11,0,0,.999849,381346e-11,0,0,.999778,719815e-11,0,0,.999661,133215e-10,0,0,.999451,238313e-10,0,0,.998936,401343e-10,0,113724e-9,.99662,517346e-10,0,820171e-9,.991094,304323e-10,0,.00238143,.987487,281757e-10,0,.00493527,.983731,320048e-10,0,.00856859,.979647,423905e-10,0,.0133393,.973837,562935e-10,0,.0192863,.96584,677442e-10,0,.0264369,.956309,623073e-10,0,.03481,.951523,704131e-10,0,.0444184,.946003,836594e-10,0,.0552713,.938454,911736e-10,0,.0673749,.929279,938264e-10,0,.0807329,.919239,103754e-9,0,.0953479,.907293,109928e-9,0,.111221,.893936,115257e-9,0,.128352,.879674,122265e-9,0,.14674,.865668,125733e-9,0,.166382,.850998,132305e-9,0,.187276,.834498,134844e-9,0,.209413,.816903,139276e-9,0,.232786,.798235,140984e-9,0,.257382,.779724,14378e-8,0,.283181,.760251,144623e-9,0,.310156,.739808,145228e-9,0,.338269,.718762,14539e-8,0,.367461,.697815,144432e-9,0,.397646,.67631,143893e-9,0,.428685,.654278,141846e-9,0,.460318,.632347,13935e-8,0,.492064,.610296,137138e-9,0,.52381,.588039,133806e-9,0,.555556,.566218,130755e-9,0,.587302,.544346,127128e-9,0,.619048,.522701,123002e-9,0,.650794,.501542,119443e-9,0,.68254,.480508,115055e-9,0,.714286,.460092,111032e-9,0,.746032,.440021,106635e-9,0,.777778,.420446,102162e-9,0,.809524,.401512,98184e-9,0,.84127,.38299,936497e-10,0,.873016,.365232,89813e-9,0,.904762,.347865,853073e-10,0,.936508,.331342,817068e-10,0,.968254,.315202,773818e-10,0,1,1,29368e-11,0,0,1,2937e-10,0,0,1,293998e-12,0,0,1,295298e-12,0,0,.999999,298865e-12,0,0,.999998,3067e-10,0,0,.999995,322082e-12,0,0,.999992,350767e-12,0,0,.999986,403538e-12,0,0,.999976,501372e-12,0,0,.999964,68562e-11,0,0,.999945,10374e-10,0,0,.999919,171269e-11,0,0,.999882,300175e-11,0,0,.999829,542144e-11,0,0,.999749,984182e-11,0,0,.99962,176213e-10,0,0,.999382,305995e-10,0,138418e-10,.998751,496686e-10,0,389844e-9,.995344,510733e-10,0,.00150343,.990768,345829e-10,0,.00352451,.987464,342841e-10,0,.00655379,.983846,399072e-10,0,.0106554,.980007,533219e-10,0,.0158723,.974494,696992e-10,0,.0222333,.96622,776754e-10,0,.029758,.956273,747718e-10,0,.0384596,.950952,864611e-10,0,.0483473,.945215,100464e-9,0,.0594266,.937287,103729e-9,0,.0717019,.928649,111665e-9,0,.0851752,.918791,12353e-8,0,.0998479,.906685,127115e-9,0,.115721,.893706,13628e-8,0,.132794,.879248,142427e-9,0,.151067,.864685,148091e-9,0,.170538,.850032,153517e-9,0,.191204,.833853,157322e-9,0,.213063,.816353,161086e-9,0,.236107,.797834,164111e-9,0,.260329,.778831,165446e-9,0,.285714,.759756,167492e-9,0,.312243,.739419,166928e-9,0,.339887,.718491,167e-6,0,.368604,.697392,165674e-9,0,.398329,.676102,163815e-9,0,.428961,.654243,162003e-9,0,.460331,.632176,158831e-9,0,.492064,.610407,155463e-9,0,.52381,.588394,152062e-9,0,.555556,.56645,147665e-9,0,.587302,.5449,14375e-8,0,.619048,.523276,138905e-9,0,.650794,.502179,134189e-9,0,.68254,.481359,129392e-9,0,.714286,.46092,124556e-9,0,.746032,.441084,11957e-8,0,.777778,.421517,114652e-9,0,.809524,.402721,109688e-9,0,.84127,.384222,104667e-9,0,.873016,.366534,999633e-10,0,.904762,.349205,950177e-10,0,.936508,.332702,907301e-10,0,.968254,.316599,859769e-10,0,1,1,585473e-12,0,0,1,585507e-12,0,0,1,58602e-11,0,0,.999999,588259e-12,0,0,.999999,594381e-12,0,0,.999998,607754e-12,0,0,.999995,633729e-12,0,0,.99999,68137e-11,0,0,.999984,767003e-12,0,0,.999973,921212e-12,0,0,.999959,120218e-11,0,0,.999936,172024e-11,0,0,.999907,268088e-11,0,0,.999866,445512e-11,0,0,.999806,768481e-11,0,0,.999716,1342e-8,0,0,.999576,232473e-10,0,0,.9993,391694e-10,0,129917e-9,.998498,608429e-10,0,845035e-9,.994132,489743e-10,0,.00237616,.99031,384644e-10,0,.00484456,.987409,421768e-10,0,.00832472,.983981,504854e-10,0,.0128643,.980268,671028e-10,0,.0184947,.974875,852749e-10,0,.025237,.966063,85531e-9,0,.0331046,.956779,900588e-10,0,.0421067,.950259,10577e-8,0,.0522487,.944239,119458e-9,0,.0635343,.936341,122164e-9,0,.0759654,.928047,134929e-9,0,.0895434,.918065,145544e-9,0,.104269,.906267,150531e-9,0,.120142,.893419,161652e-9,0,.137163,.878758,16593e-8,0,.15533,.863699,174014e-9,0,.174645,.848876,177877e-9,0,.195106,.833032,184049e-9,0,.21671,.815557,186088e-9,0,.239454,.797323,19054e-8,0,.263332,.778124,191765e-9,0,.288336,.758929,192535e-9,0,.314451,.738979,192688e-9,0,.341658,.718213,191522e-9,0,.369924,.696947,190491e-9,0,.399202,.675807,187913e-9,0,.429416,.654147,184451e-9,0,.460447,.63229,181442e-9,0,.492064,.610499,177139e-9,0,.523809,.588747,172596e-9,0,.555555,.566783,167457e-9,0,.587301,.545359,162518e-9,0,.619048,.523984,156818e-9,0,.650794,.502917,151884e-9,0,.68254,.482294,145514e-9,0,.714286,.461945,140199e-9,0,.746032,.442133,134101e-9,0,.777778,.422705,128374e-9,0,.809524,.403916,122996e-9,0,.84127,.38554,116808e-9,0,.873016,.367909,111973e-9,0,.904762,.350651,105938e-9,0,.936508,.334208,101355e-9,0,.968254,.318123,957629e-10,0,1,1,111633e-11,0,0,1,111639e-11,0,0,1,111725e-11,0,0,1,112096e-11,0,0,.999999,11311e-10,0,0,.999997,115315e-11,0,0,.999995,11956e-10,0,0,.999989,127239e-11,0,0,.999981,140772e-11,0,0,.999969,164541e-11,0,0,.999952,206607e-11,0,0,.999928,281783e-11,0,0,.999895,416835e-11,0,0,.999848,658728e-11,0,0,.999781,108648e-10,0,0,.999682,182579e-10,0,0,.999523,306003e-10,0,159122e-10,.999205,499862e-10,0,391184e-9,.998131,73306e-9,0,.00147534,.993334,513229e-10,0,.0034227,.99016,467783e-10,0,.00632232,.987321,523413e-10,0,.0102295,.984099,64267e-9,0,.0151794,.980432,843042e-10,0,.0211947,.974976,102819e-9,0,.0282899,.966429,996234e-10,0,.0364739,.957633,111074e-9,0,.0457522,.949422,128644e-9,0,.0561278,.943045,140076e-9,0,.0676023,.935448,146349e-9,0,.0801762,.927225,161854e-9,0,.0938499,.917033,169135e-9,0,.108623,.905762,179987e-9,0,.124496,.892879,189832e-9,0,.141469,.878435,195881e-9,0,.159541,.863114,20466e-8,0,.178713,.84776,209473e-9,0,.198985,.832084,214861e-9,0,.220355,.814915,217695e-9,0,.242823,.796711,220313e-9,0,.266385,.777603,22313e-8,0,.291036,.757991,222471e-9,0,.316767,.738371,222869e-9,0,.343563,.717872,221243e-9,0,.371402,.696619,218089e-9,0,.400248,.675379,21562e-8,0,.430047,.65411,21169e-8,0,.460709,.63241,206947e-9,0,.492079,.61046,201709e-9,0,.52381,.58903,196753e-9,0,.555556,.567267,189637e-9,0,.587302,.545886,184735e-9,0,.619048,.524714,177257e-9,0,.650794,.503789,171424e-9,0,.68254,.483204,164688e-9,0,.714286,.462976,157172e-9,0,.746032,.443294,151341e-9,0,.777778,.423988,143737e-9,0,.809524,.405325,138098e-9,0,.84127,.386981,130698e-9,0,.873016,.369436,125276e-9,0,.904762,.35219,118349e-9,0,.936508,.335804,11312e-8,0,.968254,.319749,106687e-9,0,1,1,204685e-11,0,0,1,204694e-11,0,0,1,204831e-11,0,0,.999999,205428e-11,0,0,.999999,207056e-11,0,0,.999997,210581e-11,0,0,.999993,21732e-10,0,0,.999987,229365e-11,0,0,.999979,250243e-11,0,0,.999965,286127e-11,0,0,.999947,348028e-11,0,0,.999918,455588e-11,0,0,.999881,643303e-11,0,0,.999828,970064e-11,0,0,.999753,153233e-10,0,0,.999642,24793e-9,0,0,.999464,402032e-10,0,122947e-9,.999089,635852e-10,0,807414e-9,.997567,857026e-10,0,.00227206,.992903,594912e-10,0,.00462812,.990011,578515e-10,0,.00794162,.987192,65399e-9,0,.0122534,.98418,819675e-10,0,.0175888,.980491,105514e-9,0,.0239635,.974779,121532e-9,0,.031387,.96675,119144e-9,0,.0398644,.958248,136125e-9,0,.0493982,.948884,155408e-9,0,.0599896,.941673,162281e-9,0,.0716382,.934521,176754e-9,0,.0843437,.926205,192873e-9,0,.0981056,.916089,200038e-9,0,.112923,.904963,213624e-9,0,.128796,.892089,221834e-9,0,.145725,.878028,232619e-9,0,.163709,.86249,238632e-9,0,.182749,.846587,247002e-9,0,.202847,.830988,250702e-9,0,.224001,.814165,255562e-9,0,.246214,.796135,257505e-9,0,.269482,.777052,258625e-9,0,.293805,.757201,258398e-9,0,.319176,.737655,256714e-9,0,.345587,.717477,255187e-9,0,.373021,.696433,251792e-9,0,.401454,.675084,247223e-9,0,.430844,.653907,242213e-9,0,.461125,.632561,237397e-9,0,.492187,.610658,229313e-9,0,.52381,.589322,224402e-9,0,.555556,.567857,216116e-9,0,.587302,.54652,209124e-9,0,.619048,.525433,201601e-9,0,.650794,.504679,192957e-9,0,.68254,.484203,186052e-9,0,.714286,.464203,177672e-9,0,.746032,.444549,170005e-9,0,.777778,.425346,162401e-9,0,.809524,.406706,1544e-7,0,.84127,.388576,147437e-9,0,.873016,.37094,139493e-9,0,.904762,.353996,133219e-9,0,.936508,.337391,125573e-9,0,.968254,.321648,119867e-9,0,1,1,362511e-11,0,0,1,362525e-11,0,0,1,362739e-11,0,0,.999999,363673e-11,0,0,.999998,366214e-11,0,0,.999996,371698e-11,0,0,.999992,382116e-11,0,0,.999986,400554e-11,0,0,.999976,432058e-11,0,0,.999961,485194e-11,0,0,.999938,574808e-11,0,0,.999908,726643e-11,0,0,.999865,984707e-11,0,0,.999807,142217e-10,0,0,.999723,215581e-10,0,0,.999602,336114e-10,0,119113e-10,.999398,527353e-10,0,355813e-9,.998946,805809e-10,0,.00137768,.996647,942908e-10,0,.00322469,.992298,668733e-10,0,.00597897,.989802,716564e-10,0,.00968903,.987019,821355e-10,0,.0143845,.984219,104555e-9,0,.0200831,.980425,131245e-9,0,.0267948,.974241,139613e-9,0,.034525,.967006,145931e-9,0,.0432757,.95893,167153e-9,0,.0530471,.949157,188146e-9,0,.0638386,.94062,194625e-9,0,.0756487,.933509,213721e-9,0,.0884762,.925088,229616e-9,0,.10232,.915178,239638e-9,0,.117178,.904093,254814e-9,0,.133051,.891337,263685e-9,0,.149939,.877326,274789e-9,0,.167841,.861794,280534e-9,0,.18676,.845758,289534e-9,0,.206696,.829792,294446e-9,0,.22765,.813037,296877e-9,0,.249625,.795285,300217e-9,0,.27262,.776323,299826e-9,0,.296636,.756673,299787e-9,0,.321671,.736856,297867e-9,0,.347718,.716883,294052e-9,0,.374768,.696089,289462e-9,0,.402804,.67505,285212e-9,0,.431796,.653509,27653e-8,0,.461695,.63258,271759e-9,0,.49242,.61104,262811e-9,0,.523822,.589567,255151e-9,0,.555556,.568322,246434e-9,0,.587302,.547235,237061e-9,0,.619048,.52616,228343e-9,0,.650794,.505716,219236e-9,0,.68254,.485274,209595e-9,0,.714286,.465411,201011e-9,0,.746032,.445854,19109e-8,0,.777778,.426911,182897e-9,0,.809524,.408222,173569e-9,0,.84127,.390307,165496e-9,0,.873016,.372624,156799e-9,0,.904762,.355804,14917e-8,0,.936508,.33924,140907e-9,0,.968254,.323534,134062e-9,0,1,1,622487e-11,0,0,1,62251e-10,0,0,1,622837e-11,0,0,.999999,624259e-11,0,0,.999998,628127e-11,0,0,.999996,636451e-11,0,0,.999991,65218e-10,0,0,.999984,679782e-11,0,0,.999973,726361e-11,0,0,.999955,803644e-11,0,0,.999931,931397e-11,0,0,.999896,114299e-10,0,0,.999847,149402e-10,0,0,.999784,207461e-10,0,0,.999692,302493e-10,0,0,.999554,454957e-10,0,997275e-10,.999326,690762e-10,0,724813e-9,.998757,101605e-9,0,.0020972,.995367,958745e-10,0,.00432324,.99209,832808e-10,0,.00746347,.989517,887601e-10,0,.0115534,.987008,10564e-8,0,.0166134,.98421,133179e-9,0,.0226552,.98021,161746e-9,0,.0296838,.973676,161821e-9,0,.0377016,.967052,178635e-9,0,.0467079,.959385,206765e-9,0,.0567013,.949461,22476e-8,0,.0676796,.939578,23574e-8,0,.0796403,.932416,25893e-8,0,.0925812,.923759,271228e-9,0,.106501,.914223,289165e-9,0,.121397,.902942,301156e-9,0,.13727,.890419,313852e-9,0,.15412,.876639,324408e-9,0,.171946,.861316,33249e-8,0,.190751,.84496,338497e-9,0,.210537,.828427,345861e-9,0,.231305,.811871,347863e-9,0,.253057,.794397,350225e-9,0,.275797,.775726,349915e-9,0,.299525,.75617,347297e-9,0,.324242,.736091,344232e-9,0,.349947,.716213,340835e-9,0,.376633,.695736,332369e-9,0,.404289,.674961,327943e-9,0,.432895,.653518,318533e-9,0,.462415,.632574,310391e-9,0,.492788,.61134,300755e-9,0,.523909,.590017,290506e-9,0,.555556,.568752,280446e-9,0,.587302,.548061,269902e-9,0,.619048,.52711,258815e-9,0,.650794,.506682,248481e-9,0,.68254,.486524,237141e-9,0,.714286,.466812,226872e-9,0,.746032,.44732,216037e-9,0,.777778,.428473,205629e-9,0,.809524,.409921,195691e-9,0,.84127,.392028,185457e-9,0,.873016,.374606,176436e-9,0,.904762,.357601,166508e-9,0,.936508,.341348,158385e-9,0,.968254,.32542,149203e-9,0,1,1,103967e-10,0,0,1,10397e-9,0,0,1,104019e-10,0,0,.999999,104231e-10,0,0,.999998,104806e-10,0,0,.999995,106042e-10,0,0,.999991,108366e-10,0,0,.999982,112415e-10,0,0,.999968,119174e-10,0,0,.99995,130227e-10,0,0,.999922,148176e-10,0,0,.999884,177303e-10,0,0,.99983,224564e-10,0,0,.999758,300966e-10,0,0,.999654,423193e-10,0,549083e-11,.999503,614848e-10,0,296087e-9,.999237,903576e-10,0,.00123144,.998491,1271e-7,0,.00295954,.994594,107754e-9,0,.00555829,.99178,103025e-9,0,.00907209,.989265,11154e-8,0,.0135257,.986998,136296e-9,0,.0189327,.984137,169154e-9,0,.0252993,.979798,196671e-9,0,.0326272,.97337,196678e-9,0,.0409157,.967239,223121e-9,0,.0501623,.959543,253809e-9,0,.0603638,.949466,265972e-9,0,.0715171,.939074,288372e-9,0,.0836187,.931118,310983e-9,0,.0966657,.922525,325561e-9,0,.110656,.912983,345725e-9,0,.125588,.901617,3556e-7,0,.141461,.889487,374012e-9,0,.158275,.875787,383445e-9,0,.176031,.860654,393972e-9,0,.19473,.844417,400311e-9,0,.214374,.82741,405004e-9,0,.234967,.810545,407378e-9,0,.256512,.793312,407351e-9,0,.279011,.774847,406563e-9,0,.302468,.755621,404903e-9,0,.326887,.735511,397486e-9,0,.352266,.715435,39357e-8,0,.378605,.695403,384739e-9,0,.405897,.674681,376108e-9,0,.43413,.65359,365997e-9,0,.463277,.632471,354957e-9,0,.493295,.61151,343593e-9,0,.524106,.59064,331841e-9,0,.555561,.569386,318891e-9,0,.587302,.548785,3072e-7,0,.619048,.528146,29361e-8,0,.650794,.507872,281709e-9,0,.68254,.487805,268627e-9,0,.714286,.468196,255887e-9,0,.746032,.448922,243997e-9,0,.777778,.430093,231662e-9,0,.809524,.411845,220339e-9,0,.84127,.393808,208694e-9,0,.873016,.376615,198045e-9,0,.904762,.359655,187375e-9,0,.936508,.343452,177371e-9,0,.968254,.32765,167525e-9,0,1,1,169351e-10,0,0,1,169356e-10,0,0,1,169427e-10,0,0,.999999,169736e-10,0,0,.999998,170575e-10,0,0,.999995,172372e-10,0,0,.99999,175739e-10,0,0,.999979,181568e-10,0,0,.999966,191206e-10,0,0,.999944,20677e-9,0,0,.999912,231644e-10,0,0,.999869,271268e-10,0,0,.999811,334272e-10,0,0,.99973,433979e-10,0,0,.999617,590083e-10,0,680315e-10,.999445,829497e-10,0,612796e-9,.999138,118019e-9,0,.00187408,.998095,156712e-9,0,.00395791,.993919,125054e-9,0,.00692144,.991333,126091e-9,0,.0107962,.989226,144912e-9,0,.0155986,.986954,175737e-9,0,.0213364,.983982,213883e-9,0,.0280114,.979128,234526e-9,0,.0356226,.973327,243725e-9,0,.0441668,.967416,2773e-7,0,.0536399,.959729,308799e-9,0,.0640376,.949758,322447e-9,0,.0753554,.939173,350021e-9,0,.0875893,.9296,370089e-9,0,.100736,.921181,391365e-9,0,.114793,.91164,413636e-9,0,.129759,.900435,427068e-9,0,.145632,.888183,441046e-9,0,.162412,.874772,454968e-9,0,.180101,.859566,461882e-9,0,.1987,.843579,471556e-9,0,.218213,.826453,474335e-9,0,.238641,.809164,477078e-9,0,.259989,.792179,47755e-8,0,.282262,.773866,472573e-9,0,.305464,.754944,469765e-9,0,.329599,.735133,462371e-9,0,.35467,.714858,453674e-9,0,.380678,.694829,443888e-9,0,.407622,.674453,432052e-9,0,.435493,.653685,420315e-9,0,.464275,.632666,406829e-9,0,.493938,.611676,392234e-9,0,.524422,.591193,379208e-9,0,.555624,.570145,36319e-8,0,.587302,.549566,349111e-9,0,.619048,.529278,334166e-9,0,.650794,.509026,318456e-9,0,.68254,.489186,30449e-8,0,.714286,.469662,289051e-9,0,.746032,.450691,275494e-9,0,.777778,.431841,261437e-9,0,.809524,.413752,247846e-9,0,.84127,.395951,235085e-9,0,.873016,.378633,222245e-9,0,.904762,.36194,210533e-9,0,.936508,.345599,198494e-9,0,.968254,.329999,188133e-9,0,1,1,269663e-10,0,0,1,26967e-9,0,0,1,269772e-10,0,0,.999999,270214e-10,0,0,.999998,271415e-10,0,0,.999994,27398e-9,0,0,.999988,278771e-10,0,0,.999977,287019e-10,0,0,.999961,300544e-10,0,0,.999937,322138e-10,0,0,.999904,356163e-10,0,0,.999854,409465e-10,0,0,.99979,492651e-10,0,0,.999699,621722e-10,0,88288e-11,.999572,819715e-10,0,223369e-9,.999381,111689e-9,0,.00105414,.999016,153862e-9,0,.0026493,.997437,187667e-9,0,.00508608,.993545,155672e-9,0,.00840554,.991135,161455e-9,0,.012629,.989157,188241e-9,0,.0177661,.986874,226229e-9,0,.0238198,.983714,268668e-9,0,.0307887,.978301,277109e-9,0,.0386688,.973227,303446e-9,0,.0474554,.967317,341851e-9,0,.0571428,.959477,370885e-9,0,.0677256,.950012,392753e-9,0,.0791988,.939484,42781e-8,0,.0915576,.928135,443866e-9,0,.104798,.919819,472959e-9,0,.118918,.910049,491551e-9,0,.133915,.899181,512616e-9,0,.149788,.886881,523563e-9,0,.166537,.87359,540183e-9,0,.184164,.858613,547386e-9,0,.202669,.842809,554809e-9,0,.222056,.825727,558316e-9,0,.242329,.808086,557824e-9,0,.263492,.790728,556346e-9,0,.285551,.772987,552672e-9,0,.30851,.7541,543738e-9,0,.332376,.734669,536107e-9,0,.357153,.714411,523342e-9,0,.382845,.694196,512238e-9,0,.409454,.674252,497465e-9,0,.436977,.65357,481096e-9,0,.465404,.632999,467054e-9,0,.494713,.611994,448771e-9,0,.524864,.591604,431889e-9,0,.555779,.571134,415238e-9,0,.587302,.550528,396369e-9,0,.619048,.530292,379477e-9,0,.650794,.510364,361488e-9,0,.68254,.490749,343787e-9,0,.714286,.471266,327822e-9,0,.746032,.452462,310626e-9,0,.777778,.433907,295352e-9,0,.809524,.415659,279179e-9,0,.84127,.398138,264685e-9,0,.873016,.380833,249905e-9,0,.904762,.364247,236282e-9,0,.936508,.348041,222905e-9,0,.968254,.332389,210522e-9,0,1,1,420604e-10,0,0,1,420614e-10,0,0,1,420757e-10,0,0,.999999,42138e-9,0,0,.999997,423067e-10,0,0,.999993,426668e-10,0,0,.999986,433372e-10,0,0,.999974,444857e-10,0,0,.999956,463554e-10,0,0,.99993,493105e-10,0,0,.999892,539077e-10,0,0,.999838,610005e-10,0,0,.999767,718822e-10,0,0,.999666,884581e-10,0,365471e-10,.999525,113398e-9,0,485623e-9,.999311,150043e-9,0,.00162096,.998865,200063e-9,0,.00355319,.996278,211014e-9,0,.00633818,.992956,189672e-9,0,.0100043,.991017,210262e-9,0,.0145648,.989055,244292e-9,0,.0200237,.986741,290481e-9,0,.0263798,.983288,334303e-9,0,.033629,.977784,340307e-9,0,.0417652,.973037,377864e-9,0,.0507821,.967181,4239e-7,0,.060673,.958971,443854e-9,0,.0714314,.950093,483039e-9,0,.0830518,.939552,517934e-9,0,.0955288,.927678,539449e-9,0,.108859,.918278,568604e-9,0,.123038,.908449,588505e-9,0,.138065,.897713,612473e-9,0,.153938,.885533,625575e-9,0,.170657,.872131,63854e-8,0,.188224,.857517,647034e-9,0,.20664,.841796,65209e-8,0,.225909,.824726,6544e-7,0,.246035,.807297,655744e-9,0,.267022,.789058,646716e-9,0,.288878,.77189,643898e-9,0,.311607,.753082,629973e-9,0,.335216,.7341,621564e-9,0,.359713,.714094,605171e-9,0,.385103,.693839,588752e-9,0,.41139,.673891,573294e-9,0,.438576,.653565,552682e-9,0,.466656,.633326,533446e-9,0,.495617,.612582,514635e-9,0,.525431,.59205,49303e-8,0,.556041,.571918,471842e-9,0,.587338,.551572,451713e-9,0,.619048,.531553,430049e-9,0,.650794,.51175,410445e-9,0,.68254,.49238,390098e-9,0,.714286,.473143,370033e-9,0,.746032,.45423,351205e-9,0,.777778,.435963,332049e-9,0,.809524,.41787,315021e-9,0,.84127,.400387,297315e-9,0,.873016,.383332,281385e-9,0,.904762,.366665,265397e-9,0,.936508,.350633,250601e-9,0,.968254,.334964,23589e-8,0,1,1,643736e-10,0,0,1,64375e-9,0,0,1,643947e-10,0,0,.999999,64481e-9,0,0,.999997,647143e-10,0,0,.999994,652119e-10,0,0,.999985,661359e-10,0,0,.999972,677116e-10,0,0,.999952,702599e-10,0,0,.999922,742517e-10,0,0,.99988,803906e-10,0,0,.99982,897315e-10,0,0,.999741,103838e-9,0,0,.999629,12496e-8,0,149024e-9,.999474,156161e-9,0,861027e-9,.999229,201034e-9,0,.00231198,.998662,259069e-9,0,.00458147,.995299,245439e-9,0,.00770895,.992732,24498e-8,0,.0117126,.990847,273211e-9,0,.0165989,.988911,316492e-9,0,.0223674,.98654,37161e-8,0,.0290135,.982636,410352e-9,0,.0365309,.977346,421756e-9,0,.0449117,.972909,475578e-9,0,.0541481,.966821,522482e-9,0,.0642326,.958686,545008e-9,0,.075158,.949754,589286e-9,0,.0869181,.939184,619995e-9,0,.0995074,.927505,654266e-9,0,.112922,.916606,682362e-9,0,.127157,.906707,704286e-9,0,.142212,.895937,725909e-9,0,.158085,.883913,743939e-9,0,.174776,.870642,755157e-9,0,.192287,.856241,764387e-9,0,.210619,.84069,771032e-9,0,.229775,.823728,765906e-9,0,.249761,.806481,767604e-9,0,.270582,.787924,754385e-9,0,.292243,.770588,749668e-9,0,.314753,.751991,731613e-9,0,.338118,.733407,717655e-9,0,.362347,.713688,700604e-9,0,.387447,.693595,678765e-9,0,.413424,.673426,657042e-9,0,.440284,.65359,635892e-9,0,.468027,.633576,611569e-9,0,.496645,.613144,586011e-9,0,.526122,.592711,563111e-9,0,.556417,.572722,537699e-9,0,.587451,.552762,512556e-9,0,.619048,.532985,489757e-9,0,.650794,.513219,464139e-9,0,.68254,.493992,442193e-9,0,.714286,.47509,418629e-9,0,.746032,.456287,397045e-9,0,.777778,.438152,375504e-9,0,.809524,.420294,35492e-8,0,.84127,.402749,335327e-9,0,.873016,.385879,316422e-9,0,.904762,.369352,298333e-9,0,.936508,.353301,281417e-9,0,.968254,.337781,265203e-9,0,1,1,968267e-10,0,0,1,968284e-10,0,0,1,968556e-10,0,0,.999999,969733e-10,0,0,.999997,972913e-10,0,0,.999993,979688e-10,0,0,.999984,992239e-10,0,0,.999969,101356e-9,0,0,.999946,104784e-9,0,0,.999913,110111e-9,0,0,.999868,118217e-9,0,0,.999801,130396e-9,0,0,.999712,148523e-9,0,124907e-10,.999589,175233e-9,0,355405e-9,.999416,213999e-9,0,.0013528,.999136,268529e-9,0,.00312557,.998367,333088e-9,0,.00573045,.994701,304757e-9,0,.00919397,.992497,318031e-9,0,.0135261,.990608,353863e-9,0,.0187278,.988715,409044e-9,0,.0247947,.986241,472967e-9,0,.0317196,.981696,495104e-9,0,.039494,.977097,532873e-9,0,.0481087,.972583,594447e-9,0,.0575549,.966142,636867e-9,0,.0678242,.95823,669899e-9,0,.0789089,.949677,719499e-9,0,.0908023,.939226,750584e-9,0,.103499,.927501,793183e-9,0,.116993,.915199,81995e-8,0,.131282,.90498,847654e-9,0,.146364,.894243,868929e-9,0,.162237,.882154,884278e-9,0,.178902,.869161,898108e-9,0,.196358,.854751,901254e-9,0,.21461,.839368,90679e-8,0,.23366,.822874,901541e-9,0,.253512,.805514,897297e-9,0,.274174,.78716,881856e-9,0,.29565,.769061,870032e-9,0,.31795,.751,851719e-9,0,.341081,.732614,830671e-9,0,.365053,.713171,806569e-9,0,.389874,.693472,78338e-8,0,.415553,.673528,756404e-9,0,.442098,.653397,726872e-9,0,.469512,.633781,700494e-9,0,.497794,.613877,67105e-8,0,.526935,.593506,640361e-9,0,.556908,.573667,613502e-9,0,.587657,.553932,583177e-9,0,.61906,.534345,554375e-9,0,.650794,.515042,527811e-9,0,.68254,.495674,499367e-9,0,.714286,.477132,47429e-8,0,.746032,.458609,447726e-9,0,.777778,.440354,424205e-9,0,.809524,.422765,399549e-9,0,.84127,.405472,378315e-9,0,.873016,.388482,355327e-9,0,.904762,.372191,336122e-9,0,.936508,.356099,315247e-9,0,.968254,.340737,29794e-8,0,1,1,143327e-9,0,0,1,14333e-8,0,0,1,143366e-9,0,0,.999999,143524e-9,0,0,.999996,143952e-9,0,0,.999991,144862e-9,0,0,.999981,146544e-9,0,0,.999966,149391e-9,0,0,.999941,153946e-9,0,0,.999905,160971e-9,0,0,.999852,171562e-9,0,0,.99978,18729e-8,0,0,.999681,210386e-9,0,826239e-10,.999546,243906e-9,0,664807e-9,.999352,291739e-9,0,.00196192,.999027,357419e-9,0,.00405941,.997886,422349e-9,0,.00699664,.99419,385008e-9,0,.0107896,.99214,409775e-9,0,.0154415,.990274,456418e-9,0,.0209488,.988455,527008e-9,0,.0273037,.985804,597685e-9,0,.0344969,.98103,613124e-9,0,.0425183,.976674,668321e-9,0,.0513575,.972021,736985e-9,0,.0610046,.965274,773789e-9,0,.0714508,.958046,830852e-9,0,.0826877,.949333,875766e-9,0,.0947085,.939135,917088e-9,0,.107507,.927119,952244e-9,0,.121078,.91469,990626e-9,0,.135419,.903006,.00101304,0,.150526,.892368,.00103834,0,.166399,.880231,.00105002,0,.183038,.867432,.00106331,0,.200443,.853208,.00106783,0,.218618,.837956,.00106458,0,.237566,.821772,.00105945,0,.257291,.804328,.00104685,0,.2778,.786465,.00103178,0,.2991,.768004,.00101077,0,.321199,.74972,985504e-9,0,.344106,.731682,962893e-9,0,.36783,.712813,932146e-9,0,.392383,.693139,89871e-8,0,.417774,.673566,869678e-9,0,.444013,.653483,835525e-9,0,.471107,.633891,799853e-9,0,.49906,.614433,766838e-9,0,.527869,.594586,732227e-9,0,.557517,.574769,696442e-9,0,.587966,.555149,663935e-9,0,.61913,.535898,629826e-9,0,.650794,.516753,596486e-9,0,.68254,.497816,567078e-9,0,.714286,.479034,534399e-9,0,.746032,.460975,507013e-9,0,.777778,.442935,477421e-9,0,.809524,.425263,451101e-9,0,.84127,.408248,424964e-9,0,.873016,.391339,39993e-8,0,.904762,.37513,377619e-9,0,.936508,.359172,354418e-9,0,.968254,.343876,334823e-9,0,1,1,209042e-9,0,0,1,209045e-9,0,0,1,209093e-9,0,0,.999999,209304e-9,0,0,.999996,209871e-9,0,0,.999991,211078e-9,0,0,.999979,213304e-9,0,0,.999963,217061e-9,0,0,.999933,223042e-9,0,0,.999894,232206e-9,0,0,.999837,245901e-9,0,0,.999756,266023e-9,0,102927e-11,.999648,295204e-9,0,233468e-9,.999499,336958e-9,0,.00108237,.999283,395563e-9,0,.00268832,.998896,473785e-9,0,.00511138,.997006,520008e-9,0,.00837705,.993819,497261e-9,0,.0124928,.991632,523722e-9,0,.0174561,.989875,587258e-9,0,.0232596,.988109,676329e-9,0,.0298932,.985155,747701e-9,0,.0373453,.980479,768803e-9,0,.0456045,.976271,841054e-9,0,.0546593,.971347,911469e-9,0,.0644994,.964528,953057e-9,0,.0751152,.957632,.00102221,0,.0864981,.948681,.00106122,0,.0986407,.938716,.00111857,0,.111537,.926629,.00114762,0,.125182,.914025,.00118995,0,.139571,.901026,.00121228,0,.154703,.890358,.00123946,0,.170576,.878283,.0012527,0,.18719,.865459,.00125536,0,.204547,.851407,.00126134,0,.222648,.836276,.00124759,0,.241498,.820436,.00124443,0,.261101,.803253,.00122071,0,.281465,.785562,.00120107,0,.302595,.76718,.00117762,0,.324501,.748551,.00114289,0,.347192,.730564,.00110872,0,.370679,.712253,.00107636,0,.394973,.692867,.00103646,0,.420085,.673695,996793e-9,0,.446027,.653912,95675e-8,0,.47281,.634129,916739e-9,0,.500441,.615004,874401e-9,0,.528921,.595587,833411e-9,0,.558244,.575965,794556e-9,0,.588384,.5566,75196e-8,0,.619281,.537428,716381e-9,0,.650795,.518623,676558e-9,0,.68254,.499964,64074e-8,0,.714286,.481356,605984e-9,0,.746032,.463279,570256e-9,0,.777778,.445673,540138e-9,0,.809524,.428032,507299e-9,0,.84127,.411112,479553e-9,0,.873016,.394444,450737e-9,0,.904762,.378247,424269e-9,0,.936508,.362415,399111e-9,0,.968254,.347103,375274e-9,0,1,1,300729e-9,0,0,1,300733e-9,0,0,1,300797e-9,0,0,.999998,301072e-9,0,0,.999996,301817e-9,0,0,.999989,303398e-9,0,0,.999977,306309e-9,0,0,.999958,311209e-9,0,0,.999927,318975e-9,0,0,.999884,330804e-9,0,0,.99982,34834e-8,0,0,.999733,373854e-9,0,326995e-10,.999613,410424e-9,0,477174e-9,.999447,462047e-9,0,.00161099,.999204,533322e-9,0,.00353153,.998725,624964e-9,0,.00627965,.995871,631786e-9,0,.0098693,.993194,632017e-9,0,.0143011,.991541,68923e-8,0,.019568,.989773,766892e-9,0,.0256593,.987647,863668e-9,0,.0325625,.984193,922089e-9,0,.0402647,.980016,970749e-9,0,.0487532,.975859,.00106027,0,.058016,.970514,.00112239,0,.0680419,.963625,.00117212,0,.0788208,.956959,.00125211,0,.0903439,.947956,.00129411,0,.102604,.93809,.00135879,0,.115594,.92659,.00139309,0,.129309,.913829,.00143253,0,.143745,.90005,.00145809,0,.158901,.888129,.0014748,0,.174774,.87607,.00148756,0,.191365,.863461,.00148714,0,.208674,.849594,.00148892,0,.226705,.834531,.00146496,0,.245461,.81903,.0014579,0,.264947,.802122,.00143039,0,.28517,.78445,.00139717,0,.306137,.766434,.00136312,0,.327857,.747816,.00132597,0,.350341,.729519,.00128323,0,.373598,.711454,.00123803,0,.397642,.692699,.00119097,0,.422485,.673723,.00114565,0,.448139,.654386,.00109552,0,.474619,.634673,.00104553,0,.501933,.615554,99985e-8,0,.530089,.596462,948207e-9,0,.559087,.577385,902299e-9,0,.588913,.558257,856448e-9,0,.619525,.5392,810395e-9,0,.650826,.520543,768558e-9,0,.68254,.502206,7239e-7,0,.714286,.48402,685794e-9,0,.746032,.465779,64471e-8,0,.777778,.448455,609583e-9,0,.809524,.431091,57227e-8,0,.84127,.414147,54042e-8,0,.873016,.39765,506545e-9,0,.904762,.381576,477635e-9,0,.936508,.365881,448446e-9,0,.968254,.350582,421424e-9,0,1,1,427144e-9,0,0,1,427151e-9,0,0,1,427232e-9,0,0,.999998,42759e-8,0,0,.999995,428555e-9,0,0,.999988,430603e-9,0,0,.999976,434368e-9,0,0,.999952,440688e-9,0,0,.999919,450667e-9,0,0,.999871,46578e-8,0,0,.999801,488024e-9,0,0,.999704,520092e-9,0,129791e-9,.999572,565553e-9,0,821056e-9,.999389,628906e-9,0,.00225241,.999114,714911e-9,0,.00449109,.998488,819218e-9,0,.00756249,.995234,80415e-8,0,.0114716,.993021,830181e-9,0,.0162131,.991407,902645e-9,0,.021776,.989625,996934e-9,0,.0281471,.987064,.00109707,0,.0353118,.983265,.00114353,0,.0432562,.979535,.0012272,0,.0519665,.975224,.00132642,0,.0614298,.969574,.00138092,0,.0716348,.963021,.00145896,0,.0825709,.956046,.00152834,0,.094229,.947136,.00158217,0,.106602,.937313,.0016347,0,.119682,.926073,.00168383,0,.133465,.913121,.00171627,0,.147947,.899165,.00174229,0,.163125,.885891,.00176137,0,.178998,.873783,.00176406,0,.195566,.861331,.00176156,0,.21283,.847569,.00175346,0,.230793,.832785,.00172753,0,.249459,.817442,.00170204,0,.268832,.800613,.00166576,0,.28892,.783597,.00162909,0,.30973,.76571,.0015826,0,.331271,.747021,.00153106,0,.353554,.728593,.00148036,0,.37659,.710661,.00142808,0,.400391,.692426,.00136906,0,.424973,.673623,.00131066,0,.450347,.65494,.00125569,0,.476531,.635448,.00119517,0,.503535,.616221,.00113828,0,.531372,.597531,.0010816,0,.560047,.578795,.00102673,0,.589554,.559892,970985e-9,0,.619869,.541307,919773e-9,0,.650923,.522608,868479e-9,0,.68254,.504484,82137e-8,0,.714286,.486603,772916e-9,0,.746032,.468802,730353e-9,0,.777778,.451172,684955e-9,0,.809524,.434348,647565e-9,0,.84127,.417445,605863e-9,0,.873016,.401077,571885e-9,0,.904762,.385039,536034e-9,0,.936508,.369483,504227e-9,0,.968254,.354272,473165e-9,0,1,1,599525e-9,0,0,1,599533e-9,0,0,1,599639e-9,0,0,.999998,600097e-9,0,0,.999994,601336e-9,0,0,.999987,603958e-9,0,0,.999972,608775e-9,0,0,.999949,616842e-9,0,0,.999912,629534e-9,0,0,.999857,648658e-9,0,0,.999781,676615e-9,0,538873e-11,.999674,716574e-9,0,308602e-9,.999528,772641e-9,0,.00127003,.999326,849806e-9,0,.00300783,.999009,952682e-9,0,.00556637,.998112,.00106394,0,.00895889,.994496,.00102228,0,.0131827,.992806,.00108586,0,.0182277,.991211,.0011759,0,.0240795,.989415,.00128955,0,.030723,.986499,.00139038,0,.0381418,.982679,.00144539,0,.046321,.978839,.00153954,0,.0552459,.974295,.00164417,0,.0649034,.968784,.00171517,0,.0752814,.962324,.00180282,0,.0863693,.954956,.00186387,0,.0981578,.94624,.00193817,0,.110639,.936517,.00198156,0,.123806,.925186,.00203042,0,.137655,.91252,.0020664,0,.15218,.898441,.00207822,0,.16738,.884394,.0020992,0,.183253,.871273,.00208748,0,.199799,.859057,.00208686,0,.21702,.845243,.00205519,0,.234918,.830723,.00202868,0,.253496,.815801,.00199501,0,.272761,.79914,.00194193,0,.292719,.782372,.00188824,0,.313377,.76482,.00183695,0,.334745,.746586,.00177418,0,.356833,.7281,.00170628,0,.379654,.709842,.00164063,0,.403221,.692019,.00157355,0,.427548,.67364,.00150262,0,.452651,.655277,.00143473,0,.478545,.636438,.00136371,0,.505246,.617364,.00129911,0,.532768,.598603,.00123014,0,.561122,.580195,.00116587,0,.590309,.561786,.00110398,0,.620318,.543377,.00104148,0,.651102,.525093,983984e-9,0,.682545,.506791,92667e-8,0,.714286,.489291,874326e-9,0,.746032,.471811,821734e-9,0,.777778,.454435,774698e-9,0,.809524,.437493,727302e-9,0,.84127,.420977,684039e-9,0,.873016,.404729,64373e-8,0,.904762,.388756,60285e-8,0,.936508,.373344,56765e-8,0,.968254,.358191,531929e-9,0,1,1,832169e-9,0,0,1,832178e-9,0,0,1,83231e-8,0,0,.999998,832893e-9,0,0,.999995,834465e-9,0,0,.999985,837791e-9,0,0,.999969,843893e-9,0,0,.999944,854086e-9,0,0,.999903,870071e-9,0,0,.999843,894042e-9,0,0,.999759,928865e-9,0,531805e-10,.999643,978242e-9,0,579365e-9,.99948,.00104684,0,.00182774,.999255,.00114012,0,.00387804,.998885,.00126188,0,.00675709,.997405,.00135888,0,.010468,.99424,.00133626,0,.0150018,.992458,.00140905,0,.0203443,.990929,.00152305,0,.0264786,.989116,.00165882,0,.0333875,.985624,.00174128,0,.0410536,.982003,.00182108,0,.0494609,.978336,.00194498,0,.0585941,.973184,.00202708,0,.0684396,.9678,.00212166,0,.0789851,.961348,.00221366,0,.0902199,.953841,.00228219,0,.102134,.94534,.00235662,0,.114721,.935552,.00240572,0,.127972,.924064,.00244405,0,.141884,.911827,.00247557,0,.156451,.897731,.00248374,0,.171672,.883409,.00249863,0,.187545,.868625,.00246688,0,.20407,.856529,.00246523,0,.221249,.842999,.00242368,0,.239083,.828505,.00237354,0,.257578,.813825,.00232588,0,.276738,.797813,.00226731,0,.296569,.781097,.00219704,0,.31708,.764038,.00212394,0,.338281,.746067,.00204786,0,.360181,.727687,.00196728,0,.382794,.709571,.00188779,0,.406133,.691503,.00180532,0,.430213,.673673,.00171849,0,.45505,.655732,.00164147,0,.480662,.637399,.00155858,0,.507065,.618616,.00147641,0,.534278,.60005,.00140125,0,.562313,.581713,.00132441,0,.59118,.563546,.00125014,0,.620875,.545605,.00118249,0,.651373,.527559,.0011116,0,.682593,.509764,.00104979,0,.714286,.49193,985977e-9,0,.746032,.475011,928592e-9,0,.777778,.457878,873466e-9,0,.809524,.440979,819585e-9,0,.84127,.424613,772365e-9,0,.873016,.408549,722195e-9,0,.904762,.392771,680014e-9,0,.936508,.377317,636797e-9,0,.968254,.362352,598318e-9,0,1,1,.00114313,0,0,1,.00114314,0,0,.999999,.00114331,0,0,.999998,.00114404,0,0,.999994,.00114601,0,0,.999984,.00115019,0,0,.999967,.00115784,0,0,.999937,.0011706,0,0,.999894,.00119054,0,0,.999828,.00122031,0,0,.999735,.00126331,0,169263e-9,.999606,.00132382,0,949167e-9,.999426,.0014071,0,.00249668,.999173,.00151895,0,.00486392,.99873,.00166102,0,.00806323,.996243,.0017023,0,.0120895,.993779,.00172782,0,.0169288,.9919,.0018108,0,.0225633,.990524,.00196028,0,.028974,.98868,.00212014,0,.036142,.984663,.00217598,0,.044049,.981457,.00230563,0,.0526781,.977608,.00243966,0,.0620137,.972215,.00251336,0,.0720418,.966798,.0026285,0,.0827499,.960241,.00271409,0,.0941271,.952489,.00278381,0,.106164,.944127,.00285399,0,.118852,.934282,.00290994,0,.132185,.923271,.00294558,0,.146157,.910803,.00296269,0,.160766,.896705,.00296803,0,.176007,.88238,.00296637,0,.19188,.867116,.00293163,0,.208385,.853636,.00289418,0,.225523,.840469,.00284663,0,.243296,.82639,.00278594,0,.261709,.811759,.00271618,0,.280767,.796113,.00263187,0,.300476,.779518,.00254589,0,.320845,.763142,.00246003,0,.341883,.745464,.00236529,0,.363601,.727491,.00226536,0,.386011,.709414,.00216375,0,.409128,.691396,.00207127,0,.432967,.67368,.00197106,0,.457545,.656049,.00187022,0,.482881,.638188,.00177605,0,.508992,.620177,.00168482,0,.535899,.601506,.00158909,0,.563619,.58362,.00150583,0,.592165,.565496,.00141791,0,.621544,.54789,.00133693,0,.651743,.530323,.00126038,0,.682709,.512795,.00118556,0,.714286,.495199,.00111527,0,.746032,.478101,.0010489,0,.777778,.461511,984264e-9,0,.809524,.444879,92591e-8,0,.84127,.428424,866582e-9,0,.873016,.412495,814463e-9,0,.904762,.396975,764498e-9,0,.936508,.381614,715967e-9,0,.968254,.366732,672483e-9,0,1,1,.00155501,0,0,1,.00155503,0,0,1,.00155524,0,0,.999998,.00155615,0,0,.999994,.0015586,0,0,.999983,.00156379,0,0,.999963,.0015733,0,0,.999932,.00158911,0,0,.999882,.00161376,0,0,.99981,.00165041,0,100875e-10,.999708,.00170304,0,367658e-9,.999565,.00177658,0,.0014234,.999368,.00187688,0,.00327939,.999081,.00200989,0,.00596629,.99852,.00217177,0,.0094852,.99549,.0021745,0,.013824,.993252,.00222357,0,.0189642,.991727,.00235022,0,.0248856,.989951,.00250561,0,.0315669,.988029,.00268829,0,.0389882,.984029,.0027496,0,.0471302,.980683,.00289793,0,.0559754,.976554,.00303315,0,.0655081,.97139,.00313257,0,.0757138,.965544,.00323656,0,.08658,.95912,.00333432,0,.0980954,.951183,.0034039,0,.110251,.942974,.00347515,0,.123038,.932642,.00350381,0,.13645,.922158,.00354519,0,.150482,.909404,.00353851,0,.165129,.896071,.0035435,0,.18039,.881206,.00349936,0,.196263,.866077,.00347256,0,.212748,.85093,.003415,0,.229847,.837703,.00333367,0,.247561,.823878,.003249,0,.265895,.809449,.00316347,0,.284854,.794379,.00306351,0,.304445,.778138,.0029499,0,.324675,.761997,.00284099,0,.345555,.744938,.00272104,0,.367095,.727212,.00260715,0,.389309,.709549,.00248855,0,.41221,.691704,.00236783,0,.435814,.673689,.00225178,0,.460138,.656453,.00213765,0,.485203,.639128,.00202178,0,.511028,.621512,.00191443,0,.537634,.603598,.00180977,0,.565041,.58559,.00170456,0,.593268,.567852,.00160927,0,.622327,.5503,.00151395,0,.652217,.533033,.00142499,0,.682907,.515942,.00133955,0,.714296,.498814,.0012602,0,.746032,.481595,.00118188,0,.777778,.465117,.00111171,0,.809524,.448865,.00104091,0,.84127,.432711,976618e-9,0,.873016,.416822,91859e-8,0,.904762,.401272,857704e-9,0,.936508,.386226,807172e-9,0,.968254,.371321,75464e-8,0,1,1,.00209596,0,0,1,.00209598,0,0,1,.00209624,0,0,.999997,.00209736,0,0,.999991,.00210039,0,0,.999979,.00210678,0,0,.999959,.00211847,0,0,.999925,.0021379,0,0,.99987,.00216809,0,0,.999791,.00221281,0,681487e-10,.999677,.00227669,0,658161e-9,.999521,.00236533,0,.00200635,.999301,.00248514,0,.0041779,.998977,.00264185,0,.00718648,.998191,.00281695,0,.0110239,.994801,.00278518,0,.015672,.993091,.00288774,0,.0211091,.991571,.00303931,0,.0273123,.9897,.00321643,0,.034259,.987023,.00337332,0,.0419282,.983289,.00346146,0,.0502998,.979892,.00363704,0,.0593562,.975111,.00373601,0,.069081,.970351,.0038842,0,.0794598,.964131,.00397053,0,.0904798,.957747,.00408078,0,.10213,.949536,.00413533,0,.1144,.941372,.00420305,0,.127284,.931049,.00422815,0,.140772,.920647,.00425048,0,.154862,.908033,.0042281,0,.169548,.895028,.00422026,0,.184828,.879968,.00415042,0,.200701,.864875,.00408821,0,.217167,.84918,.00400909,0,.234227,.834934,.00391178,0,.251884,.821397,.00380066,0,.270141,.807135,.00367974,0,.289004,.792363,.00355172,0,.308479,.776661,.003411,0,.328575,.760705,.00328123,0,.349301,.744408,.00314003,0,.370668,.726994,.0029906,0,.392689,.709598,.00285034,0,.415379,.692112,.00271179,0,.438754,.674435,.00257185,0,.46283,.65676,.00243425,0,.48763,.639982,.00230351,0,.513173,.622983,.0021777,0,.539482,.605471,.00204991,0,.566579,.58796,.00193759,0,.594488,.570463,.00181976,0,.623226,.553058,.00171497,0,.6528,.535894,.00161109,0,.683198,.519089,.00151394,0,.714354,.502454,.00142122,0,.746032,.485681,.00133488,0,.777778,.468935,.00124975,0,.809524,.452951,.00117309,0,.84127,.437139,.00110155,0,.873016,.421446,.00103124,0,.904762,.405951,966387e-9,0,.936508,.391003,908119e-9,0,.968254,.376198,848057e-9,0,1,1,.00280076,0,0,1,.00280078,0,0,.999999,.00280109,0,0,.999997,.00280246,0,0,.999992,.00280616,0,0,.999979,.00281396,0,0,.999956,.00282822,0,0,.999916,.00285186,0,0,.999857,.0028885,0,0,.999768,.00294259,0,196026e-9,.999645,.00301946,0,.00104842,.99947,.00312541,0,.00270199,.999229,.00326733,0,.00519449,.998852,.00344992,0,.00852602,.997558,.00361052,0,.0126804,.994417,.0035898,0,.017635,.992824,.00372393,0,.023365,.991344,.00390695,0,.0298456,.989337,.00410392,0,.0370529,.985811,.00420987,0,.0449651,.982772,.00437488,0,.0535615,.979001,.00455069,0,.0628243,.974102,.00464462,0,.0727368,.969197,.00480577,0,.0832844,.962759,.00487818,0,.0944545,.956207,.00498176,0,.106236,.947909,.00503392,0,.118619,.939596,.00507474,0,.131595,.929642,.00509798,0,.145159,.918807,.00508476,0,.159305,.906921,.00505634,0,.174028,.893312,.00498845,0,.189327,.878933,.0049133,0,.2052,.863986,.0048259,0,.221647,.847936,.00470848,0,.23867,.832253,.00456889,0,.25627,.818619,.00442726,0,.274453,.804788,.00427677,0,.293222,.790241,.00411906,0,.312585,.775162,.00394833,0,.33255,.759463,.00377366,0,.353126,.743598,.00361026,0,.374324,.72697,.00343627,0,.396158,.709646,.00326422,0,.418641,.69277,.00309717,0,.44179,.675371,.0029356,0,.465624,.657863,.00277712,0,.490163,.640772,.00261738,0,.515429,.624441,.0024737,0,.541445,.607497,.00233125,0,.568236,.590438,.00218994,0,.595828,.573224,.0020664,0,.624242,.556168,.00193526,0,.653496,.539232,.00182463,0,.683588,.522352,.00170735,0,.714482,.506172,.00160555,0,.746032,.489842,.00150451,0,.777778,.473463,.00140938,0,.809524,.457266,.00132568,0,.84127,.441609,.0012376,0,.873016,.426348,.00116265,0,.904762,.411002,.00108935,0,.936508,.396045,.00101946,0,.968254,.381448,955665e-9,0,1,1,.0037121,0,0,1,.00371213,0,0,1,.00371251,0,0,.999997,.00371417,0,0,.99999,.00371863,0,0,.999977,.00372807,0,0,.99995,.00374529,0,0,.999908,.0037738,0,0,.999843,.00381789,0,123596e-10,.999745,.00388273,0,407442e-9,.999608,.00397443,0,.0015447,.999415,.00409998,0,.00351385,.999143,.00426662,0,.0063316,.9987,.00447625,0,.00998679,.996363,.00455323,0,.0144569,.994021,.00461052,0,.0197151,.992372,.00476359,0,.0257344,.991007,.00499101,0,.0324882,.988767,.0051972,0,.0399517,.984872,.00528407,0,.0481022,.982004,.00548926,0,.0569191,.977714,.00564385,0,.0663839,.973076,.0057693,0,.0764801,.967565,.0058924,0,.0871928,.961384,.00599629,0,.0985095,.954435,.00605998,0,.110419,.946303,.0061133,0,.122912,.937662,.00612028,0,.13598,.927867,.00612209,0,.149617,.916475,.00604813,0,.163817,.90541,.00603088,0,.178577,.891591,.00592218,0,.193894,.877573,.00578854,0,.209767,.862511,.00566648,0,.226196,.846861,.00551481,0,.243182,.83068,.00533754,0,.260728,.815725,.00515487,0,.278837,.802321,.0049655,0,.297515,.787826,.00475421,0,.316768,.773454,.00456002,0,.336605,.758224,.00434727,0,.357034,.74265,.00414444,0,.378067,.726729,.00393738,0,.399717,.710155,.00373575,0,.421998,.693312,.00353736,0,.444928,.67653,.00334368,0,.468523,.659444,.00315981,0,.492806,.642051,.00297809,0,.517798,.625758,.00280592,0,.543525,.609615,.00264254,0,.570012,.592919,.00248459,0,.597288,.576298,.00233327,0,.625379,.559489,.00219519,0,.654307,.542891,.00205441,0,.684084,.526255,.00193385,0,.714693,.509853,.00180745,0,.746044,.494131,.00169817,0,.777778,.478114,.0015913,0,.809524,.462274,.00148981,0,.84127,.446412,.00139537,0,.873016,.431274,.00130984,0,.904762,.41635,.00122403,0,.936508,.401476,.00114809,0,.968254,.386993,.00107563,0,1,1,.00488216,0,0,1,.0048822,0,0,1,.00488265,0,0,.999997,.00488463,0,0,.999988,.00488999,0,0,.999974,.00490129,0,0,.999946,.00492191,0,0,.999897,.00495598,0,0,.999825,.00500855,0,744791e-10,.999718,.00508559,0,712744e-9,.999565,.005194,0,.00215249,.999352,.00534147,0,.00444576,.999046,.00553523,0,.00759218,.998492,.00577016,0,.0115714,.995564,.00578487,0,.0163557,.993339,.00586414,0,.021915,.991834,.00606002,0,.0282201,.990496,.00633312,0,.0352433,.987826,.00651941,0,.042959,.98383,.00660842,0,.0513439,.98109,.00685523,0,.0603772,.976131,.00695778,0,.0700402,.971922,.00714236,0,.0803163,.965901,.00721437,0,.0911908,.959606,.00732017,0,.102651,.952504,.00735788,0,.114686,.944365,.00738493,0,.127286,.935652,.00737969,0,.140443,.925813,.00733612,0,.154151,.914397,.00723094,0,.168405,.903257,.00714002,0,.183201,.890015,.00700149,0,.198536,.876014,.00682813,0,.214409,.861436,.00665567,0,.23082,.845752,.00644526,0,.24777,.829169,.00621635,0,.265263,.813435,.00597789,0,.283301,.799701,.00575694,0,.301889,.785726,.00549866,0,.321035,.77152,.0052503,0,.340746,.75683,.00499619,0,.361032,.741951,.0047543,0,.381904,.726367,.0045084,0,.403374,.710537,.00426784,0,.425457,.693965,.00403487,0,.448169,.677724,.0038075,0,.47153,.66117,.00359431,0,.495561,.644274,.00338354,0,.520284,.627449,.00318163,0,.545725,.611645,.00299672,0,.571911,.595614,.00281016,0,.598873,.579426,.00264252,0,.62664,.563016,.00247509,0,.655239,.546728,.00232647,0,.684692,.530539,.00217803,0,.714999,.514164,.00204216,0,.746106,.498344,.00191403,0,.777778,.482957,.00179203,0,.809524,.467336,.00167695,0,.84127,.451994,.00157567,0,.873016,.436514,.00147113,0,.904762,.42178,.00138034,0,.936508,.407271,.00129219,0,.968254,.392822,.0012098,0,1,1,.00637427,0,0,1,.00637431,0,0,.999999,.00637485,0,0,.999996,.00637721,0,0,.999987,.00638357,0,0,.999971,.006397,0,0,.999939,.00642142,0,0,.999888,.00646177,0,0,.999807,.00652387,0,207916e-9,.999689,.00661454,0,.00112051,.99952,.00674155,0,.00287719,.999283,.00691313,0,.00550145,.998936,.00713598,0,.00897928,.998165,.00738501,0,.0132829,.994847,.00734388,0,.01838,.993182,.00749991,0,.0242381,.991665,.0077246,0,.030826,.989708,.00797579,0,.0381152,.986663,.00813011,0,.0460794,.983288,.00830365,0,.0546951,.980104,.00853496,0,.0639411,.974855,.00861045,0,.0737988,.97045,.00879133,0,.0842516,.964509,.00886377,0,.0952848,.957594,.00890346,0,.106886,.950546,.00893289,0,.119044,.942225,.00890074,0,.131749,.933365,.00886826,0,.144994,.923202,.0087316,0,.158772,.912605,.00863082,0,.173078,.901099,.00847403,0,.187908,.888177,.00825838,0,.203261,.873955,.00801834,0,.219134,.860091,.00779026,0,.235527,.84434,.00752478,0,.252443,.828517,.00724074,0,.269883,.81239,.00693769,0,.287851,.79721,.00664817,0,.306352,.783489,.00634763,0,.325393,.769514,.00604221,0,.344981,.755419,.00573568,0,.365126,.741083,.00544359,0,.385839,.726059,.00515515,0,.407132,.710809,.00487139,0,.42902,.695052,.00459846,0,.45152,.678886,.00433412,0,.474651,.663042,.00407981,0,.498433,.646634,.00384264,0,.52289,.630117,.00360897,0,.548048,.613804,.00338863,0,.573936,.598338,.00318486,0,.600584,.582687,.00298377,0,.628027,.566809,.00280082,0,.656295,.550817,.00262255,0,.685417,.534937,.00245835,0,.715406,.519151,.00230574,0,.74624,.503118,.0021549,0,.777778,.487723,.00202008,0,.809524,.472725,.00189355,0,.84127,.457599,.00177108,0,.873016,.442558,.00165843,0,.904762,.427624,.00155494,0,.936508,.413171,.00145273,0,.968254,.399122,.00136454,0,1,1,.00826496,0,0,1,.00826499,0,0,1,.00826564,0,0,.999996,.00826842,0,0,.999987,.00827589,0,0,.999967,.00829167,0,0,.999933,.00832037,0,0,.999876,.00836768,0,109338e-10,.999786,.00844031,0,427145e-9,.999655,.00854603,0,.0016384,.999468,.00869337,0,.00372392,.999203,.008891,0,.00668513,.998803,.00914387,0,.0104968,.99748,.00935838,0,.015125,.994446,.00933309,0,.0205338,.99292,.00953084,0,.0266884,.991414,.0097893,0,.0335565,.989049,.0100228,0,.0411086,.98582,.0101664,0,.0493181,.982441,.0103582,0,.0581613,.978595,.0105292,0,.0676169,.973495,.0106274,0,.0776661,.968405,.0107261,0,.0882926,.962717,.0108234,0,.0994817,.955478,.0108102,0,.111221,.948275,.0107914,0,.123499,.940006,.0107161,0,.136308,.930831,.0106309,0,.149639,.920648,.0104083,0,.163485,.910205,.0102312,0,.177843,.898445,.0100051,0,.192707,.885986,.00971928,0,.208077,.872204,.00940747,0,.22395,.858436,.0091085,0,.240326,.843454,.00876595,0,.257208,.827437,.00839794,0,.274596,.811488,.00803692,0,.292496,.796039,.00767352,0,.310911,.781083,.0073097,0,.329849,.767642,.00694032,0,.349316,.753901,.00657476,0,.369323,.740131,.00622699,0,.38988,.725845,.0058838,0,.410999,.710991,.00555586,0,.432696,.696002,.00523089,0,.454987,.680461,.00492494,0,.47789,.664875,.00463464,0,.501426,.649273,.00435422,0,.52562,.63302,.0040875,0,.550498,.61705,.00384075,0,.576089,.601154,.00359557,0,.602427,.586008,.00337636,0,.629544,.570699,.00316019,0,.657479,.555166,.00296033,0,.686264,.539645,.00277552,0,.715924,.524159,.00259499,0,.746459,.508682,.00243257,0,.777789,.493163,.00227851,0,.809524,.478004,.00213083,0,.84127,.46347,.00199502,0,.873016,.448778,.00186967,0,.904762,.434105,.00174732,0,.936508,.419576,.00163861,0,.968254,.405541,.00153341,0,1,1,.0106462,0,0,1,.0106462,0,0,.999999,.010647,0,0,.999995,.0106502,0,0,.999985,.0106589,0,0,.999964,.0106773,0,0,.999925,.0107106,0,0,.999861,.0107655,0,712986e-10,.999763,.0108497,0,743959e-9,.999616,.0109716,0,.00227361,.999408,.0111408,0,.0046983,.999112,.0113659,0,.00800158,.998637,.0116475,0,.0121493,.996223,.0117231,0,.0171023,.994006,.0118064,0,.0228218,.992444,.0120254,0,.0292711,.991028,.0123314,0,.036417,.98803,.0124954,0,.0442295,.984816,.0126538,0,.0526815,.981399,.0128537,0,.0617492,.977085,.0129694,0,.0714114,.972154,.013091,0,.0816495,.966617,.0131166,0,.0924472,.960628,.0131583,0,.10379,.953295,.0131094,0,.115665,.94575,.0129966,0,.128062,.937654,.0128796,0,.140972,.927716,.0126477,0,.154387,.917932,.0123889,0,.168301,.907719,.012131,0,.182709,.89584,.0118013,0,.197608,.883526,.0114145,0,.212994,.870301,.0110075,0,.228867,.856272,.0106019,0,.245227,.842251,.0101938,0,.262074,.826466,.00973254,0,.279412,.810859,.0092846,0,.297244,.795051,.00883304,0,.315575,.780053,.00840272,0,.334412,.76575,.00796438,0,.35376,.752298,.00752526,0,.373631,.739153,.00711486,0,.394034,.725514,.00670361,0,.414983,.711473,.00632656,0,.436491,.696936,.00595206,0,.458575,.682126,.00559191,0,.481253,.667027,.00525362,0,.504547,.651875,.00493805,0,.528481,.636463,.00462848,0,.553081,.620641,.00433936,0,.578377,.604931,.00407,0,.604404,.589549,.00380864,0,.631197,.574712,.00357049,0,.658795,.559775,.00334466,0,.687238,.544514,.00312505,0,.716559,.529555,.00293199,0,.746776,.514402,.00274204,0,.777849,.499302,.00256647,0,.809524,.484114,.00239901,0,.84127,.469308,.00225148,0,.873016,.455133,.00210178,0,.904762,.440939,.0019727,0,.936508,.426627,.00184382,0,.968254,.412509,.00172548,0,1,1,.013628,0,0,1,.0136281,0,0,.999999,.0136289,0,0,.999995,.0136327,0,0,.999983,.0136427,0,0,.99996,.0136638,0,0,.999917,.0137022,0,0,.999846,.0137652,0,204597e-9,.999736,.0138615,0,.00116837,.999573,.0140007,0,.00303325,.99934,.0141927,0,.00580613,.999004,.0144457,0,.00945626,.998407,.0147489,0,.0139421,.995464,.014731,0,.0192202,.993328,.0148283,0,.0252495,.991799,.0150797,0,.0319921,.990397,.0154316,0,.0394138,.986835,.0155005,0,.0474843,.983938,.0157308,0,.0561763,.980154,.0158753,0,.0654661,.975659,.0159581,0,.0753326,.970171,.0159832,0,.0857571,.964803,.0160084,0,.0967236,.958366,.0159484,0,.108218,.950613,.0158001,0,.120227,.942874,.0155845,0,.132741,.935005,.0154292,0,.145751,.924991,.0150742,0,.159249,.914814,.0146757,0,.17323,.904743,.0143097,0,.187687,.893216,.0138695,0,.202619,.880769,.0133706,0,.218021,.868136,.0128606,0,.233894,.85469,.0123403,0,.250238,.840593,.0118091,0,.267052,.825808,.011253,0,.284341,.81009,.0107099,0,.302106,.79504,.0101636,0,.320354,.779757,.00964041,0,.33909,.764697,.00911896,0,.358322,.750913,.00859533,0,.378059,.738175,.00811592,0,.398311,.725242,.00764504,0,.41909,.711864,.00718885,0,.440412,.698009,.00675843,0,.462292,.683841,.00634984,0,.484748,.669391,.00595502,0,.507802,.654731,.00558671,0,.531477,.639805,.00523578,0,.555802,.624789,.00490834,0,.580805,.609325,.00459448,0,.606522,.593975,.00430342,0,.63299,.578983,.00403019,0,.66025,.564442,.0037707,0,.688346,.549835,.0035316,0,.717319,.535039,.00330255,0,.7472,.520403,.00308932,0,.777982,.505687,.00289335,0,.809524,.490939,.00270818,0,.84127,.476233,.0025343,0,.873016,.461624,.00237097,0,.904762,.447833,.00222065,0,.936508,.433992,.00207561,0,.968254,.420147,.00194955,0,1,1,.0173415,0,0,1,.0173416,0,0,.999999,.0173426,0,0,.999995,.0173468,0,0,.999983,.0173582,0,0,.999954,.0173822,0,0,.999908,.0174258,0,669501e-11,.999828,.0174973,0,427399e-9,.999705,.0176063,0,.00171019,.999524,.0177631,0,.0039248,.999263,.0179781,0,.00705382,.998878,.018258,0,.0110552,.998012,.0185551,0,.0158812,.994614,.0184264,0,.0214852,.993132,.0186385,0,.0278239,.991563,.0189067,0,.0348585,.989298,.0191577,0,.0425544,.986036,.0192522,0,.050881,.982558,.0194063,0,.059811,.978531,.019486,0,.0693209,.974198,.0195847,0,.0793895,.968148,.0194749,0,.0899984,.962565,.0194277,0,.101132,.956041,.0192991,0,.112775,.947749,.0189893,0,.124917,.94018,.018704,0,.137547,.93165,.0183458,0,.150655,.921798,.0178775,0,.164236,.911573,.0173618,0,.178281,.901569,.0168482,0,.192788,.890341,.016265,0,.207752,.877835,.0156199,0,.223171,.865472,.0149516,0,.239044,.852905,.0143274,0,.255371,.838906,.0136643,0,.272153,.824888,.0129903,0,.289393,.809977,.0123218,0,.307093,.794697,.0116572,0,.325259,.780028,.0110307,0,.343896,.765124,.0104236,0,.363012,.750411,.0098219,0,.382617,.737264,.00924397,0,.402719,.724799,.00868719,0,.423332,.712253,.00816476,0,.444469,.699267,.00767262,0,.466146,.685618,.00719746,0,.488383,.671736,.00673916,0,.511199,.657777,.00631937,0,.534618,.643497,.00592411,0,.558668,.62889,.00553928,0,.58338,.614299,.0051934,0,.608787,.599197,.00485985,0,.634929,.584175,.00454357,0,.661849,.569541,.00425787,0,.689594,.555193,.00397905,0,.718211,.540947,.00372364,0,.747742,.526593,.00348599,0,.778205,.512335,.00326103,0,.80953,.498017,.00305137,0,.84127,.483609,.00285485,0,.873016,.469368,.00267472,0,.904762,.455037,.00249945,0,.936508,.441493,.00234792,0,.968254,.428147,.00219936,0,1,1,.0219422,0,0,1,.0219423,0,0,.999998,.0219434,0,0,.999993,.0219481,0,0,.999981,.021961,0,0,.999949,.0219879,0,0,.999896,.0220367,0,593194e-10,.999808,.0221167,0,75364e-8,.99967,.0222383,0,.00237884,.999466,.0224125,0,.00495612,.999174,.0226495,0,.00844887,.998725,.0229525,0,.0128058,.996979,.0231123,0,.0179742,.994317,.0230742,0,.0239047,.992781,.0232895,0,.0305526,.991191,.0235734,0,.0378786,.987787,.0236152,0,.0458475,.985092,.0237994,0,.0544287,.981121,.0238553,0,.0635952,.976924,.0238706,0,.0733233,.97218,.0238704,0,.0835922,.965956,.0236598,0,.0943839,.959998,.0234735,0,.105682,.953245,.0232277,0,.117474,.944445,.0226973,0,.129747,.937087,.0223527,0,.142491,.928341,.0218144,0,.155697,.9184,.0211516,0,.169358,.907959,.0204553,0,.183469,.89808,.0197673,0,.198024,.887047,.0189915,0,.21302,.875221,.0182082,0,.228455,.86269,.0173584,0,.244329,.850735,.0165718,0,.260639,.837545,.0157524,0,.277389,.823639,.0149482,0,.29458,.809699,.0141431,0,.312216,.794797,.0133527,0,.3303,.780578,.0126193,0,.34884,.766019,.0118914,0,.367842,.751447,.0111839,0,.387315,.737275,.010514,0,.40727,.724545,.00987277,0,.427717,.712644,.00926569,0,.448671,.700432,.00869029,0,.470149,.687664,.00814691,0,.492167,.674288,.00763012,0,.514746,.660966,.00714437,0,.537911,.647264,.00668457,0,.561688,.633431,.00626581,0,.586108,.619133,.00585593,0,.611206,.604935,.00548188,0,.637022,.590236,.00513288,0,.663599,.575473,.0047906,0,.690989,.561228,.00448895,0,.719242,.547054,.00420233,0,.748411,.533175,.00392869,0,.778531,.519163,.00367445,0,.809583,.505328,.00344097,0,.84127,.491446,.00322003,0,.873016,.477356,.00301283,0,.904762,.46356,.00282592,0,.936508,.449623,.00264956,0,.968254,.436068,.00246956,0,1,1,.0276135,0,0,1,.0276136,0,0,.999998,.0276148,0,0,.999993,.0276201,0,0,.999976,.0276342,0,0,.999945,.027664,0,0,.999884,.0277179,0,18679e-8,.999784,.027806,0,.00119607,.99963,.0279394,0,.00318407,.999401,.0281295,0,.00613601,.999066,.0283858,0,.00999963,.998524,.0287027,0,.0147164,.995702,.0286256,0,.0202295,.993593,.0286733,0,.0264876,.992067,.0288989,0,.0334452,.990548,.0292135,0,.0410621,.986775,.0291296,0,.0493032,.984054,.0293099,0,.0581381,.979481,.0291881,0,.0675397,.975297,.0291598,0,.0774848,.96981,.028954,0,.0879528,.963524,.028628,0,.0989258,.957398,.0283135,0,.110388,.950088,.0278469,0,.122327,.941538,.0271798,0,.134729,.933332,.0265388,0,.147587,.924392,.0257776,0,.160889,.914581,.024916,0,.174631,.904347,.0240242,0,.188806,.894324,.0231229,0,.203409,.883724,.022153,0,.218437,.872207,.0211355,0,.233888,.859927,.0201048,0,.249761,.848373,.0191263,0,.266056,.836023,.0181306,0,.282774,.82289,.0171718,0,.299917,.809324,.0162196,0,.317488,.795361,.0152622,0,.335493,.781253,.01439,0,.353936,.767338,.013533,0,.372825,.753156,.0127244,0,.392168,.739122,.0119454,0,.411976,.725358,.0112054,0,.432259,.712949,.010487,0,.453032,.701621,.00984032,0,.47431,.689703,.00921495,0,.496111,.677216,.00862492,0,.518456,.664217,.00806882,0,.541367,.65137,.00755922,0,.564872,.638,.00705705,0,.589001,.62453,.00661266,0,.613789,.610601,.00618432,0,.639277,.59676,.00578033,0,.66551,.582433,.00540927,0,.692539,.568026,.00506104,0,.720422,.55414,.0047353,0,.749216,.540178,.00442889,0,.778974,.526513,.00414363,0,.809711,.512954,.00388237,0,.84127,.499403,.00362875,0,.873016,.486026,.00340827,0,.904762,.472345,.00318598,0,.936508,.458828,.00297635,0,.968254,.445379,.00279447,0,1,1,.0345716,0,0,1,.0345717,0,0,.999999,.034573,0,0,.999991,.0345787,0,0,.999974,.0345941,0,0,.999937,.0346263,0,188589e-11,.999869,.0346847,0,409238e-9,.999757,.0347798,0,.0017674,.999582,.0349233,0,.00413658,.999322,.0351265,0,.00747408,.998939,.0353967,0,.0117157,.998219,.0357018,0,.0167966,.994974,.0354726,0,.0226572,.993201,.0355621,0,.0292445,.991573,.0357641,0,.0365123,.989301,.0359252,0,.0444203,.985712,.0358017,0,.0529334,.982411,.0358353,0,.0620214,.977827,.035617,0,.0716574,.973278,.0354398,0,.0818186,.967397,.0350483,0,.0924846,.960696,.0344795,0,.103638,.954349,.0339861,0,.115263,.946066,.0331323,0,.127348,.938012,.032359,0,.13988,.929413,.0314413,0,.152849,.920355,.0304103,0,.166248,.910586,.0292785,0,.18007,.900609,.0281391,0,.194308,.890093,.0269103,0,.208958,.880013,.0257269,0,.224018,.869001,.0244671,0,.239485,.85751,.0232252,0,.255359,.84582,.0220117,0,.271638,.834383,.0208274,0,.288324,.822158,.0196628,0,.305419,.809056,.0185306,0,.322927,.795832,.0174174,0,.340851,.782547,.0163758,0,.359199,.7689,.015391,0,.377975,.755526,.0144488,0,.397189,.741681,.0135372,0,.416851,.728178,.0126957,0,.436971,.714642,.0118812,0,.457564,.702756,.0111165,0,.478644,.69175,.0104145,0,.500229,.680159,.00974439,0,.522339,.668073,.00911926,0,.544997,.655405,.00851393,0,.56823,.642921,.00797637,0,.592068,.629993,.00745119,0,.616546,.616828,.00696972,0,.641705,.603305,.00652425,0,.66759,.589833,.00610188,0,.694255,.575945,.00570834,0,.72176,.561745,.00533384,0,.750168,.548277,.00500001,0,.779545,.534467,.00467582,0,.809933,.521032,.00438092,0,.841272,.507877,.00410348,0,.873016,.494654,.00383618,0,.904762,.481592,.00358699,0,.936508,.468509,.00337281,0,.968254,.455293,.00316196,0,1,1,.0430698,0,0,1,.0430699,0,0,.999998,.0430713,0,0,.999991,.0430773,0,0,.99997,.0430936,0,0,.999928,.0431277,0,406396e-10,.999852,.0431893,0,744376e-9,.999724,.0432895,0,.0024806,.999527,.0434397,0,.00524779,.99923,.0436507,0,.00898164,.998783,.0439255,0,.0136083,.997507,.0441104,0,.0190582,.994418,.0438225,0,.0252694,.992864,.0439396,0,.0321879,.991127,.0440962,0,.039767,.987331,.0438408,0,.0479667,.984819,.0438991,0,.056752,.980384,.0435906,0,.0660929,.975846,.0432543,0,.075963,.970748,.0428293,0,.0863398,.964303,.042153,0,.0972035,.95772,.0414111,0,.108537,.950747,.0405893,0,.120325,.942533,.0394887,0,.132554,.934045,.0383544,0,.145215,.924942,.037057,0,.158296,.915811,.0356993,0,.17179,.90612,.0342401,0,.185691,.896434,.0328078,0,.199993,.886021,.031288,0,.214691,.876081,.0297776,0,.229782,.865608,.0282334,0,.245265,.854924,.026749,0,.261138,.843607,.02526,0,.277401,.832456,.0238214,0,.294056,.821342,.0224682,0,.311104,.809303,.0211297,0,.328548,.796468,.0198387,0,.346394,.784046,.0186227,0,.364645,.771262,.0174561,0,.38331,.758118,.0163806,0,.402396,.745075,.0153287,0,.421912,.731926,.0143647,0,.44187,.71863,.0134363,0,.462283,.705414,.0125603,0,.483165,.693792,.0117508,0,.504535,.683108,.0110016,0,.52641,.67183,.0102757,0,.548816,.66015,.00962044,0,.571776,.647907,.00898031,0,.595323,.635734,.00840811,0,.619489,.623208,.00786211,0,.644317,.610438,.00734953,0,.669852,.597345,.00687688,0,.696148,.584138,.00643469,0,.723267,.5707,.00602236,0,.75128,.556966,.0056324,0,.780258,.543607,.00528277,0,.810268,.530213,.00493999,0,.841311,.516912,.00462265,0,.873016,.503916,.0043307,0,.904762,.491146,.00406858,0,.936508,.478439,.00381436,0,.968254,.465834,.00358003,0,1,1,.0534039,0,0,1,.053404,0,0,.999998,.0534055,0,0,.999989,.0534116,0,0,.999968,.0534283,0,0,.999918,.0534633,0,155895e-9,.99983,.0535262,0,.00120914,.999685,.0536281,0,.00334944,.999461,.0537799,0,.00653077,.999119,.0539902,0,.0106718,.998582,.0542524,0,.0156907,.995919,.0540318,0,.0215147,.993735,.0538914,0,.0280801,.992126,.0539557,0,.0353323,.990266,.0540401,0,.0432247,.986317,.0536064,0,.0517172,.983213,.0534425,0,.0607754,.978303,.0528622,0,.0703698,.973665,.0523363,0,.0804742,.968091,.0516165,0,.0910667,.961026,.0505434,0,.102128,.954333,.049523,0,.113641,.946372,.0481698,0,.125591,.938254,.0467674,0,.137965,.929516,.0452341,0,.150754,.920106,.0435083,0,.163947,.910899,.0417399,0,.177537,.901532,.0399389,0,.191516,.891919,.0380901,0,.205881,.882006,.0362341,0,.220626,.871965,.0343444,0,.235749,.862145,.0324832,0,.251248,.852058,.0306681,0,.267121,.84161,.0289097,0,.283368,.830806,.0272079,0,.299992,.820476,.0256089,0,.316992,.809514,.0240394,0,.334374,.797865,.0225379,0,.35214,.785621,.0211235,0,.370296,.773765,.0197908,0,.388849,.761629,.0185235,0,.407807,.748891,.0173358,0,.427178,.736437,.0162305,0,.446974,.723707,.0151778,0,.467207,.710606,.0141791,0,.487892,.698019,.0132592,0,.509046,.686203,.0123887,0,.530687,.675692,.0115976,0,.552839,.664826,.0108325,0,.575527,.65349,.0101348,0,.59878,.641774,.00947756,0,.622634,.629794,.00886058,0,.647128,.617647,.00828526,0,.672308,.60534,.00775312,0,.698231,.592718,.00726033,0,.724958,.579746,.00679731,0,.752563,.566763,.00636111,0,.781127,.553515,.00595228,0,.810733,.540118,.00556876,0,.841426,.527325,.00523051,0,.873016,.514265,.00490712,0,.904762,.501406,.00460297,0,.936508,.488922,.00431247,0,.968254,.476541,.0040472,0,1,1,.0659184,0,0,1,.0659185,0,0,.999998,.06592,0,0,.999988,.0659259,0,0,.999963,.0659423,0,0,.999907,.0659764,0,374198e-9,.999806,.0660376,0,.00182071,.999639,.0661361,0,.0043894,.999378,.0662814,0,.00800055,.998985,.0664779,0,.0125594,.998285,.0666914,0,.0179786,.995071,.0661989,0,.0241822,.993172,.0660454,0,.031106,.991438,.0660105,0,.0386952,.988428,.0656875,0,.0469032,.985218,.0652913,0,.0556905,.981128,.0647107,0,.065023,.976015,.0638491,0,.0748717,.97097,.062993,0,.0852112,.964582,.0617927,0,.0960199,.957383,.0603626,0,.107279,.949969,.0588128,0,.118971,.941843,.0570274,0,.131084,.933624,.0551885,0,.143604,.924543,.053122,0,.156521,.914919,.0508897,0,.169825,.905773,.0486418,0,.18351,.896434,.0463364,0,.197569,.887195,.0440623,0,.211997,.877706,.0417799,0,.226789,.867719,.03945,0,.241944,.858587,.037243,0,.257458,.849317,.0350956,0,.273331,.839585,.0329852,0,.289563,.829856,.0310028,0,.306154,.819589,.0290953,0,.323108,.809714,.0272738,0,.340426,.79934,.0255631,0,.358113,.788224,.0239175,0,.376175,.776619,.0223831,0,.394616,.76521,.0209298,0,.413445,.753716,.0195786,0,.432671,.741564,.0183001,0,.452305,.729413,.0171259,0,.472358,.717146,.0159933,0,.492845,.70436,.0149495,0,.513783,.69219,.0139681,0,.535189,.680289,.0130577,0,.557087,.669611,.0122198,0,.5795,.659113,.0114174,0,.602459,.648148,.0106729,0,.625997,.636905,.00998997,0,.650154,.625154,.00934313,0,.674976,.613481,.00874839,0,.700518,.60154,.00818265,0,.726845,.58943,.00766889,0,.754032,.576828,.00717153,0,.782167,.564194,.00672696,0,.811344,.551501,.00630863,0,.841644,.538635,.00592177,0,.873016,.525724,.00554888,0,.904762,.513209,.00520225,0,.936508,.500457,.00488231,0,.968254,.48799,.00457153,0,1,1,.0810131,0,0,1,.0810133,0,0,.999997,.0810145,0,0,.999985,.08102,0,0,.999956,.0810347,0,195026e-10,.999893,.0810656,0,719316e-9,.999777,.0811205,0,.00259774,.999583,.081208,0,.00561807,.999281,.0813343,0,.00967472,.998813,.0814969,0,.0146627,.997597,.0815217,0,.0204902,.994379,.0808502,0,.0270802,.992744,.0806792,0,.0343674,.990745,.0804589,0,.0422974,.986646,.0796107,0,.0508242,.983611,.0790913,0,.0599087,.978869,.0780746,0,.0695175,.973475,.0768218,0,.0796223,.967845,.0754926,0,.0901983,.960778,.0737063,0,.101224,.953333,.0718052,0,.112682,.945274,.0695946,0,.124555,.936955,.0672492,0,.136831,.928319,.0647732,0,.149496,.919075,.0620947,0,.162542,.909114,.0591816,0,.175958,.900137,.0563917,0,.189739,.891069,.0535392,0,.203877,.882262,.0507642,0,.218368,.873232,.0479793,0,.233208,.864042,.045226,0,.248393,.855002,.0425413,0,.263923,.846569,.0400126,0,.279796,.837714,.0375269,0,.296012,.828918,.0352027,0,.312573,.819783,.0330011,0,.329479,.810129,.0308908,0,.346734,.800866,.0289112,0,.364342,.79093,.0270255,0,.382307,.780593,.0252758,0,.400637,.769511,.0236178,0,.419337,.758558,.0220652,0,.438418,.747632,.0206289,0,.457889,.736146,.0192873,0,.477761,.724093,.0180333,0,.49805,.71234,.0168264,0,.51877,.700201,.015746,0,.53994,.687949,.0147027,0,.561581,.676163,.0137512,0,.583718,.665001,.0128655,0,.60638,.65472,.0120366,0,.629599,.644213,.0112604,0,.653415,.633382,.0105413,0,.677874,.62212,.00986498,0,.70303,.610631,.00923308,0,.728948,.599078,.00864206,0,.755706,.587519,.00811784,0,.783396,.575505,.00761237,0,.812121,.563148,.00713949,0,.841989,.550828,.00668379,0,.873035,.538458,.00627715,0,.904762,.525905,.00588336,0,.936508,.513517,.00552687,0,.968254,.501395,.00519681,0,1,1,.0991506,0,0,1,.0991504,0,0,.999996,.0991515,0,0,.999984,.0991558,0,0,.999947,.0991672,0,114389e-9,.999874,.0991912,0,.00121503,.999739,.0992331,0,.00356108,.999514,.0992983,0,.00705578,.999159,.0993877,0,.011574,.998586,.0994837,0,.017003,.995731,.0988425,0,.0232484,.993384,.098276,0,.0302318,.991615,.0979269,0,.0378884,.989029,.0973432,0,.0461641,.985373,.0963539,0,.0550136,.981278,.0952306,0,.0643988,.975777,.0936233,0,.0742868,.970526,.0920219,0,.0846501,.963755,.0898912,0,.0954644,.956676,.0876064,0,.106709,.948099,.0847751,0,.118367,.939718,.0818638,0,.130423,.931305,.078857,0,.142862,.922342,.0756127,0,.155674,.912842,.0721473,0,.168849,.903304,.0686195,0,.182378,.89411,.0650589,0,.196255,.885512,.0616022,0,.210473,.877193,.0582434,0,.225027,.86877,.0548979,0,.239915,.860267,.0516095,0,.255132,.851915,.048468,0,.270678,.843912,.0454447,0,.286551,.83604,.0425612,0,.302751,.828245,.0398752,0,.31928,.820159,.0373198,0,.336138,.81167,.034916,0,.35333,.802659,.0326402,0,.370858,.793921,.0304901,0,.388728,.784713,.0284857,0,.406944,.774946,.0266186,0,.425515,.76448,.0248593,0,.444449,.753793,.0232114,0,.463756,.743506,.0217039,0,.483447,.732555,.0202841,0,.503535,.720965,.0189648,0,.524036,.709422,.0177189,0,.544968,.697756,.0165626,0,.56635,.685565,.015483,0,.588208,.673987,.0144892,0,.610569,.66244,.0135607,0,.633466,.651675,.0126956,0,.656936,.641598,.0118788,0,.681025,.63121,.0111261,0,.705788,.620514,.010437,0,.731289,.609366,.00978747,0,.757606,.598137,.00917257,0,.784834,.586966,.00859778,0,.813085,.575549,.00806803,0,.842485,.563797,.00757294,0,.87313,.551758,.00710592,0,.904762,.539894,.0066841,0,.936508,.527901,.00627901,0,.968254,.515819,.00590506,0,1,1,.120864,0,0,1,.120864,0,0,.999996,.120864,0,0,.99998,.120867,0,0,.99994,.120872,0,323781e-9,.999852,.120884,0,.00188693,.999693,.120903,0,.00473489,.999426,.120929,0,.00872704,.999002,.120955,0,.0137237,.998235,.120918,0,.0196068,.994608,.119764,0,.0262803,.992997,.119265,0,.0336657,.990968,.11863,0,.0416987,.987002,.117261,0,.0503261,.983524,.116009,0,.0595035,.97875,.114252,0,.0691935,.972652,.11193,0,.0793645,.966613,.109555,0,.0899894,.959275,.106612,0,.101045,.951272,.103375,0,.112512,.942323,.0996594,0,.124372,.933679,.0958841,0,.136611,.924822,.0919265,0,.149216,.915742,.0878061,0,.162176,.906348,.0834894,0,.175482,.896883,.079085,0,.189125,.88774,.0746745,0,.203098,.87986,.0705773,0,.217396,.871998,.0665005,0,.232015,.864325,.0625413,0,.24695,.856685,.0586781,0,.2622,.84925,.0550063,0,.277761,.841719,.0514727,0,.293634,.834755,.0481398,0,.309819,.827853,.0450172,0,.326315,.820888,.0420969,0,.343126,.813616,.0393702,0,.360254,.805767,.0367771,0,.377701,.797338,.0343274,0,.395474,.789122,.0320529,0,.413577,.780601,.0299485,0,.432018,.771424,.0279812,0,.450804,.761502,.0261054,0,.469944,.751166,.0243942,0,.489451,.741276,.0228087,0,.509337,.730898,.0213265,0,.529617,.719878,.0199307,0,.550307,.708379,.0186574,0,.571428,.697165,.0174446,0,.593003,.685554,.0163144,0,.615059,.673631,.015276,0,.637628,.662385,.0143003,0,.660746,.651059,.0134112,0,.68446,.640451,.0125794,0,.70882,.630536,.011793,0,.733893,.620316,.0110547,0,.759756,.609722,.0103668,0,.786505,.598804,.00973009,0,.814259,.587871,.00912812,0,.843157,.577121,.00858916,0,.87334,.566019,.00807333,0,.904762,.554664,.00759687,0,.936508,.543101,.00714759,0,.968254,.531558,.00673418,0,1,1,.146767,0,0,1,.146767,0,0,.999997,.146767,0,0,.999977,.146765,0,320658e-11,.999929,.146762,0,682576e-9,.999823,.146753,0,.00276402,.999633,.146735,0,.00614771,.999314,.146699,0,.0106613,.998796,.14662,0,.0161546,.997124,.146107,0,.0225063,.994062,.144857,0,.0296198,.992154,.144011,0,.037417,.989186,.142712,0,.0458348,.985279,.140926,0,.0548211,.980826,.13885,0,.0643326,.975056,.136168,0,.074333,.969005,.133217,0,.0847917,.961554,.12959,0,.0956828,.954206,.125886,0,.106984,.945046,.121335,0,.118675,.935678,.116492,0,.130741,.926748,.111635,0,.143166,.917764,.106625,0,.155939,.908358,.101325,0,.169049,.899219,.0960249,0,.182487,.890089,.0906527,0,.196245,.881488,.0853905,0,.210317,.874031,.0804177,0,.224697,.866932,.0756005,0,.23938,.859976,.0709019,0,.254364,.853375,.0664391,0,.269646,.846971,.0622012,0,.285223,.840483,.058129,0,.301096,.833969,.0542762,0,.317265,.82806,.0507042,0,.333729,.822128,.047368,0,.350491,.815989,.044272,0,.367554,.809336,.0413444,0,.38492,.802177,.038601,0,.402594,.79441,.0360227,0,.420582,.786573,.0336383,0,.438891,.778619,.0314321,0,.457527,.77,.029362,0,.476499,.760698,.0274102,0,.49582,.750932,.0256146,0,.5155,.740993,.023974,0,.535555,.731159,.0224182,0,.556,.720836,.0209889,0,.576855,.709913,.0196411,0,.598143,.698415,.0183824,0,.619888,.68745,.0172222,0,.642123,.676154,.0161509,0,.664883,.664383,.0151397,0,.688211,.6533,.0141873,0,.71216,.642072,.0133105,0,.736792,.631412,.0124932,0,.762186,.621622,.0117408,0,.788439,.611681,.0110358,0,.815672,.60142,.0103775,0,.844034,.59083,.00975623,0,.873699,.580254,.00918084,0,.904765,.569841,.00864721,0,.936508,.559224,.00815731,0,.968254,.548315,.00767924,0,1,1,.177563,0,0,1,.177563,0,0,.999994,.177562,0,0,.999972,.177555,0,664171e-10,.999914,.177536,0,.0012276,.999787,.177496,0,.00388025,.999556,.17742,0,.00783463,.999165,.177285,0,.0128953,.9985,.177037,0,.0189053,.995388,.175634,0,.025742,.993102,.174375,0,.033309,.990992,.173121,0,.0415298,.986932,.170896,0,.0503425,.982786,.16847,0,.0596964,.977592,.165455,0,.0695498,.971075,.161676,0,.0798676,.963967,.157458,0,.0906201,.956397,.152836,0,.101783,.947489,.147467,0,.113333,.937564,.14145,0,.125254,.928182,.135383,0,.137529,.919027,.129212,0,.150144,.909618,.12276,0,.163088,.900492,.116273,0,.176351,.891671,.1098,0,.189924,.883146,.103362,0,.203799,.875151,.0970799,0,.21797,.868338,.0911732,0,.232433,.862033,.0854966,0,.247182,.856107,.0800691,0,.262216,.850644,.0749618,0,.27753,.845261,.070079,0,.293124,.839885,.0654321,0,.308997,.834609,.0610975,0,.325149,.829083,.0569741,0,.341581,.82404,.0531736,0,.358294,.818968,.049665,0,.37529,.813496,.0463856,0,.392573,.807533,.0433217,0,.410148,.80099,.0404402,0,.428019,.793891,.0377578,0,.446192,.786281,.0352616,0,.464676,.778773,.0329577,0,.483478,.770737,.030808,0,.502608,.762094,.0287964,0,.522079,.752898,.0269254,0,.541905,.743306,.0251926,0,.5621,.733416,.023595,0,.582684,.723742,.0221155,0,.603677,.713542,.0207435,0,.625106,.702755,.019434,0,.646998,.691484,.0182046,0,.66939,.680531,.0170771,0,.692324,.66953,.0160339,0,.715849,.658126,.0150677,0,.740028,.646933,.0141551,0,.764937,.636107,.0133179,0,.790673,.625271,.0125284,0,.817358,.615225,.0117937,0,.84515,.605678,.0111181,0,.874244,.59583,.0104759,0,.904828,.585704,.00986672,0,.936508,.575413,.00929712,0,.968254,.565373,.00876713,0,1,1,.214058,0,0,.999999,.214058,0,0,.999994,.214055,0,0,.999966,.214039,0,259642e-9,.999893,.213998,0,.00200075,.999737,.21391,0,.00527775,.999449,.213745,0,.00983959,.99896,.213458,0,.0154755,.9979,.212855,0,.0220249,.994278,.210779,0,.0293654,.992254,.20926,0,.0374021,.98881,.206908,0,.0460604,.984715,.204009,0,.0552802,.979738,.200471,0,.0650127,.972884,.195813,0,.0752175,.965996,.190856,0,.0858612,.957974,.185077,0,.0969155,.949155,.17868,0,.108356,.939288,.171513,0,.120163,.928996,.163838,0,.132319,.919563,.156246,0,.144808,.910004,.148359,0,.157618,.900791,.140417,0,.170737,.892135,.132569,0,.184155,.883803,.124741,0,.197866,.876034,.117091,0,.211861,.869219,.109835,0,.226134,.863062,.102859,0,.240682,.857795,.0962928,0,.255499,.853009,.0900725,0,.270583,.848603,.0842101,0,.285931,.844335,.0786527,0,.301542,.840208,.0734397,0,.317415,.836035,.0685334,0,.33355,.83172,.0639275,0,.349948,.827135,.0595909,0,.36661,.822797,.0556204,0,.383539,.818387,.0519394,0,.400738,.813565,.0485317,0,.41821,.808142,.0453138,0,.435961,.802212,.0423354,0,.453997,.79573,.0395553,0,.472324,.788741,.036988,0,.490951,.781093,.0345688,0,.509887,.773597,.0323297,0,.529144,.765622,.0302719,0,.548735,.757083,.0283477,0,.568674,.747992,.0265562,0,.588979,.738591,.0248844,0,.609671,.728719,.0233342,0,.630773,.719146,.0219081,0,.652314,.709165,.0205711,0,.674328,.69875,.0193248,0,.696854,.687884,.0181582,0,.719942,.676818,.0170746,0,.743651,.666247,.0160718,0,.768057,.655284,.0151262,0,.793253,.64401,.0142561,0,.819363,.633353,.0134327,0,.846547,.622674,.012653,0,.875017,.612265,.0119354,0,.905021,.602455,.0112533,0,.936508,.593147,.0106234,0,.968254,.583592,.0100213,0,1,1,.25717,0,0,1,.25717,0,0,.999992,.257164,0,0,.999958,.257135,0,641715e-9,.999864,.25706,0,.00305314,.999666,.256897,0,.00700975,.999302,.256596,0,.0122194,.998663,.25607,0,.0184622,.995607,.254123,0,.0255773,.993094,.252081,0,.0334439,.9907,.249867,0,.0419696,.98594,.246118,0,.0510823,.981214,.242049,0,.0607242,.974966,.236869,0,.0708486,.967589,.230724,0,.081417,.95915,.223635,0,.0923974,.950257,.21596,0,.103763,.940165,.207296,0,.115491,.929396,.197901,0,.127562,.919288,.188437,0,.13996,.909428,.178762,0,.15267,.900105,.169072,0,.165679,.891418,.159478,0,.178979,.883347,.15002,0,.192558,.875992,.140813,0,.20641,.869466,.13196,0,.220529,.863699,.123501,0,.234907,.858553,.115436,0,.249542,.854379,.107901,0,.264428,.850894,.10088,0,.279564,.847632,.0942296,0,.294947,.844571,.0879861,0,.310575,.84163,.0821534,0,.326448,.838542,.0766409,0,.342566,.835412,.0715322,0,.358929,.831899,.0666883,0,.37554,.828177,.0622175,0,.392399,.82416,.0580452,0,.409511,.820393,.054267,0,.426878,.816068,.0507172,0,.444506,.811201,.0474041,0,.4624,.805785,.0443174,0,.480566,.799878,.0414562,0,.499013,.793469,.0388147,0,.517749,.786473,.0363453,0,.536785,.778874,.0340225,0,.556134,.771277,.0318599,0,.575809,.763426,.0298859,0,.595827,.755044,.0280357,0,.616207,.746161,.0262979,0,.636973,.737124,.0247295,0,.65815,.72761,.0232514,0,.679772,.717822,.0218755,0,.701876,.708279,.0205942,0,.724509,.698333,.0193947,0,.74773,.68802,.0182717,0,.771609,.677321,.0172044,0,.79624,.666504,.0162122,0,.821743,.656184,.0152924,0,.84828,.64556,.0144326,0,.876069,.634636,.0136157,0,.905404,.624124,.0128612,0,.936508,.613914,.0121435,0,.968254,.603589,.0114887,0,1,1,.307946,0,0,.999999,.307945,0,0,.999988,.307934,0,204479e-10,.999944,.307886,0,.00127833,.999824,.307756,0,.00445047,.999565,.30748,0,.00914673,.999085,.306966,0,.0150498,.998103,.306004,0,.0219367,.994249,.303028,0,.0296485,.991807,.300435,0,.038068,.987773,.296554,0,.0471062,.982673,.2916,0,.0566942,.976623,.285641,0,.0667768,.968757,.27815,0,.0773099,.959849,.269529,0,.088257,.950663,.260248,0,.0995879,.940129,.249704,0,.111277,.92895,.238291,0,.123304,.917996,.226501,0,.13565,.907813,.214669,0,.148299,.898305,.202835,0,.161237,.889626,.191158,0,.174455,.88175,.179695,0,.187941,.874715,.168548,0,.201687,.868746,.15792,0,.215687,.863703,.147807,0,.229933,.859315,.138149,0,.24442,.855538,.128993,0,.259145,.852428,.120414,0,.274103,.850168,.112498,0,.289293,.848132,.105054,0,.304711,.846291,.0981087,0,.320357,.844431,.0915942,0,.33623,.842493,.0855056,0,.35233,.840368,.0798204,0,.368658,.83798,.0745097,0,.385214,.83523,.0695424,0,.402002,.832091,.0649092,0,.419023,.828667,.0606291,0,.436282,.824805,.0566523,0,.453782,.820988,.0530229,0,.471529,.816635,.0496364,0,.489528,.811725,.0464658,0,.507788,.806316,.0435082,0,.526317,.800469,.0407873,0,.545124,.794107,.038255,0,.564221,.787218,.0358825,0,.583621,.779872,.0336785,0,.603341,.772097,.0316379,0,.623397,.764484,.0297379,0,.643812,.756428,.0279581,0,.664611,.748022,.0263153,0,.685824,.739268,.0247799,0,.707488,.73024,.0233385,0,.729646,.720893,.0220035,0,.752354,.71119,.0207555,0,.77568,.701791,.0195843,0,.799715,.692184,.0184891,0,.824574,.682258,.0174541,0,.850417,.67206,.0164873,0,.877466,.661717,.0155959,0,.90604,.651462,.0147519,0,.936528,.641467,.0139727,0,.968254,.631229,.0132363,0,1,1,.367573,0,0,.999999,.367571,0,0,.999984,.367553,0,183382e-9,.999925,.367473,0,.00225254,.999759,.367259,0,.00628165,.99941,.366801,0,.0117858,.998739,.365946,0,.0184359,.995529,.363191,0,.0260114,.992875,.360171,0,.0343581,.989135,.355981,0,.0433637,.984166,.350401,0,.0529438,.977871,.343348,0,.0630334,.96951,.334341,0,.0735805,.959964,.323862,0,.0845437,.950162,.312521,0,.095889,.938882,.299577,0,.107588,.926992,.285573,0,.119617,.915589,.271212,0,.131957,.904791,.256611,0,.144591,.895177,.242224,0,.157503,.886403,.227952,0,.170682,.878957,.214192,0,.184117,.872418,.200795,0,.197799,.867029,.188015,0,.21172,.862835,.175975,0,.225873,.859411,.164526,0,.240253,.856655,.153693,0,.254854,.854519,.14352,0,.269673,.852828,.13397,0,.284707,.851412,.124984,0,.299953,.850609,.116748,0,.315408,.849855,.10905,0,.331073,.849017,.101839,0,.346946,.848079,.0951359,0,.363028,.846911,.0888774,0,.379318,.845445,.0830375,0,.395818,.84362,.0775844,0,.41253,.841411,.0725054,0,.429457,.838768,.0677691,0,.446602,.835801,.0634016,0,.463968,.832341,.0593095,0,.481561,.828424,.0555121,0,.499386,.824312,.052024,0,.51745,.819918,.0487865,0,.535761,.815072,.0457801,0,.554328,.809863,.0430184,0,.573162,.804164,.0404245,0,.592275,.798034,.0380146,0,.611681,.791436,.0357436,0,.631398,.784498,.0336475,0,.651445,.777125,.0316666,0,.671845,.769365,.0298122,0,.692628,.761579,.0281001,0,.713827,.753746,.0265049,0,.735484,.745573,.0250067,0,.75765,.737083,.0236026,0,.78039,.728545,.0223302,0,.803789,.719691,.0211243,0,.82796,.710569,.0199983,0,.853056,.701216,.0189569,0,.879298,.692094,.0179702,0,.907014,.682909,.0170418,0,.936691,.673509,.0161732,0,.968254,.663863,.0153406,0,1,1,.437395,0,0,.999998,.437394,0,0,.99998,.437363,0,616704e-9,.999891,.437232,0,.00367925,.999656,.436877,0,.00867446,.999148,.436121,0,.0150679,.997959,.434564,0,.022531,.993464,.430134,0,.0308507,.990606,.426077,0,.0398805,.985027,.419397,0,.0495148,.978491,.41118,0,.0596749,.969643,.40048,0,.0703001,.959189,.38769,0,.0813427,.948223,.373575,0,.0927641,.935955,.357622,0,.104533,.923237,.34043,0,.116624,.911074,.322735,0,.129015,.899724,.30479,0,.141687,.890189,.287392,0,.154626,.881796,.270248,0,.167818,.874781,.253659,0,.181252,.869166,.237786,0,.194918,.864725,.222618,0,.208807,.861565,.208356,0,.222913,.859284,.194867,0,.237229,.857677,.18212,0,.25175,.856714,.17018,0,.266473,.856155,.158969,0,.281392,.8558,.148413,0,.296505,.855672,.138578,0,.311811,.855538,.129345,0,.327306,.855689,.120861,0,.342991,.855767,.112969,0,.358864,.855618,.105593,0,.374925,.85525,.0987451,0,.391176,.854583,.0923727,0,.407616,.853534,.0864143,0,.424249,.852061,.0808338,0,.441076,.850253,.0756771,0,.4581,.848004,.0708612,0,.475324,.845333,.0663784,0,.492754,.842376,.0622631,0,.510394,.838956,.0584112,0,.528251,.835121,.0548328,0,.546331,.830842,.0514838,0,.564644,.826212,.048355,0,.583198,.821522,.0454714,0,.602005,.816551,.0428263,0,.621078,.811211,.0403612,0,.640434,.805479,.038039,0,.660089,.799409,.0358739,0,.680066,.79306,.0338727,0,.70039,.786395,.0319985,0,.721094,.779416,.030241,0,.742215,.77214,.0285951,0,.7638,.764636,.0270747,0,.785912,.756836,.0256354,0,.808628,.749315,.0243027,0,.832055,.741561,.0230497,0,.856338,.733589,.0218801,0,.88169,.725479,.020784,0,.908441,.717255,.0197702,0,.937125,.708829,.0188168,0,.968254,.700191,.0179113,0,1,1,.518937,0,0,.999998,.518933,0,0,.999967,.518883,0,.00147741,.999832,.51866,0,.00573221,.999466,.518057,0,.011826,.998644,.516752,0,.0192116,.994458,.512347,0,.027573,.991223,.507675,0,.0367099,.985515,.500188,0,.046487,.978308,.490408,0,.0568071,.968359,.477357,0,.0675984,.95682,.461752,0,.0788059,.943929,.443796,0,.090386,.930224,.423893,0,.102304,.916514,.402682,0,.114532,.903653,.380914,0,.127047,.892315,.359212,0,.139828,.882942,.338102,0,.152861,.875438,.31773,0,.16613,.869642,.298186,0,.179624,.865304,.279491,0,.193332,.862382,.261804,0,.207247,.860666,.245146,0,.22136,.859788,.229406,0,.235666,.859608,.214605,0,.250158,.859912,.200691,0,.264832,.86053,.187623,0,.279684,.861368,.17539,0,.294711,.862237,.163901,0,.309911,.863127,.153175,0,.32528,.863923,.143147,0,.340819,.864567,.133781,0,.356524,.865013,.125042,0,.372397,.86539,.116952,0,.388438,.865591,.109476,0,.404645,.865517,.102542,0,.421022,.865084,.0960688,0,.437569,.864309,.0900499,0,.454287,.863151,.0844328,0,.471181,.861649,.0792218,0,.488253,.859742,.0743482,0,.505507,.857446,.0697963,0,.522947,.854757,.0655364,0,.54058,.851783,.061608,0,.558412,.848516,.0579701,0,.576449,.844897,.0545742,0,.594701,.840956,.0514167,0,.613178,.836676,.0484598,0,.631892,.832075,.0456934,0,.650856,.827191,.0431178,0,.670088,.822295,.0407718,0,.689606,.817294,.0386032,0,.709434,.812013,.0365675,0,.7296,.806465,.0346547,0,.750138,.800691,.0328717,0,.771093,.794709,.031211,0,.792519,.788493,.0296504,0,.814488,.782049,.0281782,0,.837097,.775403,.0267965,0,.860481,.76857,.0255002,0,.884842,.761536,.0242759,0,.910494,.754303,.0231142,0,.937985,.74692,.0220305,0,.968254,.739745,.0210192,0,1,1,.613914,0,0,.999996,.613907,0,963597e-10,.999942,.613814,0,.00301247,.999704,.613407,0,.00870385,.999046,.612302,0,.0160714,.995516,.608266,0,.0245899,.991726,.602863,0,.0339681,.985157,.593956,0,.0440254,.97642,.581748,0,.0546409,.964404,.565183,0,.0657284,.950601,.545273,0,.0772246,.935158,.522129,0,.0890812,.919364,.496782,0,.10126,.904754,.470571,0,.113731,.89176,.444037,0,.126469,.881492,.418322,0,.139454,.873656,.393522,0,.15267,.868053,.369795,0,.166101,.864336,.347171,0,.179736,.862259,.325737,0,.193565,.861556,.305532,0,.207578,.861776,.286416,0,.221769,.862661,.268355,0,.23613,.864015,.251334,0,.250656,.865711,.235352,0,.265343,.867519,.220302,0,.280187,.869351,.206161,0,.295183,.871144,.192908,0,.31033,.872839,.180505,0,.325624,.874307,.168848,0,.341065,.875667,.158021,0,.35665,.876758,.147877,0,.37238,.87764,.138441,0,.388253,.878237,.129627,0,.404269,.878563,.121415,0,.42043,.878572,.113741,0,.436735,.87842,.106652,0,.453187,.878057,.100097,0,.469786,.877413,.0940128,0,.486536,.87646,.0883462,0,.503439,.875233,.0830924,0,.520498,.8737,.0781975,0,.537717,.871873,.07364,0,.555102,.86978,.0694103,0,.572657,.867405,.0654696,0,.59039,.864751,.0617914,0,.608307,.861818,.0583491,0,.626419,.858645,.0551443,0,.644733,.855307,.0521894,0,.663264,.851736,.0494334,0,.682025,.847927,.0468504,0,.701032,.843888,.0444261,0,.720308,.839629,.0421497,0,.739875,.835158,.0400082,0,.759764,.830509,.0380076,0,.780014,.825714,.0361488,0,.800673,.820729,.0343956,0,.821803,.815751,.0327781,0,.843492,.810752,.031275,0,.86586,.805587,.0298542,0,.889087,.800317,.0285397,0,.913466,.79489,.0272948,0,.93952,.789314,.0261139,0,.96835,.783593,.0249938,0,1,1,.724258,0,0,.999992,.724243,0,726889e-9,.99987,.724044,0,.00569574,.999336,.72317,0,.0131702,.996271,.719432,0,.0220738,.991159,.712576,0,.0319405,.982465,.700927,0,.0425202,.97049,.684297,0,.0536599,.953973,.661244,0,.065258,.935546,.633804,0,.0772427,.916596,.603071,0,.0895616,.899353,.57105,0,.102175,.885216,.539206,0,.11505,.875076,.508714,0,.128164,.868334,.479571,0,.141495,.864414,.451796,0,.155026,.862678,.425328,0,.168745,.862835,.400352,0,.182639,.864067,.376532,0,.196699,.866086,.35391,0,.210915,.868557,.332424,0,.225282,.871271,.312053,0,.239792,.874058,.292764,0,.25444,.8768,.27453,0,.269223,.87939,.257297,0,.284135,.8819,.24114,0,.299174,.884187,.225934,0,.314337,.886262,.211669,0,.329622,.888119,.198311,0,.345026,.889709,.185783,0,.360549,.891054,.174063,0,.376189,.892196,.163143,0,.391946,.893101,.152952,0,.407819,.893803,.143475,0,.423808,.894277,.134647,0,.439914,.894532,.126434,0,.456137,.894576,.1188,0,.472479,.894393,.111694,0,.48894,.893976,.105069,0,.505523,.893346,.0989077,0,.52223,.892502,.0931724,0,.539064,.891441,.0878276,0,.556028,.890276,.082903,0,.573125,.888972,.0783505,0,.590361,.887469,.0741083,0,.607741,.885785,.0701633,0,.62527,.883914,.0664835,0,.642957,.881872,.0630567,0,.660809,.879651,.0598527,0,.678836,.877267,.0568615,0,.69705,.874717,.05406,0,.715465,.872012,.0514378,0,.734098,.869157,.0489805,0,.752968,.866155,.0466727,0,.772101,.863014,.0445056,0,.791529,.859748,.0424733,0,.81129,.856416,.0405957,0,.831438,.852958,.0388273,0,.852044,.849382,.0371619,0,.87321,.845694,.0355959,0,.89509,.841893,.0341155,0,.917932,.837981,.0327141,0,.942204,.833963,.0313856,0,.968981,.829847,.0301275,0,1,1,.85214,0,0,.999969,.852095,0,.00279627,.999483,.851408,0,.0107635,.994545,.84579,0,.0206454,.986188,.835231,0,.0315756,.969847,.814687,0,.0432021,.945951,.783735,0,.0553396,.91917,.746074,0,.0678766,.895488,.706938,0,.0807395,.878232,.669534,0,.0938767,.868252,.635168,0,.10725,.863873,.603069,0,.120832,.863369,.572514,0,.134598,.86545,.543169,0,.148533,.868803,.514578,0,.16262,.872794,.486762,0,.176849,.87702,.459811,0,.19121,.881054,.433654,0,.205694,.884974,.408574,0,.220294,.888587,.384525,0,.235005,.891877,.36156,0,.24982,.894793,.339661,0,.264737,.89743,.318913,0,.279751,.899796,.299302,0,.294859,.901943,.280843,0,.310058,.903858,.263481,0,.325346,.905574,.247197,0,.340721,.907069,.231915,0,.356181,.908379,.217614,0,.371725,.90952,.20425,0,.387353,.910483,.191758,0,.403063,.91128,.180092,0,.418854,.911936,.169222,0,.434727,.912454,.159098,0,.450682,.912835,.149668,0,.466718,.913078,.140884,0,.482837,.913192,.132709,0,.499038,.913175,.125095,0,.515324,.91304,.118012,0,.531695,.912781,.111417,0,.548153,.91241,.105281,0,.5647,.911924,.0995691,0,.581338,.911331,.0942531,0,.59807,.910637,.0893076,0,.6149,.90984,.0846998,0,.63183,.908941,.0804044,0,.648865,.907944,.0763984,0,.666011,.906857,.0726638,0,.683273,.90568,.0691783,0,.700659,.904416,.0659222,0,.718176,.903067,.0628782,0,.735834,.901637,.0600307,0,.753646,.900128,.0573647,0,.771625,.898544,.0548668,0,.78979,.89689,.052527,0,.808162,.895165,.0503306,0,.826771,.893371,.0482668,0,.845654,.891572,.0463605,0,.864863,.889763,.0445998,0,.884472,.887894,.0429451,0,.904592,.885967,.0413884,0,.925407,.883984,.0399225,0,.947271,.881945,.0385405,0,.97105,.879854,.0372362,0,1,.999804,.995833,0,0,.938155,.933611,0,.0158731,.864755,.854311,0,.0317461,.888594,.865264,0,.0476191,.905575,.863922,0,.0634921,.915125,.850558,0,.0793651,.920665,.829254,0,.0952381,.924073,.802578,0,.111111,.926304,.772211,0,.126984,.927829,.739366,0,.142857,.928924,.705033,0,.15873,.92973,.670019,0,.174603,.930339,.634993,0,.190476,.930811,.600485,0,.206349,.931191,.566897,0,.222222,.93149,.534485,0,.238095,.931737,.503429,0,.253968,.931939,.473811,0,.269841,.932108,.445668,0,.285714,.93225,.418993,0,.301587,.932371,.393762,0,.31746,.932474,.369939,0,.333333,.932562,.347479,0,.349206,.932638,.326336,0,.365079,.932703,.306462,0,.380952,.93276,.287805,0,.396825,.932809,.270313,0,.412698,.932851,.253933,0,.428571,.932887,.23861,0,.444444,.932917,.224289,0,.460317,.932943,.210917,0,.47619,.932965,.19844,0,.492063,.932982,.186807,0,.507937,.932995,.175966,0,.52381,.933005,.165869,0,.539683,.933011,.156468,0,.555556,.933013,.147719,0,.571429,.933013,.139579,0,.587302,.93301,.132007,0,.603175,.933004,.124965,0,.619048,.932994,.118416,0,.634921,.932982,.112326,0,.650794,.932968,.106663,0,.666667,.93295,.101397,0,.68254,.932931,.0964993,0,.698413,.932908,.0919438,0,.714286,.932883,.0877057,0,.730159,.932856,.0837623,0,.746032,.932827,.0800921,0,.761905,.932796,.0766754,0,.777778,.932762,.0734936,0,.793651,.932727,.0705296,0,.809524,.932689,.0677676,0,.825397,.93265,.0651929,0,.84127,.932609,.0627917,0,.857143,.932565,.0605515,0,.873016,.932521,.0584606,0,.888889,.932474,.0565082,0,.904762,.932427,.0546841,0,.920635,.932377,.0529793,0,.936508,.932326,.0513851,0,.952381,.932274,.0498936,0,.968254,.93222,.0484975,0,.984127,.932164,.0471899,0,1],n=new Float32Array(e),s=new Float32Array(t),r=new mt(n,64,64,He,st,En,Pe,Pe,ue,pe,1),a=new mt(s,64,64,He,st,En,Pe,Pe,ue,pe,1);r.needsUpdate=!0,a.needsUpdate=!0;let o=new Uint16Array(e.length);e.forEach(function(f,d){o[d]=xi.toHalfFloat(f)});let l=new Uint16Array(t.length);t.forEach(function(f,d){l[d]=xi.toHalfFloat(f)});let c=new mt(o,64,64,He,We,En,Pe,Pe,ue,pe,1),h=new mt(l,64,64,He,We,En,Pe,Pe,ue,pe,1);return c.needsUpdate=!0,h.needsUpdate=!0,this.LTC_HALF_1=c,this.LTC_HALF_2=h,this.LTC_FLOAT_1=r,this.LTC_FLOAT_2=a,this}};en.LTC_HALF_1=null;en.LTC_HALF_2=null;en.LTC_FLOAT_1=null;en.LTC_FLOAT_2=null;var Wa=class{static init(){en.init();let{LTC_FLOAT_1:e,LTC_FLOAT_2:t,LTC_HALF_1:n,LTC_HALF_2:s}=en;x0.LTC_FLOAT_1=e,x0.LTC_FLOAT_2=t,x0.LTC_HALF_1=n,x0.LTC_HALF_2=s}};var Ut=new L(0,1.1,8.6),N2=new L(0,1.02,0),Xa=22,V0=(()=>{let i=new L(0,.95,0),e=68*Math.PI/180,t=30*Math.PI/180,n=new L(-Math.sin(t)*Math.cos(e),Math.sin(e),Math.cos(t)*Math.cos(e)),s=40,r=i.clone().addScaledVector(n,s),a=2.7,o=1.15,l=Math.atan(a/s),c=Math.atan(o/s);return{pos:r,target:i,dir:n.clone().negate(),angle:l,penumbra:1-c/l,cosOuter:Math.cos(l),cosInner:Math.cos(c),outerRadius:a,color:new R0(1,.85,.66),candela:21e3,sourceRadius:3}})(),ie={anchor:new L(3.4,31,-78),cable:15.2,length:12.2,tilt:31*Math.PI/180,swing:4.6*Math.PI/180,color:new R0(.62,1,.93),candela:900},$n=[{x:.9,z:.72,period:2.9,phase:.4,pool:1},{x:-1.18,z:2.15,period:4.3,phase:2.2,pool:1},{x:-1.55,z:-1.7,period:3.7,phase:1.3,pool:1},{x:2.3,z:-4.6,period:2.3,phase:.9,pool:1},{x:-.55,z:4.9,period:5.1,phase:3.4,pool:0},{x:-3.4,z:-9.5,period:3.1,phase:.1,pool:1},{x:4.4,z:-13,period:4.7,phase:2.9,pool:1}],Ui=46,b1=7.5;var U2="data:font/woff2;base64,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";var F2="data:font/woff2;base64,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";var O2="data:font/woff2;base64,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";var T1="TheOneSans",z2="TheOneCondensed",vu='"Arial Black", "Helvetica Neue", "Segoe UI", Arial, sans-serif',Qe='"Helvetica Neue", Helvetica, Arial, sans-serif';async function H2(){let i=[new FontFace(T1,`url(${U2})`,{weight:"700",style:"normal"}),new FontFace(T1,`url(${F2})`,{weight:"700",style:"italic"}),new FontFace(z2,`url(${O2})`,{weight:"100 900",style:"normal"})];await Promise.all(i.map(async e=>{try{await e.load(),document.fonts.add(e)}catch{}}))}var qa=(i,e)=>{let t=Math.sin(i*127.1+e*311.7)*43758.5453123;return t-Math.floor(t)};function E1(i,e,t){let n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s;r=r*r*(3-2*r),a=a*a*(3-2*a);let o=d=>(d%t+t)%t,l=qa(o(n),s),c=qa(o(n+1),s),h=qa(o(n),s+1),f=qa(o(n+1),s+1);return l+(c-l)*r+(h-l)*a+(l-c-h+f)*r*a}function yu(i,e,t){let s=Math.ceil(e/9),r=Math.ceil(t/9),a=7,o=new Float32Array((s+1)*(r+1));for(let c=0;c<=r;c++)for(let h=0;h<=s;h++){let f=h/s*a,d=c*9/e*a*.62;o[c*(s+1)+h]=.62*E1(f,d,a)+.28*E1(f*2+3.7,d*2+1.3,a*2)+.1*E1(f*4,d*4+9.1,a*4)}let l=(c,h)=>o[h*(s+1)+c];i.beginPath();for(let c=.2;c<.84;c+=.034)for(let h=0;h<r;h++)for(let f=0;f<s;f++){let d=l(f,h),u=l(f+1,h),m=l(f+1,h+1),y=l(f,h+1),g=(d>c?1:0)|(u>c?2:0)|(m>c?4:0)|(y>c?8:0);if(g===0||g===15)continue;let p=f*9,M=h*9,T=(D,P)=>(c-D)/(P-D),b=[p+9*T(d,u),M],A=[p+9,M+9*T(u,m)],E=[p+9*T(y,m),M+9],_=[p,M+9*T(d,y)],v=(D,P)=>{i.moveTo(D[0],D[1]),i.lineTo(P[0],P[1])};switch(g){case 1:case 14:v(_,b);break;case 2:case 13:v(b,A);break;case 3:case 12:v(_,A);break;case 4:case 11:v(A,E);break;case 6:case 9:v(b,E);break;case 7:case 8:v(_,E);break;case 5:v(_,b),v(A,E);break;case 10:v(b,A),v(_,E);break}}i.stroke()}function B2(i,e,t,n){let s=t/1e3,r=e/s,a=1e3;i.setTransform(s,0,0,s,0,0),i.textBaseline="alphabetic",i.lineJoin="round";let o=(v,D)=>`rgb(0,${Math.round(v*255)},${Math.round(D*255)})`,l=n?{bg:o(.42,0),white:o(.5,0),line:o(.48,0),print:o(.44,0),gold:o(.33,.6),grey:o(.4,.25),silver:o(.36,.3)}:{bg:"#060606",white:"#f4f3ee",line:"rgba(244,243,238,0.82)",print:"#0b0a09",gold:"#e9c079",grey:"#4b4845",silver:"#e6e6e2"},c=(v,D,P,I,N,U)=>{if(n)return l[v];let C=i.createLinearGradient(D,P,I,N);return U.forEach(([H,V])=>C.addColorStop(H,V)),C},h=(v,D)=>c("gold",v,0,D,0,[[0,"#e3b468"],[.45,"#f4d697"],[1,"#e5ba70"]]),f={},d=(v,D,P,I)=>`${I?"italic ":""}${P} ${D}px ${v}`,u=(v,D,P)=>{let I=v+D+P;if(!f[I]){i.font=d(v,200,D,P);let N=i.measureText("H");f[I]=(N.actualBoundingBoxAscent||150)/200}return f[I]};function m(v,D,P,I){let{cap:N,family:U=T1,weight:C=700,italic:H=!1,align:V="left",spacing:z=0,fit:t0=0,fitX:q=0,color:k=l.white}=I,J=I.squeeze||1;i.font=d(U,N/u(U,C,H),C,H),i.fillStyle=k,i.textAlign="left";let h0=[...v],p0=z,B;if(t0||z){let K=h0.map(n0=>i.measureText(n0).width),i0=K.reduce((n0,I0)=>n0+I0,0);t0&&(p0=(t0/J-i0)/Math.max(1,h0.length-1)),B=(i0+p0*(h0.length-1))*J;let y0=V==="center"?D-B/2:V==="right"?D-B:D;i.save(),i.translate(y0,P),i.scale(J,1);let l0=0;h0.forEach((n0,I0)=>{i.fillText(n0,l0,0),l0+=K[I0]+p0}),i.restore()}else{let K=i.measureText(v).width;q&&(J=q/K),B=K*J;let i0=V==="center"?D-B/2:V==="right"?D-B:D;i.save(),i.translate(i0,P),i.scale(J,1),i.fillText(v,0,0),i.restore()}return B}let y=(v,D,P,I,N)=>{i.fillStyle=N,i.fillRect(v,D,P,I)},g=(v,D,P,I,N,U)=>{i.strokeStyle=U,i.lineWidth=N,i.strokeRect(v,D,P,I)},p=r/360,M=r/2,T={x0:M-63.25*p,x1:M+63.25*p},b={x0:M+69*p,x1:M+177.5*p},A={x0:M-177.5*p,x1:M-69*p},E=46,_=925;y(0,0,r,a,l.bg),i.save(),i.beginPath(),i.rect(0,0,r,a),i.rect(T.x0,0,T.x1-T.x0,a),i.rect(b.x0,E,b.x1-b.x0,_-E),i.rect(A.x0,E,A.x1-A.x0,_-E),i.clip("evenodd"),i.strokeStyle=l.line,i.lineWidth=1.7,i.lineCap="round",yu(i,r,a),i.restore();{let v=M-54.7*p,D=77.2*p;m("THE",v,179,{cap:75,fitX:26.75*p}),m("ONE",v-4,410,{cap:201,fitX:D+6,color:c("silver",0,209,0,410,[[0,"#ffffff"],[.55,"#f1f1ee"],[1,"#d7d7d3"]])}),y(v,433,D,11,c("gold",v,0,v+D,0,[[0,"#e6bb72"],[.5,"#f6e3b6"],[1,"#ffffff"]])),m("PRE-WORKOUT",v,510,{cap:44,fit:D,color:h(v,v+D)});let P=537,I=75,N=48.6*p;i.beginPath(),i.moveTo(v+10,P),i.lineTo(v+N,P),i.lineTo(v+N-44,P+I),i.lineTo(v+10,P+I),i.quadraticCurveTo(v,P+I,v,P+I-10),i.lineTo(v,P+10),i.quadraticCurveTo(v,P,v+10,P),i.closePath(),i.fillStyle=c("gold",v,0,v+N,0,[[0,"#e7bd75"],[.6,"#f3dcab"],[1,"#fbf5e6"]]),i.fill(),m("CHERRY",v+30,P+55,{cap:37,color:l.print,spacing:1.5});{let B=v+N+42,K=P+40;i.fillStyle=l.white,i.strokeStyle=l.white,i.lineWidth=3.4,i.lineCap="round",i.beginPath(),i.arc(B-15,K+17,15.5,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(B+16,K+23,15.5,0,Math.PI*2),i.fill(),i.beginPath(),i.moveTo(B-13,K+3),i.quadraticCurveTo(B-10,K-22,B+8,K-36),i.stroke(),i.beginPath(),i.moveTo(B+15,K+8),i.quadraticCurveTo(B+15,K-18,B+8,K-36),i.stroke(),i.beginPath(),i.moveTo(B+8,K-36),i.quadraticCurveTo(B+30,K-50,B+48,K-32),i.quadraticCurveTo(B+28,K-20,B+8,K-36),i.fill(),i.strokeStyle=l.bg,i.lineWidth=3,i.beginPath(),i.arc(B+16,K+23,18.5,Math.PI*.85,Math.PI*1.35),i.stroke()}let U=T.x0,C=T.x1-T.x0,H=664,V=261;y(U,H,C,V,c("gold",0,H,0,H+V,[[0,"#ecc27c"],[.4,"#f3d08f"],[1,"#e9bd76"]])),n||y(U,H,C,V,c("gold",U,0,U+C,0,[[0,"rgba(255,255,255,0)"],[.42,"rgba(255,246,220,0.22)"],[1,"rgba(255,255,255,0)"]]));let z=(B,K,i0)=>y(B,i0,K-B,2.2,l.print),t0=M-59.4*p,q=M-20.3*p,k=M+5*p,J=M+38.2*p,h0=M+60.3*p;z(t0,q-34,688),z(q-6,J-24,688),z(J+12,h0,688),["SCIENCE-BASED","FORMULA FOR HIGH","PERFORMANCE"].forEach((B,K)=>m(B,t0,733+K*28.5,{cap:17.5,color:l.print}));let p0=m("10+",q,771,{cap:50,color:l.print});m("G",q+p0+4,771,{cap:25,color:l.print}),m("L-CITRULLINE",q,800,{cap:14.5,italic:!0,color:l.print,spacing:.6}),p0=m("350",k,771,{cap:50,color:l.print}),m("MG",k+p0+14,771,{cap:25,color:l.print}),m("CAFFEINE ANHYDROUS",k,800,{cap:14.5,italic:!0,color:l.print,spacing:.6}),y(J,702,2.4,100,l.print);{let B=J+26;i.strokeStyle=l.print,i.fillStyle=l.print,i.lineWidth=3,i.beginPath(),i.moveTo(B,792),i.lineTo(B,722),i.stroke(),i.beginPath(),i.moveTo(B-9,730),i.lineTo(B,712),i.lineTo(B+9,730),i.closePath(),i.fill()}["INCREASES","POWER &","ENDURANCE"].forEach((B,K)=>m(B,J+46,733+K*28.5,{cap:17.5,color:l.print})),y(U,812,C,50,c("grey",U,0,U+C,0,[[0,"rgba(75,72,69,0)"],[.16,"rgba(75,72,69,0)"],[.62,"rgba(75,72,69,0.92)"],[1,"rgba(60,58,56,1)"]])),n&&y(U,812,C*.3,50,l.gold),m("HIGH DOSAGE FORMULA",h0,849,{cap:25,align:"right",spacing:1.2}),p0=m("NET WT 485,5",t0,902,{cap:15.5,color:l.print,spacing:.4}),i.font=`400 26px ${Qe}`,i.fillStyle=l.print,i.fillText("\u212E",t0+p0+9,903),m("30 SERVINGS",h0,902,{cap:15.5,align:"right",color:l.print,spacing:.4})}{let v=b.x0,D=b.x1-b.x0,P=E,I=_-E;y(v,P,D,I,l.bg),g(v,P,D,I,4,l.white);let N=k=>v+14+k/1018*(D-28),U=k=>P+6+k/1100*(I-14),C=(I-14)/1100,H=(k,J)=>c("gold",k,0,J,0,[[0,"#ffffff"],[.45,"#fbd9a8"],[1,"#f39a1f"]]),V=(k,J,h0,p0)=>y(N(k),U(h0),N(J)-N(k),p0*C,H(N(k),N(J))),z=(k,J,h0)=>y(N(k),U(h0),N(J)-N(k),2.2,l.white);m("Supplement Facts",N(24),U(100),{cap:60*C,family:vu,weight:900,fitX:N(948)-N(24)}),m("Serving size: 1 Scoop (Approx 16,18g)",N(24),U(160),{cap:23*C,family:Qe,weight:400}),m("Servings per container: 30",N(24),U(197),{cap:23*C,family:Qe,weight:400}),V(24,1e3,208,12),m("Amount Per Serving",N(24),U(258),{cap:21*C,family:Qe,weight:700,spacing:.8}),m("1 Scoop (16,18g)",N(554),U(258),{cap:21*C,family:Qe,weight:700,align:"center",spacing:.6}),m("2 Scoops (32,36g)",N(862),U(258),{cap:21*C,family:Qe,weight:700,align:"center",spacing:.3}),V(24,1e3,272,5),y(N(388),U(220),2.6,U(1012)-U(220),l.white),y(N(720),U(220),2.6,U(1012)-U(220),l.white),[["Calories",0,"5g","10g",306,316],["Total Carbohydrate",0,"<1g","2g",345,352],["Total sugars",26,"0g","0g",382,390],["Added sugars",44,"0g","0g",421,0]].forEach(([k,J,h0,p0,B,K])=>{m(k,N(24+J),U(B),{cap:16*C,family:Qe,weight:400}),m(h0,N(554),U(B),{cap:16*C,family:Qe,weight:400,align:"center"}),m(p0,N(862),U(B),{cap:16*C,family:Qe,weight:400,align:"center"}),K&&(z(24,380,K),z(397,712,K),z(728,1e3,K))}),V(24,1e3,432,5),[[["L-Citrulline"],"5250mg","10.500mg",487,510],[["L-Tyrosine"],"2500mg","5000mg",563,583],[["HydroPrime\xAE Glycerol","Powder (65%)"],"2000mg","4000mg",652,694],[["Betaine Anhydrous"],"2000mg","4000mg",754,788],[["Agmatine Sulfate"],"500mg","1000mg",852,882],[["Caffeine Anhydrous"],"175mg","350mg",948,991]].forEach(([k,J,h0,p0,B])=>{k.length===2?(m(k[0],N(32),U(p0-10),{cap:22*C,family:Qe,weight:400}),m(k[1],N(32),U(p0+24),{cap:22*C,family:Qe,weight:400})):m(k[0],N(34),U(p0),{cap:22*C,family:Qe,weight:400}),m(J,N(554),U(p0),{cap:21*C,family:Qe,weight:400,align:"center"}),m(h0,N(862),U(p0),{cap:21*C,family:Qe,weight:400,align:"center"}),z(24,380,B),z(397,712,B),z(728,1e3,B)}),V(30,1004,1025,9)}{let v=A.x0,D=A.x1-A.x0,P=E,I=_-E;y(v,P,D,I,l.bg),g(v,P,D,I,3,l.white);let N=v+D*.392;y(N,P,2.6,I,l.white);let U=v+22,C=m("ONE",U,157,{cap:45});y(U,163,C,4,l.white),m("SUPPLEMENTS",U,180,{cap:10.5,fit:C});let H=h(U,U+240);m("SUGGESTED USE:",U,241,{cap:20,color:H,spacing:.6});let V=(K,i0,y0,l0)=>K.forEach((n0,I0)=>m(n0,U,i0+I0*y0,{cap:l0,family:z2,weight:500,squeeze:.93}));V(["Mix 1-2 scoops of \u2018the One\u2019","pre-workout with 300- 350ml of water.","Shake thoroughly, and consume 30","minutes prior to training. First time","users should begin use with 1/2 to 1","scoop or less to evaluate tolerance."],276,22.6,14.6),m("WARNING",U,430,{cap:20,color:H,spacing:.6}),V(["KEEP OUT OF REACH OF CHILDREN.","This product should not be taken","by individuals who are nursing,","pregnant, have a medical condition","or are under the age of 18. Please","consult your physician before","implementing any new dietary","supplement.","Do NOT use this product with other","caffeinated products, stimulants,","alcohol or other medications. Store","in a cool, dry place. NEVER exceed 2","scoops in any 24-hour period. Keep","out of reach of children."],456,22.4,14.6),V(["Other ingredients: Natural and","artificial flavour, E551, E955"],782,23,14.6),V(["Manufactured by One Supplements","Voorburg, Netherlands","support@onesupplements.shop","Onesupplements.shop"],852,14.4,7.6);let z=N+26,t0=v+D-16,q=z+(t0-z)*.57,k=t0-44;m("INGREDIENT",z+22,141,{cap:9.5,italic:!0,spacing:.5}),m("THE ONE",q,128,{cap:9.5,italic:!0,align:"center",spacing:.5}),m("PRE-WORKOUT",q,143,{cap:9.5,italic:!0,align:"center",spacing:.5}),m("MAXIMUM",k,128,{cap:9.5,italic:!0,align:"center",spacing:.5}),m("DOSE",k,143,{cap:9.5,italic:!0,align:"center",spacing:.5}),[[["L-CITRULLINE"],"10,500 MG","10,000 MG",210],[["L-TYROSINE"],"5 GRAMS","5 GRAMS",281],[["BETAINE","ANHYDROUS"],"4 GRAMS","4 GRAMS",346],[["CAFFEINE","ANHYDROUS"],"350 MG","350 MG",427]].forEach(([K,i0,y0,l0])=>{let n0=0;K.forEach((U0,O0)=>{n0=Math.max(n0,m(U0,z,l0+O0*25.5,{cap:17,italic:!0,spacing:.8}))});let I0=l0-8+(K.length-1)*8,T0=z+(K.length>1?Math.min(n0,150):n0)+12,G0=k-46;y(T0,I0,G0-T0,2.6,h(T0,G0)),y(G0,I0-9,2.4,20,l.white),m(i0,q,I0-9,{cap:9,align:"center",spacing:.4}),m(y0,k,I0+5,{cap:9,align:"center",spacing:.4})});let h0=528,p0=[z+(t0-z)*.16,z+(t0-z)*.5,z+(t0-z)*.84];i.strokeStyle=l.white,i.fillStyle=l.white,i.lineWidth=3,i.lineCap="round";{let K=(i0,y0)=>{i.save(),i.translate(i0,y0),i.rotate(-.42),i.strokeRect(-17,-11,30,22),i.beginPath(),i.moveTo(13,-4),i.lineTo(50,-4),i.lineTo(50,4),i.lineTo(13,4),i.stroke(),i.restore()};K(p0[0]-22,h0+12),K(p0[0]-2,h0+18)}{i.save(),i.translate(p0[1],h0+4),i.rotate(.3),i.beginPath(),i.moveTo(-13,-22),i.lineTo(13,-22),i.lineTo(16,34),i.lineTo(-16,34),i.closePath(),i.stroke(),i.strokeRect(-9,-36,18,13),i.restore();for(let K of[-1,1])i.beginPath(),i.arc(p0[1],h0+4,37,K>0?-.9:Math.PI-.5,K>0?-.2:Math.PI+.2),i.stroke()}i.beginPath(),i.arc(p0[2],h0+10,27,0,Math.PI*2),i.stroke(),i.strokeRect(p0[2]-6,h0-28,12,9),i.beginPath(),i.moveTo(p0[2],h0+10),i.lineTo(p0[2],h0-6),i.stroke(),i.beginPath(),i.arc(p0[2],h0+10,16,Math.PI*.55,Math.PI*1.9),i.stroke();let B=(K,i0,y0,l0)=>{m(i0,K,598,{cap:14,align:"center",spacing:.5});let n0=598;y0&&(n0+=19,m(y0,K,n0,{cap:14,align:"center",spacing:.5})),m(l0,K,n0+17,{cap:7.5,italic:!0,align:"center",spacing:.4})};B(p0[0],"32 GRAMS","","PER 2 SCOOPS"),B(p0[1],"MIX WITH","WATER","SHAKE WELL"),B(p0[2],"TAKE 30","MINUTES","BEFORE TRAINING");{let y0=z+6,l0=t0-4,n0=16,I0=[y0,y0+(l0-y0)*.36,y0+(l0-y0)*.66,l0],T0=[c("silver",I0[0],0,I0[1],0,[[0,"#f4f4f1"],[1,"#b9b9b5"]]),c("silver",I0[1],0,I0[2],0,[[0,"#ffffff"],[1,"#e9e9e6"]]),c("silver",I0[2],0,I0[3],0,[[0,"#d8d8d4"],[1,"#f6f6f3"]])],G0=[["ENHANCES","BLOODFLOW"],["HIGH-STIM"],["NOOTROPIC","INGREDIENTS"]];for(let U0=0;U0<3;U0++){i.beginPath(),i.moveTo(I0[U0]+n0,664),i.lineTo(I0[U0+1]+n0-3,664),i.lineTo(I0[U0+1]-3,710),i.lineTo(I0[U0],710),i.closePath(),i.fillStyle=T0[U0],i.fill();let O0=(I0[U0]+I0[U0+1])/2+n0/2-1;G0[U0].length===2?(m(G0[U0][0],O0,684,{cap:10.5,italic:!0,align:"center",color:l.print}),m(G0[U0][1],O0,701,{cap:10.5,italic:!0,align:"center",color:l.print})):m(G0[U0][0],O0,693,{cap:12,italic:!0,align:"center",color:l.print})}}{let K=z+2,i0=t0-6,y0=768,l0=878,n0=62,I0=15;i.fillStyle=l.grey,i.fillRect(K,y0,n0,I0),i.fillRect(K,y0,I0,n0*.75),i.fillRect(i0-n0,l0-I0,n0,I0),i.fillRect(i0-I0,l0-n0*.75,I0,n0*.75);let T0=(K+i0)/2;m("OUR PROMISE",T0,818,{cap:20,align:"center",spacing:.6}),m("\u2018The One\u2019 is more than just a pre-workout- It\u2019s a promise to",T0,841,{cap:9.2,family:Qe,weight:400,italic:!0,align:"center"}),m("only deliver excellence and real results.",T0,859,{cap:9.2,family:Qe,weight:400,italic:!0,align:"center"})}}i.setTransform(1,0,0,1,0,0)}function Mu(i,e=4096){let t=1280,n=Math.round(t*i);n>e&&(n=e,t=Math.round(n/i));let s=document.createElement("canvas");s.width=n,s.height=t,B2(s.getContext("2d"),n,t,!1);let r=document.createElement("canvas");return r.width=Math.round(n/2),r.height=Math.round(t/2),B2(r.getContext("2d"),r.width,r.height,!0),{colour:s,gloss:r}}function k2(i,e){let{colour:t,gloss:n}=Mu(i,e),s=new _n(t);s.colorSpace=tt,s.wrapS=Tt;let r=new _n(n);return r.wrapS=Tt,{map:s,mr:r}}var An={radius:.572,bodyRadius:.555,height:1.66},G2=192,Ya=(i,e,t,n,s,r)=>{let a=[];for(let o=0;o<=r;o++){let l=(n+(s-n)*(o/r))*Math.PI/180;a.push([i+t*Math.cos(l),e+t*Math.sin(l)])}return a},V2=(i,e,t)=>{let n=[];for(let s=1;s<=t;s++)n.push([i[0]+(e[0]-i[0])*s/t,i[1]+(e[1]-i[1])*s/t]);return n},Ns=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function Y2(i){let e=new Uint8Array(i.length*4);i.forEach((n,s)=>{let r=Math.round(255*Math.min(1,Math.max(0,n)));e[s*4]=e[s*4+1]=e[s*4+2]=r,e[s*4+3]=255});let t=new mt(e,1,i.length,He);return t.magFilter=t.minFilter=ue,t.needsUpdate=!0,t}var W2=(i,e)=>Y2(i.map(([t,n])=>e(t,n)));function X2(i,e,t,n=1){let s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),a=Math.round(255*(e+t)/2);r.fillStyle=`rgb(${a},${a},${a})`,r.fillRect(0,0,i,i);let o=7,l=()=>(o=o*16807%2147483647,o/2147483647);for(let h=0;h<900;h++){let f=l()*i,d=l()*i,u=(6+l()*46)*i/512,m=Math.round(255*(e+l()*(t-e)));for(let y of[-i,0,i])for(let g of[-i,0,i]){let p=r.createRadialGradient(f+y,d+g,0,f+y,d+g,u);p.addColorStop(0,`rgba(${m},${m},${m},0.22)`),p.addColorStop(1,`rgba(${m},${m},${m},0)`),r.fillStyle=p,r.save(),r.translate(f+y,d+g),r.scale(n,1),r.translate(-(f+y),-(d+g)),r.fillRect(f+y-u,d+g-u,u*2,u*2),r.restore()}}let c=new _n(s);return c.wrapS=c.wrapT=Tt,c}function q2(i){return i.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
      reflectedLight.directDiffuse *= ambientOcclusion;
      reflectedLight.directSpecular *= ambientOcclusion;`)},i.customProgramCacheKey=()=>"cavities",i}function Z2(i,e){let t=new Ee,n=(T,b)=>{let A=new zn(T.map(([_,v])=>new v0(Math.max(_,0),v)),G2),E=new ae(A,b);return t.add(E),E},s=An.bodyRadius,r=[[0,.036],[.33,.036],[.365,.03],[.39,.008],[.42,0],...Ya(s-.07,.07,.07,-90,0,14),...V2([s,.07],[s,1.355],6),...Ya(s-.035,1.355,.035,0,90,10).slice(1),[.505,1.392],[.5,1.402],[.5,1.47]],a=X2(512,.8,1);a.repeat.set(3,2);let o=new kn({color:394758,roughness:.46,roughnessMap:a,metalness:0,specularIntensity:.9,aoMap:W2(r,(T,b)=>Math.min(1-.85*Ns(1.34,1.41,b),.5+.5*Ns(0,.07,b)))});n(r,q2(o));let l=An.radius,c=[[.5,1.418],[l-.016,1.418],...Ya(l-.01,1.428,.01,-90,0,6).slice(1),[l,1.46],[l-.0035,1.4645],[l-.0035,1.4705],[l,1.475],...V2([l,1.475],[l,1.626],4),...Ya(l-.034,1.626,.034,0,90,12).slice(1),[.5,An.height],[.49,1.654],[.46,1.651],[0,1.651]],h=X2(256,.82,1,5);h.repeat.set(4,1);let f=new kn({color:460551,roughness:.4,roughnessMap:h,metalness:0,specularIntensity:.95,aoMap:W2(c,(T,b)=>.45+.55*Ns(1.418,1.44,b))});n(c,q2(f));let d=1.245,u=s+.003,{map:m,mr:y}=k2(2*Math.PI*u/d,Math.min(4096,e||4096));m.anisotropy=i,y.anisotropy=Math.min(4,i);let g=[];for(let T=0;T<64;T++){let b=T/63;g.push(Math.min(1-.5*Ns(.95,1,b),.72+.28*Ns(0,.06,b)))}let p=new kn({map:m,roughnessMap:y,metalnessMap:y,roughness:1,metalness:1,aoMap:Y2(g)}),M=new ae(new oe(u,u,d,G2,1,!0),p);return M.position.y=.105+d/2,M.rotation.y=Math.PI,t.add(M),t.userData.materials={plastic:o,lidPlastic:f,labelMat:p},t}var Rn=`
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
             mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + 17.0; a *= 0.5; }
  return s;
}
float fbm3(vec2 p) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 3; i++) { s += a * vnoise(p); p = p * 2.03 + 17.0; a *= 0.5; }
  return s;
}
`,Za=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,$a=`
uniform vec3 camPos;
uniform vec3 camFwd;
uniform vec3 camRight;
uniform vec3 camUp;
vec3 viewRay(vec2 uv) {
  return normalize(camFwd + (uv.x * 2.0 - 1.0) * camRight + (uv.y * 2.0 - 1.0) * camUp);
}
`,Us=`
uniform vec3 keyPos;
uniform vec3 keyDir;   // unit, from the lamp towards its target
uniform vec2 keyCone;  // cos(outer angle), cos(inner angle)
float keySpot(vec3 p) {
  vec3 v = p - keyPos;
  float d2 = dot(v, v);
  float c = dot(v, keyDir) * inversesqrt(d2);
  return smoothstep(keyCone.x, keyCone.y, c) / d2;
}
`,Fs=`
uniform vec3 tubShape; // radius, base height, top height
float tubHit(vec3 ro, vec3 rd) {
  float R = tubShape.x;
  float a = dot(rd.xz, rd.xz);
  if (a > 1.0e-9) {
    float b = dot(ro.xz, rd.xz);
    float c = dot(ro.xz, ro.xz) - R * R;
    float h = b * b - a * c;
    if (h > 0.0) {
      float t0 = (-b - sqrt(h)) / a;
      float y0 = ro.y + t0 * rd.y;
      if (t0 > 0.0 && y0 > tubShape.y && y0 < tubShape.z) return t0;
    }
  }
  if (abs(rd.y) > 1.0e-6) {
    float tc = ((rd.y > 0.0 ? tubShape.y : tubShape.z) - ro.y) / rd.y;
    vec2 q = ro.xz + tc * rd.xz;
    if (tc > 0.0 && dot(q, q) < R * R) return tc;
  }
  return -1.0;
}
`,Os=`
float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
`;var Su=0;function Fi(i,e={}){let t=e.key||`patch${Su++}`;return i.onBeforeCompile=n=>{Object.assign(n.uniforms,e.uniforms||{}),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
varying float vViewZ;`).replace("#include <project_vertex>",`#include <project_vertex>
        {
          vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp;
          #endif
          vWPos = (modelMatrix * wp).xyz;
          vViewZ = -mvPosition.z;
        }`);let s=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
varying float vViewZ;
${e.decl||""}`),r=(a,o)=>{o&&(s=s.replace(`#include <${a}>`,`#include <${a}>
${o}`))};r("color_fragment",e.albedo),r("roughnessmap_fragment",e.rough),r("metalnessmap_fragment",e.metal),r("normal_fragment_maps",e.normal),e.light&&(s=s.replace("#include <opaque_fragment>",`${e.light}
#include <opaque_fragment>`)),s=s.replace("#include <dithering_fragment>",`#include <dithering_fragment>
gl_FragColor.a = vViewZ;`),n.fragmentShader=s},i.customProgramCacheKey=()=>t,i}function tn(i,{amount:e=.5,rust:t=0,dust:n=0,scale:s=1,key:r}={}){return Fi(i,{key:r||`grime${e}_${t}_${n}_${s}`,decl:Rn,albedo:`
      vec3 gq = vWPos * ${s.toFixed(3)};
      float g1 = fbm(gq.xy * 0.7 + gq.z * 0.41 + 3.0);
      float g2 = fbm(gq.zy * 1.9 + gq.x * 0.83 + 11.0);
      diffuseColor.rgb *= 1.0 - ${e.toFixed(3)} * smoothstep(0.3, 0.75, g1);
      float rustAmt = ${t.toFixed(3)} * smoothstep(0.5, 0.72, g2);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.21, 0.075, 0.03) * (0.5 + g1), rustAmt);`,rough:`
      roughnessFactor = clamp(roughnessFactor + (g2 - 0.45) * 0.5 + rustAmt * 0.4, 0.08, 1.0);`,metal:"metalnessFactor *= 1.0 - rustAmt;",normal:n>0?`
      {
        float up = clamp((transpose(mat3(viewMatrix)) * normal).y, 0.0, 1.0);
        float d = ${n.toFixed(3)} * up * up * smoothstep(0.25, 0.7, g1);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.34, 0.33, 0.31), d);
        roughnessFactor = mix(roughnessFactor, 0.95, d);
      }`:""})}var $2=`
// one layer of small rounded stones; height in cell units
float pebbles(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  float h = 0.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 g = vec2(float(x), float(y));
      vec2 c = i + g;
      vec2 o = hash22(c);
      vec2 r = g + 0.5 + (o - 0.5) * 0.72 - f;
      float k = hash12(c + 17.3);
      float rad = mix(0.3, 0.6, k);
      float a = 6.2831 * hash12(c + 3.1);
      vec2 e = vec2(cos(a), sin(a));
      vec2 q = vec2(dot(r, e) * mix(0.68, 1.0, o.x), dot(r, vec2(-e.y, e.x)));
      float d = length(q) / rad;
      float cap = sqrt(max(1.0 - d * d, 0.0));
      h = max(h, cap * rad * mix(0.5, 0.9, o.y));
    }
  }
  return h;
}

// distance to the nearest cell wall of a Voronoi pattern, in cell units
float cellEdge(vec2 x) {
  vec2 n = floor(x), f = fract(x);
  vec2 mg = vec2(0.0), mr = vec2(0.0);
  float md = 8.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 r = g + hash22(n + g) - f;
      float d = dot(r, r);
      if (d < md) { md = d; mr = r; mg = g; }
    }
  }
  md = 8.0;
  for (int j = -2; j <= 2; j++) {
    for (int i = -2; i <= 2; i++) {
      vec2 g = mg + vec2(float(i), float(j));
      vec2 r = g + hash22(n + g) - f;
      if (dot(mr - r, mr - r) > 0.00001) md = min(md, dot(0.5 * (mr + r), normalize(r - mr)));
    }
  }
  return md;
}

// fine relief: exposed aggregate and sand
float grainHeight(vec2 p) {
  float h = pebbles(p * 6.0) / 6.0 * 0.3;
  h = max(h, pebbles(p * 17.0 + 7.7) / 17.0 * 0.5);
  h = max(h, pebbles(p * 41.0 + 3.3) / 41.0 * 0.6);
  h += (vnoise(p * 150.0) - 0.5) * 0.0013 + (vnoise(p * 420.0) - 0.5) * 0.0005;
  return h;
}

// 1 inside a crack or a saw-cut joint
float cracks(vec2 p) {
  vec2 w = p + 1.6 * (vec2(fbm3(p * 0.21 + 2.0), fbm3(p * 0.21 + 31.0)) - 0.5);
  float e = cellEdge(w * 0.13) / 0.13;
  float c = (1.0 - smoothstep(0.012, 0.045, e)) * smoothstep(0.42, 0.6, vnoise(p * 0.085 + 4.4));
  // one long crack wandering past the tub
  float d = abs(p.x * 0.42 + p.y * 0.91 - 1.3 + 1.5 * (fbm3(p * 0.33 + 9.0) - 0.5) + 0.12 * (vnoise(p * 2.3) - 0.5));
  c = max(c, 1.0 - smoothstep(0.014, 0.05, d));
  // hairline branches
  float e2 = cellEdge(w * 0.47 + 5.0) / 0.47;
  c = max(c, 0.6 * (1.0 - smoothstep(0.006, 0.02, e2)) * smoothstep(0.55, 0.7, vnoise(p * 0.3 + 14.0)));
  float joint = 1.0 - smoothstep(0.03, 0.06, min(abs(p.y + 7.4), abs(p.x - 6.6)));
  return max(c, joint);
}

// where water stands: 0 = none, 1 = a pool
float pools(vec2 p) {
  float m = smoothstep(0.54, 0.6, fbm(p * 0.33 + 3.1));
  // the strip between the camera and the tub stays wet concrete, so the tub's reflection streaks
  m *= smoothstep(0.75, 1.35, length((p - vec2(0.05, 1.6)) / vec2(0.85, 3.4)));
  // and the floor under the spotlight is damp, not flooded: the light needs concrete to land on
  // (open water is a mirror, and would show the dark room instead of the pool of light)
  m *= smoothstep(0.8, 1.25, length((p - vec2(0.2, -2.6)) / vec2(3.6, 4.4)));
  // pools placed where the drips land
  vec2 q = p + (vec2(vnoise(p * 1.7), vnoise(p * 1.7 + 13.0)) - 0.5) * 0.5;
  m = max(m, 1.0 - smoothstep(0.55, 1.0, length((q - vec2(1.12, 0.85)) / vec2(0.6, 0.8))));
  m = max(m, 1.0 - smoothstep(0.55, 1.0, length((q - vec2(-1.2, 2.3)) / vec2(0.62, 1.0))));
  m = max(m, 1.0 - smoothstep(0.55, 1.0, length((q - vec2(-1.65, -1.6)) / vec2(0.7, 0.75))));
  m = max(m, 1.0 - smoothstep(0.55, 1.0, length((q - vec2(2.3, -4.6)) / vec2(1.6, 1.3))));
  m = max(m, 1.0 - smoothstep(0.55, 1.0, length((q - vec2(-3.4, -9.5)) / vec2(2.2, 2.0))));
  m = max(m, 1.0 - smoothstep(0.55, 1.0, length((q - vec2(4.4, -13.0)) / vec2(2.6, 2.4))));
  return m;
}

struct Floor {
  vec3 N;         // surface normal (world)
  vec3 albedo;
  float rough;
  float stone;    // 1 = concrete above water, 0 = open water
  float spot;     // 1 on a small wet facet that mirrors like water
  float crevice;  // 0 deep between the stones, 1 on top
  float wet;      // how damp the concrete is
  float pool;
  vec2 facet;     // two random numbers per facet
};

Floor floorSurface(vec2 p, vec3 toCam) {
  Floor s;
  float e = 0.0012;
  float h = grainHeight(p);
  float hx = grainHeight(p + vec2(e, 0.0));
  float hz = grainHeight(p + vec2(0.0, e));
  vec3 Ns = normalize(vec3(h - hx, e, h - hz));

  float crack = cracks(p);
  float slab = (fbm3(p * 0.35 + 7.3) - 0.5) * 0.085;
  float height = slab + h - 0.07 * crack;
  s.pool = pools(p);
  float level = mix(-0.036, 0.062, s.pool);
  s.stone = smoothstep(-0.002, 0.004, height - level);
  s.crevice = smoothstep(0.0, 0.012, h) * (1.0 - crack);
  s.wet = max(smoothstep(0.36, 0.62, fbm(p * 0.45 + 9.0)), smoothstep(0.0, 0.3, s.pool));
  s.wet = max(s.wet, 0.42);
  vec3 N = normalize(mix(vec3(0.0, 1.0, 0.0), Ns, s.stone));

  // wet glints: small mirror-like facets, most tipped a little towards the viewer
  vec2 gp = p * 64.0;
  vec2 gc = floor(gp);
  vec2 gr = hash22(gc + 91.7);
  s.spot = step(0.8, hash12(gc + 5.3)) * smoothstep(0.42, 0.3, length(fract(gp) - 0.5 - (gr - 0.5) * 0.3)) * s.stone * s.wet;
  vec2 fwd = normalize(toCam.xz);
  vec2 side = vec2(-fwd.y, fwd.x);
  float tip = gr.x * gr.x * 0.6;
  float lean = (gr.y - 0.5) * 0.5;
  vec3 Ng = normalize(vec3(fwd.x * tip + side.x * lean, 1.0, fwd.y * tip + side.y * lean));
  s.N = normalize(mix(N, Ng, s.spot));
  s.facet = hash22(mix(floor(p * 150.0), gc, step(0.5, s.spot)) + 47.1);

  // colour: mottled grey cement, sand speckle, old oil, a dusting of lifting chalk
  vec3 c = vec3(0.06, 0.058, 0.054) * (0.3 + 0.8 * fbm(p * 1.1 + 2.0) + 0.7 * fbm(p * 4.3 + 8.0));
  c *= (0.72 + 0.56 * vnoise(p * 23.0)) * (0.8 + 0.4 * vnoise(p * 7.0 + 3.0));
  c = mix(c, vec3(0.045, 0.04, 0.036), 0.75 * smoothstep(0.58, 0.74, fbm(p * 0.27 + 40.0)));
  float chalk = smoothstep(0.46, 0.72, fbm(p * 2.1 + 17.0)) * (1.0 - smoothstep(0.5, 1.5, length(p - vec2(0.85, -0.6))));
  chalk *= (1.0 - s.pool) * s.stone;
  c = mix(c, vec3(0.3, 0.3, 0.29), 0.3 * chalk);
  c *= 1.0 - 0.8 * crack;
  float dampness = s.wet * (1.0 - 0.6 * chalk);
  vec3 wetC = c * mix(1.0, 0.3, dampness);
  s.albedo = mix(c * 0.1, wetC, s.stone);
  s.rough = mix(0.06, mix(0.92, 0.34, dampness), s.stone);
  s.rough = mix(s.rough, 0.08, s.spot);
  return s;
}
`;function J2(){let i={mirrorMap:{value:null},mirrorMatrix:{value:new J0},floorSeed:{value:0},reflOn:{value:1}},e=Fi(new Je({color:16777215,roughness:1,metalness:0}),{key:"floor",uniforms:i,decl:`
      uniform sampler2D mirrorMap;
      uniform mat4 mirrorMatrix;
      uniform float floorSeed;
      uniform float reflOn;
      ${Rn}
      ${$2}`,albedo:`
      Floor fs = floorSurface(vWPos.xz, cameraPosition - vWPos);
      diffuseColor.rgb = fs.albedo;`,rough:"roughnessFactor = fs.rough;",normal:"normal = normalize(mat3(viewMatrix) * fs.N);",light:`
      {
        vec3 V = normalize(cameraPosition - vWPos);
        // A smooth-surface highlight model can blow up when both the lamp and the eye are
        // almost level with the floor, where in reality the bumps hide each other: cap it.
        outgoingLight = totalDiffuse + min(totalSpecular, vec3(2.0)) + totalEmissiveRadiance;
        // one random tilt per bake sample: over the samples this spreads the reflection
        // the way a slightly rough wet surface does
        vec2 rnd = hash22(gl_FragCoord.xy + floorSeed * 19.19) - 0.5;
        vec3 Nj = normalize(fs.N + vec3(rnd.x, 0.0, rnd.y) * mix(0.004, 0.07, fs.stone * (1.0 - fs.spot)));
        vec3 R = reflect(-V, Nj);
        float NoV = clamp(dot(Nj, V), 0.0, 1.0);
        float F = 0.028 + 0.972 * pow(1.0 - NoV, 5.0);
        // at this grazing angle crevices hide behind their neighbours, and rays that
        // bounce low run into other stones
        float seen = mix(1.0, 0.12 + 0.88 * fs.crevice, fs.stone);
        float escape = mix(1.0, smoothstep(-0.05, 0.16, R.y), fs.stone);
        float gloss = mix(mix(1.0, mix(0.05, 0.3, fs.wet), fs.stone), 1.0, fs.spot);
        vec3 Rs = vec3(R.x, max(abs(R.y), 0.012), R.z);
        vec4 q = mirrorMatrix * vec4(vWPos + Rs * 45.0, 1.0);
        vec3 env = textureLod(mirrorMap, clamp(q.xy / q.w, 0.003, 0.997), mix(1.0, 2.6, fs.stone)).rgb;
        outgoingLight += env * (F * seen * escape * gloss * reflOn);
      }`}),t=new ae(new _t(520,360),e);return t.rotation.x=-Math.PI/2,t.position.set(0,0,-90),t.receiveShadow=!0,t.frustumCulled=!1,t.userData.uniforms=i,t}function K2(){return new Me({uniforms:{mirrorMatrix:{value:new J0},mode:{value:1},focus:{value:8.6},cocScale:{value:100},cocMax:{value:12}},vertexShader:`
      varying vec3 vWPos;
      varying float vViewZ;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWPos = wp.xyz;
        vec4 mv = viewMatrix * wp;
        vViewZ = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform mat4 mirrorMatrix;
      uniform int mode;
      uniform float focus;
      uniform float cocScale;
      uniform float cocMax;
      varying vec3 vWPos;
      varying float vViewZ;
      ${Rn}
      ${$2}
      void main() {
        vec3 toCam = cameraPosition - vWPos;
        Floor fs = floorSurface(vWPos.xz, toCam);
        if (mode == 2) {
          gl_FragColor = vec4(1.0 - fs.stone, fs.facet, fs.wet);
          return;
        }
        vec3 V = normalize(toCam);
        float F = 0.028 + 0.972 * pow(1.0 - clamp(V.y, 0.0, 1.0), 5.0);
        float seen = mix(1.0, 0.12 + 0.88 * fs.crevice, fs.stone);
        float gloss = mix(mix(1.0, mix(0.05, 0.3, fs.wet), fs.stone), 1.0, fs.spot);
        float w = F * seen * min(1.0, gloss * 3.0);
        vec4 q = mirrorMatrix * vec4(vWPos, 1.0);
        vec2 uv = q.xy / q.w;
        float nearCoc = clamp(cocScale * (1.0 / vViewZ - 1.0 / focus) / cocMax, 0.0, 1.0);
        // a reflection in still water is as sharp as the thing it reflects
        nearCoc *= mix(0.12, 1.0, fs.stone);
        gl_FragColor = vec4(uv, max(w, 1.0e-4) * (fs.stone > 0.5 ? -1.0 : 1.0), nearCoc);
      }`})}var R1=(i,e=48)=>new zn(i.map(([t,n])=>new v0(t,n)),e);function q0(i,e,t,n=0,s=0,r=0,a=0,o=0,l=0){let c=new ae(e,t);return c.position.set(n,s,r),c.rotation.set(a,o,l),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}var Rt=tn(new Je({color:855310,roughness:.45,metalness:.6}),{amount:.4,rust:.55,dust:.6}),Cn=tn(new Je({color:789516,roughness:.55,metalness:0}),{amount:.3,dust:.75}),A1=tn(new Je({color:5049101,roughness:.52,metalness:0}),{amount:.5,dust:.7}),sn=tn(new Je({color:10132118,roughness:.34,metalness:1}),{amount:.5,rust:.45,scale:2.5}),nn=tn(new Je({color:987153,roughness:.5,metalness:.45}),{amount:.4,rust:.7,dust:.4}),bu=tn(new Je({color:1773579,roughness:.6,metalness:0}),{amount:.55,dust:.3,scale:1.6}),w1=tn(new Je({color:4868679,roughness:.45,metalness:.3}),{amount:.4}),Bs=tn(new Je({color:2829612,roughness:.6,metalness:.5}),{amount:.5,rust:.8,scale:.6});function Ja(i,e,t=.26){let n=e/2;return R1([[t,-n*.8],[i*.4,-n*.8],[i*.45,-n*.5],[i*.8,-n*.5],[i*.86,-n],[i-.05,-n],[i,-n+.05],[i,n-.05],[i-.05,n],[i*.86,n],[i*.8,n*.5],[i*.45,n*.5],[i*.4,n*.8],[t,n*.8],[t,-n*.8]],72)}function Ka(i,e,t,n,s,r=0,a=0){return s!==Rt&&q0(i,new oe(t*.24,t*.24,n*.86,32),sn,e,r,a,0,0,Math.PI/2),q0(i,Ja(t,n),s,e,r,a,0,0,Math.PI/2)}function j2(i){let e=new Ee;q0(e,new oe(.14,.14,13.1,20),sn,0,0,0,0,0,Math.PI/2);for(let t of[-1,1]){q0(e,new oe(.38,.38,.3,28),sn,t*6.7,0,0,0,0,Math.PI/2),q0(e,new oe(.25,.25,4.1,24),sn,t*8.9,0,0,0,0,Math.PI/2);let n=6.87;for(let[s,r,a]of i)Ka(e,t*(n+r/2),s,r,a),n+=r+.02}return e}function Eu(){let i=new Ee;q0(i,R1([[0,0],[.6,0],[.72,.04],[.9,.3],[.99,.65],[1,1],[.94,1.35],[.8,1.65],[.6,1.86],[.36,1.97],[0,2]],56),Rt),q0(i,new Hn(.62,.17,16,32,Math.PI),Rt,0,2.12,0);for(let e of[-1,1])q0(i,new oe(.17,.2,.5,16),Rt,e*.62,1.9,0);return i}function Tu(){let i=new Ee,e=(n,s,r)=>new $e(n,s,r);for(let n of[-1,1]){for(let s of[-1,1])q0(i,e(.75,27,.75),nn,n*6,13.5,s*5.5);q0(i,e(.75,.75,14),nn,n*6,.375,0),q0(i,e(.6,.6,11),nn,n*6,26.4,0),q0(i,new oe(.16,.16,11.6,12),sn,n*6,7.6,0,Math.PI/2),q0(i,new oe(.22,.22,2.6,12),sn,n*7.6,5.2,-5.5,0,0,Math.PI/2),Ka(i,n*7.2,2.25,.5,Cn,5.2,-5.5),Ka(i,n*7.75,2.25,.5,n>0?A1:Cn,5.2,-5.5),q0(i,new oe(.22,.22,2.2,12),sn,n*7.4,11.4,-5.5,0,0,Math.PI/2),Ka(i,n*7.15,1.75,.4,Rt,11.4,-5.5)}q0(i,e(12,.75,.75),nn,0,1.6,-5.5),q0(i,e(12,.6,.6),nn,0,26.4,-5.5);let t=j2([[2.25,.5,Cn]]);t.position.set(0,13.2,6.2),i.add(t);for(let n of[-1,1])q0(i,e(.5,1.3,1.1),nn,n*6,12.9,6.2);return i}function wu(){let i=new Ee;return q0(i,R1([[0,0],[.8,.04],[1.35,.22],[1.66,.6],[1.78,1.2],[1.8,2.2],[1.8,16],[1.5,16.4]],40),bu),q0(i,new oe(1.83,1.83,.9,40,1,!0),w1,0,3.4,0),q0(i,new oe(1.83,1.83,.55,40,1,!0),w1,0,4.4,0,0,0,.03),q0(i,new oe(1.83,1.83,.7,40,1,!0),w1,0,8.6,0),i}var Q2=.354;function Au(i){let e=new Ee,t=new Hn(.19,.055,8,14),n=new as(t,sn,i),s=new J0,r=new pt,a=new L(1,1.45,1);for(let u=0;u<i;u++)r.setFromEuler(new wt(0,u%2?Math.PI/2:0,0)),s.compose(new L(0,-u*Q2,0),r,a),n.setMatrixAt(u,s);n.castShadow=!0,e.add(n);let l=-(i-1)*Q2-.39;q0(e,new Hn(.18,.065,10,20),Rt,0,l,0,0,i%2?Math.PI/2:0,0),q0(e,new oe(.14,.16,.26,16),Rt,0,l-.3,0);let c=.44,h=l-.95,f=[new L(0,l-.4,0),new L(0,l-.7,0)];for(let u=0;u<=20;u++){let m=Math.PI+u/20*(Math.PI+.95),y=c*(1+.1*Math.max(0,u-15)/5);f.push(new L(c+y*Math.cos(m),h+y*Math.sin(m),0))}let d=new ae(new ps(new yi(f),48,.1,10),Rt);return d.castShadow=!0,e.add(d),q0(e,new fs(.1,10,8),Rt,f[f.length-1].x,f[f.length-1].y,0),e.userData.bottom=h-c-.1,e}function Ru(){let i=new Ee,e=(s,r,a)=>new $e(s,r,a);for(let s of[3.6,8])q0(i,e(23,.35,3.2),nn,0,s,0,.16);for(let s of[-11.2,0,11.2])q0(i,e(.6,11,3.4),nn,s,5.5,0);let t=s=>new oe(s,s,.95,6),n=new oe(.15,.15,1.5,10);return[3.6,8].forEach((s,r)=>{let a=-10.2;for(let o=0;o<9;o++){let l=.62+.065*o+(r?0:.12);if(!(r===1&&(o===3||o===6))){let c=s+.2+l;q0(i,t(l),Cn,a,c,-.75,Math.PI/2,0,.3*o),q0(i,t(l),Cn,a,c,.75,Math.PI/2,0,.3*o+.2),q0(i,n,sn,a,c,0,Math.PI/2)}a+=l*2+.5}}),i}function Cu(){return Fi(new Je({color:16777215,roughness:.9,metalness:0}),{key:"wall",decl:Rn,albedo:`
      vec2 wp = vWPos.xy;
      vec2 q = wp / vec2(2.3, 0.78);
      float row = floor(q.y);
      q.x += 0.5 * mod(row, 2.0) + 0.11 * hash12(vec2(row, 7.0));
      vec2 id = floor(q), f = fract(q);
      vec2 m = min(f, 1.0 - f) * vec2(2.3, 0.78);
      float mortar = 1.0 - smoothstep(0.04, 0.085, min(m.x, m.y));
      float bh = hash12(id + 3.7);
      vec3 brick = mix(vec3(0.19, 0.07, 0.045), vec3(0.1, 0.055, 0.045), bh);
      brick = mix(brick, vec3(0.045, 0.04, 0.04), step(0.84, hash12(id + 9.1)));
      brick *= 0.65 + 0.7 * fbm(wp * 2.3);
      vec3 base = mix(brick, vec3(0.15, 0.14, 0.13) * (0.7 + 0.5 * vnoise(wp * 7.0)), mortar);
      // two coats of old paint, flaking off in patches: a dark dado, dirty cream above
      float flake = fbm(wp * 0.5 + 11.0) + 0.3 * fbm(wp * 3.1) - 0.08 * mortar;
      float painted = smoothstep(0.5, 0.58, flake);
      float dado = 1.0 - smoothstep(11.2, 11.5, wp.y + 0.25 * vnoise(wp * vec2(0.9, 0.0)));
      vec3 paint = mix(vec3(0.21, 0.2, 0.17), vec3(0.03, 0.055, 0.05), dado) * (0.7 + 0.55 * fbm(wp * 1.7 + 5.0));
      base = mix(base, paint, painted * 0.92);
      // rising damp near the floor, dirty streaks running down from the windows
      float damp = smoothstep(8.0, 0.0, wp.y + 4.0 * (fbm(wp * 0.3) - 0.5));
      float streak = smoothstep(0.52, 0.8, fbm(vec2(wp.x * 1.2, wp.y * 0.06) + 3.0)) * smoothstep(-5.0, 28.0, wp.y);
      base *= mix(1.0, 0.3, damp) * (1.0 - 0.65 * streak);
      diffuseColor.rgb = base;`,rough:"roughnessFactor = mix(0.92, 0.5, max(damp, painted * 0.35));"})}function Pu(){return Fi(new vi({color:16777215}),{key:"window",decl:`${Rn}
varying vec2 vPane;`,albedo:`
      vec2 g = vPane * vec2(4.0, 6.0);
      vec2 id = floor(g) + floor(vWPos.x * 0.07) * 13.0, f = fract(g);
      vec2 edge = min(f, 1.0 - f);
      float bar = smoothstep(0.035, 0.07, min(edge.x * 1.5, edge.y));
      float k = hash12(id + 2.3);
      float pane = k < 0.16 ? 0.02 : mix(0.45, 1.0, hash12(id + 8.1));  // boarded up, or dirty
      pane *= 0.55 + 0.6 * fbm(vPane * vec2(9.0, 14.0) + id);
      pane *= mix(0.35, 1.0, smoothstep(0.0, 0.5, vPane.y));          // dirt builds up at the bottom
      diffuseColor.rgb = diffuse * vec3(0.105, 0.15, 0.2) * pane * bar * 0.9;`})}function el(){let i=new Ee,e=-105,t=q0(i,new _t(340,80),Cu(),0,38,e);t.castShadow=!1,q0(i,new oe(.45,.45,320,14),Bs,0,9.4,e+.75,0,0,Math.PI/2),q0(i,new oe(.24,.24,320,10),Bs,0,10.6,e+.5,0,0,Math.PI/2),q0(i,new oe(.3,.3,60,10),Bs,13.6,30,e+.5),q0(i,new $e(2.6,3.4,1),nn,13.6,6.4,e+.6);for(let p=-70;p<=70;p+=17.5)q0(i,new $e(.25,1.9,1.2),Bs,p+3,9.7,e+.6);let n=Pu();n.onBeforeCompile=(p=>M=>{p(M),M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vPane;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPane = uv;`)})(n.onBeforeCompile);for(let p=-68;p<=76;p+=16){let M=q0(i,new _t(11,17),n,p,22.4,e+.12);M.castShadow=M.receiveShadow=!1,q0(i,new $e(12.4,.7,1.4),Bs,p,13.6,e+.7)}let s=j2([[2.25,.62,Cn],[2.25,.62,A1],[2.25,.5,Cn],[1.75,.4,Rt]]);s.position.set(3,2.25,-90),s.rotation.set(0,-47.5*Math.PI/180,0),i.add(s);let r=Eu();r.position.set(-4.7,0,-21),r.rotation.y=.5,i.add(r);let a=Tu();a.position.set(-9.5,0,-72),a.rotation.y=.32,i.add(a);let o=wu();o.position.set(-8.4,6.6,-47),o.rotation.z=.02,i.add(o);let l=Au(96);l.position.set(-5,6-l.userData.bottom,-47),l.rotation.y=-.35,i.add(l);let c=Ru();c.position.set(15.5,0,-101.6),i.add(c),q0(i,Ja(2.25,.55),Cn,-24,2.2,-103.6,Math.PI/2-.2,0,0),q0(i,Ja(2.25,.55),A1,-23.2,2.2,-102.9,Math.PI/2-.26,0,0),q0(i,Ja(1.75,.42),Rt,7.2,.21,-17.5,0,0,0);let h=new Gn(V0.color,V0.candela,0,V0.angle,V0.penumbra,2);h.position.copy(V0.pos),h.target.position.copy(V0.target),i.add(h,h.target);let f=new Mi(new R0(.45,.6,.85),new R0(.2,.17,.13),.035);i.add(f);let d=new xs(new R0(.55,.72,1),.09);d.position.set(-30,55,-150),i.add(d,d.target);let u=new _s(ie.color,ie.candela,0,2);u.castShadow=!0,u.shadow.mapSize.set(1024,1024),u.shadow.camera.near=.5,u.shadow.camera.far=320,u.shadow.bias=-.003,u.shadow.normalBias=.06,i.add(u);let m=new Mi(ie.color,ie.color.clone().multiplyScalar(.45),.1);i.add(m);let y={key:h.intensity,hemi:f.intensity,moon:d.intensity,tube:u.intensity,fill:m.intensity};return{room:i,lights:{key:h,hemi:f,moon:d,tube:u},setLights:p=>{let M=p==="steady"?1:0,T=p==="strip"?1:0;h.intensity=y.key*M,f.intensity=y.hemi*M,d.intensity=y.moon*M,n.color.setScalar(M),u.intensity=y.tube*T,m.intensity=y.fill*T}}}var rn=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)};function L1(i,e=!1){if(e)return .86+.08*Math.sin(i*1.3)*Math.sin(i*.47);let t=7.3,n=Math.floor(i/t),s=i-n*t,r=rn(n*3.1+1),a=rn(n*5.7+2),o=rn(n*9.3+3),l=2.4+r*2.4,c=.45+a*.75,h=o<.6?.3+o:0;if(s>l&&s<l+c){let m=Math.floor((s-l)/.085),y=rn(n*17+m*1.37);return y<.42?.04+.12*y:y<.62?.4:1}if(s>=l+c&&s<l+c+h){let m=Math.floor((s-l-c)/.09);return rn(n*29+m*3.3)>.88?.45:.015}let f=1,d=s-(l+c+h);d>=0&&d<.14&&(f=1.35-d*2.5),f*=.95+.05*Math.sin(i*61)*Math.sin(i*7.3);let u=rn(Math.floor(i/.07)*.731);return u>.975?f*=.3:u>.955&&(f*=.72),f}function nl(i,e=!1){let t=e?.35:1,n=.72+.28*Math.sin(i*.21+.6);return{side:t*ie.swing*n*(.74*Math.sin(i*1.9)+.26*Math.sin(i*2.63+1.1)),depth:t*ie.swing*.4*Math.sin(i*1.7+2),rock:t*(.04*Math.sin(i*3.1+.5)+.022*Math.sin(i*4.7))}}var I1={value:1},C1=i=>new Me({uniforms:{color:{value:new R0(i)},coverage:I1},vertexShader:"void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 color; uniform float coverage; void main() { gl_FragColor = vec4(color, coverage); }"});function il(){let i=new Zt,e=new Ee;e.position.copy(ie.anchor),i.add(e);let t=ie.length,n=C1(0),s=C1(0),r=new ae(new oe(.1,.1,ie.cable,6),n);r.position.y=-ie.cable/2,e.add(r);let a=new Ee;a.position.y=-ie.cable,e.add(a);let o=(g,p,M,T,b,A=0)=>{let E=new ae(g,p);return E.position.set(M,T,b),E.rotation.z=A,a.add(E),E},l=-.8;o(new $e(t,.5,1.25),s,l+t/2,.1,0),o(new $e(.35,.75,1.35),s,l+.17,-.2,0),o(new $e(.35,.75,1.35),s,l+t-.17,-.2,0);let c=o(new oe(.06,.06,2.6,6),n,l+t-1.2,-1.2,0,0),h=t-.9;o(new oe(.19,.19,h,16),C1(263429),l+t/2,-.32,-.3,Math.PI/2);let f=new Me({uniforms:{glow:{value:new R0},ends:{value:new R0},coverage:I1},vertexShader:"varying float vAlong; void main() { vAlong = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 glow;
      uniform vec3 ends;
      uniform float coverage;
      varying float vAlong;
      void main() {
        float e = smoothstep(0.1, 0.0, min(vAlong, 1.0 - vAlong));
        float worn = 1.0 - 0.55 * smoothstep(0.16, 0.0, min(vAlong, 1.0 - vAlong)); // blackened ends
        gl_FragColor = vec4(glow * worn + ends * e + vec3(0.004), coverage);
      }`});o(new oe(.19,.19,h,16),f,l+t/2,-.32,.3,Math.PI/2);let d=new L(l+.45,-.32,.3),u=new L(l+t-.45,-.32,.3),m=new R0(1,.72,.7),y={scene:i,coverage:I1,setPose(g,p=0,M=0){e.rotation.set(p,0,g),a.rotation.z=-ie.tilt-M-g*.35,c.rotation.z=ie.tilt+M+g*.35-g,i.updateMatrixWorld(!0)},point(g,p=new L){return p.copy(d).lerp(u,g).applyMatrix4(a.matrixWorld)},setBrightness(g){let p=1-Ii.smoothstep(g,0,.5);f.uniforms.glow.value.copy(ie.color).lerp(m,p*.6).multiplyScalar(9*Math.pow(g,1.6)),f.uniforms.ends.value.setRGB(1,.3,.1).multiplyScalar(2.2*p),s.uniforms.color.value.copy(ie.color).multiplyScalar(.006+.07*g)}};return y.setPose(0),y.setBrightness(1),y}var P1=Math.sqrt(2*b1/Ui),sl=7,tl=.2,zs=$n.length*(1+sl);function Iu(i){return $n.map((e,t)=>{let n=i+e.phase+100*e.period,s=Math.floor(n/e.period),r=n-s*e.period,a=r<P1;return{site:e,index:t,cycle:s,falling:a,y:a?b1-.5*Ui*r*r:0,speed:Ui*r,age:a?r+e.period-P1:r-P1}})}function rl(i,e){let t=new Float32Array(zs*4*3),n=new Float32Array(zs*4*2),s=new Float32Array(zs*4*3),r=new Uint16Array(zs*6);for(let b=0;b<zs;b++)r.set([b*4,b*4+1,b*4+2,b*4,b*4+2,b*4+3],b*6),n.set([-1,-1,1,-1,1,1,-1,1],b*8);let a=new Le;a.setAttribute("position",new ze(t,3).setUsage(Oa)),a.setAttribute("uv",new ze(n,2)),a.setAttribute("tint",new ze(s,3).setUsage(Oa)),a.setIndex(new ze(r,1));let o=new Me({uniforms:{tDepth:{value:null},res:{value:1}},vertexShader:`
      attribute vec3 tint;
      varying vec2 vUv;
      varying vec3 vTint;
      varying float vViewZ;
      void main() {
        vUv = uv;
        vTint = tint;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vViewZ = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform sampler2D tDepth;
      uniform float res;
      varying vec2 vUv;
      varying vec3 vTint;
      varying float vViewZ;
      void main() {
        // hidden behind the equipment in the baked picture
        if (texture2D(tDepth, gl_FragCoord.xy / res).r < vViewZ - 0.4) discard;
        // a drop drawn out by its own speed: round and bright at the head, thinning to a tail
        float t = vUv.y * 0.5 + 0.5;
        float side = abs(vUv.x) / mix(0.4, 1.0, smoothstep(0.0, 0.8, t));
        float shape = smoothstep(1.0, 0.45, side) * smoothstep(0.0, 0.3, t) * smoothstep(1.0, 0.88, t);
        // water is a lens: bright along the edges, a thin bright core
        float lens = (0.35 + 0.6 * smoothstep(0.3, 0.9, side) + 0.8 * smoothstep(0.3, 0.0, side)) * mix(0.35, 1.25, t * t);
        gl_FragColor = vec4(vTint * shape * lens, 0.0);
      }`,transparent:!0,depthWrite:!1,blending:bn,blendSrc:Ve,blendDst:Ve,blendSrcAlpha:wi,blendDstAlpha:Ve,side:rt}),l=new ae(a,o);l.frustumCulled=!1;let c=i.position,h=Math.tan(i.fov*Math.PI/360),f=new L;i.getWorldDirection(f);let d=new L,u=new L,m=new L,y=new L,g=new L,p=b=>{g.copy(b).sub(V0.pos);let A=g.lengthSq(),E=g.dot(V0.dir)/Math.sqrt(A);return Ii.smoothstep(E,V0.cosOuter,V0.cosInner)*V0.candela/A},M=0,T=(b,A,E,_,v,D)=>{y.copy(d).sub(c),m.crossVectors(u,y).normalize();let P=Math.hypot(A,D),I=Math.hypot(b,D),N=A*b/(P*I),U=M*12,C=(H,V,z)=>{t[U+H*3]=d.x+m.x*P*V+u.x*I*z,t[U+H*3+1]=d.y+m.y*P*V+u.y*I*z,t[U+H*3+2]=d.z+m.z*P*V+u.z*I*z,s[U+H*3]=E*N,s[U+H*3+1]=_*N,s[U+H*3+2]=v*N};C(0,-1,-1),C(1,1,-1),C(2,1,1),C(3,-1,1),M++};return{mesh:l,material:o,update(b,A,E,_){M=0;let v=Iu(b),D=(I,N)=>{let U=p(I)*.16;return[V0.color.r*U+_.r*.11+.003*N,V0.color.g*U+_.g*.11+.005*N,V0.color.b*U+_.b*.11+.007*N]},P=I=>{let N=y.copy(I).sub(c).dot(f);return E(N)*(2*h*N)/A};for(let I of v){let{site:N}=I;if(I.falling){d.set(N.x,I.y,N.z),u.set(0,-1,0);let[U,C,H]=D(d,1),V=N.z<-6?.45:1;T(Math.max(.03,I.speed*.0042),.011,U*V,C*V,H*V,P(d))}else if(I.age<tl&&N.z>-6)for(let U=0;U<sl;U++){let C=rn(I.cycle*7.1+I.index*13.7+U*3.3),H=rn(I.cycle*3.7+I.index*5.1+U*9.1),V=C*Math.PI*2,z=U===0,t0=z?.06:(.35+.9*H)*(N.pool?1:.7),q=z?3.4:1.3+1.9*rn(C*91+U),k=Math.cos(V)*t0,J=Math.sin(V)*t0,h0=q*I.age-.5*Ui*I.age*I.age;if(h0<0)continue;d.set(N.x+k*I.age,h0+.006,N.z+J*I.age),u.set(k,q-Ui*I.age,J);let p0=u.length();u.divideScalar(p0||1);let[B,K,i0]=D(d,.6),y0=.8*(1-I.age/tl),l0=z?.008:.004+.003*H;T(Math.max(l0*1.2,p0*.002),l0,B*y0,K*y0,i0*y0,P(d))}}return a.setDrawRange(0,M*6),a.attributes.position.needsUpdate=!0,a.attributes.tint.needsUpdate=!0,o.uniforms.res.value=A,v}}}function al(i=900){let e=new Float32Array(i*4),t=12345,n=()=>(t=t*16807%2147483647,t/2147483647);for(let o=0;o<i*4;o++)e[o]=n();let s=new Le;s.setAttribute("position",new ze(new Float32Array(i*3),3)),s.setAttribute("seed",new ze(e,4));let r=new Me({uniforms:{time:{value:0},res:{value:1080},focus:{value:8.6},cocScale:{value:100},keyPos:{value:V0.pos},keyDir:{value:V0.dir},keyCone:{value:new v0(V0.cosOuter,V0.cosInner)},tubShape:{value:new L},tint:{value:new R0}},vertexShader:`
      attribute vec4 seed;
      uniform float time;
      uniform float res;
      uniform float focus;
      uniform float cocScale;
      ${Us}
      ${Fs}
      varying float vLight;
      varying float vBokeh;
      void main() {
        vec3 lo = vec3(-2.6, 0.03, -3.2), hi = vec3(2.6, 4.4, 4.8);
        vec3 p = mix(lo, hi, seed.xyz);
        float ph = seed.w * 6.2831853;
        // slow eddies, and a slow settling towards the floor
        p.x += 0.24 * sin(time * 0.11 + ph) + 0.07 * sin(time * 0.37 + ph * 2.3);
        p.z += 0.24 * cos(time * 0.09 + ph * 1.7) + 0.06 * sin(time * 0.29 + ph * 3.1);
        float span = hi.y - lo.y;
        p.y = lo.y + mod(p.y - lo.y - time * (0.015 + 0.04 * seed.w) + 0.1 * sin(time * 0.2 + ph * 5.0), span);
        float e = keySpot(p);
        if (e > 0.0 && tubHit(p, normalize(keyPos - p)) > 0.0) e = 0.0;
        vec4 mv = viewMatrix * vec4(p, 1.0);
        float z = -mv.z;
        float coc = cocScale * abs(1.0 / focus - 1.0 / z);
        float base = (0.55 + 0.9 * seed.w * seed.w) * res / 1080.0;
        float r = sqrt(base * base + coc * coc);
        float twinkle = 0.55 + 0.45 * sin(time * (0.6 + 1.7 * seed.x) + ph * 7.0);
        vLight = e * twinkle * (base * base) / (r * r);
        vBokeh = clamp(coc / (base * 2.5), 0.0, 1.0);
        gl_PointSize = e > 0.0 ? 2.0 * r + 1.0 : 0.0;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 tint;
      varying float vLight;
      varying float vBokeh;
      void main() {
        float r = length(gl_PointCoord - 0.5) * 2.0;
        float disc = smoothstep(1.0, mix(0.2, 0.82, vBokeh), r);
        disc *= mix(1.0, 0.75 + 0.4 * r * r, vBokeh); // out of focus: a flat disc with a slightly brighter rim
        gl_FragColor = vec4(tint * vLight * disc, 0.0);
      }`,transparent:!0,depthWrite:!1,blending:bn,blendSrc:Ve,blendDst:Ve,blendSrcAlpha:wi,blendDstAlpha:Ve}),a=new os(s,r);return a.frustumCulled=!1,a}function Lu(i=32){let e=new Float32Array(i*i*i),t=4242;for(let a=0;a<e.length;a++)t=t*16807%2147483647,e[a]=t/2147483647;let n=new Uint8Array(i*i*i),s=(a,o,l)=>e[(l+i)%i*i*i+(o+i)%i*i+(a+i)%i];for(let a=0;a<i;a++)for(let o=0;o<i;o++)for(let l=0;l<i;l++){let c=s(l,o,a)*2;c+=s(l+1,o,a)+s(l-1,o,a)+s(l,o+1,a)+s(l,o-1,a)+s(l,o,a+1)+s(l,o,a-1),n[a*i*i+o*i+l]=Math.round(255*Math.min(1,Math.max(0,(c/8-.5)*2.2+.5)))}let r=new gi(n,i,i,i);return r.format=Ci,r.minFilter=r.magFilter=ue,r.wrapS=r.wrapT=r.wrapR=Tt,r.unpackAlignment=1,r.needsUpdate=!0,r}function ol(){return new Me({uniforms:{camPos:{value:new L},camFwd:{value:new L},camRight:{value:new L},camUp:{value:new L},keyPos:{value:V0.pos},keyDir:{value:V0.dir},keyCone:{value:new v0(V0.cosOuter,V0.cosInner)},tubShape:{value:new L},tNoise:{value:Lu()},time:{value:0},tint:{value:new R0},radius:{value:V0.outerRadius+.1}},vertexShader:Za,fragmentShader:`
      precision highp sampler3D;
      uniform sampler3D tNoise;
      uniform float time;
      uniform vec3 tint;
      uniform float radius;
      varying vec2 vUv;
      ${$a}
      ${Us}
      ${Fs}
      ${Os}
      const int STEPS = 22;
      void main() {
        vec3 rd = viewRay(vUv);
        // the stretch of the view ray inside a cylinder around the beam
        vec3 oc = camPos - keyPos;
        vec3 dp = rd - dot(rd, keyDir) * keyDir;
        vec3 op = oc - dot(oc, keyDir) * keyDir;
        float A = dot(dp, dp), B = dot(dp, op), C = dot(op, op) - radius * radius;
        float h = B * B - A * C;
        vec3 sum = vec3(0.0);
        if (h > 0.0) {
          h = sqrt(h);
          float t0 = max((-B - h) / A, 0.0), t1 = (-B + h) / A;
          if (rd.y < 0.0) t1 = min(t1, -camPos.y / rd.y);  // ends at the floor
          float tt = tubHit(camPos, rd);                   // or at the tub
          if (tt > 0.0) t1 = min(t1, tt);
          if (t1 > t0) {
            float dt = (t1 - t0) / float(STEPS);
            float jitter = ign(gl_FragCoord.xy + fract(time * 7.13) * 91.0);
            float acc = 0.0;
            for (int i = 0; i < STEPS; i++) {
              vec3 p = camPos + rd * (t0 + (float(i) + jitter) * dt);
              float e = keySpot(p);
              if (e <= 0.0) continue;
              if (tubHit(p, normalize(keyPos - p)) > 0.0) continue;   // in the tub's shadow
              // slow-moving haze, thicker near the floor
              float n = texture(tNoise, p * 0.11 + vec3(time * 0.009, -time * 0.014, time * 0.006)).r;
              float n2 = texture(tNoise, p * 0.31 + vec3(-time * 0.017, time * 0.005, time * 0.011)).r;
              float density = 0.62 + 0.5 * n + 0.22 * n2;
              acc += e * density;
            }
            sum = tint * acc * dt;
          }
        }
        gl_FragColor = vec4(sum, 0.0);
      }`,depthTest:!1,depthWrite:!1,transparent:!0,blending:bn,blendSrc:Ve,blendDst:Ve,blendSrcAlpha:wi,blendDstAlpha:Ve})}var Pn=(i,e,t={})=>new Me({vertexShader:Za,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1,...t}),ll=()=>Pn(`
  uniform sampler2D tSrc;
  uniform float weight;
  varying vec2 vUv;
  void main() { gl_FragColor = texture2D(tSrc, vUv) * weight; }`,{tSrc:{value:null},weight:{value:1}},{blending:bn,blendSrc:Ve,blendDst:Ve,blendSrcAlpha:Ve,blendDstAlpha:Ve,transparent:!0}),cl=()=>Pn(`
  uniform sampler2D tSrc;
  varying vec2 vUv;
  void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).a); }`,{tSrc:{value:null}}),hl=()=>Pn(`
  uniform sampler2D tSrc;
  uniform vec2 texel;
  uniform float focus;
  uniform float cocScale;
  uniform float cocMax;
  varying vec2 vUv;
  const int TAPS = 180;
  float cocFar(float z) { return clamp(cocScale * (1.0 / focus - 1.0 / z), 0.0, cocMax); }
  void main() {
    vec4 c = texture2D(tSrc, vUv);
    float cc = cocFar(c.a);
    if (c.a < focus) { gl_FragColor = vec4(c.rgb, 1.0); return; }
    vec3 sum = c.rgb / (cc * cc + 1.0);
    float wsum = 1.0 / (cc * cc + 1.0);
    float area = 3.14159 * cocMax * cocMax / float(TAPS);
    for (int i = 1; i < TAPS; i++) {
      float fi = float(i);
      float r = sqrt(fi / float(TAPS)) * cocMax;
      float a = fi * 2.399963;
      vec2 o = vec2(cos(a), sin(a)) * r;
      vec4 s = texture2D(tSrc, vUv + o * texel);
      float sc = cocFar(s.a);
      float w = clamp(sc - r + 1.0, 0.0, 1.0) * area / (3.14159 * sc * sc + 1.0);
      sum += s.rgb * w;
      wsum += w;
    }
    gl_FragColor = vec4(sum / wsum, 1.0);
  }`,{tSrc:{value:null},texel:{value:new v0},focus:{value:8.6},cocScale:{value:100},cocMax:{value:12}}),ul=()=>Pn(`
  uniform sampler2D tSrc;
  uniform vec2 texel;
  uniform float radius;
  varying vec2 vUv;
  const int TAPS = 56;
  void main() {
    vec4 sum = texture2D(tSrc, vUv);
    for (int i = 1; i < TAPS; i++) {
      float fi = float(i);
      float r = sqrt(fi / float(TAPS)) * radius;
      float a = fi * 2.399963;
      sum += texture2D(tSrc, vUv + vec2(cos(a), sin(a)) * r * texel);
    }
    gl_FragColor = sum / float(TAPS);
  }`,{tSrc:{value:null},texel:{value:new v0},radius:{value:8}}),dl=()=>Pn(`
  uniform sampler2D tBase;
  uniform sampler2D tStrip0;
  uniform sampler2D tStrip1;
  uniform sampler2D tStrip2;
  uniform sampler2D tData1;
  uniform sampler2D tData2;
  uniform sampler2D tDepth;
  uniform sampler2D tMirror;
  uniform sampler2D tFix;
  uniform vec3 stripW;      // brightness x weight of the three baked swing positions
  uniform vec4 fixRect;     // where the strip light's layer sits on screen
  uniform float fixDepth;
  uniform vec2 fixBlur;     // the strip light's blur radius, in the mirror image's own coordinates
  uniform float fixLod;     // and the mip level to read it at
  uniform vec4 ripples[${$n.length}]; // x, z, seconds since the drop landed, strength
  uniform vec3 airPts[5];   // points along the lit tube
  uniform vec3 airColor;
  uniform float streak;     // strength of reflections on damp concrete
  uniform float keyRadius;
  uniform float baseGain;
  uniform float reflGain;
  varying vec2 vUv;
  ${$a}
  ${Us}
  ${Fs}
  ${Os}

  // slope of the water surface from the rings spreading out of each drip
  vec2 rippleSlope(vec2 p) {
    vec2 s = vec2(0.0);
    for (int i = 0; i < ${$n.length}; i++) {
      vec4 r = ripples[i];
      vec2 v = p - r.xy;
      float dist = length(v) + 1.0e-4;
      float x = dist - r.z * 2.3;   // ahead (+) or behind (-) the leading ring
      float env = smoothstep(0.1, -0.06, x) * exp(min(x, 0.0) * 1.25);
      float amp = r.w * exp(-r.z * 1.35) / (0.35 + dist);
      s += (v / dist) * (cos(x * 23.0) * env * amp);
    }
    return s;
  }

  void main() {
    vec4 d1 = texture2D(tData1, vUv);
    vec4 d2 = texture2D(tData2, vUv);
    bool isFloor = d1.z != 0.0;
    vec3 rd = viewRay(vUv);
    vec2 puv = vUv;      // where to read the baked plates
    vec2 muv = d1.xy;    // where to read the mirror image
    float shadow = 1.0;
    float behind = 0.0;  // 1 on floor that lies behind the tub, which cannot mirror it

    if (isFloor) {
      vec3 P = camPos + rd * (-camPos.y / rd.y);
      behind = smoothstep(-0.3, -0.9, P.z);
      // rings on the water. At this grazing angle a small tilt of the surface moves a
      // reflection a long way up or down, and hardly at all sideways.
      vec2 slope = rippleSlope(P.xz) * mix(0.12, 1.0, d2.x);
      puv += vec2(0.4 * slope.x, 5.2 * slope.y);
      muv += vec2(-0.6 * slope.x, -7.6 * slope.y);

      // the tub's shadow under the spot: rays to points across the lamp
      vec2 q = P.xz - vec2(0.35, -0.45);
      if (dot(q, q) < 9.0) {
        vec3 bx = normalize(cross(keyDir, vec3(0.0, 0.0, 1.0)));
        vec3 by = cross(keyDir, bx);
        float rot = ign(gl_FragCoord.xy) * 6.2831853;
        float lit = 0.0;
        vec3 from = P + vec3(0.0, 0.002, 0.0);
        for (int i = 0; i < 12; i++) {
          float fi = float(i) + 0.5;
          float r = sqrt(fi / 12.0) * keyRadius;
          float a = fi * 2.399963 + rot;
          vec3 lamp = keyPos + (bx * cos(a) + by * sin(a)) * r;
          lit += tubHit(from, normalize(lamp - from)) > 0.0 ? 0.0 : 1.0;
        }
        shadow = lit / 12.0;
      }
    }

    vec3 base = texture2D(tBase, puv).rgb * baseGain;
    // open water mirrors the room, and a mirror image is not darkened by a shadow
    if (isFloor) base *= mix(1.0, 0.14 + 0.86 * shadow, 1.0 - 0.9 * d2.x);
    vec3 col = base
      + texture2D(tStrip0, puv).rgb * stripW.x
      + texture2D(tStrip1, puv).rgb * stripW.y
      + texture2D(tStrip2, puv).rgb * stripW.z;

    // damp air glowing around the strip light, up to whatever the view ray hits
    float depth = textureLod(tDepth, vUv, 2.5).r;
    float tEnd = depth / dot(rd, camFwd);
    float air = 0.0;
    for (int i = 0; i < 5; i++) {
      vec3 v = airPts[i] - camPos;
      float b = dot(v, rd);
      float h = sqrt(max(dot(v, v) - b * b, 0.0) + 1.2);
      air += (atan((tEnd - b) / h) + atan(b / h)) / h;
    }
    col += airColor * air;

    // the strip light itself, already blurred
    vec2 fuv = (vUv - fixRect.xy) / fixRect.zw;
    if (fuv.x > 0.0 && fuv.x < 1.0 && fuv.y > 0.0 && fuv.y < 1.0) {
      vec4 f = texture2D(tFix, fuv);
      float vis = smoothstep(fixDepth - 9.0, fixDepth - 3.0, depth);
      col = col * (1.0 - f.a * vis) + f.rgb * vis;
    }

    // reflections of the things that move: the tub and the strip light
    if (isFloor && reflGain > 0.0) {
      if (d1.z < 0.0) {
        // damp concrete: every wet facet tips a different amount towards the viewer, so it
        // mirrors a different height of whatever stands behind it. Together they read as a
        // sparkling streak running towards the camera.
        // (In the mirror image alpha marks the tub. Floor behind the tub sees past it.)
        vec4 b = textureLod(tMirror, muv, 1.5);
        vec2 guv = vec2(muv.x + (d2.z - 0.5) * (0.02 + 0.07 * d2.y), mix(muv.y, 0.84, pow(d2.y, 1.4)));
        vec4 glint = textureLod(tMirror, guv, 1.2);
        vec4 smear = (textureLod(tMirror, muv, 3.0)
                    + textureLod(tMirror, muv + vec2(0.0, 0.06), 3.0)
                    + textureLod(tMirror, muv + vec2(0.0, 0.14), 3.5)
                    + textureLod(tMirror, muv + vec2(0.0, 0.25), 4.0)
                    + textureLod(tMirror, muv - vec2(0.0, 0.05), 3.0)) / 5.0;
        // (the strip light's sheen on damp concrete is already in the baked plates)
        vec3 refl = min(glint.rgb * glint.a + smear.rgb * smear.a, vec3(1.3)) * (1.0 - behind);
        col = col * (1.0 - b.a * 0.8 * (1.0 - behind)) + refl * (-d1.z) * streak * (0.4 + 0.6 * d2.w);
      } else {
        // open water: a true mirror. The tub's image is sharp; the strip light's is as far
        // out of focus as the strip light itself.
        vec4 b = textureLod(tMirror, muv, 0.0);
        vec4 soft = vec4(0.0);
        for (int i = 0; i < 12; i++) {
          float fi = float(i) + 0.5;
          float a = fi * 2.399963;
          soft += textureLod(tMirror, muv + vec2(cos(a), sin(a)) * sqrt(fi / 12.0) * fixBlur, fixLod);
        }
        soft /= 12.0;
        float tubHere = b.a * (1.0 - behind);
        vec3 img = mix(soft.rgb * (1.0 - soft.a) * 0.6, b.rgb, b.a);
        col = col * (1.0 - tubHere) + img * d1.z * (1.0 - behind * min(1.0, b.a * 4.0));
      }
    }
    gl_FragColor = vec4(col, 1.0 - d1.w);
  }`,{tBase:{value:null},tStrip0:{value:null},tStrip1:{value:null},tStrip2:{value:null},tData1:{value:null},tData2:{value:null},tDepth:{value:null},tMirror:{value:null},tFix:{value:null},stripW:{value:new L},fixRect:{value:new de(0,0,1,1)},fixDepth:{value:70},fixLod:{value:3},fixBlur:{value:new v0},ripples:{value:$n.map(()=>new de)},airPts:{value:[0,1,2,3,4].map(()=>new L)},airColor:{value:new R0},streak:{value:1.1},keyRadius:{value:V0.sourceRadius},baseGain:{value:1},reflGain:{value:1},camPos:{value:new L},camFwd:{value:new L},camRight:{value:new L},camUp:{value:new L},keyPos:{value:V0.pos},keyDir:{value:V0.dir},keyCone:{value:new v0(V0.cosOuter,V0.cosInner)},tubShape:{value:new L}}),fl=()=>Pn(`
  uniform sampler2D tSrc;
  uniform vec2 texel;
  varying vec2 vUv;
  vec3 bright(vec2 uv) {
    vec3 c = texture2D(tSrc, uv).rgb;
    float l = max(c.r, max(c.g, c.b));
    return c * smoothstep(0.7, 2.2, l);
  }
  void main() {
    vec3 c = bright(vUv + texel * vec2(-1.0, -1.0)) + bright(vUv + texel * vec2(1.0, -1.0))
           + bright(vUv + texel * vec2(-1.0, 1.0)) + bright(vUv + texel * vec2(1.0, 1.0));
    gl_FragColor = vec4(min(c * 0.25, vec3(60.0)), 1.0);
  }`,{tSrc:{value:null},texel:{value:new v0}}),pl=()=>Pn(`
  uniform sampler2D tSrc;
  uniform vec2 dir; // texel step along the blur axis
  varying vec2 vUv;
  void main() {
    // 9-tap gaussian folded into 5 bilinear fetches
    vec3 c = texture2D(tSrc, vUv).rgb * 0.2270270270;
    c += (texture2D(tSrc, vUv + dir * 1.3846153846).rgb + texture2D(tSrc, vUv - dir * 1.3846153846).rgb) * 0.3162162162;
    c += (texture2D(tSrc, vUv + dir * 3.2307692308).rgb + texture2D(tSrc, vUv - dir * 3.2307692308).rgb) * 0.0702702703;
    gl_FragColor = vec4(c, 1.0);
  }`,{tSrc:{value:null},dir:{value:new v0}}),ml=()=>Pn(`
  uniform sampler2D tMain;
  uniform sampler2D tBloom;
  uniform sampler2D tWide;
  uniform vec2 texel;
  uniform float cocMax;
  uniform float dofTop;   // uv.y above which nothing is out of focus in the foreground
  uniform float time;
  uniform float exposure;
  uniform float bloomGain;
  varying vec2 vUv;
  const int TAPS = 64;
  ${Os}

  // ACES filmic (Stephen Hill's fit)
  vec3 rrtOdt(vec3 v) {
    vec3 a = v * (v + 0.0245786) - 0.000090537;
    vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
    return a / b;
  }
  vec3 aces(vec3 c) {
    const mat3 inM = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
    const mat3 outM = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
    c *= exposure / 0.6;
    c = inM * c;
    c = rrtOdt(c);
    c = outM * c;
    return clamp(c, 0.0, 1.0);
  }

  void main() {
    vec4 c = texture2D(tMain, vUv);
    vec3 col = c.rgb;
    if (vUv.y < dofTop) {
      float cc = (1.0 - c.a) * cocMax;
      vec3 sum = col / (cc * cc + 1.0);
      float wsum = 1.0 / (cc * cc + 1.0);
      float area = 3.14159 * cocMax * cocMax / float(TAPS);
      float rot = ign(gl_FragCoord.xy) * 6.2831853;
      for (int i = 1; i < TAPS; i++) {
        float fi = float(i);
        float r = sqrt(fi / float(TAPS)) * cocMax;
        float a = fi * 2.399963 + rot;
        vec2 o = vec2(cos(a), sin(a)) * r;
        vec4 s = texture2D(tMain, vUv + o * texel);
        float sc = (1.0 - s.a) * cocMax;
        float w = clamp(sc - r + 1.0, 0.0, 1.0) * area / (3.14159 * sc * sc + 1.0);
        sum += s.rgb * w;
        wsum += w;
      }
      col = sum / wsum;
    }

    // lens: a tight glow, a wide soft one, and a faint sideways streak off the brightest lamps
    col += texture2D(tBloom, vUv).rgb * (0.05 * bloomGain);
    col += texture2D(tWide, vUv).rgb * (vec3(0.011, 0.013, 0.015) * bloomGain);
    vec2 q = vUv - 0.5;
    col *= 1.0 - 0.5 * smoothstep(0.2, 0.95, dot(q, q) * 2.0);

    col = aces(col);
    col = pow(col, vec3(1.0 / 2.2));

    // grade: cold shadows, warm highlights, a little extra contrast
    float luma = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(col, col * vec3(0.9, 1.0, 1.1) + vec3(0.0, 0.004, 0.008), (1.0 - smoothstep(0.0, 0.42, luma)) * 0.55);
    col = mix(col, col * vec3(1.03, 1.0, 0.95), smoothstep(0.5, 1.0, luma) * 0.6);
    col = mix(col, col * col * (3.0 - 2.0 * col), 0.18);

    // film grain, stronger in the mid-tones
    float n = fract(sin(dot(gl_FragCoord.xy + fract(time) * 173.0, vec2(12.9898, 78.233))) * 43758.5453);
    col += (n - 0.5) * 0.04 * (1.0 - 0.6 * luma);

    gl_FragColor = vec4(col, 1.0);
  }`,{tMain:{value:null},tBloom:{value:null},tWide:{value:null},texel:{value:new v0},cocMax:{value:12},dofTop:{value:.3},time:{value:0},exposure:{value:1},bloomGain:{value:1}});var Oi=new URLSearchParams(location.search),Du=.6,Nu=1.5,Uu=.085,D1=.2,Fu=parseInt(Oi.get("res"),10)||1440,N1=Oi.has("calm")||window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,gl=48,_l=28,Ou=(Oi.has("blur")?Math.max(0,parseFloat(Oi.get("blur"))||0):8)/1080,Qa=1280,Hs=1152,Ct=new Set((Oi.get("off")||"").split(",").filter(Boolean)),ja=document.getElementById("progress"),Bu=()=>new Promise(i=>requestAnimationFrame(i));async function zu(){await H2();let i=new Ha({antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"});i.autoClear=!1,i.toneMapping=xt,i.setPixelRatio(1),i.shadowMap.enabled=!0,i.shadowMap.autoUpdate=!1,document.body.prepend(i.domElement);let e=i.capabilities.getMaxAnisotropy();Wa.init();let t=new Be(Xa,1,.5,600);t.position.copy(Ut),t.lookAt(N2),t.updateMatrixWorld();let n=Math.tan(Xa*Math.PI/360),s=new L,r=new L,a=new L;t.matrixWorld.extractBasis(r,a,s),s.negate(),r.multiplyScalar(n),a.multiplyScalar(n);let o=new Be(24,Qa/Hs,.5,600);o.position.set(Ut.x,-Ut.y,Ut.z),o.lookAt(0,-Ut.y+Ut.z*Math.tan(10*Math.PI/180),0),o.updateMatrixWorld();let l=new J0().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(o.projectionMatrix).multiply(o.matrixWorldInverse),c=-new L(0,.9,.45).applyMatrix4(t.matrixWorldInverse).z,h=new Zt,f=new R0(.007,.011,.016),d=new R0(0,0,0);h.fog=new ts(f.clone(),.0036);let u=J2(),m=u.userData.uniforms;m.mirrorMatrix.value.copy(l);let{room:y,lights:g,setLights:p}=el();h.add(u,y);let M=K2();M.uniforms.mirrorMatrix.value.copy(l),M.uniforms.focus.value=c;let T=new Me({vertexShader:`
      void main() {
        vec4 p = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          p = instanceMatrix * p;
        #endif
        gl_Position = projectionMatrix * modelViewMatrix * p;
      }`,fragmentShader:"void main() { gl_FragColor = vec4(0.0); }"}),b=new Ee;{let R=(Z,Y,s0,c0,o0,S0,D0)=>{let r0=new Me({side:rt,uniforms:{power:{value:new R0(D0).multiplyScalar(S0)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
          uniform vec3 power;
          varying vec2 vUv;
          void main() {
            vec2 q = abs(vUv - 0.5) * 2.0;
            float soft = (1.0 - smoothstep(0.5, 1.0, q.x)) * (1.0 - smoothstep(0.6, 1.0, q.y));
            gl_FragColor = vec4(power * soft, 1.0);
          }`,transparent:!0,blending:Ss,depthWrite:!1,fog:!1}),C0=new ae(new _t(c0,o0),r0);C0.position.set(Z,Y,s0),C0.lookAt(0,1,0),b.add(C0)};R(-7.5,4.6,7.5,2.4,10,9,16773340),R(7.5,2.4,6.5,1.3,7,2.2,14674687),R(.5,9.5,2,5,5,1.6,16773340),b.visible=!1,h.add(b)}let A=new Zt,E=Z2(e,i.capabilities.maxTextureSize);A.add(E);let _=new Gn(V0.color,V0.candela,0,V0.angle,V0.penumbra,2);_.position.copy(V0.pos),_.target.position.copy(V0.target),A.add(_,_.target);let v=new vs(ie.color,0,ie.length,1.4);A.add(v);let D=1700,P=new L(24,-2,20),I=il(),N=new Zt,U=al(520),C=rl(t,c);N.add(U,C.mesh),U.visible=!Ct.has("dust"),C.mesh.visible=!Ct.has("drips");let H=ol(),V=ll(),z=cl(),t0=hl(),q=ul(),k=dl(),J=ml(),h0=fl(),p0=pl(),B=new Va(k);for(let R of[k,H])R.uniforms.camPos.value.copy(Ut),R.uniforms.camFwd.value.copy(s),R.uniforms.camRight.value.copy(r),R.uniforms.camUp.value.copy(a);let K=new L(An.radius,D1,D1+An.height);k.uniforms.tubShape.value=K,H.uniforms.tubShape.value=K,U.material.uniforms.tubShape.value=K,U.material.uniforms.focus.value=c;let i0={type:We,minFilter:ue,magFilter:ue},y0=new re(Qa,Hs,{...i0,depthBuffer:!0,generateMipmaps:!0,minFilter:ht}),l0=new re(Qa,Hs,{...i0,depthBuffer:!0,samples:4,generateMipmaps:!0,minFilter:ht});m.mirrorMap.value=y0.texture,k.uniforms.tMirror.value=l0.texture;{p("steady"),m.reflOn.value=0,b.visible=!0,i.shadowMap.needsUpdate=!0;let R=new Di(i);A.environment=R.fromScene(h,0,.1,600,{size:512,position:new L(0,1,0)}).texture,A.environmentIntensity=1,R.dispose(),b.visible=!1,m.reflOn.value=1}let n0=0,I0=!1,T0={cancelled:!1},G0,U0=[],O0,Se,ge,Te,se,je,le,ke,Re,Ce,O=12,Ue=100,ce=t.clone(),ne=Ut.z-ie.anchor.z,m0=(R,Z)=>{let Y=1,s0=0;for(;R>0;)Y/=Z,s0+=Y*(R%Z),R=Math.floor(R/Z);return s0},_e=R=>Math.min(Ue*Math.abs(1/c-1/R),O*3);async function L0(R,Z){let Y=performance.now();I0=!1,window.__ready=!1,n0=R;for(let xe of[G0,...U0,O0,Se,ge,Te,se,je,le,ke,Re,Ce])xe?.dispose();ja.style.opacity=1;let s0=gl+3*_l,c0=0,o0=()=>{c0++,ja.firstElementChild.style.width=`${(100*c0/s0).toFixed(1)}%`},S0=new re(n0,n0,{...i0,depthBuffer:!0}),D0=new re(n0,n0,{...i0,depthBuffer:!1}),r0=()=>new re(n0,n0,{...i0,depthBuffer:!1});G0=r0(),U0=[r0(),r0(),r0()],O0=new re(n0,n0,{...i0,depthBuffer:!1,generateMipmaps:!0,minFilter:ht});let C0=()=>new re(n0,n0,{type:We,minFilter:pe,magFilter:pe,depthBuffer:!0});Se=C0(),ge=C0(),Te=new re(n0,n0,{...i0,depthBuffer:!0,samples:4});let F0=Math.round(n0/4);le=new re(F0,F0,{...i0,depthBuffer:!1}),ke=new re(F0,F0,{...i0,depthBuffer:!1}),Re=new re(F0,F0,{...i0,depthBuffer:!1}),Ce=new re(F0,F0,{...i0,depthBuffer:!1}),O=Ou*n0,Ue=O*c,M.uniforms.cocScale.value=Ue,M.uniforms.cocMax.value=O,t0.uniforms.texel.value.set(1/n0,1/n0),t0.uniforms.focus.value=c,t0.uniforms.cocScale.value=Ue,t0.uniforms.cocMax.value=O,i.setClearColor(0,0);let M0=async(xe,vt)=>{i.setRenderTarget(D0),i.clear(!0,!1,!1),V.uniforms.tSrc.value=S0.texture,V.uniforms.weight.value=1/xe;for(let ve=0;ve<xe;ve++)if(vt(ve),m.floorSeed.value=ve,i.shadowMap.needsUpdate=!0,u.visible=!1,i.setRenderTarget(y0),i.clear(!0,!0,!1),i.render(h,o),u.visible=!0,t.setViewOffset(n0,n0,m0(ve+1,2)-.5,m0(ve+1,3)-.5,n0,n0),i.setRenderTarget(S0),i.clear(!0,!0,!1),i.render(h,t),t.clearViewOffset(),i.setRenderTarget(D0),B.material=V,B.render(i),o0(),ve%3===2&&(i.setRenderTarget(null),await Bu(),Z.cancelled))return!1;return!0},Q0=xe=>{t0.uniforms.tSrc.value=D0.texture,i.setRenderTarget(xe),B.material=t0,B.render(i)},be=()=>{S0.dispose(),D0.dispose()};p("steady"),h.fog.color.copy(f);let ut=await M0(gl,()=>{});if(!ut){be();return}z.uniforms.tSrc.value=D0.texture,i.setRenderTarget(O0),B.material=z,B.render(i),Q0(G0),p("strip"),h.fog.color.copy(d);for(let xe=0;xe<3;xe++){if(I.setPose((xe-1)*ie.swing),ut=await M0(_l,vt=>I.point(m0(vt+1,5),g.tube.position)),!ut){be();return}Q0(U0[xe])}p("steady"),h.fog.color.copy(f);{let xe=[];y.traverse(ve=>{ve.isMesh&&(xe.push([ve,ve.material]),ve.material=T)});let vt=u.material;u.material=M;for(let[ve,an]of[[1,Se],[2,ge]])M.uniforms.mode.value=ve,i.setRenderTarget(an),i.clear(!0,!0,!1),i.render(h,t);u.material=vt;for(let[ve,an]of xe)ve.material=an}be();{let xe=new ys,vt=new L;for(let Vs of[-1,0,1]){I.setPose(Vs*ie.swing*1.15,ie.swing*.4,.07*Vs);for(let Ws of[-.12,1.12])I.point(Ws,vt).project(t),xe.expandByPoint(new v0(vt.x*.5+.5,vt.y*.5+.5))}let ve=(_e(ne)*2.5+40)/n0,an=Math.max(0,xe.min.x-ve),Ft=Math.min(1,xe.max.x+ve),Bi=Math.max(0,xe.min.y-ve),Gs=Math.min(1,xe.max.y+ve),Jn=Math.floor(an*n0),on=Math.floor((1-Gs)*n0),ln=Math.max(8,Math.ceil(Ft*n0)-Jn),Ot=Math.max(8,Math.ceil((1-Bi)*n0)-on);ce.setViewOffset(n0,n0,Jn,on,ln,Ot),se=new re(ln,Ot,{...i0,depthBuffer:!0,samples:4}),je=new re(ln,Ot,{...i0,depthBuffer:!1}),k.uniforms.fixRect.value.set(Jn/n0,1-(on+Ot)/n0,ln/n0,Ot/n0),k.uniforms.fixDepth.value=ne;let Bt=_e(ne)*(Hs/o.fov)/(n0/Xa);k.uniforms.fixBlur.value.set(Bt/Qa,Bt/Hs),k.uniforms.fixLod.value=Math.max(0,Math.log2(Math.max(1,Bt*.6))),q.uniforms.texel.value.set(1/ln,1/Ot),q.uniforms.radius.value=_e(ne),q.uniforms.tSrc.value=se.texture}k.uniforms.tBase.value=G0.texture,k.uniforms.tStrip0.value=U0[0].texture,k.uniforms.tStrip1.value=U0[1].texture,k.uniforms.tStrip2.value=U0[2].texture,k.uniforms.tData1.value=Se.texture,k.uniforms.tData2.value=ge.texture,k.uniforms.tDepth.value=O0.texture,k.uniforms.tFix.value=je.texture,C.material.uniforms.tDepth.value=O0.texture,U.material.uniforms.res.value=n0,U.material.uniforms.cocScale.value=Ue,h0.uniforms.texel.value.set(1/n0,1/n0),J.uniforms.tMain.value=Te.texture,J.uniforms.tBloom.value=le.texture,J.uniforms.tWide.value=Re.texture,J.uniforms.texel.value.set(1/n0,1/n0),J.uniforms.cocMax.value=O;let ks=new L(0,0,Ut.z-c).project(t);J.uniforms.dofTop.value=.5+.5*ks.y+(O+2)/n0,i.setRenderTarget(null),window.__bakeMs=Math.round(performance.now()-Y),ja.style.opacity=0,I0=!0,window.__ready=!0,G(Q())}function B0(){let R=Math.floor(Math.min(window.innerWidth,window.innerHeight)),Z=Math.max(256,Math.min(Math.round(R*window.devicePixelRatio),Fu));i.domElement.style.width=i.domElement.style.height=R+"px",Z!==n0&&(T0.cancelled=!0,T0={cancelled:!1},i.setSize(Z,Z,!1),L0(Z,T0))}let w=new R0,x=(R,Z,Y,s0)=>{p0.uniforms.tSrc.value=R.texture,p0.uniforms.dir.value.set(Y,s0),i.setRenderTarget(Z),B.render(i)};function G(R){E.rotation.y=R*Du,E.position.y=D1+Math.sin(R*Nu)*Uu,K.set(An.radius,E.position.y,E.position.y+An.height);let Z=Ct.has("strip")?0:L1(R,N1),Y=nl(R,N1);I.setPose(Y.side,Y.depth,Y.rock),I.setBrightness(Z);let s0=Ii.clamp(Y.side/ie.swing,-1,1);k.uniforms.stripW.value.set(Math.max(0,-s0),1-Math.abs(s0),Math.max(0,s0)).multiplyScalar(Z);for(let S0=0;S0<5;S0++)I.point((S0+.5)/5,k.uniforms.airPts.value[S0]);k.uniforms.airColor.value.copy(ie.color).multiplyScalar(Ct.has("air")?0:ie.candela*16e-6*Z),k.uniforms.baseGain.value=Ct.has("steady")?0:1,k.uniforms.reflGain.value=Ct.has("refl")?0:1,J.uniforms.bloomGain.value=Ct.has("bloom")?0:1,w.copy(ie.color).multiplyScalar(Z),I.point(.5,v.position).add(P),v.lookAt(0,1,0),v.rotateZ(-ie.tilt),v.intensity=D*Z,C.update(R,n0,_e,w).forEach((S0,D0)=>k.uniforms.ripples.value[D0].set(S0.site.x,S0.site.z,S0.age,Ct.has("drips")?0:S0.site.pool?.02:.008)),H.uniforms.time.value=R,H.uniforms.tint.value.copy(V0.color).multiplyScalar(V0.candela*9e-4),U.material.uniforms.time.value=R,U.material.uniforms.tint.value.copy(V0.color).multiplyScalar(V0.candela*.05),i.setRenderTarget(l0),i.clear(!0,!0,!1),Ct.has("tub")||i.render(A,o),I.coverage.value=0,i.render(I.scene,o),I.coverage.value=1,i.setRenderTarget(se),i.clear(!0,!0,!1),i.render(I.scene,ce),i.setRenderTarget(je),B.material=q,B.render(i),i.setRenderTarget(Te),i.clear(!1,!0,!1),B.material=k,B.render(i),Ct.has("tub")||i.render(A,t),B.material=H,Ct.has("beam")||B.render(i),i.render(N,t),h0.uniforms.tSrc.value=Te.texture,i.setRenderTarget(le),B.material=h0,B.render(i),B.material=p0;let o0=1/le.width;for(let S0=0;S0<2;S0++){let D0=o0*(1+S0*1.5);x(le,ke,D0,0),x(ke,le,0,D0)}x(le,Ce,o0*4,0),x(Ce,Re,0,o0*2.5),x(Re,Ce,o0*10,0),x(Ce,Re,o0*22,0),i.setRenderTarget(null),J.uniforms.time.value=R,B.material=J,B.render(i)}let a0=Oi.get("t"),e0=null,u0=null,d0=performance.now(),Q=()=>a0!==null?parseFloat(a0)||0:e0===null?0:((u0??d0)-e0)/1e3;window.addEventListener("keydown",R=>{R.code==="Space"&&(R.preventDefault(),u0===null?u0=d0:(e0+=d0-u0,u0=null))});function j(R){d0=R,I0&&(e0===null&&(e0=R),G(Q())),requestAnimationFrame(j)}B0();let f0=0;window.addEventListener("resize",()=>{clearTimeout(f0),f0=setTimeout(B0,150)}),requestAnimationFrame(j),window.__flicker=R=>L1(R,N1),window.__bench=(R=200)=>{let Z=i.getContext(),Y=new Uint8Array(4),s0=()=>Z.readPixels(0,0,1,1,Z.RGBA,Z.UNSIGNED_BYTE,Y);G(0),s0();let c0=performance.now();for(let o0=0;o0<R;o0++)G(o0/60);return s0(),{msPerFrame:+((performance.now()-c0)/R).toFixed(2),res:n0}}}zu().catch(i=>{console.error(i),ja.style.opacity=0;let e=document.createElement("p");e.textContent="This needs WebGL 2. Try a current version of Chrome, Safari, Firefox or Edge.",e.style.cssText="color:#8a8a86;font:14px/1.5 system-ui,sans-serif;max-width:28em;padding:24px;text-align:center",document.body.append(e)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
