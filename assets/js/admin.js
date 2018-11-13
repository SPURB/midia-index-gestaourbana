pluginWebpack([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'App',
	computed: {
		luzToggle() {
			return this.$store.state.apagaLuz;
		}
	},
	mounted() {
		this.$store.dispatch('FETCH_PROJETOS');
	},
	watch: {
		'$route'(to) {
			this.$store.dispatch('FETCH_INFO_PROJETO', to.params.id);
		}
	}
});

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AdicionarProjeto_vue__ = __webpack_require__(10);
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
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Home',
	components: {
		AdicionarProjeto: __WEBPACK_IMPORTED_MODULE_0__components_AdicionarProjeto_vue__["default"]
	},
	computed: {
		projetos: {
			get() {
				return this.$store.state.projetos;
			}
			// set(){ this.$store.... }
		},
		abreAddProjetoBox() {
			return this.$store.state.addProjetoBox;
		}
	},
	methods: {
		goToProjeto(pathId) {
			return '/projeto/' + pathId;
		},
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
		},
		ativoToggle(incomeId) {
			this.$store.commit('ativoToggle', incomeId);
		},
		copiaSlug(evt) {
			navigator.clipboard.writeText(evt.target.innerText);
		},
		abreNovoProjeto() {
			this.$store.commit('abreAdicionarProjetoBox');
			this.$store.commit('luzToggle');
		}
	}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdicionarProjeto_vue__ = __webpack_require__(11);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_68ef0786_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdicionarProjeto_vue__ = __webpack_require__(39);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(38)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-68ef0786"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdicionarProjeto_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_68ef0786_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdicionarProjeto_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\components\\AdicionarProjeto.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ef0786", Component.options)
  } else {
    hotAPI.reload("data-v-68ef0786", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 11 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Projeto',
	data() {
		return {};
	},
	components: {},
	methods: {
		fechaNovoProjetoBox() {
			this.$store.commit('abreAdicionarProjetoBox');
			this.$store.commit('luzToggle');
		},
		copiaSlug(evt) {
			navigator.clipboard.writeText(evt.target.innerText);
		}
	}
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Etapa_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AdicionarEtapa_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Modal_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_projetoEtapa__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_projetoEtapa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mixins_projetoEtapa__);
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
	name: 'Projeto',
	mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_projetoEtapa___default.a],
	data() {
		return {
			etapasInput: [{ index: 0 }],
			etapaCounter: 1,
			etapas: [],
			nProjetos: []
		};
	},
	computed: {
		projeto() {
			return this.$store.state.projeto;
		},
		abreAdicionarEtapa() {
			return this.$store.state.addEtapaBox;
		}
	},
	components: {
		Etapa: __WEBPACK_IMPORTED_MODULE_0__components_Etapa_vue__["a" /* default */],
		AdicionarEtapa: __WEBPACK_IMPORTED_MODULE_1__components_AdicionarEtapa_vue__["a" /* default */],
		Modal: __WEBPACK_IMPORTED_MODULE_2__components_Modal_vue__["a" /* default */]
	},
	methods: {
		insereEtapa() {
			this.$store.commit('abreAdicionarEtapaBox');
			this.$store.commit('luzToggle');
		}
	}
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuedraggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AdicionarArquivo_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_EditarArquivo_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_projetoEtapa__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_projetoEtapa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mixins_projetoEtapa__);
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
	name: 'Etapa',
	mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_projetoEtapa___default.a],
	props: {
		id: {
			type: Number,
			required: true
		},
		idProjeto: {
			type: Number,
			required: true
		},
		arquivos: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			// idArquivo: undefined,
			// etapa: undefined
		};
	},
	components: {
		EditarArquivo: __WEBPACK_IMPORTED_MODULE_2__components_EditarArquivo_vue__["a" /* default */],
		AdicionarArquivo: __WEBPACK_IMPORTED_MODULE_1__components_AdicionarArquivo_vue__["a" /* default */],
		draggable: __WEBPACK_IMPORTED_MODULE_0_vuedraggable___default.a
	},
	computed: {
		editarArquivo() {
			return this.$store.state.editArquivoBox;
		},
		abreNovoArquivo() {
			return this.$store.state.adicionarArquivoBox;
		}
	},
	methods: {
		etapaCollapse(evt) {
			let divEtapa = evt.target.parentNode.parentNode.parentNode;
			if (divEtapa.style.maxHeight != '40px') {
				divEtapa.style.maxHeight = '40px';
				evt.target.style.transform = 'rotate(180deg)';
			} else {
				divEtapa.style.maxHeight = '1000px';
				evt.target.style.transform = 'rotate(0deg)';
			}
		},
		displayData(data) {
			let aaaa = data.slice(0, 4);
			let mm = data.slice(5, 7);
			let dd = data.slice(8, 10);
			let h = data.slice(11, 16);
			return dd + '/' + mm + '/' + aaaa + ' (' + h + ')';
		},
		novoArquivo() {
			this.$store.commit('luzToggle');
			this.$store.commit('abreAdicionarArquivoBox');
		},
		abreEditArquivoBox(idArquivo) {
			this.$store.commit('luzToggle');
			this.$store.commit('abreEditarArquivoBox');
			this.$store.commit('SET_ARQUIVO', {
				idEtapa: this.id,
				idArquivo: idArquivo
			});
		}
	}
});

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_URL_vue__ = __webpack_require__(16);
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
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'AdicionarArquivo',
	data() {
		return {
			urls: [{ 'index': 1, 'url': '', 'extensao': '' }]
		};
	},
	components: {
		URL: __WEBPACK_IMPORTED_MODULE_0__components_URL_vue__["a" /* default */]
	},
	computed: {
		fechaBox() {
			return this.$store.state.adicionarArquivoBox;
		}
	},
	created() {},
	mounted() {},
	updated() {},
	methods: {
		charCount(evt) {
			let txt = evt.target.value;
			let counter = evt.target.parentNode.lastElementChild;
			counter.innerText = txt.length + '/330';
			if (txt.length > 330) {
				counter.style.color = "#FE4C4C";
				evt.target.style.borderColor = "#FE4C4C";
			} else if (txt.length < 330) {
				counter.style.color = "#898989";
				evt.target.style.borderColor = "#DDD";
			}
		},
		addUrl() {
			this.urls.push({ 'index': this.urls.length + 1, 'url': '', 'extensao': '' });
		},
		cancelar() {
			this.$store.commit('luzToggle');
			this.$store.commit('abreAdicionarArquivoBox');
		}
	}
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_URL_vue__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b740449_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_URL_vue__ = __webpack_require__(49);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(48)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b740449"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_URL_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b740449_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_URL_vue__["a" /* default */],
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
/* 17 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'URL',
	props: {
		idArquivo: {
			required: true
		}
	},
	data() {
		return {
			extensaoBoxShow: false
		};
	},
	computed: {
		tipoDeArquivo() {
			return this.$store.state.tiposDeArquivo;
		},
		urlsArquivoClicado: {
			get() {
				const urls = this.$store.state.arquivoClicado.urls;
				return urls[this.getIndex(urls, this.idArquivo)];
			}
			// set(id){ ... }
		}
	},
	methods: {
		extensao(url) {
			const regexPattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
			const ext = url.match(regexPattern);
			let extensao;

			if (ext != null) {
				extensao = url.match(regexPattern)[1];
			} else {
				extensao = 'URL';
			}

			return extensao.toUpperCase();
		},
		getIndex(arr, index) {
			return arr.findIndex(item => parseInt(item.id) === parseInt(index));
		},
		alteraTipoDeArq(evt) {
			this.extensaoBoxShow = false;
			evt.target.parentNode.parentNode.parentNode.firstElementChild.innerText = evt.target.innerText;
		}
	}
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_URL_vue__ = __webpack_require__(16);
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
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'EditarArquivo',
	data() {
		return {
			urls: [{ 'index': 1, 'url': '', 'extensao': '' }]
		};
	},
	components: {
		URL: __WEBPACK_IMPORTED_MODULE_0__components_URL_vue__["a" /* default */]
	},
	computed: {
		arquivoClicado: {
			get() {
				return this.$store.state.arquivoClicado;
			},
			set(id) {
				console.log(id);
			}
		},
		fechaBox() {
			return this.$store.state.editArquivoBox;
		}
	},
	methods: {
		// urlId(obj){ return obj.id },
		charCount(evt) {
			let txt = evt.target.value;
			let counter = evt.target.parentNode.lastElementChild;
			counter.innerText = txt.length + '/330';
			if (txt.length > 330) {
				counter.style.color = "#FE4C4C";
				evt.target.style.borderColor = "#FE4C4C";
			} else if (txt.length < 330) {
				counter.style.color = "#898989";
				evt.target.style.borderColor = "#DDD";
			}
		},
		addUrl() {
			this.urls.push({ 'index': this.urls.length + 1, 'url': '', 'extensao': '' });
		},
		cancelar() {
			this.$store.commit('luzToggle');
			this.$store.commit('abreEditarArquivoBox');
		}
	}
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	methods: {
		copiaSlug: function copiaSlug(evt) {
			var text = evt.target.innerText;
			if (!navigator.clipboard) {
				this.copiaSlugFallback(text);
				return;
			}
			navigator.clipboard.writeText(text).then(function () {
				console.log("Async: Copying to clipboard was successful!");
			}, function (err) {
				console.error("Async: Could not copy text: ", err);
			});
		},
		copiaSlugFallback: function copiaSlugFallback(text) {
			var textArea = document.createElement("textarea");
			textArea.value = text;
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();

			try {
				var successful = document.execCommand("copy");
				var msg = successful ? "successful" : "unsuccessful";
				console.log("Fallback: Copying text command was " + msg);
			} catch (err) {
				console.error("Fallback: Oops, unable to copy", err);
			}
			document.body.removeChild(textArea);
		}
	}
};

/***/ }),
/* 20 */
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


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'AdicionarEtapa',
	data() {
		return {};
	},
	components: {},
	computed: {
		fechaBox() {
			return this.$store.state.addEtapaBox;
		}
	},
	created() {},
	methods: {
		cancelar() {
			this.$store.commit('luzToggle');
			this.$store.commit('abreAdicionarEtapaBox');
		}
	}
});

/***/ }),
/* 21 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Modal',
	data() {
		return {
			fechaModal: false
		};
	},
	components: {},
	mounted() {},
	updated() {},
	methods: {}
});

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(6);

var _vuex2 = _interopRequireDefault(_vuex);

var _App = __webpack_require__(31);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(35);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(62);

var _store2 = _interopRequireDefault(_store);

var _adminMenuFix = __webpack_require__(82);

var _adminMenuFix2 = _interopRequireDefault(_adminMenuFix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
	el: '#gu-index-admin',
	router: _router2.default,
	store: _store2.default,
	render: function render(h) {
		return h(_App2.default);
	}
});

// fix the admin menu for the slug "gu-index-admin"
(0, _adminMenuFix2.default)('gu-index-admin');

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(7);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_200a6b1e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(34);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(32)
}
var normalizeComponent = __webpack_require__(1)
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
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "vue-backend-app" } },
    [
      _c("router-view"),
      _vm._v(" "),
      _c("div", { staticClass: "luz", class: { apagada: _vm.luzToggle } })
    ],
    1
  )
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(8);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = __webpack_require__(36);

var _Home2 = _interopRequireDefault(_Home);

var _Projeto = __webpack_require__(41);

var _Projeto2 = _interopRequireDefault(_Projeto);

var _AdicionarProjeto = __webpack_require__(10);

var _AdicionarProjeto2 = _interopRequireDefault(_AdicionarProjeto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({
	routes: [{
		path: '/',
		name: 'Home',
		component: _Home2.default
	}, {
		path: '/projeto/:id',
		name: 'Projeto',
		component: _Projeto2.default
	}]
});

exports.default = router;

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(9);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45e83875_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(40);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(37)
}
var normalizeComponent = __webpack_require__(1)
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
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app-projeto" }, [
    _c("div", { staticClass: "cont" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "conteudo" }, [
        _c("p", [
          _vm._v(
            "Criação de um projeto e suas etapas. Ao criar as etapas, elas serão numeradas em ordem crescente."
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("Para inserir os links em um post, copie o Shortcode "),
          _c(
            "code",
            {
              on: {
                click: function($event) {
                  _vm.copiaSlug($event)
                }
              }
            },
            [
              _vm._v("[tabel id=<"),
              _c("span", { staticStyle: { color: "#0073aa" } }, [
                _vm._v("número da ID")
              ]),
              _vm._v(">/]")
            ]
          ),
          _vm._v(
            " e cole no lugar desejado. Cada lista/tabela tem um único Shortcode."
          )
        ]),
        _vm._v(" "),
        _vm._m(1)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "actions" }, [
        _c(
          "button",
          { staticClass: "cancelar", on: { click: _vm.fechaNovoProjetoBox } },
          [_vm._v("Cancelar")]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "adicionar" }, [_vm._v("Adicionar")])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h3", [_vm._v("Adicionar projeto")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", [
      _c("fieldset", [
        _c("input", {
          attrs: {
            type: "text",
            id: "nome",
            placeholder: "Digite o nome do projeto"
          }
        })
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ef0786", esExports)
  }
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "home" },
    [
      _c("h1", [_vm._v("Arquivos GU")]),
      _vm._v(" "),
      _c("section", [
        _c("p", [
          _vm._v(
            "Esta é a lista de arquivos por projeto e etapa. Clique no nome do projeto para editar sua lista."
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("Para inserir os links em um post, copie o shortcode "),
          _c(
            "code",
            {
              on: {
                click: function($event) {
                  _vm.copiaSlug($event)
                }
              }
            },
            [
              _vm._v("[tabel id=<"),
              _c("span", { staticStyle: { color: "#0073aa" } }, [
                _vm._v("número da ID")
              ]),
              _vm._v(">/]")
            ]
          ),
          _vm._v(
            " e cole no lugar desejado. Cada lista/tabela tem um único shortcode."
          )
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "buscaprojeto" }, [
        _c("input", { attrs: { type: "text", placeholder: "Pesquisar..." } }),
        _vm._v(" "),
        _c(
          "button",
          {
            on: {
              click: function($event) {
                _vm.abreNovoProjeto()
              }
            }
          },
          [_vm._v("+ Adicionar projeto")]
        )
      ]),
      _vm._v(" "),
      _c(
        "table",
        [
          _vm._m(0),
          _vm._v(" "),
          _vm._l(_vm.projetos, function(projeto) {
            return _c("tr", { class: _vm.ocultoClass(projeto.ativo) }, [
              _c(
                "td",
                [
                  _c(
                    "router-link",
                    { attrs: { to: _vm.goToProjeto(projeto.id), tag: "a" } },
                    [_vm._v(_vm._s(projeto.nome))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(projeto.id_wordpress))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.displayData(projeto.atualizacao)))]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "div",
                  {
                    staticClass: "switchCont",
                    on: {
                      click: function($event) {
                        _vm.ativoToggle(projeto.id)
                      }
                    }
                  },
                  [
                    _c("div", { class: _vm.ocultoClass(projeto.ativo) }, [
                      projeto.ativo == 1
                        ? _c("span", [_vm._v("Disponível")])
                        : _c("span", [_vm._v("Oculto")])
                    ])
                  ]
                )
              ])
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm.abreAddProjetoBox ? _c("AdicionarProjeto") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", { attrs: { width: "35%" } }, [_vm._v("Projeto")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "25%" } }, [_vm._v("Autor(a)")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "25%" } }, [_vm._v("Última modificação")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } })
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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Projeto_vue__ = __webpack_require__(12);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3853e4fd_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Projeto_vue__ = __webpack_require__(61);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(42)
}
var normalizeComponent = __webpack_require__(1)
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
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Etapa_vue__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c5feb5d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Etapa_vue__ = __webpack_require__(54);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Etapa_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c5feb5d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Etapa_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\components\\Etapa.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c5feb5d", Component.options)
  } else {
    hotAPI.reload("data-v-5c5feb5d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdicionarArquivo_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ef4b2672_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdicionarArquivo_vue__ = __webpack_require__(50);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdicionarArquivo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ef4b2672_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdicionarArquivo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\components\\AdicionarArquivo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef4b2672", Component.options)
  } else {
    hotAPI.reload("data-v-ef4b2672", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("tr", { staticClass: "URL" }, [
    _c("td", [_vm._v("URL")]),
    _vm._v(" "),
    _c("td", [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.urlsArquivoClicado.url,
            expression: "urlsArquivoClicado.url"
          }
        ],
        attrs: { type: "text", name: "url" },
        domProps: { value: _vm.urlsArquivoClicado.url },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.urlsArquivoClicado, "url", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _vm.urlsArquivoClicado.extensao
        ? _c("div", [
            _c(
              "span",
              {
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
                _vm._v("\n\t\t\t\tSelecione a extensão do arquivo "),
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
                  "div",
                  { staticClass: "opcoes" },
                  _vm._l(_vm.tipoDeArquivo, function(arquivo) {
                    return _c("span", { on: { click: _vm.alteraTipoDeArq } }, [
                      _vm._v(_vm._s(arquivo.extensao))
                    ])
                  })
                )
              ]
            )
          ])
        : _c("div", [
            _c("span", { staticClass: "extensao_fixa" }, [
              _vm._v(_vm._s(_vm.extensao(_vm.urlsArquivoClicado.url)))
            ])
          ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "excluirUrl",
          on: {
            click: function($event) {
              _vm.deletaUrl($event)
            }
          }
        },
        [_vm._v("×")]
      )
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

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "div",
      staticClass: "AdicionarArquivo",
      class: { fechado: !_vm.fechaBox }
    },
    [
      _c("div", { staticClass: "cont" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("form", { attrs: { action: "" } }, [
          _c(
            "table",
            [
              _c("tr", [
                _vm._m(1),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    attrs: { type: "text" },
                    on: {
                      keyup: function($event) {
                        _vm.charCount($event)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "charCounter" }, [_vm._v("0/330")])
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.urls, function(url) {
                return _c("URL", [_vm._v("URL (" + _vm._s(url.index) + ")")])
              }),
              _vm._v(" "),
              _c("tr", [
                _c("td", { attrs: { colspan: "2" } }, [
                  _c(
                    "div",
                    {
                      staticClass: "addUrl",
                      on: {
                        click: function($event) {
                          _vm.addUrl()
                        }
                      }
                    },
                    [_vm._v("+ Adicionar URL")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _vm._m(2),
                _vm._v(" "),
                _c("td", [
                  _c("textarea", {
                    attrs: { name: "", id: "" },
                    on: {
                      keyup: function($event) {
                        _vm.charCount($event)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "charCounter" }, [_vm._v("0/330")])
                ])
              ])
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "actions" }, [
          _c(
            "button",
            {
              staticClass: "cancelar",
              on: {
                click: function($event) {
                  _vm.cancelar()
                }
              }
            },
            [_vm._v("Cancelar")]
          ),
          _vm._v(" "),
          _c("button", { staticClass: "adicionar" }, [_vm._v("Adicionar")])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h3", [_vm._v("Adicionar arquivo")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("label", { attrs: { for: "" } }, [_vm._v("Nome público")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("label", { attrs: { for: "" } }, [_vm._v("Descrição")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ef4b2672", esExports)
  }
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditarArquivo_vue__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79279d68_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EditarArquivo_vue__ = __webpack_require__(53);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(52)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditarArquivo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79279d68_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EditarArquivo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\components\\EditarArquivo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79279d68", Component.options)
  } else {
    hotAPI.reload("data-v-79279d68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "div",
      staticClass: "EditarArquivo",
      class: { fechado: !_vm.fechaBox }
    },
    [
      _c("div", { staticClass: "cont" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("form", [
          _c(
            "table",
            [
              _c("tr", [
                _vm._m(1),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.arquivoClicado.nome,
                        expression: "arquivoClicado.nome"
                      }
                    ],
                    ref: "nome",
                    attrs: { type: "text" },
                    domProps: { value: _vm.arquivoClicado.nome },
                    on: {
                      keyup: function($event) {
                        _vm.charCount($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.arquivoClicado,
                          "nome",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "charCounter" }, [_vm._v("0/330")])
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.arquivoClicado.urls, function(url) {
                return [_c("URL", { attrs: { idArquivo: url.id } })]
              }),
              _vm._v(" "),
              _c("tr", [
                _c("td", { attrs: { colspan: "2" } }, [
                  _c(
                    "div",
                    {
                      staticClass: "addUrl",
                      on: {
                        click: function($event) {
                          _vm.addUrl()
                        }
                      }
                    },
                    [_vm._v("+ Adicionar URL")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _vm._m(2),
                _vm._v(" "),
                _c("td", [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.arquivoClicado.descricao,
                        expression: "arquivoClicado.descricao"
                      }
                    ],
                    ref: "descricao",
                    domProps: { value: _vm.arquivoClicado.descricao },
                    on: {
                      keyup: function($event) {
                        _vm.charCount($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.arquivoClicado,
                          "descricao",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "charCounter" }, [_vm._v("0/330")])
                ])
              ])
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "actions" }, [
          _c(
            "button",
            {
              staticClass: "cancelar",
              on: {
                click: function($event) {
                  _vm.cancelar()
                }
              }
            },
            [_vm._v("Cancelar")]
          ),
          _vm._v(" "),
          _c("button", { staticClass: "adicionar" }, [_vm._v("Adicionar")])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h3", [_vm._v("Editar arquivo")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("label", { attrs: { for: "nome" } }, [_vm._v("Nome público")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("label", { attrs: { for: "descricao" } }, [_vm._v("Descrição")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-79279d68", esExports)
  }
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "Etapa" },
    [
      _c("div", { staticClass: "h-etapa" }, [
        _c("span", [_vm._v("Etapa")]),
        _vm._v(" "),
        _c("h3", [_vm._t("nomeEtapa")], 2),
        _vm._v(" "),
        _c("div", { staticClass: "shortcode_expand" }, [
          _c("span", [
            _vm._v("Shortcode da etapa "),
            _c(
              "code",
              {
                on: {
                  click: function($event) {
                    _vm.copiaSlug($event)
                  }
                }
              },
              [
                _vm._v(
                  "[arquivos-gu-" +
                    _vm._s(_vm.idProjeto) +
                    "." +
                    _vm._s(_vm.id) +
                    "]"
                )
              ]
            )
          ]),
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
      _c("div", { staticClass: "arquivosTable" }, [
        _c(
          "table",
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "draggable",
              {
                attrs: {
                  element: "tbody",
                  options: {
                    draggable: ".tablerow",
                    ghostClass: "slot-vazio",
                    animation: 50,
                    scroll: true,
                    scrollSensitivity: 80,
                    scrollSpeed: 8
                  }
                },
                model: {
                  value: _vm.arquivos,
                  callback: function($$v) {
                    _vm.arquivos = $$v
                  },
                  expression: "arquivos"
                }
              },
              _vm._l(_vm.arquivos, function(arquivo) {
                return _c("tr", { staticClass: "tablerow" }, [
                  _c("td", [
                    _vm._v(_vm._s(_vm.displayData(arquivo.atualizacao)))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "a",
                      {
                        attrs: { id: arquivo.id },
                        on: {
                          click: function($event) {
                            _vm.abreEditArquivoBox(arquivo.id)
                          }
                        }
                      },
                      [_vm._v(_vm._s(arquivo.nome))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("img", {
                      staticStyle: {
                        height: "24px",
                        width: "24px",
                        "vertical-align": "bottom"
                      },
                      attrs: {
                        src:
                          "https://www.materialui.co/materialIcons/action/reorder_black_192x192.png"
                      }
                    })
                  ])
                ])
              })
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "adicionar-arquivo",
            on: {
              click: function($event) {
                _vm.novoArquivo()
              }
            }
          },
          [_vm._v("+ Adicionar arquivo")]
        )
      ]),
      _vm._v(" "),
      _vm.editarArquivo ? _c("EditarArquivo") : _vm._e(),
      _vm._v(" "),
      _vm.abreNovoArquivo ? _c("AdicionarArquivo") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Última modificação")]),
      _vm._v(" "),
      _c("th", [_vm._v("Nome")]),
      _vm._v(" "),
      _c("th", [
        _c("img", {
          staticStyle: {
            height: "24px",
            width: "24px",
            "vertical-align": "bottom"
          },
          attrs: {
            src: "https://static.thenounproject.com/png/505631-200.png",
            alt: ""
          }
        })
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5c5feb5d", esExports)
  }
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdicionarEtapa_vue__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b35d5ac6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdicionarEtapa_vue__ = __webpack_require__(57);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(56)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdicionarEtapa_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b35d5ac6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdicionarEtapa_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\components\\AdicionarEtapa.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b35d5ac6", Component.options)
  } else {
    hotAPI.reload("data-v-b35d5ac6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "div",
      staticClass: "AdicionarEtapa",
      class: { fechado: !_vm.fechaBox }
    },
    [
      _c("div", { staticClass: "cont" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("form", { attrs: { action: "" } }, [
          _c("table", [
            _c("tr", [
              _vm._m(1),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  attrs: { type: "text" },
                  on: {
                    keyup: function($event) {
                      _vm.charCount($event)
                    }
                  }
                })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "actions" }, [
          _c(
            "button",
            {
              staticClass: "cancelar",
              on: {
                click: function($event) {
                  _vm.cancelar()
                }
              }
            },
            [_vm._v("Cancelar")]
          ),
          _vm._v(" "),
          _c("button", { staticClass: "adicionar" }, [_vm._v("Adicionar")])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h3", [_vm._v("Adicionar etapa")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", { attrs: { for: "" } }, [_vm._v("Nome")])])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b35d5ac6", esExports)
  }
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__ = __webpack_require__(21);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cd28607_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__ = __webpack_require__(60);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(59)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cd28607_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\components\\Modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cd28607", Component.options)
  } else {
    hotAPI.reload("data-v-7cd28607", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "Modal", class: { fechado: _vm.fechaModal } },
    [
      _c("div", { staticClass: "modal-cont" }, [
        _c(
          "div",
          { staticClass: "modal-txt" },
          [_c("h4", [_vm._t("header")], 2), _vm._v(" "), _vm._t("msg")],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "modal-ok" }, [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  _vm.fechaModal = !_vm.fechaModal
                }
              }
            },
            [_vm._v("OK")]
          )
        ])
      ]),
      _vm._v(" "),
      _vm._t("componente")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7cd28607", esExports)
  }
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "Projeto" },
    [
      _c("h1", [_vm._v("Arquivos GU")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "projeto" },
        [
          _c("div", { staticClass: "nome" }, [
            _c("h2", [_vm._v(_vm._s(_vm.projeto.nome))]),
            _vm._v(" "),
            _c("div", { staticClass: "shortcode_expand" }, [
              _c("span", [
                _vm._v("Shortcode do projeto "),
                _c(
                  "code",
                  {
                    on: {
                      click: function($event) {
                        _vm.copiaSlug($event)
                      }
                    }
                  },
                  [_vm._v("[arquivos-gu-" + _vm._s(_vm.projeto.id) + "]")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "busca-arquivos",
            attrs: { type: "text", placeholder: "Pesquisar arquivos..." }
          }),
          _vm._v(" "),
          _vm._l(_vm.projeto.etapas, function(etapa) {
            return [
              _c(
                "Etapa",
                {
                  attrs: {
                    id: etapa.id,
                    arquivos: etapa.arquivos,
                    idProjeto: _vm.projeto.id
                  }
                },
                [
                  _c("template", { slot: "nomeEtapa" }, [
                    _vm._v(_vm._s(etapa.nome))
                  ])
                ],
                2
              )
            ]
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "adicionarEtapa",
              on: {
                click: function($event) {
                  _vm.insereEtapa()
                }
              }
            },
            [_vm._v("+ Adicionar etapa")]
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "acoes" },
        [
          _c("router-link", { attrs: { to: "/", tag: "a" } }, [
            _vm._v("Cancelar")
          ]),
          _vm._v(" "),
          _c("a", [_vm._v("Salvar")])
        ],
        1
      ),
      _vm._v(" "),
      _vm.abreAdicionarEtapa ? _c("AdicionarEtapa") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "cabecalho" }, [
      _c("p", [
        _vm._v(
          "A partir desta tela, você consegue acessar e editar as informações dos arquivos de cada projeto."
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Cada linha corresponde a um arquivo com formatos variados (PDF, DOC, KMZ...)."
        )
      ])
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(6);

var _vuex2 = _interopRequireDefault(_vuex);

var _apiFake = __webpack_require__(63);

var _apiFake2 = _interopRequireDefault(_apiFake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);
// import api from '../utils/api'


var store = new _vuex2.default.Store({
	state: {
		projeto: {},
		arquivoClicado: undefined,
		urls: [{
			"id": 1,
			"id_arquivo": 1,
			"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
			"extensao": "pdf"
		}, {
			"id": 2,
			"id_arquivo": 2,
			"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
			"extensao": "pdf"
		}, {
			"id": 3,
			"id_arquivo": 3,
			"url": "http://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/piu-monitoramento/ANH1_Oficio.pdf",
			"extensao": "pdf"
		}],
		projetos: [],
		tiposDeArquivo: [{ 'index': 0, 'extensao': 'PDF' }, { 'index': 1, 'extensao': 'KMZ' }, { 'index': 2, 'extensao': 'KML' }, { 'index': 3, 'extensao': 'SHP' }, { 'index': 4, 'extensao': 'DOC' }],
		apagaLuz: false,
		editArquivoBox: false,
		adicionarArquivoBox: false,
		addEtapaBox: false,
		addProjetoBox: false
	},

	getters: {
		wordpressUserSettings: function wordpressUserSettings() {
			return userSettings;
		}
	},

	mutations: {
		luzToggle: function luzToggle(state) {
			state.apagaLuz = !state.apagaLuz;
		},
		abreEditarArquivoBox: function abreEditarArquivoBox(state) {
			state.editArquivoBox = !state.editArquivoBox;
		},
		abreAdicionarArquivoBox: function abreAdicionarArquivoBox(state) {
			state.adicionarArquivoBox = !state.adicionarArquivoBox;
		},
		abreAdicionarEtapaBox: function abreAdicionarEtapaBox(state) {
			state.addEtapaBox = !state.addEtapaBox;
		},
		abreAdicionarProjetoBox: function abreAdicionarProjetoBox(state) {
			state.addProjetoBox = !state.addProjetoBox;
		},
		ativoToggle: function ativoToggle(state, incomeId) {
			state.projetos.map(function (index) {
				if (index.id === incomeId) {
					index.ativo = Math.abs(index.ativo - 1);
				}
			});
		},

		SET_PROJETOS: function SET_PROJETOS(state, response) {
			state.projetos = response.data;
		},
		SET_INFO_PROJETO: function SET_INFO_PROJETO(state, response) {
			state.projeto = response.data;
		},
		SET_ARQUIVO: function SET_ARQUIVO(state, objDefineArquivo) {
			var etapas = state.projeto.etapas;
			var indexEtapas = etapas.findIndex(function (i) {
				return i.id === objDefineArquivo.idEtapa;
			});
			var indexArquivos = etapas[indexEtapas].arquivos.findIndex(function (i) {
				return i.id === objDefineArquivo.idArquivo;
			});
			state.arquivoClicado = etapas[indexEtapas].arquivos[indexArquivos];
		}
	},
	actions: {
		FETCH_PROJETOS: function FETCH_PROJETOS(state) {
			//			api.get('projetos')
			_apiFake2.default.get('?data=projetos').then(function (response) {
				state.commit('SET_PROJETOS', response);
			});
		},
		FETCH_INFO_PROJETO: function FETCH_INFO_PROJETO(state, id) {
			//			api.get('projeto/'+id)
			_apiFake2.default.get('?data=projeto/' + id).then(function (response) {
				state.commit('SET_INFO_PROJETO', response);
			});
		}
	}
});

exports.default = store;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(22);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _axios2.default.create({
  baseURL: "http://spurbcp13343:7080/fake/",
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
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

/***/ })
],[28]);