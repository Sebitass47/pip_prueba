
export default {
    mounted(el, binding) {
      const callback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('animated');
            el.classList.add('bounce-in-top');
            if (binding.value && typeof binding.value === 'function') {
              binding.value(el);
            }
            observer.unobserve(el);
          }
        });
      };
  
      const observer = new IntersectionObserver(callback, { threshold: 0.1 });
      observer.observe(el);
    }
  }
  