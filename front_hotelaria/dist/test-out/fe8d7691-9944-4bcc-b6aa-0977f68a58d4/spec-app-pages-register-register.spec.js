import {
  Router,
  init_router
} from "./chunk-DSXM4BE5.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  guestService,
  init_forms,
  init_guest_service
} from "./chunk-7LZWB35Q.js";
import "./chunk-HARR5VQV.js";
import "./chunk-E5OVYINP.js";
import "./chunk-QHLH5GBT.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  throwError
} from "./chunk-KAWMYEJZ.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/pages/register/register.html
var register_default;
var init_register = __esm({
  "angular:jit:template:src/app/pages/register/register.html"() {
    register_default = '<div class="container mt-5">\n  <div class="card">\n    <div class="card-header">\n      <h2 class="text-center">Guest Registration</h2>\n    </div>\n    <div class="card-body">\n      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">\n        <div class="row">\n          <div class="col-md-6 mb-3">\n            <label for="checkin" class="form-label">Check-in Date</label>\n            <input type="date" id="checkin" class="form-control" formControlName="checkin">\n          </div>\n          <div class="col-md-6 mb-3">\n            <label for="checkout" class="form-label">Check-out Date</label>\n            <input type="date" id="checkout" class="form-control" formControlName="checkout">\n          </div>\n        </div>\n        <div class="mb-3">\n          <label for="name" class="form-label">Name</label>\n          <input type="text" id="name" class="form-control" formControlName="name">\n        </div>\n        <div class="row">\n          <div class="col-md-6 mb-3">\n            <label for="telephone" class="form-label">Telephone</label>\n            <input type="tel" id="telephone" class="form-control" formControlName="telephone">\n          </div>\n          <div class="col-md-6 mb-3">\n            <label for="email" class="form-label">Email</label>\n            <input type="email" id="email" class="form-control" formControlName="email">\n          </div>\n        </div>\n        <div class="row">\n          <div class="col-md-6 mb-3">\n            <label for="roomType" class="form-label">Room Type</label>\n            <select id="roomType" class="form-select" formControlName="roomType">\n              <option value="normal">Normal</option>\n              <option value="plus">Plus</option>\n              <option value="max">Max</option>\n              <option value="presidential_suite">Presidential Suite</option>\n            </select>\n          </div>\n          <div class="col-md-6 mb-3">\n            <label for="cpf" class="form-label">CPF</label>\n            <input type="text" id="cpf" class="form-control" formControlName="cpf" placeholder="11 digits">\n          </div>\n        </div>\n        <div class="d-grid">\n          <button type="submit" class="btn btn-primary" [disabled]="!registerForm.valid">Register</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n';
  }
});

// angular:jit:style:src/app/pages/register/register.css
var register_default2;
var init_register2 = __esm({
  "angular:jit:style:src/app/pages/register/register.css"() {
    register_default2 = "/* src/app/pages/register/register.css */\n/*# sourceMappingURL=register.css.map */\n";
  }
});

// src/app/pages/register/register.ts
var Register;
var init_register3 = __esm({
  "src/app/pages/register/register.ts"() {
    "use strict";
    init_tslib_es6();
    init_register();
    init_register2();
    init_core();
    init_forms();
    init_guest_service();
    init_router();
    Register = class Register2 {
      fb;
      guestService;
      router;
      registerForm;
      constructor(fb, guestService2, router) {
        this.fb = fb;
        this.guestService = guestService2;
        this.router = router;
        this.registerForm = this.fb.group({
          checkin: ["", Validators.required],
          checkout: ["", Validators.required],
          name: ["", Validators.required],
          telephone: ["", Validators.required],
          roomType: ["", Validators.required],
          email: ["", [Validators.required, Validators.email]],
          cpf: ["", [Validators.required, Validators.pattern(/^\d{11}$/)]]
        });
      }
      onSubmit() {
        if (this.registerForm.valid) {
          const guestData = this.registerForm.value;
          this.guestService.Register(guestData).subscribe({
            // Callback para SUCESSO
            next: (response) => {
              console.log("H\xF3spede registrado com sucesso!", response);
              alert("H\xF3spede registrado com sucesso!");
              this.router.navigate(["/guests"]);
            },
            // Callback para ERRO
            error: (err) => {
              console.error("Erro ao registrar h\xF3spede:", err);
              alert("N\xE3o foi poss\xEDvel registrar o h\xF3spede. Tente novamente.");
            }
          });
        } else {
          console.error("Formul\xE1rio inv\xE1lido. Por favor, corrija os campos.");
        }
      }
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: guestService },
        { type: Router }
      ];
    };
    Register = __decorate([
      Component({
        selector: "app-register",
        imports: [ReactiveFormsModule],
        template: register_default,
        styles: [register_default2]
      })
    ], Register);
  }
});

// src/app/pages/register/register.spec.ts
var require_register_spec = __commonJS({
  "src/app/pages/register/register.spec.ts"(exports) {
    init_testing();
    init_forms();
    init_router();
    init_esm();
    init_register3();
    init_guest_service();
    describe("Register Component", () => {
      let component;
      let fixture;
      let mockGuestService;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockGuestService = jasmine.createSpyObj("guestService", ["Register"]);
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, Register],
          providers: [
            FormBuilder,
            { provide: guestService, useValue: mockGuestService },
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Register);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("should initialize the form with required fields", () => {
        expect(component.registerForm).toBeDefined();
        const formControls = component.registerForm.controls;
        expect(formControls["checkin"]).toBeDefined();
        expect(formControls["checkout"]).toBeDefined();
        expect(formControls["name"]).toBeDefined();
        expect(formControls["telephone"]).toBeDefined();
        expect(formControls["roomType"]).toBeDefined();
        expect(formControls["email"]).toBeDefined();
        expect(formControls["cpf"]).toBeDefined();
      });
      it("should make the form invalid when empty", () => {
        expect(component.registerForm.valid).toBeFalsy();
      });
      it("should make the form valid when all fields are filled correctly", () => {
        component.registerForm.setValue({
          checkin: "2024-01-01",
          checkout: "2024-01-05",
          name: "John Doe",
          telephone: "1234567890",
          roomType: "single",
          email: "john.doe@example.com",
          cpf: "12345678901"
        });
        expect(component.registerForm.valid).toBeTruthy();
      });
      it("should have an invalid email field if the email format is wrong", () => {
        const emailControl = component.registerForm.get("email");
        emailControl?.setValue("invalid-email");
        expect(emailControl?.valid).toBeFalsy();
      });
      it("should have an invalid cpf field if the cpf pattern is wrong", () => {
        const cpfControl = component.registerForm.get("cpf");
        cpfControl?.setValue("123");
        expect(cpfControl?.valid).toBeFalsy();
      });
      describe("onSubmit", () => {
        beforeEach(() => {
          spyOn(window, "alert");
        });
        it("should not call guestService.Register if the form is invalid", () => {
          component.onSubmit();
          expect(mockGuestService.Register).not.toHaveBeenCalled();
        });
        it("should call guestService.Register with form data if the form is valid", () => {
          const guestData = {
            checkin: "2024-01-01",
            checkout: "2024-01-05",
            name: "John Doe",
            telephone: "1234567890",
            roomType: "single",
            email: "john.doe@example.com",
            cpf: "12345678901"
          };
          component.registerForm.setValue(guestData);
          mockGuestService.Register.and.returnValue(of({}));
          component.onSubmit();
          expect(mockGuestService.Register).toHaveBeenCalledWith(guestData);
        });
        it("should show success alert and navigate on successful registration", () => {
          component.registerForm.setValue({
            checkin: "2024-01-01",
            checkout: "2024-01-05",
            name: "John Doe",
            telephone: "1234567890",
            roomType: "single",
            email: "john.doe@example.com",
            cpf: "12345678901"
          });
          mockGuestService.Register.and.returnValue(of({ success: true }));
          component.onSubmit();
          expect(window.alert).toHaveBeenCalledWith("H\xF3spede registrado com sucesso!");
          expect(mockRouter.navigate).toHaveBeenCalledWith(["/guests"]);
        });
        it("should show error alert on failed registration", () => {
          component.registerForm.setValue({
            checkin: "2024-01-01",
            checkout: "2024-01-05",
            name: "John Doe",
            telephone: "1234567890",
            roomType: "single",
            email: "john.doe@example.com",
            cpf: "12345678901"
          });
          mockGuestService.Register.and.returnValue(throwError(() => new Error("Failed registration")));
          component.onSubmit();
          expect(window.alert).toHaveBeenCalledWith("N\xE3o foi poss\xEDvel registrar o h\xF3spede. Tente novamente.");
        });
      });
    });
  }
});
export default require_register_spec();
//# sourceMappingURL=spec-app-pages-register-register.spec.js.map
