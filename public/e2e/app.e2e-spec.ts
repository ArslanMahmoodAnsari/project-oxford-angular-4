import { MedicalHistoryPage } from './app.po';

describe('medical-history App', () => {
  let page: MedicalHistoryPage;

  beforeEach(() => {
    page = new MedicalHistoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
