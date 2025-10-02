import {
  HttpClient,
  init_http
} from "./chunk-HGCYRJY6.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-UURL62UG.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/services/room-service.ts
var RoomService;
var init_room_service = __esm({
  "src/app/services/room-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    RoomService = class RoomService2 {
      http;
      apiUrl = "http://localhost:8080/api/rooms";
      constructor(http) {
        this.http = http;
      }
      getRooms() {
        return this.http.get(this.apiUrl);
      }
      getRoomById(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
      }
      addRoom(room) {
        return this.http.post(this.apiUrl, room);
      }
      updateRoom(id, available) {
        return this.http.put(`${this.apiUrl}/${id}`, { available });
      }
      deleteRoom(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    RoomService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], RoomService);
  }
});

export {
  RoomService,
  init_room_service
};
//# sourceMappingURL=chunk-JNI5L7FI.js.map
