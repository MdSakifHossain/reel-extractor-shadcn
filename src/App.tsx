import React, { useState } from "react";
import { BrowserRouter } from "react-router";
import Header from "@/components/Header.tsx";
import { db } from "./lib/db";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const App = () => {
  const emoji = "🔗";
  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    // Get the raw string value from the input
    const inputValue = e.target.value;

    // If the input is empty, set the value to 0.
    if (inputValue === "") {
      setValue(0);
      return;
    }

    // Otherwise, parse the number and clamp it to a non-negative value.
    const newValue = parseFloat(inputValue);
    if (!isNaN(newValue)) {
      setValue(Math.max(0, newValue));
    }
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-svh font-Geist">
        <Header iconA="" iconB="" />
        <section className="flex-1 flex flex-col gap-5 px-4 py-4">
          <h2 className="text-4xl font-bold">Reel count: {db.length}</h2>
          <div className="flex-1 flex flex-col gap-3">
            <Input
              className="py-6"
              type="number"
              placeholder="Type your number"
              value={value === 0 ? "" : value}
              onChange={handleChange}
            />
            <ScrollArea className="w-full rounded-md border h-[57vh]">
              <div className="p-4">
                <h4 className="mb-4 text-lg leading-none font-medium">
                  Links:
                </h4>
                {db.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="text-base">
                      {emoji}
                      <span className="bg-muted rounded px-[0.3rem] py-[0.2rem] font-mono text-ellipsis">
                        {item}
                      </span>
                      {emoji}
                    </div>
                    <Separator className="my-2" />
                  </React.Fragment>
                ))}
              </div>
            </ScrollArea>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
