/**
 * This file is used to define constants related to messaging experiments. It is
 * imported by both ASRouter as well as import-rollouts.js, a node script that
 * imports Nimbus rollouts into tree. It doesn't have access to any Firefox
 * APIs, XPCOM, etc. and should be kept that way.
 */
/**
 * These are the Nimbus feature IDs that correspond to messaging experiments.
 * Other Nimbus features contain specific variables whose keys are enumerated in
 * FeatureManifest.yaml. Conversely, messaging experiment features contain
 * actual messages, with the usual message keys like `template` and `targeting`.
 * @see FeatureManifest.yaml
 */
export const MESSAGING_EXPERIMENTS_DEFAULT_FEATURES: string[];
