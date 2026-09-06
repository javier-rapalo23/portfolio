import { motion } from 'framer-motion';

/**
 * Cabecera de sección: índice monoespaciado + título en serif display.
 * Alineada a la izquierda a propósito — el centrado uniforme era
 * lo que aplanaba el ritmo de la página.
 */
const SectionHeader = ({ index, label, title, className = '' }) => (
  <motion.header
    className={`flex flex-col gap-5 ${className}`}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, margin: '-80px' }}
  >
    <div className="flex items-baseline gap-4">
      <span className="eyebrow tnum text-accent">{index}</span>
      <span className="eyebrow">{label}</span>
      <span aria-hidden className="h-px flex-1 bg-[rgba(241,237,231,0.08)]" />
    </div>
    <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.02] text-ink-strong">
      {title}
    </h2>
  </motion.header>
);

export default SectionHeader;
