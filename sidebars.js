module.exports = {
  someSidebar: [
    {
      type: "category",
      label: "HyperIndex (shipped)",
      items: [
        "overview",
        {
          type: "category",
          label: "Getting Started",
          items: ["installation", "quickstart", "greeter-tutorial"],
        },
        {
          type: "category",
          label: "Guides",
          items: [
            "envio-basics",
            "configuration-file",
            "schema-file",
            "event-handlers",
            "subgraph-migration",
            "contract-import",
            "hosted-solution",
            "cli-commands",
            "navigating-hasura",
          ],
        },
        {
          type: "category",
          label: "Advanced",
          items: [
            "multichain-indexing",
            "generated-files",
            "hypersync",
            "sync-config",
            "dynamic-contracts",
            "persisted_files",
            "terminology",
          ],
        },
        {
          type: "category",
          label: "Troubleshoot",
          items: ["logging", "common-issues", "error-codes", "reserved-words"],
        },
        // {
        //   type: "category",
        //   label: "Education",
        //   items: [
        //     "what-is-indexer",
        //     "system-architecture",
        //     "indexing-process",
        //     "litepaper",
        //   ],
        // },
        // "working-with-foundry",
        // "integrating-existing-contract",
        // "migrating-from-the-graph",
        // {
        //   type: "category",
        //   label: "Advanced",
        //   items: [
        //     "runtime",
        //     "using-as-backend",
        //     "using-testing-framework",
        //     "dashboard-alerts",
        //   ],
        // },
      ],
    },
    {
      type: "category",
      label: "HyperRPC (alpha available)",
      items: ["overview-hyperrpc"],
    },
    {
      type: "category",
      label: "HyperSync (shipping Q4 2023)",
      items: ["overview-hypersync"],
    },
  ],
};
