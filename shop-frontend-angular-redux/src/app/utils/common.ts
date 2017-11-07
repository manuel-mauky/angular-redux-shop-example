import {IdMap} from '../model/common-types';


type T = {
    id: string
}

export function arrayToIdMap(arr: Array<T>): IdMap<T> {
    let map: IdMap<T> = {};

    arr.forEach(element => {
        map[element.id] = element;
    })

    return map;
}
