import { Actions } from "./_components/actions";
import { SessionInfo } from "./_components/session-info";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="w-[600px] flex bg-white/5 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
        <div className="p-8 sm:p-12 w-full">
          <div className="space-y-8">
            <SessionInfo />
            <Actions />
          </div>
        </div>
      </div>
    </div>
  );
}
