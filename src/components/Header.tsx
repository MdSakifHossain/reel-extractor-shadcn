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

const Header = () => {
  const isDesktop = useMyMediaQuery("(min-width: 768px)");

  return (
    <header className="font-Geist flex justify-between items-center gap-2 px-4 py-4 md:px-8">
      <Sheet>
        <SheetTrigger>
          <img className="size-16 md:size-24" src="/kiwi.svg" alt="icon" />
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
          The Everything App
        </h1>
      ) : (
        <h1 className="text-center text-4xl font-extrabold select-none">
          T_E_A
        </h1>
      )}

      <Drawer>
        <DrawerTrigger>
          <img className="size-16 md:size-24" src="/glass.svg" alt="icon" />
        </DrawerTrigger>
        <DrawerContent className="px-20">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;
