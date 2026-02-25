chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.type === "ANALYZE_EMAIL") {

        const emailText = message.email.toLowerCase();

        let risk = "Low";
        let decision = "Automated";
        let intent = "General Communication";

        if (emailText.includes("urgent") || emailText.includes("transfer")) {
            risk = "High";
            decision = "Require Approval";
            intent = "Money Transfer Request";
        }

        if (emailText.includes("meeting")) {
            intent = "Schedule Meeting";
            risk = "Medium";
            decision = "Require Approval";
        }

        const mockResponse = {
            intent: intent,
            urgency_score: Math.random().toFixed(2),
            risk_score: risk,
            decision: decision
        };

        chrome.tabs.sendMessage(sender.tab.id, {
            type: "ANALYSIS_RESULT",
            data: mockResponse
        });
    }
});
