(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Rtr":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/home-page/home-page.component.ts ***!
  \***************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_functions_observer_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/functions/observer.function */ "1IRp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_store_app_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/store/app-store.service */ "V24c");
/* harmony import */ var _services_swa_swa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/swa/swa.service */ "4z7i");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_templates_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/templates/header/header.component */ "nw1e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









function HomePageComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r0.state$).mainProduct.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function HomePageComponent_article_28_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", item_r3.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function HomePageComponent_article_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HomePageComponent_article_28_a_1_Template, 2, 1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomePageComponent_article_28_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const item_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.viewDetailsProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r3.images.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r3.description, " ");
} }
function HomePageComponent_article_36_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", item_r8.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function HomePageComponent_article_36_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HomePageComponent_article_36_a_3_Template, 2, 1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomePageComponent_article_36_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const item_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.viewDetailsProduct(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r8.images.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r8.description, " ");
} }
class HomePageComponent {
    constructor(store, swa, router) {
        this.store = store;
        this.swa = swa;
        this.router = router;
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.state$ = this.store.getState();
    }
    ngOnInit() {
        this.swa.loading();
        this.store
            .loadHome()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(Object(_core_functions_observer_function__WEBPACK_IMPORTED_MODULE_2__["observer"])(this.swa));
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    viewDetailsProduct(product) {
        this.swa.loading();
        this.store
            .selectCurrentProduct(product.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(Object(_core_functions_observer_function__WEBPACK_IMPORTED_MODULE_2__["observer"])(this.swa, () => {
            this.swa.close();
            if (product.productType == 2) {
                this.router.navigateByUrl('/search/disease');
            }
            else {
                this.router.navigateByUrl('/search/supply');
            }
        }));
    }
    viewMainProduct() {
        let product = this.store.getMainProduct();
        this.viewDetailsProduct(product);
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_store_app_store_service__WEBPACK_IMPORTED_MODULE_4__["AppStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_swa_swa_service__WEBPACK_IMPORTED_MODULE_5__["SwaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 44, vars: 19, consts: [["id", "presentation"], ["width", "100%", "controls", "", "autoplay", "", "lopp", "", 3, "muted"], ["src", "assets/videos/WMS_Warehouse-Management-System.mp4"], [1, "content"], ["id", "banner"], [1, "actions"], [1, "button", "big", 3, "click"], [1, "image", "object"], [4, "ngIf"], [1, "major"], [1, "posts"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-6", "offset-3"], [1, "actions", "fit", "ml-0", "mb-0"], ["href", "#", 1, "button", "primary", "fit"], ["alt", "", 3, "src"], ["href", "#", "class", "image", 4, "ngIf"], [1, "button", 3, "click"], ["href", "#", 1, "image"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_18_listener() { return ctx.viewMainProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Ver");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, HomePageComponent_ng_container_21_Template, 3, 3, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "header", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Nuevos insumos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, HomePageComponent_article_28_Template, 10, 3, "article", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "header", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, HomePageComponent_article_36_Template, 10, 3, "article", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Comprar paquete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("muted", "muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 7, ctx.state$).mainProduct.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 9, ctx.state$).mainProduct.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 11, ctx.state$).mainProduct.images.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 13, ctx.state$).newProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 15, ctx.state$).mainPackage.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 17, ctx.state$).mainPackage.productParts);
    } }, directives: [_shared_templates_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Desarrollo2\All\dev\insumocronico\CRONICO_WEB\src\main.ts */"zUnb");


/***/ }),

/***/ "1IRp":
/*!*****************************************************!*\
  !*** ./src/app/core/functions/observer.function.ts ***!
  \*****************************************************/
/*! exports provided: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
function observer(swaService, successCallback) {
    return {
        next: (data) => {
            if (typeof data === 'boolean') {
                if (successCallback && typeof successCallback === 'string') {
                    swaService.success(successCallback);
                }
                else if (successCallback && typeof successCallback === 'function') {
                    successCallback(data);
                }
                else {
                    swaService.close();
                }
            }
            else {
                if (data.status === 'success') {
                    if (successCallback && typeof successCallback === 'string') {
                        swaService.success(successCallback);
                    }
                    else if (successCallback && typeof successCallback === 'function') {
                        successCallback(data);
                    }
                    else {
                        swaService.close();
                    }
                }
                else if (data.status === 'fail') {
                    const info = typeof data.data === 'string'
                        ? data.data
                        : 'Valida la información ingresada.';
                    swaService.info(info);
                }
                else if (data.status === 'error') {
                    const info = data.message || 'Error en la solicitud.';
                    swaService.error(info);
                }
                else {
                    swaService.close();
                    console.error('observer : status desconocido ' + data.status);
                }
            }
        },
        error: (error) => {
            if (typeof error === 'string')
                return swaService.error(error);
            swaService.error(error.message || '');
        },
    };
}


/***/ }),

/***/ "3k8I":
/*!*************************************************!*\
  !*** ./src/app/core/store/app-store.actions.ts ***!
  \*************************************************/
/*! exports provided: AppStoreActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreActions", function() { return AppStoreActions; });
const AppStoreActions = {
    init: 'init',
    setHome: 'setHome',
    setCurrentUser: 'setCurrentUser',
    setProducts: 'setProducts',
    setProductFilters: 'setProductFilters',
    setProduct: 'setProduct',
    setDisease: 'setDisease',
    initShoppingCart: 'initShoppingCart',
    setShoppingCart: 'setShoppingCart',
    setShoopingProduc: 'setShoopingProduct',
    setShoppingCards: 'setShoppingCards',
    setCurrentAddress: 'setCurrentAddress',
    showAddAddress: 'showAddAddress',
    showEditAddress: 'showEditAddress',
    showEditDelivery: 'showEditDelivery',
    showEditUserForm: 'showEditUserForm',
    setShoppingAddCard: 'setShoppingAddCard',
    setDeviceSession: 'setDeviceSession',
};


/***/ }),

/***/ "4z7i":
/*!*********************************************!*\
  !*** ./src/app/services/swa/swa.service.ts ***!
  \*********************************************/
/*! exports provided: SwaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaService", function() { return SwaService; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SwaService {
    constructor() { }
    loading(title = 'Cargando... ', text) {
        let options = {
            title: title,
            text: text ? text : '',
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.showLoading();
            },
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire(options);
    }
    close() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.close();
    }
    error(title, text) {
        let options = {
            title: title,
            text: text ? text : '',
            type: 'error',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.hideLoading();
            },
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire(options);
    }
    success(title, option, callback) {
        let options = {
            title: title,
            text: typeof option === 'string' ? option : '',
            type: 'success',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.hideLoading();
            },
        };
        if (callback) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire(options).then((result) => {
                callback(result);
            });
        }
        else if (typeof option === 'function') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire(options).then((result) => {
                option(result);
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire(options);
        }
    }
    info(title, text) {
        let options = {
            title: title,
            text: text ? text : '',
            type: 'warning',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.hideLoading();
            },
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire(options);
    }
    confirm(title = '', text = '', callbackConfirm) {
        let options = {
            type: 'warning',
            title: title,
            text: text,
            allowOutsideClick: false,
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            allowEscapeKey: true,
            reverseButtons: true,
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire(options).then(function (result) {
            callbackConfirm({ value: result.value });
        });
    }
}
SwaService.ɵfac = function SwaService_Factory(t) { return new (t || SwaService)(); };
SwaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SwaService, factory: SwaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6Yr3":
/*!***********************************************************!*\
  !*** ./src/app/modules/search/services/search.service.ts ***!
  \***********************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SearchService {
    constructor(http) {
        this.http = http;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint;
    }
    getProducts(filters) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + '/products', filters);
    }
    getProductById(id) {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + '/products' + `/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response.data));
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6snH":
/*!************************************************!*\
  !*** ./src/app/core/store/base-store.class.ts ***!
  \************************************************/
/*! exports provided: BaseStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStore", function() { return BaseStore; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-store.reducer */ "Vs38");


class BaseStore {
    constructor() {
        this.state = {};
        this._state = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.state);
        this.effects = [];
    }
    publish() {
        this._state.next(this.state);
    }
    changeState(type, payload) {
        this.state = Object(_app_store_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"])(this.state, {
            type,
            payload,
        });
        this._state.next(this.state);
        return true;
    }
    getState() {
        return this._state.asObservable();
    }
    getObjectState() {
        return this.state;
    }
    addEffect(name) {
        if (this.state[name]) {
            const found = this.effects.find((i) => i.name === name);
            if (!found) {
                this.effects.push({ name, listener: new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]() });
            }
            return;
        }
        throw new Error('BaseStore: No se puede agregar el effect para la propiedad "' +
            name +
            '"');
    }
    getEffect(name) {
        const found = this.effects.find((i) => i.name === name);
        if (!found) {
            throw new Error('BaseStore:  El efecto "' + name + '" no esta registrado en el store');
        }
        return found.listener.asObservable();
    }
    publishEffect(name) {
        const found = this.effects.find((i) => i.name === name);
        if (!found) {
            throw new Error('BaseStore: No se puede publicar el effect "' +
                name +
                '", aun no esta registrado');
        }
        found.listener.next(this.state[name]);
    }
}


/***/ }),

/***/ "8jEK":
/*!******************************************************!*\
  !*** ./src/app/modules/home/service/home.service.ts ***!
  \******************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class HomeService {
    constructor(http) {
        this.http = http;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint;
    }
    getMainProduct() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + '/home/main-product');
    }
    getMainPackage() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + '/home/main-package');
    }
    getNewProducts() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + '/home/new-products');
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    endpoint: 'http://localhost:8091/api/v1',
    domain: 'http://cronico.local',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D8t4":
/*!************************************************************************!*\
  !*** ./src/app/modules/shopping-cart/service/shopping-cart.service.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ShoppingCartService {
    constructor(http) {
        this.http = http;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint;
    }
    getShoppingCarts(userId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + `/shopping-cart/list/${userId}`);
    }
    addShoppingCart(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + `/shopping-cart/save`, data);
    }
    updateShoppingCart(order) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + `/shopping-cart/update`, order);
    }
    deleteShoppingCart(shoppingCartId) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint +
            `/shopping-cart/delete${shoppingCartId}?shoppingCartId=${shoppingCartId}`);
    }
    confirmOrder(deviceSession) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + `/shopping-cart/confirm-order`, { deviceSession });
    }
}
ShoppingCartService.ɵfac = function ShoppingCartService_Factory(t) { return new (t || ShoppingCartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ShoppingCartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ShoppingCartService, factory: ShoppingCartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IS4z":
/*!*****************************************************!*\
  !*** ./src/app/services/sidebar/sidebar.service.ts ***!
  \*****************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SidebarService {
    constructor() {
        this.hideSidebar = true;
    }
    toggleSidebar() {
        this.hideSidebar = !this.hideSidebar;
    }
    isHideSidebar() {
        return this.hideSidebar;
    }
    closeSidebar() {
        if (!this.hideSidebar) {
            this.hideSidebar = true;
        }
    }
}
SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(); };
SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KJQ7":
/*!****************************************************************!*\
  !*** ./src/app/modules/shopping-cart/service/cards.service.ts ***!
  \****************************************************************/
/*! exports provided: CardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsService", function() { return CardsService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CardsService {
    constructor(http) {
        this.http = http;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint;
    }
    getCardsByUser() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + `/cards/user`);
    }
    addCardByUser(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + `/cards/user`, data);
    }
    setDefaultCardByUser(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + `/cards/user/active/` + data.id, data);
    }
}
CardsService.ɵfac = function CardsService_Factory(t) { return new (t || CardsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CardsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CardsService, factory: CardsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OA76":
/*!******************************************************!*\
  !*** ./src/app/modules/auth/service/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthService {
    constructor(http) {
        this.http = http;
    }
    register(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + '/auth/create', data);
    }
    login(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + '/auth/web', data);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _templates_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/modal/modal.component */ "nIAt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/sidebar/sidebar.component */ "YpQh");
/* harmony import */ var _templates_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/header/header.component */ "nw1e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_templates_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"], _templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _templates_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_templates_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _templates_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]] }); })();


/***/ }),

/***/ "QH85":
/*!*************************************************!*\
  !*** ./src/app/services/modal/modal.service.ts ***!
  \*************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // Add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // Remove modal from array of active modals
        this.modals = this.modals.filter((x) => x.id !== id);
    }
    open(id) {
        // Open modal specified by id
        // tslint:disable-next-line:prefer-const
        let modal = this.modals.filter((x) => x.id === id)[0];
        modal.open();
    }
    close(id) {
        // Close modal specified by id
        // tslint:disable-next-line:prefer-const
        let modal = this.modals.filter((x) => x.id === id)[0];
        modal.close();
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "SVMz":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shopping-cart/service/delivery-times.service.ts ***!
  \*************************************************************************/
/*! exports provided: DeliveryTimesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryTimesService", function() { return DeliveryTimesService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DeliveryTimesService {
    constructor(http) {
        this.http = http;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint;
    }
    updateDeliveryTimes(delivery) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + `/deliveries-times/update`, delivery);
    }
    getDeliveryTimesList() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + `/deliveries-times/list`);
    }
}
DeliveryTimesService.ɵfac = function DeliveryTimesService_Factory(t) { return new (t || DeliveryTimesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DeliveryTimesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeliveryTimesService, factory: DeliveryTimesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/sidebar/sidebar.service */ "IS4z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/templates/sidebar/sidebar.component */ "YpQh");




class AppComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.title = 'webcronico';
    }
    ngOnInit() {
        document.body.addEventListener('click', (e) => {
            if (!e.target.classList.contains('toggle')) {
                this.sidebarService.closeSidebar();
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["id", "main"], [1, "inner", "auth"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TMDd":
/*!************************************************************!*\
  !*** ./src/app/modules/account/service/account.service.ts ***!
  \************************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AccountService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + '/user/data')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((items) => {
            let user = items.data;
            user.picture = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].domain}${user.picture}`;
            return items;
        }));
    }
    updateData(user) {
        return this.http
            .put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + '/user/data/update', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((items) => {
            let user = items.data;
            user.picture = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].domain}${user.picture}`;
            return items;
        }));
    }
    activePayment() {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + '/user/account/active-payment', {});
    }
    getPaymentId() {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + '/user/account/payment-id', {});
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "V24c":
/*!*************************************************!*\
  !*** ./src/app/core/store/app-store.service.ts ***!
  \*************************************************/
/*! exports provided: AppStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreService", function() { return AppStoreService; });
/* harmony import */ var _base_store_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-store.class */ "6snH");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-store.actions */ "3k8I");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/functions/api-value.function */ "rctL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/session/session.service */ "aeTR");
/* harmony import */ var src_app_modules_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/auth/service/auth.service */ "OA76");
/* harmony import */ var src_app_modules_account_service_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/account/service/account.service */ "TMDd");
/* harmony import */ var src_app_modules_home_service_home_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/home/service/home.service */ "8jEK");
/* harmony import */ var src_app_modules_search_services_search_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/search/services/search.service */ "6Yr3");
/* harmony import */ var src_app_modules_shopping_cart_service_shopping_cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/shopping-cart/service/shopping-cart.service */ "D8t4");
/* harmony import */ var src_app_modules_shopping_cart_service_address_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/shopping-cart/service/address.service */ "k9VS");
/* harmony import */ var src_app_modules_shopping_cart_service_delivery_times_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/shopping-cart/service/delivery-times.service */ "SVMz");
/* harmony import */ var src_app_modules_shopping_cart_service_cards_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modules/shopping-cart/service/cards.service */ "KJQ7");















class AppStoreService extends _base_store_class__WEBPACK_IMPORTED_MODULE_0__["BaseStore"] {
    constructor(sessionService, authService, accountService, homeService, searchService, shoppingCartService, addressService, deliveryTimesService, cardsService) {
        super();
        this.sessionService = sessionService;
        this.authService = authService;
        this.accountService = accountService;
        this.homeService = homeService;
        this.searchService = searchService;
        this.shoppingCartService = shoppingCartService;
        this.addressService = addressService;
        this.deliveryTimesService = deliveryTimesService;
        this.cardsService = cardsService;
        this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].init);
    }
    login(info) {
        return this.authService.login(info).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            this.sessionService.setToken(response.access_token);
            return this.accountService.getData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((dataUser) => {
                this.sessionService.login(Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["dataValue"])(dataUser));
                this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setCurrentUser, {
                    dataUser: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["dataValue"])(dataUser),
                });
                return dataUser;
            }));
        }));
    }
    register(info) {
        return this.authService.register(info).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            this.sessionService.setToken(response.access_token);
            return this.accountService.getData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((dataUser) => {
                this.sessionService.login(Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["dataValue"])(dataUser));
                this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setCurrentUser, {
                    dataUser: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["dataValue"])(dataUser),
                });
                return dataUser;
            }));
        }));
    }
    loadHome() {
        if (this.sessionService.isAuthenticated()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
                this.homeService.getMainProduct(),
                this.homeService.getMainPackage(),
                this.homeService.getNewProducts(),
                this.accountService.getData(),
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([product, packageProduct, newProducts, dataUser]) => {
                const data = {
                    mainProduct: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["dataValue"])(product),
                    mainPackage: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["dataValue"])(packageProduct),
                    newProducts: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(newProducts),
                };
                this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setCurrentUser, {
                    dataUser: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["dataValue"])(dataUser),
                });
                return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setHome, data);
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
                this.homeService.getMainProduct(),
                this.homeService.getMainPackage(),
                this.homeService.getNewProducts(),
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([product, packageProduct, newProducts]) => {
                const data = {
                    mainProduct: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["dataValue"])(product),
                    mainPackage: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["dataValue"])(packageProduct),
                    newProducts: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(newProducts),
                };
                return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setHome, data);
            }));
        }
    }
    loadProducts() {
        let filters = this.getObjectState().productFilters;
        return this.searchService.getProducts(filters).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((products) => {
            const data = {
                products: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(products),
            };
            return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setProducts, data);
        }));
    }
    updateProductFilters(filter) {
        const data = {
            name: filter != undefined ? filter : null,
            description: filter != undefined ? filter : null,
        };
        this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setProductFilters, { filters: data });
        return this.loadProducts();
    }
    getMainProduct() {
        return this.getObjectState().mainProduct;
    }
    validateCurrentProduct() {
        return this.getObjectState().currentProduct.id != undefined ? true : false;
    }
    validateCurrentDisease() {
        return this.getObjectState().currentDisease.id != undefined ? true : false;
    }
    selectCurrentProduct(productId) {
        return this.searchService.getProductById(productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            if (response.productType == 2) {
                const data = {
                    disease: response,
                };
                this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setDisease, data);
            }
            else {
                const data = {
                    product: response,
                };
                this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setProduct, data);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
        }));
    }
    addCarts(orders) {
        const shoopingCart = {
            userId: this.sessionService.getUserId(),
            productId: orders.product.id,
            dose: orders.dose,
            pieces: orders.pieces,
            period: orders.period,
            subtotal: orders.subtotal,
            discount: orders.discount,
            total: orders.total,
        };
        return this.shoppingCartService.addShoppingCart(shoopingCart).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((result) => {
            return this.shoppingCartService
                .getShoppingCarts(this.sessionService.getUserId())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((res) => {
                const data = {
                    products: this.getObjectState().products,
                    address: this.getObjectState().address,
                    shoppingCart: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(res),
                };
                this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingCart, data);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
            }));
        }));
    }
    deleteOrder(orderId) {
        return this.shoppingCartService.deleteShoppingCart(orderId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((result) => {
            return this.shoppingCartService
                .getShoppingCarts(this.sessionService.getUserId())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((res) => {
                const data = {
                    shoppingCart: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(res),
                };
                this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingCart, data);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
            }));
        }));
    }
    editShoppingCart(item) {
        const newShoopingCart = this.getObjectState().shoppingCart.map((cart) => {
            return Object.assign(Object.assign({}, cart), { editing: item.id == cart.id });
        });
        return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingCart, {
            shoppingCart: newShoopingCart,
        });
    }
    showEditUserForm(show) {
        return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].showEditUserForm, {
            showEditUserForm: show,
        });
    }
    updateUser(user) {
        return this.accountService.updateData(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((res) => {
            return this.accountService.getData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((dataUser) => {
                this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setCurrentUser, {
                    dataUser: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["dataValue"])(dataUser),
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
            }));
        }));
    }
    showAddAddressForm(show) {
        let address = {};
        if (show) {
            address.id = 0;
        }
        return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].showAddAddress, {
            showAddAddress: show,
            editableAddress: address,
        });
    }
    showEditAddressForm(editForm, editableAddress) {
        if (editForm == false) {
            return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].showEditAddress, {
                showEditAddress: false,
                editableAddress: {},
            });
        }
        else {
            if (editableAddress == null) {
                editableAddress = this.getObjectState().currentAddress;
            }
            return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].showEditAddress, {
                showEditAddress: editForm,
                editableAddress,
            });
        }
    }
    showEditDeliveryForm(editForm, editableAddress) {
        if (editForm == false) {
            this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].showEditDelivery, {
                showEditDelivery: false,
                editableAddress: {},
            });
        }
        else {
            if (editableAddress == null) {
                editableAddress = this.getObjectState().currentAddress;
            }
            this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].showEditDelivery, {
                showEditDelivery: true,
                editableAddress,
            });
        }
        return true;
    }
    closeEditShoppingCart() {
        let foundEdited = this.getObjectState().shoppingCart.find((cart) => cart.editing);
        if (foundEdited) {
            const toUpdate = JSON.parse(JSON.stringify(foundEdited));
            return this.shoppingCartService.updateShoppingCart(toUpdate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
                return this.shoppingCartService
                    .getShoppingCarts(this.sessionService.getUserId())
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((res) => {
                    this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingCart, {
                        shoppingCart: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(res),
                    });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
                }));
            }));
        }
        const newShoopingCart = this.getObjectState().shoppingCart.map((cart) => {
            return Object.assign(Object.assign({}, cart), { editing: false });
        });
        this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingCart, {
            shoppingCart: newShoopingCart,
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    }
    refrestPriceShoppingCart(item) {
        item.subtotal = item.product.price * item.pieces;
        if (item.product.sales.length > 0) {
            item.discount = (item.subtotal / 100) * item.product.sales[0].percent;
        }
        item.total = item.subtotal - item.discount;
        const required = item.dose * Number(item.period);
        item.suggestedPieces = Math.ceil(required / item.product.presentation);
        return item;
    }
    addDoseShoppingCart(item) {
        const newShoopingCart = this.getObjectState().shoppingCart.map((cart) => {
            if (item.id == cart.id) {
                cart.dose = cart.dose + 1;
                return this.refrestPriceShoppingCart(cart);
            }
            return cart;
        });
        return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingCart, {
            shoppingCart: newShoopingCart,
        });
    }
    resShoppingCart(item) {
        const newShoopingCart = this.getObjectState().shoppingCart.map((cart) => {
            if (item.id == cart.id && cart.dose > 1) {
                cart.dose = cart.dose - 1;
                return this.refrestPriceShoppingCart(cart);
            }
            return cart;
        });
        return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingCart, {
            shoppingCart: newShoopingCart,
        });
    }
    addPiecesShoppingCart(item) {
        const newShoopingCart = this.getObjectState().shoppingCart.map((cart) => {
            if (item.id == cart.id) {
                cart.pieces = cart.pieces + 1;
                return this.refrestPriceShoppingCart(cart);
            }
            return cart;
        });
        return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingCart, {
            shoppingCart: newShoopingCart,
        });
    }
    resPiecesShoppingCart(item) {
        const newShoopingCart = this.getObjectState().shoppingCart.map((cart) => {
            if (item.id == cart.id && cart.pieces > 1) {
                cart.pieces = cart.pieces - 1;
                return this.refrestPriceShoppingCart(cart);
            }
            return cart;
        });
        return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingCart, {
            shoppingCart: newShoopingCart,
        });
    }
    generateOrdersbyDesease() {
        // let orders: ShoppingCart[] = [];
        // this.getObjectState().currentDisease.productParts.map((item) => {
        //   let total: number = Math.ceil((30 * 1) / item.piecesPerBox);
        //   let data: ShoppingCart = {
        //     id: orders.length + 1,
        //     productId: item.id,
        //     dose: 1,
        //     supplying: 30,
        //     userId: 0,
        //   };
        //   orders.push(data);
        // });
        // return this.addCarts(orders);
    }
    loadShoppingCart() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
            this.shoppingCartService.getShoppingCarts(this.sessionService.getUserId()),
            this.addressService.getAddressList(this.sessionService.getUserId()),
            this.deliveryTimesService.getDeliveryTimesList(),
            this.cardsService.getCardsByUser(),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([shoppingCart, address, deliveries, cards]) => {
            let addresses = Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(address);
            const data = {
                shoppingCart: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(shoppingCart),
                address: addresses,
                deliveries: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(deliveries),
                cards: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(cards),
                shoppingAddCard: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(cards).length === 0,
            };
            console.log(Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(cards).length === 0);
            /*
            this.changeState(AppStoreActions.setCurrentAddress, {
              address: addresses.find((item) => item.status == 1),
            });
            */
            return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].initShoppingCart, data);
        }));
    }
    shoppingAddCard() {
        return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingAddCard, {
            shoppingAddCard: true,
        });
    }
    shoppingCloseAddCard() {
        return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingAddCard, {
            shoppingAddCard: false,
        });
    }
    getShoppingCart() {
        return this.getObjectState().shoppingCart;
    }
    currentProductToShopping() {
        const shoppingProduct = {
            product: this.getObjectState().currentProduct,
            period: '30',
            dose: 1,
            pieces: 1,
            suggestedPieces: 0,
            subtotal: 0,
            discount: 0,
            sale: 0,
            total: 0,
        };
        this.updateShoppingProduct(shoppingProduct);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    }
    updateShoppingProduct(shoppingProduct) {
        shoppingProduct.subtotal =
            shoppingProduct.product.price * shoppingProduct.pieces;
        if (shoppingProduct.product.sales.length > 0) {
            shoppingProduct.discount =
                (shoppingProduct.subtotal / 100) *
                    shoppingProduct.product.sales[0].percent;
        }
        shoppingProduct.total = shoppingProduct.subtotal - shoppingProduct.discount;
        const required = shoppingProduct.dose * Number(shoppingProduct.period);
        shoppingProduct.suggestedPieces = Math.ceil(required / shoppingProduct.product.presentation);
        this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoopingProduc, { shoppingProduct });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    }
    saveAddress(newAddress) {
        newAddress.deliveryTimeId = 1;
        return this.addressService.addAddress(newAddress).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.loadShoppingCart();
        }));
    }
    deleteAddress(addressId) {
        let currentAddressId = addressId;
        if (currentAddressId == undefined) {
            currentAddressId = this.getObjectState().currentAddress.id;
        }
        return this.addressService.deleteAddress(currentAddressId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((result) => {
            return this.addressService
                .getAddressList(this.sessionService.getUserId())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((res) => {
                const data = {
                    shoppingCart: this.getObjectState().shoppingCart,
                    address: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(res),
                };
                this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingCart, data);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
            }));
        }));
    }
    editAddress(newAddress, item) {
        let currentAddress = {};
        if (item == null) {
            currentAddress = this.getObjectState().currentAddress;
        }
        else {
            currentAddress = item;
        }
        let editAddress = {
            id: currentAddress.id,
            userId: currentAddress.userId,
            name: newAddress.name,
            street: newAddress.street,
            streetNumber: newAddress.streetNumber,
            interiorNumber: newAddress.interiorNumber,
            suburb: newAddress.suburb,
            cp: newAddress.cp,
            location: newAddress.location,
            comments: newAddress.comments,
            state: newAddress.state,
            reference: newAddress.reference,
            status: newAddress.status,
        };
        return this.addressService.updateAddress(editAddress).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.loadShoppingCart();
        }));
    }
    editDelivery(deliveryId) {
        let editAddress = this.getObjectState().editableAddress;
        editAddress.deliveryTimeId = deliveryId;
        return this.addressService.updateAddress(editAddress).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.loadShoppingCart();
        }));
    }
    confirmOrder() {
        const deviceSession = this.getObjectState().deviceSession;
        return this.shoppingCartService.confirmOrder(deviceSession).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.loadShoppingCart();
        }));
    }
    getPaymentId() {
        return this.accountService.getData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            const user = Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["dataValue"])(response);
            if (user.enableOpenPay) {
                return this.accountService.getPaymentId();
            }
            return this.accountService.activePayment().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
                return this.accountService.getData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((dataUser) => {
                    this.sessionService.login(Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["dataValue"])(dataUser));
                    this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setCurrentUser, {
                        dataUser: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["dataValue"])(dataUser),
                    });
                    return this.accountService.getPaymentId();
                }));
            }));
        }));
    }
    addCardByUser(card) {
        return this.cardsService.addCardByUser(card).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            return this.cardsService.getCardsByUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((cards) => {
                this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingCards, {
                    cards: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(cards),
                    shoppingAddCard: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(cards).length === 0,
                });
                return response;
            }));
        }));
    }
    setDefaultCard(card) {
        return this.cardsService.setDefaultCardByUser(card).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            return this.cardsService.getCardsByUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((cards) => {
                this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setShoppingCards, {
                    cards: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(cards),
                    shoppingAddCard: Object(_core_functions_api_value_function__WEBPACK_IMPORTED_MODULE_4__["itemsValue"])(cards).length === 0,
                });
                return response;
            }));
        }));
    }
    setDeviceSession(deviceSession) {
        return this.changeState(_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["AppStoreActions"].setDeviceSession, {
            deviceSession,
        });
    }
    validateDeviseSession() {
        return !!this.getObjectState().deviceSession;
    }
}
AppStoreService.ɵfac = function AppStoreService_Factory(t) { return new (t || AppStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_account_service_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_home_service_home_service__WEBPACK_IMPORTED_MODULE_9__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_search_services_search_service__WEBPACK_IMPORTED_MODULE_10__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shopping_cart_service_shopping_cart_service__WEBPACK_IMPORTED_MODULE_11__["ShoppingCartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shopping_cart_service_address_service__WEBPACK_IMPORTED_MODULE_12__["AddressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shopping_cart_service_delivery_times_service__WEBPACK_IMPORTED_MODULE_13__["DeliveryTimesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shopping_cart_service_cards_service__WEBPACK_IMPORTED_MODULE_14__["CardsService"])); };
AppStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AppStoreService, factory: AppStoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Vs38":
/*!*************************************************!*\
  !*** ./src/app/core/store/app-store.reducer.ts ***!
  \*************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _app_store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-store.actions */ "3k8I");

function reducer(state, action) {
    switch (action.type) {
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].init: {
            return {
                isInitialized: false,
                mainProduct: { images: [] },
                mainPackage: {},
                currentUser: {},
                showEditUserForm: false,
                currentProduct: { sales: [], images: [] },
                currentDisease: {},
                currentAddress: {},
                editableAddress: {},
                productFilters: {},
                shoppingProduct: {
                    product: { sales: [] },
                },
                newProducts: [],
                products: [],
                address: [],
                shoppingCart: [],
                showAddressForm: false,
                showAddressAddForm: false,
                showDeliveryForm: false,
                cards: [],
                currentCard: {},
                deliveriesTimes: [],
                shoppingAddCard: false,
                deviceSession: '',
            };
        }
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].setHome:
            return Object.assign(Object.assign({}, state), { mainProduct: action.payload.mainProduct, mainPackage: action.payload.mainPackage, newProducts: action.payload.newProducts });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].setCurrentUser:
            return Object.assign(Object.assign({}, state), { currentUser: action.payload.dataUser });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].setProducts:
            return Object.assign(Object.assign({}, state), { products: action.payload.products });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].setProduct:
            return Object.assign(Object.assign({}, state), { currentProduct: action.payload.product });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].setDisease:
            return Object.assign(Object.assign({}, state), { currentDisease: action.payload.disease });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].initShoppingCart:
            return Object.assign(Object.assign({}, state), { shoppingCart: action.payload.shoppingCart, address: action.payload.address, cards: action.payload.cards, currentCard: action.payload.currentCard, deliveriesTimes: action.payload.deliveries, shoppingAddCard: action.payload.shoppingAddCard });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].setShoppingCart:
            return Object.assign(Object.assign({}, state), { shoppingCart: action.payload.shoppingCart });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].setCurrentAddress:
            return Object.assign(Object.assign({}, state), { currentAddress: action.payload.address });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].setShoopingProduc:
            return Object.assign(Object.assign({}, state), { shoppingProduct: action.payload.shoppingProduct });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].setShoppingCards:
            return Object.assign(Object.assign({}, state), { cards: action.payload.cards, shoppingAddCard: action.payload.shoppingAddCard });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].showEditAddress:
            return Object.assign(Object.assign({}, state), { showAddressForm: action.payload.showEditAddress, editableAddress: action.payload.editableAddress });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].showAddAddress:
            return Object.assign(Object.assign({}, state), { showAddressAddForm: action.payload.showAddAddress, editableAddress: action.payload.editableAddress });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].showEditUserForm:
            return Object.assign(Object.assign({}, state), { showEditUserForm: action.payload.showEditUserForm });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].showEditDelivery:
            return Object.assign(Object.assign({}, state), { showDeliveryForm: action.payload.showEditDelivery, editableAddress: action.payload.editableAddress });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].setShoppingAddCard:
            return Object.assign(Object.assign({}, state), { shoppingAddCard: action.payload.shoppingAddCard });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].setProductFilters:
            return Object.assign(Object.assign({}, state), { productFilters: action.payload.filters });
        case _app_store_actions__WEBPACK_IMPORTED_MODULE_0__["AppStoreActions"].setDeviceSession:
            return Object.assign(Object.assign({}, state), { deviceSession: action.payload.deviceSession });
        default:
            return state;
    }
}


/***/ }),

/***/ "YpQh":
/*!***************************************************************!*\
  !*** ./src/app/shared/templates/sidebar/sidebar.component.ts ***!
  \***************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "IS4z");
/* harmony import */ var _services_session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/session/session.service */ "aeTR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function SidebarComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.session.getUserObject().picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r0.session.getUser())) == null ? null : tmp_1_0.name, " ");
} }
function SidebarComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mis compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Carrito de compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mi cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SidebarComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ingresar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return { inactive: a0 }; };
class SidebarComponent {
    constructor(sidebarService, session) {
        this.sidebarService = sidebarService;
        this.session = session;
    }
    ngOnInit() { }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 17, vars: 6, consts: [["id", "sidebar", 3, "ngClass"], [1, "inner"], ["id", "menu"], [1, "major"], [4, "ngIf"], ["routerLink", "/home"], ["routerLink", "/search"], ["id", "footer"], [1, "copyright"], ["width", "100px", 3, "src"], ["routerLink", "/orders"], ["routerLink", "/shopping-cart"], ["routerLink", "/account"], ["routerLink", "/auth/login"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_ng_container_4_Template, 5, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Busqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidebarComponent_ng_container_12_Template, 10, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SidebarComponent_ng_container_13_Template, 4, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "v.1.0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.sidebarService.isHideSidebar()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.session.isAuthenticated());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home/home-page/home-page.component */ "+Rtr");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_interceptors_token_token_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/interceptors/token/token.interceptor */ "bQN4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_token_token_interceptor__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptor"],
            multi: true,
        },
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _modules_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();


/***/ }),

/***/ "aeTR":
/*!*****************************************************!*\
  !*** ./src/app/services/session/session.service.ts ***!
  \*****************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SessionService {
    constructor() {
        this._loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this._user = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({
            name: 'Ingresa',
        });
        this.user = {};
        if (localStorage.getItem('token')) {
            this._loggedIn.next(true);
            this.user = {
                id: Number(localStorage.getItem('userId')),
                name: localStorage.getItem('name'),
                userName: localStorage.getItem('userName'),
                profileId: Number(localStorage.getItem('profileId')),
                picture: localStorage.getItem('picture'),
                enableOpenPay: localStorage.getItem('enableOpenPay') === '1',
            };
            this._user.next(this.user);
        }
    }
    isAuthenticated() {
        return !!localStorage.getItem('token');
    }
    login(user) {
        localStorage.setItem('name', user.name);
        localStorage.setItem('userId', `${user.id}`);
        localStorage.setItem('userName', user.userName);
        localStorage.setItem('profileId', `${user.profileId}`);
        localStorage.setItem('picture ', user.picture);
        localStorage.setItem('enableOpenPay', user.enableOpenPay ? '1' : ''),
            localStorage.setItem('randomId', `${Math.floor(Math.random() * (900 - 100)) + 100}`);
        this._loggedIn.next(true);
        this.user = user;
        this._user.next(this.user);
    }
    setToken(token) {
        localStorage.setItem('token', token);
    }
    logout() {
        localStorage.clear();
        this._loggedIn.next(false);
        this._user.next({ name: 'Ingresa' });
    }
    getUser() {
        return this._user.asObservable();
    }
    getUserObject() {
        return this.user;
    }
    getUserId() {
        const userId = localStorage.getItem('userId');
        return JSON.parse(userId);
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(); };
SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "bQN4":
/*!**************************************************************!*\
  !*** ./src/app/core/interceptors/token/token.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TokenInterceptor {
    constructor() { }
    intercept(request, next) {
        if (localStorage.getItem('token')) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });
        }
        return next.handle(request);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ "k9VS":
/*!******************************************************************!*\
  !*** ./src/app/modules/shopping-cart/service/address.service.ts ***!
  \******************************************************************/
/*! exports provided: AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return AddressService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/session/session.service */ "aeTR");




class AddressService {
    constructor(http, sessionService) {
        this.http = http;
        this.sessionService = sessionService;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint;
    }
    getAddressList(userId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + `/address/list`);
    }
    addAddress(address) {
        let data = {
            id: null,
            userId: this.sessionService.getUserId(),
            deliveryTimeId: address.deliveryTimeId,
            name: address.name,
            street: address.street,
            streetNumber: address.streetNumber,
            suburb: address.suburb,
            cp: address.cp,
            location: address.location,
            comments: address.comments,
            state: address.state,
            reference: address.reference,
            status: address.status,
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + `/address/save`, data);
    }
    updateAddress(order) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + `/address/update`, order);
    }
    deleteAddress(addressId) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + `/address/delete?addressId=${addressId}`);
    }
}
AddressService.ɵfac = function AddressService_Factory(t) { return new (t || AddressService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"])); };
AddressService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AddressService, factory: AddressService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nIAt":
/*!***********************************************************!*\
  !*** ./src/app/shared/templates/modal/modal.component.ts ***!
  \***********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/modal/modal.service */ "QH85");


const _c0 = ["*"];
class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.id = '';
        this.size = 'app-modal sm';
        this.preventCloseOnClickOutside = false;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // tslint:disable-next-line:prefer-const
        let modal = this;
        const classesOnClose = [
            'app-modal sm',
            'app-modal md',
            'app-modal lg',
            'app-modal full',
            'app-modal-background',
        ];
        if (!this.id) {
            return;
        }
        document.body.appendChild(this.element);
        this.element.addEventListener('click', (e) => {
            if (classesOnClose.find((_) => _ === e.target.className)) {
                if (!this.preventCloseOnClickOutside) {
                    modal.close();
                }
            }
        });
        this.modalService.add(this);
    }
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    open() {
        this.element.classList.add('app-modal-display');
        document.body.classList.add('app-modal-open');
        setTimeout(() => {
            this.element.classList.add('app-modal-show');
        }, 100);
    }
    close() {
        this.element.classList.remove('app-modal-display');
        this.element.classList.remove('app-modal-show');
        document.body.classList.remove('app-modal-open');
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { id: "id", size: "size", preventCloseOnClickOutside: "preventCloseOnClickOutside" }, ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[1, "app-modal-body"], [1, "app-modal-background"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("app-modal ", ctx.size, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "nw1e":
/*!*************************************************************!*\
  !*** ./src/app/shared/templates/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/sidebar/sidebar.service */ "IS4z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeaderComponent {
    constructor(sidebarService, router) {
        this.sidebarService = sidebarService;
        this.router = router;
        this.title = 'Insumo cronico';
        this.icon = 'fa-bars';
        this.openSidebar = true;
        this.link = '';
    }
    ngOnInit() { }
    onClickButton() {
        if (this.openSidebar) {
            this.sidebarService.toggleSidebar();
        }
        else {
            this.router.navigate([this.link]);
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { title: "title", icon: "icon", openSidebar: "openSidebar", link: "link" }, decls: 5, vars: 4, consts: [["id", "header"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_1_listener() { return ctx.onClickButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("toggle ", ctx.icon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "rctL":
/*!******************************************************!*\
  !*** ./src/app/core/functions/api-value.function.ts ***!
  \******************************************************/
/*! exports provided: listValue, itemsValue, dataValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listValue", function() { return listValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsValue", function() { return itemsValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataValue", function() { return dataValue; });
function listValue(data, defaultValue) {
    if (data.status === 'success' && typeof data.data !== 'string') {
        return data.data;
    }
    return defaultValue || null;
}
function itemsValue(data, defaultValue) {
    if (data.status === 'success' && typeof data.data !== 'string') {
        return data.data.items;
    }
    return defaultValue || [];
}
function dataValue(data, defaultValue) {
    if (data.status === 'success' && typeof data.data !== 'string') {
        return data.data;
    }
    return defaultValue || null;
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-auth-auth-module */ "modules-auth-auth-module").then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "305l")).then((m) => m.AuthModule),
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-home-home-module */ "modules-home-home-module").then(__webpack_require__.bind(null, /*! ./modules/home/home.module */ "iydT")).then((m) => m.HomeModule),
    },
    {
        path: 'demo',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-demo-demo-module */ "modules-demo-demo-module").then(__webpack_require__.bind(null, /*! ./modules/demo/demo.module */ "df2s")).then((m) => m.DemoModule),
    },
    {
        path: 'search',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-search-search-module */ "modules-search-search-module").then(__webpack_require__.bind(null, /*! ./modules/search/search.module */ "gA4M")).then((m) => m.SearchModule),
    },
    {
        path: 'shopping-cart',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-shopping-cart-shopping-cart-module */ "default~modules-account-account-module~modules-shopping-cart-shopping-cart-module").then(__webpack_require__.bind(null, /*! ./modules/shopping-cart/shopping-cart.module */ "8kDR")).then((m) => m.ShoppingCartModule),
    },
    {
        path: 'account',
        loadChildren: () => Promise.all(/*! import() | modules-account-account-module */[__webpack_require__.e("default~modules-account-account-module~modules-shopping-cart-shopping-cart-module"), __webpack_require__.e("modules-account-account-module")]).then(__webpack_require__.bind(null, /*! ./modules/account/account.module */ "lKKO")).then((m) => m.AccountModule),
    },
    {
        path: 'orders',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-orders-orders-module */ "modules-orders-orders-module").then(__webpack_require__.bind(null, /*! ./modules/orders/orders.module */ "fAJX")).then((m) => m.OrdersModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/home',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map