lozad(".lozad", {
  load: function (el) {
    el.src = el.dataset.src;
  },
}).observe();
