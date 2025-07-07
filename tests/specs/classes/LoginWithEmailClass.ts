import { USER } from "../../constants/user.ts";
import LoginWithEmailScreen from "../../screenobjects/LoginWithEmailScreen.ts";


const isIOS = browser?.capabilities?.platformName?.toLowerCase() == "ios";
const loginWithEmailScreen = new LoginWithEmailScreen(isIOS)

class LoginWithEmailClass {

    async assertLoginWithEmailPage() {
        await Promise.all(
            loginWithEmailScreen.assertLoginWithEmailPage.map(async (element, index) => {
                console.log(`- Verifying profilepage element at index ${index} is displayed...`);
                await element.waitForDisplayed({ timeout: 15000 });
                console.log(`- Element at index ${index} is visible.`);
            })
        );
        // await expect(loginWithEmailScreen.assertLoginWithEmailPage[0]).toBeDisplayed()
        // await expect(loginWithEmailScreen.assertLoginWithEmailPage[1]).toBeDisplayed()
        // await expect(loginWithEmailScreen.assertLoginWithEmailPage[2]).toBeDisplayed()
        // await expect(loginWithEmailScreen.assertLoginWithEmailPage[3]).toBeDisplayed()
    }

    async inputValidEmail(){
        //declare buttons
        const fieldEmailAddressLoginWithEmail = loginWithEmailScreen.fieldEmailAddressLoginWithEmail

        //script run

        //assertion
        console.log('Waiting for email address field to be displayed...');
        // Menambahkan timeout untuk stabilitas yang lebih baik
        await fieldEmailAddressLoginWithEmail.waitForDisplayed({ timeout: 15000 });
        console.log('Email address field is displayed.');


        //act
        if (await fieldEmailAddressLoginWithEmail.isExisting()){
            console.log('Inputing the email address field...');
            await fieldEmailAddressLoginWithEmail.addValue(USER.user_valid_email_address);
            console.log('Email address field has been inputed.');
        } else {
            // Log jika field tidak ditemukan
            console.log('Email address field was not found.');
        }
    }

    async clickLoginButton(){
        //declare
        const btnLogin = loginWithEmailScreen.btnLogin

        //script run

        //assertion
        console.log('Waiting for button login to be displayed...');
        // Menambahkan timeout untuk stabilitas yang lebih baik
        await btnLogin.waitForDisplayed({ timeout: 15000 });
        console.log('Button login is displayed.');


        //act
        if (await btnLogin.isClickable){
            console.log('Click the login button...');
            await btnLogin.click();
            console.log('Login button has been clicked.');
        } else {
            // Log jika button tidak clickable
            console.log('Login button was not clickable.');
        }
    }

    async inputValidPassword(){
        //declare
        const fieldPasswordLoginWithEmail = loginWithEmailScreen.fieldPasswordLoginWithEmail

        //script run

        //assertion
        console.log('Waiting for password field to be displayed...');
        // Menambahkan timeout untuk stabilitas yang lebih baik
        await fieldPasswordLoginWithEmail.waitForDisplayed({ timeout: 15000 });
        console.log('Password field is displayed.');


        //act
        if (await fieldPasswordLoginWithEmail.isExisting()){
            console.log('Inputing the password field...');
            await fieldPasswordLoginWithEmail.addValue(USER.user_valid_password);
            console.log('Password field has been inputed.');
        } else {
            // Log jika field tidak ditemukan
            console.log('Passwords field was not found.');
        }
    }

    async inputInvalidPassword(){
        //declare
        const fieldPasswordLoginWithEmail = loginWithEmailScreen.fieldPasswordLoginWithEmail

        //script run

        //assertion
        console.log('Waiting for password field to be displayed...');
        // Menambahkan timeout untuk stabilitas yang lebih baik
        await fieldPasswordLoginWithEmail.waitForDisplayed({ timeout: 15000 });
        console.log('Password field is displayed.');


        //act
        if (await fieldPasswordLoginWithEmail.isExisting()){
            console.log('Inputing the password field...');
            await fieldPasswordLoginWithEmail.addValue(USER.user_invalid_password);
            console.log('Password field has been inputed.');
        } else {
            // Log jika field tidak ditemukan
            console.log('Passwords field was not found.');
        }
    }

    async clickContinueLoginButton(){
        //declare
        const btnContinueLogin = loginWithEmailScreen.btnContinueLogin

        //script run

        //assertion
        console.log('Waiting for button continue login to be displayed...');
        // Menambahkan timeout untuk stabilitas yang lebih baik
        await btnContinueLogin.waitForDisplayed({ timeout: 15000 });
        console.log('Button continue login is displayed.');


        //act
        if (await btnContinueLogin.isClickable){
            console.log('Click the continue login button...');
            await btnContinueLogin.click();
            console.log('Continue login button has been clicked.');
        } else {
            // Log jika button tidak clickable
            console.log('Continue login button was not clickable.');
        }
    }

    async assertInvalidLoginPopup() {
        console.log('Asserting that the invalid login toast is displayed...');
        
        const expectedText = "Invalid Username or Password Combination";
        const errorToastSelector = loginWithEmailScreen.popupInvalidEmailOrPasswordCombination;

        // Menggunakan driver.waitUntil untuk secara aktif memeriksa kemunculan toast
        await driver.waitUntil(
            async () => {
                try {
                    // Mencoba mendapatkan teks dari elemen toast
                    const toastText = await errorToastSelector.getText();
                    // Jika teksnya cocok, kembalikan true untuk menghentikan loop
                    return toastText.includes(expectedText);
                } catch (error) {
                    // Jika elemen belum ada, catch error dan kembalikan false agar loop berlanjut
                    return false;
                }
            },
            {
                timeout: 7000, // Waktu tunggu maksimal 5 detik
                timeoutMsg: `Pesan Toast dengan teks "${expectedText}" tidak ditemukan dalam 7 detik`,
                interval: 500 // Periksa setiap 500 milidetik
            }
        );
        
        console.log('Assertion successful: Invalid login toast was found and verified.');
    }

}

export default LoginWithEmailClass;
