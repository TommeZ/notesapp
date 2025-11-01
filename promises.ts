// https://www.codecademy.com/resources/docs/typescript/promises

export const myPromise: Promise<string> = new Promise((resolve, reject) => {});

myPromise
  .then((value) => {
    console.log("Promise resolved with value: " + value);
  })
  .catch((error) => {
    console.error("Promise rejected with error: " + error);
  });

export async function myAsyncFunction() {
  try {
    const value = await myPromise;
  } catch (error) {
    console.error("Promise rejected with error: " + error);
  }
}
