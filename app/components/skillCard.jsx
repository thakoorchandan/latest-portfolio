/* eslint-disable @next/next/no-img-element */
function SkillCard(props) {
  const { name, imageUrl } = props;
  return (
    <div className="glass glass-hover group flex w-24 flex-col items-center gap-3 rounded-2xl p-4 sm:w-20">
      <img
        src={imageUrl}
        alt={name}
        className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110"
      />
      <span className="text-center text-xs font-semibold text-muted transition-colors duration-300 group-hover:text-foreground">
        {name}
      </span>
    </div>
  );
}

export default SkillCard;
