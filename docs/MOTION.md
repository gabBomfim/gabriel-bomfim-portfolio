# Motion review

## Reference inspection

Inspected https://gabrielthecode.com/ in real headless Chrome at 1440 x 1000 and
390 x 844 on November 4, 2026. Captures are in `output/review/reference-motion-*`.

Observed: progressive headline words, staggered hero metadata, a fixed navigation
header, a phone visual, and selectable architecture modules. The first mobile
capture was taken mid-transition; a later capture followed a settling interval.
The architecture section was scrolled into view and its ten module buttons were
inspected. No loading screen was observed during these visits.

Follow-up visits scrolled through work, experience, and contact. The career section
uses a visible Logcat heading and dated entries. Contact exposes email-copy and CV
actions. Running animation samples included 900 ms headline words, 850 ms line
reveals with a cubic-bezier easing, and repeating phone/device movement. These are
samples, not a complete reconstruction of the timing system. A direct hover test
on an architecture module timed out because the button was not visible to the
automation; its dependency-highlighting behavior remains unverified.

Exact easing, hover dependency behavior, pinning, clipboard feedback, and parallax
were not established by these observations. They are not claims about the reference.

## Original implementation

- Hero: line-based name reveal with staggered supporting content; longest sequence
  finishes in about one second. No preload gate or loading screen.
- Scroll: IntersectionObserver reveals, native scrolling, reading progress, and
  active-section navigation. ResizeObserver caches section offsets; one animation
  frame per scroll update paints progress, rather than reading every element on
  every scroll event.
- Work: grouped reveals, project identity underline, link focus treatments, and
  bounded hover movement. No fabricated screenshots or application availability.
- Career: a scroll-progress rail, event labels, and a highlighted current role.
  Labels are presentation metaphors, not extra employment records.
- Architecture: a conceptual full-stack system, not a Redbelt production diagram.
  Buttons share hover, focus, and click selection. Only adjacent relationships are
  highlighted. Flow dashes animate while the map is hovered or focused. On mobile,
  the nodes become a two-column selection grid with the same explanations.
- Stack: category changes animate a reserved panel without moving the tab controls.
- Contact: clipboard success/failure and download-request feedback. Download feedback
  does not claim that a file finished downloading.
- Gallery: previous/next scrolling, modal entrance, Escape, focus confinement, and
  focus restoration. Real screenshots remain lazy-loaded.

No motion dependencies were added. There is no scroll hijacking, pinned content,
perpetual page-wide animation, or pointer-tracking render loop.

## Accessibility and maintenance

`prefers-reduced-motion` disables entrance, flow, and hover animations. A live change
to this preference reveals any queued content immediately. Native scrolling and
keyboard interactions remain available. Without JavaScript, server-rendered content
is visible; scroll reveals are enabled progressively after mounting.

The motion lifecycle is in `src/hooks/use-portfolio-motion.ts`, architecture content
and interactions in `src/components/architecture.tsx`, and durations in
`src/app/globals.css`. EN-US remains the initial language, with PT-BR translations.

## Local validation

ESLint, TypeScript and the production static build passed. Chrome automation checked
architecture hover/focus/click selection, active navigation, clipboard contents,
resume download, gallery scrolling and focus restoration, mobile Escape behavior,
EN/PT switching, and live reduced-motion changes. No page errors were reported.
Portuguese layouts were checked for horizontal overflow at 320, 390, 768 and
1440 px. Desktop/mobile captures are in `output/review/motion-*`.

The final build reports a 23.6 kB page and 126 kB first-load JavaScript. These are
build measurements, not a Lighthouse score or a claim about real-user load time.
