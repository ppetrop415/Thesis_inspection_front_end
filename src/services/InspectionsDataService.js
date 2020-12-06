import http from "../http-common";

class InspectionsDataService {
    getAll() {
      return http.get("/inspections");
    }

    get(id) {
        return http.get(`/inspections/${id}`);
    }

    create(data) {
        return http.post("/inspections", data);
    }
    update(id, data) {
        return http.put(`/inspections/${id}`, data);
    }
            
    findByVat(vat) {
        return http.get(`/inspections/?search=${vat}`);
    }
}

export default new InspectionsDataService();