---
layout: documentation
title: Getting started
permalink: /en/download/
language: en
thumbnail: /img/indice.jpg
---
> See the small table of contents at left? 
It is Indice working. It's discreet, but works as a charm. **It's minified version is just 1KB!**

### Download the files
This script is available as a full package containing all the need files to compile.
It's made in vanilla javascript so you don't have to include any inconvenient third-party library. There is a simple stylesheet for the elements Indice makes be understandable in the screen.

The sources are in the **src** folder with the uncompressed javascript file and the **sass** original files.

<script src="https://gumroad.com/js/gumroad.js"></script>
<a class="gumroad-button" href="https://gum.co/IYGJC" target="_blank">Download "Indice"</a> &nbsp; &nbsp; [**Github repo**](https://github.com/elvessousa/indice)

### Using the script
To use it, copy to your project link it in your page and be happy:

{% highlight html %}
  <link rel="stylesheet" href="path/to/css/indice.css">
  <script src="path/to/js/indice.min.js">
{% endhighlight %}

And add this callback in your page's code:
{% highlight html %}
  <script>
    (function(){
      var toc = new Indice();
      toc.make(".your-container-class h3", ".indice");
    })();
  </script>
{% endhighlight %}

For a basic use, it's all you need to do!

---

### Using the source code
If you don't have **NodeJS** installed, download it from the [site](https://nodejs.org). This project uses **Yarn**. In order do install it in the system, after installing **NodeJS**, do the following in a terminal:

{% highlight shell %}
  $ npm install -g yarn
{% endhighlight %}

---


### Install
In order to run, type the following in a terminal:

{% highlight shell %}
  $ yarn install
  $ yarn run serve
{% endhighlight %}

You're ready to go!
