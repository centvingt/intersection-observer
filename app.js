const observer = new IntersectionObserver(
  (entries) => {
    console.log('---')

    entries.forEach((entry, index) => {
      console.log(
        'app.js > entry.intersectionRatio >',
        index,
        entry.intersectionRatio
      )

      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  },
  { threshold: 0.5 }
)

const sections = document.querySelectorAll('section')
sections.forEach((section, index) => {
  if (index === 0) {
    section.classList.add('show')
  }
  observer.observe(section)
})
