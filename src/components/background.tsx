const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full bg-purple-400 opacity-20 blur-[100px]" />
      <div className="absolute top-60 -left-32 h-[400px] w-[400px] rounded-full bg-blue-400 opacity-20 blur-[100px]" />
    </div>
  );
};

export default Background; 