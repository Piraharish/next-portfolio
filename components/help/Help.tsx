"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
  IconCommand,
  IconDownload,
  IconExternalLink,
  IconKeyboard,
  IconSun,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { GuideItem } from "./GuideItem";
import { ShortcutItem } from "./ShortcutItem";

export function Help() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.isContentEditable;

      if (isTyping) return;

      if (event.key.toLowerCase() === "h") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-40"
          aria-label="Open quick guide"
        >
          <IconCommand size={17} stroke={1.7} />
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 sm:max-w-2xl!">
        <DialogHeader className="border-b border-border px-6 py-5">
          <DialogTitle className="text-lg tracking-tight">
            Quick Guide
          </DialogTitle>

          <DialogDescription className="max-w-md leading-6">
            A few shortcuts, utilities, and actions available throughout the
            website.
          </DialogDescription>
        </DialogHeader>

        <div className="divide-y divide-border">
          {/* Utilities */}
          <section className="p-4 sm:p-5">
            <p className="px-2 pb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Utilities
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <GuideItem
                icon={<IconSun size={16} stroke={1.6} />}
                title="Theme"
                description="Switch between light and dark mode"
              />

              <GuideItem
                icon={<IconDownload size={16} stroke={1.6} />}
                title="CV"
                description="Download my latest resume"
              />

              <GuideItem
                icon={<IconExternalLink size={16} stroke={1.6} />}
                title="External links"
                description="Open external resources and profiles"
              />

              <GuideItem
                icon={<IconCommand size={16} stroke={1.6} />}
                title="Help"
                description="Open the quick guide"
              />
            </div>
          </section>

          {/* Keyboard */}
          <section className="p-4 sm:p-5">
            <div className="flex items-center gap-2 px-2 pb-3">
              <IconKeyboard
                size={14}
                stroke={1.6}
                className="text-muted-foreground"
              />

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Keyboard
              </p>
            </div>

            <div className="space-y-1">
              <ShortcutItem
                title="Open help"
                keys={
                  <KbdGroup>
                    <Kbd>H</Kbd>
                  </KbdGroup>
                }
              />
              <ShortcutItem
                title="Toggle theme"
                keys={
                  <KbdGroup>
                    <Kbd>D</Kbd>
                  </KbdGroup>
                }
              />

              <ShortcutItem
                title="Close menu or dialog"
                keys={
                  <KbdGroup>
                    <Kbd>Esc</Kbd>
                  </KbdGroup>
                }
              />
            </div>
          </section>
        </div>

        <div className="border-t border-border bg-muted/30 px-6 py-4">
          <p className="text-center text-xs text-muted-foreground">
            Built to stay simple.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
