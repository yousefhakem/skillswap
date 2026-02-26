"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import SkillCombobox, {
  SkillOption,
} from "@/components/features/skills/SkillCombobox";

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export type UserSkill = {
  id: string;
  skillId: string;
  name: string;
  level: SkillLevel;
};

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export default function SkillEditor({
  title,
  options,
  items,
  onChange,
}: {
  title: string;
  options: SkillOption[];
  items: UserSkill[];
  onChange: (next: UserSkill[]) => void;
}) {
  const [selected, setSelected] = useState<SkillOption | null>(null);
  const [level, setLevel] = useState<SkillLevel>("Intermediate");

  const alreadyAdded = useMemo(() => {
    if (!selected) return false;
    return items.some((s) => s.skillId === selected.id);
  }, [items, selected]);

  const canAdd = !!selected && !alreadyAdded;

  const addSkill = () => {
    if (!selected) return;

    onChange([
      ...items,
      {
        id: uid(),
        skillId: selected.id,
        name: selected.name,
        level,
      },
    ]);

    setSelected(null);
    setLevel("Intermediate");
  };

  const removeSkill = (id: string) =>
    onChange(items.filter((s) => s.id !== id));

  return (
    <div className="space-y-3">
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">
          Pick from the list to keep skills consistent.
        </div>
      </div>

      <Card className="p-3 shadow-none">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <div className="flex-1">
            <SkillCombobox
              options={options}
              value={selected}
              onChange={setSelected}
              placeholder="Select a skill..."
            />
            {alreadyAdded ? (
              <div className="mt-1 text-xs text-muted-foreground">
                This skill is already added.
              </div>
            ) : null}
          </div>

          <div className="flex gap-2">
            <Select
              value={level}
              onValueChange={(v) => setLevel(v as SkillLevel)}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={addSkill} disabled={!canAdd}>
              Add
            </Button>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {items.length === 0 ? (
            <div className="text-xs text-muted-foreground">
              No skills added yet.
            </div>
          ) : (
            items.map((s) => (
              <Badge key={s.id} variant="secondary" className="gap-2">
                <span>{s.name}</span>
                <span className="text-muted-foreground">· {s.level}</span>
                <button
                  className="ml-1 text-muted-foreground hover:text-foreground"
                  onClick={() => removeSkill(s.id)}
                  aria-label={`Remove ${s.name}`}
                >
                  ×
                </button>
              </Badge>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}
