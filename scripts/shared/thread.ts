import { cpus } from "os";

const maxThreads = cpus().length;

let usedThreads = 0;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function waitForThread(): Promise<() => void> {
  while (usedThreads >= maxThreads) {
    // Spread out the threading so that we aren't freezing the main thread when
    // we run it straight away
    await sleep(1000 * Math.random());
  }

  usedThreads += 1;

  return () => (usedThreads -= 1);
}
