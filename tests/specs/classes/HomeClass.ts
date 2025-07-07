import HomeScreen from "../../screenobjects/HomeScreen.ts";
// 1. Impor Allure Reporter dan Status enum
import allure from '@wdio/allure-reporter';
import { Status } from 'allure-js-commons';

const isIOS = browser?.capabilities?.platformName?.toLowerCase() == "ios";
const homeScreen = new HomeScreen(isIOS)

class HomeClass {
    async closeFirstPopup(){
        // Menambahkan langkah Allure untuk kejelasan di laporan
        allure.addStep('Attempting to close the first popup if it exists...');

        const btnCloseFirstPopup = homeScreen.btnCloseFirstPopup;

        try {
            // 2. Mencoba menunggu tombol muncul dengan timeout yang lebih pendek
            console.log('Waiting for the first popup close button to be displayed...');
            await btnCloseFirstPopup.waitForDisplayed({ timeout: 10000 }); // Timeout dipersingkat
            console.log('Popup close button is displayed.');

            // Jika berhasil ditemukan, klik tombol tersebut
            console.log('Clicking the popup close button...');
            await btnCloseFirstPopup.click();
            console.log('Popup close button has been clicked.');
            allure.addStep('Successfully closed the popup.');

        } catch (error) {
            // 3. Jika tombol tidak ditemukan dalam 10 detik, blok ini akan dijalankan
            console.log('Popup close button was not found within the timeout. Continuing test...');
            
            // 4. Menambahkan catatan di laporan Allure bahwa langkah ini dilewati
            allure.addStep('First popup was not found, skipping the close action.', undefined, Status.SKIPPED);
        }
    }

    async assertHomepage() {
        
        await Promise.all(
            homeScreen.assertHomepageBeforeLogin.map(async (element, index) => {
                console.log(`- Waiting for homepage element at index ${index} to be displayed...`);
                await element.waitForDisplayed({ timeout: 30000 });
                console.log(`- Element at index ${index} is visible.`);
            })
        );

        // Mengambil elemen pertama (teks sambutan) untuk diperiksa
        const welcomeTextElement = homeScreen.assertHomepageBeforeLogin[0];
        
        // Mendapatkan teks dari elemen
        const welcomeText = await welcomeTextElement.getText();
        console.log(`Found welcome text: "${welcomeText}"`);

        // Memeriksa isi teks
        if (welcomeText === "Hi, Gamers!") {
            console.log(`Welcome text is "${welcomeText}",user have not login yet.`);
        } else {
            console.log(`Welcome text is "${welcomeText}",user already login.`);
        }

        console.log('Finished asserting homepage elements.');
    }

    async accessProfilepageBeforeLogin(){
        //declare buttons
        const iconProfile = homeScreen.iconProfile;

        //script run

        //assertion
        console.log('Waiting for the icon profile to be displayed...');
        await iconProfile.waitForDisplayed({ timeout: 20000 });
        console.log('Icon Profile is displayed.');

        //act
        if (await iconProfile.isExisting()){
            console.log('Clicking the icon profile...');
            await iconProfile.click();
            console.log('Icon Profile has been clicked.');
        } else {
            console.log('Icon Profile was not found, skipping the click action.');
        }
    }


}

export default HomeClass;
