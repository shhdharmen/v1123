import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { MyToasterLibComponent } from './my-toaster-lib.component';

describe('MyToasterLibComponent', () => {
  let spectator: Spectator<MyToasterLibComponent>;
  const createComponent = createComponentFactory(MyToasterLibComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
