import {
  RouterLink,
  init_router
} from "./chunk-DSXM4BE5.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-KAWMYEJZ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/header/header.html
var header_default;
var init_header = __esm({
  "angular:jit:template:src/app/header/header.html"() {
    header_default = '<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #2a0000;">\n  <div class="container-fluid">\n    <a class="navbar-brand" href="#">Hotelaria</a>\n    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\n      <span class="navbar-toggler-icon"></span>\n    </button>\n    <div class="collapse navbar-collapse" id="navbarNav">\n      <ul class="navbar-nav">\n        <li class="nav-item">\n          <a class="nav-link" routerLink="/register" routerLinkActive="active">Register</a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" routerLink="/guests" routerLinkActive="active">Guests</a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" routerLink="/rooms" routerLinkActive="active">Rooms</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>';
  }
});

// angular:jit:style:src/app/header/header.css
var header_default2;
var init_header2 = __esm({
  "angular:jit:style:src/app/header/header.css"() {
    header_default2 = "/* src/app/header/header.css */\n/*# sourceMappingURL=header.css.map */\n";
  }
});

// src/app/header/header.ts
var Header;
var init_header3 = __esm({
  "src/app/header/header.ts"() {
    "use strict";
    init_tslib_es6();
    init_header();
    init_header2();
    init_core();
    init_router();
    Header = class Header2 {
    };
    Header = __decorate([
      Component({
        selector: "app-header",
        imports: [RouterLink],
        template: header_default,
        styles: [header_default2]
      })
    ], Header);
  }
});

export {
  Header,
  init_header3 as init_header
};
//# sourceMappingURL=chunk-O53LNWRE.js.map
