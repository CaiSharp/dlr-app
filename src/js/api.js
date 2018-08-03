import Vue from 'vue'

let macbookHOST = 'http://alexs-macbook-pro.local';
let localHOST = 'http://localhost';
let HOST = macbookHOST;

export function getData(){
    return Vue.http.get(HOST+':3000/questions');
}

export function saveData(data) {
    return Vue.http.post(HOST+':3000/', data);
}