import { newE2EPage } from '@stencil/core/testing';

describe('d2-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<d2-button></d2-button>');
    const element = await page.find('d2-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<d2-button></d2-button>');
    const component = await page.find('d2-button');
    const element = await page.find('d2-button >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
