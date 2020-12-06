import http from "../http-common";

const END_POINT = 'businesses/'

export default {
    getAll() {return http.get(END_POINT)},
    get(slug) {return http.get(`${END_POINT}${slug}`)},
    create(data) {return http.post(END_POINT, data)},
    update(id, data) {return http.put(`${END_POINT}${id}`, data)},
    findByVat(vat) {return http.get(`${END_POINT}?search=${vat}`)}
}
