import Vue from 'vue'

let macbookHOST = 'http://alexs-macbook-pro.local';
let localHOST = 'http://localhost';

export function getData(){
    return Vue.http.get(localHOST+':3000/questions');
}

export function saveData(data) {
    return Vue.http.post(localHOST+':3000/', data);
}