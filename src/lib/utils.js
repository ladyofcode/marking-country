export function killScrollTriggers(triggers) {
    triggers.forEach(trigger => {
        if (trigger.scrollTrigger) {
            trigger.scrollTrigger.kill();
        }
        trigger.kill();
    });
}
