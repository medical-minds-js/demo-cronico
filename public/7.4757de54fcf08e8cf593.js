(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1G5W":function(e,o,i){"use strict";i.d(o,"a",function(){return n});var a=i("zx2A");function n(e){return o=>o.lift(new t(e))}class t{constructor(e){this.notifier=e}call(e,o){const i=new s(e),n=Object(a.c)(this.notifier,new a.a(i));return n&&!i.seenValue?(i.add(n),o.subscribe(i)):i}}class s extends a.b{constructor(e){super(e),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}},iydT:function(e,o,i){"use strict";i.r(o),i.d(o,"HomeModule",function(){return D});var a=i("ofXK"),n=i("tyNb"),t=i("XNiG"),s=i("1G5W"),r=i("1IRp"),c=i("fXoL"),l=i("V24c"),d=i("4z7i"),b=i("nw1e"),u=i("3Pt+");function m(e,o){1&e&&(c.Pb(0,"div",12),c.oc(1," El campo es obligatorio "),c.Ob())}function p(e,o){if(1&e&&(c.Nb(0),c.nc(1,m,2,0,"div",11),c.Mb()),2&e){const e=c.Yb();c.zb(1),c.ec("ngIf",e.form.controls.inputName.errors.required)}}function f(e,o){1&e&&(c.Pb(0,"div",12),c.oc(1," El campo es obligatorio "),c.Ob())}function P(e,o){if(1&e&&(c.Nb(0),c.nc(1,f,2,0,"div",11),c.Mb()),2&e){const e=c.Yb();c.zb(1),c.ec("ngIf",e.form.controls.inputEmail.errors.required)}}function O(e,o){1&e&&(c.Pb(0,"div",12),c.oc(1," El campo es obligatorio "),c.Ob())}function h(e,o){if(1&e&&(c.Nb(0),c.nc(1,O,2,0,"div",11),c.Mb()),2&e){const e=c.Yb();c.zb(1),c.ec("ngIf",e.form.controls.inputProduct.errors.required)}}let v=(()=>{class e{constructor(){this.name="",this.email="",this.submitForm=new c.n,this.closeForm=new c.n,this.submited=!1,this.form=new u.e({}),this.inputName=new u.c,this.inputEmail=new u.c,this.inputProduct=new u.c}ngOnInit(){this.initForm()}initForm(){this.inputName=new u.c({value:null,disabled:!1},[u.o.required]),this.inputEmail=new u.c({value:null,disabled:!1},[u.o.required]),this.inputProduct=new u.c({value:null,disabled:!1},[u.o.required]),Object.keys(this.form.controls).forEach(e=>{this.form.removeControl(e)}),this.form.addControl("inputName",this.inputName),this.form.addControl("inputEmail",this.inputEmail),this.form.addControl("inputProduct",this.inputProduct)}onCloseForm(){this.resetForm(),this.closeForm.emit(!0)}onSubmitForm(){var e,o,i;if(this.submited=!0,this.form.valid){const a={name:null===(e=this.form.get("inputName"))||void 0===e?void 0:e.value,email:null===(o=this.form.get("inputEmail"))||void 0===o?void 0:o.value,supply:null===(i=this.form.get("inputProduct"))||void 0===i?void 0:i.value};this.submitForm.emit(a)}}resetForm(){this.submited=!1,this.form&&(this.form.patchValue({inputName:null}),this.form.patchValue({inputEmail:null}),this.form.patchValue({inputProduct:null}),this.form.reset())}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c.Eb({type:e,selectors:[["app-request-form"]],inputs:{name:"name",email:"email"},outputs:{submitForm:"submitForm",closeForm:"closeForm"},decls:15,vars:4,consts:[["novalidate","","autocomplete","off",1,"request-form",3,"formGroup","ngSubmit"],[1,"row","gtr-uniform"],[1,"col-6","col-12-xsmall","mb"],["type","text","name","demo-name","id","demo-name","placeholder","Nombre","formControlName","inputName"],[4,"ngIf"],["type","email","name","demo-email","id","demo-email","placeholder","Email","formControlName","inputEmail"],[1,"col-12","mb"],["type","text","name","demo-product","id","demo-product","placeholder","Medicamento o padecimiento","formControlName","inputProduct"],[1,"col-12"],[1,"actions"],["type","submit","value","Solicitar",1,"primary"],["class","input-error-info d-block",4,"ngIf"],[1,"input-error-info","d-block"]],template:function(e,o){1&e&&(c.Pb(0,"form",0),c.Wb("ngSubmit",function(){return o.onSubmitForm()}),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Lb(3,"input",3),c.nc(4,p,2,1,"ng-container",4),c.Ob(),c.Pb(5,"div",2),c.Lb(6,"input",5),c.nc(7,P,2,1,"ng-container",4),c.Ob(),c.Pb(8,"div",6),c.Lb(9,"input",7),c.nc(10,h,2,1,"ng-container",4),c.Ob(),c.Pb(11,"div",8),c.Pb(12,"ul",9),c.Pb(13,"li"),c.Lb(14,"input",10),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&e&&(c.ec("formGroup",o.form),c.zb(4),c.ec("ngIf",o.form.controls.inputName.errors&&o.submited),c.zb(3),c.ec("ngIf",o.form.controls.inputEmail.errors&&o.submited),c.zb(3),c.ec("ngIf",o.form.controls.inputProduct.errors&&o.submited))},directives:[u.p,u.i,u.f,u.b,u.h,u.d,a.l],styles:[".request-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .request-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{margin-bottom:0}.request-form[_ngcontent-%COMP%]   .mb[_ngcontent-%COMP%]{margin-bottom:1.5rem}.request-form[_ngcontent-%COMP%]   .input-error-info[_ngcontent-%COMP%]{color:red}"]}),e})();function g(e,o){1&e&&(c.Pb(0,"div",13),c.oc(1," El campo es obligatorio "),c.Ob())}function x(e,o){if(1&e&&(c.Nb(0),c.nc(1,g,2,0,"div",12),c.Mb()),2&e){const e=c.Yb();c.zb(1),c.ec("ngIf",e.form.controls.inputName.errors.required)}}function y(e,o){1&e&&(c.Pb(0,"div",13),c.oc(1," El campo es obligatorio "),c.Ob())}function q(e,o){if(1&e&&(c.Nb(0),c.nc(1,y,2,0,"div",12),c.Mb()),2&e){const e=c.Yb();c.zb(1),c.ec("ngIf",e.form.controls.inputEmail.errors.required)}}function L(e,o){1&e&&(c.Pb(0,"div",13),c.oc(1," El campo es obligatorio "),c.Ob())}function X(e,o){if(1&e&&(c.Nb(0),c.nc(1,L,2,0,"div",12),c.Mb()),2&e){const e=c.Yb();c.zb(1),c.ec("ngIf",e.form.controls.inputReason.errors.required)}}function w(e,o){1&e&&(c.Pb(0,"div",13),c.oc(1," El campo es obligatorio "),c.Ob())}function C(e,o){if(1&e&&(c.Nb(0),c.nc(1,w,2,0,"div",12),c.Mb()),2&e){const e=c.Yb();c.zb(1),c.ec("ngIf",e.form.controls.inputMessage.errors.required)}}let z=(()=>{class e{constructor(){this.name="",this.email="",this.submitForm=new c.n,this.closeForm=new c.n,this.submited=!1,this.form=new u.e({}),this.inputName=new u.c,this.inputReason=new u.c,this.inputEmail=new u.c,this.inputMessage=new u.c}ngOnInit(){this.initForm()}initForm(){this.inputName=new u.c({value:null,disabled:!1},[u.o.required]),this.inputEmail=new u.c({value:null,disabled:!1},[u.o.required]),this.inputMessage=new u.c({value:null,disabled:!1},[u.o.required]),this.inputReason=new u.c({value:null,disabled:!1},[u.o.required]),Object.keys(this.form.controls).forEach(e=>{this.form.removeControl(e)}),this.form.addControl("inputName",this.inputName),this.form.addControl("inputEmail",this.inputEmail),this.form.addControl("inputReason",this.inputReason),this.form.addControl("inputMessage",this.inputMessage)}onCloseForm(){this.resetForm(),this.closeForm.emit(!0)}onSubmitForm(){var e,o,i,a;if(this.submited=!0,this.form.valid){const n={name:null===(e=this.form.get("inputName"))||void 0===e?void 0:e.value,email:null===(o=this.form.get("inputEmail"))||void 0===o?void 0:o.value,message:null===(i=this.form.get("inputMessage"))||void 0===i?void 0:i.value,reason:null===(a=this.form.get("inputReason"))||void 0===a?void 0:a.value};this.submitForm.emit(n)}}resetForm(){this.submited=!1,this.form&&(this.form.patchValue({inputName:null}),this.form.patchValue({inputEmail:null}),this.form.patchValue({inputReason:null}),this.form.patchValue({inputMessage:null}),this.form.reset())}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c.Eb({type:e,selectors:[["app-contact-form"]],inputs:{name:"name",email:"email"},outputs:{submitForm:"submitForm",closeForm:"closeForm"},decls:18,vars:5,consts:[["novalidate","","autocomplete","off",1,"request-form",3,"formGroup","ngSubmit"],[1,"row","gtr-uniform"],[1,"col-12","col-12-xsmall","mb"],["type","text","name","demo-name","id","demo-name","placeholder","Nombre completo","formControlName","inputName"],[4,"ngIf"],[1,"col-6","col-12-xsmall","mb"],["type","email","name","demo-email","id","demo-email","placeholder","Email","formControlName","inputEmail"],["type","text","name","demo-product","id","demo-product","placeholder","Motivo","formControlName","inputReason"],["name","demo-product","id","demo-product","rows","6","placeholder","Ingrese su mensaje","formControlName","inputMessage",2,"resize","none"],[1,"col-12"],[1,"actions"],["type","submit","value","Solicitar",1,"primary"],["class","input-error-info d-block",4,"ngIf"],[1,"input-error-info","d-block"]],template:function(e,o){1&e&&(c.Pb(0,"form",0),c.Wb("ngSubmit",function(){return o.onSubmitForm()}),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Lb(3,"input",3),c.nc(4,x,2,1,"ng-container",4),c.Ob(),c.Pb(5,"div",5),c.Lb(6,"input",6),c.nc(7,q,2,1,"ng-container",4),c.Ob(),c.Pb(8,"div",5),c.Lb(9,"input",7),c.nc(10,X,2,1,"ng-container",4),c.Ob(),c.Pb(11,"div",2),c.Lb(12,"textarea",8),c.nc(13,C,2,1,"ng-container",4),c.Ob(),c.Pb(14,"div",9),c.Pb(15,"ul",10),c.Pb(16,"li"),c.Lb(17,"input",11),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&e&&(c.ec("formGroup",o.form),c.zb(4),c.ec("ngIf",o.form.controls.inputName.errors&&o.submited),c.zb(3),c.ec("ngIf",o.form.controls.inputEmail.errors&&o.submited),c.zb(3),c.ec("ngIf",o.form.controls.inputReason.errors&&o.submited),c.zb(3),c.ec("ngIf",o.form.controls.inputMessage.errors&&o.submited))},directives:[u.p,u.i,u.f,u.b,u.h,u.d,a.l],styles:[""]}),e})();const E=["requestForm"],N=["contactForm"];function F(e,o){if(1&e&&(c.Pb(0,"a",47),c.Lb(1,"img",48),c.Ob()),2&e){const e=c.Yb().$implicit;c.zb(1),c.fc("src",e.images[0].url,c.lc)}}function M(e,o){if(1&e){const e=c.Qb();c.Pb(0,"article"),c.nc(1,F,2,1,"a",44),c.Pb(2,"h3"),c.oc(3),c.Ob(),c.Pb(4,"p"),c.oc(5),c.Ob(),c.Pb(6,"ul",45),c.Pb(7,"li"),c.Pb(8,"a",46),c.Wb("click",function(){c.kc(e);const i=o.$implicit;return c.Yb().viewDetailsProduct(i)}),c.oc(9,"Ver"),c.Ob(),c.Ob(),c.Ob(),c.Ob()}if(2&e){const e=o.$implicit;c.zb(1),c.ec("ngIf",e.images.length>0),c.zb(2),c.pc(e.name),c.zb(2),c.qc(" ",e.description," ")}}const j=[{path:"",component:(()=>{class e{constructor(e,o,i){this.store=e,this.swa=o,this.router=i,this.state$=new t.a,this.ngUnsubscribe=new t.a,this.state$=this.store.getState()}ngOnInit(){this.swa.loading(),this.store.loadHome().pipe(Object(s.a)(this.ngUnsubscribe)).subscribe(Object(r.a)(this.swa))}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}viewDetailsProduct(e){this.swa.loading(),this.store.selectCurrentProduct(e.id).pipe(Object(s.a)(this.ngUnsubscribe)).subscribe(Object(r.a)(this.swa,()=>{this.swa.close(),this.router.navigateByUrl(2==e.productType?"/search/disease":"/search/supply")}))}viewMainProduct(){let e=this.store.getMainProduct();this.viewDetailsProduct(e)}submitRequestForm(e){this.swa.loading(),this.store.requestNewProduct(e).pipe(Object(s.a)(this.ngUnsubscribe)).subscribe(Object(r.a)(this.swa,()=>{this.swa.success("Solicitud enviada, gracias"),this.domRequestForm.resetForm()}))}submitConcactForm(e){this.swa.loading(),this.store.requestContact(e).pipe(Object(s.a)(this.ngUnsubscribe)).subscribe(Object(r.a)(this.swa,()=>{this.swa.success("Mensaje enviado, gracias"),this.domContactForm.resetForm()}))}}return e.\u0275fac=function(o){return new(o||e)(c.Kb(l.a),c.Kb(d.a),c.Kb(n.c))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-home-page"]],viewQuery:function(e,o){if(1&e&&(c.uc(E,1),c.uc(N,1)),2&e){let e;c.ic(e=c.Xb())&&(o.domRequestForm=e.first),c.ic(e=c.Xb())&&(o.domContactForm=e.first)}},decls:210,vars:4,consts:[[1,"image","main"],["width","100%","controls","","autoplay","","lopp","",3,"muted"],["src","assets/videos/WMS_Warehouse-Management-System.mp4"],[1,"major"],[1,"features"],[1,"icon","fa-file"],[1,"content"],[1,"icon","fa-eye"],[1,"icon","fa-flag"],[1,"icon","fa-heart"],[1,"icon","solid","fa-user"],[1,"icon","solid","fa-trophy"],[1,"icon","solid","fa-users"],[1,"icon","solid","fa-handshake"],[1,"icon","fa-clock"],[1,"icon","solid","fa-pills"],[1,"icon","solid","fa-boxes"],[1,"icon","solid","fa-dollar-sign"],[1,"icon","solid","fa-calendar-alt"],[1,"icon","solid","fa-truck"],[1,"icon","solid","fa-user-md"],[1,"icon","solid","fa-people-arrows"],[1,"icon","solid","fa-laptop-house"],[1,"posts"],[4,"ngFor","ngForOf"],["routerLink","/search"],[1,"image","object"],[3,"submitForm"],["requestForm",""],[1,"col-6","offset-3",2,"margin-bottom","20px"],["routerLink","/home/qa",1,"button","primary","fit"],["id","footer",2,"border-top","solid 2px rgba(210, 215, 217, 0.75)"],[2,"border-top","none"],[1,"row"],[1,"col-6"],["contactForm",""],[1,"contact"],[1,"icon","solid","fa-envelope"],["href","#"],[1,"icon","solid","fa-phone"],[1,"icon","solid","fa-home"],["routerLink","/home/politics"],["routerLink","/home/service"],[1,"copyright"],["href","#","class","image",4,"ngIf"],[1,"actions"],[1,"button",3,"click"],["href","#",1,"image"],["alt","",3,"src"]],template:function(e,o){1&e&&(c.Lb(0,"app-header"),c.Pb(1,"section"),c.Pb(2,"span",0),c.Pb(3,"video",1),c.Lb(4,"source",2),c.Ob(),c.Ob(),c.Lb(5,"hr",3),c.Pb(6,"header",3),c.Pb(7,"h2"),c.oc(8,"\xbfQui\xe9nes somos?"),c.Ob(),c.Ob(),c.Pb(9,"p"),c.oc(10," Meditrust es un servicio que busca mejorar la vida de nuestros clientes, ya sean pacientes o cuidadores, asegurando la continuidad de su tratamiento a trav\xe9s del suministro recurrente de su medicamento; garantizando el abasto a un precio justo y estable, con un servicio excepcional."),c.Lb(11,"br"),c.oc(12," A trav\xe9s de una membres\xeda mensual podr\xe1s recibir tu medicamento antes de que se termine, a domicilio sin costo adicional. No es necesario que realices la compra mes a mes, autom\xe1ticamente el servicio detectar\xe1 cuando es momento de resurtir tu medicamento para que tengas el necesario para continuar con tu tratamiento sin interrumpir ninguna toma."),c.Lb(13,"br"),c.oc(14," Antes de cada surtido te llegar\xe1 un correo de confirmaci\xf3n para poder hacer cambios o cancelaciones sin costo alguno. "),c.Ob(),c.Pb(15,"div",4),c.Pb(16,"article"),c.Lb(17,"span",5),c.Pb(18,"div",6),c.Pb(19,"h3"),c.oc(20,"Nuestro Prop\xf3sito"),c.Ob(),c.Pb(21,"p"),c.oc(22," \u201cMejorar la calidad de vida integral de la comunidad de pacientes con enfermedades cr\xf3nicas y sus familias\u201d. "),c.Ob(),c.Ob(),c.Ob(),c.Pb(23,"article"),c.Lb(24,"span",7),c.Pb(25,"div",6),c.Pb(26,"h3"),c.oc(27,"Nuestra Visi\xf3n"),c.Ob(),c.Pb(28,"p"),c.oc(29," \u201cSer la comunidad de pacientes cr\xf3nicos m\xe1s grande de M\xe9xico, ofreciendo soluciones (productos y servicios) que la posicionen como l\xedder en su industria en valor y en compromiso social.\u201d "),c.Ob(),c.Ob(),c.Ob(),c.Pb(30,"article"),c.Lb(31,"span",8),c.Pb(32,"div",6),c.Pb(33,"h3"),c.oc(34,"Nuestra Misi\xf3n"),c.Ob(),c.Pb(35,"p"),c.oc(36," \u201cAcompa\xf1ar a los pacientes cr\xf3nicos para mejorar su calidad de vida a trav\xe9s de la venta y entrega recurrente de medicamento especializado, servicios a su comunidad, plataformas innovadoras y una atenci\xf3n diferenciada a sus clientes. "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(37,"section"),c.Pb(38,"header",3),c.Pb(39,"h2"),c.oc(40,"Nuestros Valores"),c.Ob(),c.Ob(),c.Pb(41,"div",4),c.Pb(42,"article"),c.Lb(43,"span",9),c.Pb(44,"div",6),c.Pb(45,"h3"),c.oc(46,"Empat\xeda"),c.Ob(),c.Pb(47,"p"),c.oc(48," Comprendemos los desaf\xedos y dificultades de nuestros clientes, y respondemos de manera solidaria, sensible y responsable. "),c.Ob(),c.Ob(),c.Ob(),c.Pb(49,"article"),c.Lb(50,"span",10),c.Pb(51,"div",6),c.Pb(52,"h3"),c.oc(53,"Orientado al cliente"),c.Ob(),c.Pb(54,"p"),c.oc(55," Priorizamos las necesidades de nuestros clientes en la toma de decisiones de nuestro negocio para ofrecerles soluciones verdaderas que mejoren su calidad de vida. "),c.Ob(),c.Ob(),c.Ob(),c.Pb(56,"article"),c.Lb(57,"span",11),c.Pb(58,"div",6),c.Pb(59,"h3"),c.oc(60,"Calidad"),c.Ob(),c.Pb(61,"p"),c.oc(62," Entregamos un servicio superior al esperado proporcionando confiabilidad, seguridad y eficiencia. "),c.Ob(),c.Ob(),c.Ob(),c.Pb(63,"article"),c.Lb(64,"span",12),c.Pb(65,"div",6),c.Pb(66,"h3"),c.oc(67,"Integridad"),c.Ob(),c.Pb(68,"p"),c.oc(69," Actuamos con honradez y rectitud, siendo coherentes en lo que pensamos, decimos y hacemos, manteniendo la transparencia en nuestras operaciones y servicios. "),c.Ob(),c.Ob(),c.Ob(),c.Pb(70,"article"),c.Lb(71,"span",13),c.Pb(72,"div",6),c.Pb(73,"h3"),c.oc(74,"Trabajo en Equipo"),c.Ob(),c.Pb(75,"p"),c.oc(76," Colaboramos, poniendo nuestro talento, conocimiento, habilidades y experiencia al servicio de nuestro objetivo com\xfan para superar los desaf\xedos y entregar m\xe1s valor a nuestros clientes. "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(77,"section"),c.Pb(78,"header",3),c.Pb(79,"h2"),c.oc(80,"Beneficios"),c.Ob(),c.Ob(),c.Pb(81,"div",4),c.Pb(82,"article"),c.Lb(83,"span",14),c.Pb(84,"div",6),c.Lb(85,"h3"),c.Pb(86,"p"),c.oc(87," Olvidarte de comprar tu medicamento a tiempo, \xa1alguien m\xe1s lo har\xe1 por ti! "),c.Ob(),c.Ob(),c.Ob(),c.Pb(88,"article"),c.Lb(89,"span",15),c.Pb(90,"div",6),c.Lb(91,"h3"),c.Pb(92,"p"),c.oc(93,"Continuar con tu tratamiento"),c.Ob(),c.Ob(),c.Ob(),c.Pb(94,"article"),c.Lb(95,"span",16),c.Pb(96,"div",6),c.Lb(97,"h3"),c.Pb(98,"p"),c.oc(99,"Garantizar el abasto de tu medicamento"),c.Ob(),c.Ob(),c.Ob(),c.Pb(100,"article"),c.Lb(101,"span",17),c.Pb(102,"div",6),c.Lb(103,"h3"),c.Pb(104,"p"),c.oc(105," Obtener precios competitivos, evita estar buscando de una farmacia a otra el mejor precio. "),c.Ob(),c.Ob(),c.Ob(),c.Pb(106,"article"),c.Lb(107,"span",18),c.Pb(108,"div",6),c.Lb(109,"h3"),c.Pb(110,"p"),c.oc(111,"Evitar cambios en el costo del medicamento mes a mes."),c.Ob(),c.Ob(),c.Ob(),c.Pb(112,"article"),c.Lb(113,"span",19),c.Pb(114,"div",6),c.Lb(115,"h3"),c.Pb(116,"p"),c.oc(117," Entrega a domicilio sin costo de env\xedo, posibilidad de entregar a diferentes direcciones. "),c.Ob(),c.Ob(),c.Ob(),c.Pb(118,"article"),c.Lb(119,"span",20),c.Pb(120,"div",6),c.Lb(121,"h3"),c.Pb(122,"p"),c.oc(123,"Acompa\xf1amiento de expertos en tu proceso."),c.Ob(),c.Ob(),c.Ob(),c.Pb(124,"article"),c.Lb(125,"span",21),c.Pb(126,"div",6),c.Lb(127,"h3"),c.Pb(128,"p"),c.oc(129,"Atenci\xf3n personalizada."),c.Ob(),c.Ob(),c.Ob(),c.Pb(130,"article"),c.Lb(131,"span",22),c.Pb(132,"div",6),c.Lb(133,"h3"),c.Pb(134,"p"),c.oc(135," Consultas en l\xednea en conjunto con Doctorel (sin costo adicional). "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(136,"section"),c.Pb(137,"header",3),c.Pb(138,"h2"),c.oc(139,"Causa social"),c.Ob(),c.Ob(),c.Pb(140,"p"),c.oc(141," Gracias a tu suscripci\xf3n a nuestro servicio apoyas a personas con tu mismo padecimiento, que no cuentan con los medios necesarios para adquirir sus medicamentos, a que contin\xfaen con su tratamiento y mejoren su calidad de vida. Simplemente comprando con nosotros ya est\xe1s ayudando. "),c.Ob(),c.Ob(),c.Pb(142,"section"),c.Pb(143,"header",3),c.Pb(144,"h2"),c.oc(145,"Nuevos insumos"),c.Ob(),c.Ob(),c.Pb(146,"div",23),c.nc(147,M,10,3,"article",24),c.Zb(148,"async"),c.Ob(),c.Pb(149,"a",25),c.oc(150,"Mostrar m\xe1s"),c.Ob(),c.Ob(),c.Pb(151,"section"),c.Pb(152,"div",6),c.Pb(153,"header",3),c.Pb(154,"h2"),c.oc(155,"\xbfNo encontraste lo que buscabas?"),c.Ob(),c.Ob(),c.Pb(156,"p"),c.oc(157," En caso de que tu medicamento no aparezca en el listado te pedimos por favor nos lo indiques aqu\xed: "),c.Ob(),c.Ob(),c.Pb(158,"div",26),c.Pb(159,"h3"),c.oc(160,"Solicita un producto"),c.Ob(),c.Pb(161,"app-request-form",27,28),c.Wb("submitForm",function(e){return o.submitRequestForm(e)}),c.Ob(),c.Ob(),c.Ob(),c.Pb(163,"section"),c.Pb(164,"div",6),c.Pb(165,"header",3),c.Pb(166,"h2"),c.oc(167,"Testimonios"),c.Ob(),c.Ob(),c.Pb(168,"blockquote"),c.oc(169," La mejor opc\xf3n en cuanto a cuidado de la salud se refiere, adem\xe1s de costos muy accesibles y buen servicio "),c.Ob(),c.Ob(),c.Ob(),c.Pb(170,"section"),c.Pb(171,"div",6),c.Pb(172,"header",3),c.Pb(173,"h2"),c.oc(174,"\xbfTienes dudas?"),c.Ob(),c.Ob(),c.Pb(175,"p"),c.oc(176,"Consulta nuestra secci\xf3n de preguntas frecuentes."),c.Ob(),c.Pb(177,"div",29),c.Pb(178,"a",30),c.oc(179,"Preguntas comunes"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(180,"footer",31),c.Pb(181,"section",32),c.Pb(182,"div",33),c.Pb(183,"div",34),c.Pb(184,"h2"),c.oc(185,"Contacto"),c.Ob(),c.Pb(186,"p"),c.oc(187," \xbfTienes alguna duda o comentario acerca de nuestro servicio? Por favor d\xe9janos tus datos y nos comunicaremos a la brevedad contigo. "),c.Ob(),c.Pb(188,"span",26),c.Pb(189,"app-contact-form",27,35),c.Wb("submitForm",function(e){return o.submitConcactForm(e)}),c.Ob(),c.Ob(),c.Ob(),c.Pb(191,"div",34),c.Pb(192,"ul",36),c.Pb(193,"li",37),c.Pb(194,"a",38),c.oc(195,"information@untitled.tld"),c.Ob(),c.Ob(),c.Pb(196,"li",39),c.oc(197," Tambi\xe9n nos puedes contactar v\xeda telef\xf3nica al XXXXX. "),c.Ob(),c.Pb(198,"li",40),c.oc(199," 1234 Somewhere Road #8254"),c.Lb(200,"br"),c.oc(201," Nashville, TN 00000-0000 "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(202,"p"),c.Pb(203,"a",41),c.oc(204,"Pol\xedticas de Devoluci\xf3n y/o Cancelaci\xf3n"),c.Ob(),c.oc(205,"\xa0 \xa0"),c.Pb(206,"a",42),c.oc(207,"\xbfC\xf3mo funciona el servicio?"),c.Ob(),c.Ob(),c.Pb(208,"p",43),c.oc(209,"\xa9 Untitled. All rights reserved. Cronico"),c.Ob(),c.Ob()),2&e&&(c.zb(3),c.ec("muted","muted"),c.zb(144),c.ec("ngForOf",c.ac(148,2,o.state$).newProducts))},directives:[b.a,a.k,n.e,v,z,a.l],pipes:[a.b],styles:[""]}),e})()},{path:"qa",component:(()=>{class e{constructor(){}ngOnInit(){window.scrollTo(0,0)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c.Eb({type:e,selectors:[["app-qa-page"]],decls:61,vars:1,consts:[[3,"title"],["routerLink","/home/service"],[1,"major"],["routerLink","/home/politics"]],template:function(e,o){1&e&&(c.Lb(0,"app-header",0),c.Pb(1,"section"),c.Pb(2,"h2"),c.oc(3,"\xbfA qui\xe9n est\xe1 dirigido el servicio?"),c.Ob(),c.Pb(4,"p"),c.oc(5," Meditrust es un servicio dirigido a toda persona que tenga un padecimiento cr\xf3nico o que sea responsable del cuidado de alg\xfan familiar y la compra de su medicamento. Te sugerimos que tambi\xe9n leas la secci\xf3n de "),c.Pb(6,"a",1),c.oc(7,"\xbfC\xf3mo funciona el servicio?"),c.Ob(),c.Ob(),c.Lb(8,"hr",2),c.Pb(9,"h2"),c.oc(10,"\xbfCu\xe1l es el \xe1rea cobertura actual del servicio?"),c.Ob(),c.Pb(11,"p"),c.oc(12," Actualmente solo contamos con cobertura en la CDMX en las Alcald\xedas Miguel Hidalgo, Cuajimalpa, \xc1lvaro Obreg\xf3n y XXXXX. Espera pr\xf3ximamente el servicio en tu localidad. "),c.Ob(),c.Lb(13,"hr",2),c.Pb(14,"h2"),c.oc(15,"\xbfPara qu\xe9 padecimientos cr\xf3nicos existe actualmente el servicio?"),c.Ob(),c.Pb(16,"p"),c.oc(17," Actualmente contamos con medicamentos para los siguientes padecimientos cr\xf3nicos: Diabetes Mielitus, Hipertensi\xf3n, Dislipidemias, Vasculopat\xedas, S\xedndrome Metab\xf3lico, Enfermedades de Salud Mental y D\xe9ficit de Crecimiento. Espera m\xe1s padecimientos pr\xf3ximamente. Si tu padecimiento no se encuentra en el listado y deseas suscribirte al servicio, env\xedanos un correo a xxxxxxxxxxxxxxx o env\xedanos un mensaje en la secci\xf3n de contacto. "),c.Ob(),c.Lb(18,"hr",2),c.Pb(19,"h2"),c.oc(20,"\xbfQu\xe9 puedo hacer si mi medicamento no se encuentra en el listado?"),c.Ob(),c.Pb(21,"p"),c.oc(22," Te pedimos por favor nos env\xedes un mensaje en la secci\xf3n de contacto o nos contactes v\xeda correo electr\xf3nico: xxxxxxxxxxxxxxx. Tambi\xe9n puedes llamar a nuestra l\xednea de atenci\xf3n al xxxxxxxxxxxxxxx. "),c.Ob(),c.Lb(23,"hr",2),c.Pb(24,"h2"),c.oc(25,"\xbfC\xf3mo puedo modificar mi siguiente pedido?"),c.Ob(),c.Pb(26,"p"),c.oc(27," Podr\xe1s modificar tu pr\xf3xima entrega en el correo de confirmaci\xf3n o directamente en la secci\xf3n de pedidos. Si deseas ayuda nos puedes llamar a nuestra l\xednea de atenci\xf3n al xxxxxxxxxxxxxxx. "),c.Ob(),c.Lb(28,"hr",2),c.Pb(29,"h2"),c.oc(30,"\xbfPuedo enviar el medicamento a un familiar?"),c.Ob(),c.Pb(31,"p"),c.oc(32," \xa1Claro! Puedes configurar diferentes pedidos con diferentes medicamentos y diferentes direcciones para enviar el medicamento a quien t\xfa quieras. "),c.Ob(),c.Lb(33,"hr",2),c.Pb(34,"h2"),c.oc(35,"\xbfQu\xe9 puedo hacer si no recib\xed mi pedido?"),c.Ob(),c.Pb(36,"p"),c.oc(37," Te pedimos por favor nos env\xedes un mensaje en la secci\xf3n de contacto o nos contactes v\xeda correo electr\xf3nico: xxxxxxxxxxxxxxx. Tambi\xe9n puedes llamar a nuestra l\xednea de atenci\xf3n al xxxxxxxxxxxxxxx. "),c.Ob(),c.Lb(38,"hr",2),c.Pb(39,"h2"),c.oc(40,"\xbfC\xf3mo puedo hacer una devoluci\xf3n de mi pedido?"),c.Ob(),c.Pb(41,"p"),c.oc(42," Si tu pedido contiene errores y deseas hacer cambios o devoluciones, te sugerimos que primero leas la secci\xf3n de "),c.Pb(43,"a",3),c.oc(44,"Pol\xedticas de Devoluci\xf3n y/o Cancelaci\xf3n"),c.Ob(),c.oc(45," y posteriormente re comuniques a nuestra l\xednea de atenci\xf3n al xxxxxxxxxxxxxxx. "),c.Ob(),c.Lb(46,"hr",2),c.Pb(47,"h2"),c.oc(48,"\xbfQu\xe9 costo tiene la membres\xeda?"),c.Ob(),c.Pb(49,"p"),c.oc(50," La membres\xeda tiene un costo de $$$$ anual, el cual se cobrar\xe1 al iniciar el a\xf1o a tu forma de pago preferida. Por promoci\xf3n de lanzamiento los primeros xxxx meses es gratuita. "),c.Ob(),c.Lb(51,"hr",2),c.Pb(52,"h2"),c.oc(53,"\xbfPuedo adquirir mi medicamento en un local f\xedsico?"),c.Ob(),c.Pb(54,"p"),c.oc(55,"Meditrust en un servicio 100% digital a domicilio."),c.Ob(),c.Lb(56,"hr",2),c.Pb(57,"h2"),c.oc(58,"\xbfQu\xe9 formas de pago son aceptadas?"),c.Ob(),c.Pb(59,"p"),c.oc(60," Puedes hacer tus pedidos con tarjeta de cr\xe9dito o d\xe9bito de cualquier banco. Los datos son encriptados y tu informaci\xf3n est\xe1 segura. Meditrust nunca ve la informaci\xf3n de tus tarjetas y tampoco guarda la informaci\xf3n. "),c.Ob(),c.Ob()),2&e&&c.ec("title","Preguntas y respuestas")},directives:[b.a,n.e],styles:[""]}),e})()},{path:"politics",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c.Eb({type:e,selectors:[["app-politics"]],decls:102,vars:1,consts:[[3,"title"],[1,"major"],[1,"row"],[1,"col-10","col-12-small"],[1,"col-6","col-12-small"]],template:function(e,o){1&e&&(c.Lb(0,"app-header",0),c.Pb(1,"section"),c.Pb(2,"p"),c.oc(3," Toda devoluci\xf3n deber\xe1 ser llevada a cabo en el momento de la entrega del producto por parte del repartidor de XXXXX y antes de la firma de conformidad por parte del paciente, por lo que el paciente/cliente deber\xe1 de revisar sus productos previos a su firma de recibido. \xc9sta devoluci\xf3n solo proceder\xe1 en caso de que el producto despachado no corresponda con el solicitado por el paciente/cliente, o que al momento de la revisi\xf3n este tenga alg\xfan defecto en su empaque primario y/o secundario que comprometa su estabilidad y/o que la fecha de caducidad sea menor a 3 meses y que el paciente solicite el cambio por uno de mayor vigencia. Toda solicitud por parte del cliente deber\xe1 cumplir con lo establecido en la POL\xcdTICA DE DEVOLUCI\xd3N Y/O CANCELACI\xd3N ser\xe1 evaluada como excepci\xf3n y contar previamente con la aprobaci\xf3n del responsable Sanitario de XXXXX, siempre y cuando cumpla con los siguientes puntos: "),c.Ob(),c.Ob(),c.Pb(4,"section"),c.Pb(5,"header",1),c.Pb(6,"h2"),c.oc(7,"1.- Devoluciones imputables a XXXXXX."),c.Ob(),c.Ob(),c.Pb(8,"div",2),c.Pb(9,"div",3),c.Pb(10,"h4"),c.oc(11," 1.1 El Cliente puede solicitar la Devoluci\xf3n por alguno de los siguientes motivos: "),c.Ob(),c.Pb(12,"ul"),c.Pb(13,"li"),c.oc(14," Defecto de f\xe1brica: entendi\xe9ndose este como la deficiencia de contenido neto o cantidad entregada por empaque. "),c.Ob(),c.Pb(15,"li"),c.oc(16," Calidad del producto: entendi\xe9ndose este como diferencia entre calidad, marca o especificaciones sustanciales del producto o que el mismo se encuentre en mal estado. "),c.Ob(),c.Pb(17,"li"),c.oc(18," Mal surtido (producto incorrecto): siempre y cuando sea demostrable que el error se cometi\xf3 por parte un colaborador de XXXXX. "),c.Ob(),c.Pb(19,"li"),c.oc(20," Cobro incorrecto: entendi\xe9ndose como el error que pudiera llegar a ocurrir por productos adicionales y/o error en la carga de la oferta.Las devoluciones realizadas por los casos anteriormente mencionadas se realizar\xe1n siempre y cuando se cumplan con los requisitos que se indican m\xe1s adelante. "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(21,"section"),c.Pb(22,"header",1),c.Pb(23,"h2"),c.oc(24,"2.- Requisitos para Devoluciones XXXXXX."),c.Ob(),c.Ob(),c.Pb(25,"div",2),c.Pb(26,"div",4),c.Pb(27,"h4"),c.oc(28," 2.1 Los requisitos para solicitar una Devoluci\xf3n imputable a XXXXXX son: "),c.Ob(),c.Pb(29,"ul"),c.Pb(30,"li"),c.oc(31,"Ticket de compra y/o factura."),c.Ob(),c.Pb(32,"li"),c.oc(33,"Productos en buen estado y con el empaque original."),c.Ob(),c.Pb(34,"li"),c.oc(35," Para productos de consumo se podr\xe1 realizar la devoluci\xf3n con un ticket y/o factura no mayor a 48 horas, a partir de la compra. "),c.Ob(),c.Pb(36,"li"),c.oc(37," Cualquier defecto de f\xe1brica y/o detrimento en la calidad del producto que sea detectado posterior a los plazos enunciados anteriormente se deber\xe1 realizar el tr\xe1mite correspondiente con el fabricante, de conformidad con la garant\xeda que se describa en el producto. "),c.Ob(),c.Pb(38,"li"),c.oc(39,"Entregar copia de identificaci\xf3n oficial."),c.Ob(),c.Ob(),c.Ob(),c.Pb(40,"div",4),c.Pb(41,"h4"),c.oc(42,"2.2 Devoluciones no imputables a XXXXX"),c.Ob(),c.Pb(43,"p"),c.oc(44," Adicional, existen otro tipo de devoluciones que XXXXX no est\xe1 obligado a realizar, y se reserva el derecho inclusive si se cumplen con todos los requisitos, siendo estas las siguientes: "),c.Ob(),c.Pb(45,"ul"),c.Pb(46,"li"),c.oc(47,"El cliente no quiere y/o ya no necesita el producto."),c.Ob(),c.Pb(48,"li"),c.oc(49," Precio superior al precio m\xe1ximo al p\xfablico indicado en el empaque original del producto a devolver. "),c.Ob(),c.Pb(50,"li"),c.oc(51," La Devoluci\xf3n sobre el ticket de compra puede ser: total o parcial. "),c.Ob(),c.Pb(52,"li"),c.oc(53," La Devoluci\xf3n se realizar\xe1 de conformidad con el m\xe9todo de pago realizado inicialmente. En caso de que el pago haya sido realizado por medio de tarjeta bancaria y/o medios digitales de banca por internet, se estar\xe1 realizando lo dispuesto por la Instituci\xf3n Bancaria para realizar el reembolso. "),c.Ob(),c.Pb(54,"li"),c.oc(55," El horario para devoluciones es de 09:00 a 18:00 horas de lunes a viernes. "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(56,"section"),c.Pb(57,"header",1),c.Pb(58,"h2"),c.oc(59,"3.- Restricciones."),c.Ob(),c.Ob(),c.Pb(60,"div",2),c.Pb(61,"div",3),c.Pb(62,"h4"),c.oc(63,"3.1 La Devoluci\xf3n no aplicar\xe1 en los siguientes casos:"),c.Ob(),c.Pb(64,"ol"),c.Pb(65,"li"),c.oc(66," Si no se presenta el ticket de compra y/o si este no es legible. "),c.Ob(),c.Pb(67,"li"),c.oc(68,"Si el medicamento y/o producto pertenece a alguna promoci\xf3n."),c.Ob(),c.Pb(69,"li"),c.oc(70," Si el medicamento y/o producto pertenece a un Programa de Lealtad de laboratorio. "),c.Ob(),c.Pb(71,"li"),c.oc(72," Si el producto est\xe1 clasificado como antibi\xf3tico, estupefaciente, psicotr\xf3pico, controlado, oncol\xf3gicos, refrigerado y/o de alta especialidad. Lo anterior, para garantizar la calidad (temperatura. Humedad y luz) y cadena de conservaci\xf3n de los mecimientos conforme a las disposiciones legales vigentes en materia de salud. "),c.Ob(),c.Pb(73,"li"),c.oc(74,"Si el medicamento es versi\xf3n inyectable de una sola dosis."),c.Ob(),c.Pb(75,"li"),c.oc(76," Si se trata de productos ortop\xe9dicos y/o dispositivos m\xe9dicos, estos deber\xe1n de seguir el procedimiento de devoluci\xf3n, reembolso, cambio y/o garant\xeda con el fabricante. "),c.Ob(),c.Pb(77,"li"),c.oc(78,"Si se trata de productos dermocosm\xe9ticos."),c.Ob(),c.Pb(79,"li"),c.oc(80," Si el Cliente inicia un proceso de Desconocimiento de cargo, en caso de haber realizado la compra a trav\xe9s de tarjeta bancaria o medios electr\xf3nicos, ante su instituci\xf3n bancaria antes de iniciar el procedimiento de Devoluci\xf3n en XXXXXX. "),c.Ob(),c.Pb(81,"li"),c.oc(82," El rembolso solo es aplicable en los XX d\xedas posteriores a la compra. "),c.Ob(),c.Ob(),c.Pb(83,"p"),c.oc(84," Cuando la solicitud obedezca a alg\xfan defecto de fabricaci\xf3n, XXXX realizar\xe1 el reporte al laboratorio fabricante quien despu\xe9s de realizar un dictamen t\xe9cnico definir\xe1 si el producto es reemplazado y el mecanismo mediante el cual se har\xe1 entrega al cliente de la pieza sustituta. "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(85,"section"),c.Pb(86,"header",1),c.Pb(87,"h2"),c.oc(88,"4.- Cancelaciones."),c.Ob(),c.Ob(),c.Pb(89,"div",2),c.Pb(90,"div",3),c.Pb(91,"h4"),c.oc(92," 4.1 Para hacer efectiva la cancelaci\xf3n del pedido se atender\xe1 a lo siguiente: "),c.Ob(),c.Pb(93,"p"),c.oc(94," En caso de haber realizado la compra a trav\xe9s de los canales digitales, la cancelaci\xf3n podr\xe1 ser efectiva en los siguientes momentos: "),c.Ob(),c.Pb(95,"ol"),c.Pb(96,"li"),c.oc(97," Si la entrega se agend\xf3 sin hora espec\xedfica, se podr\xe1 realizar la cancelaci\xf3n dentro de los 60 minutos siguientes a haber realizado la compra. "),c.Ob(),c.Pb(98,"li"),c.oc(99," Si la entrega se agend\xf3 con hora espec\xedfica, se podr\xe1 realizar la cancelaci\xf3n dentro de los 30 minutos siguientes a haber realizado la compra. "),c.Ob(),c.Ob(),c.Pb(100,"p"),c.oc(101," El Cliente puede solicitar la cancelaci\xf3n y/o devoluci\xf3n de su pedido llamando a XXXXX. "),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&e&&c.ec("title","Pol\xedticas de Devoluci\xf3n y/o Cancelaci\xf3n")},directives:[b.a],styles:[""]}),e})()},{path:"service",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c.Eb({type:e,selectors:[["app-service-page"]],decls:18,vars:1,consts:[[3,"title"],[1,"row"],[1,"col-6","col-12-small"],[1,"content"],[1,"image","object"],["src","./../../../../assets/images/purchase-process.png","alt",""]],template:function(e,o){1&e&&(c.Lb(0,"app-header",0),c.Pb(1,"section"),c.Pb(2,"h2"),c.oc(3,"\xa1Es muy sencillo!"),c.Ob(),c.Pb(4,"div",1),c.Pb(5,"div",2),c.Pb(6,"p"),c.oc(7," Solamente tienes que buscar tu medicamento o padecimiento, una vez que lo hayas seleccionado, deber\xe1s agregar la dosis indicada por tu m\xe9dico y nuestra calculadora te indicar\xe1 si las cajas seleccionadas son suficientes para cubrir tu dosis por el intervalo de tiempo para tu resurtido. "),c.Ob(),c.Pb(8,"p"),c.oc(9," A continuaci\xf3n, deber\xe1s agregar tu medicamento al carrito, ingresar tu direcci\xf3n de env\xedo, horario preferido para la entrega y datos de pago. "),c.Ob(),c.Pb(10,"p"),c.oc(11," Tu primer pedido lo recibir\xe1s en m\xe1ximo 48 horas y posteriormente en el intervalo seleccionado (15 o 30 d\xedas). Si deseas modificar la fecha podr\xe1s usar el calendario que aparece al momento de configurar tu pedido. "),c.Ob(),c.Pb(12,"p"),c.oc(13," Tus siguientes pedidos se surtir\xe1n de forma autom\xe1tica a la direcci\xf3n indicada antes de que se termine tu medicamento. Te llegar\xe1 un correo electr\xf3nico 10 d\xedas antes del surtido en caso de que quieras hacer modificaciones en la dosis, el medicamento o incluso cancelar el servicio sin costo alguno, tendr\xe1s hasta 5 d\xedas m\xe1s para realizar cambios. "),c.Ob(),c.Ob(),c.Pb(14,"div",2),c.Pb(15,"div",3),c.Pb(16,"span",4),c.Lb(17,"img",5),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&e&&c.ec("title","\xbfC\xf3mo funciona el servicio?")},directives:[b.a],styles:[""]}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({imports:[[n.f.forChild(j)],n.f]}),e})();var I=i("tk/3"),k=i("PCNd");let D=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({providers:[I.b],imports:[[a.c,S,k.a]]}),e})()}}]);