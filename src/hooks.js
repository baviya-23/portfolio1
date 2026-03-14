import { useState, useEffect, useRef } from 'react';

/* ── Scroll reveal ──────────────────────────────────────── */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

/* ── Typewriter ─────────────────────────────────────────── */
export function useTypewriter(words) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    const delay = deleting ? 60 : 120;
    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && text === '') {
        setDeleting(false);
        setIdx(i => (i + 1) % words.length);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, idx, words]);

  return text;
}

/* ── Counter animation ──────────────────────────────────── */
export function useCounter(to) {
  const [val, setVal] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = Math.ceil(to / 40);
        const t = setInterval(() => {
          start = Math.min(start + step, to);
          setVal(start);
          if (start >= to) clearInterval(t);
        }, 30);
      }
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  return { val, ref };
}
