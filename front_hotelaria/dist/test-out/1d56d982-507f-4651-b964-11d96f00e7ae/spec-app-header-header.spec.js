import {
  Header,
  init_header
} from "./chunk-O53LNWRE.js";
import "./chunk-DSXM4BE5.js";
import "./chunk-HARR5VQV.js";
import "./chunk-E5OVYINP.js";
import "./chunk-QHLH5GBT.js";
import {
  TestBed,
  init_testing
} from "./chunk-KAWMYEJZ.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/header/header.spec.ts
var require_header_spec = __commonJS({
  "src/app/header/header.spec.ts"(exports) {
    init_testing();
    init_header();
    describe("Header", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Header]
        }).compileComponents();
        fixture = TestBed.createComponent(Header);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_header_spec();
//# sourceMappingURL=spec-app-header-header.spec.js.map
