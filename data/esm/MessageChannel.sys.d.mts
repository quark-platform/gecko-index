/**
 * This module provides wrappers around standard message managers to
 * simplify bidirectional communication. It currently allows a caller to
 * send a message to a single listener, and receive a reply. If there
 * are no matching listeners, or the message manager disconnects before
 * a reply is received, the caller is returned an error.
 *
 * The listener end may specify filters for the messages it wishes to
 * receive, and the sender end likewise may specify recipient tags to
 * match the filters.
 *
 * The message handler on the listener side may return its response
 * value directly, or may return a promise, the resolution or rejection
 * of which will be returned instead. The sender end likewise receives a
 * promise which resolves or rejects to the listener's response.
 *
 *
 * A basic setup works something like this:
 *
 * A content script adds a message listener to its global
 * ContentFrameMessageManager, with an appropriate set of filters:
 *
 *  {
 *    init(messageManager, window, extensionID) {
 *      this.window = window;
 *
 *      MessageChannel.addListener(
 *        messageManager, "ContentScript:TouchContent",
 *        this);
 *
 *      this.messageFilterStrict = {
 *        innerWindowID: getInnerWindowID(window),
 *        extensionID: extensionID,
 *      };
 *
 *      this.messageFilterPermissive = {
 *        outerWindowID: getOuterWindowID(window),
 *      };
 *    },
 *
 *    receiveMessage({ target, messageName, sender, recipient, data }) {
 *      if (messageName == "ContentScript:TouchContent") {
 *        return new Promise(resolve => {
 *          this.touchWindow(data.touchWith, result => {
 *            resolve({ touchResult: result });
 *          });
 *        });
 *      }
 *    },
 *  };
 *
 * A script in the parent process sends a message to the content process
 * via a tab message manager, including recipient tags to match its
 * filter, and an optional sender tag to identify itself:
 *
 *  let data = { touchWith: "pencil" };
 *  let sender = { extensionID, contextID };
 *  let recipient = { innerWindowID: tab.linkedBrowser.innerWindowID, extensionID };
 *
 *  MessageChannel.sendMessage(
 *    tab.linkedBrowser.messageManager, "ContentScript:TouchContent",
 *    data, {recipient, sender}
 *  ).then(result => {
 *    alert(result.touchResult);
 *  });
 *
 * Since the lifetimes of message senders and receivers may not always
 * match, either side of the message channel may cancel pending
 * responses which match its sender or recipient tags.
 *
 * For the above client, this might be done from an
 * inner-window-destroyed observer, when its target scope is destroyed:
 *
 *  observe(subject, topic, data) {
 *    if (topic == "inner-window-destroyed") {
 *      let innerWindowID = subject.QueryInterface(Ci.nsISupportsPRUint64).data;
 *
 *      MessageChannel.abortResponses({ innerWindowID });
 *    }
 *  },
 *
 * From the parent, it may be done when its context is being destroyed:
 *
 *  onDestroy() {
 *    MessageChannel.abortResponses({
 *      extensionID: this.extensionID,
 *      contextID: this.contextID,
 *    });
 *  },
 *
 */
export let MessageChannel: any;
