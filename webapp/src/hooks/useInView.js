import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that returns a ref + boolean indicating if the element
 * has entered the viewport. Used for scroll-triggered animations.
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - How much of the element must be visible (0–1)
 * @param {string} options.rootMargin - Margin around the root
 * @param {boolean} options.once - Whether to disconnect after first intersection
 */
export function useInView({ threshold = 0.15, rootMargin = '0px', once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
