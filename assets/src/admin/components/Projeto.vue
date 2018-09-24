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
			<div class="etapa">
				<div class="h-etapa">
					<h3>Etapa 1</h3>
					<div class="shortcode_expand">
						<span>Shortcode da etapa <code>[tabel id=1.1/]</code></span>
						<button @click="etapaCollapse($event)">&#9650;</button>
					</div>
				</div>
				<div class="arquivo-cont" v-for="n in nArquivos">
					<Arquivo></Arquivo>
					<button @click="insereArquivo">Inserir um arquivo aqui</button>
				</div>
			</div>
		</section>
		<section class="acoes">
			<button>Cancelar</button>
			<button>Salvar</button>
		</section>
	</div>
</template>

<script>
import Arquivo from '../components/Arquivo.vue'

export default {
	name: 'Projeto',
	data() {
		return {
			arquivos: [
				{
					"nome": "PIU Rio Branco",
					"ativo": 1,
					"arquivos":[
						{
							"nome": "Diagnóstico",
							"id": 1,
							"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
							"autor": "devspurbanismo",
							"fonte": "Gestão Urbana",
							"atualizacao": "2018-08-21 18:37:28",
							"etapa":{
									"id": 2,
									"nome": "Consulta Pública Inicial"
							}
						},
						{
							"nome": "Mapas",
							"id": 2,
							"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_ANEXOI_reduzido.pdf",
							"autor": "devspurbanismo",
							"fonte": "Gestão Urbana",
							"atualizacao":"2018-08-21 18:37:50",
							"etapa":{
									"id": 2,
									"nome": "Consulta Pública Inicial"
							}
						}
					]
				},
				{
					"nome": "PIU Anhembi",
					"ativo": 1,
					"arquivos":[
						{
							"nome": "Ofício",
							"id": 3,
							"url": "http://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/piu-monitoramento/ANH1_Oficio.pdf",
							"autor": "devspurbanismo",
							"fonte": "PA",
							"atualizacao":"2018-08-21 19:11:38",
							"etapa":{
								"id_etapa": 1,
								"nome_etapa": "Consulta Pública Inicial",
							}
						}
					]
				}
			],
			nArquivos: 1
		};
	},
	components: {
		Arquivo,
	},
	methods: {
		etapaCollapse(evt) {
			let divEtapa = evt.target.parentNode.parentNode.parentNode
			if (divEtapa.style.maxHeight != '40px') {
				divEtapa.style.maxHeight = '40px'
				evt.target.style.transform = 'rotate(180deg)'
			} else {
				divEtapa.style.maxHeight = '4000px'
				evt.target.style.transform = 'rotate(0deg)'
			}
		},
		insereArquivo() { this.nArquivos++ }
	}
};
</script>

<style lang="scss" scoped>
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
			&:first-child { float: left; background-color: #FE4C4C; }
			&:last-child { float: right; background-color: #219653; }
		}
	}
}
</style>