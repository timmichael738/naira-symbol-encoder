(function () {
    // Function to swap placeholder texts with the Naira symbol
    function encodeNairaSymbol(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            // Replaces all instances of &naira;, [naira], or {{naira}} globally with the Naira symbol
            const newText = node.nodeValue.replace(/&naira;|\[naira\]|\{\{naira\}\}/gi, '₦');
            if (newText !== node.nodeValue) {
                node.nodeValue = newText;
            }
        } else {
            for (let child of node.childNodes) {
                encodeNairaSymbol(child);
            }
        }

    }

    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            mutation.addedNodes.forEach((node) => {
                encodeNairaSymbol(node);
            });
        }
    });

    // Starts running as soon as the DOM begins loading
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            encodeNairaSymbol(document.body);
            observer.observe(document.body, { childList: true, subtree: true });
        });
    } else {
        encodeNairaSymbol(document.body);
        observer.observe(document.body, { childList: true, subtree: true });
    }
})();