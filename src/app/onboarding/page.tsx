"use client"

import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import SkillEditor, { UserSkill } from "@/components/features/skills/SkillEditor";
import { skills } from "@/mock/skills";

export default function OnboardingPage() {
  const [teach, setTeach] = useState<UserSkill[]>([]);
  const [learn, setLearn] = useState<UserSkill[]>([]);

  const canContinue = teach.length > 0 && learn.length > 0;

  const save = async () => {
    console.log("TEACH:", teach);
    console.log("LEARN:", learn);
    alert("Saved (mock).");
  };

  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-lg font-semibold tracking-tight">Set up your skills</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Add what you can teach and what you want to learn to get better matches.
        </p>
      </div>

      <Tabs defaultValue="teach" className="space-y-4">
        <TabsList>
          <TabsTrigger value="teach">I can teach</TabsTrigger>
          <TabsTrigger value="learn">I want to learn</TabsTrigger>
        </TabsList>

        <TabsContent value="teach">
          <SkillEditor
            title="Skills you can teach"
            options={skills}
            items={teach}
            onChange={setTeach}
          />
        </TabsContent>

        <TabsContent value="learn">
          <SkillEditor
            title="Skills you want to learn"
            options={skills}
            items={learn}
            onChange={setLearn}
          />
        </TabsContent>

        <div className="flex items-center justify-end gap-2">
          <Button variant="outline" onClick={() => { setTeach([]); setLearn([]); }}>
            Reset
          </Button>
          <Button onClick={save} disabled={!canContinue}>
            Save & Continue
          </Button>
        </div>

        {!canContinue && (
          <div className="text-xs text-muted-foreground">
            Add at least 1 skill in both tabs to continue.
          </div>
        )}
      </Tabs>
    </AppShell>
  );
}