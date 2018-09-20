pluginWebpack([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'App'
});

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Home',
	data() {
		return {
			msg: 'Olar Home',
			projetos: [{
				"id:": 1,
				"nome": "PIU Rio Branco",
				"ativo": 1,
				"autor": "devspurbanismo",
				"atualizacao": "2018-08-21 17:12:21"
			}, {
				"id:": 7,
				"nome": "PIU Anhembi",
				"ativo": 0,
				"autor": "devspurbanismo",
				"atualizacao": "2018-08-21 17:18:33"
			}]
		};
	},
	methods: {
		displayData(data) {
			let aaaa = data.slice(0, 4);
			let mm = data.slice(5, 7);
			let dd = data.slice(8, 10);
			let h = data.slice(11, 16);
			return dd + '/' + mm + '/' + aaaa + ' (' + h + ')';
		},
		ocultoClass(par) {
			if (par == 1) {
				return '';
			} else if (par == 0) {
				return 'oculto';
			}
		}
	}
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Arquivo_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_URL_vue__ = __webpack_require__(40);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Projeto',
	data() {
		return {
			arquivos: [{
				"nome": "PIU Rio Branco",
				"ativo": 1,
				"arquivos": [{
					"nome": "Diagnóstico",
					"id": 1,
					"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
					"autor": "devspurbanismo",
					"fonte": "Gestão Urbana",
					"atualizacao": "2018-08-21 18:37:28",
					"etapa": {
						"id": 2,
						"nome": "Consulta Pública Inicial"
					}
				}, {
					"nome": "Mapas",
					"id": 2,
					"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_ANEXOI_reduzido.pdf",
					"autor": "devspurbanismo",
					"fonte": "Gestão Urbana",
					"atualizacao": "2018-08-21 18:37:50",
					"etapa": {
						"id": 2,
						"nome": "Consulta Pública Inicial"
					}
				}]
			}, {
				"nome": "PIU Anhembi",
				"ativo": 1,
				"arquivos": [{
					"nome": "Ofício",
					"id": 3,
					"url": "http://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/piu-monitoramento/ANH1_Oficio.pdf",
					"autor": "devspurbanismo",
					"fonte": "PA",
					"atualizacao": "2018-08-21 19:11:38",
					"etapa": {
						"id_etapa": 1,
						"nome_etapa": "Consulta Pública Inicial"
					}
				}]
			}],
			extensaoBoxHidden: true
		};
	},
	components: {
		Arquivo: __WEBPACK_IMPORTED_MODULE_0__components_Arquivo_vue__["a" /* default */],
		URL: __WEBPACK_IMPORTED_MODULE_1__components_URL_vue__["a" /* default */]
	},
	methods: {
		etapaCollapse(evt) {
			let divEtapa = evt.target.parentNode.parentNode.parentNode;
			if (divEtapa.style.maxHeight != '40px') {
				divEtapa.style.maxHeight = '40px';
				evt.target.style.transform = 'rotate(180deg)';
			} else {
				divEtapa.style.maxHeight = '4000px';
				evt.target.style.transform = 'rotate(0deg)';
			}
		}
	}
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'Configuracoes',

    data() {
        return {};
    }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(16);

var _router2 = _interopRequireDefault(_router);

var _adminMenuFix = __webpack_require__(26);

var _adminMenuFix2 = _interopRequireDefault(_adminMenuFix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
    el: '#gu-index-admin',
    router: _router2.default,
    render: function render(h) {
        return h(_App2.default);
    }
});

// fix the admin menu for the slug "vue-app"
(0, _adminMenuFix2.default)('gu-index-admin');

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(4);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_200a6b1e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(15);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(13)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_200a6b1e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-200a6b1e", Component.options)
  } else {
    hotAPI.reload("data-v-200a6b1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "vue-backend-app" } }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-200a6b1e", esExports)
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(5);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = __webpack_require__(17);

var _Home2 = _interopRequireDefault(_Home);

var _Projeto = __webpack_require__(20);

var _Projeto2 = _interopRequireDefault(_Projeto);

var _Configuracoes = __webpack_require__(23);

var _Configuracoes2 = _interopRequireDefault(_Configuracoes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
	routes: [{
		path: '/',
		name: 'Home',
		component: _Home2.default
	}, {
		path: '/projeto',
		name: 'Projeto',
		component: _Projeto2.default
	}, {
		path: '/configuracoes',
		name: 'Configuracoes',
		component: _Configuracoes2.default
	}]
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(6);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45e83875_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(19);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-45e83875"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45e83875_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\components\\Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45e83875", Component.options)
  } else {
    hotAPI.reload("data-v-45e83875", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "home" }, [
    _c("h1", [_vm._v("Arquivos GU")]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("input", { attrs: { type: "text", placeholder: "Pesquisar..." } }),
    _vm._v(" "),
    _c("button", [_vm._v("Incluir projeto")]),
    _vm._v(" "),
    _c(
      "table",
      [
        _vm._m(1),
        _vm._v(" "),
        _vm._l(_vm.projetos, function(projeto) {
          return _c("tr", { class: _vm.ocultoClass(projeto.ativo) }, [
            _c("td", [
              _c("a", { attrs: { href: "#" } }, [_vm._v(_vm._s(projeto.nome))])
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(projeto.autor))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.displayData(projeto.atualizacao)))]),
            _vm._v(" "),
            _c("td", [
              _c("ul", [
                _c("li", [
                  projeto.ativo == 1
                    ? _c("span", [_vm._v("Disponível")])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("li", [
                  projeto.ativo != 1 ? _c("span", [_vm._v("Oculto")]) : _vm._e()
                ])
              ])
            ])
          ])
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [
      _c("p", [
        _vm._v(
          "Esta é a lista de arquivos por projeto e etapa. Clique no nome do projeto para editar sua lista."
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Para inserir os links em um post, copie o shortcode "),
        _c("code", [
          _vm._v("[tabel id=<"),
          _c("span", { staticStyle: { color: "#0073aa" } }, [
            _vm._v("número da ID")
          ]),
          _vm._v(">/]")
        ]),
        _vm._v(
          " e cole no lugar desejado. Cada lista/tabela tem um único shortcode."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", { attrs: { width: "34%" } }, [_vm._v("Projeto")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "25%" } }, [_vm._v("Autor(a)")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "25%" } }, [_vm._v("Última modificação")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "16%" } })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-45e83875", esExports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Projeto_vue__ = __webpack_require__(7);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3853e4fd_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Projeto_vue__ = __webpack_require__(22);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(21)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3853e4fd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Projeto_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3853e4fd_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Projeto_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\components\\Projeto.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3853e4fd", Component.options)
  } else {
    hotAPI.reload("data-v-3853e4fd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app-projeto" }, [
    _c("h1", [_vm._v("Arquivos GU")]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "projeto" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "etapa" }, [
        _c("div", { staticClass: "h-etapa" }, [
          _c("h3", [_vm._v("Etapa 1")]),
          _vm._v(" "),
          _c("div", { staticClass: "shortcode_expand" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "button",
              {
                on: {
                  click: function($event) {
                    _vm.etapaCollapse($event)
                  }
                }
              },
              [_vm._v("▲")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "arquivo-cont" }, [_c("Arquivo")], 1)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [
      _c("p", [
        _vm._v(
          "A partir desta tela, você consegue editar os conteúdos das listas e tabelas de URL."
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Cada linha corresponde a um link com formatos variados (PDF, DOC, KMZ, SHP etc)."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "nome" }, [
      _c("h2", [_vm._v("Plano Diretor")]),
      _vm._v(" "),
      _c("div", { staticClass: "shortcode_expand" }, [
        _c("span", [
          _vm._v("Shortcode do projeto "),
          _c("code", [_vm._v("[tabel id=1/]")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v("Shortcode da etapa "),
      _c("code", [_vm._v("[tabel id=1.1/]")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3853e4fd", esExports)
  }
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Configuracoes_vue__ = __webpack_require__(8);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26eeb9d6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Configuracoes_vue__ = __webpack_require__(25);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(24)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-26eeb9d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Configuracoes_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26eeb9d6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Configuracoes_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\components\\Configuracoes.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26eeb9d6", Component.options)
  } else {
    hotAPI.reload("data-v-26eeb9d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app-configuracoes" }, [
    _vm._v("\n    Olar app configuracoes\n")
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-26eeb9d6", esExports)
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * As we are using hash based navigation, hack fix
 * to highlight the current selected menu
 *
 * Requires jQuery
 */
function menuFix(slug) {
    var $ = jQuery;

    var menuRoot = $('#toplevel_page_' + slug);
    var currentUrl = window.location.href;
    var currentPath = currentUrl.substr(currentUrl.indexOf('admin.php'));

    menuRoot.on('click', 'a', function () {
        var self = $(this);

        $('ul.wp-submenu li', menuRoot).removeClass('current');

        if (self.hasClass('wp-has-submenu')) {
            $('li.wp-first-item', menuRoot).addClass('current');
        } else {
            self.parents('li').addClass('current');
        }
    });

    $('ul.wp-submenu a', menuRoot).each(function (index, el) {
        if ($(el).attr('href') === currentPath) {
            $(el).parent().addClass('current');
            return;
        }
    });
}

exports.default = menuFix;

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_URL_vue__ = __webpack_require__(40);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Arquivo',
	data() {
		return {
			i: 2
		};
	},
	components: {
		URL: __WEBPACK_IMPORTED_MODULE_0__components_URL_vue__["a" /* default */]
	},
	created() {},
	mounted() {},
	updated() {},
	methods: {
		charCount(txt, dest) {
			dest.innerText = txt.length;
		},
		insereUrl() {
			let base = this.$refs.urls.lastChild;
			let clone = base.cloneNode(true);
			clone.firstElementChild.innerText = "URL " + this.i;
			this.$refs.urls.appendChild(clone);
			this.i++;
		}
	}
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Arquivo_vue__ = __webpack_require__(34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15b454f2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Arquivo_vue__ = __webpack_require__(45);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Arquivo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15b454f2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Arquivo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\components\\Arquivo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15b454f2", Component.options)
  } else {
    hotAPI.reload("data-v-15b454f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Arquivo',
	data() {
		return {
			extensaoBoxShow: false
		};
	},
	methods: {
		alteraTipoDeArq() {
			this.$refs.visorTipoDeArq.innerText = document.querySelector('input[name=arquivo]:checked').value;
		}
	}
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_URL_vue__ = __webpack_require__(39);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b740449_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_URL_vue__ = __webpack_require__(47);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_URL_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b740449_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_URL_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\components\\URL.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b740449", Component.options)
  } else {
    hotAPI.reload("data-v-1b740449", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "Arquivo" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "informacoes" }, [
      _c("table", [
        _c("tr", [
          _c("td", { attrs: { width: "10%" } }, [_vm._v("Nome público")]),
          _vm._v(" "),
          _c("td", { attrs: { width: "90%" } }, [
            _c("input", {
              attrs: { type: "text" },
              on: {
                keyup: function($event) {
                  _vm.charCount($event.target.value, _vm.$refs.urlCharCount)
                }
              }
            }),
            _vm._v(" "),
            _c("span", { ref: "urlCharCount", staticClass: "charCount" }, [
              _vm._v("0")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("tbody", { ref: "urls" }, [_c("URL", [_vm._v("URL 1")])], 1),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { colspan: "2" } }, [
            _c("button", { on: { click: _vm.insereUrl } }, [
              _vm._v("Inserir mais uma URL")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("Descrição")]),
          _vm._v(" "),
          _c("td", [
            _c("textarea", {
              attrs: { name: "descricao" },
              on: {
                keyup: function($event) {
                  _vm.charCount(
                    $event.target.value,
                    _vm.$refs.descricaoCharCount
                  )
                }
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              { ref: "descricaoCharCount", staticClass: "charCount" },
              [_vm._v("0")]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("button", [_vm._v("Incluir um arquivo aqui")])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "acoes" }, [
      _c("h6", [_vm._v("Mover")]),
      _vm._v(" "),
      _c("button", { staticClass: "mover" }, [_vm._v("↑")]),
      _vm._v(" "),
      _c("button", { staticClass: "mover" }, [_vm._v("↓")]),
      _vm._v(" "),
      _c("button", { staticClass: "excluir" }, [_vm._v("Excluir")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-15b454f2", esExports)
  }
}

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("tr", { staticClass: "URL" }, [
    _c("td", [_vm._t("default")], 2),
    _vm._v(" "),
    _c("td", [
      _c("input", { attrs: { type: "text" } }),
      _vm._v(" "),
      _c("div", [
        _c(
          "span",
          {
            ref: "visorTipoDeArq",
            on: {
              click: function($event) {
                _vm.extensaoBoxShow = !_vm.extensaoBoxShow
              }
            }
          },
          [_vm._v("KML")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "extensaoBox",
            staticClass: "arquivo_extensao-box",
            class: { display: _vm.extensaoBoxShow }
          },
          [
            _vm._v("\n\t\t\t\tSelecione o tipo de arquivo "),
            _c(
              "i",
              {
                on: {
                  click: function($event) {
                    _vm.extensaoBoxShow = !_vm.extensaoBoxShow
                  }
                }
              },
              [_vm._v("×")]
            ),
            _vm._v(" "),
            _c(
              "form",
              {
                ref: "form",
                attrs: { name: "arquivo" },
                on: { click: _vm.alteraTipoDeArq }
              },
              [
                _c(
                  "label",
                  {
                    attrs: { for: "arquivo_kmz" },
                    on: {
                      click: function($event) {
                        _vm.extensaoBoxShow = !_vm.extensaoBoxShow
                      }
                    }
                  },
                  [_vm._v("KMZ")]
                ),
                _vm._v(" "),
                _c("input", {
                  attrs: {
                    type: "radio",
                    name: "arquivo",
                    value: "KMZ",
                    id: "arquivo_kmz"
                  }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    attrs: { for: "arquivo_pdf" },
                    on: {
                      click: function($event) {
                        _vm.extensaoBoxShow = !_vm.extensaoBoxShow
                      }
                    }
                  },
                  [_vm._v("PDF")]
                ),
                _vm._v(" "),
                _c("input", {
                  attrs: {
                    type: "radio",
                    name: "arquivo",
                    value: "PDF",
                    id: "arquivo_pdf"
                  }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    attrs: { for: "arquivo_kml" },
                    on: {
                      click: function($event) {
                        _vm.extensaoBoxShow = !_vm.extensaoBoxShow
                      }
                    }
                  },
                  [_vm._v("KML")]
                ),
                _vm._v(" "),
                _c("input", {
                  attrs: {
                    type: "radio",
                    name: "arquivo",
                    value: "KML",
                    id: "arquivo_kml",
                    checked: ""
                  }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    attrs: { for: "arquivo_shp" },
                    on: {
                      click: function($event) {
                        _vm.extensaoBoxShow = !_vm.extensaoBoxShow
                      }
                    }
                  },
                  [_vm._v("SHP")]
                ),
                _vm._v(" "),
                _c("input", {
                  attrs: {
                    type: "radio",
                    name: "arquivo",
                    value: "SHP",
                    id: "arquivo_shp"
                  }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    attrs: { for: "arquivo_doc" },
                    on: {
                      click: function($event) {
                        _vm.extensaoBoxShow = !_vm.extensaoBoxShow
                      }
                    }
                  },
                  [_vm._v("DOC")]
                ),
                _vm._v(" "),
                _c("input", {
                  attrs: {
                    type: "radio",
                    name: "arquivo",
                    value: "DOC",
                    id: "arquivo_doc"
                  }
                })
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1b740449", esExports)
  }
}

/***/ })
],[9]);