montageDefine("7faccd7","ui/text-slider.reel/text-slider",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component,i="matte-TextSlider--editing";t.TextSlider=n.specialize({_converter:{enumerable:!1,value:null},converter:{get:function(){return this._converter},set:function(e){this._converter!==e&&(this.dispatchBeforeOwnPropertyChange("convertedValue",this.convertedValue),this._converter=e,this.dispatchOwnPropertyChange("convertedValue",this.convertedValue),this.needsDraw=!0)}},_value:{value:0},value:{get:function(){return this._value},set:function(e){return isNaN(e=parseFloat(e))?!1:(null!=this._minValue&&this._minValue>e?e=this._minValue:null!=this._maxValue&&e>this._maxValue&&(e=this._maxValue),this._value!==e&&(this.dispatchBeforeOwnPropertyChange("convertedValue",this.convertedValue),this._value=e,this.dispatchOwnPropertyChange("convertedValue",this.convertedValue),this.needsDraw=!0),void 0)}},convertedValue:{get:function(){return this._converter?this._converter.convert(this._value):this._value},set:function(e){this.value=this._converter?this._converter.revert(e):e}},_minValue:{enumerable:!1,value:null},minValue:{get:function(){return this._minValue},set:function(e){this._minValue!==e&&(this._minValue=e,this.value=this._value,this.needsDraw=!0)}},_maxValue:{enumerable:!1,value:null},maxValue:{get:function(){return this._maxValue},set:function(e){this._maxValue!==e&&(this._maxValue=e,this.value=this._value,this.needsDraw=!0)}},smallStepSize:{enumerable:!1,value:.1},stepSize:{enumerable:!1,value:1},largeStepSize:{enumerable:!1,value:10},_unit:{enumerable:!1,value:null},unit:{get:function(){return this._unit},set:function(e){this._unit!==e&&(this._unit=e,this.needsDraw=!0)}},_units:{enumerable:!1,value:[]},units:{get:function(){return this._units},set:function(e){this._units!==e&&(this._units=e,this.needsDraw=!0)}},_isEditing:{enumerable:!1,value:null},isEditing:{get:function(){return this._isEditing},set:function(e){this._isEditing!==e&&(this._isEditing=e,this.needsDraw=!0)}},_inputElement:{value:null},_pressComposer:{value:null},_translateComposer:{value:null},_startX:{value:null},_startY:{value:null},_direction:{value:null},constructor:{value:function(){this.super(),this.handlePress=this.handleClick}},prepareForActivationEvents:{value:function(){this._element.addEventListener("click",this,!1)}},enterDocument:{value:function(e){e&&(this._element.identifier="text",this._inputElement.identifier="input",this._element.addEventListener("focus",this,!1),this._inputElement.addEventListener("blur",this,!1),this._element.addEventListener("keydown",this,!1),this._inputElement.addEventListener("keydown",this,!1))}},draw:{value:function(){var e=this._element.classList.contains(i);this._isEditing?(e||(this._element.classList.add(i),this._inputElement.focus()),this._inputElement.value=this.convertedValue+(this._unit?" "+this._unit:"")):e&&(this._element.classList.remove(i),this._inputElement.blur(),this._element.focus()),document.body.style.cursor="horizontal"===this._direction?"ew-resize":"vertical"===this._direction?"ns-resize":"auto"}},surrenderPointer:{value:function(){return!this._isEditing}},handleClick:{value:function(){this._isEditing||(this.isEditing=!0)}},handleBlur:{value:function(){this._isEditing&&(this.convertedValue=this._inputElement.value,this.isEditing=!1)}},handleInputKeydown:{value:function(e){var t;38===e.keyCode?(this.convertedValue=this._inputElement.value,t=Math.round((e.shiftKey?this.largeStepSize:e.ctrlKey?this.smallStepSize:this.stepSize)/this.smallStepSize)*this.smallStepSize,this.value+=t,this.needsDraw=!0):40===e.keyCode?(this.convertedValue=this._inputElement.value,t=Math.round((e.shiftKey?this.largeStepSize:e.ctrlKey?this.smallStepSize:this.stepSize)/this.smallStepSize)*this.smallStepSize,this.value-=t,this.needsDraw=!0):13===e.keyCode?(this.convertedValue=this._inputElement.value,this.isEditing=!1):27===e.keyCode&&(this.isEditing=!1)}},handleTextKeydown:{value:function(e){13===e.keyCode&&(this.isEditing=!0),e.shiftKey||16===e.keyCode?this._translateComposer.pointerSpeedMultiplier=this.largeStepSize/this.stepSize:(e.ctrlKey||17===e.keyCode)&&(this._translateComposer.pointerSpeedMultiplier=this.smallStepSize/this.stepSize)}},handleKeyup:{value:function(e){e.shiftKey||16===e.keyCode?this._translateComposer.pointerSpeedMultiplier=this.stepSize:(e.ctrlKey||17===e.keyCode)&&(this._translateComposer.pointerSpeedMultiplier=this.stepSize)}},handleTranslateStart:{value:function(){this._direction=null,this._startX=this._value,this._startY=this._value,this._translateComposer.translateX=this._value,this._translateComposer.translateY=this._value,document.addEventListener("keydown",this,!1),document.addEventListener("keyup",this,!1)}},handleTranslate:{value:function(e){if("vertical"===this._direction)this.value=e.translateY;else if("horizontal"===this._direction)this.value=e.translateX;else{var t,n=Math.abs(e.translateX-this._startX),i=Math.abs(e.translateY-this._startY);i>n?(t=e.translateY,i>20&&(this._direction="vertical")):(t=e.translateX,n>20&&(this._direction="horizontal")),this.value=t}}},handleTranslateEnd:{value:function(){this._direction=null,this.needsDraw=!0,document.removeEventListener("keydown",this,!1),document.removeEventListener("keyup",this,!1)}}})}});