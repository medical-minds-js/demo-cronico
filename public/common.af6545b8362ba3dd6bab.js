(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{QH85:function(e,t,s){"use strict";s.d(t,"a",function(){return i});var o=s("fXoL");let i=(()=>{class e{constructor(){this.modals=[]}add(e){this.modals.push(e)}remove(e){this.modals=this.modals.filter(t=>t.id!==e)}open(e){this.modals.filter(t=>t.id===e)[0].open()}close(e){this.modals.filter(t=>t.id===e)[0].close()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},nIAt:function(e,t,s){"use strict";s.d(t,"a",function(){return d});var o=s("fXoL"),i=s("QH85");const a=["*"];let d=(()=>{class e{constructor(e,t){this.modalService=e,this.el=t,this.id="",this.size="app-modal sm",this.preventCloseOnClickOutside=!1,this.element=t.nativeElement}ngOnInit(){let e=this;const t=["app-modal sm","app-modal md","app-modal lg","app-modal full","app-modal-background"];this.id&&(document.body.appendChild(this.element),this.element.addEventListener("click",s=>{t.find(e=>e===s.target.className)&&(this.preventCloseOnClickOutside||e.close())}),this.modalService.add(this))}ngOnDestroy(){this.modalService.remove(this.id),this.element.remove()}open(){this.element.classList.add("app-modal-display"),document.body.classList.add("app-modal-open"),setTimeout(()=>{this.element.classList.add("app-modal-show")},100)}close(){this.element.classList.remove("app-modal-display"),this.element.classList.remove("app-modal-show"),document.body.classList.remove("app-modal-open")}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(i.a),o.Kb(o.l))},e.\u0275cmp=o.Eb({type:e,selectors:[["app-modal"]],inputs:{id:"id",size:"size",preventCloseOnClickOutside:"preventCloseOnClickOutside"},ngContentSelectors:a,decls:4,vars:3,consts:[[1,"app-modal-body"],[1,"app-modal-background"]],template:function(e,t){1&e&&(o.dc(),o.Pb(0,"div"),o.Pb(1,"div",0),o.cc(2),o.Ob(),o.Ob(),o.Lb(3,"div",1)),2&e&&o.Bb("app-modal ",t.size,"")},styles:[""]}),e})()}}]);