"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hprose = require("hprose");
class RPCStartup {
    startup() {
        this.server = hprose.Server.create(this.serverHost());
        this.rpc = this.rpcClass();
        this.publishAPI();
        this.server.start();
    }
    /**
     * 发布rpcClass类型的所有static 方法 _开头的方法不会发布
     *
     * @memberof RPCStartup
     */
    publishAPI() {
        if (this.rpc != null) {
            let rpc = this.rpc;
            Object.getOwnPropertyNames(rpc).forEach(rpcFuncName => {
                if (typeof rpc[rpcFuncName] === 'function' && !rpcFuncName.hasPrefix('_')) {
                    console.log(rpc['name'], '发布接口 ' + rpcFuncName);
                    this.server.addFunction(rpc[rpcFuncName], rpcFuncName);
                }
            });
        }
    }
    /**
     * 启动Service
     *
     * @static
     * @returns {number}
     * @memberof RPCStartup
     */
    static main() {
        let rpc = Object.create(this.prototype);
        rpc.startup();
        //我们可以uncaughtException来全局捕获未捕获的Error，同时你还可以将此函数的调用栈打印出来，捕获之后可以有效防止node进程退出
        //我们也可以用node-forever 提供了守护的功能和LOG日志记录功能。
        process.on('uncaughtException', function (err) {
            //打印出错误
            //console.log(err);
            //打印出错误的调用栈方便调试
            console.error(JSON.stringify(err.stack));
        });
        return 0;
    }
}
exports.RPCStartup = RPCStartup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnBjU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvcmUvcnBjU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBLGlDQUFrQztBQU9sQztJQUlZLE9BQU87UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFhRDs7OztPQUlHO0lBQ0ssVUFBVTtRQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFBO1lBQ2xCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVztnQkFDL0MsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQTtvQkFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFBO2dCQUMxRCxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxJQUFJO1FBQ2QsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ2IsMkVBQTJFO1FBQzNFLHdDQUF3QztRQUN4QyxPQUFPLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFVBQVUsR0FBRztZQUN6QyxPQUFPO1lBQ1AsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztDQUNKO0FBMURELGdDQTBEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qKiDlsKflsJrkv6Hmga/np5HmioAod3d3dy55b3Vyc2hhcmVzLmNuKVxuKiogYXV0aDogbGl1a2FpXG4qKiBkYXRlOiAyMDE3LzdcbioqIHZlciA6IDEuMFxuKiogZGVzYzogIFJQQ+WPkeW4g1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZGVjbGFyZSB2YXIgcHJvY2Vzc1xuaW1wb3J0IGhwcm9zZSA9IHJlcXVpcmUoJ2hwcm9zZScpO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUnBjU2VydmljZSB7XG5cbn1cblxuZXhwb3J0ICBhYnN0cmFjdCBjbGFzcyBSUENTdGFydHVwIHtcbiAgICBwcml2YXRlIHNlcnZlcjogYW55XG4gICAgcHJpdmF0ZSBycGM6IFJwY1NlcnZpY2VcblxuICAgIHByaXZhdGUgc3RhcnR1cCgpIHtcbiAgICAgICAgdGhpcy5zZXJ2ZXIgPSBocHJvc2UuU2VydmVyLmNyZWF0ZSh0aGlzLnNlcnZlckhvc3QoKSk7XG4gICAgICAgIHRoaXMucnBjID0gdGhpcy5ycGNDbGFzcygpXG4gICAgICAgIHRoaXMucHVibGlzaEFQSSgpO1xuICAgICAgICB0aGlzLnNlcnZlci5zdGFydCgpO1xuICAgIH1cbiAgICAvL+acjeWKoeWZqOWcsOWdgO+8jOWtkOexu+W/hemhu+WunueOsFxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBzZXJ2ZXJIb3N0KCk6IFN0cmluZ1xuICAgIC8qKlxuICAgICAqIOmcgOimgeWPkeW4g+eahOWvueixoSBcbiAgICAgKiBcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHJldHVybnMge1JwY1NlcnZpY2V9IFxuICAgICAqIEBtZW1iZXJvZiBSUENTdGFydHVwXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJwY0NsYXNzKCk6IFJwY1NlcnZpY2VcblxuICAgIC8qKlxuICAgICAqIOWPkeW4g3JwY0NsYXNz57G75Z6L55qE5omA5pyJc3RhdGljIOaWueazlSBf5byA5aS055qE5pa55rOV5LiN5Lya5Y+R5biDXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIFJQQ1N0YXJ0dXBcbiAgICAgKi9cbiAgICBwcml2YXRlIHB1Ymxpc2hBUEkoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnJwYyAhPSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgcnBjID0gdGhpcy5ycGNcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHJwYykuZm9yRWFjaChycGNGdW5jTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBycGNbcnBjRnVuY05hbWVdID09PSAnZnVuY3Rpb24nICYmICFycGNGdW5jTmFtZS5oYXNQcmVmaXgoJ18nKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJwY1snbmFtZSddLCAn5Y+R5biD5o6l5Y+jICcgKyBycGNGdW5jTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXIuYWRkRnVuY3Rpb24ocnBjW3JwY0Z1bmNOYW1lXSwgcnBjRnVuY05hbWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDlkK/liqhTZXJ2aWNlXG4gICAgICogXG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFxuICAgICAqIEBtZW1iZXJvZiBSUENTdGFydHVwXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBtYWluKCk6IG51bWJlciB7XG4gICAgICAgIGxldCBycGMgPSBPYmplY3QuY3JlYXRlKHRoaXMucHJvdG90eXBlKTtcbiAgICAgICAgcnBjLnN0YXJ0dXAoKVxuICAgICAgICAvL+aIkeS7rOWPr+S7pXVuY2F1Z2h0RXhjZXB0aW9u5p2l5YWo5bGA5o2V6I635pyq5o2V6I6355qERXJyb3LvvIzlkIzml7bkvaDov5jlj6/ku6XlsIbmraTlh73mlbDnmoTosIPnlKjmoIjmiZPljbDlh7rmnaXvvIzmjZXojrfkuYvlkI7lj6/ku6XmnInmlYjpmLLmraJub2Rl6L+b56iL6YCA5Ye6XG4gICAgICAgIC8v5oiR5Lus5Lmf5Y+v5Lul55Sobm9kZS1mb3JldmVyIOaPkOS+m+S6huWuiOaKpOeahOWKn+iDveWSjExPR+aXpeW/l+iusOW9leWKn+iDveOAglxuICAgICAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIC8v5omT5Y2w5Ye66ZSZ6K+vXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAvL+aJk+WNsOWHuumUmeivr+eahOiwg+eUqOagiOaWueS+v+iwg+ivlVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihKU09OLnN0cmluZ2lmeShlcnIuc3RhY2spKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbiJdfQ==