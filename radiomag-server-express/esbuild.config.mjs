import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: [".tmp/radiomag-server-express/src/app.js"],
  platform: "node",
  bundle: true,
  minify: true,
  outfile: "dist/radiomag-server.cjs",
  external: [
    "mock-aws-s3",
    "aws-sdk",
    "nock",
    "better-sqlite3",
    "tedious",
    "mysql",
    "mysql2",
    "oracledb",
    "pg",
    "pg-query-stream",
    "knex",
  ],
});
