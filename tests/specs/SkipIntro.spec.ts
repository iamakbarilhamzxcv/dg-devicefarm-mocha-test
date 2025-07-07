import HomeClass from "./classes/HomeClass.ts";
import IntroClass from "./classes/IntroClass.ts";

const introClass = new IntroClass();
const homeClass = new HomeClass();

describe("Intro", () => {
    before(async () => {

    });

    after(async function () {
        await driver.executeScript('devicefarm: setSessionStatus', [
            {
                status: this.currentTest?.state, //passed or failed//
            },
        ]);
    })

    it("SI-1: Skip To Home Screen By Clicking Next", async () => {
        await introClass.finishIntroWithSkip()
    });
    



})