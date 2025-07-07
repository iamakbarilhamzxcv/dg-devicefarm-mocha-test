import '@wdio/types';

declare global {
    namespace WebdriverIO {
        interface Capabilities extends DeviceFarmCapabilities {
        }

        /**
         * @see https://devicefarm.org/capabilities
         */
        interface DeviceFarmCapabilities {
            /**
             * Allocate a build name in dashboard. Default value is `null`.
             */
            'df:build'?: string

            /**
             * Enable live video for the session. Default value is `true`.
             */
            'df:liveVideo'?: boolean

            /**
             * Enable video recording for the session. Default value is `false`.
             */
            'df:recordVideo'?: boolean

            /**
             * Maximum duration of the video recording in seconds. Default value is `1800` seconds (3 minutes).
             */
            'df:videoTimeLimit'?: number

            /**
             * Allocate only iPhone simulators for execution when to true. Default value is `false`.
             */
            'df:iPhoneOnly'?: boolean

            /**
             * Allocate only iPad simulators for execution when to true. Default value is `false`.
             */
            'df:iPadOnly'?: boolean

            /**
             * When create session requests are more than available connected devices, plugin waits for a certain interval for device availability before it time out. Default value is `180000` milliseconds.
             */
            'df:deviceAvailabilityTimeout'?: number

            /**
             * When create session requests are more than available connected devices, plugin polls for device availability in certain intervals. Default value is `10000` milliseconds.
             */
            'df:deviceRetryInterval'?: number

            /**
             * Comma separated list of device udid's to execute tests only on specific devices `df:udids: device1UDID,device2UDID`
             */
            'df:udids'?: string

            /**
             * Requests asession for the provided platform name. Valid options are `iOS`, `tvOS`, or `Android`, ex: `'appium:platformName': tvOS`
             */
            'appium:platformName'?: string
            'appium:deviceFarm'?: boolean

            /**
             * This capability is used to filter devices/simulators based on SDK. Only devices/simulators that are an exact match with the platformVerson would be considered for tests run. `appium:platformVersion` is optional argument. ex: `'appium:platformVersion': 16.1.1`
             */
            'appium:platformVersion'?: string

            /**
             * This capability is used to filter devices/simulators based on SDK. Devices/Simulators with SDK greater then or equal to minSDK would only be considered for tests run. `df:minSDK` is optional argument. ex: `'appium:minSDK': 15`
             */
            'df:minSDK'?: boolean

            /**
             * This capability is used to filter devices/simulators based on SDK. Devices/Simulators with SDK less then or equal to maxSDK would only be considered for tests run. `df:maxSDK` is optional argument. ex: `'appium:maxSDK': 15`
             */
            'df:maxSDK'?: number

            /**
             * This capability is used to filter devices/simulators based on node IP. This will only consider devices from specific node. `df:options` is optional argument. ex: `'filterByHost': '192.168.0.226',`
             */
            'df:filterByHost'?: string

            /**
             * Set all device farm related capabilities as object. `df:options` is optional argument. ex: `'df:options': { filterByHost: '192.168.0.226', recordVideo: true },`
             */
            'df:options'?: Record<string, any>

            /**
             * Save device logs, app profiling for android. `df:options` is optional argument. ex: `'df:options': { saveDeviceLogs: true },`. Default value is `false`
             */
            'df:saveDeviceLogs'?: boolean

            /**
             * Will consider the devices only with the tagged specified. `df:tags` is optional argument. ex: `'df:tags': ['team1','AndroidGroup'],`. Default value is empty array.
             */
            'df:tags'?: string[]
        }
    }
}
