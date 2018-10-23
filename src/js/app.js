import Dropmic from 'dropmic';
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider'

const App = (() => {

  function carousel() {
    let slider = tns({
      container: '.js-slides',
      slideBy: 'page',
      items: 4,
      gutter: 20,
      prevButton: '.carousel__prev',
      nextButton: '.carousel__next',
      loop: false,
      touch: false,
      responsive: {
        1170: {
          items: 5
        },
        1370: {
          items: 6
       },
        1870: {
          items: 7
       }
      }
    });
  }

  function selectAircraft() {
    const cards = Array.from(document.querySelectorAll('.js-select-aircraft'));
    cards.forEach(card => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        if (card.classList.contains('card--lock')) return;

        console.log(card.dataset.aircraft);
        alert(card.dataset.aircraft);
      });
    });
  }

  function dd() {
    const elems = Array.from(document.querySelectorAll('.dropmic'));
    elems.forEach(dd => {
      new Dropmic(dd);
    });
  }

  function init() {

    carousel();
    selectAircraft();
    dd();

  }

  return {
    init
  };

})();

document.addEventListener('DOMContentLoaded', App.init());
window.addEventListener('load', function() {
  const loading = document.getElementById('loading');
  loading.classList.add('leave');
  loading.addEventListener('transitionend', function(e) {
    loading.parentNode.removeChild(loading);
  }, {
    once: true
  })
})
