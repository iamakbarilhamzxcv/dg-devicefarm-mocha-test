import { join } from 'node:path';
import allure from 'allure-commandline';

export const config: WebdriverIO.Config = {
    runner: 'local',
    protocol: 'http',
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    maxInstances: 1,
    capabilities: [
        {
            'platformName': 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:appPackage': "id.co.duniagames",
            'appium:appActivity': "id.co.duniagames.page.main.activity.SplashScreenActivity",
            'appium:app': join(process.cwd(), 'apps', 'appDG.apk'),
            'appium:autoGrantPermissions': true,
            'appium:noReset': false,
            'appium:forceAppLaunch': true,
            'appium:udid': '4PNR4PSOUGWW5TIB', //(vivo y19 version android 12)
            'wdio:specs': [
                '../tests/specs/SkipIntro.spec.ts',
                '../tests/specs/Home.spec.ts',
                '../tests/specs/ProfileBeforeLogin.spec.ts',
                '../tests/specs/InvalidLoginWithEmail.spec.ts',
                '../tests/specs/ValidLoginWithEmail.spec.ts'
                
            ]


        },
        // {
        //     'platformName': 'iOS',
        //     'appium:automationName': 'XCUITest',
        //     'wdio:maxInstances': 1,
        //     'appium:appPackage': "id.co.duniagames",
        //     'appium:appActivity': "id.co.duniagames.page.main.activity.SplashScreenActivity",
        //     'appium:newCommandTimeout': 600,
        //     'appium:uiautomator2ServerInstallTimeout': 50000,
        //     'appium:app': join(process.cwd(), 'apps', 'MyTelkomsel_8.6.2.ipa'),
        //     'appium:autoGrantPermissions': true,
        //     'appium:noReset': true,
        //     'appium:forceAppLaunch': true,
        //     'appium:udid': '', //(Iphone Kantor)
        //     'wdio:specs': [
        //         // '../tests/specs/Intro.spec.ts',
        //         '../tests/specs/HomeBeforeLogin.spec.ts',
        //         '../tests/specs/Login.spec.ts',
        //         // '../tests/specs/HomeAfterLogin.spec.ts',
        //         // '../tests/specs/BuyPackageAfterLogin.spec.ts',
        //         // // '../tests/specs/MallAfterLogin.spec.ts',
        //         // '../tests/specs/RewardAfterLogin.spec.ts',
        //         // '../tests/specs/LifestyleAfterLogin.spec.ts',
        //         // '../tests/specs/ProfileAfterLogin.spec.ts',
        //     ]
        // },
    ],

    before: async () => {
        // Only update the setting for Android, this is needed to reduce the timeout for the UiSelector locator strategy,
        // which is also used in certain tests, so it will not wait for 10 seconds if it can't find an element
        if (driver.isAndroid) {
            await driver.updateSettings({
                // This reduces the timeout for the UiUiSelector from 10 seconds to 3 seconds
                waitForSelectorTimeout: 3 * 1000,
            });
        }
        
    },
    onComplete: async function () {
        const generation = allure(['generate', 'allure-results', '--clean', '--single-file']);

        await new Promise((resolve, reject) => {
            generation.on('exit', (exitCode: number) => {
                if (exitCode !== 0) {
                    return reject(new Error('Could not generate Allure report'));
                }

                console.log('Allure report successfully generated');

                resolve(true);
            });
        });
    },
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'debug',
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/applitools-service': 'info'
    // },
    //

    logLevels: {
        webdriver: 'warn',
    },

    // If you only want to run your tests until a specific amount of tests has failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    // Default timeout for all waitFor* commands.
    /**
     * NOTE: This has been increased for more stable Appium Native app
     * tests because they can take a bit longer.
     */
    waitforTimeout: 45000,
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    // Default request retries count
    connectionRetryCount: 0,
    // Test runner services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    //
    // Services are empty here but will be defined in the
    // - wdio.shared.browserstack.conf.ts
    // - wdio.shared.local.appium.conf.ts
    // - wdio.shared.sauce.conf.ts
    // configuration files
    services: [],
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    // framework: 'jasmine',
    framework: 'mocha',
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]],

    mochaOpts: {
        ui: 'bdd',
        /**
         * NOTE: This has been increased for more stable Appium Native app
         * tests because they can take a bit longer.
         */
        timeout: 2 * 60 * 1000, // 2min
    },
};
