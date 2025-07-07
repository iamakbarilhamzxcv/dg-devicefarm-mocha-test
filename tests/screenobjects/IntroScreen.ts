import type { ChainablePromiseElement } from 'webdriverio';

class IntroScreen {
    private readonly isIOS: boolean;

    constructor(isIOS: boolean) {
        this.isIOS = isIOS
    }

    /**
     * define elements
     */

    get btnSkipFirstScreenIntro(): ChainablePromiseElement {
        if(this.isIOS) {
            return $('');
        } else {
            return $('//android.widget.TextView[@resource-id="id.co.duniagames:id/text_intro_next_step"]');
        }

    }

    
}

export default IntroScreen;