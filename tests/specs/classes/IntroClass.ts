import IntroScreen from "../../screenobjects/IntroScreen.ts";

const isIOS = browser?.capabilities?.platformName?.toLowerCase() == "ios";
const introScreen = new IntroScreen(isIOS)

class IntroClass {
    async finishIntroWithSkip(){
        //declare buttons
        const btnSkipFirstScreenIntro = introScreen.btnSkipFirstScreenIntro

        //script run

        //assertion
        console.log('Waiting for the "Skip" button to be displayed...');
        // Menambahkan timeout untuk stabilitas yang lebih baik
        await btnSkipFirstScreenIntro.waitForDisplayed({ timeout: 15000 });
        console.log('"Skip" button is displayed.');


        //act
        if (await btnSkipFirstScreenIntro.isExisting()){
            console.log('Clicking the "Skip" button...');
            await btnSkipFirstScreenIntro.click();
            console.log('"Skip" button has been clicked.');
        } else {
            // Log jika tombol tidak ditemukan
            console.log('"Skip" button was not found, skipping the click action.');
        }
    }
}

export default IntroClass;
