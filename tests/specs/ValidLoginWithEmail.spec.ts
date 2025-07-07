import HomeClass from "./classes/HomeClass.ts";
import IntroClass from "./classes/IntroClass.ts";
import LoginWithEmailClass from "./classes/LoginWithEmailClass.ts";
import ProfileClass from "./classes/ProfileClass.ts";

const introClass = new IntroClass();
const homeClass = new HomeClass();
const profileClass = new ProfileClass()
const loginWithEmailClass = new LoginWithEmailClass

describe("Valid Login With Email", () => {
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
        await profileClass.assertProfilepageBeforeLogin()
        await profileClass.accessLoginUsingEmail()
        await loginWithEmailClass.assertLoginWithEmailPage()
    });

    after(async function () {
        await driver.executeScript('devicefarm: setSessionStatus', [
            {
                status: this.currentTest?.state, //passed or failed
            },
        ]);
        await homeClass.assertHomepage()
    })

    it("VLWE-1: User input valid email", async () => {
        await loginWithEmailClass.inputValidEmail()
    });

    it("VLWE-2: User click the login button", async () => {
        await loginWithEmailClass.clickLoginButton()
    });
    
    it("VLWE-3: User input valid password", async () => {
        await loginWithEmailClass.inputValidPassword()
    });

    it("VLWE-4: User click the continue login button", async () => {
        await loginWithEmailClass.clickContinueLoginButton()
    });
})