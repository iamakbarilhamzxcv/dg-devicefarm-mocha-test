import HomeClass from "./classes/HomeClass.ts";
import IntroClass from "./classes/IntroClass.ts";

const introClass = new IntroClass();
const homeClass = new HomeClass();

describe("Home", () => {
    before(async function () {
        await driver.executeScript('devicefarm: setSessionName', [
            {
                name: this.test?.parent?.title,
            },
        ]);
        await introClass.finishIntroWithSkip()
    });

    after(async function () {
        await driver.executeScript('devicefarm: setSessionStatus', [
            {
                status: this.currentTest?.state, //passed or failed
            },
        ]);
    })

    it("HBL-1: Close First Popup Home Screen", async () => {
        await homeClass.closeFirstPopup()
    });

    it("HBL-2: Validate user in home page before login", async () => {
        await homeClass.assertHomepage()
    });



})