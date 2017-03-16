// --------------------------------------------------------------------------
// 
//  INDICE
//  Creates a table of contents based on the desired tags.
//  By defaut it takes all H3 tags and creates the menu inside a container
//  with the "indice" class.
// 
//  - Variables
//  - Object
//  - Shortcut function
//  - Slugify
//  - Create menu and anchors
//  - Default task: run all gulp task at once
// 
// --------------------------------------------------------------------------
(function () {
  // ----------------------------------------------------
  // Variables
  // ----------------------------------------------------
  var $, link, listener,
    nav, slug, title, top;

  // ----------------------------------------------------
  // Object
  // ----------------------------------------------------
  this.Indice = function () {};

  // ----------------------------------------------------
  // Shortcut function
  // ----------------------------------------------------
  $ = function (elem) {
    return document.querySelectorAll(elem);
  };

  // ----------------------------------------------------
  // Slugify
  // ----------------------------------------------------
  String.prototype.toSlug = function () {
    var from, to;

    // Removes accents and spaces
    str  = this.replace(/^\s+|\s+$/g, '');
    str  = str.toLowerCase();
    from = "ãàáäâèéëêìíïîõòóöôùúüûñç·/_,: ;";
    to   = "aaaaaeeeeiiiiooooouuuunc------";

    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    return str;
  };

  // ----------------------------------------------------
  // Create menu and anchors
  // ----------------------------------------------------
  Indice.prototype.make = function (el, nav) {
    document.addEventListener('DOMContentLoaded', function () {
      var items, tops, size;
      size  = document.body.scrollHeight;
      el    = el ? $(el)  : $("h3");
      nav   = nav ? $(nav): $(".indice");
      items = el.length;
      tops  = [];

      for (var i = 0; i < items; i++) {
        var etop, title, link, slug, anchor;
        item   = el[i];
        etop   = el[i].offsetTop;
        title  = document.createTextNode(item.innerHTML);
        link   = document.createElement("a");
        slug   = item.innerHTML.toSlug();
        anchor = document.createElement("a");

        // Anchor inside title
        anchor.setAttribute("name", slug);
        item.setAttribute("class", slug);
        item.parentNode.insertBefore(anchor, item);

        // Link inside sidebar
        link.appendChild(title);
        link.setAttribute("href", '#' + slug);
        link.setAttribute("data-top", etop);
        link.setAttribute("class", 'indice-link link-' + slug);
        nav[0].appendChild(link);
        tops.push(etop);
      }

      // Fixed menu
      top = nav[0].offsetTop;
      listener = function (y) {
        y = window.pageYOffset;

        if (y >= top) {
          nav[0].classList.add('fixed');
        } else {
          nav[0].classList.remove('fixed');
        }

        for (var t = 0; t < tops.length; t++) {
          var aim, link, ntop, ltop;
          etop = el[t].offsetTop;
          aim  = $('.indice-link[data-top = "'+etop+'"]')[0];
          ntop = (typeof(el[t+1]) != 'undefined') ? el[t+1].offsetTop : size;
          link = $('.indice-link')[t];
          ltop = parseInt(link.getAttribute('data-top'));

          if (y >= etop && y <= ntop) {
            aim.classList.add('in');
          } else {
            aim.classList.remove('in');
          }
        }
      };
      window.addEventListener('scroll', listener, false);
    });
  };
})();