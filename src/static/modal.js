/*
* auth yangdz 2016-12-10
*
* params: 
*   title - 标题
*   content - 内容
*   type - 类型: confirm,alert,loading
*   sureBtnText - 确认 按钮文字
*   cancelBtnText - 取消 按钮文字
*   sure - 确认回调函数
*   cancel - 取消回调函数
*
* example: 
    var Modal = require('../modal.js');
    Modal.alert({});
    Modal.loading();
*/

var Modal = function(){
    this.sure = function(){};
    this.cancel = function(){};
    this.sureBtnText = "确定";
    this.cancelBtnText = "取消";

    this.title = "系统提示";
    this.content = "此处为系统提示";
    this.type = "alert";

    this.toastTime = 1000;
}

//检测动画是否完成
$.fn.transitionEnd = function(callback) {
    var events = ['webkitTransitionEnd', 'transitionend'],
        i, dom = this;

    function fireCallBack(e) {
        /*jshint validthis:true */
        if (e.target !== this) return;
        callback.call(this, e);
        for (i = 0; i < events.length; i++) {
            dom.off(events[i], fireCallBack);
        }
    }
    if (callback) {
        for (i = 0; i < events.length; i++) {

            dom.on(events[i], fireCallBack);
        }
    }
    return this;
};

Modal.prototype = {
    alert: function(data){
        var className = $(".alert-out").attr("class");
        var _this = this;
        this.sure = data.sure || function(){_this.alertHide()};
        this.cancel = data.cancel || function(){_this.alertHide()};
        this.sureBtnText = data.sureBtnText || this.sureBtnText;
        this.cancelBtnText = data.cancelBtnText || this.cancelBtnText;

        this.title = data.title || this.title;
        this.content = data.content || this.content;
        this.type = data.type || this.type;
        if(className==null||className==""&&className.indexOf(this.type)==-1){
            var alertStr = "";
            var headStr = "";
            if(this.title){
                headStr = '<div class="alert-head">'+this.title+'</div>';
            }
            if(this.type == "alert"){
                alertStr = '<div class="alert-out alert">'
                            +'<div class="alert-body">'
                                +headStr
                                +'<div class="alert-message">'
                                    +'<p class="alert-word">'+this.content+'</p>'
                                +'</div>'
                               +'<div class="alert-foot color-red flex"><div class="flex-item"><span class="sure">'+this.sureBtnText+'</span></div></div>'
                            +'</div>'
                            +'<div class="alert-mask"></div>'
                        +'</div>';
            }else if(this.type == "confirm"){
                alertStr = '<div class="alert-out confirm">'
                            +'<div class="alert-body">'
                                +headStr
                                +'<div class="alert-message">'
                                    +'<p class="alert-word">'+this.content+'</p>'
                                +'</div>'
                               +'<div class="alert-foot color-red flex"><div class="flex-item"><span class="cancel">'+this.cancelBtnText+'</span></div>'
                               +'<div class="flex-item"><span class="sure">'+this.sureBtnText+'</span></div></div>'
                            +'</div>'
                            +'<div class="alert-mask"></div>'
                        +'</div>';
            }
            // console.log(alertStr)
            $("body").append(alertStr);
        }else{
            $(".alert-out .alert-word").html(this.content);
            $(".alert-out .sure").html(this.sureBtnText);
            $(".alert-out .cancel").html(this.cancelBtnText);
        }
        _this.bindEvent();
        setTimeout(function(){
            _this.alertShow();
        },10);
    },
    bindEvent:function(){
        $(".alert-out").on("click", ".sure" , this.sure);
        $(".alert-out").on("click", ".cancel" , this.cancel);
    },
    alertShow:function(){
        $(".alert-out").show();
        $(".alert-out").addClass('alert-show');
    },
    alertHide:function(){
        this.sure = function(){};
        this.cancel = function(){};
        this.sureBtnText = "确认";
        this.cancelBtnText = "取消";

        this.title = "系统提示";
        this.content = "不知道提示啥";
        this.type = "alert";
        $(".alert-out").addClass('alert-hide').find('.alert-body').transitionEnd(function(e){
            $(".alert-out").remove();
        });
    },
    loading: function(){
        if ($("#loadingToast").length == 0) {
            var loadingStr = '<div id="loadingToast" class="dz_loading_toast" style="display: none;">' + '<div class="dz_mask_transparent11"></div>' + '<div class="dz_toast_loading small">' + '<div class="dz_loading">' + '<div class="dz_loading_leaf dz_loading_leaf_0"></div><div class="dz_loading_leaf dz_loading_leaf_1"></div><div class="dz_loading_leaf dz_loading_leaf_2"></div><div class="dz_loading_leaf dz_loading_leaf_3"></div><div class="dz_loading_leaf dz_loading_leaf_4"></div><div class="dz_loading_leaf dz_loading_leaf_5"></div><div class="dz_loading_leaf dz_loading_leaf_6"></div><div class="dz_loading_leaf dz_loading_leaf_7"></div><div class="dz_loading_leaf dz_loading_leaf_8"></div><div class="dz_loading_leaf dz_loading_leaf_9"></div><div class="dz_loading_leaf dz_loading_leaf_10"></div><div class="dz_loading_leaf dz_loading_leaf_11"></div>' + '</div>' + '</div>' + '</div>';
            $("body").append(loadingStr);
        }
        $("#loadingToast").show();
    },
    hideLoading: function(){
        $("#loadingToast").hide().remove();
    },
    showToast: function(data){
        this.content = data.content || this.content;
        this.toastTime = data.toastTime || this.toastTime;
        var toastStr = '<div class="modal-toast-content"><div class="modal-toast">'
                            +'<p class="text text-center">'+this.content+'</p>'
                        +'</div></div>';
        $("body").append(toastStr);
        $(".modal-toast-content").show().addClass('toast-show');
        setTimeout(function(){
            $(".modal-toast-content").addClass('toast-hide').find('.modal-toast').transitionEnd(function(e){
                // console.log('...')
                $(".modal-toast-content").remove();
            });
        },this.toastTime);
    },
    hideToast: function(){
        $(".modal-toast-content").remove();
    },
}

var modal = new Modal();

module.exports = {
    alert: function(data) {
        return modal.alert(data);
    },
    alertHide: function(){
        return modal.alertHide();
    },
    loading: function(){
        return modal.loading();
    },
    hideLoading: function(){
        return modal.hideLoading();
    },
    showToast: function(data){
        return modal.showToast(data);
    }
}