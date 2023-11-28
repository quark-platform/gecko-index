export class ManifestMessagesChild {
    receiveMessage(message: any): {
        success: boolean;
        result: any;
    } | Promise<{
        success: boolean;
        result: any;
    }>;
    /**
     * Check if the document includes a link to a web manifest.
     */
    hasManifestLink(): {
        success: boolean;
        result: any;
    };
    /**
     * Asynchronously obtains a web manifest from this window by using the
     * ManifestObtainer and returns the result.
     * @param {Object} checkConformance True if spec conformance messages should be collected.
     */
    obtainManifest(options: any): Promise<{
        success: boolean;
        result: any;
    }>;
    /**
     * Given a manifest and an expected icon size, ask ManifestIcons
     * to fetch the appropriate icon and send along result
     */
    fetchIcon({ data: { manifest, iconSize } }: {
        data: {
            manifest: any;
            iconSize: any;
        };
    }): Promise<{
        success: boolean;
        result: any;
    }>;
}
