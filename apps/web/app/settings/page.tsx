"use client";

import Box from "@/lib/components/box";
import Tabs from "@/lib/components/tabs";

export default function SettingsPage() {
  return (
    <Box>
      <Tabs
        tabs={[
          { label: "General", render: () => <div>General</div> },
          { label: "Notifications", render: () => <div>Notifications</div> },
        ]}
      />
    </Box>
  );
}
