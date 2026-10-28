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
app blocker,pomodoro,screen time,homework,exam,revision,distraction,productivity,friends,school
```

95 characters. "friends" replaced "college" for study circles. Revisit after a month of App Store Connect search data and swap out terms that bring no impressions.

## Promotional text (170, editable without review)

```
New: study circles. Lock in with friends, join their sessions and share a weekly goal. Pick the apps that pull you away, and they stay closed until you're done.
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

STUDY CIRCLES
Lock in with friends. Make a circle for your study group, or just one friend, and share the invite link in your group chat.
• See who's locked in right now, and until when
• Join a friend's session in one tap and finish together
• Nudge a friend who isn't studying
• Share one weekly goal and a weekly group session
• A Circles widget with live countdowns
Circles are free to join and make, and use your own iCloud: no Lockdown account.

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

Review this before submitting a build with study circles. The app has no analytics, third-party SDKs, Lockdown accounts or Lockdown server, and the developer never receives any data. Circles do sync a name, session times, weekly minutes, streaks and (optionally) the intention to other users through CloudKit sharing in the user's iCloud. Check that against Apple's definition of "collect" in App Store Connect's App Privacy help: if you decide it counts, declare it there (likely Name and Other User Content, not linked to tracking) and update the Privacy Policy's "Data Not Collected" line to match.

## Category

Primary: **Productivity**. Secondary: **Education**.

## Screenshots

The bezel-free source captures (1206 × 2622, iPhone 18 Pro simulator, 9:41 status bar) can be regenerated with the app's `-demoReady`, `-demoHistory` and `-demoSession` launch arguments. For the App Store, upload frameless screenshots at the 6.9" size (1320 × 2868 or 1290 × 2796); Apple adds its own device frame.

## After launch

1. Paste the App Store link into `APP_STORE_URL` in `assets/js/site.js`. Every download button switches from "Coming soon" to a live link.
2. Uncomment the `apple-itunes-app` meta tag in `index.html` and add the app ID to show Safari's Smart App Banner.
3. Add `"offers"` and `"aggregateRating"` (once you have ratings) to the `MobileApplication` JSON-LD in `index.html`.
4. Submit `sitemap.xml` in Google Search Console and Bing Webmaster Tools.
