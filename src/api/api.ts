const BASE_URL = 'https://books-api.nomadcoders.workers.dev';

export function getList(){
  return fetch(`${BASE_URL}/lists`).then(res => res.json());
}

export function getInfo(name: string){
  return fetch(`${BASE_URL}/list?name=${name}`).then(res => res.json());
}