class PopupEvent extends CustomEvent<React.ReactNode> {
    static type: string = 'show-popup';

    constructor(popup: React.ReactNode){
        super('show-popup', {
            detail: popup,
            bubbles: true
        });
    }
}

export default PopupEvent;