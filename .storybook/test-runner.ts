import type { TestRunnerConfig } from "@storybook/test-runner";
import { toMatchImageSnapshot } from 'jest-image-snapshot';

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;


const config: TestRunnerConfig = {
    setup() {
        expect.extend({ toMatchImageSnapshot });
    },
    async postRender(page, context) {
        // DOM Snapshot
        const elementHandler = await page.$('#storybook-root');
        if (elementHandler) {
            const innerHTML = await elementHandler.innerHTML();
            expect(innerHTML).toMatchSnapshot();
        }
        else throw "cannot find storybook DOM root to take DOM screenshot"
        // Image Snapshop
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            customSnapshotsDir,
            customSnapshotIdentifier: context.id,
            comparisonMethod: 'ssim',
            failureThresholdType: 'percent',
            failureThreshold: 0.002,
        });
    },
    tags: {
        skip: ["intermittent-test-success"],
    },
};

export default config;
