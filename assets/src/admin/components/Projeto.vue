<template>
	<div class="app-projeto">
		<h1>Arquivos GU</h1>
		<section>
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
						<button>V</button>
					</div>
				</div>
				<div class="arquivo">
					<div class="acoes">
						<h6>Mover</h6>
						<button class="mover">&uarr;</button>
						<button class="mover">&darr;</button>
						<button class="excluir">Excluir</button>
					</div>
					<div class="informacoes">
						<table>
							<tr>
								<td width="10%">Nome público</td>
								<td width="90%">
									<input type="text">
									<div>
										<span>KML</span>
										<div class="arquivo_extensao-box">
											Selecione o tipo de arquivo
											<form>
												<label for="arquivo_kmz">KMZ</label>
												<input type="radio" id="arquivo_kmz">
												<label for="arquivo_pdf">PDF</label>
												<input type="radio" id="arquivo_pdf">
												<label for="arquivo_kml">KML</label>
												<input type="radio" id="arquivo_kml">
												<label for="arquivo_shp">SHP</label>
												<input type="radio" id="arquivo_shp">
												<label for="arquivo_doc">DOC</label>
												<input type="radio" id="arquivo_doc">
											</form>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>URL 1</td>
								<td>
									<input type="text">
									<span>32</span>
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<button>Inserir mais uma URL</button>
								</td>
							</tr>
							<tr>
								<td>Descrição</td>
								<td>
									<textarea name="descricao"></textarea>
								</td>
							</tr>
						</table>
					</div>
					<button>Incluir um arquivo aqui</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
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
			]
		};
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

			div.h-etapa {
				height: 40px;
				padding: 8px 12px;
				box-sizing: border-box;
				h3 { display: inline-block; vertical-align: middle; }
				& > div.shortcode_expand {
					display: inline-flex;
					align-items: center;
					float: right;
					height: 100%;
					color: #898989;
					button {
						margin-left: 12px;
					}
				}
			}

			div.arquivo {
				display: flex;
				position: relative;
				column-gap: 36px;
				padding: 8px 12px 24px 12px;
				border-bottom: 2px solid #0073aa;

				div.acoes {
					display: flex;
					flex-flow: column nowrap;
					h6 {
						text-transform: uppercase;
						text-align: center;
						color: #898989;
					}
					button {
						border: none;
						padding: 8px 12px;
						border-radius: 2px;
						box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .24);
						cursor: pointer;
						margin-top: 4px;
						&:active { box-shadow: inset 0 0 2px rgba(0, 0, 0, .12); }
					}
					button.excluir {
						margin-top: 20px;
						color: #FFF;
						font-weight: bold;
						background-color: #FE4C4C;
					}
				}

				& > button {
					position: absolute;
					margin-left: auto;
					margin-right: auto;
					left: 0;
					right: 0;
					bottom: -2px;
					background: #0073aa;
					border: 0;
					border-radius: 2px 2px 0 0;
					color: #FFF;
					font-weight: bold;
					cursor: pointer;
					font-size: x-small;
					text-transform: uppercase;
					padding: 0 4px;
					&:active { color: rgba(255, 255, 255, .4); }
				}
			}

			div.informacoes {
				width: 100%;
				input, textarea { width: 100%; margin: 0; }
				table {
					width: 100%;
					border-spacing: 0;
					tr td { margin-bottom: 8px; }
					tr td:first-child {
						text-align: right;
						padding-right: 12px;
						font-weight: bold;
						vertical-align: text-top;
					}
					tr td[colspan] {
						display: table-cell !important;
						padding-right: 0;
						button {
							margin: 0 0 16px 0;
							border: 1px solid #DDD;
							border-radius: 2px;
							font-size: smaller;
							text-transform: uppercase;
							font-weight: normal;
							color: #CCC;
							background-color: transparent;
							padding: 4px 8px;
						}
					}
					tr td:last-child {
						display: flex;
						align-items: center;
						justify-content: space-between;
						column-gap: 12px;
						width: 100%;
						input { width: 100%; }
						& > div {
							position: relative;
							& > * { box-sizing: border-box; }
							span {
								display: inline-block;
								height: 100%;
								background-color: #BBB;
								padding: 4px 8px;
								font-weight: bold;
								color: #FFF;
								border-radius: 2px;
								box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .12);
								user-select: none;
								cursor: pointer;
								&:active { color: rgba(255, 255, 255, .4); }
							}
							div.arquivo_extensao-box {
								position: absolute;
								right: 0;
								top: 0;
								background-color: #898989;
								width: intrinsic;
								width: max-content;
								width: -moz-max-content;
								padding: 8px 12px 12px 12px;
								color: #FFF;
								border-radius: 2px;
								box-shadow: 0 4px 4px rgba(0, 0, 0, .24);
								display: none;
								& > form {
									margin-top: 8px;
									input[type=radio] { display: none; }
									label {
										display: inline-block;
										height: 100%;
										background-color: #BBB;
										padding: 4px 8px;
										font-weight: bold;
										border-radius: 2px;
										box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .12);
										&:active { color: rgba(255, 255, 255, .4); }
									}
								}
							}
						}
					}
				}
			}

			div.arquivo:nth-child(even) { background-color: #F9F9F9; }
			div.arquivo:nth-child(odd) { background-color: #F1F1F1; }
		}
	}
}
</style>