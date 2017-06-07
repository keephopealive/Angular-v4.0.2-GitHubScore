import { GithubScorePage } from './app.po';

describe('github-score App', () => {
  let page: GithubScorePage;

  beforeEach(() => {
    page = new GithubScorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
