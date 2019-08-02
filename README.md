# midia-index-gestaourbana
Plugin para wordpress de indexação de arquivos e mídias do portal gestão urbana.

### Pré-requisitos
- wordpress ^4.9.*
- YARN

### Instruções para desenvolver
1. Altere os valores do arquivo `config-sample.json` e renomeie-o para `config.json` 
2. Clone este repositório no diretório de plugins na sua instalação do wordpress `\wp-content\plugins`
3. Instale as dependencias no diretório `\wp-content\plugins\midia-index-gestaourbana` rodando o comando `yarn`
4. Para desenvolver: `yarn dev`. Os arquivos de desenvolvimento do frontend estão em `\assets\src`.

### Demo
[![Demo](https://raw.githubusercontent.com/SPURB/wiki-assets/master/midia-index/demo1.png)](https://youtu.be/eXkC-ccbggE)

### Observação 
Este plugin utiliza o backend deste repositório: [consultas-publicas-backend](https://github.com/SPURB/consultas-publicas-backend) (branch dev).
