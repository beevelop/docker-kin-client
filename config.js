/*!
 * kin
 * Copyright(c) 2016-2017 Benoit Person
 * Apache 2.0 Licensed
 */

/*
  * Rollbar is used to gather information on crashes and exceptions, in a custom
  * setup, you can either ignore this, or add your own if you want to gather
  * data about where Kin's failing in your setup ;)
  */
export const ROLLBAR_PUBLIC_TOKEN = "";
export const ROLLBAR_CODE_VERSION = 0.1;

/*
 * Public token used to display Google Maps for your events' locations
 *
 * https://console.developers.google.com/projectselector/apis/credentials
 */
export const GMAP_PUBLIC_TOKEN = process.env.GMAP_PUBLIC_TOKEN;

/*
 * API hostname reachable from the client
 *
 * e.g.: kin.today
 */
export const API_HOSTNAME = {
    dev: "${API_HOSTNAME}",
    test: "placeholder",
    prod: "${API_HOSTNAME}"
}[KIN_ENV_NAME];

/*
 * In a typical setup, you can ignore the rest of this file
 */
export const EVENTS_NS = "kin";

export const rollbar_config = {
    accessToken: ROLLBAR_PUBLIC_TOKEN,
    captureUncaught: true,
    payload: {
        environment: KIN_ENV_NAME,
        client: {
            javascript: {
                source_map_enabled: true,
                code_version: "0.2",
                guess_uncaught_frames: true
            }
        }
    },
    enabled: KIN_ENV_NAME === "prod"
};
