import type { ChainablePromiseElement } from 'webdriverio';

class ProfileScreen {
    private readonly isIOS: boolean;

    constructor(isIOS: boolean) {
        this.isIOS = isIOS
    }

    /**
     * define elements
     */

    get assertProfilepageBeforeLogin(): ChainablePromiseElement[] {
        if (this.isIOS) {
            return [$('')];
        } else {
            return [
                $('//android.widget.TextView[@resource-id="id.co.duniagames:id/title" and @text="Dunia Games Member Benefit"]'),
                $('//android.widget.Button[@resource-id="id.co.duniagames:id/phone_number"]'),
                $('//android.widget.Button[@resource-id="id.co.duniagames:id/google"]')
            ];
        }
    }

    get btnLoginWithEmail(): ChainablePromiseElement {
        if(this.isIOS) {
            return $('');
        } else {
            return $('//android.widget.Button[@content-desc="Using Email"]');
        }

    }



    
}

export default ProfileScreen;