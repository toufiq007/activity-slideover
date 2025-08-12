import { Calendar, LogOut } from "lucide-react";
import { Button } from "./ui/button";

const AppSidebar = () => {
  return (
    <div className="w-48 bg-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-4">
        <p className="w-full text-xl p-2 rounded-2xl uppercase  font-bold">
         slideOver
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4">
        <Button
          variant="default"
          className="w-full justify-start bg-green-700 hover:bg-green-800 text-white mb-2"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Bookings
        </Button>
      </div>

      {/* Logout */}
      <div className="p-4">
        <Button
          variant="destructive"
          className="w-full justify-start bg-red-500 hover:bg-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AppSidebar;
