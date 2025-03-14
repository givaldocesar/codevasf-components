'use client'
class PopupEvent extends CustomEvent {
    static type = 'show-popup';
    constructor(popup) {
        super('show-popup', {
            detail: popup,
            bubbles: true
        });
    }
}

export { PopupEvent as default };
//# sourceMappingURL=PopupEvent.js.map
