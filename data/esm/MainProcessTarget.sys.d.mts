/**
 * The main process Target.
 *
 * Matches BrowserDevToolsAgentHost from chromium, and only support a couple of Domains:
 * https://cs.chromium.org/chromium/src/content/browser/devtools/browser_devtools_agent_host.cc?dr=CSs&g=0&l=80-91
 */
export class MainProcessTarget {
    constructor(targetList: any);
    type: string;
    path: string;
    get wsDebuggerURL(): string;
    toString(): string;
    toJSON(): {
        description: string;
        devtoolsFrontendUrl: string;
        faviconUrl: string;
        id: any;
        title: string;
        type: string;
        url: string;
        webSocketDebuggerUrl: string;
    };
}
