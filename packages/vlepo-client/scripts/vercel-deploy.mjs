#!/usr/bin/env zx

let resp = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql/health`)
if (resp.ok) {
  process.exit(1);
}
process.exit(0);