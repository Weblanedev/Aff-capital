import React from "react";

type RevealProps = {
  children: React.ReactNode;
  delayMs?: number;
};

export default function Reveal({
  children,
  delayMs = 0,
}: RevealProps): JSX.Element {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delayMs);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      style={{
        transform: visible ? "none" : "translateY(18px)",
        opacity: visible ? 1 : 0,
        transition: "all 700ms cubic-bezier(.2,.65,.25,1)",
      }}
    >
      {children}
    </div>
  );
}
