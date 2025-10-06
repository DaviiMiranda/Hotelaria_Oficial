import {
  FormsModule,
  init_forms
} from "./chunk-ICBYMYOY.js";
import {
  guestService,
  init_guest_service
} from "./chunk-X5267UFS.js";
import {
  CommonModule,
  init_common
} from "./chunk-VRQBC4IO.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of
} from "./chunk-UURL62UG.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/pages/guests/guests.html
var guests_default;
var init_guests = __esm({
  "angular:jit:template:src/app/pages/guests/guests.html"() {
    guests_default = '<div class="container mt-5">\n  <h2>Guest List</h2>\n  <table class="table table-striped table-hover">\n    <thead class="table-dark">\n      <tr>\n        <th>Name</th>\n        <th>CPF</th>\n        <th>Email</th>\n        <th>Phone</th>\n        <th>Date In</th>\n        <th>Date Out</th>\n        <th>Room</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor="let guest of guests">\n        <td>{{ guest.name }}</td>\n        <td>{{ guest.cpf }}</td>\n        <td>{{ guest.email }}</td>\n        <td>{{ guest.telephone }}</td>\n        <td>{{ guest.checkInDate }}</td>\n        <td>{{ guest.checkOutDate }}</td>\n        <td>{{ guest.roomNumber }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n';
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
    init_esm();
    init_guests3();
    init_guest_service();
    var mockGuestService = jasmine.createSpyObj("guestService", ["getGuests", "addGuest", "deleteGuest"]);
    var mockGuests = [
      { id: 1, name: "Jo\xE3o Silva", cpf: "11122233344", email: "joao@email.com", telephone: "85999998888", checkInDate: "2025-10-06", checkOutDate: "2025-10-10", roomNumber: "101" },
      { id: 2, name: "Maria Souza", cpf: "55566677788", email: "maria@email.com", telephone: "85988887777", checkInDate: "2025-11-15", checkOutDate: "2025-11-20", roomNumber: "202" }
    ];
    describe("GuestsComponent", () => {
      let component;
      let fixture;
      let service;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          // O componente Guests não é standalone, então o adicionamos em 'declarations'
          // Se fosse standalone, o importaríamos no array 'imports'
          imports: [Guests],
          providers: [
            // Dizemos ao Angular para injetar nosso dublê sempre que o componente pedir o guestService
            { provide: guestService, useValue: mockGuestService }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Guests);
        component = fixture.componentInstance;
        service = TestBed.inject(guestService);
        service.getGuests.and.returnValue(of(mockGuests));
      }));
      it("deve ser criado", () => {
        expect(component).toBeTruthy();
      });
      it("deve carregar a lista de h\xF3spedes ao ser inicializado (ngOnInit)", () => {
        fixture.detectChanges();
        expect(service.getGuests).toHaveBeenCalled();
        expect(component.guests.length).toBe(2);
        expect(component.guests).toEqual(mockGuests);
      });
      it("deve chamar o servi\xE7o para adicionar um novo h\xF3spede e recarregar a lista", () => {
        const newGuest = { id: 3, name: "Carlos Pereira", checkInDate: "2025-01-05", checkOutDate: "2025-01-10", cpf: "12350218896", email: "pepepe@gmail.com", roomNumber: "101", telephone: "5863211523" };
        service.addGuest.and.returnValue(of(newGuest));
        component.addGuest(newGuest);
        expect(service.addGuest).toHaveBeenCalledWith(newGuest);
        expect(service.getGuests).toHaveBeenCalledTimes(2);
      });
      it("deve chamar o servi\xE7o para deletar um h\xF3spede e recarregar a lista", () => {
        const guestIdToDelete = 1;
        service.deleteGuest.and.returnValue(of(void 0));
        component.deleteGuest(guestIdToDelete);
        expect(service.deleteGuest).toHaveBeenCalledWith(guestIdToDelete);
        expect(service.getGuests).toHaveBeenCalledTimes(2);
      });
    });
  }
});
export default require_guests_spec();
//# sourceMappingURL=spec-app-pages-guests-guests.spec.js.map
