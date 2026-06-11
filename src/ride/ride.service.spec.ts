import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RideService } from './ride.service';
import { Ride } from './entity/ride.entity';

describe('RideService', () => {
  let service: RideService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RideService,
        {
          provide: getRepositoryToken(Ride),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<RideService>(RideService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
