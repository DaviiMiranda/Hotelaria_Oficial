import {
  FormsModule,
  guestService,
  init_forms,
  init_guest_service
} from "./chunk-7LZWB35Q.js";
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

// angular:jit:template:src/app/pages/guests/guests.html
var guests_default;
var init_guests = __esm({
  "angular:jit:template:src/app/pages/guests/guests.html"() {
    guests_default = '<div class="container mt-5">\n  <h2>Guest List</h2>\n  <table class="table table-striped table-hover">\n    <thead class="table-dark">\n      <tr>\n        <th>Name</th>\n        <th>CPF</th>\n        <th>Email</th>\n        <th>Phone</th>\n        <th>Date In</th>\n        <th>Date Out</th>\n        <th>Room</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor="let guest of guests">\n        <td>{{ guest.name }}</td>\n        <td>{{ guest.cpf }}</td>\n        <td>{{ guest.email }}</td>\n        <td>{{ guest.phone }}</td>\n        <td>{{ guest.dateIn }}</td>\n        <td>{{ guest.dateOut }}</td>\n        <td>{{ guest.room }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n';
  }
});

// angular:jit:style:src/app/pages/guests/guests.css
var guests_default2;
var init_guests2 = __esm({
  "angular:jit:style:src/app/pages/guests/guests.css"() {
    guests_default2 = "/* src/app/pages/guests/guests.css */\n/*# sourceMappingURL=guests.css.map */\n";
  }
});

// src/app/pages/guests/guests.ts
var Guests;
var init_guests3 = __esm({
  "src/app/pages/guests/guests.ts"() {
    "use strict";
    init_tslib_es6();
    init_guests();
    init_guests2();
    init_core();
    init_common();
    init_guest_service();
    init_forms();
    Guests = class Guests2 {
      guestService;
      guests = [];
      constructor(guestService2) {
        this.guestService = guestService2;
      }
      ngOnInit() {
        this.loadGuests();
      }
      loadGuests() {
        this.guestService.getGuests().subscribe((data) => {
          this.guests = data;
          console.log(data);
        });
      }
      addGuest(newGuest) {
        this.guestService.addGuest(newGuest).subscribe(() => {
          this.loadGuests();
        });
      }
      deleteGuest(guestId) {
        this.guestService.deleteGuest(guestId).subscribe(() => {
          this.loadGuests();
        });
      }
      static ctorParameters = () => [
        { type: guestService }
      ];
    };
    Guests = __decorate([
      Component({
        selector: "app-guests",
        imports: [CommonModule, FormsModule],
        template: guests_default,
        styles: [guests_default2]
      })
    ], Guests);
  }
});

// src/app/pages/guests/guests.spec.ts
var require_guests_spec = __commonJS({
  "src/app/pages/guests/guests.spec.ts"(exports) {
    init_testing();
    init_guests3();
    describe("Guests", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Guests]
        }).compileComponents();
        fixture = TestBed.createComponent(Guests);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_guests_spec();
//# sourceMappingURL=spec-app-pages-guests-guests.spec.js.map
