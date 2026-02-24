"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export type SkillOption = { id: string; name: string; category?: string };

export default function SkillCombobox({
  options,
  value,
  onChange,
  placeholder = "Select a skill...",
  disabled,
}: {
  options: SkillOption[];
  value: SkillOption | null;
  onChange: (next: SkillOption | null) => void;
  placeholder?: string;
  disabled?: boolean;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className="w-full justify-between font-normal"
        >
          <span className={cn("truncate", !value && "text-muted-foreground")}>
            {value ? value.name : placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search skills..." />
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>

            <CommandGroup>
              {options.map((opt) => {
                const selected = value?.id === opt.id;

                return (
                  <CommandItem
                    key={opt.id}
                    value={`${opt.name} ${opt.category ?? ""}`}
                    onSelect={() => {
                      onChange(selected ? null : opt);
                      setOpen(false);
                    }}
                    className="flex items-center justify-between"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm">{opt.name}</div>
                      {opt.category ? (
                        <div className="truncate text-xs text-muted-foreground">
                          {opt.category}
                        </div>
                      ) : null}
                    </div>

                    <Check className={cn("h-4 w-4", selected ? "opacity-100" : "opacity-0")} />
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}