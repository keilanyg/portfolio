document.addEventListener('DOMContentLoaded', function () {
	const categories = document.querySelectorAll('.categories a');
	const gridItems = document.querySelectorAll('.grid-wrapper__item');

	categories.forEach(category => {
	  category.addEventListener('click', (e) => {
		e.preventDefault();
		const filter = category.getAttribute('href').substring(1);

		categories.forEach(cat => cat.classList.remove('active'));
		category.classList.add('active');

		gridItems.forEach(item => {
		  const itemCategoria = item.getAttribute('data-categoria');
		  if (filter === 'Todas' || filter === itemCategoria) {
			item.style.display = 'block';
		  } else {
			item.style.display = 'none';
		  }
		});
	  });
	});
  });

  window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
            document.getElementById("navbar").style.background = "#fff";
        }

        const navToggle = document.querySelector(".nav-toggle");
        const navLinks = document.querySelectorAll(".nav__link");

        navToggle.addEventListener("click", () => {
            document.body.classList.toggle("nav-open");
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                document.body.classList.remove("nav-open");
            });
        });