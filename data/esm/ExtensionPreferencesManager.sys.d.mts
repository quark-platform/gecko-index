/**
 * @file
 * This module is used for managing preferences from WebExtension APIs.
 * It takes care of the precedence chain and decides whether a preference
 * needs to be updated when a change is requested by an API.
 *
 * It deals with preferences via settings objects, which are objects with
 * the following properties:
 *
 * prefNames:   An array of strings, each of which is a preference on
 *              which the setting depends.
 * setCallback: A function that returns an object containing properties and
 *              values that correspond to the prefs to be set.
 */
export let ExtensionPreferencesManager: any;
