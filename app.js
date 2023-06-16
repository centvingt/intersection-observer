const observer = new IntersectionObserver(
  (entries) => {
    // Cette fonction sera appelée à chaque fois que la visibilité d’un élément observé changera

    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show')
      else entry.target.classList.remove('show')
    })
  },
  { threshold: 0.1 }
)

const sections = document.querySelectorAll('section')
sections.forEach((section) => observer.observe(section))
