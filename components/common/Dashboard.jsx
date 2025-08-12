import AppSidebar from "./AppSidebar";
import MainContent from "./MainContent";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Navbar />

          {/* Main Content Area */}
          <MainContent />
        </div>
      </div>
    </>
  );
}
