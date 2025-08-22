import { useMyMediaQuery } from "@/hooks/useMyMediaQuery";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const Header = ({ iconA, iconB }) => {
  const isDesktop = useMyMediaQuery("(min-width: 768px)");

  return (
    <header className="font-Geist flex justify-between items-center gap-2 px-4 py-4 md:px-8 border-b">
      <Sheet>
        <SheetTrigger>
          <img
            className="size-16 md:size-24 transition-all hover:scale-110 hover:ease-out"
            src={iconA ? iconA : "/kiwi.svg"}
            alt="icon"
          />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {isDesktop ? (
        <h1 className="text-center md:text-5xl lg:text-7xl font-extrabold select-none">
          <span className="transition-all hover:underline hover:underline-offset-8">
            The
          </span>{" "}
          <span className="transition-all hover:underline hover:underline-offset-8">
            Everything
          </span>{" "}
          <span className="transition-all hover:underline hover:underline-offset-8">
            App
          </span>
        </h1>
      ) : (
        <h1 className="text-center text-4xl font-extrabold select-none">
          T_E_A
        </h1>
      )}

      <Drawer>
        <DrawerTrigger>
          <img
            className="size-16 md:size-24 transition-all hover:scale-110 hover:ease-out"
            src={iconB ? iconB : "/glass.svg"}
            alt="icon"
          />
        </DrawerTrigger>
        <DrawerContent className="font-Geist">
          <DrawerHeader>
            <DrawerTitle className="text-3xl font-semibold">
              Connect with Me! ✨
            </DrawerTitle>
            <DrawerDescription className="text-lg leading-5">
              I have some social media but i dont have time to log into that.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="border flex items-center justify-center mx-4 mt-6 mb-8">
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="destructive">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;
