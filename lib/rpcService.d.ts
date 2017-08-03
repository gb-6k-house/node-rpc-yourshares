export interface RpcService {
}
export declare abstract class RPCStartup {
    private server;
    private rpc;
    private startup();
    protected abstract serverHost(): String;
    /**
     * 需要发布的对象
     *
     * @protected
     * @abstract
     * @returns {RpcService}
     * @memberof RPCStartup
     */
    protected abstract rpcClass(): RpcService;
    /**
     * 发布rpcClass类型的所有static 方法 _开头的方法不会发布
     *
     * @memberof RPCStartup
     */
    private publishAPI();
    /**
     * 启动Service
     *
     * @static
     * @returns {number}
     * @memberof RPCStartup
     */
    static main(): number;
}
