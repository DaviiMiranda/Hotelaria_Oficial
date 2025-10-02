import {
  RoomService,
  init_room_service
} from "./chunk-PZFHPLNH.js";
import "./chunk-HARR5VQV.js";
import {
  CommonModule,
  init_common
} from "./chunk-QHLH5GBT.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-KAWMYEJZ.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/pages/rooms/rooms.html
var rooms_default;
var init_rooms = __esm({
  "angular:jit:template:src/app/pages/rooms/rooms.html"() {
    rooms_default = `<div class="container mt-5">
  <h2>Room List</h2>
  <table class="table table-striped table-hover">
    <thead class="table-dark">
      <tr>
        <th>Room Number</th>
        <th>Type</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let room of Rooms">
        <td>{{ room.number }}</td>
        <td>{{ room.type }}</td>
        <td>{{ room.available ? 'Available' : 'Unavailable' }}</td>
      </tr>
    </tbody>
  </table>
</div>
`;
  }
});

// angular:jit:style:src/app/pages/rooms/rooms.css
var rooms_default2;
var init_rooms2 = __esm({
  "angular:jit:style:src/app/pages/rooms/rooms.css"() {
    rooms_default2 = "/* src/app/pages/rooms/rooms.css */\n/*# sourceMappingURL=rooms.css.map */\n";
  }
});

// src/app/pages/rooms/rooms.ts
var Rooms;
var init_rooms3 = __esm({
  "src/app/pages/rooms/rooms.ts"() {
    "use strict";
    init_tslib_es6();
    init_rooms();
    init_rooms2();
    init_core();
    init_common();
    init_room_service();
    Rooms = class Rooms2 {
      roomService;
      Rooms = [];
      constructor(roomService) {
        this.roomService = roomService;
      }
      ngOnInit() {
        this.loadRooms();
      }
      loadRooms() {
        this.roomService.getRooms().subscribe((data) => {
          this.Rooms = data;
          console.log(data);
        });
      }
      addRoom(newRoom) {
        this.roomService.addRoom(newRoom).subscribe(() => {
          this.loadRooms();
        });
      }
      addGuest(newGuest) {
        this.roomService.addRoom(newGuest).subscribe(() => {
          this.loadRooms();
        });
      }
      deleteGuest(Id) {
        this.roomService.deleteRoom(Id).subscribe(() => {
          this.loadRooms();
        });
      }
      static ctorParameters = () => [
        { type: RoomService }
      ];
    };
    Rooms = __decorate([
      Component({
        selector: "app-rooms",
        imports: [CommonModule],
        template: rooms_default,
        styles: [rooms_default2]
      })
    ], Rooms);
  }
});

// src/app/pages/rooms/rooms.spec.ts
var require_rooms_spec = __commonJS({
  "src/app/pages/rooms/rooms.spec.ts"(exports) {
    init_testing();
    init_rooms3();
    describe("Rooms", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Rooms]
        }).compileComponents();
        fixture = TestBed.createComponent(Rooms);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_rooms_spec();
//# sourceMappingURL=spec-app-pages-rooms-rooms.spec.js.map
