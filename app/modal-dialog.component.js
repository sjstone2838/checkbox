"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ModalDialogComponent = (function () {
    function ModalDialogComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ModalDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // convert string to bool
        this.show = this.show === 'true';
        this.loading = this.loading === 'true';
        // $document.on('keydown', onKeyDown);
        this.globalListenFunc = this.renderer.listenGlobal('document', 'keydown', function (event) { return _this.onKeyDown(event); });
    };
    // scope.close = function () {
    //   if(!scope.loading) {
    //     scope.show = false;
    //   }
    // };
    ModalDialogComponent.prototype.close = function () {
        if (!this.loading) {
            this.show = false;
        }
    };
    // // transcludeHelper.linkToParentCtrl(scope, element);
    // scope.$on('$destroy', function () {
    //   $document.off('keydown', onKeyDown);
    // });
    ModalDialogComponent.prototype.ngOnDestroy = function () {
        this.globalListenFunc();
    };
    // function onKeyDown(e) {
    //   if (e.keyCode === constants.KEY_CODE.ESCAPE) {
    //     e.preventDefault();
    //     scope.$apply(function() {
    //       scope.close();
    //     });
    //   }
    // }
    ModalDialogComponent.prototype.onKeyDown = function (e) {
        // TODO: add dependency on constants
        // if (e.keyCode === constants.KEY_CODE.ESCAPE) {
        if (e.keyCode === 27) {
            e.preventDefault();
            this.close();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ModalDialogComponent.prototype, "show", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ModalDialogComponent.prototype, "hasError", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ModalDialogComponent.prototype, "formCtrl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ModalDialogComponent.prototype, "loading", void 0);
    ModalDialogComponent = __decorate([
        core_1.Component({
            selector: 'modal-dialog',
            templateUrl: 'app/modal-dialog.component.html',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], ModalDialogComponent);
    return ModalDialogComponent;
}());
exports.ModalDialogComponent = ModalDialogComponent;
//# sourceMappingURL=modal-dialog.component.js.map