"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*****************************************
** 尧尚信息科技(wwww.yourshares.cn)
** auth: liukai
** date: 2017/7
** ver : 1.0
** desc:  扩展string丢下方法
******************************************/
//扩展String 需要先声明String为内部模块，不然无法编译， 参照https://basarat.gitbooks.io/typescript/content/docs/types/lib.d.ts.html
// Ensure this is treated as a module
exports.default = {};
String.prototype.hasSuffix = function (suffix) {
    var str = this;
    return str && str.indexOf(suffix, str.length - suffix.length) !== -1;
};
String.prototype.hasPrefix = function (prefix) {
    var str = this;
    return str.slice(0, prefix.length) == prefix;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nK0V4dGVuc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvcmUvU3RyaW5nK0V4dGVuc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7MkNBTTJDO0FBQzNDLDZHQUE2RztBQUM3RyxxQ0FBcUM7QUFDckMsa0JBQWUsRUFBRSxDQUFBO0FBUWpCLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVUsTUFBYztJQUNuRCxJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUM7SUFDdkIsTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN2RSxDQUFDLENBQUE7QUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFVLE1BQWM7SUFDbkQsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDO0lBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDO0FBQy9DLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiog5bCn5bCa5L+h5oGv56eR5oqAKHd3d3cueW91cnNoYXJlcy5jbilcbioqIGF1dGg6IGxpdWthaVxuKiogZGF0ZTogMjAxNy83XG4qKiB2ZXIgOiAxLjBcbioqIGRlc2M6ICDmianlsZVzdHJpbmfkuKLkuIvmlrnms5VcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8v5omp5bGVU3RyaW5nIOmcgOimgeWFiOWjsOaYjlN0cmluZ+S4uuWGhemDqOaooeWdl++8jOS4jeeEtuaXoOazlee8luivke+8jCDlj4LnhadodHRwczovL2Jhc2FyYXQuZ2l0Ym9va3MuaW8vdHlwZXNjcmlwdC9jb250ZW50L2RvY3MvdHlwZXMvbGliLmQudHMuaHRtbFxuLy8gRW5zdXJlIHRoaXMgaXMgdHJlYXRlZCBhcyBhIG1vZHVsZVxuZXhwb3J0IGRlZmF1bHQge31cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFN0cmluZyB7XG4gICAgaGFzUHJlZml4KHN0cjogU3RyaW5nKTogYm9vbGVhblxuICAgIGhhc1N1ZmZpeChzdWZmaXg6IFN0cmluZyk6IGJvb2xlYW5cbiAgfVxufVxuXG5TdHJpbmcucHJvdG90eXBlLmhhc1N1ZmZpeCA9IGZ1bmN0aW9uIChzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICB2YXIgc3RyOiBzdHJpbmcgPSB0aGlzO1xuICByZXR1cm4gc3RyICYmIHN0ci5pbmRleE9mKHN1ZmZpeCwgc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcbn1cblN0cmluZy5wcm90b3R5cGUuaGFzUHJlZml4ID0gZnVuY3Rpb24gKHByZWZpeDogc3RyaW5nKSB7XG4gIHZhciBzdHI6IHN0cmluZyA9IHRoaXM7XG4gIHJldHVybiBzdHIuc2xpY2UoMCwgcHJlZml4Lmxlbmd0aCkgPT0gcHJlZml4O1xufVxuXG5cbiJdfQ==