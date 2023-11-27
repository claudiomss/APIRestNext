

<a id="0"></a>
# API Rest com Next

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#1)

:small_blue_diamond: [Funcionalidades](#2)

:small_blue_diamond: [EndPoints](#3)

:small_blue_diamond: [Dados](#4)

:small_blue_diamond: [Como rodar a aplicação](#5)

:small_blue_diamond: [Linguagens, dependencias e libs utilizadas](#6)


<a id="1"></a>
##  :memo: Descrição do projeto 

Este projeto tem como objetivo criar uma **API** implementando uma arquitetura **REST**.


<a id="2"></a>
##  :books: Funcionalidades

:heavy_check_mark: **Buscar Posts**: Requisição GET à API com retorno dos posts

:heavy_check_mark: **Criar Post**: Requisição POST à API com os dados do post

:heavy_check_mark: **Alterar Post**: Requisição PUT à API com os dados a serem modificados

:heavy_check_mark: **Delete Post**: Requisição DELETE à API com identificador a ser deletado


<a id="3"></a>
##  :o: Endpoints

 **GET** : /api/blog
 **POST**: /api/blog
 **PUT**: /api/blog/[id]
 **DELETE**: /api/blog/[id]

<a id="4"></a>
##  :floppy_disk: Dados

Dentro de [lib/data.ts](https://github.com/claudiomss/APIRestNext/blob/master/lib/data.ts) existe uma variável **posts** e **funções** para gerenciamento do mesmo. 

### Posts: 

![ddd](https://github.com/claudiomss/APIRestNext/blob/master/screenshot/data.png?raw=true)

---
|title|desc|date|id|
| -------- |-------- |-------- |--------
|Evolução |Evolução é um processo no qual ocorrem mudanças nos seres...|2023-11-26T07:4012.589Z|1700984420274|



<a id="5"></a>
##  :arrow_forward: Como rodar a aplicação 

Clone o projeto em sua máquina: 

```
git clone https://github.com/claudiomss/APIRestNext.git
```
Instale as dependências:

```
npm i
```
Iniciar aplicação:

```
npm run dev
```

<a id="6"></a>
##  :wrench:Linguagens, dependencias e libs utilizadas
- HTML
- CSS
- Javascript
- Typescript
- Next

[ Voltar para o topo](#0)
