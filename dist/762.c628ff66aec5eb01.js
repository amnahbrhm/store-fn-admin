"use strict";(self.webpackChunkstore_fn_admin=self.webpackChunkstore_fn_admin||[]).push([[762],{9762:(f,u,r)=>{r.r(u),r.d(u,{AuthModule:()=>h});var c=r(6814),n=r(95),o=r(4946),d=r(4855),l=r(4670),p=r(3714),a=r(707);const g=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class t{constructor(e,s,m){this.authService=e,this.router=s,this.fb=m,this.form=new n.cw({user_name:new n.NI(null,n.kI.required),password:new n.NI(null,n.kI.required)})}login(){this.authService.login(this.form.value).subscribe(e=>{console.log(e),this.authService.isLoggedIn=!0,localStorage.setItem("token",e.token),this.router.navigateByUrl("items")})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(d.e),o.Y36(l.F0),o.Y36(n.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:18,vars:1,consts:[[3,"formGroup"],[1,"auth"],[1,"col-3"],[1,"p-inputgroup","mb-2"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["pInputText","","formControlName","user_name","placeholder","Username"],[1,"pi","pi-lock"],["pInputText","","type","password","formControlName","password","placeholder","Password"],["label","Login",3,"onClick"]],template:function(e,s){1&e&&(o.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label"),o._uU(4,"Username"),o.qZA(),o.TgZ(5,"div",3)(6,"span",4),o._UZ(7,"i",5),o.qZA(),o._UZ(8,"input",6),o.qZA()(),o.TgZ(9,"div",2)(10,"label"),o._uU(11,"Password"),o.qZA(),o.TgZ(12,"div",3)(13,"span",4),o._UZ(14,"i",7),o.qZA(),o._UZ(15,"input",8),o.qZA()(),o.TgZ(16,"div",2)(17,"p-button",9),o.NdJ("onClick",function(){return s.login()}),o.qZA()()()()),2&e&&o.Q6J("formGroup",s.form)},dependencies:[p.o,a.zx,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.ez,p.j,a.hJ,n.UX,l.Bz.forChild(g)]}),t})()}}]);