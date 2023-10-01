(function ($) {
        var $navBar =document.getElementById('menu-nav'), $menBtns = document.querySelectorAll('.menu-button');
        $menBtns.forEach(function(el){
          console.log(el)
          el.addEventListener('click', function(e){
            e.preventDefault();
            $navBar.classList.toggle('-translate-y-full');
          })
        })})(window)