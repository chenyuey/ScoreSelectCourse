/**
 * Created by chenyue on 15-1-24.
 */
function extend (Child,Parent){
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = Parent.prototype;
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}