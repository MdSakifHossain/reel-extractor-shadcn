import { BrowserRouter } from "react-router";
import Header from "@/components/Header.tsx";
import { Separator } from "@/components/ui/separator";
import BreakpointChecker from "./components/utility/breakpointChecker";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const App = () => {
  return (
    <BrowserRouter>
      <BreakpointChecker />
      <Header />
      <Separator />

      <section className="p-4 grid grid-cols-5">
        <Card className="hover:shadow-md">
          {/* <CardHeader>
             <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      </section>
    </BrowserRouter>
  );
};

export default App;
