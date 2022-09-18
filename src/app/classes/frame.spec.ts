import { Frame, IFrame } from './frame';

describe('Frame', () => {
  let frame: IFrame;

  beforeEach(() => {
    frame = new Frame();
  });

  it('should create an instance', () => {
    expect(frame).toBeTruthy();
  });

  it('should not be the last frame', () => {
    expect(frame.isLastFrame).toBeFalse();
  });

  it('should be a strike', () => {
    frame.roll(10);

    expect(frame.isStrike).toBeTrue();
  });

  it('should not be a strike without roll', () => {
    expect(frame.isStrike).toBeFalse();
  });

  it('should not be a strike with one roll', () => {
    frame.roll(6);

    expect(frame.isStrike).toBeFalse();
  });

  it('should not be a strike with two rolls', () => {
    frame.roll(6);
    frame.roll(0);

    expect(frame.isStrike).toBeFalse();
  });

  it('should be a spare', () => {
    frame.roll(3);
    frame.roll(7);

    expect(frame.isSpare).toBeTrue();
  });

  it('should not be a spare without roll', () => {
    expect(frame.isSpare).toBeFalse();
  });

  it('should not be a spare with one roll', () => {
    frame.roll(3);

    expect(frame.isSpare).toBeFalse();
  });

  it('should not be a spare with two rolls', () => {
    frame.roll(3);
    frame.roll(4);

    expect(frame.isSpare).toBeFalse();
  });

  it('should be a complete ', () => {
    frame.roll(0);
    frame.roll(0);

    expect(frame.isComplete).toBeTrue();
  });

  it('should be a incomplete', () => {
    expect(frame.isComplete).toBeFalse();
  });

  it('correctly saves the knocked down pins', () => {
    frame.roll(6);
    frame.roll(2);
    expect(frame.rolls[0]).toEqual(6);
    expect(frame.rolls[1]).toEqual(2);
  });

});

describe('Last frame', () => {
  let frame: IFrame;

  beforeEach(() => {
    frame = new Frame(true);
  });

  it('should create an instance', () => {
    expect(frame).toBeTruthy();
  });

  it('should be the last frame', () => {
    expect(frame.isLastFrame).toBeTrue();
  });

  it('should be a strike', () => {
    frame.roll(10);

    expect(frame.isStrike).toBeTrue();
  });

  it('should not be a strike without roll', () => {
    expect(frame.isStrike).toBeFalse();
  });

  it('should not be a strike with one roll', () => {
    frame.roll(6);

    expect(frame.isStrike).toBeFalse();
  });

  it('should not be a strike with two rolls', () => {
    frame.roll(6);
    frame.roll(0);

    expect(frame.isStrike).toBeFalse();
  });

  it('should be a spare', () => {
    frame.roll(3);
    frame.roll(7);

    expect(frame.isSpare).toBeTrue();
  });

  it('should not be a spare without roll', () => {
    expect(frame.isSpare).toBeFalse();
  });

  it('should not be a spare with one roll', () => {
    frame.roll(3);

    expect(frame.isSpare).toBeFalse();
  });

  it('should not be a spare with two rolls', () => {
    frame.roll(3);
    frame.roll(4);

    expect(frame.isSpare).toBeFalse();
  });

  it('should be a complete with two rolls', () => {
    frame.roll(0);
    frame.roll(0);

    expect(frame.isComplete).toBeTrue();
  });

  it('should be a complete with three rolls', () => {
    frame.roll(6);
    frame.roll(4);
    frame.roll(1);

    expect(frame.isComplete).toBeTrue();
  });

  it('should be a incomplete', () => {
    expect(frame.isComplete).toBeFalse();
  });

  it('correctly saves the knocked down pins', () => {
    frame.roll(6);
    frame.roll(4);
    frame.roll(2);

    expect(frame.rolls[0]).toEqual(6);
    expect(frame.rolls[1]).toEqual(4);
    expect(frame.rolls[2]).toEqual(2);
  });

});
