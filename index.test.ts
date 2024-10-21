import { expect, test } from "bun:test";

import {
  installExpectIntegration,
  matchInlineSnapshot,
} from "@suchipi/match-inline-snapshot";
import { createThing } from "./index";

installExpectIntegration(expect, matchInlineSnapshot);

matchInlineSnapshot.config.callStructures.normal = {
  astPattern: {
    type: "CallExpression",
    callee: {
      type: "MemberExpression",
      object: {
        type: "CallExpression",
        callee: {
          type: "Identifier",
          name: "expect",
        },
      },
      property: {
        type: "Identifier",
        name: "toMatchInlineSnapshot",
      },
    },
  },
  snapshotPath: ["arguments", 0],
  stackOffset: 2,
};
matchInlineSnapshot.config.callStructures.forceUpdate = {
  astPattern: {
    type: "CallExpression",
    callee: {
      type: "MemberExpression",
      object: {
        type: "CallExpression",
        callee: {
          type: "Identifier",
          name: "expect",
        },
      },
      property: {
        type: "Identifier",
        name: "toMatchInlineSnapshot",
      },
    },
  },
  snapshotPath: ["arguments", 0],
  stackOffset: 2,
};

matchInlineSnapshot.config.shouldUpdateOutdated = process.env.UPDATE === "true";

test("createThing works", () => {
  // @ts-expect-error
  expect(createThing("Bob")).toMatchInlineSnapshot();
});
