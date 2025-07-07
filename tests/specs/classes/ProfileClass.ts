import ProfileScreen from "../../screenobjects/ProfileScreen.ts";

const isIOS = browser?.capabilities?.platformName?.toLowerCase() == "ios";
const profileScreen = new ProfileScreen(isIOS)

class ProfileClass{
    

    async assertProfilepageBeforeLogin() {
        await Promise.all(
            profileScreen.assertProfilepageBeforeLogin.map(async (element, index) => {
                console.log(`- Verifying profilepage element at index ${index} is displayed...`);
                await element.waitForDisplayed({ timeout: 15000 });
                console.log(`- Element at index ${index} is visible.`);
            })
        );
    }

    async accessLoginUsingEmail(){
        //declare buttons
        const btnLoginWithEmail = profileScreen.btnLoginWithEmail;

        //script run

        //assertion
        console.log('Waiting for the login with email button to be displayed...');
        await btnLoginWithEmail.waitForDisplayed({ timeout: 20000 });
        console.log('Login with email button is displayed.');

        //act
        if (await btnLoginWithEmail.isExisting()){
            console.log('Clicking the login with email button...');
            await btnLoginWithEmail.click();
            console.log('Login with email button has been clicked.');
        } else {
            console.log('Login with email button was not found, skipping the click action.');
        }
    }

}

export default ProfileClass;
