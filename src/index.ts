#!/usr/bin/env node

const argv: string[] = process.argv;

const [, , ...args]: string[] = argv;

if (args.length === 0) {
  console.log("hello, how are you?");
} else {
  console.log(args);
}
