export function BlogBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />
      <div className="absolute bottom-0 right-[-120px] h-[600px] w-[600px] rounded-full bg-blue-400/5 blur-[200px]" />
      <div className="absolute bottom-10 left-[-100px] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[180px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.15) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
    </div>
  );
}
