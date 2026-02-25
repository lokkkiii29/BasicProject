{
  "manifest_version": 3,
  "name": "SecureIntent Assistant",
  "version": "1.0",
  "description": "Zero-Trust Email Risk Analyzer",
  "permissions": ["activeTab", "scripting"],
  "host_permissions": ["http://localhost:8000/*"],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["https://mail.google.com/*"],
      "js": ["content.js"],
      "css": ["styles.css"]
    }
  ]
}
