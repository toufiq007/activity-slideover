import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import BookDemoForm from "./BookingForm";

const MainContent = () => {
  return (
    <main className="flex-1 p-6 bg-white">
      <div className="h-full bg-gray-50 rounded-lg border-gray-300">
        <div className="text-right">
          <Sheet>
            <SheetTrigger>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Create Activity
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <p className="text-green-800 text-2xl">Book Court,</p>
                  <p className="text-green-700 text-sm">Wed Jul 30, 2025</p>
                </SheetTitle>
              </SheetHeader>
              <SheetDescription>
                <BookDemoForm />
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
