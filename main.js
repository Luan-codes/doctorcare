window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll ()
  showBacktotopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2



    // verificar se a seção passou da linha
    // quais dados vou precisar?

    //o topo da seção 
    const sectionTop = section.offsetTop

    // a altura da seção
    const sectionHeight = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop




    // informações dos dados e da lógica
    console.log('O topo da seção chegou ou passou da lina?' ,sectionTopReachOrPassedTargetline 
    )


    //verificar se a base está abaixp da linha alvo
    //quais dados vou precisar?

    //seção termina on
  const sectionEndsAt = sectionTop + sectionHeight

  // O final da seção passou da linah alvo
  const sectionEndPassedTargetline =  sectionEndsAt <= targetLine

  console.log('O fundo da seção passou da linha]?' ,sectionEndPassedTargetline)

  // limites da seção

  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(` .menu a[href*=${sectionId}]`)

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll () {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBacktotopButtonOnScroll() {
  if (scrollY > 550) {
    backtotopButton.classList.add('show')
  } else {
    backtotopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// Selecione o elemento nav
const nav = document.getElementById("nav");

// Função para adicionar/remover a classe "scroll" com base na posição do scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("scroll");  // Adiciona a classe se rolou para baixo
  } else {
    nav.classList.remove("scroll");  // Remove a classe se voltar ao topo
  }
});


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
