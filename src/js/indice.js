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
  var $, anchor, el, item, items, link, listener, nav, slug, title, top;

  // ----------------------------------------------------
  // Object
  // ----------------------------------------------------
  this.Indice = function() { };

  // ----------------------------------------------------
  // Shortcut function
  // ----------------------------------------------------
  $ = function (elem) {
    return document.querySelectorAll(elem);
  };

  // ----------------------------------------------------
  // Slugify
  // ----------------------------------------------------
  String.prototype.toSlug = function(st) {
    st = this.toLowerCase()
    .replace(/[\u00C0-\u00C5]/ig,'a')
    .replace(/[\u00C8-\u00CB]/ig,'e')
    .replace(/[\u00CC-\u00CF]/ig,'i')
    .replace(/[\u00D2-\u00D6]/ig,'o')
    .replace(/[\u00D9-\u00DC]/ig,'u')
    .replace(/[\u00D1]/ig,'n')
    .replace('ç','c')
    .replace(/[^a-z0-9 ]+/gi,'')
    .trim().replace(/ /g,'-')
    .replace(/[\-]{2}/g,'');
    return (st.replace(/[^a-z\- ]*/gi,''));
  };

  // ----------------------------------------------------
  // Create menu and anchors
  // ----------------------------------------------------
  Indice.prototype.make = function(el, nav) {
    document.addEventListener('DOMContentLoaded', function () {
      el    = el ? $(el) : $("h3");
      nav   = nav ? $(nav) : $(".indice");
      items = el.length;

      for (var i = 0; i < items; i++) {
        item   = el[i];
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
        link.setAttribute("class", 'indice-link link-' + slug);
        nav[0].appendChild(link);
      }

      // Fixed menu
      top      = nav[0].offsetTop;
      listener = function (y) {
        y = window.pageYOffset;

        if (y >= top) {
          nav[0].classList.add('fixed');
        } else {
          nav[0].classList.remove('fixed');
        }
      };
      window.addEventListener('scroll', listener, false);
    });
  };
})();
