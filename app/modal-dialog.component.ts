import { Component, Input, Output, OnInit, DoCheck, Renderer, ElementRef, OnDestroy, EventEmitter} from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'modal-dialog',
  templateUrl: 'app/modal-dialog.component.html',
  // styleUrls: ['app/modal-dialog.component.css'],
  // directives: [],
})
export class ModalDialogComponent {
  @Input() show;
  @Input() hasError;
  @Input() formCtrl;
  @Input() loading;
  // @Output() closeModal = new EventEmitter;

  globalListenFunc;
  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer,
  ) {}

  ngOnInit(){
    // convert string to bool
    this.show = this.show === 'true';
    this.loading = this.loading === 'true';
    
    // $document.on('keydown', onKeyDown);
    this.globalListenFunc = this.renderer.listenGlobal('document', 'keydown', (event) => this.onKeyDown(event));
  }

  // scope.close = function () {
  //   if(!scope.loading) {
  //     scope.show = false;
  //   }
  // };
  
  close () {
    if(!this.loading) {
      this.show = false;
    }
  }

  // // transcludeHelper.linkToParentCtrl(scope, element);


  // scope.$on('$destroy', function () {
  //   $document.off('keydown', onKeyDown);
  // });
  ngOnDestroy() {
    this.globalListenFunc();
  }

  // function onKeyDown(e) {
  //   if (e.keyCode === constants.KEY_CODE.ESCAPE) {
  //     e.preventDefault();
  //     scope.$apply(function() {
  //       scope.close();
  //     });
  //   }
  // }
  onKeyDown(e) {
    // TODO: add dependency on constants
    // if (e.keyCode === constants.KEY_CODE.ESCAPE) {
    if (e.keyCode === 27) {
      e.preventDefault();
       this.close();
    }
  }
  

}