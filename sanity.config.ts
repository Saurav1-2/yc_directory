import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"; // ✅ use deskTool
import { visionTool } from "@sanity/vision";
import { markdownSchema } from "sanity-plugin-markdown";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    markdownSchema(),
  ],
});
