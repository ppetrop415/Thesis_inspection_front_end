import http from "../http-common";

class ActivitiesDataService {
    getAll() {
      return http.get("/activities");
    }

    get(slug) {
        return http.get(`/activities/${slug}`);
    }

    create(data) {
        return http.post("/activities", data);
    }
    update(id, data) {
        return http.put(`/activities/${id}`, data);
    }
            
    findByNotifyNumber(notify_number) {
        return http.get(`/activities/?search=${notify_number}`);
    }
}

export default new ActivitiesDataService();