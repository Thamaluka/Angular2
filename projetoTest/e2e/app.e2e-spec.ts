import { ProjetoTestPage } from './app.po';

describe('projeto-test App', () => {
  let page: ProjetoTestPage;

  beforeEach(() => {
    page = new ProjetoTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
