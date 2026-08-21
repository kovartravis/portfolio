const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function run() {
  const screenshotsDir = '/Users/Travis/.gemini/antigravity-cli/brain/9174cb0e-7896-4e8a-87c6-d8d3547ff4d0/screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  
  // 1. Desktop Viewport (1440 x 900)
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // 1a. Desktop Hero (Above the fold)
  await page.screenshot({
    path: path.join(screenshotsDir, '01_desktop_hero.png'),
    fullPage: false,
  });
  console.log('Saved 01_desktop_hero.png');

  // Scroll down smoothly to reveal all sections
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 30);
    });
  });
  await page.waitForTimeout(600);

  // 1b. Desktop Full Page
  await page.screenshot({
    path: path.join(screenshotsDir, '02_desktop_fullpage.png'),
    fullPage: true,
  });
  console.log('Saved 02_desktop_fullpage.png');

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);

  // 1c. Interact with Terminal Demo (Click "2. Search Agent Memory")
  const searchBtn = page.locator('button:has-text("2. Search Agent Memory")');
  if (await searchBtn.count() > 0) {
    await searchBtn.click();
    await page.waitForTimeout(400);
  }
  
  // Click "3. Git-Diffable Memory"
  const diffBtn = page.locator('button:has-text("3. Git-Diffable Memory")');
  if (await diffBtn.count() > 0) {
    await diffBtn.click();
    await page.waitForTimeout(400);
  }

  await page.screenshot({
    path: path.join(screenshotsDir, '03_desktop_terminal_interaction.png'),
    fullPage: false,
  });
  console.log('Saved 03_desktop_terminal_interaction.png');

  // 1d. Open Resume Modal
  const resumeBtn = page.locator('button:has-text("Resume & PDF")').first();
  if (await resumeBtn.count() > 0) {
    await resumeBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({
      path: path.join(screenshotsDir, '04_resume_modal.png'),
      fullPage: false,
    });
    console.log('Saved 04_resume_modal.png');

    // Close modal
    const closeBtn = page.locator('button:has(svg.lucide-x)').first();
    if (await closeBtn.count() > 0) {
      await closeBtn.click();
      await page.waitForTimeout(300);
    }
  }

  // 2. Mobile Viewport (iPhone 14 - 390 x 844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(500);

  await mobilePage.screenshot({
    path: path.join(screenshotsDir, '05_mobile_hero.png'),
    fullPage: false,
  });
  console.log('Saved 05_mobile_hero.png');

  // Scroll down smoothly on mobile
  await mobilePage.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 40);
    });
  });
  await mobilePage.waitForTimeout(400);

  await mobilePage.screenshot({
    path: path.join(screenshotsDir, '06_mobile_fullpage.png'),
    fullPage: true,
  });
  console.log('Saved 06_mobile_fullpage.png');

  // 3. Tablet Viewport (iPad - 768 x 1024)
  const tabletContext = await browser.newContext({
    viewport: { width: 768, height: 1024 },
    deviceScaleFactor: 2,
  });
  const tabletPage = await tabletContext.newPage();
  await tabletPage.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await tabletPage.waitForTimeout(500);

  await tabletPage.screenshot({
    path: path.join(screenshotsDir, '07_tablet_hero.png'),
    fullPage: false,
  });
  console.log('Saved 07_tablet_hero.png');

  await browser.close();
  console.log('All screenshots captured successfully!');
}

run().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
