export interface UseMountExistBase {
    /** true | 如果为true，在第一次启用时才真正挂载内容 */
    mountOnEnter?: boolean;
    /** false | 是否在关闭时卸载内容 */
    unmountOnExit?: boolean;
}
export interface UseMountExistOption extends UseMountExistBase {
    /** 当前显示状态 */
    toggle: boolean;
    /**
     * 延迟设置非mount状态, 单位ms,
     * - 用于在内容包含动画时，在动画结束后在卸载内容
     * - 此值不用必须精准匹配动画时间，只要大于动画时间即可
     * */
    exitDelay?: number;
}
/**
 * 用于便捷的实现mountOnEnter、unmountOnExit接口
 * */
export declare function useMountExist({ toggle, mountOnEnter, unmountOnExit, exitDelay, }: UseMountExistOption): readonly [boolean];
//# sourceMappingURL=useMountExist.d.ts.map