const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));