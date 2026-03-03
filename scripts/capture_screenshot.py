from playwright.sync_api import sync_playwright
import json
import sys

def capture(url, output_path, viewport_width=1920, viewport_height=1080, device_name=None):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        if device_name:
            device = p.devices[device_name]
            context = browser.new_context(**device)
        else:
            context = browser.new_context(
                viewport={'width': viewport_width, 'height': viewport_height}
            )
        page = context.new_page()
        page.goto(url, wait_until='networkidle', timeout=30000)
        page.wait_for_timeout(2000)
        page.screenshot(path=output_path, full_page=False)
        browser.close()

def capture_with_metrics(url, output_path, viewport_width=1920, viewport_height=1080):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(
            viewport={'width': viewport_width, 'height': viewport_height}
        )
        page = context.new_page()
        page.goto(url, wait_until='networkidle', timeout=30000)
        page.wait_for_timeout(2000)

        metrics = page.evaluate("""() => {
            const body = document.body;
            const docEl = document.documentElement;
            const scrollWidth = Math.max(body.scrollWidth, docEl.scrollWidth);
            const viewportWidth = window.innerWidth;
            const hasHorizontalScroll = scrollWidth > viewportWidth;

            // Check for viewport meta
            const viewportMeta = document.querySelector('meta[name="viewport"]');
            const viewportContent = viewportMeta ? viewportMeta.content : null;

            // Find H1
            const h1 = document.querySelector('h1');
            const h1Text = h1 ? h1.innerText.trim().substring(0, 120) : null;
            const h1Rect = h1 ? h1.getBoundingClientRect() : null;
            const h1AboveFold = h1Rect ? h1Rect.top < window.innerHeight : false;

            // Find primary CTA buttons
            const buttons = Array.from(document.querySelectorAll('button, a[href]'));
            const ctaButtons = buttons.filter(b => {
                const text = b.innerText || b.textContent || '';
                return text.match(/contact|cta|whatsapp|consulta|gratis|comenzar|empezar|talk|start|schedule/i);
            }).slice(0, 3).map(b => {
                const rect = b.getBoundingClientRect();
                return {
                    text: (b.innerText || b.textContent || '').trim().substring(0, 60),
                    width: Math.round(rect.width),
                    height: Math.round(rect.height),
                    top: Math.round(rect.top),
                    visible: rect.top < window.innerHeight && rect.bottom > 0
                };
            });

            // Body font size
            const bodyStyle = window.getComputedStyle(document.body);
            const bodyFontSize = bodyStyle.fontSize;

            // Fixed-width elements check
            const allElements = Array.from(document.querySelectorAll('*'));
            const overflowingElements = allElements.filter(el => {
                const rect = el.getBoundingClientRect();
                return rect.right > viewportWidth + 10 && rect.width > 100;
            }).slice(0, 5).map(el => ({
                tag: el.tagName,
                class: el.className.toString().substring(0, 80),
                right: Math.round(el.getBoundingClientRect().right)
            }));

            // Nav check
            const nav = document.querySelector('nav, [role="navigation"], header');
            const navRect = nav ? nav.getBoundingClientRect() : null;

            return {
                scrollWidth,
                viewportWidth,
                hasHorizontalScroll,
                viewportContent,
                h1Text,
                h1AboveFold,
                h1Top: h1Rect ? Math.round(h1Rect.top) : null,
                ctaButtons,
                bodyFontSize,
                overflowingElements,
                navPresent: !!nav,
                navHeight: navRect ? Math.round(navRect.height) : null,
                pageTitle: document.title.substring(0, 120)
            };
        }""")

        page.screenshot(path=output_path, full_page=False)
        browser.close()
        return metrics

if __name__ == "__main__":
    url = sys.argv[1] if len(sys.argv) > 1 else "https://www.lyspasandco.com/"
    screenshots_dir = "/Users/maxidelfino/Downloads/lyspas-co/screenshots"

    print("Capturing desktop (1920x1080)...")
    desktop_metrics = capture_with_metrics(url, f"{screenshots_dir}/desktop_1920.png", 1920, 1080)
    print(json.dumps(desktop_metrics, indent=2, ensure_ascii=False))

    print("\nCapturing laptop (1366x768)...")
    capture(url, f"{screenshots_dir}/laptop_1366.png", 1366, 768)

    print("\nCapturing tablet (768x1024)...")
    capture(url, f"{screenshots_dir}/tablet_768.png", 768, 1024)

    print("\nCapturing mobile (375x812)...")
    mobile_metrics = capture_with_metrics(url, f"{screenshots_dir}/mobile_375.png", 375, 812)
    print(json.dumps(mobile_metrics, indent=2, ensure_ascii=False))

    print("\nAll screenshots saved to:", screenshots_dir)
