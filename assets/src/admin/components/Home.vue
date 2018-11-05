<template>
	<div class="home">
		<h1 @click="luzToggle()">Arquivos GU</h1>
		<section>
			<p>Esta é a lista de arquivos por projeto e etapa. Clique no nome do projeto para editar sua lista.</p>
			<p>Para inserir os links em um post, copie o shortcode <code>[tabel id=&lt;<span style="color: #0073aa;">número da ID</span>&gt;/]</code> e cole no lugar desejado. Cada lista/tabela tem um único shortcode.</p>
		</section>
		<input type="text" placeholder="Pesquisar...">
		<button>Incluir projeto</button>
		<table>
			<thead>
				<th width="35%">Projeto</th>
				<th width="25%">Autor(a)</th>
				<th width="25%">Última modificação</th>
				<th width="15%"></th>
			</thead>
			<template v-for="projeto in props.projetos">
				<tr v-for="projetoId in nProjetos" v-if="projetoId == projeto.id" :class="ocultoClass(projeto.status)"> <!-- fk -->
					<td><a href="#">{{ projeto.nome }}</a></td>
					<td>{{ projeto.autoria }}</td>
					<td>{{ displayData(projeto.ultimaMod) }}</td>
					<td>
						<div class="switchCont" @click="switchCont(projeto.status)">
							<div :class="ocultoClass(projeto.status)">
								<span v-if="projeto.status == 1">Disponível</span>
								<span v-else>Oculto</span>
							</div>
						</div>
					</td>
				</tr>
			</template>
		</table>
	</div>
</template>

<script>

export default {
	name: 'Home',
	components: {},
	props: [ 'props' ],
	data() {
		return {
			nProjetos: [],
		}
	},
	beforeMount() {
		this.montaProjetos()
	},
	mounted() {},
	computed: {},
	methods:{
		montaProjetos() {
			let projetosTemp = new Set()
			this.$props.props.arquivos.map(function(index) {
				projetosTemp.add(index.projetoId)
			})
			this.nProjetos = Array.from(projetosTemp).sort(function(a, b) { return a - b })
		},
		displayData(data) {
			let aaaa = data.slice(0,4)
			let mm = data.slice(5,7)
			let dd = data.slice(8,10)
			let h = data.slice(11,16)
			return dd+'/'+mm+'/'+aaaa+' ('+h+')'
		},
		ocultoClass(par) {
			if (par == 1) { return '' } else if (par == 0) { return 'oculto' }
		},
		switchCont(par) {
			if (par == 1) {
				par = 0
			} else if (par == 0) {
				par = 1
			}
		},
		luzToggle() {
			this.$store.commit('luzToggle')
		}
	}
};
</script>

<style lang="scss" scoped>
h1 { font-weight: bold; }
section { margin: 2rem 0; p { color: #898989; } }
code { color: initial; }

input[type=text], button {
	height: 40px;
	box-sizing: border-box;
	vertical-align: middle;
}

input[type=text] {
	width: 50%;
	padding: 0 40px 0 12px;
	background-color: #FFF;
	background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAADf0lEQVR4AeyaA/DdThDHt3YHf7M2kttv7fZ1WNsd1e0YtUe13THrdlTbtm3bTK295+TyUz47etrL97KX27d7FBAQEBAQEBAQkCxl/+M+mIwF2Myn+QU/wVnehAWYzH2sfyh1YymM4ANwoth+jABTasSuzrvhxGe8265OqYlyhbEUToK2VBWgVEEWjMArOIkbv8AIykIpC/7i7XCSN96Ovyjl4Cq4A8el3eEqlDKgPV7D8cBeoz35j6oaJfLv8BSuV76s+rtgzoI58ZdVRoUwme9F/P4rVZX8xS4Y6XJ4BZoiG4UB2dCUV0T41b3yhcg/kC3CdrUqdjyjBlaFlXBAyjYIxoaN5FYUJ6pz2PAbR/5gVeJ3egjY1SgBUEMPQX5nVSIfyMTHtLl7YBejBLGL4YEm4RhlItOoxvrMqfpJeaqv30nVmEzDGzQBA5P2NVD6wnrT8V9cG3IfuQB7NX8lySQ8Wg7oLhGwq2n+RpNJcE0Mt4xcwsuEx6tkjvIl5HzZdcglqOtjEHF3MdRdDx57mbSMtpc5ATPFUHPIAzBXeJ1hTsBGMZQnabBqJ1bBRnMCLohtp5YnAmqJablIppD5i1XcyN5yl0wht/4S+cgDSuQTIfSWTCGT4DJ5yQPK5JWJeVoPoYdkClwUi7g2eYCqLQRcNidgvYjWDt5UN4TXDeYEzBBzNdfIRjbXv1TijgelwSy4K+5AVzIFSmr/oELkEhWSPq0yZA6+ZTqdxjUyCY/REupq7qqr0h9PIYnZIMJeV/72aQJAZuG1moT+lCTor13+VjINN/KsrBIKUyBrSMbJhCNeFLa4qF7YwhbyA1R2X1q0q4UrLTLIHzAuXHE3/sSCO4RrjfBU8osy2bEfThhbyVXiaMeG7xGcKZrf18ZqMg0OuwnWwQlrz1DS98Z29BaTCpUva/3zb66COdXf5cuqEE8RkoUAP54/YSPZa+Oh5B92NQ/arA/5rXinH/mH9Q9vdXX5F63iaAonBSVQFjWcXyTZH56BX+kDcFJWAqkCSRz2WMlF6QtwUkaCfCrtj3uhblPt6AfgpJAECRgjYxx4OswDUYQEPCylJciF3QeTMf/TkbMnX7apLTxatVR/k8R/Cabg9+3PMREAIADDQDShjBH5jBXAQrmPgjzC7wQEhLkQEBAQ7kMIoJOQ/UpC9nsJe3QVQu1+CO/vS5IkSQd2zX60cmQg4gAAAABJRU5ErkJggg=='); /* ICONE LUPA */
	background-size: 18px;
	background-repeat: no-repeat;
	background-position: calc(100% - 12px);
	border: 1px solid #DDD;
	margin: 0;
	&:focus {
		border-color: #0073aa;
		box-shadow: 0 0 2px #0073aa;
	}
}

button {
	background: #0073aa;
	border: 2px solid rgba(0, 0, 0, .2);
	border-radius: 2px;
	color: #FFF;
	font-weight: bold;
	cursor: pointer;
	margin: 0;
	position: relative;
	&:hover::after {
		content: '';
		position: absolute;
		background: #FFF;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: .2;
	}
}

table {
	width: 100%;
	max-width: 1000px;
	text-align: left;
	background: #FFF;
	border: 1px solid #DDD;
	border-spacing: 0;
	margin: 1rem 0 0 0;

	thead th, tr td { padding: 8px 0; transition: all ease-in-out 80ms; position: relative; }
	thead th { border-bottom: 1px solid #DDD; font-weight: bold; }
	th:first-child, td:first-child { padding-left: 12px; }
	th:last-child, td:last-child {
		padding-right: 12px;
	}

	tr:nth-child(even) td { background-color: #F9F9F9; }
	tr:hover td { background: rgba(0, 0, 0, .08); }

	tr td:first-child a {
		font-weight: bold;
		text-decoration: none;
	}

	tr td:last-child div.switchCont {
		float: right;
		width: 100%;
		max-width: 140px;
		background: #C4C4C4;
		border-radius: 2px;
		margin: 0;
		padding: 0;
		cursor: pointer;

		& > div {
			margin: 0;
			text-align: center;
			width: 50%;
			color: #FFF;
			font-weight: bold;
			font-size: smaller;
			padding: 4px 0;
			overflow: hidden;
			border-radius: 2px;
			box-shadow: inset 0 2px 2px rgba(0, 0, 0, .12);
			background: #0073aa;
			transition: all .2s ease-out;

			&.oculto {
				margin-left: 50%;
				background: #FE4C4C;
			}
		}
	}

	tr.oculto td:not(:last-child)::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #FFF;
		opacity: .64;
	}
	tr.oculto:hover td { background: unset; }
}
</style>
