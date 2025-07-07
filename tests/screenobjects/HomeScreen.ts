import type { ChainablePromiseElement } from 'webdriverio';

class HomeScreen {
    private readonly isIOS: boolean;

    constructor(isIOS: boolean) {
        this.isIOS = isIOS
    }

    /**
     * define elements
     */

    get btnCloseFirstPopup(): ChainablePromiseElement {
        if(this.isIOS) {
            return $('');
        } else {
            return $('//android.widget.ImageButton[@content-desc="Image description"]');
        }

    }

    get assertHomepageBeforeLogin(): ChainablePromiseElement[] {
        if (this.isIOS) {
            return [$('')];
        } else {
            return [
                $('//android.widget.TextView[@resource-id="id.co.duniagames:id/tvWelcomeUser"]'),
                $('//android.widget.ImageView[@resource-id="id.co.duniagames:id/navigation_bar_item_icon_view"]'),
                $('//android.widget.TextView[@resource-id="id.co.duniagames:id/navigation_bar_item_large_label_view"]')
            ];
        }
    }

    get iconProfile(): ChainablePromiseElement {
        if(this.isIOS) {
            return $('');
        } else {
            return $('(//android.widget.ImageView[@resource-id="id.co.duniagames:id/navigation_bar_item_icon_view"])[5]');
        }

    }


    
}

export default HomeScreen;