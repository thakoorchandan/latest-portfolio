function SoftSkillCard(props) {
  const { name } = props;
  return (
    <span className="glass-soft glass-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-muted transition-colors duration-300 hover:text-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent to-accent-soft" />
      {name}
    </span>
  );
}

export default SoftSkillCard;
