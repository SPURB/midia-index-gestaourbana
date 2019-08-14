# Indexador de arquivos do portal Gestão Urbana
Plugin para wordpress de indexação de arquivos e mídias do [portal gestão urbana](https://gestaourbana.prefeitura.sp.gov.br/).

### Pré-requisitos
- [wordpress](https://wordpress.org/) ^4.9.*
- [yarn](https://yarnpkg.com/en/)
- Conexão com [api gestão urbana](https://documenter.getpostman.com/view/4136141/S1ZxbpLD).
> Para realizar operações __CRUD__ na api de homologação ou produção será necessário configurar as chaves. Envie um email para desenvolvimento@spurbanismo.sp.gov.br

### Instruções para desenvolver
1. Clone este repositório no diretório de plugins na sua instalação do wordpress `\wp-content\plugins`
2. Altere os valores do arquivo `config-sample.json` e renomeie-o para `config.json` 
3. Instale as dependencias no diretório `\wp-content\plugins\midia-index-gestaourbana` rodando o comando `yarn`
4. Neste mesmo diretório rode o comando `yarn dev`. Os arquivos de desenvolvimento do frontend estão em `\assets\src`.

### Para publicar o plugin
No mesmo diretório execute o comando.
```
yarn build
```

### Demo
[![Demo](https://raw.githubusercontent.com/SPURB/wiki-assets/master/midia-index/demo1.png)](https://youtu.be/eXkC-ccbggE)

### Observação 
Este plugin utiliza o backend deste repositório: [consultas-publicas-backend](https://github.com/SPURB/consultas-publicas-backend) (branch dev).
