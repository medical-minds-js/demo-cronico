(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{iydT:function(e,o,i){"use strict";i.r(o),i.d(o,"HomeModule",function(){return U});var a=i("ofXK"),n=i("tyNb"),s=i("XNiG"),t=i("1G5W"),r=i("1IRp"),c=i("fXoL"),b=i("V24c"),l=i("4z7i"),d=i("QH85"),u=i("aeTR"),m=i("nw1e"),p=i("3Pt+");function h(e,o){1&e&&(c.Rb(0,"div",12),c.Ac(1," El campo es obligatorio "),c.Qb())}function R(e,o){if(1&e&&(c.Pb(0),c.yc(1,h,2,0,"div",11),c.Ob()),2&e){const e=c.dc();c.zb(1),c.kc("ngIf",e.form.controls.inputName.errors.required)}}function Q(e,o){1&e&&(c.Rb(0,"div",12),c.Ac(1," El campo es obligatorio "),c.Qb())}function f(e,o){if(1&e&&(c.Pb(0),c.yc(1,Q,2,0,"div",11),c.Ob()),2&e){const e=c.dc();c.zb(1),c.kc("ngIf",e.form.controls.inputEmail.errors.required)}}function v(e,o){1&e&&(c.Rb(0,"div",12),c.Ac(1," El campo es obligatorio "),c.Qb())}function g(e,o){if(1&e&&(c.Pb(0),c.yc(1,v,2,0,"div",11),c.Ob()),2&e){const e=c.dc();c.zb(1),c.kc("ngIf",e.form.controls.inputProduct.errors.required)}}let A=(()=>{class e{constructor(){this.name="",this.email="",this.submitForm=new c.n,this.closeForm=new c.n,this.submited=!1,this.form=new p.e({}),this.inputName=new p.c,this.inputEmail=new p.c,this.inputProduct=new p.c}ngOnInit(){this.initForm()}initForm(){this.inputName=new p.c({value:null,disabled:!1},[p.q.required]),this.inputEmail=new p.c({value:null,disabled:!1},[p.q.required]),this.inputProduct=new p.c({value:null,disabled:!1},[p.q.required]),Object.keys(this.form.controls).forEach(e=>{this.form.removeControl(e)}),this.form.addControl("inputName",this.inputName),this.form.addControl("inputEmail",this.inputEmail),this.form.addControl("inputProduct",this.inputProduct)}onCloseForm(){this.resetForm(),this.closeForm.emit(!0)}onSubmitForm(){var e,o,i;if(this.submited=!0,this.form.valid){const a={name:null===(e=this.form.get("inputName"))||void 0===e?void 0:e.value,email:null===(o=this.form.get("inputEmail"))||void 0===o?void 0:o.value,supply:null===(i=this.form.get("inputProduct"))||void 0===i?void 0:i.value};this.submitForm.emit(a)}}resetForm(){this.submited=!1,this.form&&(this.form.patchValue({inputName:null}),this.form.patchValue({inputEmail:null}),this.form.patchValue({inputProduct:null}),this.form.reset())}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["app-request-form"]],inputs:{name:"name",email:"email"},outputs:{submitForm:"submitForm",closeForm:"closeForm"},decls:15,vars:4,consts:[["novalidate","","autocomplete","off",1,"request-form",3,"formGroup","ngSubmit"],[1,"row","gtr-uniform"],[1,"col-6","col-12-xsmall","mb"],["type","text","name","demo-name","id","demo-name","placeholder","Nombre","formControlName","inputName"],[4,"ngIf"],["type","email","name","demo-email","id","demo-email","placeholder","Correo electr\xf3nico","formControlName","inputEmail"],[1,"col-12","mb"],["type","text","name","demo-product","id","demo-product","placeholder","Medicamento o padecimiento","formControlName","inputProduct"],[1,"col-12"],[1,"actions"],["type","submit","value","Solicitar",1,"primary"],["class","input-error-info d-block",4,"ngIf"],[1,"input-error-info","d-block"]],template:function(e,o){1&e&&(c.Rb(0,"form",0),c.bc("ngSubmit",function(){return o.onSubmitForm()}),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Nb(3,"input",3),c.yc(4,R,2,1,"ng-container",4),c.Qb(),c.Rb(5,"div",2),c.Nb(6,"input",5),c.yc(7,f,2,1,"ng-container",4),c.Qb(),c.Rb(8,"div",6),c.Nb(9,"input",7),c.yc(10,g,2,1,"ng-container",4),c.Qb(),c.Rb(11,"div",8),c.Rb(12,"ul",9),c.Rb(13,"li"),c.Nb(14,"input",10),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&e&&(c.kc("formGroup",o.form),c.zb(4),c.kc("ngIf",o.form.controls.inputName.errors&&o.submited),c.zb(3),c.kc("ngIf",o.form.controls.inputEmail.errors&&o.submited),c.zb(3),c.kc("ngIf",o.form.controls.inputProduct.errors&&o.submited))},directives:[p.r,p.l,p.f,p.b,p.k,p.d,a.n],styles:[".request-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .request-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{margin-bottom:0}.request-form[_ngcontent-%COMP%]   .mb[_ngcontent-%COMP%]{margin-bottom:1.5rem}.request-form[_ngcontent-%COMP%]   .input-error-info[_ngcontent-%COMP%]{color:red}"]}),e})();function x(e,o){1&e&&(c.Rb(0,"div",13),c.Ac(1," El campo es obligatorio "),c.Qb())}function y(e,o){if(1&e&&(c.Pb(0),c.yc(1,x,2,0,"div",12),c.Ob()),2&e){const e=c.dc();c.zb(1),c.kc("ngIf",e.form.controls.inputName.errors.required)}}function q(e,o){1&e&&(c.Rb(0,"div",13),c.Ac(1," El campo es obligatorio "),c.Qb())}function N(e,o){if(1&e&&(c.Pb(0),c.yc(1,q,2,0,"div",12),c.Ob()),2&e){const e=c.dc();c.zb(1),c.kc("ngIf",e.form.controls.inputEmail.errors.required)}}function C(e,o){1&e&&(c.Rb(0,"div",13),c.Ac(1," El campo es obligatorio "),c.Qb())}function w(e,o){if(1&e&&(c.Pb(0),c.yc(1,C,2,0,"div",12),c.Ob()),2&e){const e=c.dc();c.zb(1),c.kc("ngIf",e.form.controls.inputReason.errors.required)}}function M(e,o){1&e&&(c.Rb(0,"div",13),c.Ac(1," El campo es obligatorio "),c.Qb())}function X(e,o){if(1&e&&(c.Pb(0),c.yc(1,M,2,0,"div",12),c.Ob()),2&e){const e=c.dc();c.zb(1),c.kc("ngIf",e.form.controls.inputMessage.errors.required)}}let F=(()=>{class e{constructor(){this.name="",this.email="",this.submitForm=new c.n,this.closeForm=new c.n,this.submited=!1,this.form=new p.e({}),this.inputName=new p.c,this.inputReason=new p.c,this.inputEmail=new p.c,this.inputMessage=new p.c}ngOnInit(){this.initForm()}initForm(){this.inputName=new p.c({value:null,disabled:!1},[p.q.required]),this.inputEmail=new p.c({value:null,disabled:!1},[p.q.required]),this.inputMessage=new p.c({value:null,disabled:!1},[p.q.required]),this.inputReason=new p.c({value:null,disabled:!1},[p.q.required]),Object.keys(this.form.controls).forEach(e=>{this.form.removeControl(e)}),this.form.addControl("inputName",this.inputName),this.form.addControl("inputEmail",this.inputEmail),this.form.addControl("inputReason",this.inputReason),this.form.addControl("inputMessage",this.inputMessage)}onCloseForm(){this.resetForm(),this.closeForm.emit(!0)}onSubmitForm(){var e,o,i,a;if(this.submited=!0,this.form.valid){const n={name:null===(e=this.form.get("inputName"))||void 0===e?void 0:e.value,email:null===(o=this.form.get("inputEmail"))||void 0===o?void 0:o.value,message:null===(i=this.form.get("inputMessage"))||void 0===i?void 0:i.value,reason:null===(a=this.form.get("inputReason"))||void 0===a?void 0:a.value};this.submitForm.emit(n)}}resetForm(){this.submited=!1,this.form&&(this.form.patchValue({inputName:null}),this.form.patchValue({inputEmail:null}),this.form.patchValue({inputReason:null}),this.form.patchValue({inputMessage:null}),this.form.reset())}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["app-contact-form"]],inputs:{name:"name",email:"email"},outputs:{submitForm:"submitForm",closeForm:"closeForm"},decls:18,vars:5,consts:[["novalidate","","autocomplete","off",1,"request-form",3,"formGroup","ngSubmit"],[1,"row","gtr-uniform"],[1,"col-12","col-12-xsmall","mb"],["type","text","name","demo-name","id","demo-name","placeholder","Nombre completo","formControlName","inputName"],[4,"ngIf"],[1,"col-6","col-12-xsmall","mb"],["type","email","name","demo-email","id","demo-email","placeholder","Correo electr\xf3nico","formControlName","inputEmail"],["type","text","name","demo-product","id","demo-product","placeholder","Motivo","formControlName","inputReason"],["name","demo-product","id","demo-product","rows","6","placeholder","Ingrese su mensaje","formControlName","inputMessage",2,"resize","none"],[1,"col-12"],[1,"actions"],["type","submit","value","Solicitar",1,"primary"],["class","input-error-info d-block",4,"ngIf"],[1,"input-error-info","d-block"]],template:function(e,o){1&e&&(c.Rb(0,"form",0),c.bc("ngSubmit",function(){return o.onSubmitForm()}),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Nb(3,"input",3),c.yc(4,y,2,1,"ng-container",4),c.Qb(),c.Rb(5,"div",5),c.Nb(6,"input",6),c.yc(7,N,2,1,"ng-container",4),c.Qb(),c.Rb(8,"div",5),c.Nb(9,"input",7),c.yc(10,w,2,1,"ng-container",4),c.Qb(),c.Rb(11,"div",2),c.Nb(12,"textarea",8),c.yc(13,X,2,1,"ng-container",4),c.Qb(),c.Rb(14,"div",9),c.Rb(15,"ul",10),c.Rb(16,"li"),c.Nb(17,"input",11),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&e&&(c.kc("formGroup",o.form),c.zb(4),c.kc("ngIf",o.form.controls.inputName.errors&&o.submited),c.zb(3),c.kc("ngIf",o.form.controls.inputEmail.errors&&o.submited),c.zb(3),c.kc("ngIf",o.form.controls.inputReason.errors&&o.submited),c.zb(3),c.kc("ngIf",o.form.controls.inputMessage.errors&&o.submited))},directives:[p.r,p.l,p.f,p.b,p.k,p.d,a.n],styles:[""]}),e})();var k=i("nIAt");let z=(()=>{class e{constructor(e){this.session=e,this.memberships={},this.submitForm=new c.n,this.closeForm=new c.n}ngOnInit(){}onCloseForm(){this.closeForm.emit()}onViewMore(){this.submitForm.emit()}}return e.\u0275fac=function(o){return new(o||e)(c.Mb(u.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-membership-form"]],inputs:{memberships:"memberships"},outputs:{submitForm:"submitForm",closeForm:"closeForm"},decls:18,vars:1,consts:[[1,"row"],[1,"col-9"],[1,"col-3","text-end"],[1,"btn","empty",3,"click"],[1,"fa","fa-times"],[1,"col-12"],[1,"text-center"],[1,"btn","main",3,"click"]],template:function(e,o){1&e&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"h3"),c.Ac(3),c.Qb(),c.Qb(),c.Rb(4,"div",2),c.Rb(5,"button",3),c.bc("click",function(){return o.onCloseForm()}),c.Nb(6,"i",4),c.Qb(),c.Qb(),c.Rb(7,"div",5),c.Rb(8,"p"),c.Ac(9,"\xbfQuieres disfrutar de los mejores beneficios de "),c.Rb(10,"b"),c.Ac(11,"Meditrust"),c.Qb(),c.Ac(12,"?"),c.Qb(),c.Rb(13,"p"),c.Ac(14," Conoce nuestra secci\xf3n de membres\xedas y aprovecha todos los beneficios que tenemos preparados para ti "),c.Qb(),c.Qb(),c.Rb(15,"div",6),c.Rb(16,"button",7),c.bc("click",function(){return o.onViewMore()}),c.Ac(17,"Conocer m\xe1s"),c.Qb(),c.Qb(),c.Qb()),2&e&&(c.zb(3),c.Cc("\xa1Hola ",o.session.getUserObject().name,"!"))},styles:[""]}),e})();var P=i("W0mF");const E=["requestForm"],O=["contactForm"],j=["membershipModal"];function S(e,o){if(1&e&&(c.Rb(0,"blockquote"),c.Rb(1,"div",39),c.Rb(2,"div",60),c.Ac(3),c.Nb(4,"br"),c.Ac(5),c.Qb(),c.Rb(6,"div",61),c.Nb(7,"app-star-rating",62),c.Qb(),c.Qb(),c.Qb()),2&e){const e=o.$implicit;c.zb(3),c.Cc(" ",e.comment.comment,""),c.zb(2),c.Cc(" ",e.userName," "),c.zb(2),c.kc("rating",e.comment.qualification)}}let I=(()=>{class e{constructor(e,o,i,a,n){this.store=e,this.swa=o,this.router=i,this.modalService=a,this.session=n,this.state$=new s.a,this.ngUnsubscribe=new s.a,this.openMembershipForm=!1,this.state$=this.store.getState()}ngOnInit(){this.swa.loading(),this.store.loadHome().pipe(Object(t.a)(this.ngUnsubscribe)).subscribe(Object(r.a)(this.swa,()=>{this.swa.close(),this.session.isAuthenticated()&&(this.store.hasMemberships()||(this.openMembershipForm=!0,this.openModal("membershipModal")),this.store.isWinMemberships()&&this.openModal("winMemberships"))}))}getTestMembershios(){return this.store.getTestMemberships()}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}viewDetailsProduct(e){this.swa.loading(),this.store.selectCurrentProduct(e.id).pipe(Object(t.a)(this.ngUnsubscribe)).subscribe(Object(r.a)(this.swa,()=>{this.swa.close(),this.router.navigateByUrl(2==e.productType?"/search/disease":"/search/supply")}))}viewMainProduct(){let e=this.store.getMainProduct();this.viewDetailsProduct(e)}submitRequestForm(e){this.swa.loading(),this.store.requestNewProduct(e).pipe(Object(t.a)(this.ngUnsubscribe)).subscribe(Object(r.a)(this.swa,()=>{this.swa.success("Solicitud enviada, gracias"),this.domRequestForm.resetForm()}))}submitConcactForm(e){this.swa.loading(),this.store.requestContact(e).pipe(Object(t.a)(this.ngUnsubscribe)).subscribe(Object(r.a)(this.swa,()=>{this.swa.success("Mensaje enviado, gracias"),this.domContactForm.resetForm()}))}openModal(e){this.modalService.open(e)}closeModal(e){this.modalService.close(e)}closeMebershipModal(){this.openMembershipForm=!1,this.closeModal("membershipModal")}viewMemberships(e){this.router.navigateByUrl("/account/memberships")}closeWinMeberships(){this.closeModal("winMemberships")}}return e.\u0275fac=function(o){return new(o||e)(c.Mb(b.a),c.Mb(l.a),c.Mb(n.c),c.Mb(d.a),c.Mb(u.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-home-page"]],viewQuery:function(e,o){if(1&e&&(c.Gc(E,1),c.Gc(O,1),c.Gc(j,1)),2&e){let e;c.qc(e=c.cc())&&(o.domRequestForm=e.first),c.qc(e=c.cc())&&(o.domContactForm=e.first),c.qc(e=c.cc())&&(o.membershipForm=e.first)}},decls:246,vars:6,consts:[[1,"main"],[1,"image","main"],["width","100%","controls","","autoplay","","lopp","",3,"muted"],["src","assets/videos/VID-MediTrust-Intro.mp4"],["id","pos1"],[1,"major"],[1,"features"],[1,"icon","fa-file"],[1,"content"],[1,"icon","fa-eye"],[1,"icon","fa-flag"],["id","pos2"],[1,"icon","fa-heart"],[1,"icon","solid","fa-user"],[1,"icon","solid","fa-trophy"],[1,"icon","solid","fa-users"],[1,"icon","solid","fa-handshake"],["id","pos3"],[1,"icon","fa-clock"],[1,"icon","solid","fa-pills"],[1,"icon","solid","fa-boxes"],[1,"icon","solid","fa-dollar-sign"],[1,"icon","solid","fa-calendar-alt"],[1,"icon","solid","fa-truck"],[1,"icon","solid","fa-user-md"],[1,"icon","solid","fa-people-arrows"],[1,"icon","solid","fa-laptop-house"],["id","pos4"],["id","pos5"],[1,"image","object"],[3,"submitForm"],["requestForm",""],["id","pos6"],[4,"ngFor","ngForOf"],["id","pos7"],[1,"col-6","offset-3",2,"margin-bottom","20px"],["routerLink","/home/qa",1,"button","primary"],["id","footer",2,"border-top","solid 2px rgba(210, 215, 217, 0.75)"],[2,"border-top","none"],[1,"row"],[1,"col-12"],["contactForm",""],[1,"contact"],[1,"icon","solid","fa-envelope"],["href","#"],[1,"icon","solid","fa-phone"],[1,"icon","solid","fa-home"],["routerLink","/home/politics"],["routerLink","/home/service"],[1,"copyright"],["id","membershipModal","size","md"],[3,"memberships","submitForm","closeForm"],["membershipForm",""],["id","winMemberships","size","md"],[1,"col-9"],[1,"col-3","text-end"],[1,"btn","empty",3,"click"],[1,"fa","fa-times"],[1,"text-center"],[1,"btn","main",3,"click"],[1,"col"],[1,"col","text-center"],[3,"rating"]],template:function(e,o){1&e&&(c.Nb(0,"app-header"),c.Rb(1,"section",0),c.Rb(2,"span",1),c.Rb(3,"video",2),c.Nb(4,"source",3),c.Qb(),c.Qb(),c.Qb(),c.Rb(5,"section",4),c.Rb(6,"header",5),c.Rb(7,"h2"),c.Ac(8,"\xbfQui\xe9nes somos?"),c.Qb(),c.Qb(),c.Rb(9,"h3"),c.Rb(10,"p"),c.Ac(11," Meditrust es un servicio que busca mejorar la vida de nuestros clientes, ya sean pacientes o cuidadores, asegurando la continuidad de su tratamiento a trav\xe9s del suministro recurrente de su medicamento; garantizando el abasto a un precio justo y estable, con un servicio excepcional."),c.Nb(12,"br"),c.Ac(13," A trav\xe9s de una membres\xeda mensual podr\xe1s recibir tu medicamento antes de que se termine, a domicilio sin costo adicional. No es necesario que realices la compra mes a mes, autom\xe1ticamente el servicio detectar\xe1 cuando es momento de resurtir tu medicamento para que tengas el necesario para continuar con tu tratamiento sin interrumpir ninguna toma."),c.Nb(14,"br"),c.Ac(15," Antes de cada surtido te llegar\xe1 un correo de confirmaci\xf3n para poder hacer cambios o cancelaciones sin costo alguno. "),c.Qb(),c.Qb(),c.Rb(16,"div",6),c.Rb(17,"article"),c.Nb(18,"span",7),c.Rb(19,"div",8),c.Rb(20,"h2"),c.Ac(21,"Nuestro Prop\xf3sito"),c.Qb(),c.Rb(22,"h3"),c.Rb(23,"p"),c.Ac(24," \u201cMejorar la calidad de vida integral de la comunidad de pacientes con enfermedades cr\xf3nicas y sus familias\u201d. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(25,"article"),c.Nb(26,"span",9),c.Rb(27,"div",8),c.Rb(28,"h2"),c.Ac(29,"Nuestra Visi\xf3n"),c.Qb(),c.Rb(30,"h3"),c.Rb(31,"p"),c.Ac(32," \u201cSer la comunidad de pacientes cr\xf3nicos m\xe1s grande de M\xe9xico, ofreciendo soluciones (productos y servicios) que la posicionen como l\xedder en su industria en valor y en compromiso social.\u201d "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(33,"article"),c.Nb(34,"span",10),c.Rb(35,"div",8),c.Rb(36,"h2"),c.Ac(37,"Nuestra Misi\xf3n"),c.Qb(),c.Rb(38,"h3"),c.Rb(39,"p"),c.Ac(40," \u201cAcompa\xf1ar a los pacientes cr\xf3nicos para mejorar su calidad de vida a trav\xe9s de la venta y entrega recurrente de medicamento especializado, servicios a su comunidad, plataformas innovadoras y una atenci\xf3n diferenciada a sus clientes. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(41,"section",11),c.Rb(42,"header",5),c.Rb(43,"h2"),c.Ac(44,"Nuestros Valores"),c.Qb(),c.Qb(),c.Rb(45,"div",6),c.Rb(46,"article"),c.Nb(47,"span",12),c.Rb(48,"div",8),c.Rb(49,"h2"),c.Ac(50,"Empat\xeda"),c.Qb(),c.Rb(51,"h3"),c.Rb(52,"p"),c.Ac(53," Comprendemos los desaf\xedos y dificultades de nuestros clientes, y respondemos de manera solidaria, sensible y responsable. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(54,"article"),c.Nb(55,"span",13),c.Rb(56,"div",8),c.Rb(57,"h2"),c.Ac(58,"Orientado al cliente"),c.Qb(),c.Rb(59,"h3"),c.Rb(60,"p"),c.Ac(61," Priorizamos las necesidades de nuestros clientes en la toma de decisiones de nuestro negocio para ofrecerles soluciones verdaderas que mejoren su calidad de vida. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(62,"article"),c.Nb(63,"span",14),c.Rb(64,"div",8),c.Rb(65,"h2"),c.Ac(66,"Calidad"),c.Qb(),c.Rb(67,"h3"),c.Rb(68,"p"),c.Ac(69," Entregamos un servicio superior al esperado proporcionando confiabilidad, seguridad y eficiencia. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(70,"article"),c.Nb(71,"span",15),c.Rb(72,"div",8),c.Rb(73,"h2"),c.Ac(74,"Integridad"),c.Qb(),c.Rb(75,"h3"),c.Rb(76,"p"),c.Ac(77," Actuamos con honradez y rectitud, siendo coherentes en lo que pensamos, decimos y hacemos, manteniendo la transparencia en nuestras operaciones y servicios. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(78,"article"),c.Nb(79,"span",16),c.Rb(80,"div",8),c.Rb(81,"h2"),c.Ac(82,"Trabajo en Equipo"),c.Qb(),c.Rb(83,"h3"),c.Rb(84,"p"),c.Ac(85," Colaboramos, poniendo nuestro talento, conocimiento, habilidades y experiencia al servicio de nuestro objetivo com\xfan para superar los desaf\xedos y entregar m\xe1s valor a nuestros clientes. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(86,"section",17),c.Rb(87,"header",5),c.Rb(88,"h2"),c.Ac(89,"Beneficios"),c.Qb(),c.Qb(),c.Rb(90,"div",6),c.Rb(91,"article"),c.Nb(92,"span",18),c.Rb(93,"div",8),c.Nb(94,"h2"),c.Rb(95,"h3"),c.Rb(96,"p"),c.Ac(97," Olvidate de comprar tu medicamento a tiempo, \xa1que alguien m\xe1s lo har\xe1 por ti! "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(98,"article"),c.Nb(99,"span",19),c.Rb(100,"div",8),c.Nb(101,"h2"),c.Rb(102,"h3"),c.Rb(103,"p"),c.Ac(104,"Continuar con tu tratamiento"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(105,"article"),c.Nb(106,"span",20),c.Rb(107,"div",8),c.Nb(108,"h2"),c.Rb(109,"h3"),c.Rb(110,"p"),c.Ac(111,"Garantizar el abasto de tu medicamento"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(112,"article"),c.Nb(113,"span",21),c.Rb(114,"div",8),c.Nb(115,"h2"),c.Rb(116,"h3"),c.Rb(117,"p"),c.Ac(118," Obtener precios competitivos, evita estar buscando de una farmacia a otra el mejor precio. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(119,"article"),c.Nb(120,"span",22),c.Rb(121,"div",8),c.Nb(122,"h2"),c.Rb(123,"h3"),c.Rb(124,"p"),c.Ac(125,"Evitar cambios en el costo del medicamento mes a mes."),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(126,"article"),c.Nb(127,"span",23),c.Rb(128,"div",8),c.Nb(129,"h2"),c.Rb(130,"h3"),c.Rb(131,"p"),c.Ac(132," Entrega a domicilio sin costo de env\xedo, posibilidad de entregar a diferentes direcciones. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(133,"article"),c.Nb(134,"span",24),c.Rb(135,"div",8),c.Nb(136,"h2"),c.Rb(137,"h3"),c.Rb(138,"p"),c.Ac(139,"Acompa\xf1amiento de expertos en tu proceso."),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(140,"article"),c.Nb(141,"span",25),c.Rb(142,"div",8),c.Nb(143,"h2"),c.Rb(144,"h3"),c.Rb(145,"p"),c.Ac(146,"Atenci\xf3n personalizada."),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(147,"article"),c.Nb(148,"span",26),c.Rb(149,"div",8),c.Nb(150,"h2"),c.Rb(151,"h3"),c.Rb(152,"p"),c.Ac(153," Consultas en l\xednea en conjunto con Doctorel sin costo adicional. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(154,"section",27),c.Rb(155,"header",5),c.Rb(156,"h2"),c.Ac(157,"Causa social"),c.Qb(),c.Qb(),c.Rb(158,"h3"),c.Rb(159,"p"),c.Ac(160," Gracias a tu suscripci\xf3n a nuestro servicio apoyas a personas con tu mismo padecimiento, que no cuentan con los medios necesarios para adquirir sus medicamentos, a que contin\xfaen con su tratamiento y mejoren su calidad de vida. Simplemente comprando con nosotros ya est\xe1s ayudando. "),c.Qb(),c.Qb(),c.Qb(),c.Rb(161,"section",28),c.Rb(162,"div",8),c.Rb(163,"header",5),c.Rb(164,"h2"),c.Ac(165,"\xbfNo encontraste lo que buscabas?"),c.Qb(),c.Qb(),c.Rb(166,"h3"),c.Rb(167,"p"),c.Ac(168," En caso de que tu medicamento no aparezca en el listado te pedimos por favor nos lo indiques aqu\xed: "),c.Qb(),c.Qb(),c.Qb(),c.Rb(169,"div",29),c.Rb(170,"h3"),c.Ac(171,"Solicita un producto"),c.Qb(),c.Rb(172,"app-request-form",30,31),c.bc("submitForm",function(e){return o.submitRequestForm(e)}),c.Qb(),c.Qb(),c.Qb(),c.Rb(174,"section",32),c.Rb(175,"div",8),c.Rb(176,"header",5),c.Rb(177,"h2"),c.Ac(178,"Testimonios"),c.Qb(),c.Qb(),c.yc(179,S,8,3,"blockquote",33),c.ec(180,"async"),c.Qb(),c.Qb(),c.Rb(181,"section",34),c.Rb(182,"div",8),c.Rb(183,"header",5),c.Rb(184,"h2"),c.Ac(185,"\xbfTienes dudas?"),c.Qb(),c.Qb(),c.Rb(186,"h3"),c.Rb(187,"p"),c.Ac(188,"Consulta nuestra secci\xf3n de preguntas frecuentes."),c.Qb(),c.Qb(),c.Rb(189,"div",35),c.Rb(190,"a",36),c.Ac(191,"Preguntas frecuentes"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(192,"footer",37),c.Rb(193,"section",38),c.Rb(194,"div",39),c.Rb(195,"div",40),c.Rb(196,"h2"),c.Ac(197,"Contacto"),c.Qb(),c.Rb(198,"h4"),c.Rb(199,"p"),c.Ac(200," \xbfTienes alguna duda o comentario acerca de nuestro servicio? Por favor d\xe9janos tus datos y nos comunicaremos a la brevedad contigo. "),c.Qb(),c.Qb(),c.Rb(201,"span",29),c.Rb(202,"app-contact-form",30,41),c.bc("submitForm",function(e){return o.submitConcactForm(e)}),c.Qb(),c.Qb(),c.Qb(),c.Rb(204,"div",40),c.Rb(205,"ul",42),c.Rb(206,"li",43),c.Rb(207,"a",44),c.Ac(208,"information@untitled.tld"),c.Qb(),c.Qb(),c.Rb(209,"li",45),c.Ac(210," Tambi\xe9n nos puedes contactar v\xeda telef\xf3nica al XXXXX. "),c.Qb(),c.Rb(211,"li",46),c.Ac(212," 1234 Somewhere Road #8254"),c.Nb(213,"br"),c.Ac(214," Nashville, TN 00000-0000 "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(215,"p"),c.Rb(216,"a",47),c.Ac(217,"Pol\xedticas de Devoluci\xf3n y/o Cancelaci\xf3n"),c.Qb(),c.Ac(218,"\xa0 \xa0"),c.Rb(219,"a",48),c.Ac(220,"\xbfC\xf3mo funciona el servicio?"),c.Qb(),c.Qb(),c.Rb(221,"p",49),c.Ac(222,"\xa9 Untitled. All rights reserved. Cronico"),c.Qb(),c.Qb(),c.Rb(223,"app-modal",50),c.Pb(224),c.Rb(225,"app-membership-form",51,52),c.bc("submitForm",function(e){return o.viewMemberships(e)})("closeForm",function(){return o.closeMebershipModal()}),c.Qb(),c.Ob(),c.Qb(),c.Rb(227,"app-modal",53),c.Pb(228),c.Rb(229,"div",39),c.Rb(230,"div",54),c.Rb(231,"h3"),c.Ac(232),c.Qb(),c.Qb(),c.Rb(233,"div",55),c.Rb(234,"button",56),c.bc("click",function(){return o.closeWinMeberships()}),c.Nb(235,"i",57),c.Qb(),c.Qb(),c.Rb(236,"div",40),c.Rb(237,"p"),c.Ac(238,"Eres uno de los ganadores de nuestras membresias de regalo"),c.Qb(),c.Rb(239,"p"),c.Ac(240," Ahora puedes disfrutar de descuentos y de nuestros servicios complementarios "),c.Qb(),c.Rb(241,"p"),c.Ac(242," Continua con nososotros y recibe todo lo que necesitas para ti y tus familiares "),c.Qb(),c.Qb(),c.Rb(243,"div",58),c.Rb(244,"button",59),c.bc("click",function(){return o.closeWinMeberships()}),c.Ac(245,"Cerrar"),c.Qb(),c.Qb(),c.Qb(),c.Ob(),c.Qb()),2&e&&(c.zb(3),c.kc("muted","muted"),c.zb(176),c.kc("ngForOf",c.fc(180,4,o.state$).testimonials),c.zb(46),c.kc("memberships",o.getTestMembershios()),c.zb(7),c.Cc("Felicidades ",o.session.getUserObject().name,"!"))},directives:[m.a,A,a.m,n.e,F,k.a,z,P.a],pipes:[a.b],styles:[""]}),e})();var T=i("tK3A");const D=[{path:"",component:I},{path:"qa",component:(()=>{class e{constructor(){}ngOnInit(){Object(T.a)()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["app-qa-page"]],decls:76,vars:3,consts:[[3,"icon","openSidebar","link"],[1,"main"],["routerLink","/home/service"],[1,"major"],["routerLink","/home/politics"]],template:function(e,o){1&e&&(c.Nb(0,"app-header",0),c.Rb(1,"section",1),c.Rb(2,"header"),c.Rb(3,"h1"),c.Ac(4,"Preguntas y respuestas"),c.Qb(),c.Qb(),c.Qb(),c.Rb(5,"section"),c.Rb(6,"h2"),c.Ac(7,"\xbfA qui\xe9n est\xe1 dirigido el servicio?"),c.Qb(),c.Rb(8,"h4"),c.Rb(9,"p"),c.Ac(10," Meditrust es un servicio dirigido a toda persona que tenga un padecimiento cr\xf3nico o que sea responsable del cuidado de alg\xfan familiar y la compra de su medicamento. Te sugerimos que tambi\xe9n leas la secci\xf3n de "),c.Rb(11,"a",2),c.Ac(12,"\xbfC\xf3mo funciona el servicio?"),c.Qb(),c.Qb(),c.Qb(),c.Nb(13,"hr",3),c.Rb(14,"h2"),c.Ac(15,"\xbfCu\xe1l es el \xe1rea cobertura actual del servicio?"),c.Qb(),c.Rb(16,"h4"),c.Rb(17,"p"),c.Ac(18," Actualmente solo contamos con cobertura en la CDMX en las Alcald\xedas Miguel Hidalgo, Cuajimalpa, \xc1lvaro Obreg\xf3n y XXXXX. Espera pr\xf3ximamente el servicio en tu localidad. "),c.Qb(),c.Qb(),c.Nb(19,"hr",3),c.Rb(20,"h2"),c.Ac(21,"\xbfPara qu\xe9 padecimientos cr\xf3nicos existe actualmente el servicio?"),c.Qb(),c.Rb(22,"h4"),c.Rb(23,"p"),c.Ac(24," Actualmente contamos con medicamentos para los siguientes padecimientos cr\xf3nicos: Diabetes Mielitus, Hipertensi\xf3n, Dislipidemias, Vasculopat\xedas, S\xedndrome Metab\xf3lico, Enfermedades de Salud Mental y D\xe9ficit de Crecimiento. Espera m\xe1s padecimientos pr\xf3ximamente. Si tu padecimiento no se encuentra en el listado y deseas suscribirte al servicio, env\xedanos un correo a xxxxxxxxxxxxxxx o env\xedanos un mensaje en la secci\xf3n de contacto. "),c.Qb(),c.Qb(),c.Nb(25,"hr",3),c.Rb(26,"h2"),c.Ac(27,"\xbfQu\xe9 puedo hacer si mi medicamento no se encuentra en el listado?"),c.Qb(),c.Rb(28,"h4"),c.Rb(29,"p"),c.Ac(30," Te pedimos por favor nos env\xedes un mensaje en la secci\xf3n de contacto o nos contactes v\xeda correo electr\xf3nico: xxxxxxxxxxxxxxx. Tambi\xe9n puedes llamar a nuestra l\xednea de atenci\xf3n al xxxxxxxxxxxxxxx. "),c.Qb(),c.Qb(),c.Nb(31,"hr",3),c.Rb(32,"h2"),c.Ac(33,"\xbfC\xf3mo puedo modificar mi siguiente pedido?"),c.Qb(),c.Rb(34,"h4"),c.Rb(35,"p"),c.Ac(36," Podr\xe1s modificar tu pr\xf3xima entrega en el correo de confirmaci\xf3n o directamente en la secci\xf3n de pedidos. Si deseas ayuda nos puedes llamar a nuestra l\xednea de atenci\xf3n al xxxxxxxxxxxxxxx. "),c.Qb(),c.Qb(),c.Nb(37,"hr",3),c.Rb(38,"h2"),c.Ac(39,"\xbfPuedo enviar el medicamento a un familiar?"),c.Qb(),c.Rb(40,"h4"),c.Rb(41,"p"),c.Ac(42," \xa1Claro! Puedes configurar diferentes pedidos con diferentes medicamentos y diferentes direcciones para enviar el medicamento a quien t\xfa quieras. "),c.Qb(),c.Qb(),c.Nb(43,"hr",3),c.Rb(44,"h2"),c.Ac(45,"\xbfQu\xe9 puedo hacer si no recib\xed mi pedido?"),c.Qb(),c.Rb(46,"h4"),c.Rb(47,"p"),c.Ac(48," Te pedimos por favor nos env\xedes un mensaje en la secci\xf3n de contacto o nos contactes v\xeda correo electr\xf3nico: xxxxxxxxxxxxxxx. Tambi\xe9n puedes llamar a nuestra l\xednea de atenci\xf3n al xxxxxxxxxxxxxxx. "),c.Qb(),c.Qb(),c.Nb(49,"hr",3),c.Rb(50,"h2"),c.Ac(51,"\xbfC\xf3mo puedo hacer una devoluci\xf3n de mi pedido?"),c.Qb(),c.Rb(52,"h4"),c.Rb(53,"p"),c.Ac(54," Si tu pedido contiene errores y deseas hacer cambios o devoluciones, te sugerimos que primero leas la secci\xf3n de "),c.Rb(55,"a",4),c.Ac(56,"Pol\xedticas de Devoluci\xf3n y/o Cancelaci\xf3n"),c.Qb(),c.Ac(57," y posteriormente re comuniques a nuestra l\xednea de atenci\xf3n al xxxxxxxxxxxxxxx. "),c.Qb(),c.Qb(),c.Nb(58,"hr",3),c.Rb(59,"h2"),c.Ac(60,"\xbfQu\xe9 costo tiene la membres\xeda?"),c.Qb(),c.Rb(61,"h4"),c.Rb(62,"p"),c.Ac(63," La membres\xeda tiene un costo de $$$$ anual, el cual se cobrar\xe1 al iniciar el a\xf1o a tu forma de pago preferida. Por promoci\xf3n de lanzamiento los primeros xxxx meses es gratuita. "),c.Qb(),c.Qb(),c.Nb(64,"hr",3),c.Rb(65,"h2"),c.Ac(66,"\xbfPuedo adquirir mi medicamento en un local f\xedsico?"),c.Qb(),c.Rb(67,"h4"),c.Rb(68,"p"),c.Ac(69,"Meditrust en un servicio 100% digital a domicilio."),c.Qb(),c.Qb(),c.Nb(70,"hr",3),c.Rb(71,"h2"),c.Ac(72,"\xbfQu\xe9 formas de pago son aceptadas?"),c.Qb(),c.Rb(73,"h4"),c.Rb(74,"p"),c.Ac(75," Puedes hacer tus pedidos con tarjeta de cr\xe9dito o d\xe9bito de cualquier banco. Los datos son encriptados y tu informaci\xf3n est\xe1 segura. Meditrust nunca ve la informaci\xf3n de tus tarjetas y tampoco guarda la informaci\xf3n. "),c.Qb(),c.Qb(),c.Qb()),2&e&&c.kc("icon","fa-arrow-left")("openSidebar",!1)("link","/home")},directives:[m.a,n.e],styles:[""]}),e})()},{path:"politics",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["app-politics"]],decls:136,vars:3,consts:[[3,"icon","openSidebar","link"],[1,"main"],[1,"major"],[1,"row"],[1,"col-10","col-12-small"],[1,"col-6","col-12-small"]],template:function(e,o){1&e&&(c.Nb(0,"app-header",0),c.Rb(1,"section",1),c.Rb(2,"header"),c.Rb(3,"h1"),c.Ac(4,"Pol\xedticas de Devoluci\xf3n y/o Cancelaci\xf3n"),c.Qb(),c.Qb(),c.Qb(),c.Rb(5,"section"),c.Rb(6,"h4"),c.Rb(7,"p"),c.Ac(8," Toda devoluci\xf3n deber\xe1 ser llevada a cabo en el momento de la entrega del producto por parte del repartidor de XXXXX y antes de la firma de conformidad por parte del paciente, por lo que el paciente/cliente deber\xe1 de revisar sus productos previos a su firma de recibido. \xc9sta devoluci\xf3n solo proceder\xe1 en caso de que el producto despachado no corresponda con el solicitado por el paciente/cliente, o que al momento de la revisi\xf3n este tenga alg\xfan defecto en su empaque primario y/o secundario que comprometa su estabilidad y/o que la fecha de caducidad sea menor a 3 meses y que el paciente solicite el cambio por uno de mayor vigencia. Toda solicitud por parte del cliente deber\xe1 cumplir con lo establecido en la POL\xcdTICA DE DEVOLUCI\xd3N Y/O CANCELACI\xd3N ser\xe1 evaluada como excepci\xf3n y contar previamente con la aprobaci\xf3n del responsable Sanitario de XXXXX, siempre y cuando cumpla con los siguientes puntos: "),c.Qb(),c.Qb(),c.Qb(),c.Rb(9,"section"),c.Rb(10,"header",2),c.Rb(11,"h2"),c.Ac(12,"1.- Devoluciones imputables a XXXXXX."),c.Qb(),c.Qb(),c.Rb(13,"div",3),c.Rb(14,"div",4),c.Rb(15,"h3"),c.Ac(16," 1.1 El Cliente puede solicitar la Devoluci\xf3n por alguno de los siguientes motivos: "),c.Qb(),c.Rb(17,"ul"),c.Rb(18,"li"),c.Rb(19,"h4"),c.Ac(20," Defecto de f\xe1brica: entendi\xe9ndose este como la deficiencia de contenido neto o cantidad entregada por empaque. "),c.Qb(),c.Qb(),c.Rb(21,"li"),c.Rb(22,"h4"),c.Ac(23," Calidad del producto: entendi\xe9ndose este como diferencia entre calidad, marca o especificaciones sustanciales del producto o que el mismo se encuentre en mal estado. "),c.Qb(),c.Qb(),c.Rb(24,"li"),c.Rb(25,"h4"),c.Ac(26," Mal surtido (producto incorrecto): siempre y cuando sea demostrable que el error se cometi\xf3 por parte un colaborador de XXXXX. "),c.Qb(),c.Qb(),c.Rb(27,"li"),c.Rb(28,"h4"),c.Ac(29," Cobro incorrecto: entendi\xe9ndose como el error que pudiera llegar a ocurrir por productos adicionales y/o error en la carga de la oferta.Las devoluciones realizadas por los casos anteriormente mencionadas se realizar\xe1n siempre y cuando se cumplan con los requisitos que se indican m\xe1s adelante. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(30,"section"),c.Rb(31,"header",2),c.Rb(32,"h2"),c.Ac(33,"2.- Requisitos para Devoluciones XXXXXX."),c.Qb(),c.Qb(),c.Rb(34,"div",3),c.Rb(35,"div",5),c.Rb(36,"h3"),c.Ac(37," 2.1 Los requisitos para solicitar una Devoluci\xf3n imputable a XXXXXX son: "),c.Qb(),c.Rb(38,"ul"),c.Rb(39,"li"),c.Rb(40,"h4"),c.Ac(41,"Ticket de compra y/o factura."),c.Qb(),c.Qb(),c.Rb(42,"li"),c.Rb(43,"h4"),c.Ac(44,"Productos en buen estado y con el empaque original."),c.Qb(),c.Qb(),c.Rb(45,"li"),c.Rb(46,"h4"),c.Ac(47," Para productos de consumo se podr\xe1 realizar la devoluci\xf3n con un ticket y/o factura no mayor a 48 horas, a partir de la compra. "),c.Qb(),c.Qb(),c.Rb(48,"li"),c.Rb(49,"h4"),c.Ac(50," Cualquier defecto de f\xe1brica y/o detrimento en la calidad del producto que sea detectado posterior a los plazos enunciados anteriormente se deber\xe1 realizar el tr\xe1mite correspondiente con el fabricante, de conformidad con la garant\xeda que se describa en el producto. "),c.Qb(),c.Qb(),c.Rb(51,"li"),c.Rb(52,"h4"),c.Ac(53,"Entregar copia de identificaci\xf3n oficial."),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(54,"div",5),c.Rb(55,"h3"),c.Ac(56,"2.2 Devoluciones no imputables a XXXXX"),c.Qb(),c.Rb(57,"h4"),c.Rb(58,"p"),c.Ac(59," Adicional, existen otro tipo de devoluciones que XXXXX no est\xe1 obligado a realizar, y se reserva el derecho inclusive si se cumplen con todos los requisitos, siendo estas las siguientes: "),c.Qb(),c.Qb(),c.Rb(60,"ul"),c.Rb(61,"li"),c.Rb(62,"h4"),c.Ac(63,"El cliente no quiere y/o ya no necesita el producto."),c.Qb(),c.Qb(),c.Rb(64,"li"),c.Rb(65,"h4"),c.Ac(66," Precio superior al precio m\xe1ximo al p\xfablico indicado en el empaque original del producto a devolver. "),c.Qb(),c.Qb(),c.Rb(67,"li"),c.Rb(68,"h4"),c.Ac(69," La Devoluci\xf3n sobre el ticket de compra puede ser: total o parcial. "),c.Qb(),c.Qb(),c.Rb(70,"li"),c.Rb(71,"h4"),c.Ac(72," La Devoluci\xf3n se realizar\xe1 de conformidad con el m\xe9todo de pago realizado inicialmente. En caso de que el pago haya sido realizado por medio de tarjeta bancaria y/o medios digitales de banca por internet, se estar\xe1 realizando lo dispuesto por la Instituci\xf3n Bancaria para realizar el reembolso. "),c.Qb(),c.Qb(),c.Rb(73,"li"),c.Rb(74,"h4"),c.Ac(75," El horario para devoluciones es de 09:00 a 18:00 horas de lunes a viernes. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(76,"section"),c.Rb(77,"header",2),c.Rb(78,"h2"),c.Ac(79,"3.- Restricciones."),c.Qb(),c.Qb(),c.Rb(80,"div",3),c.Rb(81,"div",4),c.Rb(82,"h3"),c.Ac(83,"3.1 La Devoluci\xf3n no aplicar\xe1 en los siguientes casos:"),c.Qb(),c.Rb(84,"ol"),c.Rb(85,"li"),c.Rb(86,"h4"),c.Ac(87," Si no se presenta el ticket de compra y/o si este no es legible. "),c.Qb(),c.Qb(),c.Rb(88,"li"),c.Rb(89,"h4"),c.Ac(90,"Si el medicamento y/o producto pertenece a alguna promoci\xf3n."),c.Qb(),c.Qb(),c.Rb(91,"li"),c.Rb(92,"h4"),c.Ac(93," Si el medicamento y/o producto pertenece a un Programa de Lealtad de laboratorio. "),c.Qb(),c.Qb(),c.Rb(94,"li"),c.Rb(95,"h4"),c.Ac(96," Si el producto est\xe1 clasificado como antibi\xf3tico, estupefaciente, psicotr\xf3pico, controlado, oncol\xf3gicos, refrigerado y/o de alta especialidad. Lo anterior, para garantizar la calidad (temperatura. Humedad y luz) y cadena de conservaci\xf3n de los mecimientos conforme a las disposiciones legales vigentes en materia de salud. "),c.Qb(),c.Qb(),c.Rb(97,"li"),c.Rb(98,"h4"),c.Ac(99,"Si el medicamento es versi\xf3n inyectable de una sola dosis."),c.Qb(),c.Qb(),c.Rb(100,"li"),c.Rb(101,"h4"),c.Ac(102," Si se trata de productos ortop\xe9dicos y/o dispositivos m\xe9dicos, estos deber\xe1n de seguir el procedimiento de devoluci\xf3n, reembolso, cambio y/o garant\xeda con el fabricante. "),c.Qb(),c.Qb(),c.Rb(103,"li"),c.Rb(104,"h4"),c.Ac(105,"Si se trata de productos dermocosm\xe9ticos."),c.Qb(),c.Qb(),c.Rb(106,"li"),c.Rb(107,"h4"),c.Ac(108," Si el Cliente inicia un proceso de Desconocimiento de cargo, en caso de haber realizado la compra a trav\xe9s de tarjeta bancaria o medios electr\xf3nicos, ante su instituci\xf3n bancaria antes de iniciar el procedimiento de Devoluci\xf3n en XXXXXX. "),c.Qb(),c.Qb(),c.Rb(109,"li"),c.Rb(110,"h4"),c.Ac(111," El rembolso solo es aplicable en los XX d\xedas posteriores a la compra. "),c.Qb(),c.Qb(),c.Qb(),c.Rb(112,"h4"),c.Rb(113,"p"),c.Ac(114," Cuando la solicitud obedezca a alg\xfan defecto de fabricaci\xf3n, XXXX realizar\xe1 el reporte al laboratorio fabricante quien despu\xe9s de realizar un dictamen t\xe9cnico definir\xe1 si el producto es reemplazado y el mecanismo mediante el cual se har\xe1 entrega al cliente de la pieza sustituta. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(115,"section"),c.Rb(116,"header",2),c.Rb(117,"h2"),c.Ac(118,"4.- Cancelaciones."),c.Qb(),c.Qb(),c.Rb(119,"div",3),c.Rb(120,"div",4),c.Rb(121,"h3"),c.Ac(122," 4.1 Para hacer efectiva la cancelaci\xf3n del pedido se atender\xe1 a lo siguiente: "),c.Qb(),c.Rb(123,"h4"),c.Rb(124,"p"),c.Ac(125," En caso de haber realizado la compra a trav\xe9s de los canales digitales, la cancelaci\xf3n podr\xe1 ser efectiva en los siguientes momentos: "),c.Qb(),c.Qb(),c.Rb(126,"ol"),c.Rb(127,"li"),c.Rb(128,"h4"),c.Ac(129," Si la entrega se agend\xf3 sin hora espec\xedfica, se podr\xe1 realizar la cancelaci\xf3n dentro de los 60 minutos siguientes a haber realizado la compra. "),c.Qb(),c.Qb(),c.Rb(130,"li"),c.Rb(131,"h4"),c.Ac(132," Si la entrega se agend\xf3 con hora espec\xedfica, se podr\xe1 realizar la cancelaci\xf3n dentro de los 30 minutos siguientes a haber realizado la compra. "),c.Qb(),c.Qb(),c.Qb(),c.Rb(133,"h4"),c.Rb(134,"p"),c.Ac(135," El Cliente puede solicitar la cancelaci\xf3n y/o devoluci\xf3n de su pedido llamando a XXXXX. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&e&&c.kc("icon","fa-arrow-left")("openSidebar",!1)("link","/home")},directives:[m.a],styles:[""]}),e})()},{path:"service",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["app-service-page"]],decls:23,vars:3,consts:[[3,"icon","openSidebar","link"],[1,"main"],[1,"row"],[1,"col-6","col-12-small"],[1,"content"],[1,"image","object"],["src","./../../../../assets/images/purchase-process.png","alt",""]],template:function(e,o){1&e&&(c.Nb(0,"app-header",0),c.Rb(1,"section",1),c.Rb(2,"header"),c.Rb(3,"h1"),c.Ac(4,"\xbfC\xf3mo funciona el servicio?"),c.Qb(),c.Qb(),c.Qb(),c.Rb(5,"section"),c.Rb(6,"h2"),c.Ac(7,"\xa1Es muy sencillo!"),c.Qb(),c.Rb(8,"div",2),c.Rb(9,"div",3),c.Rb(10,"h4"),c.Rb(11,"p"),c.Ac(12," Solamente tienes que buscar tu medicamento o padecimiento, una vez que lo hayas seleccionado, deber\xe1s agregar la dosis indicada por tu m\xe9dico y nuestra calculadora te indicar\xe1 si las cajas seleccionadas son suficientes para cubrir tu dosis por el intervalo de tiempo para tu resurtido. "),c.Qb(),c.Rb(13,"p"),c.Ac(14," A continuaci\xf3n, deber\xe1s agregar tu medicamento al carrito, ingresar tu direcci\xf3n de env\xedo, horario preferido para la entrega y datos de pago. "),c.Qb(),c.Rb(15,"p"),c.Ac(16," Tu primer pedido lo recibir\xe1s en m\xe1ximo 48 horas y posteriormente en el intervalo seleccionado (15 o 30 d\xedas). Si deseas modificar la fecha podr\xe1s usar el calendario que aparece al momento de configurar tu pedido. "),c.Qb(),c.Rb(17,"p"),c.Ac(18," Tus siguientes pedidos se surtir\xe1n de forma autom\xe1tica a la direcci\xf3n indicada antes de que se termine tu medicamento. Te llegar\xe1 un correo electr\xf3nico 10 d\xedas antes del surtido en caso de que quieras hacer modificaciones en la dosis, el medicamento o incluso cancelar el servicio sin costo alguno, tendr\xe1s hasta 5 d\xedas m\xe1s para realizar cambios. "),c.Qb(),c.Qb(),c.Qb(),c.Rb(19,"div",3),c.Rb(20,"div",4),c.Rb(21,"span",5),c.Nb(22,"img",6),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&e&&c.kc("icon","fa-arrow-left")("openSidebar",!1)("link","/home")},directives:[m.a],styles:[""]}),e})()}];let G=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({imports:[[n.f.forChild(D)],n.f]}),e})();var L=i("tk/3"),V=i("PCNd");let U=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({providers:[L.b],imports:[[a.c,G,V.a]]}),e})()},tK3A:function(e,o,i){"use strict";function a(){window.scrollTo(0,0)}i.d(o,"a",function(){return a})}}]);