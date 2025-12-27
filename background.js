chrome.action.onClicked.addListener(() => {
    chrome.sessions.getRecentlyClosed({ maxResults: 1 }, (sessions) => {
        if (sessions.length > 0) {
            chrome.sessions.restore(sessions[0].sessionId);
        }
    });
});



