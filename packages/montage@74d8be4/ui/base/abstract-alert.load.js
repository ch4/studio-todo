montageDefine("74d8be4","ui/base/abstract-alert",{dependencies:["ui/component","ui/modal-overlay.reel","core/promise"],factory:function(e,t){var n=e("ui/component").Component,r=(e("ui/modal-overlay.reel").ModalOverlay,e("core/promise").Promise);t.AbstractAlert=n.specialize({constructor:{value:function i(){if(this.constructor===i)throw Error("AbstractAlert cannot be instantiated.")}},_overlay:{value:null},_okButton:{value:null},_userActionDeferred:{value:null},title:{value:"Alert"},okLabel:{value:"OK"},message:{value:null},enterDocument:{value:function(e){var t;e&&(t=Object.getPrototypeOf(this).constructor,this===t._instance&&t._nextMessageDeferred.resolve(),this._okButton.addEventListener("action",this,!1))}},show:{value:function(){return this._userActionDeferred||(this._overlay.hasModalMask=!1,this._overlay.show(),this._userActionDeferred=r.defer()),this._userActionDeferred.promise}},handleAction:{value:function(e){e.target===this._okButton&&(this._userActionDeferred.resolve(),this._userActionDeferred=null,this._overlay.hide())}}},{_instance:{value:null},__nextMessageDeferred:{value:null},_nextMessageDeferred:{get:function(){return this.hasOwnProperty("__nextMessageDeferred")||(this.__nextMessageDeferred=r.defer()),this.__nextMessageDeferred}},__nextMessagePromise:{value:null},_nextMessagePromise:{set:function(e){this.__nextMessagePromise=e},get:function(){return this.hasOwnProperty("__nextMessagePromise")||(this.__nextMessagePromise=this._nextMessageDeferred.promise),this.__nextMessagePromise}},_setupInstance:{value:function(){var e;e=this._instance=new this,e.element=e.rootComponent.element.createElement("div"),e.element.ownerDocument.body.appendChild(e.element),e.attachToParentComponent(),e.needsDraw=!0}},show:{value:function(e,t){var n,r=this;return this.hasOwnProperty("_instance")||this._setupInstance(),n=this._instance,this._nextMessagePromise=this._nextMessagePromise.then(function(){return n.title=t?t:r.prototype.title,n.message=e,n.show()})}}})}});