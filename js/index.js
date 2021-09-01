// Задание 1
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  // Задание 2
  const howContentArr = [{
      id: 1,
      title: 'Проводим консультацию',
      text: 'Влечет за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати,  стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.',
      photo: 'how__photo_first'
    },
    {
      id: 2,
      title: 'Составляем смету',
      text: 'Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.',
      photo: 'how__photo_second'
    },
    {
      id: 3,
      title: 'Привлекаем подрядчиков',
      text: 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.',
      photo: 'how__photo_third'
    },
    {
      id: 4,
      title: 'Инспектируем все этапы работ',
      text: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.',
      photo: 'how__photo_fourth'
    }
  ]
  const $howTitle = document.querySelector('[data-how="title"]')
  const $howText = document.querySelector('[data-how="text"]')
  const $howPhoto = document.querySelector('[data-how="photo"]')
  const $howSteps = document.querySelectorAll('[data-step]')
  let $howStepActive = document.querySelector('.how__progress-btn_active')
  $howSteps.forEach(el => {
    el.addEventListener('click', e => {
      howContentArr.forEach(item => {
        if (e.target.dataset.step == item.id) {
          $howStepActive.classList.remove('how__progress-btn_active')
          $howStepActive = e.target
          $howStepActive.classList.add('how__progress-btn_active')
          $howTitle.textContent = item.title
          $howText.textContent = item.text
          $howPhoto.dataset.photo = item.id
        }
      })
    })
  })
})

// Задание 3

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    active: null,
    animate: 250,
    classes: {
      "ui-accordion-header": "faq__question",
      "ui-accordion-header-collapsed": "faq__question_collapsed",
      "ui-accordion-content": "text faq__answer"
    },
    icons: { "header": "faq__plus", "activeHeader": "faq__plus_active" }
  })
})

// Задание 4

const $burger = document.querySelector('.burger')
const $burgerBtn = document.querySelector('.burger__btn')

$burgerBtn.addEventListener('click', () => {
  $burger.classList.toggle('burger_active')
})