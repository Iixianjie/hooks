import { isDom } from '@lxjx/utils';
/**
 * 依次从target、target.current、ref.current取值，只要有任意一个为dom元素则返回
 * 传入dom时原样返回，传入包含dom对象的ref时返回current，否则返回undefined
 * */
export function getRefDomOrDom(target, ref) {
    if (isDom(target))
        return target;
    if (target && isDom(target.current))
        return target.current;
    if (ref && isDom(ref.current))
        return ref.current;
    return undefined;
}
