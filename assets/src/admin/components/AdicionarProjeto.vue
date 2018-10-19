<template>
	<div class="app-projeto">
		<h1>Adicionar Projeto</h1>
		<section class="cabecalho">
			<p>Criação de um projeto e suas etapas. Ao criar as etapas, elas serão numeradas em ordem crescente.</p>
			<p>Para inserir os links em um post, copie o Shortcode <code>[tabel id=&lt;<span style="color: #0073aa;">número da ID</span>&gt;/]</code> e cole no lugar desejado. Cada lista/tabela tem um único Shortcode.</p>
		</section>
		<section class="form">			
			<form>
				<input type="text" id="nome" placeholder="Digite o nome do projeto">
			</form>
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
			nArquivos: [
				{ index: 0 }
			],
			arqCounter: 1,
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
		insereArquivo(evt) {
			this.nArquivos.push({ index: this.arqCounter })
			this.arqCounter++
		}
	}
};
</script>

<style lang="scss" scoped>
div.app-projeto {
h1 { font-weight: bold; }
section:not(.projeto) { margin: 2rem 0; p { color: #898989; } }
code { color: initial; }
button, input, textarea { margin: 0; font-family: inherit; }

	section.form {
		form {
			margin: 0;
			input {
				display: block;
				width: 100%;
				max-width: 1000px;
				padding: 20px;
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