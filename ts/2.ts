/**
 * 
 */

type JSTypeMap = {
    string: string;
    number: number;
}

type JSTypes = keyof JSTypeMap;

type Transfor<T extends JSTypes[]> = {
    [P in keyof T]: JSTypeMap[T[P]];
}; 

declare function add<T extends JSTypes[]>(...args: [...T, (...args: Transfor<T>) => any]): any;

add('string', 'number', () => console.log());