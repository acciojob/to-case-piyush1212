function toCase(text) {
    if (!text) {
        return '-';
    }
    
    const lower = text.toLowerCase();
    const upper = text.toUpperCase();
    
    return `${lower}-${upper}`;
}

const text = prompt("Enter text:");
alert(toCase(text));
