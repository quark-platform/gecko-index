/**
 * In the parent process, only one Root MessageHandlerRegistry should ever be
 * created. All consumers can safely use this singleton to retrieve the Root
 * registry and from there either create or retrieve Root MessageHandler
 * instances for a specific session.
 */
export const RootMessageHandlerRegistry: any;
