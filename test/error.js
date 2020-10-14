const expect = require('chai').expect;
const Error = require('../dist').default;

describe('Error test', () => {
  it('Error.make', () => {
    let ret = false;

    try {
      // Wrong JSON value
      JSON.parse('test');
    } catch (error) {
      const err = Error.make(error);

      if ((err.result != null)
        && (err.code != null)
        && (err.name != null)
        && (err.message != null)) {
        ret = true;
      }
    }

    expect(ret).to.equal(true);
  });

  it('Error.make without field', () => {
    let ret = false;
    const fail = Error.make({});

    if ((fail.result != null)
      && (fail.code != null)
      && (fail.name != null)
      && (fail.name === 'ERROR')
      && (fail.message === 'ERROR')) {
      ret = true;
    }

    expect(ret).to.equal(true);
  });

  it('Error.throwError', () => {
    let ret = false;

    try {
      Error.throwError({
        result: 'error',
        code: -1,
        name: 'ERROR',
        message: 'Unknown Error',
      });
    } catch (error) {
      if ((error.result != null)
        && (error.code != null)
        && (error.name != null)
        && (error.message != null)) {
        ret = true;
      }
    }

    expect(ret).to.equal(true);
  });

  it('Error.throwError without field', () => {
    let ret = false;

    try {
      Error.throwError({});
    } catch (error) {
      if ((error.result != null)
        && (error.code != null)
        && (error.name != null)
        && (error.message != null)) {
        ret = true;
      }
    }

    expect(ret).to.equal(true);
  });

  it('Error.makeFail', () => {
    let ret = false;
    const fail = Error.makeFail('ERROR', 'Unknown Error', 400);

    if ((fail.result != null)
      && (fail.code != null)
      && (fail.name != null)
      && (fail.message != null)) {
      ret = true;
    }

    expect(ret).to.equal(true);
  });

  it('Error.makeFail without field', () => {
    let ret = false;
    const fail = Error.makeFail('ERROR');

    if ((fail.result != null)
      && (fail.code != null)
      && (fail.name != null)
      && (fail.message != null)) {
      ret = true;
    }

    expect(ret).to.equal(true);
  });

  it('Error.throwFail', () => {
    let ret = false;

    try {
      Error.throwFail('ERROR', 'Unknown Error', 400);
    } catch (error) {
      if ((error.result != null)
        && (error.code != null)
        && (error.name != null)
        && (error.message != null)) {
        ret = true;
      }
    }

    expect(ret).to.equal(true);
  });

  it('Error.throwFail without field', () => {
    let ret = false;

    try {
      Error.throwFail('ERROR');
    } catch (error) {
      if ((error.result != null)
        && (error.code != null)
        && (error.name != null)
        && (error.message != null)) {
        ret = true;
      }
    }

    expect(ret).to.equal(true);
  });

  it('toString', () => {
    const fail = Error.make({
      code: -1,
      message: 'Unknown Error',
    });

    const str = fail.prototype.toString();

    expect(str).to.equal('[error](-1) ERROR: Unknown Error');
  });
});
