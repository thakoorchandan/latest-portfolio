function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-soft" />
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
