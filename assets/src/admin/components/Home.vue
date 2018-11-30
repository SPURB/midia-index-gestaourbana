<template>
	<div class="home">
		<h1>Arquivos GU</h1>
		<section>
			<p>Esta é a lista de arquivos por projeto e etapa. Clique no nome do projeto para editar sua lista.</p>
			<p>Para inserir os links em um post, copie o shortcode <code @click="copiaSlug($event)">[tabel id=&lt;<span style="color: #0073aa;">número da ID</span>&gt;/]</code> e cole no lugar desejado. Cada lista/tabela tem um único shortcode.</p>
		</section>
		<section class="buscaprojeto">
			<input type="text" placeholder="Pesquisar..." v-model="busca">
			<button @click="abreNovoProjeto()">+ Adicionar projeto</button>
		</section>
		<table>
			<thead>
				<th width="35%">Projeto</th>
				<th width="25%">Autor(a)</th>
				<th width="25%">Última modificação</th>
				<th width="15%"></th>
			</thead>
			<tr v-for="projeto in projetosFiltrado" :class="ocultoClass(projeto.ativo)">
				<td>
					<router-link 
						:to="goToProjeto(projeto.id)"
						tag="a">{{ projeto.nome }}
					</router-link>
				</td>

				<td>{{ projeto.wordpress_user_id }}</td> <!-- esta id é a id da tabela wordpress_user_id, precisamos incluir a coluna user_login -->
				<td>{{ displayData(projeto.atualizacao) }}</td>
				<td>
					<div class="switchCont" @click="ativoToggle(projeto.id)">
						<div :class="ocultoClass(projeto.ativo)">
							<span v-if="projeto.ativo == 1">Disponível</span>
							<span v-else>Oculto</span>
						</div>
					</div>
				</td>
			</tr>
		</table>
		<AdicionarProjeto v-if="abreAddProjetoBox"></AdicionarProjeto>
		<section class="SalvarCancelar">
			<SalvarCancelar 
				:tipo="'cancelar'"
				:texto="'Cancelar'"
				:disabledState="!projetosAlterados"
				:commitName="'RESET_PROJETOS'">
			</SalvarCancelar>
			<SalvarCancelar 
				:tipo="'salvar'"
				:texto="'Salvar disponibilidade de arquivos'"
				:disabledState="!projetosAlterados"
				:actionName="{
					name: 'putProjetos',
					parameter: idsProjetosAlterados
				}">
			</SalvarCancelar>
		</section>
	</div>
</template>

<script>
import AdicionarProjeto from '../components/AdicionarProjeto.vue'
import SalvarCancelar from '../components/SalvarCancelar.vue'
import trataSlug from '../mixins/trataSlug'

export default {
	name: 'Home',
	components: {
		AdicionarProjeto,
		SalvarCancelar
	},
	mixins:[ trataSlug ],
	data(){
		return {
			busca: '',
		}
	},
	computed: {
		projetosAlterados() { return this.$store.getters.projetosAlterados }, 
		abreAddProjetoBox() { return this.$store.state.addProjetoBox },
		projetosFiltrado(){
			const app = this
			return this.$store.state.projetos.filter(function(projeto) {
				return projeto.nome.toLowerCase().indexOf(app.busca.toLowerCase()) >= 0;
			})
		},
		idsProjetosAlterados(){
			return this.$store.state.projetos.filter(index => index.alterado == true ).map( index => index.id )
		}
	},
	methods:{
		goToProjeto(pathId){ return '/projeto/' + pathId },
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
		ativoToggle(incomeId) { 
			this.$store.commit('ativoToggle', incomeId) 
		},
		abreNovoProjeto() {
			this.$store.commit('abreAdicionarProjetoBox')
			this.$store.commit('luzToggle')
		}
	}
};
</script>

<style lang="scss" scoped>
section { margin: 2rem 0; p { color: #898989; } }

section.buscaprojeto {
	display: flex;
	align-items: stretch;
	justify-content: space-between;
	width: 100%;

	input[type=text], button {
		height: 40px;
		border-radius: 20px;
		box-sizing: border-box;
	}

	input[type=text] {
		width: 100%;
		padding: 0 16px;
		background-color: #FFF;
		border: 1px solid #DDD;
		margin: 0 120px 0 0 !important;
		&:focus {
			border-color: #0073aa;
			box-shadow: 0 0 2px #0073aa;
		}
	}

	button {
		width: 240px;
		border: 0;
		background: #0073aa;
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
}

table {
	width: 100%;
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
		user-select: none;
		-moz-user-select: none;

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
