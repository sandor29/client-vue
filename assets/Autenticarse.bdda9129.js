import{H as m,r as n,z as _,P as f,a as v,o as h,c as x,f as e,Q as w,b as a,u as s,R as y,S as l,T as c,g,U as b,V as S,W as $,w as k,X as C}from"./vendor.d89978b2.js";const V={class:"s-page"},R={class:"s-center flex-col"},U=["onSubmit"],B=e("p",{class:"font-medium text-xl my-4 uppercase"},"Inicie Sesi\xF3n",-1),N={class:"flex m-2"},j={class:"flex m-2"},I={class:"flex justify-center"},M={class:"s-btn",type:"submit"},P=e("span",{class:"mx-2"},"Inicie Sesi\xF3n",-1),T=e("p",{class:"m-4"},"No tienes cuenta !",-1),z=e("span",{class:"ml-2 uppercase"},"Registrarse",-1),H={setup(D){let o=m({correo:"",clave:""});n(!1),n(""),_();const i=f(),d=u=>{console.log("User",o),i.push({name:"Portada"})};return(u,t)=>{const p=v("router-link");return h(),x("div",V,[e("div",R,[e("form",{class:"text-center w-11/12 sm:w-96",onSubmit:w(d,["prevent"])},[B,e("div",N,[a(s(y),{class:"my-3 h-6 w-6 text-gray-500"}),l(e("input",{class:"s-input",type:"email",placeholder:"Correo : sandor@example.com","onUpdate:modelValue":t[0]||(t[0]=r=>s(o).correo=r)},null,512),[[c,s(o).correo]]),e("a",{href:"#",onClick:t[1]||(t[1]=r=>s(o).correo="")},[a(s(g),{class:"my-4 h-5 w-5 text-gray-500"})])]),e("div",j,[a(s(b),{class:"my-3 h-6 w-6 text-gray-500"}),l(e("input",{class:"s-input",type:"password",placeholder:"Clave : S@ndor+21","onUpdate:modelValue":t[2]||(t[2]=r=>s(o).clave=r)},null,512),[[c,s(o).clave]]),e("a",{href:"#",onClick:t[3]||(t[3]=r=>s(o).clave="")},[a(s(S),{class:"my-4 h-5 w-5 text-gray-500"})])]),e("div",I,[e("button",M,[a(s($),{class:"h-6 w-6"}),P])])],40,U),T,a(p,{class:"flex",to:{name:"Registrarse"}},{default:k(()=>[a(s(C),{class:"h-6 w-6"}),z]),_:1})])])}}};export{H as default};