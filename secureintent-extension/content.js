console.log("SecureIntent Loaded");

// Get email body from Gmail
function getEmailBody() {
    const email = document.querySelector(".a3s");
    if (email) {
        return email.innerText;
    }
    return null;
}

// Inject panel into Gmail
function injectPanel(data) {

    if (document.getElementById("secureintent-panel")) return;

    const panel = document.createElement("div");
    panel.id = "secureintent-panel";

    panel.innerHTML = `
        <h3>🛡 SecureIntent Analysis</h3>
        <p><strong>Intent:</strong> ${data.intent}</p>
        <p><strong>Urgency:</strong> ${data.urgency_score}</p>
        <p><strong>Risk Level:</strong> ${data.risk_score}</p>
        <p><strong>Decision:</strong> ${data.decision}</p>
        <button id="approve-btn">Approve</button>
        <button id="reject-btn">Reject</button>
    `;

    document.body.appendChild(panel);

    document.getElementById("approve-btn").onclick = () => {
        alert("Action Approved");
    };

    document.getElementById("reject-btn").onclick = () => {
        alert("Action Rejected");
    };
}

// Send email to background
function analyzeEmail() {
    const content = getEmailBody();
    if (content) {
        chrome.runtime.sendMessage({
            type: "ANALYZE_EMAIL",
            email: content
        });
    }
}

// Listen for response
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "ANALYSIS_RESULT") {
        injectPanel(message.data);
    }
});

// Check every 4 seconds
setInterval(analyzeEmail, 4000);
