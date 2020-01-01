---
layout: documentation
title: Iniciando
permalink: pt/download/
language: pt
thumbnail: /img/grade.jpg
---

> Você consegue ver o pequeno índice à esquerda. É o Indice funcionando. É discreto, mas funciona muito bem. **Sua versão minificada tem apenas 1KB!**

### Baixe os arquivos
Este script está disponível com um pacote completo contendo todos os arquivos necessários para compilar a fonte. É feito em javascript puro para que você não tenha que incluir bibliotecas de terceiros. Há uma simples folha de estilos inclusa para que os elementos croados pelo Indice seja compreensíveis na tela.

As fontes estão no diretório **src** com o javascript sem compressão e os arquivos **sass** originais.

<script src="https://gumroad.com/js/gumroad.js"></script>
<a class="gumroad-button" href="https://gum.co/IYGJC" target="_blank">Download "Indice"</a> &nbsp; &nbsp; [**Github repo**](https://github.com/elvessousa/indice)

### Usando script
Para usá-lo, copie os arquivos, os referencie na sua página e seja feliz:

{% highlight html %}
  <link rel="stylesheet" href="path/to/css/indice.css">
  <script src="path/to/js/indice.min.js">
{% endhighlight %}

E depois adicione esta chamada no seu código:
{% highlight html %}
  <script>
    (function(){
      var toc = new Indice();
      toc.make(".sua-classe-do-container h3", ".indice");
    })();
  </script>
{% endhighlight %}

Para um uso básico, é tudo o que precisa fazer!

---

### Usando o código-fonte
Se você não tem o **NodeJS** instalado, baixe-i do [site](https://nodejs.org). Este projeto usa o o **Yarn**. Para instalá-lo no sistema, após ter instalado o **NodeJS**, faça o seguinte em um terminal:

{% highlight shell %}
  $ npm install -g yarn
{% endhighlight %}

---


### Rodar a aplicação
Para rodar, digite o seguinte em um terminal:

{% highlight shell %}
  $ yarn install
  $ yarn run serve
{% endhighlight %}

Tudo pronto!
