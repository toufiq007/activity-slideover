import BookDemoForm from "./BookingForm";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const MainContent = () => {
  return (
    <main className="flex-1 p-6 bg-white">
      <div className="h-full bg-gray-50 rounded-lg border-gray-300">
        <div className="text-right">
          <Sheet>
            <SheetTrigger className="bg-green-600 hover:bg-green-700 text-white p-2 px-4 rounded-xl">
              Create Activity
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="">
                  <div className="flex items-center">
                    <p className="text-green-800 text-2xl uppercase">
                      Slideover,
                    </p>
                    <p className="text-green-700 text-sm">Wed Jul 30, 2025</p>
                  </div>
                  By limon
                </SheetTitle>
              </SheetHeader>
              <BookDemoForm />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
