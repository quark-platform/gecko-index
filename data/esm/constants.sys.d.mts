export const WEAVE_VERSION: "1.122.0";
export const SYNC_API_VERSION: "1.5";
export const STORAGE_VERSION: 5;
export const PREFS_BRANCH: "services.sync.";
export const DEFAULT_KEYBUNDLE_NAME: "[default]";
export const SYNC_KEY_ENCODED_LENGTH: 26;
export const SYNC_KEY_DECODED_LENGTH: 16;
export const NO_SYNC_NODE_INTERVAL: number;
export const MAX_ERROR_COUNT_BEFORE_BACKOFF: 3;
export const MINIMUM_BACKOFF_INTERVAL: number;
export const MAXIMUM_BACKOFF_INTERVAL: number;
export const HMAC_EVENT_INTERVAL: 600000;
export const MASTER_PASSWORD_LOCKED_RETRY_INTERVAL: number;
export const DEFAULT_GUID_FETCH_BATCH_SIZE: 50;
export const DEFAULT_DOWNLOAD_BATCH_SIZE: 1000;
export const SINGLE_USER_THRESHOLD: 1000;
export const MULTI_DEVICE_THRESHOLD: 300;
export const SCORE_INCREMENT_SMALL: 1;
export const SCORE_INCREMENT_MEDIUM: 10;
export const SCORE_INCREMENT_XLARGE: number;
export const SCORE_UPDATE_DELAY: 100;
export const IDLE_OBSERVER_BACK_DELAY: 100;
export const URI_LENGTH_MAX: 65536;
export const MAX_HISTORY_UPLOAD: 5000;
export const MAX_HISTORY_DOWNLOAD: 5000;
export const STATUS_OK: "success.status_ok";
export const SYNC_FAILED: "error.sync.failed";
export const LOGIN_FAILED: "error.login.failed";
export const SYNC_FAILED_PARTIAL: "error.sync.failed_partial";
export const CLIENT_NOT_CONFIGURED: "service.client_not_configured";
export const STATUS_DISABLED: "service.disabled";
export const MASTER_PASSWORD_LOCKED: "service.master_password_locked";
export const LOGIN_SUCCEEDED: "success.login";
export const SYNC_SUCCEEDED: "success.sync";
export const ENGINE_SUCCEEDED: "success.engine";
export const LOGIN_FAILED_NO_USERNAME: "error.login.reason.no_username";
export const LOGIN_FAILED_NO_PASSPHRASE: "error.login.reason.no_recoverykey";
export const LOGIN_FAILED_NETWORK_ERROR: "error.login.reason.network";
export const LOGIN_FAILED_SERVER_ERROR: "error.login.reason.server";
export const LOGIN_FAILED_INVALID_PASSPHRASE: "error.login.reason.recoverykey";
export const LOGIN_FAILED_LOGIN_REJECTED: "error.login.reason.account";
export const METARECORD_DOWNLOAD_FAIL: "error.sync.reason.metarecord_download_fail";
export const VERSION_OUT_OF_DATE: "error.sync.reason.version_out_of_date";
export const CREDENTIALS_CHANGED: "error.sync.reason.credentials_changed";
export const ABORT_SYNC_COMMAND: "aborting sync, process commands said so";
export const NO_SYNC_NODE_FOUND: "error.sync.reason.no_node_found";
export const OVER_QUOTA: "error.sync.reason.over_quota";
export const SERVER_MAINTENANCE: "error.sync.reason.serverMaintenance";
export const RESPONSE_OVER_QUOTA: "14";
export const ENGINE_UPLOAD_FAIL: "error.engine.reason.record_upload_fail";
export const ENGINE_DOWNLOAD_FAIL: "error.engine.reason.record_download_fail";
export const ENGINE_UNKNOWN_FAIL: "error.engine.reason.unknown_fail";
export const ENGINE_APPLY_FAIL: "error.engine.reason.apply_fail";
export const ENGINE_BATCH_INTERRUPTED: "error.engine.reason.batch_interrupted";
export const kSyncMasterPasswordLocked: "User elected to leave Primary Password locked";
export const kSyncWeaveDisabled: "Weave is disabled";
export const kSyncNetworkOffline: "Network is offline";
export const kSyncBackoffNotMet: "Trying to sync before the server said it's okay";
export const kFirstSyncChoiceNotMade: "User has not selected an action for first sync";
export const kSyncNotConfigured: "Sync is not configured";
export const kFirefoxShuttingDown: "Firefox is about to shut down";
export const DEVICE_TYPE_DESKTOP: "desktop";
export const DEVICE_TYPE_MOBILE: "mobile";
export const SQLITE_MAX_VARIABLE_NUMBER: 999;