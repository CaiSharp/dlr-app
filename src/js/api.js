import Vue from 'vue'

export function getData(){
    return Vue.http.get('http://localhost:3000/questions');
}

export function saveData(data) {
    return Vue.http.post('http://localhost:3000/', data);
}