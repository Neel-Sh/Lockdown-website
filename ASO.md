# App Store listing (ASO)

Copy for App Store Connect, written to match the website so search engines and the App Store tell the same story. Character counts are checked against Apple's limits.

## Name and subtitle

| Field | Limit | Text | Count |
|---|---|---|---|
| App name | 30 | `Lockdown: Study Focus Timer` | 27 |
| Subtitle | 30 | `Block distracting apps & study` | 30 |

The name and subtitle are the most heavily weighted search fields. Together they cover "lockdown", "study", "focus", "timer", "block", "apps" and "distracting".

## Keywords

Limit 100. Comma-separated, no spaces, and no words already in the name or subtitle (Apple indexes those already).

```
app blocker,pomodoro,screen time,homework,exam,revision,distraction,productivity,college,school
```

95 characters. Revisit after a month of App Store Connect search data and swap out terms that bring no impressions.

## Promotional text (170, editable without review)

```
Pick the apps that pull you away, say what you're working on, and lock in. They stay closed until your session ends. No account. No tracking.
```

## Description

```
Make time to study.

Lockdown is a calm study timer that closes the apps that pull you away. Say what you're working on, pick how long, and tap Lock in. Your chosen apps stay closed until the session ends, then unlock on their own, right on time.

THREE TAPS TO FOCUS
• Say what you're working on: Biology, an essay, a problem set
• Pick 25, 45 or 60 minutes, or anything from 15 minutes to 4 hours
• Lock in. Lockdown remembers everything for next time

DURING A SESSION
• A large, steady countdown, or hide it and put your phone down
• Live Activity on the Lock Screen and in the Dynamic Island
• Opening a blocked app shows a calm reminder of what you set the time aside for
• Apps unlock on time, even if Lockdown is closed
• A notification when your session ends

STRICT SESSIONS
Hide the End button when you need extra resolve. It's a promise to yourself, not a lock: turning off Lockdown in Settings › Screen Time always ends a session.

HISTORY
See the time you protected this week, every session, what it was for, and whether you finished.

PRIVATE BY DESIGN
• No account, no sign-up
• No analytics, no ads, no tracking
• Apple keeps the apps you choose private, even from Lockdown
• Your history stays on your iPhone

Built on Apple's Screen Time frameworks. Supports Dynamic Type, VoiceOver, Reduce Motion, Reduce Transparency and Increase Contrast.

Privacy Policy: https://neel-sh.github.io/Lockdown-website/privacy/
Terms of Service: https://neel-sh.github.io/Lockdown-website/terms/
```

## URLs for App Store Connect

| Field | URL |
|---|---|
| Marketing URL | https://neel-sh.github.io/Lockdown-website/ |
| Support URL | https://neel-sh.github.io/Lockdown-website/support/ |
| Privacy Policy URL | https://neel-sh.github.io/Lockdown-website/privacy/ |
| EULA | Standard Apple EULA, or https://neel-sh.github.io/Lockdown-website/terms/ |

## App Privacy ("nutrition label")

Select **Data Not Collected**. The app has no networking, analytics, third-party SDKs or accounts, which matches the Privacy Policy.

## Category

Primary: **Productivity**. Secondary: **Education**.

## Screenshots

The bezel-free source captures (1206 × 2622, iPhone 18 Pro simulator, 9:41 status bar) can be regenerated with the app's `-demoReady`, `-demoHistory` and `-demoSession` launch arguments. For the App Store, upload frameless screenshots at the 6.9" size (1320 × 2868 or 1290 × 2796); Apple adds its own device frame.

## After launch

1. Paste the App Store link into `APP_STORE_URL` in `assets/js/site.js`. Every download button switches from "Coming soon" to a live link.
2. Uncomment the `apple-itunes-app` meta tag in `index.html` and add the app ID to show Safari's Smart App Banner.
3. Add `"offers"` and `"aggregateRating"` (once you have ratings) to the `MobileApplication` JSON-LD in `index.html`.
4. Submit `sitemap.xml` in Google Search Console and Bing Webmaster Tools.
