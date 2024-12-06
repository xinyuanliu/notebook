/**
 * 
 */

type JSTypeMap = {
    string: string;
    number: number;
    boolean: boolean;
    null: null;
    undefined: undefined;
    object: object;
    symbol: symbol;
    bigint: bigint;
}

type JSTypes = keyof JSTypeMap;

type Transfor<T extends JSTypes[]> = {
    [P in keyof T]: JSTypeMap[T[P]];
}; 

declare function add<T extends JSTypes[]>(...args: [...T, (...args: Transfor<T>) => any]): any;

add('string', 'number', () => console.log());