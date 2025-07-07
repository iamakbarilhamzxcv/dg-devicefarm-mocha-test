import type { ChainablePromiseElement } from 'webdriverio';

class LoginWithEmailScreen {
    private readonly isIOS: boolean;

    constructor(isIOS: boolean) {
        this.isIOS = isIOS
    }

    /**
     * define elements
     */


    get assertLoginWithEmailPage(): ChainablePromiseElement[] {
        if (this.isIOS) {
            return [$('')];
        } else {
            return [
                $('//android.widget.TextView[@text="Login"]'),
                $('//android.widget.TextView[@text="Register"]'),
                $('//android.widget.TextView[@resource-id="id.co.duniagames:id/tvTitle"]'),
                $('//android.widget.TextView[@resource-id="id.co.duniagames:id/tvMessage"]')
            ];
        }
    }

    get fieldEmailAddressLoginWithEmail(): ChainablePromiseElement {
        if(this.isIOS) {
            return $('');
        } else {
            return $('//android.widget.EditText[@resource-id="id.co.duniagames:id/edtEmail"]');
        }

    }

    get btnLogin(): ChainablePromiseElement {
        if(this.isIOS) {
            return $('');
        } else {
            return $('//android.widget.Button[@resource-id="id.co.duniagames:id/btnLogin"]');
        }

    }

    get fieldPasswordLoginWithEmail(): ChainablePromiseElement {
        if(this.isIOS) {
            return $('');
        } else {
            return $('//android.widget.EditText[@resource-id="id.co.duniagames:id/edtPassword"]');
        }

    }

    get btnContinueLogin(): ChainablePromiseElement {
        if(this.isIOS) {
            return $('');
        } else {
            return $('//android.widget.Button[@resource-id="id.co.duniagames:id/btnContinue"]');
        }

    }

    get popupInvalidEmailOrPasswordCombination(): ChainablePromiseElement {
        if(this.isIOS) {
            return $('');
        } else {
            return $('//android.widget.Toast');
        }

    }



    
}

export default LoginWithEmailScreen;