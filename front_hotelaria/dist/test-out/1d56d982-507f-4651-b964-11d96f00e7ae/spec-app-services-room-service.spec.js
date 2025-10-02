import {
  RoomService,
  init_room_service
} from "./chunk-PZFHPLNH.js";
import "./chunk-HARR5VQV.js";
import {
  TestBed,
  init_testing
} from "./chunk-KAWMYEJZ.js";
import "./chunk-TTULUY32.js";

// src/app/services/room-service.spec.ts
init_testing();
init_room_service();
describe("RoomService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-services-room-service.spec.js.map
