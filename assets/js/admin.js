pluginWebpack([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'App',
	data() {
		return {
			arquivos: [{
				"id": 1,
				"nome": "Diagnóstico",
				"descricao": "Minuta de consulta pública para Programa de Interesse Público",
				"autoria": "devspurbanismo",
				"inclusao": "2018-08-21 18:37:28",
				"projetoId": 21,
				"projetoEtapa": 2,
				"etapaIndex": 1,
				destino: [{
					"urlid": 1,
					"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
					"extensao": "pdf"
				}]
			}, {
				"id": 2,
				"nome": "Mapas",
				"descricao": "Mapas do Anexo I da Minuta de consulta pública",
				"autoria": "devspurbanismo",
				"inclusao": "2018-08-21 18:37:50",
				"projetoId": 21,
				"projetoEtapa": 2,
				"etapaIndex": 2,
				destino: [{
					"urlid": 1,
					"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
					"extensao": "pdf"
				}]
			}, {
				"id": 3,
				"nome": "Ofício",
				"descricao": "Pedido de instauração de Projeto de Intervenção Urbana (PIU) relativo à área do Complexo Anhembi",
				"inclusao": "2018-08-21 19:11:38",
				"projetoId": 6,
				"projetoEtapa": 1,
				"etapaIndex": 1,
				destino: [{
					"urlid": 1,
					"url": "http://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/piu-monitoramento/ANH1_Oficio.pdf",
					"extensao": "pdf"
				}]
			}],
			projetos: [{
				'id': 6,
				'nome': 'PIU Anhembi',
				'ultimaMod': '2018-08-21 19:11:38',
				'autoria': 'devspurbanismo',
				'status': 1,
				etapas: [{ 'id': 1, 'nome': 'Em proposição dos elementos prévios' }]
			}, {
				'id': 21,
				'nome': 'PIU Rio Branco',
				'ultimaMod': '2018-08-21 18:37:50',
				'autoria': 'devspurbanismo',
				'status': 1,
				etapas: [{ 'id': 1, 'nome': 'Em proposição dos elementos prévios' }, { 'id': 2, 'nome': 'Consulta pública inicial' }]
			}]
			// projetos: [
			// 	{
			// 		"id": 21,
			// 		"nome": "PIU Rio Branco",
			// 		"autoria": "devspurbanismo",
			// 		"status": 1,
			// 		"ultimaMod": "2018-08-21 18:37:50",
			// 		"consultaAtiva": 0,
			// 		etapas: [
			// 			{				
			// 				"id": 2,
			// 				"nome": "Consulta Pública Inicial",
			// 				arquivos: [
			// 					{
			// 						"id": 1,
			// 						"nome": "Diagnóstico",
			// 						"descricao": "Minuta de consulta pública para Programa de Interesse Público",
			// 						"autoria": "devspurbanismo",
			// 						"inclusao": "2018-08-21 18:37:28",
			// 						destino: [
			// 							{
			// 								"urlid": 1,
			// 								"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
			// 								"extensao": "pdf"
			// 							}
			// 						],
			// 						"index": 1,
			// 					},
			// 					{
			// 						"id": 2,
			// 						"nome": "Mapas",
			// 						"descricao": "Mapas do Anexo I da Minuta de consulta pública",
			// 						"autoria": "devspurbanismo",
			// 						"inclusao": "2018-08-21 18:37:50",
			// 						destino: [
			// 							{
			// 								"urlid": 1,
			// 								"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
			// 								"extensao": "pdf"
			// 							}
			// 						],
			// 						"index": 2,
			// 					},
			// 				],
			// 			}
			// 		]
			// 	},
			// 	{
			// 		"id": 6,
			// 		"nome": "PIU Anhembi",
			// 		"autoria": "devspurbanismo",
			// 		"status": 1,
			// 		"ultimaMod": "2018-08-21 19:11:38",
			// 		"consultaAtiva": 1,
			// 		etapas: [
			// 			{
			// 				"id": 1,
			// 				"nome": "Em proposição dos elementos prévios",
			// 				arquivos: [
			// 					{
			// 						"id": 3,
			// 						"nome": "Ofício",
			// 						"descricao": "Pedido de instauração de Projeto de Intervenção Urbana (PIU) relativo à área do Complexo Anhembi",
			// 						"inclusao": "2018-08-21 19:11:38",
			// 						destino: [
			// 							{
			// 								"urlid": 1,
			// 								"url": "http://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/piu-monitoramento/ANH1_Oficio.pdf",
			// 								"extensao": "pdf"
			// 							}
			// 						],
			// 						"index": 1,
			// 					}
			// 				]
			// 			}
			// 		]
			// 	}
			// ]
		};
	}
});

/***/ }),
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: {},
	props: ['props'],
	data() {
		return {
			nProjetos: []
		};
	},
	beforeMount() {
		this.montaProjetos();
	},
	mounted() {},
	computed: {
		aluz() {
			return this.$store.state.num;
		}
	},
	methods: {
		montaProjetos() {
			let projetosTemp = new Set();
			this.$props.props.arquivos.map(function (index) {
				projetosTemp.add(index.projetoId);
			});
			this.nProjetos = Array.from(projetosTemp).sort(function (a, b) {
				return a - b;
			});
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
		switchCont(par) {
			if (par == 1) {
				par = 0;
			} else if (par == 0) {
				par = 1;
			}
		}
	}
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Etapa_vue__ = __webpack_require__(29);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: ['props'],
	data() {
		return {
			apagaLuz: false,
			etapasInput: [{ index: 0 }],
			etapaCounter: 1,
			etapas: [],
			nProjetos: []
		};
	},
	components: {
		Etapa: __WEBPACK_IMPORTED_MODULE_0__components_Etapa_vue__["a" /* default */]
	},
	mounted() {},
	updated() {
		let modal = this.$refs.modal;
		let app = this;
		const f = function (evt) {
			if (modal.contains(evt.target) == false) {
				console.log('acende');
				console.log(evt);
				app.apagaLuz = false;
			} else {
				return false;
			}
		};
		if (app.apagaLuz == true) {
			// app.$el.addEventListener("click", f, false)
			app.$el.addEventListener("keydown", function (evt) {
				if (evt.code === 27) {
					// app.apagaLuz = false
					console.log('esc');
				} else {
					return false;
				}
			});
		} else if (app.apagaLuz == false) {
			app.$el.removeEventListener("click", f, false);
		}
	},
	methods: {
		insereEtapa() {
			this.etapasInput.push({ index: this.etapaCounter });
			this.etapaCounter++;
		}
	}
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Arquivo_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuedraggable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuedraggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuedraggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AdicionarArquivo_vue__ = __webpack_require__(59);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: ['props', 'etapaCounter'],
	data() {
		return {
			arquivos: [{
				"id": 1,
				"nome": "Diagnóstico",
				"descricao": "Minuta de consulta pública para Programa de Interesse Público",
				"autoria": "devspurbanismo",
				"inclusao": "2018-08-21 18:37:28",
				"projetoId": 21,
				"projetoEtapa": 2,
				"etapaIndex": 1,
				destino: [{
					"urlid": 1,
					"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
					"extensao": "pdf"
				}]
			}, {
				"id": 2,
				"nome": "Mapas",
				"descricao": "Mapas do Anexo I da Minuta de consulta pública",
				"autoria": "devspurbanismo",
				"inclusao": "2018-08-21 18:37:50",
				"projetoId": 21,
				"projetoEtapa": 2,
				"etapaIndex": 2,
				destino: [{
					"urlid": 1,
					"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
					"extensao": "pdf"
				}]
			}, {
				"id": 3,
				"nome": "Ofício",
				"descricao": "Pedido de instauração de Projeto de Intervenção Urbana (PIU) relativo à área do Complexo Anhembi",
				"inclusao": "2018-08-21 19:11:38",
				"projetoId": 6,
				"projetoEtapa": 1,
				"etapaIndex": 1,
				destino: [{
					"urlid": 1,
					"url": "http://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/piu-monitoramento/ANH1_Oficio.pdf",
					"extensao": "pdf"
				}]
			}]
		};
	},
	components: {
		AdicionarArquivo: __WEBPACK_IMPORTED_MODULE_2__components_AdicionarArquivo_vue__["a" /* default */], Arquivo: __WEBPACK_IMPORTED_MODULE_0__components_Arquivo_vue__["a" /* default */], draggable: __WEBPACK_IMPORTED_MODULE_1_vuedraggable___default.a
	},
	created() {},
	mounted() {
		let app = this;
		for (let i = 0; i < this.$props.props.length; i++) {
			for (let j = 0; j < this.$props.props[i].etapas.length; j++) {
				for (let k = 0; k < this.$props.props[i].etapas[j].arquivos.length; k++) {
					this.$props.props[i].etapas[j].arquivos[k].nome;
				}
			}
		}
	},
	updated() {},
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
		},
		displayData(data) {
			let aaaa = data.slice(0, 4);
			let mm = data.slice(5, 7);
			let dd = data.slice(8, 10);
			let h = data.slice(11, 16);
			return dd + '/' + mm + '/' + aaaa + ' (' + h + ')';
		}
	}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Arquivo_vue__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15b454f2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Arquivo_vue__ = __webpack_require__(35);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(31)
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_URL_vue__ = __webpack_require__(32);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: ['props', 'nArquivos'],
	data() {
		return {
			urlsInput: [{ index: 0, endereco: '', tipo: '' }],
			idUrl: 0
		};
	},
	components: {
		URL: __WEBPACK_IMPORTED_MODULE_0__components_URL_vue__["a" /* default */]
	},
	created() {},
	mounted() {
		this.$refs.urls.firstElementChild.classList.remove("animate");
	},
	updated() {},
	methods: {
		mover(dir, evt) {
			let app = this;
			// let pai = evt.target.parentNode.parentNode.parentNode.parentNode
			// let esteFilho = evt.target.parentNode.parentNode.parentNode
			// let irmaoAnterior = evt.target.parentNode.parentNode.parentNode.previousSibling
			// let irmaoPosterior = evt.target.parentNode.parentNode.parentNode.nextSibling
			// console.log([pai, esteFilho, irmaoAnterior, irmaoPosterior])
			// if (dir == 'cima') {
			// 	pai.insertBefore(esteFilho, irmaoAnterior)
			// console.log(this.$props.index)
			// } else if (dir == 'baixo') {
			// 	pai.insertBefore(esteFilho, irmaoPosterior)
			// } else { return false }
			// console.log(this.$props.index[this.$props.index.length-1].pos)
			// let temp = this.$props.index[this.$props.index.length-2]
			// this.$props.index[this.$props.index.length-2] = this.$props.index[this.$props.index.length-1]
			// this.$props.index[this.$props.index.length-1] = temp
			// if (dir == 'baixo') {
			// 	let temp = app.$el.parentNode.nextSibling.attributes.pos.value
			// 	app.$el.parentNode.nextSibling.attributes.pos.value = app.$el.parentNode.attributes.pos.value
			// 	app.$el.parentNode.attributes.pos.value = temp
			// } else if (dir == 'cima') {
			// 	let temp = app.$el.parentNode.previousSibling.attributes.pos.value
			// 	app.$el.parentNode.previousSibling.attributes.pos.value = app.$el.parentNode.attributes.pos.value
			// 	app.$el.parentNode.attributes.pos.value = temp
			// }
			// this.$el.parentNode.style.order = this.$el.parentNode.attributes.pos.value
			// this.$el.parentNode.nextSibling.style.order = this.$el.parentNode.nextSibling.attributes.pos.value
			console.log(this.$props.nArquivos);
		},
		charCount(txt, dest) {
			dest.innerText = txt.length + '/330';
			if (txt.length > 330) {
				dest.parentNode.firstElementChild.style.backgroundColor = '#FE4C4C';dest.style.color = '#FE4C4C';
			} else {
				dest.style.color = "#BBB";
			}
		},
		insereUrl() {
			// let base = this.$refs.urls.lastChild
			// let clone = base.cloneNode(true)
			// clone.style.animation = "abreNovaUrl .2s ease-in"
			// clone.lastChild.lastElementChild.style.display = "block"
			// clone.firstElementChild.innerText = "URL " + this.i
			// this.$refs.urls.appendChild(clone)
			// this.i++
			this.urlsInput.push({ index: this.idUrl + 1, endereco: '', tipo: '' });
			this.idUrl++;
		}
	}
});

/***/ }),
/* 12 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'URL',
	props: ['props'],
	data() {
		return {
			extensaoBoxShow: false,
			tipoDeArquivo: [{ index: 0, extensao: 'PDF' }, { index: 1, extensao: 'KMZ' }, { index: 2, extensao: 'KML' }, { index: 3, extensao: 'SHP' }, { index: 4, extensao: 'DOC' }],
			excluir: false
		};
	},
	methods: {
		alteraTipoDeArq(evt) {
			this.extensaoBoxShow = false;
			evt.target.parentNode.parentNode.parentNode.firstElementChild.innerText = evt.target.innerText;
		},
		deletaUrl(evt) {
			// evt.target.parentNode.parentNode.firstElementChild.innerText.slice(4, this.length)
			this.excluir = true;
		}
	}
});

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Arquivo_vue__ = __webpack_require__(10);
//
//
//
//
//
//
//
//
//
//
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
			nArquivos: [{ index: 0 }],
			arqCounter: 1
		};
	},
	components: {
		Arquivo: __WEBPACK_IMPORTED_MODULE_0__components_Arquivo_vue__["a" /* default */]
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
		},
		insereArquivo(evt) {
			this.nArquivos.push({ index: this.arqCounter });
			this.arqCounter++;
		}
	}
});

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(4);

var _vuex2 = _interopRequireDefault(_vuex);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(23);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(45);

var _store2 = _interopRequireDefault(_store);

var _adminMenuFix = __webpack_require__(46);

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

// fix the admin menu for the slug "vue-app"
(0, _adminMenuFix2.default)('gu-index-admin');

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(5);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_200a6b1e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(22);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(20)
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
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */,
/* 22 */
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
      _c("router-view", {
        attrs: { props: { arquivos: _vm.arquivos, projetos: _vm.projetos } }
      })
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(6);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = __webpack_require__(24);

var _Home2 = _interopRequireDefault(_Home);

var _Projeto = __webpack_require__(27);

var _Projeto2 = _interopRequireDefault(_Projeto);

var _AdicionarProjeto = __webpack_require__(39);

var _AdicionarProjeto2 = _interopRequireDefault(_AdicionarProjeto);

var _Configuracoes = __webpack_require__(42);

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
		path: '/adicionar-projeto',
		name: 'AdicionarProjeto',
		component: _AdicionarProjeto2.default
	}, {
		path: '/configuracoes',
		name: 'Configuracoes',
		component: _Configuracoes2.default
	}]
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(7);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45e83875_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(26);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
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
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
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
        _vm._l(_vm.props.projetos, function(projeto) {
          return _vm._l(_vm.nProjetos, function(projetoId) {
            return projetoId == projeto.id
              ? _c("tr", { class: _vm.ocultoClass(projeto.status) }, [
                  _c("td", [
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v(_vm._s(projeto.nome))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(projeto.autoria))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(_vm.displayData(projeto.ultimaMod)))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "div",
                      {
                        staticClass: "switchCont",
                        on: {
                          click: function($event) {
                            _vm.switchCont(projeto.status)
                          }
                        }
                      },
                      [
                        _c("div", { class: _vm.ocultoClass(projeto.status) }, [
                          projeto.status == 1
                            ? _c("span", [_vm._v("Disponível")])
                            : _c("span", [_vm._v("Oculto")])
                        ])
                      ]
                    )
                  ])
                ])
              : _vm._e()
          })
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Projeto_vue__ = __webpack_require__(8);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3853e4fd_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Projeto_vue__ = __webpack_require__(38);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(28)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Projeto_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3853e4fd_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Projeto_vue__["a" /* default */],
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
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Etapa_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c5feb5d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Etapa_vue__ = __webpack_require__(37);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(30)
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
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_URL_vue__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b740449_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_URL_vue__ = __webpack_require__(34);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(33)
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
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("tr", { staticClass: "URL", class: { esconde: _vm.excluir } }, [
    _c("td", [_vm._t("default")], 2),
    _vm._v(" "),
    _c("td", [
      _c("input", { attrs: { type: "text" } }),
      _vm._v(" "),
      _c("div", [
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "Arquivo" },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c("div", { staticClass: "informacoes" }, [
        _c("form", { attrs: { action: "" } }, [
          _c("table", [
            _c("tr", [
              _c("td", { attrs: { width: "10%" } }, [_vm._v("Nome público")]),
              _vm._v(" "),
              _c("td", { attrs: { width: "90%" } }, [
                _c("input", { attrs: { type: "text" } }),
                _vm._v(" "),
                _c("span", { ref: "urlCharCount", staticClass: "charCount" }, [
                  _vm._v("0/330")
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              { ref: "urls" },
              [
                _c("URL", { staticClass: "animate" }, [
                  _vm._v("URL " + _vm._s(_vm.url.index + 1))
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("tr", [
              _c("td", { attrs: { colspan: "2" } }, [
                _c(
                  "div",
                  { staticClass: "addUrl", on: { click: _vm.insereUrl } },
                  [
                    _vm._v("\n\t\t\t\t\t\t\tAdicionar URL "),
                    _c("button", [_vm._v("+")])
                  ]
                )
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
                  [_vm._v("0/330")]
                )
              ])
            ])
          ])
        ])
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-15b454f2", esExports)
  }
}

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "Etapa" }, [
    _c("div", { staticClass: "h-etapa" }, [
      _c("span", [_vm._v("Etapa")]),
      _vm._v(" "),
      _c("h3", [_vm._t("nomeEtapa")], 2),
      _vm._v(" "),
      _c("div", { staticClass: "shortcode_expand" }, [
        _vm._m(0),
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
          _vm._m(1),
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
                _c("td", [_vm._v(_vm._s(_vm.displayData(arquivo.inclusao)))]),
                _vm._v(" "),
                _c("td", [
                  _c("a", { attrs: { href: "" } }, [
                    _vm._v(_vm._s(arquivo.nome))
                  ])
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
                        "https://www.materialui.co/materialIcons/action/reorder_black_192x192.png",
                      alt: ""
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
      _c("button", { staticClass: "adicionar-arquivo" }, [
        _vm._v("+ Adicionar arquivo")
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v("Shortcode da etapa "),
      _c("code", [_vm._v("[tabel id=1.1/]")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Data de inclusão")]),
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-projeto" },
    [
      _c("h1", [_vm._v("Arquivos GU")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._l(_vm.props.projetos, function(projeto) {
        return projeto.id == 6
          ? _c(
              "section",
              { staticClass: "projeto" },
              [
                _c("div", { staticClass: "nome" }, [
                  _c("h2", [_vm._v(_vm._s(projeto.nome))]),
                  _vm._v(" "),
                  _vm._m(1, true)
                ]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "busca-arquivos",
                  attrs: { type: "text", placeholder: "Pesquisar arquivos" }
                }),
                _vm._v(" "),
                _vm._l(_vm.etapasInput, function(etapa) {
                  return _c(
                    "Etapa",
                    { key: "etapa.id", attrs: { props: _vm.props } },
                    [
                      _c("template", { slot: "nomeEtapa" }, [
                        _vm._v(_vm._s(etapa.nome))
                      ])
                    ],
                    2
                  )
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "adicionarEtapa",
                    on: { click: _vm.insereEtapa }
                  },
                  [_vm._v("+ Adicionar etapa")]
                )
              ],
              2
            )
          : _vm._e()
      }),
      _vm._v(" "),
      _c("section", { staticClass: "acoes" }, [
        _c(
          "button",
          {
            on: {
              click: function($event) {
                _vm.luzToggle()
              }
            }
          },
          [_vm._v("Cancelar")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            on: {
              click: function($event) {
                _vm.teste($event)
              }
            }
          },
          [_vm._v("Salvar")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "luz", class: { apagada: _vm.apagaLuz } })
    ],
    2
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "shortcode_expand" }, [
      _c("span", [
        _vm._v("Shortcode do projeto "),
        _c("code", [_vm._v("[tabel id=1/]")])
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
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdicionarProjeto_vue__ = __webpack_require__(14);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_68ef0786_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdicionarProjeto_vue__ = __webpack_require__(41);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(40)
}
var normalizeComponent = __webpack_require__(0)
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
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-projeto" }, [
      _c("h1", [_vm._v("Adicionar Projeto")]),
      _vm._v(" "),
      _c("section", { staticClass: "cabecalho" }, [
        _c("p", [
          _vm._v(
            "Criação de um projeto e suas etapas. Ao criar as etapas, elas serão numeradas em ordem crescente."
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("Para inserir os links em um post, copie o Shortcode "),
          _c("code", [
            _vm._v("[tabel id=<"),
            _c("span", { staticStyle: { color: "#0073aa" } }, [
              _vm._v("número da ID")
            ]),
            _vm._v(">/]")
          ]),
          _vm._v(
            " e cole no lugar desejado. Cada lista/tabela tem um único Shortcode."
          )
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "form" }, [
        _c("form", [
          _c("input", {
            attrs: {
              type: "text",
              id: "nome",
              placeholder: "Digite o nome do projeto"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "acoes" }, [
        _c("button", [_vm._v("Cancelar")]),
        _vm._v(" "),
        _c("button", [_vm._v("Salvar")])
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Configuracoes_vue__ = __webpack_require__(15);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26eeb9d6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Configuracoes_vue__ = __webpack_require__(44);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(43)
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
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(4);

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var store = new _vuex2.default.Store({
	state: {
		arquivos: [{
			"nome": "Diagnóstico",
			"id": 1,
			"id_etapa": 2,
			"atualizacao": "2018-08-21 18:37:28",
			"autor": "devspurbanismo",
			"descricao": "Minuta de consulta pública para Programa de Interesse Público",
			"posicao": 1
		}, {
			"nome": "Mapas",
			"id": 2,
			"id_etapa": 2,
			"atualizacao": "2018-08-21 18:37:50",
			"autor": "devspurbanismo",
			"descricao": "Mapas do Anexo I da Minuta de consulta pública",
			"posicao": 2
		}, {
			"nome": "Ofício",
			"id": 3,
			"id_etapa": 1,
			"atualizacao": "2018-08-21 19:11:38",
			"autor": "devspurbanismo",
			"descricao": "Pedido de instauração de Projeto de Intervenção Urbana (PIU) relativo à área do Complexo Anhembi",
			"posicao": 1
		}],
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
		projetos: [{
			'nome': 'PIU Anhembi',
			'id': 6,
			'ativo': 1,
			'autor': 'devspurbanismo',
			'atualizacao': '2018-08-21 19:11:38'
		}, {
			'nome': 'PIU Rio Branco',
			'id': 21,
			'ativo': 1,
			'autor': 'devspurbanismo',
			'atualizacao': '2018-08-21 18:37:50'
		}],
		apagaLuz: false
	},
	getters: {},
	mutations: {
		luzToggle: function luzToggle(state) {
			state.apagaLuz = !state.apagaLuz;
		}
	},
	actions: {}
});

exports.default = store;

/***/ }),
/* 46 */
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
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_URL_vue__ = __webpack_require__(32);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			nUrl: [{ 'index': 1, 'url': '', 'extensao': '' }]
		};
	},
	components: {
		URL: __WEBPACK_IMPORTED_MODULE_0__components_URL_vue__["a" /* default */]
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
			this.nUrl.push({ 'index': this.nUrl.length + 1, 'url': '', 'extensao': '' });
		}
	}
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdicionarArquivo_vue__ = __webpack_require__(58);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ef4b2672_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdicionarArquivo_vue__ = __webpack_require__(61);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(60)
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
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "AdicionarArquivo" }, [
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
          _vm._l(_vm.nUrl, function(url) {
            return _c("URL", [_vm._v("URL " + _vm._s(url.index))])
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
    _vm._m(3)
  ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "actions" }, [
      _c("button", { staticClass: "cancelar" }, [_vm._v("Cancelar")]),
      _vm._v(" "),
      _c("button", { staticClass: "adicionar" }, [_vm._v("Adicionar")])
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

/***/ })
],[16]);