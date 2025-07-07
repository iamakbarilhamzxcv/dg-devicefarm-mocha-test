import HomeClass from "./classes/HomeClass.ts";
import IntroClass from "./classes/IntroClass.ts";
import ProfileClass from "./classes/ProfileClass.ts";

const introClass = new IntroClass();
const homeClass = new HomeClass();
const profileClass = new ProfileClass()

describe("Profile before login", () => {
    before(async function () {
        await driver.executeScript('devicefarm: setSessionName', [
            {
                name: this.test?.parent?.title,
            },
        ]);
        await introClass.finishIntroWithSkip()
        await homeClass.closeFirstPopup()
        await homeClass.assertHomepage()
        await homeClass.accessProfilepageBeforeLogin()
    });

    after(async function () {
        await driver.executeScript('devicefarm: setSessionStatus', [
            {
                status: this.currentTest?.state, //passed or failed
            },
        ]);
    })

    it("PBL-1: Validate user is in profilepage", async () => {
        await profileClass.assertProfilepageBeforeLogin()
    });

})