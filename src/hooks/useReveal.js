import { useEffect } from 'react';

/**
 * Scroll-Triggered reveal: observes every [data-reveal] element and adds
 * the .is-visible class once it enters the viewport. Supports optional
 * stagger via the data-reveal-delay attribute (ms). A MutationObserver
 * keeps watching dynamically rendered elements (e.g. tab content).
 */
export function useReveal() {
  useEffect(() => {
    const observed = new WeakSet();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = (root) => {
      root.querySelectorAll('[data-reveal]').forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        const delay = el.getAttribute('data-reveal-delay');
        if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
        observer.observe(el);
      });
    };

    observeAll(document.body);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) observeAll(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
