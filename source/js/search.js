$(document).ready(function() {
  Array.prototype.forEach.call(document.querySelectorAll('.mdl-card__media'), function(el) {
      var link = el.querySelector('a');
      if (!link) {
          return;
      }
      var target = link.getAttribute('href');
      if (!target) {
          return;
      }
      el.addEventListener('click', function() {
          location.href = target;
      });
  });

  // Auto fill visitor-url "http://"
  $("#visitor-url").focus(function() {
      this.placeholder = "http://";
  });
  $("#visitor-url").blur(function() {
      this.placeholder = "";
  });

  // Auto delete input content & placeholder
  $(".search-input").blur(function() {
      this.value = "";
      this.placeholder="";
  });

  // Auto hidden share/tags popup block
  $('#article-fuctions-share-button, #article-functions-viewtags-button').click(function() {
      $('.is-visible').removeClass('is-visible');
  });

  // Add 'fab' class to the PageNav <a>
  $('.fabs .prev, .fabs .next, .fabs .prev-content').addClass('fab');

  // Smooth scroll to Top
  $("a.toTop").click(function() {
      $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
          duration: 500,
          easing: "swing"
      });
      return false;
  });


  // Smooth scroll of TOC
  $(".column-toc a").click(function() {
      $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
          duration: 500,
          easing: "swing"
      });
      return false;
  });

  // Click anywhere to close the FAB menu
  $(document).click(function() {
      if( $("#prime").hasClass("is-visible") ) {
          $("#prime").click();
      }
  });
  $("#prime").click(function(e) {
      e.stopPropagation();
      return false;
  });

  // Click anywhere to remove local search result
  $(document).click(function() {
      $("#local-search-result ul").css("display", "none");
  });
});