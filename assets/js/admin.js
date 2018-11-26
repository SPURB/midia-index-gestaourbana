pluginWebpack([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
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
				console.log("Async: Cópia para o clipboard realizada com sucesso");
			}, function (err) {
				console.error("Async: Não foi possível copiar o texto: ", err);
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
				var msg = successful ? "sucesso" : "erro";
				console.log("Fallback: Cópia do texto realizado com " + msg);
			} catch (err) {
				console.error("Fallback: Oops, não foi possível copiar", err);
			}
			document.body.removeChild(textArea);
		}
	}
};

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
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
		this.$store.dispatch('fetchProjetos');
	},
	watch: {
		'$route'(to) {
			this.$store.dispatch('fetchInfoProjeto', to.params.id);
		}
	}
});

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AdicionarProjeto_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_trataSlug__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_trataSlug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_trataSlug__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_trataSlug___default.a],
	data() {
		return {
			busca: ''
		};
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
		},
		projetosFiltrado: function () {
			const app = this;
			return this.projetos.filter(function (projeto) {
				return projeto.nome.toLowerCase().indexOf(app.busca.toLowerCase()) >= 0;
			});
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
		abreNovoProjeto() {
			this.$store.commit('abreAdicionarProjetoBox');
			this.$store.commit('luzToggle');
		}
	}
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdicionarProjeto_vue__ = __webpack_require__(12);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_68ef0786_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdicionarProjeto_vue__ = __webpack_require__(41);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(40)
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_trataSlug__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_trataSlug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_trataSlug__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_trataSlug___default.a],
	data() {
		return {
			nomeProjeto: '',
			disabled: true,
			message: false
		};
	},
	computed: {
		projetosNomes: {
			get() {
				return this.$store.state.projetos.map(index => index.nome.toLowerCase());
			}
		},
		projetosIds() {
			return this.$store.state.projetos.map(index => parseInt(index.id));
		}
	},
	watch: {
		nomeProjeto(nome) {
			const nomeCaixaBaixa = nome.toLowerCase();
			const nomeIgual = this.projetosNomes.find(function (index) {
				return index == nomeCaixaBaixa;
			});
			if (nomeIgual === undefined) {
				this.message = false;
				this.disabled = false;
			} else {
				this.message = 'O projeto "' + nome + '" já existe. Escolha outro nome.';
				this.disabled = true;
			}
		}
	},
	methods: {
		fechaNovoProjetoBox() {
			this.$store.commit('abreAdicionarProjetoBox');
			this.$store.commit('luzToggle');
		},
		adicionarProjeto() {
			const projetoId = Math.max(...this.projetosIds) + 1;

			this.$store.dispatch('postNovoProjeto', {
				ativo: 1,
				id: projetoId,
				nome: this.nomeProjeto,
				atualizacao: this.$store.getters.dataFormatada,
				wordpress_user_id: this.$store.getters.wordpressUserSettings.uid
			});

			this.fechaNovoProjetoBox();
			this.$router.push({ path: '/projeto/' + projetoId });
		}
	}
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Etapa_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AdicionarEtapa_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Modal_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_trataSlug__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_trataSlug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mixins_trataSlug__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_trataSlug___default.a],
	data() {
		return {
			busca: ''
		};
	},
	computed: {
		projeto: {
			get() {
				return this.$store.state.projeto;
			}
			// , set(){ ... }
		},
		abreAdicionarEtapa: {
			get() {
				return this.$store.state.addEtapaBox;
			}
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuedraggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AdicionarArquivo_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_EditarArquivo_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_trataSlug__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_trataSlug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mixins_trataSlug__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_trataSlug___default.a],
	props: {
		idEtapa: {
			type: Number,
			required: true
		},
		idProjeto: {
			type: Number,
			required: true
		},
		busca: {
			type: String,
			required: true,
			default: ''
		}
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
		},
		arquivos: {
			get() {
				return this.$store.state.projeto.etapas[this.indexEtapas(this.idEtapa)].arquivos;
			},
			set(value) {
				this.$store.commit('REORDER_ARQUIVOS', {
					arquivos: value,
					idEtapa: this.idEtapa
				});
			}
		},
		arquivosFiltrados() {
			const app = this;
			return this.arquivos.filter(function (arquivo) {
				return arquivo.nome.toLowerCase().indexOf(app.busca.toLowerCase()) >= 0;
			});
		},
		nomeEtapa: {
			get() {
				return this.$store.state.projeto.etapas[this.indexEtapas(this.idEtapa)].nome;
			},
			set(value) {
				this.$store.commit('UPDATE_ETAPA_NOME', {
					indexEtapa: this.indexEtapas(this.idEtapa),
					nome: value
				});
			}
		}
	},
	methods: {
		indexEtapas(idEtapa) {
			return this.$store.state.projeto.etapas.findIndex(i => i.id === idEtapa);
		},
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
		abreEditArquivoBox(idArquivoFromLoop) {
			this.$store.commit('luzToggle');
			this.$store.commit('abreEditarArquivoBox');
			this.$store.commit('SET_ARQUIVO', {
				idEtapa: this.idEtapa,
				idArquivo: idArquivoFromLoop
			});
		}
	}
});

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_URLnova_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_inputForms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_inputForms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_inputForms__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			form: {
				nome: '',
				descricao: ''
			},
			newUrls: [{}]
		};
	},
	components: {
		URLnova: __WEBPACK_IMPORTED_MODULE_0__components_URLnova_vue__["a" /* default */]
	},
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_inputForms___default.a],
	computed: {
		fechaBox() {
			return this.$store.state.adicionarArquivoBox;
		}
	},
	methods: {
		cancelar() {
			this.$store.commit('luzToggle');
			this.$store.commit('abreAdicionarArquivoBox');
		}
	}
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_URLnova_vue__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05697df5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_URLnova_vue__ = __webpack_require__(51);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(50)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-05697df5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_URLnova_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05697df5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_URLnova_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\components\\URLnova.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05697df5", Component.options)
  } else {
    hotAPI.reload("data-v-05697df5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 18 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'UrlNova',
	props: {
		index: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			input: '',
			displayExtensao: false,
			displayExtensaoBox: false,
			extensao: '',
			extensaoFixa: true
		};
	},
	watch: {
		input(value) {
			this.extensao = this.checkExtensao(value.replace(/ /g, '')); // remove espaços
		},
		extensao(value) {
			value = value.toUpperCase();
			if (value === '...' || value != '') {
				this.displayExtensao = true;
				this.displayExtensaoBox = false;
			} else {
				this.displayExtensao = false;
				this.displayExtensaoBox = false;
			}
		}

	},
	computed: {
		tiposDeArquivo() {
			return this.$store.state.tiposDeArquivo;
		}
	},
	methods: {
		deletaUrl(evt) {
			console.log(evt);
		},
		checkExtensao(url) {
			const regexPattern = /\.([0-9a-z]+)(?:[\?#]|$)/i; // extensão  = apenas texto após o último ponto
			const ext = url.match(regexPattern);
			let extensao;

			if (ext != null) {
				extensao = url.match(regexPattern)[1].toUpperCase();
				extensao === 'RAR' || extensao === 'ZIP' ? extensao = "..." : extensao = extensao;
				extensao === '...' ? this.extensaoFixa = false : this.extensaoFixa = true;
			} else {
				extensao = 'URL';
			}
			return extensao;
		},
		alteraTipoDeArq(ext) {
			console.log(ext);
			this.displayExtensaoBox = false;
			this.extensao = ext;
		},
		openBox() {
			this.extensaoFixa ? this.displayExtensaoBox = false : this.displayExtensaoBox = true;
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
	data: function data() {
		return {
			newUrls: []
		};
	},

	props: {
		idEtapa: {
			type: Number,
			required: true
		}
	},
	methods: {
		addUrl: function addUrl() {
			this.newUrls.push({});
		},
		charCount: function charCount(evt) {
			var txt = evt.target.value;

			var counter = evt.target.parentNode.lastElementChild;
			counter.innerText = txt.length + '/330';
			if (txt.length > 330) {
				counter.style.color = "#FE4C4C";
				evt.target.style.borderColor = "#FE4C4C";
			} else if (txt.length < 330) {
				counter.style.color = "#898989";
				evt.target.style.borderColor = "#DDD";
			}
		}
	}
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_URL_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_URLnova_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_inputForms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_inputForms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mixins_inputForms__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: {
		URL: __WEBPACK_IMPORTED_MODULE_0__components_URL_vue__["a" /* default */],
		URLnova: __WEBPACK_IMPORTED_MODULE_1__components_URLnova_vue__["a" /* default */]
	},
	mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_inputForms___default.a],
	computed: {
		arquivoClicado: {
			get() {
				return this.$store.state.arquivoClicado;
			},
			set(value) {
				this.$store.commit('UPDATE_ARQUIVO_CLICADO', value);
			}
		},
		fechaBox() {
			return this.$store.state.editArquivoBox;
		}
	},
	methods: {
		cancelar() {
			this.$store.commit('luzToggle');
			this.$store.commit('abreEditarArquivoBox');
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
//
//
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
		idUrl: {
			type: Number,
			required: true
		},
		idEtapa: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			extensaoBoxShow: {
				state: false,
				text: '...'
			}
		};
	},
	computed: {
		tiposDeArquivo() {
			return this.$store.state.tiposDeArquivo;
		},
		urlArquivoClicado: {
			get() {
				const urls = this.$store.state.arquivoClicado.urls;
				return urls[this.getIndex(urls, this.idUrl)];
			}
		}
	},
	methods: {
		deletaUrl(evt) {
			console.log(evt);
		},
		displayExtensao(arquivo) {
			const extensaoFromUrl = this.checkExtensao(arquivo.url.replace(/ /g, ''));
			const extensaoState = arquivo.extensao;

			if (extensaoFromUrl === 'ZIP' || extensaoFromUrl === 'RAR') {
				if (extensaoState != false) {
					this.extensaoBoxShow.text = extensaoState;
				}
				return true;
			} else {
				return false;
			}
		},
		checkExtensao(url) {
			const regexPattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
			const ext = url.match(regexPattern);
			let extensao;

			if (ext != null) {
				extensao = url.match(regexPattern)[1].toUpperCase();
			} else {
				extensao = 'URL';
			}
			return extensao;
		},
		getIndex(arr, fileId) {
			return arr.findIndex(item => parseInt(item.id) === fileId);
		},
		alteraTipoDeArq(ext) {
			this.extensaoBoxShow.state = false;
			this.extensaoBoxShow.text = ext;
			this.$store.commit('SET_ARQUIVO_EXTENSION', {
				idUrl: this.idUrl,
				extensao: ext
			});
		}
	}
});

/***/ }),
/* 22 */
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
	name: 'AdicionarEtapa',
	data() {
		return {
			novaEtapaInput: '',
			disabled: true
		};
	},
	watch: {
		novaEtapaInput(name) {
			switch (name) {
				case '':
					this.disabled = true;
				case ' ':
					this.disabled = true;
				default:
					this.disabled = false;
			}
		}
	},
	computed: {
		fechaBox() {
			return this.$store.state.addEtapaBox;
		}
	},
	methods: {
		fechar() {
			this.$store.commit('luzToggle');
			this.$store.commit('abreAdicionarEtapaBox');
		},
		novaEtapa() {
			this.$store.dispatch('postNovaEtapa', this.novaEtapaInput);
		}

	}
});

/***/ }),
/* 23 */
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
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(7);

var _vuex2 = _interopRequireDefault(_vuex);

var _App = __webpack_require__(33);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(37);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(67);

var _store2 = _interopRequireDefault(_store);

var _adminMenuFix = __webpack_require__(87);

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
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(8);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_200a6b1e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(36);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(34)
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
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */,
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(9);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = __webpack_require__(38);

var _Home2 = _interopRequireDefault(_Home);

var _Projeto = __webpack_require__(43);

var _Projeto2 = _interopRequireDefault(_Projeto);

var _AdicionarProjeto = __webpack_require__(11);

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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(10);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45e83875_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(42);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(39)
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
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
  return _c("div", { staticClass: "AdicionarProjeto" }, [
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
        _c("form", [
          _c("fieldset", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.nomeProjeto,
                  expression: "nomeProjeto"
                }
              ],
              attrs: {
                type: "text",
                id: "nome",
                placeholder: "Digite o nome do projeto"
              },
              domProps: { value: _vm.nomeProjeto },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.nomeProjeto = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _vm.message
          ? _c("p", { staticClass: "mensagem-erro" }, [
              _vm._v(_vm._s(_vm.message))
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "actions" }, [
        _c(
          "button",
          { staticClass: "cancelar", on: { click: _vm.fechaNovoProjetoBox } },
          [_vm._v("Cancelar")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "adicionar",
            attrs: { disabled: _vm.disabled },
            on: { click: _vm.adicionarProjeto }
          },
          [_vm._v("Adicionar")]
        )
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
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.busca,
              expression: "busca"
            }
          ],
          attrs: { type: "text", placeholder: "Pesquisar..." },
          domProps: { value: _vm.busca },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.busca = $event.target.value
            }
          }
        }),
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
          _vm._l(_vm.projetosFiltrado, function(projeto) {
            return _c("tr", { class: _vm.ocultoClass(projeto.ativo) }, [
              _c(
                "td",
                [
                  _c(
                    "router-link",
                    { attrs: { to: _vm.goToProjeto(projeto.id), tag: "a" } },
                    [_vm._v(_vm._s(projeto.nome) + "\n\t\t\t\t")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(projeto.wordpress_user_id))]),
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Projeto_vue__ = __webpack_require__(13);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3853e4fd_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Projeto_vue__ = __webpack_require__(66);
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
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Etapa_vue__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c5feb5d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Etapa_vue__ = __webpack_require__(59);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(46)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5c5feb5d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Etapa_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c5feb5d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Etapa_vue__["a" /* default */],
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
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdicionarArquivo_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ef4b2672_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdicionarArquivo_vue__ = __webpack_require__(52);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(49)
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
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("tr", { staticClass: "UrlNova" }, [
    _c("td", [_vm._v("URL")]),
    _vm._v(" "),
    _c("td", [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.input,
            expression: "input"
          }
        ],
        attrs: { type: "text", name: "url" },
        domProps: { value: _vm.input },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.input = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _vm.displayExtensao
        ? _c("div", [
            _c(
              "span",
              {
                class: { extensao_fixa: _vm.extensaoFixa },
                attrs: { disabled: _vm.extensaoFixa },
                on: {
                  click: function($event) {
                    _vm.openBox()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.extensao) + " ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.displayExtensaoBox,
                    expression: "displayExtensaoBox"
                  }
                ],
                ref: "extensaoBox",
                staticClass: "arquivo_extensao-box",
                class: { display: _vm.displayExtensaoBox }
              },
              [
                _vm._v("Selecione a extensão do arquivo\n\t\t\t\t"),
                _c(
                  "i",
                  {
                    on: {
                      click: function($event) {
                        _vm.displayExtensaoBox = !_vm.displayExtensaoBox
                      }
                    }
                  },
                  [_vm._v("×")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "opcoes" },
                  _vm._l(_vm.tiposDeArquivo, function(extensao) {
                    return _c(
                      "span",
                      {
                        on: {
                          click: function($event) {
                            _vm.alteraTipoDeArq(extensao)
                          }
                        }
                      },
                      [_vm._v(_vm._s(extensao))]
                    )
                  })
                )
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.displayExtensao
        ? _c(
            "a",
            {
              staticClass: "excluirUrl",
              on: {
                click: function($event) {
                  _vm.deletaUrl($event)
                }
              }
            },
            [_c("span", [_vm._v("×")])]
          )
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-05697df5", esExports)
  }
}

/***/ }),
/* 52 */
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
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.nome,
                        expression: "form.nome"
                      }
                    ],
                    ref: "nome",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.nome },
                    on: {
                      keyup: function($event) {
                        _vm.charCount($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "nome", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "charCounter" }, [_vm._v("0/330")])
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.newUrls, function(newUrl, index) {
                return [_c("URLnova", { attrs: { index: index } })]
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
                        value: _vm.form.descricao,
                        expression: "form.descricao"
                      }
                    ],
                    attrs: { name: "descricao", id: "descricao" },
                    domProps: { value: _vm.form.descricao },
                    on: {
                      keyup: function($event) {
                        _vm.charCount($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "descricao", $event.target.value)
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
    require("vue-hot-reload-api")      .rerender("data-v-ef4b2672", esExports)
  }
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditarArquivo_vue__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79279d68_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EditarArquivo_vue__ = __webpack_require__(58);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(54)
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
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_URL_vue__ = __webpack_require__(21);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b740449_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_URL_vue__ = __webpack_require__(57);
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
  return _c("tr", { staticClass: "URL" }, [
    _c("td", [_vm._v("URL")]),
    _vm._v(" "),
    _c("td", [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.urlArquivoClicado.url,
            expression: "urlArquivoClicado.url"
          }
        ],
        attrs: { type: "text", name: "url" },
        domProps: { value: _vm.urlArquivoClicado.url },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.urlArquivoClicado, "url", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _vm.displayExtensao(_vm.urlArquivoClicado)
        ? _c("div", [
            _c(
              "span",
              {
                on: {
                  click: function($event) {
                    _vm.extensaoBoxShow.state = !_vm.extensaoBoxShow.state
                  }
                }
              },
              [_vm._v(_vm._s(_vm.extensaoBoxShow.text))]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                ref: "extensaoBox",
                staticClass: "arquivo_extensao-box",
                class: { display: _vm.extensaoBoxShow.state }
              },
              [
                _vm._v("\n\t\t\t\tSelecione a extensão do arquivo \n\t\t\t\t"),
                _c(
                  "i",
                  {
                    on: {
                      click: function($event) {
                        _vm.extensaoBoxShow.state = !_vm.extensaoBoxShow.state
                      }
                    }
                  },
                  [_vm._v("×")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "opcoes" },
                  _vm._l(_vm.tiposDeArquivo, function(extensao) {
                    return _c(
                      "span",
                      {
                        on: {
                          click: function($event) {
                            _vm.alteraTipoDeArq(extensao)
                          }
                        }
                      },
                      [_vm._v(_vm._s(extensao))]
                    )
                  })
                )
              ]
            )
          ])
        : _c("div", [
            _c("span", { staticClass: "extensao_fixa" }, [
              _vm._v(_vm._s(_vm.checkExtensao(_vm.urlArquivoClicado.url)))
            ])
          ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "excluirUrl",
          on: {
            click: function($event) {
              _vm.deletaUrl($event)
            }
          }
        },
        [_c("span", [_vm._v("×")])]
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
/* 58 */
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
                return [
                  _c("URL", {
                    attrs: { idUrl: parseInt(url.id), idEtapa: _vm.idEtapa }
                  })
                ]
              }),
              _vm._v(" "),
              _vm._l(_vm.newUrls, function(newUrl, index) {
                return [_c("URLnova", { attrs: { index: index } })]
              }),
              _vm._v(" "),
              _c("tr", [
                _c("td", { attrs: { colspan: "2" } }, [
                  _c(
                    "div",
                    { staticClass: "addUrl", on: { click: _vm.addUrl } },
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
          _c("button", { staticClass: "adicionar" }, [_vm._v("Salvar")])
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
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.arquivosFiltrados.length > 0
    ? _c(
        "div",
        { staticClass: "Etapa" },
        [
          _c("div", { staticClass: "h-etapa" }, [
            _c("span", [_vm._v("Etapa")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.nomeEtapa,
                  expression: "nomeEtapa"
                }
              ],
              attrs: { type: "text", name: "nome" },
              domProps: { value: _vm.nomeEtapa },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.nomeEtapa = $event.target.value
                }
              }
            }),
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
                        _vm._s(_vm.idEtapa) +
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
                  _vm._l(_vm.arquivosFiltrados, function(arquivo) {
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
                              "https://www.materialui.co/materialIcons/action/reorder_black_192x192.png",
                            alt: "reorder"
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
          _vm.editarArquivo
            ? _c("EditarArquivo", { attrs: { idEtapa: _vm.idEtapa } })
            : _vm._e(),
          _vm._v(" "),
          _vm.abreNovoArquivo
            ? _c("AdicionarArquivo", { attrs: { idEtapa: _vm.idEtapa } })
            : _vm._e()
        ],
        1
      )
    : _vm._e()
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
            alt: "files"
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
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdicionarEtapa_vue__ = __webpack_require__(22);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b35d5ac6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdicionarEtapa_vue__ = __webpack_require__(62);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(61)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b35d5ac6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AdicionarEtapa_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b35d5ac6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AdicionarEtapa_vue__["a" /* default */],
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
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
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
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.novaEtapaInput,
                      expression: "novaEtapaInput"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.novaEtapaInput },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.novaEtapaInput = $event.target.value
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
                  _vm.fechar()
                }
              }
            },
            [_vm._v("Cancelar")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "adicionar",
              attrs: { disabled: _vm.disabled },
              on: { click: _vm.novaEtapa }
            },
            [_vm._v("Adicionar")]
          )
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
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cd28607_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__ = __webpack_require__(65);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(64)
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
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
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
/* 66 */
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
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.busca,
                expression: "busca"
              }
            ],
            staticClass: "busca-arquivos",
            attrs: { type: "text", placeholder: "Pesquisar arquivos..." },
            domProps: { value: _vm.busca },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.busca = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.projeto.etapas, function(etapa) {
            return [
              _c("Etapa", {
                attrs: {
                  idEtapa: etapa.id,
                  idProjeto: _vm.projeto.id,
                  busca: _vm.busca
                }
              })
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(7);

var _vuex2 = _interopRequireDefault(_vuex);

var _apiFake = __webpack_require__(68);

var _apiFake2 = _interopRequireDefault(_apiFake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);
// import api from '../utils/api'


var store = new _vuex2.default.Store({
	state: {
		projeto: {},
		arquivoClicado: undefined,
		projetos: [],
		tiposDeArquivo: ['PDF', 'KML', 'SHP', 'DOC', 'XLS'],
		apagaLuz: false,
		editArquivoBox: false,
		adicionarArquivoBox: false,
		addEtapaBox: false,
		addProjetoBox: false
	},
	getters: {
		wordpressUserSettings: function wordpressUserSettings() {
			return userSettings;
		},
		dataFormatada: function dataFormatada() {
			var d = new Date(),
			    year = d.getFullYear(),
			    month = d.getMonth() + 1,
			    day = d.getDate(),
			    hour = d.getHours(),
			    minutes = d.getMinutes(),
			    seconds = d.getSeconds();

			function twoDigits(oneDigit) {
				var digits = oneDigit.toString().length;
				if (digits === 1) {
					return '0' + oneDigit.toString();
				} else {
					return oneDigit;
				}
			}

			return year + '-' + twoDigits(month) + '-' + twoDigits(day) + ' ' + twoDigits(hour) + ':' + twoDigits(minutes) + ':' + twoDigits(seconds);
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
		SET_ARQUIVO: function SET_ARQUIVO(state, arquivo) {
			var etapas = state.projeto.etapas;
			var indexEtapas = etapas.findIndex(function (i) {
				return i.id === arquivo.idEtapa;
			});
			var indexArquivos = etapas[indexEtapas].arquivos.findIndex(function (i) {
				return i.id === arquivo.idArquivo;
			});
			state.arquivoClicado = etapas[indexEtapas].arquivos[indexArquivos];
		},
		REORDER_ARQUIVOS: function REORDER_ARQUIVOS(state, obj) {
			var indexEtapa = state.projeto.etapas.findIndex(function (i) {
				return i.id === obj.idEtapa;
			});
			state.projeto.etapas[indexEtapa].arquivos = obj.arquivos;
		},
		SET_ARQUIVO_EXTENSION: function SET_ARQUIVO_EXTENSION(state, obj) {
			var indexUrl = state.arquivoClicado.urls.findIndex(function (i) {
				return parseInt(i.id) === parseInt(obj.idUrl);
			});
			state.arquivoClicado.urls[indexUrl].extensao = obj.extensao;
		},
		SET_PROJETO: function SET_PROJETO(state, obj) {
			/* 
   alterar action -> POST PROJETO, se 200 state.projetos.push(response)
   este push(obj). Este 'obj' deve ser o 'response' do POST
   */
			console.log(obj);
		},
		SET_NOVA_ETAPA: function SET_NOVA_ETAPA(state, nome) {
			/* 
   alterar action -> POST ETAPA
   */
			console.log('idProjeto: ' + state.projeto.id);
			console.log(nome);
		},
		UPDATE_ETAPA_NOME: function UPDATE_ETAPA_NOME(state, objIndexEtapaNome) {
			state.projeto.etapas[objIndexEtapaNome.indexEtapa].nome = objIndexEtapaNome.nome;
		},
		UPDATE_ARQUIVO_CLICADO: function UPDATE_ARQUIVO_CLICADO(state, arquivo) {
			state.arquivoClicado = arquivo;
		}
	},
	actions: {
		fetchProjetos: function fetchProjetos(state) {
			//			api.get('projetos')
			_apiFake2.default.get('?data=projetos').then(function (response) {
				state.commit('SET_PROJETOS', response);
			}).catch(function (error) {
				console.log(error);
			}).then(function () {
				// fim de fetch 
			});
		},
		fetchInfoProjeto: function fetchInfoProjeto(state, id) {
			//			api.get('projeto/'+id)
			_apiFake2.default.get('?data=projeto/' + id).then(function (response) {
				state.commit('SET_INFO_PROJETO', response);
			}).catch(function (error) {
				console.log(error);
			}).then(function () {
				// fim de fetch 
			});
		},
		postNovoProjeto: function postNovoProjeto(state, obj) {
			state.commit('SET_PROJETO', obj);
			// api.post(obj)
			// 	.then(response => {
			// 		state.commit('SET_PROJETO', response)
			// 	})
			// 	.catch(error => {
			// 		console.log(error)
			// 	})
			// 	.then(() => {
			// 		// fim de fetch
			// 	}
			// )
		},
		postNovaEtapa: function postNovaEtapa(state, nome) {
			state.commit('SET_NOVA_ETAPA', nome);
			// api.post(nome)
			// 	.then(response => {
			// 		state.commit('SET_NOVA_ETAPA', response)
			// 	})
			// 	.catch(error => {
			// 		console.log(error)
			// 	})
			// 	.then(() => {
			// 		// fim de fetch
			// 	}
			// )
		}
	}
});

exports.default = store;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(24);

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
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
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
],[30]);