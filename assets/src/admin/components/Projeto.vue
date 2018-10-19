<template>
	<div class="app-projeto">
		<h1>Arquivos GU</h1>
		<section class="cabecalho">
			<p>A partir desta tela, você consegue editar os conteúdos das listas e tabelas de URL.</p>
			<p>Cada linha corresponde a um link com formatos variados (PDF, DOC, KMZ, SHP etc).</p>
		</section>
		<section class="projeto">
			<div class="nome">
				<h2>Plano Diretor</h2>
				<div class="shortcode_expand">
					<span>Shortcode do projeto <code>[tabel id=1/]</code></span>
				</div>
			</div>
			<Etapa v-for="etapa in etapasInput" :key="etapa.index">Etapa {{ etapa.index+1 }}</Etapa>
			<button class="adicionarEtapa" @click="insereEtapa">Adicionar etapa</button>
		</section>
		<section class="acoes">
			<button>Cancelar</button>
			<button @click="teste($event)">Salvar</button>
		</section>
		<div class="luz" :class="{ ativo: apagaLuz }">
			<div class="modal" :class="{ ativo: apagaLuz }" ref="modal">
				<div class="svgCont">
					<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z"/></svg>
				</div>
				Alterações realizadas com sucesso
				<a href="">Projetos criados</a>
				<a href="">Novo projeto</a>
			</div>
		</div>
	</div>
</template>

<script>
import Etapa from '../components/Etapa.vue'

export default {
	name: 'Projeto',
	data() {
		return {
			apagaLuz: false,
			etapasInput: [
				{ index: 0 }
			],
			etapaCounter: 1,
		};
	},
	components: {
		Etapa
	},
	methods: {
		insereEtapa() {
			this.etapasInput.push({ index: this.etapaCounter })
			this.etapaCounter++
		},
		teste(evt) {
			this.apagaLuz = true
			console.log('apaga')
			console.log(evt)
			evt.target.classList.add('clicked')
		}
	},
	updated() {
		let modal = this.$refs.modal
		let app = this
		const f = function(evt) {
			if (modal.contains(evt.target) == false) {
				console.log('acende')
				console.log(evt)
				app.apagaLuz = false
			} else { return false }
		}
		if (app.apagaLuz == true) {
			app.$el.addEventListener("click", f, false)
			// app.$el.addEventListener("keydown", function(evt) {
			// 	if (evt.code == 27) {
			// 		// app.apagaLuz = false
			// 		console.log('esc')
			// 	} else {
			// 		return false }
			// })
		} else if (app.apagaLuz == false) {
			app.$el.removeEventListener("click", f, false)
		}
	}
}
</script>

<style lang="scss">
div.app-projeto {
h1 { font-weight: bold; }
section:not(.projeto) { margin: 2rem 0; p { color: #898989; } }
code { color: initial; }
button, input, textarea { margin: 0; font-family: inherit; }

	section.projeto {
		h2, h3, h4, h5, h6 { margin: 0; }

		background-color: #FFF;
		padding: 8px 12px 12px 12px;
		border: 1px solid #DDD;
		box-shadow: 0 4px 4px rgba(0, 0, 0, .12);
		box-sizing: border-box;
		max-width: 1000px;

		div.nome {
			height: 40px;
			h2 {
				display: inline-block;
				font-size: x-large;
				line-height: 40px;
			}
			& > div.shortcode_expand {
				display: inline-flex;
				align-items: center;
				height: 100%;
				float: right;
				span { color: #898989; }
			}
		}

		div.etapa {
			display: flex;
			flex-flow: column nowrap;
			margin: 12px 0 0 0;
			border: 1px solid #DDD;
			border-radius: 2px;
			min-height: 40px;
			max-height: unset;
			overflow: hidden;
			transition: all ease-in-out .2s;

			div.h-etapa {
				height: 40px;
				padding: 8px 12px;
				box-sizing: border-box;
				border-bottom: 1px solid #DDD;
				h3 { display: inline-block; vertical-align: middle; }
				& > div.shortcode_expand {
					display: inline-flex;
					align-items: center;
					float: right;
					height: 100%;
					color: #898989;
					button {
						margin: 0 0 0 12px;
						padding: 0;
						border: 0;
						background-color: transparent;
						color: #CCC;
						transition: all ease-out .2s;
						cursor: pointer;
						transform-origin: center 61%;
						&:hover { color: initial; }
					}
				}
			}

			@keyframes abreNovoArquivo {
				from { max-height: 0px; }
				to { max-height: 600px; }
			}

			div.arquivo-cont {
				position: relative;
				overflow: hidden;
				animation: abreNovoArquivo .4s ease-in;
				& > button {
					position: absolute;
					margin-left: auto;
					margin-right: auto;
					left: 0;
					right: 0;
					bottom: 2px;
					background: #0073aa;
					border: 0;
					border-radius: 2px 2px 0 0;
					color: #FFF;
					font-weight: bold;
					cursor: pointer;
					font-size: xx-small;
					text-transform: uppercase;
					padding: 1px 4px 0 4px;
					&:active { color: rgba(255, 255, 255, .4); }
				}
			}
		}
	}

	button.adicionarEtapa {
		margin: 12px 0 0 0 !important;
		display: block;
		width: 100%;
		padding: 1rem;
		background: transparent;
		border: 1px dashed #BBB;
		border-radius: 12px;
		color: #BBB;
		cursor: pointer;
		transition: all .2s;

		&:hover {
			border: 1px solid #5b9dd9;
			color: #5b9dd9;
			box-shadow: 0 0 2px rgba(30,140,190,.8);
		}
	}

	section.acoes {
		max-width: 1000px;
		width: 100%;
		button {
			margin: 0;
			font-family: inherit;
			font-size: large;
			border: 0;
			padding: 20px 32px;
			border-radius: 2px;
			cursor: pointer;
			color: #FFF;
			box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .24);
			position: relative;
			overflow: hidden;
			&::before {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 20px;
				display: block;
				background: transparent;
				content: '';
				transition: all ease-out .4s;
			}
			&:first-child { float: left; background-color: #FE4C4C; }
			&:last-child { float: right; background-color: #219653; }
			&.clicked::before {
				margin-left: 100%;
				background: rgba(255, 255, 255, .4);
			}
			&.disabled {
				opacity: .4;
				-moz-user-select: none;
				user-select: none;
			}
		}
	}

	div.luz {
		position: absolute;
		top: 0;
		left: -20px;
		width: calc(100% + 20px);
		height: 100vh;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		z-index: -1;
		transition: all .4s ease-in-out;
		&.ativo {
			background-color: rgba(0, 0, 0, .4);
			z-index: 1;
		}

		div.modal {
			font-size: large;
			color: #219653;
			line-height: 160%;
			text-align: center;
			width: 200px;
			padding: 24px;
			background: #fff;
			border-radius: 2px;
			box-shadow: 0 2px 2px rgba(0, 0, 0, .24);
			transform: translateY(100vh);
			transition-duration: .6s;
			&.ativo { transform: translateY(0); }

			div.svgCont {
				svg { fill: #219653; }
			}

			a {
				display: block;
				background: #C4C4C4;
				color: initial;
				text-decoration: none;
				border-radius: 2px;
				margin: 24px 0 0 0;
				padding: 12px 16px;
				transition: all .2s;
				&:hover { background: #eee; }
			}
		}
	}
}
</style>