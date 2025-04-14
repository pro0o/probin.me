export function Footer() {
  return (
    <div className="mb-6 space-y-6">
      <div className="my-6 flex justify-start">
        <img
          src="/ghilbi.gif"
          alt="Animated Ghibli character"
          className="w-56 h-auto animate-fade-in opacity-70"
        />
      </div>

      <p className="text-sm leading-relaxed animate-fade-in-up">
        <span className="text-accent">~</span> Anyways, feel free to connect with me :)
      </p>
    </div>
  );
}
