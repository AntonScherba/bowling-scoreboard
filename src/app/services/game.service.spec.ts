import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('total score should be 0 without rolls', () => {
    const totalScore = service.totalScore();
    expect(totalScore).toEqual(0);
  });

  it('total score at the end of the game should be 0', () => {
    rollMany(20, 0);
    const totalScore = service.totalScore();
    expect(totalScore).toEqual(0);
  });

  it('total score at the end of the game should be 40', () => {
    rollMany(20, 2);
    const totalScore = service.totalScore();
    expect(totalScore).toEqual(40);
  });

  it('total score at the end of the game should be 150', () => {
    rollMany(21, 5);
    const totalScore = service.totalScore();
    expect(totalScore).toEqual(150);
  });

  it('total score at the end of the game should be 300', () => {
    rollMany(12, 10);
    const totalScore = service.totalScore();

    expect(totalScore).toEqual(300);
  });

  it('counts a spare with correct bonus', () => {
    service.roll(1);
    service.roll(9);
    service.roll(5);
    const totalScore = service.totalScore();

    expect(totalScore).toEqual(15);
  });

  it('counts a strike with correct bonus', () => {
    service.roll(10);
    service.roll(1);
    service.roll(1);
    const totalScore = service.totalScore();

    expect(totalScore).toEqual(14);
  });

  function rollMany(rolls: number, pins: number) {
    for (let i = 0; i < rolls; i++) {
      service.roll(pins);
    }
  }
});
