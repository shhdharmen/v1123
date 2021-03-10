import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { MyToasterLibService } from './my-toaster-lib.service';

describe('MyToasterLibService', () => {
  let spectator: SpectatorService<MyToasterLibService>;
  const createService = createServiceFactory(MyToasterLibService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
