import http from "../http-common";

class BranchstoreDataService {
    getAll() {
      return http.get("/branchstores");
    }

    get(id) {
        return http.get(`/branchstores/${id}`);
    }

    create(data) {
        return http.post("/branchstores", data);
    }
    update(id, data) {
        return http.put(`/branchstores/${id}`, data);
    }
            
    findByNotifyNumber(notify_number) {
        return http.get(`/branchstores/?search=${notify_number}`);
    }
}

export default new BranchstoreDataService();