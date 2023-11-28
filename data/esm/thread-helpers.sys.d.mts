/**
 * Implementation of a Javascript tracer logging traces to stdout.
 *
 * To be used like this:

  const { traceAllJSCalls } = ChromeUtils.importESModule(
    "resource://devtools/shared/test-helpers/thread-helpers.sys.mjs"
  );
  const jsTracer = traceAllJSCalls();
  [... execute some code to tracer ...]
  jsTracer.stop();

 * @param prefix String
 *        Optional, if passed, this will be displayed in front of each
 *        line reporting a new frame execution.
 * @param pause Number
 *        Optional, if passed, hold off each frame for `pause` ms,
 *        by letting the other event loops run in between.
 *        Be careful that it can introduce unexpected race conditions
 *        that can't necessarily be reproduced without this.
 */
export function traceAllJSCalls({ prefix, pause }?: {
    prefix?: string;
    pause: any;
}): {
    stop(): void;
};
