import { Actions } from "./_components/actions";
import { SessionInfo } from "./_components/session-info";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[600px] flex bg-white/5 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8 sm:p-12 w-full">
          <h1 className="text-xl font-bold text-center mb-8">
            Welcome to Our App
          </h1>
          <SessionInfo />
          <Actions />
        </div>
      </div>
    </div>
  );
}
