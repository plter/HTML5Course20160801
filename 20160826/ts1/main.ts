/**
 * Created by plter on 8/26/16.
 */


interface IData {
    a: number;
    b?: string;
}

function putData(d: IData) {
    console.log(d);
}

putData({a: 1});