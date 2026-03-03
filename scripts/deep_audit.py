from playwright.sync_api import sync_playwright
import json

def deep_audit(url, viewport_width, viewport_height):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(
            viewport={'width': viewport_width, 'height': viewport_height}
        )
        page = context.new_page()
        page.goto(url, wait_until='networkidle', timeout=30000)
        page.wait_for_timeout(2000)

        result = page.evaluate("""() => {
            const vw = window.innerWidth;
            const vh = window.innerHeight;

            // All interactive elements with their sizes
            const interactives = Array.from(document.querySelectorAll('button, a, [role="button"], input, select, textarea'));
            const smallTargets = interactives
                .map(el => {
                    const rect = el.getBoundingClientRect();
                    const style = window.getComputedStyle(el);
                    return {
                        tag: el.tagName,
                        text: (el.innerText || el.textContent || el.value || '').trim().substring(0, 50),
                        width: Math.round(rect.width),
                        height: Math.round(rect.height),
                        top: Math.round(rect.top),
                        fontSize: style.fontSize,
                        inViewport: rect.top < vh && rect.bottom > 0 && rect.top >= 0,
                        tooSmall: (rect.width > 0 && rect.height > 0) && (rect.width < 44 || rect.height < 44)
                    };
                })
                .filter(el => el.width > 0 && el.height > 0 && el.inViewport);

            // Hero CTAs specifically
            const heroCTAs = Array.from(document.querySelectorAll('button, a[href]'))
                .filter(el => {
                    const rect = el.getBoundingClientRect();
                    return rect.top < vh && rect.bottom > 0 && rect.width > 80;
                })
                .slice(0, 10)
                .map(el => {
                    const rect = el.getBoundingClientRect();
                    return {
                        tag: el.tagName,
                        text: (el.innerText || '').trim().substring(0, 60),
                        width: Math.round(rect.width),
                        height: Math.round(rect.height),
                        top: Math.round(rect.top),
                        meetsMinimum: rect.height >= 44 && rect.width >= 44
                    };
                });

            // Check for popups/interstitials
            const modals = Array.from(document.querySelectorAll('[role="dialog"], .modal, [class*="modal"], [class*="popup"], [class*="overlay"]'))
                .filter(el => {
                    const style = window.getComputedStyle(el);
                    return style.display !== 'none' && style.visibility !== 'hidden';
                })
                .map(el => ({ tag: el.tagName, classes: el.className.toString().substring(0, 80) }));

            // Fixed-position elements
            const fixedElements = Array.from(document.querySelectorAll('*'))
                .filter(el => {
                    const style = window.getComputedStyle(el);
                    return style.position === 'fixed' && el.getBoundingClientRect().height > 10;
                })
                .slice(0, 10)
                .map(el => {
                    const rect = el.getBoundingClientRect();
                    return {
                        tag: el.tagName,
                        classes: el.className.toString().substring(0, 60),
                        height: Math.round(rect.height),
                        top: Math.round(rect.top),
                        bottom: Math.round(rect.bottom),
                        zIndex: window.getComputedStyle(el).zIndex
                    };
                });

            // Check font sizes of key content
            const textElements = ['h1', 'h2', 'h3', 'p', 'span'].flatMap(tag =>
                Array.from(document.querySelectorAll(tag))
                    .filter(el => {
                        const rect = el.getBoundingClientRect();
                        return rect.top < vh && rect.bottom > 0 && (el.innerText || '').trim().length > 5;
                    })
                    .slice(0, 3)
                    .map(el => ({
                        tag,
                        text: (el.innerText || '').trim().substring(0, 50),
                        fontSize: window.getComputedStyle(el).fontSize,
                        lineHeight: window.getComputedStyle(el).lineHeight
                    }))
            );

            // Check partner badge position
            const badge = document.querySelector('[class*="partner"], [class*="badge"], [class*="association"]');
            const badgeRect = badge ? badge.getBoundingClientRect() : null;

            return {
                viewport: { width: vw, height: vh },
                heroCTAs,
                smallTargets: smallTargets.filter(t => t.tooSmall),
                totalInteractives: interactives.length,
                modals,
                fixedElements,
                textElements,
                partnerBadge: badgeRect ? {
                    top: Math.round(badgeRect.top),
                    right: Math.round(badgeRect.right),
                    width: Math.round(badgeRect.width),
                    height: Math.round(badgeRect.height),
                    overlapsContent: badgeRect.top < vh * 0.7
                } : null
            };
        }""")

        browser.close()
        return result

print("=== DESKTOP AUDIT (1920x1080) ===")
desktop = deep_audit("https://www.lyspasandco.com/", 1920, 1080)
print(json.dumps(desktop, indent=2, ensure_ascii=False))

print("\n=== MOBILE AUDIT (375x812) ===")
mobile = deep_audit("https://www.lyspasandco.com/", 375, 812)
print(json.dumps(mobile, indent=2, ensure_ascii=False))
